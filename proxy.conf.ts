/*
 * ==============================================================================
 * (c) 2017-2020
 * Fidelity National Information Services, Inc. and/or its subsidiaries - All
 * Rights Reserved worldwide.
 * ---------------------------------------------------------------------------
 * This document is protected under the trade secret and copyright laws as the
 * property of Fidelity National Information Services, Inc. and/or its subsidiaries.
 * Copying, reproduction or distribution should be limited and only to employees
 * with a 'need to know' to do their job. Any disclosure of this document to
 * third parties is strictly prohibited.
 * =============================================================================
 */

module.exports = [
  {
    context: ['/platform/api/rest/search'],
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    target: 'https://apex-search-apex-ui-dev.sdlocpapp.fisdev.local'
    // target: 'http://localhost:5013'
  },
  {
    context: ['/platform/api/rest/auth'],
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    target: 'https://apex-auth-apex-ui-dev.sdlocpapp.fisdev.local'
    // target: 'http://localhost:5000'
  },
  {
    context: ['/platform/api/rest/terminal'],
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    target: 'https://apex-terminal-apex-ui-dev.sdlocpapp.fisdev.local'
    // target: 'http://localhost:5001'
  },
  {
    context: ['/platform/api/rest/institution'],
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    target: 'https://apex-institution-apex-ui-dev.sdlocpapp.fisdev.local'
    // target: 'http://localhost:5002'
  },
  {
    context: ['/platform/api/rest/user'],
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    target: 'https://apex-user-apex-ui-dev.sdlocpapp.fisdev.local'
    // target: 'http://localhost:5003'
  },
  {
    context: ['/platform/api/rest/card'],
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    target: 'https://apex-card-apex-ui-dev.sdlocpapp.fisdev.local'
    // target: 'http://localhost:5004'
  },
  {
    context: ['/platform/api/rest/note'],
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    target: 'https://apex-note-apex-ui-dev.sdlocpapp.fisdev.local'
    // target: 'http://localhost:5005'
  },
  {
    context: ['/platform/api/rest/metadata'],
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    target: 'https://apex-metadata-apex-ui-dev.sdlocpapp.fisdev.local'
    // target: 'http://localhost:5006'
  },
  {
    context: ['/platform/api/rest/fraud'],
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    target: 'https://apex-fraud-apex-ui-dev.sdlocpapp.fisdev.local'
    // target: 'http://localhost:5007'
  },
  {
    context: ['/platform/api/rest/cims'],
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    target: 'https://apex-cims-apex-ui-dev.sdlocpapp.fisdev.local'
    // target: 'http://localhost:5008'
  },
  {
    context: ['/platform/api/rest/workflow'],
    secure: false,
    logLevel: 'debug',
    changeOrigin: true,
    target: 'https://apex-workflow-apex-ui-dev.sdlocpapp.fisdev.local'
    // target: 'http://localhost:5011'
  }
];
