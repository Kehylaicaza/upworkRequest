/*! For license information please see chunk-63-a194b9bce23e96c3.js.LICENSE.txt */
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
(window.__PSPDFKitChunk=window.__PSPDFKitChunk||[]).push([[63],{907:function(e,t,a){"use strict";a.r(t);var r=a(28),n=a.n(r),o=a(10),c=a.n(o),i=a(29),l=a.n(i),s=a(1),d=a.n(s),u=a(17),p=a.n(u),f=a(25),g=a.n(f),m=a(476),b=a(16),h=a(3),y=a(212),v=a(35),P=a(133),w=a(32),I=a(71),O=a(6),N=a(2),k=a(30),E=a(0),j=a(14),x=a.n(j),S=a(15),D=a(478),C=a(49),A=a(96),M=a(180);function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(Object(a),!0).forEach((function(t){d()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function R(e,t){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return T(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return c=e.done,e},e:function(e){i=!0,o=e},f:function(){try{c||null==a.return||a.return()}finally{if(i)throw o}}}}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var F=new N.N({width:b.b,height:b.a}),L=E.createElement(A.a,null),H=function(e){var t=e.styles,r=e.formatMessage;return E.createElement("div",{style:{width:e.width,height:e.height},className:t.importedDocument},E.createElement("div",{className:t.importedDocumentIconCircle},E.createElement(C.a,{src:a(505)})),E.createElement("span",{className:t.importedDocumentInfo},r(V.documentMergedHere)))},_=function(e,t,a,r){var n,o=e.map((function(e){return{type:"page",page:e,rotation:0,label:e.pageLabel}})),c=function(e){var t,a=e.dupeOf||e.label,r=0,n=R(o);try{for(n.s();!(t=n.n()).done;){var c=t.value;null!=c.dupeOf&&c.dupeOf===a&&null!=c.dupeNumber&&c.dupeNumber>r&&(r=c.dupeNumber)}}catch(e){n.e(e)}finally{n.f()}return r+1},i=R(t);try{for(i.s();!(n=i.n()).done;){var l=n.value;switch(l.type){case"addPage":var s=void 0;null!=l.afterPageIndex?s=l.afterPageIndex+1:(Object(h.h)(null!=l.beforePageIndex),s=l.beforePageIndex),o=o.insert(s,{type:"newPage",label:a(V.newPage),rotation:0,size:new N.N({width:l.pageWidth,height:l.pageHeight})});break;case"removePages":var d,u=R(l.pageIndexes.map((function(e){return o.get(e)})));try{for(u.s();!(d=u.n()).done;){var p=d.value;Object(h.h)(null!=p);var f=o.indexOf(p);o=o.delete(f)}}catch(e){u.e(e)}finally{u.f()}break;case"rotatePages":var g,m=R(l.pageIndexes);try{for(m.s();!(g=m.n()).done;){var b=g.value,y=o.get(b);Object(h.h)(null!=y);var v=void 0,P=void 0;Object(h.h)("page"===y.type||"newPage"===y.type);var w=y.rotation;if(P=90===l.rotateBy?270===w?0:w+l.rotateBy:90===w?0:180===w?90:270===w?180:w+l.rotateBy,Object(h.h)(0===P||90===P||180===P||270===P),"page"===y.type)v=B(B({},y),{},{rotation:P});else{if("newPage"!=y.type)throw new h.a("Rotation is not allowed on imported documents");v=B(B({},y),{},{rotation:P})}o=o.set(b,v)}}catch(e){m.e(e)}finally{m.f()}break;case"duplicatePages":var I,O=R(l.pageIndexes.map((function(e){return o.get(e)})));try{for(O.s();!(I=O.n()).done;){var k=I.value;Object(h.h)(null!=k),Object(h.h)("page"===k.type);var E=c(k),j=k.dupeOf||k.label,x=o.indexOf(k);o=o.insert(x+1,Object.assign({},k,{label:"".concat(j," (").concat(E,")"),dupeOf:j,dupeNumber:E}))}}catch(e){O.e(e)}finally{O.f()}break;case"movePages":var S=l.pageIndexes[0],D=void 0;null!=l.beforePageIndex?D=l.beforePageIndex:(Object(h.h)(null!=l.afterPageIndex),D=l.afterPageIndex+1);var C=o.get(S);o=o.delete(S),Object(h.h)(null!=C),o=o.insert(D,C);break;case"importDocument":var A=void 0;null!=l.beforePageIndex?A=l.beforePageIndex:(Object(h.h)(null!=l.afterPageIndex),A=l.afterPageIndex+1);var M=void 0;if("string"==typeof l.document){var z=l.document;Object(h.h)(r.has(z)),M=r.get(z,"Imported Document")}else Object(h.h)("string"==typeof l.document.name),M=l.document.name;o=o.insert(A,{type:"importedDocument",label:M});break;case"keepPages":case"applyInstantJson":case"applyXfdf":throw Error("Unknown document operation");default:Object(h.b)(l.type)}}}catch(e){i.e(e)}finally{i.f()}return o};t.default=Object(P.c)((function(e){var t,r,o=e.onCancel,i=e.pages,s=e.dispatch,u=e.backend,f=e.frameWindow,P=e.intl.formatMessage,w=e.CSS_HACK.styles,j=E.useState(Object(O.b)()),A=g()(j,2),z=A[0],T=(A[1],E.useState(Object(O.a)())),W=g()(T,2),K=W[0],G=W[1],Y=E.useState(0),q=g()(Y,2),U=q[0],J=q[1],X=K.slice(0,K.size-U),$=_(e.pages,X,P,z),Q=E.useState(Object(O.g)()),Z=g()(Q,2),ee=Z[0],te=Z[1],ae=E.useState(!1),re=g()(ae,2),ne=re[0],oe=re[1],ce=E.useState(!1),ie=g()(ce,2),le=ie[0],se=ie[1],de=E.useCallback((function(e){G(X.push(e)),J(0)}),[X]),ue=E.useRef(!0);E.useLayoutEffect((function(){return function(){ue.current&&(ue.current=!1)}}),[]);var pe=E.useCallback((function(){var e=i.get(0),t=e?e.pageSize:F,a={type:"addPage",backgroundColor:N.j.WHITE,pageWidth:t.width,pageHeight:t.height,rotateBy:0};1===ee.size?a.afterPageIndex=ee.first():a.beforePageIndex=0,de(a),te(ee.clear())}),[i,ee,de]),fe=E.useCallback((function(){de({type:"removePages",pageIndexes:ee.toArray()}),te(ee.clear())}),[de,ee]),ge=E.useCallback((function(){de({type:"duplicatePages",pageIndexes:ee.toArray()}),te(ee.clear())}),[de,ee]),me=E.useCallback((function(){de({type:"rotatePages",pageIndexes:ee.toArray(),rotateBy:270})}),[de,ee]),be=E.useCallback((function(){de({type:"rotatePages",pageIndexes:ee.toArray(),rotateBy:90})}),[de,ee]),he=E.useCallback((function(){var e,t=X,a=R(ee.sort());try{for(a.s();!(e=a.n()).done;){var r=e.value;t=t.push({type:"movePages",pageIndexes:[r],beforePageIndex:r-1})}}catch(e){a.e(e)}finally{a.f()}G(t),J(0),te(Object(O.g)(ee.toArray().map((function(e){return e-1}))))}),[ee,X]),ye=E.useCallback((function(){var e,t=X,a=R(ee.sort().reverse());try{for(a.s();!(e=a.n()).done;){var r=e.value;t=t.push({type:"movePages",pageIndexes:[r],afterPageIndex:r})}}catch(e){a.e(e)}finally{a.f()}G(t),J(0),te(Object(O.g)(ee.toArray().map((function(e){return e+1}))))}),[ee,X]),ve=E.useCallback((function(){te(ee.clear()),J(U+1)}),[ee,U]),Pe=E.useCallback((function(){te(ee.clear()),J(U-1)}),[ee,U]),we=E.useCallback(p()(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t={},1===ee.size?t.afterPageIndex=ee.first():t.beforePageIndex=0,(a=document.createElement("input")).type="file",a.accept="application/pdf",a.onclick=function(e){e.target.value=""},a.onchange=function(e){if(0!==e.target.files.length){var a,r=X,n=R(e.target.files);try{var o=function(){var e=a.value;return"string"!=typeof e.name||0===e.name.length?{v:void 0}:"application/pdf"!==e.type?(Object(h.l)("The uploaded file must be a PDF."),{v:void 0}):-1!==$.findIndex((function(t){return"importedDocument"===t.type&&t.label===e.name}))?{v:void 0}:void(r=r.push(B({type:"importDocument",treatImportedDocumentAsOnePage:!0,document:e},t)))};for(n.s();!(a=n.n()).done;){var c=o();if("object"===l()(c))return c.v}}catch(e){n.e(e)}finally{n.f()}G(r),J(0),te(ee.clear())}},a.click();case 8:case"end":return e.stop()}}),e)}))),[ee,z,de,X,$]),Ie=E.useCallback((function(){te($.keySeq().toSet())}),[$,te]),Oe=E.useCallback((function(){te(ee.clear())}),[ee,te]),Ne=E.useCallback((function(e){ee.has(e)?te(ee.delete(e)):te(ee.add(e))}),[ee,te]),ke=E.useCallback((function(){o()}),[o]),Ee=E.useCallback((function(){oe(!0),s(Object(y.a)(X.toArray(),(function(){ue.current&&oe(!1)}),(function(e){throw ue.current&&oe(!1),e})))}),[s,X]),je=E.useCallback(p()(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return oe(!0),e.prev=1,e.next=4,u.exportPDFWithOperations(X.toArray().map(k.q));case 4:t=e.sent,Object(I.d)(t,f),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:return e.prev=11,ue.current&&oe(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])}))),[u,X,f]),xe=ee.size>0&&void 0===ee.find((function(e){var t=$.get(e);return Object(h.h)(null!=t),"page"!==t.type&&"newPage"!==t.type})),Se=ee.size>0&&void 0===ee.find((function(e){var t=$.get(e);return Object(h.h)(null!=t),"page"!==t.type})),De=!ee.isEmpty()&&!ee.includes(0),Ce=!ee.isEmpty()&&!ee.includes($.size-1),Ae=U<K.size,Me=U>0,ze=w.toolbar.toolbarButton,Be=E.useMemo((function(){return[{type:"editor/add",onPress:pe,className:ze,disabled:ne,children:P(V.newPage)},{type:"editor/remove",onPress:fe,className:ze,disabled:0===ee.size||ee.size===$.size||ne,children:P(V.removePage)},{type:"editor/duplicate",onPress:ge,className:ze,children:P(V.duplicatePage),disabled:!Se||ne},{type:"editor/rotateLeft",onPress:me,className:ze,children:P(V.rotatePageLeft),disabled:!xe||ne},{type:"editor/rotateRight",onPress:be,className:ze,children:P(V.rotatePageRight),disabled:!xe||ne},{type:"editor/moveLeft",onPress:he,className:w.toolbar.toolbarButton,children:P(V.moveBefore),disabled:!De||ne},{type:"editor/moveRight",onPress:ye,className:w.toolbar.toolbarButton,children:P(V.moveAfter),disabled:!Ce||ne},{type:"editor/importDocument",onPress:we,className:ze,children:P(V.mergeDocument),disabled:ne},{type:"spacer"},{type:"editor/undo",onPress:ve,className:w.toolbar.toolbarButton,children:P(S.a.undo),disabled:!Ae||ne},{type:"editor/redo",onPress:Pe,className:w.toolbar.toolbarButton,children:P(S.a.redo),disabled:!Me||ne},{type:"editor/selectAll",onPress:Ie,className:ze,children:P(V.selectAll),disabled:ee.size===$.size||ne},{type:"editor/selectNone",onPress:Oe,className:ze,children:P(V.selectNone),disabled:ee.isEmpty()||ne}]}),[pe,ze,ne,P,fe,ee,$.size,ge,Se,me,xe,be,he,w.toolbar.toolbarButton,De,ye,Ce,we,ve,Ae,Pe,Me,Ie,Oe]),Re=E.useState(Number.POSITIVE_INFINITY),Te=g()(Re,2),Fe=Te[0],Le=Te[1],He=E.useMemo((function(){return Fe===Number.POSITIVE_INFINITY?[Be,[]]:[Be.slice(0,Fe),Be.slice(Fe).filter((function(e){return"spacer"!==e.type})).map((function(e){return{item:B(B({},e),{},{dropdownGroup:"documentEditor"})}}))]}),[Be,Fe]),_e=g()(He,2),Ve=_e[0],We=_e[1],Ke=E.useState(new N.N),Ge=g()(Ke,2),Ye=Ge[0],qe=Ge[1],Ue=E.useCallback((function(e){Le(Number.POSITIVE_INFINITY),qe(new N.N({width:e.width,height:e.height}))}),[qe,Le]),Je=E.useRef(null);E.useLayoutEffect((function(){var e=Je.current;if(e&&0!==Ye.width){var t=e.children;if(t.length!==Fe){var a=e.ownerDocument.defaultView.getComputedStyle(e),r=44+(parseInt(a.getPropertyValue("padding-left"))||0)+(parseInt(a.getPropertyValue("padding-right"))||0),n=[].findIndex.call(t,(function(e,t){return"spacer"!==Be[t].type&&(r+=e.clientWidth)>Ye.width}));Le(-1===n?Number.POSITIVE_INFINITY:n),e.ownerDocument.defaultView.innerWidth>=b.e?se(!0):se(!1)}}}),[Ye,Fe,Le,Be]);var Xe=e.CSS_HACK.components,$e=Xe.ToolbarButtonComponent,Qe=Xe.ToolbarDropdownGroupComponent;return E.createElement("div",{className:x()(w.docEditor,"PSPDFKit-DocumentEditor")},E.createElement("div",{className:w.toolbar.root,style:{flex:0}},E.createElement("div",{ref:Je,className:w.toolbarContainer},Ve.map((function(e,t){return"spacer"===e.type?E.createElement("div",{style:{flex:1},key:"spacer-".concat(t)}):E.createElement($e,n()({},e,{key:e.type}))}))),We.length>0&&E.createElement(E.Fragment,null,E.createElement("div",{style:{flex:1},key:"spacer-responsive"}),E.createElement(Qe,{icon:{type:"more",size:{width:20,height:20}},items:We,discreteDropdown:!0,caretDirection:"down",ItemComponent:function(e){var t=e.item;return e.isSelectedItem?null:E.createElement($e,n()({},t.item,{key:t.type,className:x()(t.item.className,w.toolbar.dropdownButton)}))}}))),E.createElement("div",{className:w.pagesView},E.createElement(M.a,{onResize:Ue}),E.createElement("div",{className:x()((t={},d()(t,w.pagesGrid,!0),d()(t,w.pagesGridLargeThumbnails,le),t))},E.createElement(D.a,{totalItems:$.size,width:Ye.width,height:Ye.height,itemScale:e.scale,renderItemCallback:function(e,t,a){var r,n=$.get(e);switch(Object(h.h)(null!=n),n.type){case"page":r=E.createElement(m.b,{key:"page-".concat(n.label),page:n.page,size:t,maxSize:a,rotation:n.rotation});break;case"newPage":var o=Object(m.a)(n.size,n.rotation,t,a),c=o.rotatedWidth,i=o.rotatedHeight;r=E.createElement("div",{key:"newPage-".concat(n.label),style:{width:c,height:i}});break;case"importedDocument":var l=Object(m.a)(F,0,t,a),s=l.containerWidth,d=l.containerHeight;r=E.createElement(H,{width:s,height:d,key:"importedDoc-".concat(n.label),styles:w,formatMessage:P});break;default:r=E.createElement(E.Fragment,null),Object(h.b)(n.type)}return{item:r,label:n.label}},onItemPress:Ne,selectedItemIndexes:ee,cssPrefix:"PSPDFKit-DocumentEditor"}))),E.createElement("div",{className:w.bottomBar},E.createElement(v.b,{onClick:ke},P(S.a.cancel)),E.createElement("div",{className:x()((r={},d()(r,w.pagesSelectedIndicator,!0),d()(r,w.pagesSelectedIndicatorShown,ee.size>0),r))},E.createElement("div",{className:w.pagesSelectedIcon},E.createElement(C.a,{src:a(506)})),P(V.pagesSelected,{arg0:ee.size})),E.createElement("div",{className:w.spacer}),ne&&L,E.createElement(v.b,{disabled:ne,onClick:je},P(S.a.saveAs)),E.createElement(v.b,{primary:!0,disabled:X.isEmpty()||ne,onClick:Ee},P(S.a.save))))}));var V=Object(w.a)({newPage:{id:"newPage",defaultMessage:"New Page",description:"Add new page"},removePage:{id:"removePage",defaultMessage:"Remove Page",description:"Remove page"},duplicatePage:{id:"duplicatePage",defaultMessage:"Duplicate Page",description:"Duplicate page"},rotatePageLeft:{id:"rotatePageLeft",defaultMessage:"Rotate Page Left",description:"Rotate Page Left"},rotatePageRight:{id:"rotatePageRight",defaultMessage:"Rotate Page Right",description:"Rotate Page Right"},mergeDocument:{id:"mergeDocument",defaultMessage:"Merge Document",description:"Merge Document"},selectAll:{id:"selectAll",defaultMessage:"Select All",description:"Select All Pages"},selectNone:{id:"selectNone",defaultMessage:"Select None",description:"Deselect All Pages"},moveBefore:{id:"moveBefore",defaultMessage:"Move Before",description:"Move page before previous one"},moveAfter:{id:"moveAfter",defaultMessage:"Move After",description:"Move page after next one"},documentMergedHere:{id:"documentMergedHere",defaultMessage:"Document will be merged here",description:"Placeholder for the imported document"},pagesSelected:{id:"pagesSelected",defaultMessage:"{arg0, plural,\n      =0 {{arg0} Pages}\n      one {{arg0} Page}\n      two {{arg0} Pages}\n      other {{arg0} Pages}\n    }",description:"Number of pages selected."}})}}]);