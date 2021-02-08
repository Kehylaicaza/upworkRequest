(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{451:function(e,t,s){"use strict";s.r(t);var n=s(56),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"deployment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[e._v("#")]),e._v(" Deployment")]),e._v(" "),s("h2",{attrs:{id:"deployment-in-single-host"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deployment-in-single-host"}},[e._v("#")]),e._v(" Deployment in single host")]),e._v(" "),s("h3",{attrs:{id:"set-up-the-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-up-the-server"}},[e._v("#")]),e._v(" Set up the server")]),e._v(" "),s("p",[s("strong",[e._v("Prerequisite:")]),e._v(" Make sure you have "),s("code",[e._v("Docker")]),e._v(" and "),s("code",[e._v("docker-compose")]),e._v(" installed and running.")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Pull webPDF Server image from our Docker hub")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# pull the latest published version")]),e._v("\ndocker pull harbor-us.cpdf.io:4430/websdk-sr/master:latest\n")])])]),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# pull a specific version")]),e._v("\ndocker pull harbor-us.cpdf.io:4430/websdk-sr/master:7.3.0\n")])])])]),e._v(" "),s("li",[s("p",[e._v("We use MongoDB as the database. If you don't use an existing MongoDB service, you should create an "),s("code",[e._v("init-mongo.js")]),e._v(" file somewhere on your file system to initialize the MongoDB. If you use an existing MongoDB, ignore this step and go to next step.")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("db.createUser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    user: "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'mongo'")]),e._v(",\n    pwd: "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'mongo'")]),e._v(",\n    roles: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        role: "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'readWrite'")]),e._v(",\n        db: "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'com-foxit-webpdf'")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])]),e._v(" "),s("li",[s("p",[e._v("In the same directory of "),s("code",[e._v("init-mongo.js")]),e._v(", create the docker-compose.yml. If you use an existing MongoDB, you should modify "),s("code",[e._v("S8_WEBPDF_MONGO_URI")]),e._v(" value and other fields in the "),s("code",[e._v("mongo")]),e._v(" section like hostname, ports, username, password and database name, so webViewer Server can connect to your MongoDB.")])])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("version: "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'2'")]),e._v("\nservices:\n  mongo:\n    image: mongo:4.2.2\n    restart: always\n    hostname: mongo\n    ports:\n      - "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("27017")]),e._v(":27017\n    environment:\n      MONGO_INITDB_ROOT_USERNAME: root\n      MONGO_INITDB_ROOT_PASSWORD: root\n      MONGO_NON_ROOT_USERNAME: mongo\n      MONGO_NON_ROOT_PASSWORD: mongo\n      MONGO_INITDB_DATABASE: com-foxit-webpdf\n    volumes:\n      - ./init-mongo.js:/docker-entrypoint-initdb.d/mongo-init.js:ro\n  webpdf:\n    image: harbor.cpdf.io:4430/websdk-sr/master:latest\n    ports:\n      - "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8890")]),e._v(":8080\n    environment:\n      S8_WEBPDF_MONGO_URI: mongodb://mongo:mongo@mongo:27017/com-foxit-webpdf\n      S8_WEBPDF_GSDK_SN:Copy the whole text string after "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Sign")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" the SN license "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" you received and "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("paste")]),e._v(" here.\n      S8_WEBPDF_GSDK_KEY:Copy the whole text string after "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Sign")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" the SN license "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" you received and "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("paste")]),e._v(" here.\n    depends_on: "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# to ensure MongoDB will be started before webViewer Server .")]),e._v("\n      - "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"mongo"')]),e._v("\n")])])]),s("p",[e._v("4.  Navigate to the directory where you placed the "),s("code",[e._v("docker-compose.yml")]),e._v(" in your terminal and run:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("docker-compose up -d\n")])])]),s("p",[e._v("Now your webViewer Server is running at this point: "),s("code",[e._v("http://<host_ip_address or localhost>:8890/webpdf/")]),e._v(".  For instance, my host IP address is "),s("code",[e._v("0.0.0.0")]),e._v(",  then the server base URL would be "),s("code",[e._v("http://0.0.0.0:8890/webpdf/")]),e._v(".")]),e._v(" "),s("h3",{attrs:{id:"set-up-the-webviewer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-up-the-webviewer"}},[e._v("#")]),e._v(" Set up the webViewer")]),e._v(" "),s("p",[e._v("In SDK package, navigate to "),s("a",{attrs:{target:"_blank",href:"/examples/UIExtension/complete_webViewer_sr"}},[e._v("complete_webViewer_sr")]),e._v(", open the index.html, configure the "),s("code",[e._v("viewerOptions.server/root:")]),e._v(" as follows:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("var pdfui "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" new PDFUI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\nviewerOptions: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\nsr: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\nserver: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\nroot: "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'http://0.0.0.0:8890/webpdf/'")]),e._v(",\n//other options\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(",\nlibPath: "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'../../../lib'")]),e._v(",\n \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v(",\n")])])]),s("p",[e._v("Now you get your webViewer running with server rendering.  For how to start webViewer, refer to "),s("RouterLink",{attrs:{to:"/zh/main/main/getting-started/Quickly ;Run ;Samples.html"}},[e._v("Quickly Run Samples")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"deployment-in-distributed-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deployment-in-distributed-environment"}},[e._v("#")]),e._v(" Deployment in distributed environment")]),e._v(" "),s("p",[s("strong",[e._v("Prerequisite:")]),e._v(" Make sure you have "),s("code",[e._v("Docker")]),e._v(" and "),s("code",[e._v("docker-compose")]),e._v(" installed and running.")]),e._v(" "),s("p",[e._v("In a distributed environment, each webViewer Server will connect to a same MongoDB, and requires a share storage for the purpose of data caching.  The MongoDB is used to log PDF conversion tasks like which PDFs have bee parsed, the parsing results and so on. The MongoDB data storing duration depends on the "),s("code",[e._v("S8_WEBPDF_CACHE_AGE:")]),e._v(" your set in "),s("code",[e._v("docker-composer.yml")]),e._v(".  And the share storage is used to cache the PDF files, rendered page image and other PDF related data.")]),e._v(" "),s("h3",{attrs:{id:"set-up-multiple-webviewer-servers-in-a-single-node-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-up-multiple-webviewer-servers-in-a-single-node-environment"}},[e._v("#")]),e._v(" Set up multiple webViewer servers in a single-node environment")]),e._v(" "),s("p",[e._v("This section will walk you through how to set up multiple webViewer Servers in a single-node environment.")]),e._v(" "),s("p",[e._v("Repeated the steps 1 ~ 2 in "),s("a",{attrs:{href:"#deployment_in_single_host"}},[e._v("Deployment in single host")]),e._v(", and then create the docker-compose.yml. Here you will add environment variable "),s("code",[e._v("S8_WEBPDF_CACHE_DIRS")]),e._v(" for data caching, and add the mount in "),s("code",[e._v("volumes")]),e._v(" so that the cache can be accessed by multiple webViewer servers.  Below is the configuration example:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("version: "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'2'")]),e._v("\nservices:\n  mongo:\n    image: mongo:4.2.2\n    restart: always\n    hostname: mongo\n    ports:\n      - "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("27017")]),e._v(":27017\n    environment:\n      MONGO_INITDB_ROOT_USERNAME: root\n      MONGO_INITDB_ROOT_PASSWORD: root\n      MONGO_NON_ROOT_USERNAME: mongo\n      MONGO_NON_ROOT_PASSWORD: mongo\n      MONGO_INITDB_DATABASE: com-foxit-webpdf\n    volumes:\n      - ./init-mongo.js:/docker-entrypoint-initdb.d/mongo-init.js:ro\n  webpdf1:\n    image: harbor.cpdf.io:4430/websdk-sr/master:latest\n    ports:\n      - "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8890")]),e._v(":8080\n    environment:\n      S8_WEBPDF_MONGO_URI: mongodb://mongo:mongo@mongo:27017/com-foxit-webpdf\n      S8_WEBPDF_CACHE_DIRS: /srdata\n      S8_WEBPDF_GSDK_SN:Copy the whole text string after "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Sign")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" the SN license "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" you received and "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("paste")]),e._v(" here\n      S8_WEBPDF_GSDK_KEY:Copy the whole text string after "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Sign")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" the SN license "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" you received and "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("paste")]),e._v(" here\n    volumes:\n      - ./srdata:/srdata\n    depends_on:\n      - "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"mongo"')]),e._v("\n  webpdf2:\n    image: harbor.cpdf.io:4430/websdk-sr/master:latest\n    ports:\n      - "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8890")]),e._v(":8080\n    environment:\n      S8_WEBPDF_MONGO_URI: mongodb://mongo:mongo@mongo:27017/com-foxit-webpdf\n      S8_WEBPDF_CACHE_DIRS: /srdata\n      S8_WEBPDF_GSDK_SN:Copy the whole text string after "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Sign")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" the SN license "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" you received and "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("paste")]),e._v(" here\n      S8_WEBPDF_GSDK_KEY:Copy the whole text string after "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Sign")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" the SN license "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" you received and "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("paste")]),e._v(" here\n    volumes:\n      - ./srdata:/srdata\n    depends_on:\n      - "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"mongo"')]),e._v("\n")])])]),s("h3",{attrs:{id:"set-up-multiple-webviewer-servers-in-a-multiple-node-environment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-up-multiple-webviewer-servers-in-a-multiple-node-environment"}},[e._v("#")]),e._v(" Set up multiple webViewer servers in a multiple-node environment")]),e._v(" "),s("p",[e._v("In a multiple-node environment, you should create a File Share for data caching so they can be accessible by different nodes. The File Share can be implemented by any utils like NFS, SMB, k8s, ceph etc.")]),e._v(" "),s("p",[e._v("In the following section, we assume you have 3 machines, they are allocated as follows:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("IP")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("database")]),e._v(" "),s("td",[e._v("192.168.0.2")]),e._v(" "),s("td",[e._v("Provide MongoDB service, and  SMB File Share service")])]),e._v(" "),s("tr",[s("td",[e._v("webpdf-1")]),e._v(" "),s("td",[e._v("192.168.0.3")]),e._v(" "),s("td",[e._v("Provide webViewer Server service")])]),e._v(" "),s("tr",[s("td",[e._v("webpdf-2")]),e._v(" "),s("td",[e._v("192.168.0.4")]),e._v(" "),s("td",[e._v("Provide webViewer Server service")])])])]),e._v(" "),s("p",[s("strong",[e._v("database:")])]),e._v(" "),s("ol",[s("li",[s("p",[s("strong",[e._v("File Share:")]),e._v(" It is an assumption that this host has SMB File Share installed, and a mount point directory "),s("code",[e._v("/share")]),e._v(" has been created.")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("MongoDB:")])])])]),e._v(" "),s("p",[e._v("If you don't use an existing MongoDB service, you should create an "),s("code",[e._v("init-mongo.js")]),e._v(" file somewhere on your file system to initialize the MongoDB.  If you use an existing MongoDB, ignore this step and go to next step.")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("db.createUser"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    user: "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'mongo'")]),e._v(",\n    pwd: "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'mongo'")]),e._v(",\n    roles: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        role: "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'readWrite'")]),e._v(",\n        db: "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'com-foxit-webpdf'")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),s("p",[e._v("In the same directory, create the "),s("code",[e._v("docker-compose.yml")]),e._v(". If you use an existing MongoDB, you should modify "),s("code",[e._v("S8_WEBPDF_MONGO_URI")]),e._v(" value and other fields in the "),s("code",[e._v("mongo")]),e._v(" section like hostname, ports, username, password and database name,so webViewer Server can connect to your MongoDB.")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("version: "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'2'")]),e._v("\nservices:\n  mongo:\n    image: mongo:4.2.2\n    restart: always\n    hostname: mongo\n    ports:\n      - "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("27017")]),e._v(":27017\n    environment:\n      MONGO_INITDB_ROOT_USERNAME: root\n      MONGO_INITDB_ROOT_PASSWORD: root\n      MONGO_NON_ROOT_USERNAME: mongo\n      MONGO_NON_ROOT_PASSWORD: mongo\n      MONGO_INITDB_DATABASE: com-foxit-webpdf\n    volumes:\n      - ./init-mongo.js:/docker-entrypoint-initdb.d/mongo-init.js:ro\n")])])]),s("p",[s("strong",[e._v("webpdf-1 node:")])]),e._v(" "),s("ol",[s("li",[e._v("On the host where webViewer Server is installed, mount the share in database node to webpdf-1:")])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("mount")]),e._v(" -t cifs -o "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("username")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("smb,password"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("password //192.168.0.2/share /mnt/share\n")])])]),s("p",[e._v("2.  Add the share to the list of permanently associated mount points in the /etc/fstab file, to avoid losing data after a system restart.")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"//192.168.0.2/share /mnt/share cifs username=smb,password=password 0 0"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">>")]),e._v(" /etc/fstab`\n")])])]),s("p",[e._v("3. Repeated the steps 1 ~ 2 in "),s("a",{attrs:{href:"#deployment_in_single_host"}},[e._v("Deployment in single host")]),e._v(", and then create the "),s("code",[e._v("docker-compose.yml")]),e._v(". Here, you will add environment variable "),s("code",[e._v("S8_WEBPDF_CACHE_DIRS")]),e._v(" for data caching, and add the mount in "),s("code",[e._v("volumes")]),e._v(" so that the cache can be shared by multiple webViewer servers.  Below is the configuration example:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("version: "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'2'")]),e._v("\nservices:\n  webpdf1:\n    image: harbor.cpdf.io:4430/websdk-sr/master:latest\n    ports:\n      - "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8890")]),e._v(":8080\n    environment:\n      S8_WEBPDF_MONGO_URI: mongodb://mongo:mongo@192.168.0.2:27017/com-foxit-webpdf\n      S8_WEBPDF_CACHE_DIRS: /srdata\n      S8_WEBPDF_GSDK_SN:Copy the whole text string after "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Sign")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" the SN license "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" you received and "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("paste")]),e._v(" herexxxxxxxxxxxxxxxxxxx\n      S8_WEBPDF_GSDK_KEY:Copy the whole text string after "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Sign")]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("`")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("in")]),e._v(" the SN license "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("file")]),e._v(" you received and "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("paste")]),e._v(" here\n    volumes:\n      - /mnt/share:/srdata\n")])])]),s("p",[s("strong",[e._v("Note:")]),e._v(" If you use an existing MongoDB, you should modify "),s("code",[e._v("S8_WEBPDF_MONGO_URI")]),e._v(" value and other fields in the "),s("code",[e._v("mongo")]),e._v(" section like hostname, ports, username, password and database name, so webViewer Server can connect to your MongoDB.")]),e._v(" "),s("p",[s("strong",[e._v("webpdf-2  node:")])]),e._v(" "),s("p",[e._v("Repeated the procedures in webpdf-1 node.")]),e._v(" "),s("h3",{attrs:{id:"set-up-the-webviewer-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-up-the-webviewer-2"}},[e._v("#")]),e._v(" Set up the webViewer")]),e._v(" "),s("p",[e._v("After done, open webViewer SDK package,  configure the webViewer to access server at the point "),s("code",[e._v("http://192.168.0.3:8890/webpdf/")]),e._v("  or "),s("code",[e._v("http://192.168.0.4:8890/webpdf/")]),e._v(". For details, refer to "),s("a",{attrs:{href:"#set_up_the_viewer"}},[e._v("Set up the webViewer")]),e._v(" in the section of "),s("a",{attrs:{href:"#deployment_in_single_host"}},[e._v("Deployment in single host")]),e._v(".")]),e._v(" "),s("p",[s("strong",[e._v("Note:")]),e._v(" If you don't want the actual IP to be exposed directly, you can use nginx or other tools to do the reverse proxy, and configure https access.")])])}),[],!1,null,null,null);t.default=a.exports}}]);