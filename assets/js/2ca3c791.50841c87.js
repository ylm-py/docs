"use strict";(self.webpackChunkcontabo_docs=self.webpackChunkcontabo_docs||[]).push([[6925],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,m=d["".concat(c,".").concat(b)]||d[b]||p[b]||a;return n?o.createElement(m,s(s({ref:t},u),{},{components:n})):o.createElement(m,s({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={title:"Restricting Users to Buckets",sidebar_position:7},s="Restricting Users to Buckets",i={unversionedId:"products/Object-Storage/HowTo/restricting-user-bucket",id:"products/Object-Storage/HowTo/restricting-user-bucket",title:"Restricting Users to Buckets",description:"A common use case is to allow usage of one bucket to one specifc user whereas another bucket should only be accessible to another user. The following How-To describes on how to allow access to buckets to a restricted number of users.",source:"@site/docs/products/Object-Storage/HowTo/restricting-user-bucket.md",sourceDirName:"products/Object-Storage/HowTo",slug:"/products/Object-Storage/HowTo/restricting-user-bucket",permalink:"/docs/products/Object-Storage/HowTo/restricting-user-bucket",draft:!1,editUrl:"https://github.com/contabo/docs/tree/main/docs/products/Object-Storage/HowTo/restricting-user-bucket.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Restricting Users to Buckets",sidebar_position:7},sidebar:"productSidebar",previous:{title:"Lifecycle Policy",permalink:"/docs/products/Object-Storage/HowTo/lifecycle-policy"},next:{title:"Migrate to Contabo Object Storage",permalink:"/docs/products/Object-Storage/HowTo/migrate-to-contabo-object-storage"}},c={},l=[{value:"Scenario",id:"scenario",level:2},{value:"Set policies on buckets",id:"set-policies-on-buckets",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Remove policies",id:"remove-policies",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"restricting-users-to-buckets"},"Restricting Users to Buckets"),(0,r.kt)("p",null,"A common use case is to allow usage of one bucket to one specifc user whereas another bucket should only be accessible to another user. The following How-To describes on how to allow access to buckets to a restricted number of users."),(0,r.kt)("p",null,"In the following we assume that ",(0,r.kt)("a",{parentName:"p",href:"/docs/products/Object-Storage/Tools/aws-cli"},"aws cli")," is installed and properly configured and that you have access to ",(0,r.kt)("a",{parentName:"p",href:"https://my.contabo.com/object_storage"},"Contabo's Object Storage Panel")," for creating users."),(0,r.kt)("h2",{id:"scenario"},"Scenario"),(0,r.kt)("p",null,"Within the next steps we assume two existing buckets:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bucket-for-user-1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bucket-for-user-2"))),(0,r.kt)("p",null,"and two existing users which setup their password to access Contabo's Object Storage Panel:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user1@example.com")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"S3 Read and Write")," role"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"user2@example.com")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"S3 Read and Write")," role")),(0,r.kt)("p",null,"The usage should be restricted like the follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"only ",(0,r.kt)("inlineCode",{parentName:"li"},"user1@example.com")," has access to ",(0,r.kt)("inlineCode",{parentName:"li"},"bucket-for-user-1")),(0,r.kt)("li",{parentName:"ul"},"only ",(0,r.kt)("inlineCode",{parentName:"li"},"user2@example.com")," has access to ",(0,r.kt)("inlineCode",{parentName:"li"},"bucket-for-user-2"))),(0,r.kt)("p",null,"Of course in your actual scenario bucket names and user names will differ. Please adjust them accordingly. You could have any numbers of buckets or users with different policies and also even have more fine grained control over the actions. But this is not covered here."),(0,r.kt)("h2",{id:"set-policies-on-buckets"},"Set policies on buckets"),(0,r.kt)("p",null,"A bucket policy allows or disallows access in form of specific actions to buckets. These are used to control which user will have which access to a bucket. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-policies.html"},"Using bucket policies")," for more detailed information."),(0,r.kt)("p",null,"Furthermore we will need the internal representation of the users in the S3 Object Storage. To get them please use the ",(0,r.kt)("a",{parentName:"p",href:"https://api.contabo.com/#operation/retrieveUserList"},"Contabo API")," or the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/contabo/cntb"},(0,r.kt)("inlineCode",{parentName:"a"},"cntb")," cli")," via ",(0,r.kt)("inlineCode",{parentName:"p"},"cntb get users"),". Please use the value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"userId")," field."),(0,r.kt)("p",null,"You will also need the so called ",(0,r.kt)("inlineCode",{parentName:"p"},"s3TenantId")," for the given Object Storage. You can obtain it via ",(0,r.kt)("inlineCode",{parentName:"p"},"cntb get objectStorages -o=json")),(0,r.kt)("h3",{id:"step-1"},"Step 1"),(0,r.kt)("p",null,"This step denies any action on any resource in ",(0,r.kt)("inlineCode",{parentName:"p"},"bucket-for-user-1")," for user ",(0,r.kt)("inlineCode",{parentName:"p"},"user2@example.com"),"."),(0,r.kt)("p",null,"With the given data we can build up a policy for ",(0,r.kt)("inlineCode",{parentName:"p"},"bucket-for-user-1")," and store it in file ",(0,r.kt)("inlineCode",{parentName:"p"},"bucket-for-user-1-policy.json")," with following contents:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="bucket-for-user-1-policy.json"',title:'"bucket-for-user-1-policy.json"'},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Action": "*",\n      "Effect": "Deny",\n      "Resource": "*",\n      "Principal": {\n        "AWS": [\n          "arn:aws:iam::5c37e60c3ee04f1eb116c436b1afadca:user/12345:3368c22e-08da-446f-a470-1928e58457a2"\n        ]\n      }\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Please note that in here ",(0,r.kt)("inlineCode",{parentName:"p"},"s3TenantId=5c37e60c3ee04f1eb116c436b1afadca"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"customerId=12345")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"userId=3368c22e-08da-446f-a470-1928e58457a2"),". Thus the format is ",(0,r.kt)("inlineCode",{parentName:"p"},"arn:aws:iam::<s3TenantId>:user/<customerId>:<userId>"),"."),(0,r.kt)("p",null,"To apply it, please run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aws --profile eu2 --endpoint-url https://eu2.contabostorage.com s3api put-bucket-policy --bucket bucket-for-user-1 --policy file://bucket-for-user-1-policy.json\n")),(0,r.kt)("h3",{id:"step-2"},"Step 2"),(0,r.kt)("p",null,"This step denies any action on any resource in ",(0,r.kt)("inlineCode",{parentName:"p"},"bucket-for-user-2")," for user ",(0,r.kt)("inlineCode",{parentName:"p"},"user1@example.com"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="bucket-for-user-2-policy.json"',title:'"bucket-for-user-2-policy.json"'},'{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Action": "*",\n      "Effect": "Deny",\n      "Resource": "*",\n      "Principal": {\n        "AWS": [\n          "arn:aws:iam::5c37e60c3ee04f1eb116c436b1afadca:user/12345:6299cbdd-ef72-486b-b088-c34181fc20f1"\n        ]\n      }\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Please note that in here ",(0,r.kt)("inlineCode",{parentName:"p"},"s3TenantId=5c37e60c3ee04f1eb116c436b1afadca"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"customerId=12345")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"userId=6299cbdd-ef72-486b-b088-c34181fc20f1"),". Thus the format is ",(0,r.kt)("inlineCode",{parentName:"p"},"arn:aws:iam::<s3TenantId>:user/<customerId>:<userId>"),"."),(0,r.kt)("p",null,"To apply it, please run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aws --profile eu2 --endpoint-url https://eu2.contabostorage.com s3api put-bucket-policy --bucket bucket-for-user-2 --policy file://bucket-for-user-2-policy.json\n")),(0,r.kt)("h2",{id:"remove-policies"},"Remove policies"),(0,r.kt)("p",null,"By removing the policies both users will be able to access fully the buckets again. Please perform the following steps:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"aws --profile eu2 --endpoint-url https://eu2.contabostorage.com s3api delete-bucket-policy --bucket bucket-for-user-1\naws --profile eu2 --endpoint-url https://eu2.contabostorage.com s3api delete-bucket-policy --bucket bucket-for-user-2\n")))}p.isMDXComponent=!0}}]);