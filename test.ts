/*
 * =============================================================================
 * (c) 2017 - 2021 Fidelity National Information Services, Inc. and/or its
 * subsidiaries - All Rights Reserved worldwide.
 * -----------------------------------------------------------------------------
 * This document is protected under the trade secret and copyright laws as the
 * property of Fidelity National Information Services, Inc. and/or its
 * subsidiaries. Copying, reproduction or distribution should be limited and
 * only to employees with a “need to know” to do their job. Any disclosure of
 * this document to third parties is strictly prohibited
 * =============================================================================
 */
import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(
    path: string,
    deep?: boolean,
    filter?: RegExp
  ): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting(), { teardown: { destroyAfterEach: true } });

// Then we find all the tests
const contextLibs = require.context('./libs', true, /\.spec\.ts$/);
// And load the modules
contextLibs.keys().map(contextLibs);

// Then we find all the tests.
const contextApps = require.context('./apps', true, /\.spec\.ts$/);
// And load the modules.
contextApps.keys().map(contextApps);
