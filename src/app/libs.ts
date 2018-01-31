import 'core-js';
import 'zone.js/dist/zone';
// import 'ts-helpers';

// angular
import { disableDebugTools } from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';
import '@angular/platform-browser-dynamic';
import '@angular/common';

let _decorateModuleRef = function identity<T>(value: T): T { return value; };


if(true) {
  Error.stackTraceLimit = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}
