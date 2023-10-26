"use strict";(self.webpackChunkcontabo_docs=self.webpackChunkcontabo_docs||[]).push([[1304],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=n,k=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return a?r.createElement(k,i(i({ref:t},p),{},{components:a})):r.createElement(k,i({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3394:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:10},i="s3cmd",l={unversionedId:"products/Object-Storage/Tools/s3cmd",id:"products/Object-Storage/Tools/s3cmd",title:"s3cmd",description:"s3cmd is a tool to manage buckets and files an to invoke the S3 API. You can achieve similar action with aws cli. s3cmd runs on Linux and Mac.",source:"@site/docs/products/Object-Storage/Tools/s3cmd.md",sourceDirName:"products/Object-Storage/Tools",slug:"/products/Object-Storage/Tools/s3cmd",permalink:"/docs/products/Object-Storage/Tools/s3cmd",draft:!1,editUrl:"https://github.com/contabo/docs/tree/main/docs/products/Object-Storage/Tools/s3cmd.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"productSidebar",previous:{title:"Nextcloud",permalink:"/docs/products/Object-Storage/Tools/nextcloud"},next:{title:"Cloudberry Explorer",permalink:"/docs/products/Object-Storage/Tools/cloudberry-explorer"}},c={},s=[{value:"Required data",id:"required-data",level:2},{value:"Example data",id:"example-data",level:3},{value:"Setup",id:"setup",level:2},{value:"Sample Usage",id:"sample-usage",level:2}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"s3cmd"},"s3cmd"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://s3tools.org/s3cmd"},"s3cmd")," is a tool to manage buckets and files an to invoke the S3 API. You can achieve similar action with ",(0,n.kt)("a",{parentName:"p",href:"/docs/products/Object-Storage/Tools/aws-cli"},"aws cli"),". ",(0,n.kt)("inlineCode",{parentName:"p"},"s3cmd")," runs on Linux and Mac."),(0,n.kt)("p",null,"Please follow the installation instruction like described on ",(0,n.kt)("a",{parentName:"p",href:"https://s3tools.org/s3cmd"},"s3cmd"),"."),(0,n.kt)("h2",{id:"required-data"},"Required data"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"access_key")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"secret_key")),(0,n.kt)("li",{parentName:"ul"},"Contabo's S3 URL")),(0,n.kt)("p",null,"For ",(0,n.kt)("inlineCode",{parentName:"p"},"access_key"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"secret_key")," and the S3 URL please check ",(0,n.kt)("a",{parentName:"p",href:"/docs/products/Object-Storage/s3-connection-settings"},"here"),"."),(0,n.kt)("h3",{id:"example-data"},"Example data"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"access_key")," = 82046e8110804a43bf29c1ae426a724d"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"secret_key")," = 82e69bd7a52076c527154297a76c2233"),(0,n.kt)("li",{parentName:"ul"},"S3 URL = ",(0,n.kt)("a",{parentName:"li",href:"https://eu2.contabostorage.com"},"https://eu2.contabostorage.com"))),(0,n.kt)("h2",{id:"setup"},"Setup"),(0,n.kt)("p",null,"Please follow the steps in order to use Contabo's Object Storage:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"s3cmd --configure")),(0,n.kt)("li",{parentName:"ol"},"Specify ",(0,n.kt)("inlineCode",{parentName:"li"},"82046e8110804a43bf29c1ae426a724d")," as ",(0,n.kt)("inlineCode",{parentName:"li"},"Access Key")),(0,n.kt)("li",{parentName:"ol"},"Specify ",(0,n.kt)("inlineCode",{parentName:"li"},"82e69bd7a52076c527154297a76c2233")," as ",(0,n.kt)("inlineCode",{parentName:"li"},"Secret Key")),(0,n.kt)("li",{parentName:"ol"},"Press return for ",(0,n.kt)("inlineCode",{parentName:"li"},"Default Region")),(0,n.kt)("li",{parentName:"ol"},"Specify ",(0,n.kt)("inlineCode",{parentName:"li"},"eu2.contabostorage.com")," for ",(0,n.kt)("inlineCode",{parentName:"li"},"S3 Endpoint")),(0,n.kt)("li",{parentName:"ol"},"Specify ",(0,n.kt)("inlineCode",{parentName:"li"},"eu2.contabostorage.com")," for ",(0,n.kt)("inlineCode",{parentName:"li"},"DNS-style bucket+hostname:port template for accessing a bucket")),(0,n.kt)("li",{parentName:"ol"},"Specify as password of your choice for ",(0,n.kt)("inlineCode",{parentName:"li"},"Encryption password")),(0,n.kt)("li",{parentName:"ol"},"Press return for ",(0,n.kt)("inlineCode",{parentName:"li"},"Path to GPG program")),(0,n.kt)("li",{parentName:"ol"},"Press return for ",(0,n.kt)("inlineCode",{parentName:"li"},"Use HTTPS protocol")),(0,n.kt)("li",{parentName:"ol"},"Press return for ",(0,n.kt)("inlineCode",{parentName:"li"},"HTTP Proxy server name")),(0,n.kt)("li",{parentName:"ol"},"Confirm by specifying ",(0,n.kt)("inlineCode",{parentName:"li"},"y")),(0,n.kt)("li",{parentName:"ol"},"Confirm again by specifying ",(0,n.kt)("inlineCode",{parentName:"li"},"y"))),(0,n.kt)("h2",{id:"sample-usage"},"Sample Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# Lists your buckets\ns3cmd s3 ls\n# Delete Bucket CORS of bucket named BUCKETNAME\ns3cmd delcors s3://BUCKETNAME\n")))}d.isMDXComponent=!0}}]);