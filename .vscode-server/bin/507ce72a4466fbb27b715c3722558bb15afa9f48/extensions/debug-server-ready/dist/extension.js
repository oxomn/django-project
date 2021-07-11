!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=require("path")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.activate=void 0;const n=r(2),o=r(3),a=r(4).loadMessageBundle(r(0).join(__dirname,"extension.ts"));class s extends n.Disposable{constructor(e){super(()=>this.internalDispose()),this.session=e,this.hasFired=!1,this.disposables=[],this.regexp=new RegExp(e.configuration.serverReadyAction.pattern||"listening on.* (https?://\\S+|[0-9]+)","i")}static start(e){if(e.configuration.serverReadyAction){let t=s.detectors.get(e);return t||(t=new s(e),s.detectors.set(e,t)),t}}static stop(e){let t=s.detectors.get(e);t&&(s.detectors.delete(e),t.dispose())}static rememberShellPid(e,t){let r=s.detectors.get(e);r&&(r.shellPid=t)}static async startListeningTerminalData(){this.terminalDataListener||(this.terminalDataListener=n.window.onDidWriteTerminalData(async e=>{const t=await e.terminal.processId;for(let[,r]of this.detectors)if(r.shellPid===t)return void r.detectPattern(e.data);for(let[,t]of this.detectors)if(t.detectPattern(e.data))return}))}internalDispose(){this.disposables.forEach(e=>e.dispose()),this.disposables=[]}detectPattern(e){if(!this.hasFired){const t=this.regexp.exec(e);if(t&&t.length>=1)return this.openExternalWithString(this.session,t.length>1?t[1]:""),this.hasFired=!0,this.internalDispose(),!0}return!1}openExternalWithString(e,t){const r=e.configuration.serverReadyAction;let s;if(""===t){const e=r.uriFormat||"";if(e.indexOf("%s")>=0){const t=a(0,null,e);return void n.window.showErrorMessage(t,{modal:!0}).then(e=>{})}s=e}else{const e=r.uriFormat||(/^[0-9]+$/.test(t)?"http://localhost:%s":"%s");if(2!==e.split("%s").length){const t=a(1,null,e);return void n.window.showErrorMessage(t,{modal:!0}).then(e=>{})}s=o.format(e,t)}this.openExternalWithUri(e,s)}openExternalWithUri(e,t){const r=e.configuration.serverReadyAction;switch(r.action||"openExternally"){case"openExternally":n.env.openExternal(n.Uri.parse(t));break;case"debugWithChrome":this.debugWithBrowser("pwa-chrome",e,t);break;case"debugWithEdge":this.debugWithBrowser("pwa-msedge",e,t);break;case"startDebugging":n.debug.startDebugging(e.workspaceFolder,r.name||"unspecified")}}debugWithBrowser(e,t,r){return n.debug.startDebugging(t.workspaceFolder,{type:e,name:"Browser Debug",request:"launch",url:r,webRoot:t.configuration.serverReadyAction.webRoot||"${workspaceFolder}"})}}s.detectors=new Map,t.activate=function(e){e.subscriptions.push(n.debug.onDidChangeActiveDebugSession(e=>{if(e&&e.configuration.serverReadyAction){s.start(e)&&s.startListeningTerminalData()}})),e.subscriptions.push(n.debug.onDidTerminateDebugSession(e=>{s.stop(e)}));const t=new Set;e.subscriptions.push(n.debug.registerDebugConfigurationProvider("*",{resolveDebugConfigurationWithSubstitutedVariables:(r,o)=>(o.type&&o.serverReadyAction&&(t.has(o.type)||(t.add(o.type),function(e,t){e.subscriptions.push(n.debug.registerDebugAdapterTrackerFactory(t,{createDebugAdapterTracker(e){const t=s.start(e);if(t){let r;return{onDidSendMessage:e=>{if("event"===e.type&&"output"===e.event&&e.body)switch(e.body.category){case"console":case"stderr":case"stdout":e.body.output&&t.detectPattern(e.body.output)}"request"===e.type&&"runInTerminal"===e.command&&e.arguments&&"integrated"===e.arguments.kind&&(r=e.seq)},onWillReceiveMessage:t=>{r&&"response"===t.type&&"runInTerminal"===t.command&&t.body&&r===t.request_seq&&(r=void 0,s.rememberShellPid(e,t.body.shellProcessId))}}}}}))}(e,o.type))),o)}))}},function(e,t){e.exports=require("vscode")},function(e,t){e.exports=require("util")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o,a,s,i,l=r(0),u=r(5),c=Object.prototype.toString;function d(e){return void 0!==e}function f(e){return"[object Number]"===c.call(e)}function g(e){return"[object String]"===c.call(e)}function p(e){return JSON.parse(u.readFileSync(e,"utf8"))}function h(e,t){return i&&(e="［"+e.replace(/[aouei]/g,"$&$&")+"］"),0===t.length?e:e.replace(/\{(\d+)\}/g,(function(e,r){var n=r[0],o=t[n],a=e;return"string"==typeof o?a=o:"number"!=typeof o&&"boolean"!=typeof o&&null!=o||(a=String(o)),a}))}function b(e){return function(t,r){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];return f(t)?t>=e.length?void console.error("Broken localize call found. Index out of bounds. Stacktrace is\n: "+new Error("").stack):h(e[t],n):g(r)?(console.warn("Message "+r+" didn't get externalized correctly."),h(r,n)):void console.error("Broken localize call found. Stacktrace is\n: "+new Error("").stack)}}function v(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];return h(t,r)}function m(e,t){return a[e]=t,t}function y(e,t){var r,n,o,a=l.join(s.cacheRoot,e.id+"-"+e.hash+".json"),i=!1,c=!1;try{return r=JSON.parse(u.readFileSync(a,{encoding:"utf8",flag:"r"})),n=a,o=new Date,u.utimes(n,o,o,(function(){})),r}catch(e){if("ENOENT"===e.code)c=!0;else{if(!(e instanceof SyntaxError))throw e;console.log("Syntax error parsing message bundle: "+e.message+"."),u.unlink(a,(function(e){e&&console.error("Deleting corrupted bundle "+a+" failed.")})),i=!0}}if(!(r=function(e,t){var r=s.translationsConfig[e.id];if(r){var n=p(r).contents,o=p(l.join(t,"nls.metadata.json")),a=Object.create(null);for(var i in o){var u=o[i],c=n[e.outDir+"/"+i];if(c){for(var d=[],f=0;f<u.keys.length;f++){var h=u.keys[f],b=c[g(h)?h:h.key];void 0===b&&(b=u.messages[f]),d.push(b)}a[i]=d}else a[i]=u.messages}return a}}(e,t))||i)return r;if(c)try{u.writeFileSync(a,JSON.stringify(r),{encoding:"utf8",flag:"wx"})}catch(e){if("EEXIST"===e.code)return r;throw e}return r}function S(e){try{return function(e){var t=p(l.join(e,"nls.metadata.json")),r=Object.create(null);for(var n in t){var o=t[n];r[n]=o.messages}return r}(e)}catch(e){return void console.log("Generating default bundle from meta data failed.",e)}}function F(e,t){var r;if(!0===s.languagePackSupport&&void 0!==s.cacheRoot&&void 0!==s.languagePackId&&void 0!==s.translationsConfigFile&&void 0!==s.translationsConfig)try{r=y(e,t)}catch(e){console.log("Load or create bundle failed ",e)}if(!r){if(s.languagePackSupport)return S(t);var n=function(e){for(var t=s.locale;t;){var r=l.join(e,"nls.bundle."+t+".json");if(u.existsSync(r))return r;var n=t.lastIndexOf("-");t=n>0?t.substring(0,n):void 0}if(void 0===t){r=l.join(e,"nls.bundle.json");if(u.existsSync(r))return r}}(t);if(n)try{return p(n)}catch(e){console.log("Loading in the box message bundle failed.",e)}r=S(t)}return r}function w(e){if(!e)return v;var t=l.extname(e);if(t&&(e=e.substr(0,e.length-t.length)),s.messageFormat===n.both||s.messageFormat===n.bundle){var r=function(e){for(var t,r=l.dirname(e);t=l.join(r,"nls.metadata.header.json"),!u.existsSync(t);){var n=l.dirname(r);if(n===r){t=void 0;break}r=n}return t}(e);if(r){var o=l.dirname(r),c=a[o];if(void 0===c)try{var f=JSON.parse(u.readFileSync(r,"utf8"));try{var g=F(f,o);c=m(o,g?{header:f,nlsBundle:g}:null)}catch(e){console.error("Failed to load nls bundle",e),c=m(o,null)}}catch(e){console.error("Failed to read header file",e),c=m(o,null)}if(c){var h=e.substr(o.length+1).replace(/\\/g,"/"),y=c.nlsBundle[h];return void 0===y?(console.error("Messages for file "+e+" not found. See console for details."),function(){return"Messages not found."}):b(y)}}}if(s.messageFormat===n.both||s.messageFormat===n.file)try{var S=p(function(e){var t;if(s.cacheLanguageResolution&&t)t=t;else{if(i||!s.locale)t=".nls.json";else for(var r=s.locale;r;){var n=".nls."+r+".json";if(u.existsSync(e+n)){t=n;break}var o=r.lastIndexOf("-");o>0?r=r.substring(0,o):(t=".nls.json",r=null)}s.cacheLanguageResolution&&(t=t)}return e+t}(e));return Array.isArray(S)?b(S):d(S.messages)&&d(S.keys)?b(S.messages):(console.error("String bundle '"+e+"' uses an unsupported format."),function(){return"File bundle has unsupported format. See console for details"})}catch(e){"ENOENT"!==e.code&&console.error("Failed to load single file bundle",e)}return console.error("Failed to load message bundle for file "+e),function(){return"Failed to load message bundle. See console for details."}}!function(e){e.file="file",e.bundle="bundle",e.both="both"}(n=t.MessageFormat||(t.MessageFormat={})),function(e){e.is=function(e){var t=e;return t&&d(t.key)&&d(t.comment)}}(o||(o={})),function(){if(s={locale:void 0,languagePackSupport:!1,cacheLanguageResolution:!0,messageFormat:n.bundle},g(process.env.VSCODE_NLS_CONFIG))try{var e=JSON.parse(process.env.VSCODE_NLS_CONFIG);if(g(e.locale)&&(s.locale=e.locale.toLowerCase()),(!0===(t=e._languagePackSupport)||!1===t)&&(s.languagePackSupport=e._languagePackSupport),g(e._cacheRoot)&&(s.cacheRoot=e._cacheRoot),g(e._languagePackId)&&(s.languagePackId=e._languagePackId),g(e._translationsConfigFile)){s.translationsConfigFile=e._translationsConfigFile;try{s.translationsConfig=p(s.translationsConfigFile)}catch(t){e._corruptedFile&&u.writeFile(e._corruptedFile,"corrupted","utf8",(function(e){console.error(e)}))}}}catch(e){}var t;i="pseudo"===s.locale,void 0,a=Object.create(null)}(),t.loadMessageBundle=w,t.config=function(e){return e&&(g(e.locale)&&(s.locale=e.locale.toLowerCase(),void 0,a=Object.create(null)),void 0!==e.messageFormat&&(s.messageFormat=e.messageFormat)),i="pseudo"===s.locale,w}},function(e,t){e.exports=require("fs")}]));
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/507ce72a4466fbb27b715c3722558bb15afa9f48/extensions/debug-server-ready/dist/extension.js.map