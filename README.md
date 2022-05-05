# PaymentsOne UI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0 using [Nrwl Nx](https://nrwl.io/nx). It is now upgraded to Angular 12 including Angular CLI.

# Getting Started

These instructions will get a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

- [NodeJS & NPM](https://nodejs.org/en/download/) - Use the latest LTS version (currently [v14.17.4](https://nodejs.org/dist/v14.17.4/node-v14.17.4-x64.msi))
- [Git SCM](https://git-scm.com/downloads)
- [VS Code](https://code.visualstudio.com/download)

## Installation

1. Install and configure `Git`
   - Installation instructions can be found on the [PaymentsOne Wiki](https://wiki.fnis.com/display/FPAPEXUI/Git+SCM+Configuration)
2. Install and configure `NodeJS`
   - [Download](https://wiki.fnis.com/pages/viewpage.action?pageId=10240379350) the .npmrc and place it in your user directory (C:\users\eXXXXXXX)
   - File may need to be renamed from "npmrc" to ".npmrc". In file explorer, this can be done by naming the file ".npmrc.".
   - Follow the instructions in the file to correctly generate the necessary API key
3. Install and configure `VS Code`
   - Required extensions:
     - `TSLint`
     - `Angular Essentials`
     - `Prettier - Code formatter` by Prettier
   - Recommended extensions:
     - `Auto Import`
     - `Path Intellisense`
     - `Bracket Pair Colorizer`
     - `Angular v4 TypeScript Snippets`
     - `angular2-switcher`
     - `angular2-inline`
     - `GitLens`
     - `Debugger for Chrome`
     - `Document This`
     - `psioniq File Header`
       - Psioniq File Header Settings - Copy/paste the following in your settings.json:
       ```json
        "psi-header.templates": [{
          "language": "*",
          "template": [
                      "=============================================================================",
                      "(c) <<projectCreationYear>> - <<year>> Fidelity National Information Services, Inc. and/or its",
                      "subsidiaries - All Rights Reserved worldwide.",
                      "-----------------------------------------------------------------------------",
                      "This document is protected under the trade secret and copyright laws as the",
                      "property of Fidelity National Information Services, Inc. and/or its",
                      "subsidiaries. Copying, reproduction or distribution should be limited and",
                      "only to employees with a “need to know” to do their job. Any disclosure of",
                      "this document to third parties is strictly prohibited",
                      "============================================================================="]
          }
        ],
        "psi-header.changes-tracking": {
            "autoHeader": "autoSave"
        },
        "psi-header.config": {
            "forceToTop": true,
            "blankLinesAfter": 1
        },
        "psi-header.variables": [
            ["projectCreationYear", "2017"]
        ]
       ```
     - `TypeScript Import Sorter`
       - Typescript Import Sorter settings:
       ```json
         "typescript.preferences.importModuleSpecifier": "non-relative",
         "importSorter.generalConfiguration.configurationFilePath": "./extension-settings/import-sorter.json"
       ```
   - Recommended 'User Settings':
     ```json
     "tslint.autoFixOnSave": true,
     "tslint.exclude": "**/node_modules/**/*.ts",
     "files.trimTrailingWhitespace": true,
     "files.trimFinalNewlines": true
     "files.insertFinalNewline": true
     ```
4. In _File Explorer_, right-click on the directory where you want to clone the project and select "`Git Bash Here`"
5. Clone the [**apex-ui** BitBucket repository](https://bitbucket.fis.dev/projects/FPAPEX/repos/apex-ui/browse) to your machine.
   - From BitBucket, select the clone option from the side menu and copy the provided URL.
     `$ git clone <URL provided by BitBucket>`
6. Install the dependencies for the project. This is done with npm:
   ```
   cd apex-ui
   npm install
   ```
7. Make sure your c:\windows\system32\drivers\etc\hosts file is setup with the following:
   ```
   127.0.0.1			dev.local
   127.0.0.1			fisdev.local
   ```

# Running without Docker (recommended)

Run the project with `npm start` while in the apex-ui directory. This will watch for changes to the project and reload the application for you any time changes are made.

Once running, the application can be accessed by navigating to `http://dev.local:4200/apexdev`.

# Running with Docker

To build and run the docker image locally (Docker Desktop for Windows is required):

1. Build and package the application: npm i && npm build && npm pack
2. copy the package (apex-ui-\*.tgz) file to the docker folder
3. Build and run the container (http)
   a) if the container is already running: docker rm -f apex-ui
   b) build the image from the docker folder: docker build -t apex-ui .
   c) run the container: docker run -p443:8443 -p4200:8080 --name apex-ui --rm apex-ui
   d) http://fisdev.local:4200/apexdev

You can modify the nginx configurations locally and build the docker image again if you want to point
at different endpoints in the proxy pass (nginx-local-locations.conf).

You can also access the application via https by setting the nginx-local-locations.conf proxy_pass
for the auth service to point at https://apex-auth-https-local-apex-ui-dev.sdlocpapp.fisdev.local
Then, when running the UI, you can use https://fisdev.local/apexdev

Note: To prevent browser warnings on the certificate, you can add the self-signed certificate to your trusted certificate authorities by opening a command prompt as administrator, navigating to the location of the cert.pem under the docker folder, and issuing the following command:
```
certutil -addstore -f "Root" cert.pem
```

# Build

Run `ng build --app=myapp` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. You can also use `npm run build` or `npm run build-prod` to initiate the build command as well.
