(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{485:function(t,o,a){"use strict";a.r(o);var e=a(56),n=Object(e.a)({},(function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"import-and-export"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-and-export"}},[t._v("#")]),t._v(" Import and Export")]),t._v(" "),a("h2",{attrs:{id:"annotation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#annotation"}},[t._v("#")]),t._v(" Annotation")]),t._v(" "),a("p",[t._v("The Annotation supports three types of files to import/export data: XFDF, FDF and JSON. The following table lists the what annotations currently don't support to import/export.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("File Type")]),t._v(" "),a("th",[t._v("If all annots support")]),t._v(" "),a("th",[t._v("What not support")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("XFDF/FDF")]),t._v(" "),a("td",[t._v("Mostly")]),t._v(" "),a("td",[t._v("Link")])]),t._v(" "),a("tr",[a("td",[t._v("JSON")]),t._v(" "),a("td",[t._v("Mostly")]),t._v(" "),a("td",[t._v("Screen Image, Link, Sound")])])])]),t._v(" "),a("h3",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("p",[t._v("The following table list APIs that Foxit PDF SDK for Web provides to import/export data file.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Method")]),t._v(" "),a("th",[t._v("XFDF/FDF")]),t._v(" "),a("th",[t._v("JSON")]),t._v(" "),a("th",[t._v("JSON")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Import")]),t._v(" "),a("td",[t._v("PDFDoc.importAnnotsFromFDF()")]),t._v(" "),a("td",[t._v("PDFDoc.importAnnotsFromJSON(annotsJson)")]),t._v(" "),a("td",[t._v("PDFPage.AddAnnot(annotJson)")])]),t._v(" "),a("tr",[a("td",[t._v("Export")]),t._v(" "),a("td",[t._v("PDFDoc.exportAnnotsToFDF()")]),t._v(" "),a("td",[t._v("PDFDoc.exportAnnotsToJSON()")]),t._v(" "),a("td",[t._v("Annot.exportToJson()")])])])]),t._v(" "),a("p",[t._v("Where the "),a("code",[t._v("PDFPage.AddAnnot(annotJson)")]),t._v(" and "),a("code",[t._v("Annot.exportToJson()")]),t._v(" doesn't support binary data。If you have the following usage scenarios:")]),t._v(" "),a("ol",[a("li",[t._v("use "),a("code",[t._v("PDFDoc.exportAnnotsToJSON()")]),t._v(" to export to data file from a source PDF")]),t._v(" "),a("li",[t._v("use "),a("code",[t._v("PDFPage.AddAnnot(annotJson)")]),t._v(" to add annotations to the PDF by copying the above exported data.")])]),t._v(" "),a("p",[t._v("it is recommended that you make adjustments based on the annotations.")]),t._v(" "),a("p",[t._v("If your source PDF contains Stamp and/or fileAttachment, the exported data will contain binary data. While the "),a("code",[t._v("PDFpage.addannot()")]),t._v("does not support binary data. As such, the above use case will result in the Appearance of some comments not showing, such as Stamp, or attachment files losing, such as fileAttachment.")]),t._v(" "),a("h3",{attrs:{id:"annotations-that-contains-binary-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#annotations-that-contains-binary-data"}},[t._v("#")]),t._v(" Annotations that contains binary data")]),t._v(" "),a("ul",[a("li",[t._v("Stamp")]),t._v(" "),a("li",[t._v("fileAttachment")])]),t._v(" "),a("h2",{attrs:{id:"form"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#form"}},[t._v("#")]),t._v(" Form")]),t._v(" "),a("p",[t._v("The Form supports three standard types of files to import/export data: XFDF, FDF and XML.")]),t._v(" "),a("h3",{attrs:{id:"api-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-2"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("p",[t._v("The following table list APIs that Foxit PDF SDK for Web provides to import/export data file.")]),t._v(" "),a("ul",[a("li",[t._v("PDFDoc.exportFormToFile(fileType)")]),t._v(" "),a("li",[t._v("PDFDoc.importFormFromFile(file, isXML)")])])])}),[],!1,null,null,null);o.default=n.exports}}]);