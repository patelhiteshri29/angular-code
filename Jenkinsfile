@Library('apex-cicd-library@develop') _

// pod label
String label = "pod-${UUID.randomUUID().toString()}-ui"

// Jenkins workspace
String workingdir = '/home/jenkins'

// Image for build, sonar added later if needed.
Map images = [jnlp:"fpapex-docker-dev.docker.fis.dev/base-images/base-jenkins-client:1.0.4", jnlpMemLmt:"2048Mi", jnlpCpuLmt:"1000m"]

Map nodeImage = [node:"fpapex-docker-dev.docker.fis.dev/node-with-chrome:0.4", nodeMemLmt:"8192Mi", nodeCpuLmt:"3000m"]
Map sonarImg = [sonar:"fpapex-docker-dev.docker.fis.dev/sonarsource/sonar-scanner-cli:4", sonarMemLmt:"6144Mi", sonarCpuLmt:"2000m"]
Map occlientImg = [occlient:"fpapex-docker-dev.docker.fis.dev/base-images/occlient390:latest"]
Map helmImg = [helm:"fpapex-docker-dev.docker.fis.dev/apex/helm:3.7.1"]

Map props = null

String clustername = 'apex'
String namespace = clustername

String buildNotificationEmails = null

boolean isRunDockerBuild = false
boolean isDeploy = false
boolean isSonarScan = false
boolean isUpdateRally = false

String artifactName = 'apex-ui.tgz'

String helmchartName = 'apex-ui-build'

String repoName = 'apex-ui'
String versionNumber = null
List versionParts = []
String queryVersion = null
Map branchInfo = [:]
String stashName = "${repoName}-${label}"

try {
  timestamps {
    if (env.BRANCH_NAME =~ /^(hotfix)/) {
      slaveTemplate = new PodTemplates(clustername, namespace, label, images, workingdir, this, [])
      slaveTemplate.BuilderTemplate {
        node(slaveTemplate.podlabel) {
          stage ('Request Build Permission') {
            waitForApproval {
              [
                _repoName = repoName
              ]
            }
          }
        }
      }
    }

    images << nodeImage

    slaveTemplate = new PodTemplates(clustername, namespace, label, images, workingdir, this, [])
    slaveTemplate.BuilderTemplate {
      node(slaveTemplate.podlabel) {
        stage ('checkout') {
          checkout scm
        } // End stage checkout

        stage ('load-properties') {
          (props) = loadBuildProperties {}

          (branchType, basedOnType, basedOnName) = getBranchInfo {}
          branchInfo = ['branchType':branchType, 'basedOnType':basedOnType, 'basedOnName':basedOnName]

          isUpdateRally = branchInfo.branchType in ['develop','release','master']
          isRunDockerBuild = props.dockerbuild.toBoolean()
          isDeploy = props.deploy.toBoolean()
          isSonarScan = props.sonar.toBoolean()

          buildNotificationEmails = props.buildnotificationemails
        } // End stage load-properties

        if (isUpdateRally) {
          updateRallyMilestone {}
        }

        (artifactName, versionNumber, queryVersion, versionParts) = buildProject {
          [
            _props = props,
            _artifactName = artifactName,
            _artifactGroup = repoName,
            _stashName = stashName
          ]
        }
      }
    }

    images -= nodeImage

    if (isSonarScan) {
      images << sonarImg

      slaveTemplate = new PodTemplates(clustername, namespace, label, images, workingdir, this, [])
      slaveTemplate.BuilderTemplate {
        node(slaveTemplate.podlabel) {
          sonarScan {
            [
              _props = props,
              _queryVersion = queryVersion,
              _stashName = stashName
            ]
          }
        }
      }

      images -= sonarImg
    }

    lock(isRunDockerBuild ? helmchartName : label) {
      images << helmImg

      if (isRunDockerBuild) {
        images << occlientImg
      }

      slaveTemplate = new PodTemplates(clustername, namespace, label, images, workingdir, this, [])
      slaveTemplate.BuilderTemplate {
        node(slaveTemplate.podlabel) {
          helmChartBuild {
            [
              _props = props,
              _namespace = namespace,
              _versionNumber = versionNumber,
              _stashName = stashName,
              _dryRun = !isRunDockerBuild
            ]
          }

          if (isRunDockerBuild) {
            stage ('docker-build') {
              milestone ()
              sh 'cp apex-ui-*.tgz docker'
              ocExecuteBuilds([(helmchartName.toString()):'docker'])
            }

            sysdigScan {
              [
                _props = props
              ]
            }

            images -= occlientImg
          }
        }
      } // End BuilderTemplate
    } // End lock

    if (isDeploy) {
      slaveTemplate = new PodTemplates(clustername, namespace, label, images, workingdir, this, [])
      slaveTemplate.BuilderTemplate {
        node(slaveTemplate.podlabel) {
          // Run Application deployment
          stage ('application-deploy') {
             milestone()
            /**** This stage can go away once application is dockerized and deployed in ocp ***/
            serverDeploy {
              [
                _props = props,
                _artifacts = [[name: artifactName]],
                _stashName = stashName
              ]
            }

            // Run Application deployment to OpenShift
            helmDeploy {
              [
                _props = props,
                _version = '0.1.0'
              ]
            }
          } // End application-deploy
        }
      } // End BuilderTemplate

      images -= helmImg
    }
  } // End timestamps
} catch (e) {
   currentBuild.result = 'FAILED'
   echo 'BUILD FAILED'
   throw e
} finally {
  buildNotification {
    emailId = buildNotificationEmails
  }
  if (currentBuild.result == null) {
    currentBuild.result = 'SUCCESS'
  }
  if (branchInfo.branchType in ['release','hotfix','master']) {
    String completionMessage = "Version `${versionNumber}` has been built by ${repoName}@${env.BRANCH_NAME}."
    msTeams {
      [
        _message = completionMessage
      ]
    }
  }
}
