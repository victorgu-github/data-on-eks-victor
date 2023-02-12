"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[1573],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=a,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5707:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1,sidebar_label:"Introduction"},i="Streaming Platforms on EKS",s={unversionedId:"streaming-platforms/index",id:"streaming-platforms/index",title:"Streaming Platforms on EKS",description:"Note: The blueprints for streaming platforms are currently in the process of development.",source:"@site/docs/streaming-platforms/index.md",sourceDirName:"streaming-platforms",slug:"/streaming-platforms/",permalink:"/data-on-eks/docs/streaming-platforms/",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/streaming-platforms/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction"},sidebar:"docs",previous:{title:"Streaming Platforms on EKS",permalink:"/data-on-eks/docs/category/streaming-platforms-on-eks"},next:{title:"Kafka on EKS",permalink:"/data-on-eks/docs/streaming-platforms/kafka"}},l={},p=[],c={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"streaming-platforms-on-eks"},"Streaming Platforms on EKS"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Note"),": The blueprints for streaming platforms are currently in the process of development.\nDocumentation will be updated once a deployment example has been added to the repository.")),(0,a.kt)("p",null,"Running streaming platforms on Kubernetes can provide a number of benefits for organizations looking to process and analyze real-time data streams. Kubernetes provides features such as automatic scaling, rolling updates, and self-healing capabilities to ensure high availability and reliability of streaming platforms. There are a number of popular streaming platforms that have emerged to support this use case, including ",(0,a.kt)("strong",{parentName:"p"},"Apache Kafka"),", ",(0,a.kt)("strong",{parentName:"p"},"Apache Flink"),", and ",(0,a.kt)("strong",{parentName:"p"},"Apache Pulsar"),". "),(0,a.kt)("p",null,"These platforms make it easy to process and analyze real-time data streams in a containerized environment, and provide features such as real-time data processing, event-driven architecture, and fault-tolerance. By leveraging the power of Kubernetes, organizations can focus on building and processing their streaming data pipelines, rather than worrying about the underlying infrastructure.\nWith its robust ecosystem of tools and support for a wide range of use cases, Kubernetes is becoming an increasingly popular choice for running streaming platforms in production."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kafka.apache.org/"},"Kafka")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/flink-kubernetes-operator"},"Flink"))))}m.isMDXComponent=!0}}]);