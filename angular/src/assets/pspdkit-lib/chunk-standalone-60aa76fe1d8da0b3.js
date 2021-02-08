/*! For license information please see chunk-standalone-60aa76fe1d8da0b3.js.LICENSE.txt */
/*!
 * PSPDFKit for Web 2020.4.1 (https://pspdfkit.com/web)
 * 
 * Copyright (c) 2016-2019 PSPDFKit GmbH. All rights reserved.
 * 
 * THIS SOURCE CODE AND ANY ACCOMPANYING DOCUMENTATION ARE PROTECTED BY INTERNATIONAL COPYRIGHT LAW
 * AND MAY NOT BE RESOLD OR REDISTRIBUTED. USAGE IS BOUND TO THE PSPDFKIT LICENSE AGREEMENT.
 * UNAUTHORIZED REPRODUCTION OR DISTRIBUTION IS SUBJECT TO CIVIL AND CRIMINAL PENALTIES.
 * This notice may not be removed from this file.
 * 
 * PSPDFKit uses several open source third-party components: https://pspdfkit.com/acknowledgements/web/
 */
(window.__PSPDFKitChunk=window.__PSPDFKitChunk||[]).push([[60],{906:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return K}));var r,s=n(10),a=n.n(s),i=n(17),o=n.n(i),c=n(1),u=n.n(c),l=n(7),f=n.n(l),h=n(12),d=n.n(h),p=n(45),m=n.n(p),b=n(8),y=n.n(b),g=n(9),w=n.n(g),P=n(4),k=n.n(P),_=n(151),D=n(6),v=n(3),O=n(291),x=n(281),A=n(16),S=n(211),C=n(48);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=k()(e);if(t){var s=k()(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return w()(this,n)}}n.d(t,"corePool",(function(){return O.a})),n.d(t,"validateStandaloneConfiguration",(function(){return O.e})),n.d(t,"normalizeCoreOptions",(function(){return O.c}));var K=function(e){y()(s,e);var t,n=j(s);function s(e){var t;f()(this,s);var a=e.baseUrl||Object(_.a)(window.document),i=I(I({},e),{},{baseUrl:a});if("string"!=typeof i.baseUrl)throw new v.a("`baseUrl` is mandatory and must be a valid URL, e.g. `https://example.com/`");if("string"!=typeof i.document&&!(i.document instanceof ArrayBuffer))throw new v.a("document must be either an URL to a supported document type (PDF and images), e.g. `https://example.com/document.pdf`, or an `ArrayBuffer`");if("string"!=typeof i.licenseKey)throw new v.a("licenseKey must be set to a string value. Please obtain yours from https://customers.pspdfkit.com.");if(r&&r!==i.licenseKey)throw new v.a("Trying to re-use PSPDFKit for Web with a different licenseKey than the previous one.\nUnfortunately we only allow one licenseKey per instance.\nPlease contact support for further assistance.");if(i.licenseKey.startsWith("TRIAL-"))throw new v.a("You're using the npm key instead of the license key. This key is used to download the PSPDFKit for Web package via the node package manager.\n\nYou can find the license key to unlock your trial by following the link in your trial email and heading to:\nhttps://pspdfkit.com/guides/web/current/standalone/integration/");return(t=n.call(this,i)).destroyed=!1,t}return d()(s,[{key:"load",value:(t=o()(a.a.mark((function e(t){var n,s,i,o,c,u,l,f,h,d,p;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="string"==typeof this._state.document?fetch(this._state.document,{credentials:"same-origin"}).then((function(e){return e.arrayBuffer()})):this._state.document,e.next=3,this.client.load(this._state.baseUrl,this._state.licenseKey,{mainThreadOrigin:Object(x.a)()||window.location.origin,disableWebAssembly:this._state.disableWebAssembly,disableWebAssemblyStreaming:this._state.disableWebAssemblyStreaming,disableIndexedDBCaching:this._state.disableIndexedDBCaching,enableAutomaticLinkExtraction:this._state.enableAutomaticLinkExtraction,overrideMemoryLimit:this._state.overrideMemoryLimit,trustedCAsCallback:this._state.trustedCAsCallback});case 3:return s=e.sent,i=s.features,this._state=this._state.set("features",Object(D.a)(i)),r=this._state.licenseKey,e.next=9,n;case 9:if(o=e.sent,e.prev=10,!this.destroyed){e.next=17;break}return e.next=14,new Promise((function(){}));case 14:c=e.sent,e.next=20;break;case 17:return e.next=19,this.client.openDocument(o,t);case 19:c=e.sent;case 20:e.next=27;break;case 22:throw e.prev=22,e.t0=e.catch(10),"INVALID_PASSWORD"===e.t0.message&&this._state.document instanceof ArrayBuffer&&(this._state=this._state.set("document",e.t0.callArgs[0])),"IMAGE_DOCUMENTS_NOT_LICENSED"===e.t0.message&&(e.t0.message="The image documents feature is not enabled for your license key. Please contact support or sales to purchase the UI module for PSPDFKit for Web."),e.t0;case 27:if(!this._XFDF){e.next=30;break}return e.next=30,this.client.importXFDF(this._XFDF.source,this._XFDF.keepCurrentAnnotations);case 30:if(u=[],!A.J.PDF_JAVASCRIPT){e.next=39;break}return e.next=34,this.client.enablePDFJavaScriptSupport();case 34:return l=e.sent,e.next=37,this.client.runPDFFormattingScripts();case 37:f=e.sent,u=Object(C.g)(l,f);case 39:if(!(this._instantJSON&&this._instantJSON.pdfId&&c.ID.permanent)){e.next=46;break}if(h=this._instantJSON.pdfId,d=c.ID,h.permanent===d.permanent){e.next=44;break}throw new v.a("Could not instantiate from Instant JSON: Permanent PDF ID mismatch.\nPlease use the same PDF document that was used to create this Instant JSON.\nFor more information, please visit: https://pspdfkit.com/guides/web/current/importing-exporting/instant-json/");case 44:if(h.changing===d.changing){e.next=46;break}throw new v.a("Could not instantiate from Instant JSON: Changing PDF ID mismatch.\nPlease use the same revision of this PDF document that was used to create this Instant JSON.\nFor more information, please visit: https://pspdfkit.com/guides/web/current/importing-exporting/instant-json/");case 46:if(!this._trustedCAsCallback){e.next=62;break}return e.prev=47,e.next=50,this._trustedCAsCallback();case 50:if(p=e.sent,Array.isArray(p)){e.next=53;break}throw new v.a("Certificates response must be an array");case 53:if(!p.some((function(e){return!(e instanceof ArrayBuffer)&&"string"!=typeof e}))){e.next=55;break}throw new v.a("All certificates must be passed as ArrayBuffer (DER) or string (PEM)");case 55:return e.next=57,this.client.loadCertificates(p.map(S.b));case 57:e.next=62;break;case 59:throw e.prev=59,e.t1=e.catch(47),new v.a("Could not retrieve certificates for digital signatures validation: ".concat(e.t1.message,"."));case 62:return this._state=this._state.set("documentResponse",c),e.abrupt("return",{features:this._state.features,hasPassword:!!t,allowedTileScales:"all",jsActionChanges:u});case 64:case"end":return e.stop()}}),e,this,[[10,22],[47,59]])}))),function(e){return t.apply(this,arguments)})},{key:"destroy",value:function(){this.destroyed=!0,m()(k()(s.prototype),"destroy",this).call(this)}}]),s}(O.b)}}]);