"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[1205],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||r;return a?n.createElement(h,i(i({ref:t},u),{},{components:a})):n.createElement(h,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7028:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={slug:"Data Platform with AWS CDK",title:"EMR on EKS Data Platform with AWS CDK",authors:["aws"],tags:["emr-on-eks","Spark","emr-studio","CDK"]},i=void 0,l={permalink:"/data-on-eks/blog/Data Platform with AWS CDK",editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/blog/2022-11-28-emr-eks-emr-studio.md",source:"@site/blog/2022-11-28-emr-eks-emr-studio.md",title:"EMR on EKS Data Platform with AWS CDK",description:"Introduction",date:"2022-11-28T00:00:00.000Z",formattedDate:"November 28, 2022",tags:[{label:"emr-on-eks",permalink:"/data-on-eks/blog/tags/emr-on-eks"},{label:"Spark",permalink:"/data-on-eks/blog/tags/spark"},{label:"emr-studio",permalink:"/data-on-eks/blog/tags/emr-studio"},{label:"CDK",permalink:"/data-on-eks/blog/tags/cdk"}],readingTime:4.283333333333333,hasTruncateMarker:!1,authors:[{name:"aws",title:"Amazon Web Services",url:"https://github.com/aws/aws-emr-containers-best-practices",imageURL:"https://github.com/aws.png",key:"aws"}],frontMatter:{slug:"Data Platform with AWS CDK",title:"EMR on EKS Data Platform with AWS CDK",authors:["aws"],tags:["emr-on-eks","Spark","emr-studio","CDK"]},nextItem:{title:"EMR on EKS Best Practices",permalink:"/data-on-eks/blog/EMR on EKS Best Practices"}},s={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Analytics Reference Architecture",id:"analytics-reference-architecture",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Solution",id:"solution",level:2},{value:"Customize",id:"customize",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Job submission",id:"job-submission",level:3},{value:"Interactive session",id:"interactive-session",level:3},{value:"Cleanup",id:"cleanup",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In this blog we will show you how you can use AWS CDK and the ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/opensource/adding-cdk-constructs-to-the-aws-analytics-reference-architecture/"},"Analytics Reference Architecture")," (ARA) library to deploy an end to end data analytics platform. This platform will allow you to run Spark interactive Session in Jupyter notebook with EMR Studio supported by EMR on EKS and run Spark jobs with EMR on EKS. The architecture below shows the infrasturcture you will deploy using the CDK and ARA library."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"emr-eks-studio-ara-architecture",src:a(9135).Z,width:"1662",height:"980"})),(0,o.kt)("h2",{id:"analytics-reference-architecture"},(0,o.kt)("a",{parentName:"h2",href:"https://aws.amazon.com/blogs/opensource/adding-cdk-constructs-to-the-aws-analytics-reference-architecture/"},"Analytics Reference Architecture")),(0,o.kt)("p",null,"AWS Analytics Reference Architecture (ARA) exposes set fo reusable core components in an AWS CDK library, currently available in Typescript and Python. This library contains AWS CDK constructs (L3) that can be used to quickly provision analytics solutions in demos, prototypes, proofs of concept, and end-to-end reference architectures. The API of ARA Library is defined ",(0,o.kt)("a",{parentName:"p",href:"https://constructs.dev/packages/aws-analytics-reference-architecture/v/2.4.11?lang=typescript"},"here"),"."),(0,o.kt)("p",null,"In our case the library help you deploy an infrastructure optimised for Apache Spark running on EKS leveraging EMR on EKS. The infrastructure will out of the box provide you with pod collocation to reduce network traffic, deploy nodegroup in a single AZ to reduce cross AZ traffic during shuffle, use dedicated instances for EMR on EKS, use optimized instances for memory intensive jobs, use spot and on-demand instances for non-critical job and for critical jobs."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Ensure that you have installed the following tools on your machine."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html"},"aws cli")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://Kubernetes.io/docs/tasks/tools/"},"kubectl")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html#getting_started_install"},"CDK"))),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("p",null,"To deploy the data platform we will use an example in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Analytics Reference Architecture"),". The example is in the directory ",(0,o.kt)("inlineCode",{parentName:"p"},"examples/emr-eks-app")," that you will find in the repository you will clone below."),(0,o.kt)("p",null,"Clone the repository"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/aws-samples/aws-analytics-reference-architecture.git\n")),(0,o.kt)("p",null,"This solution will deploy the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"EKS cluster and a set of Nodegroups:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Managed Nodegroup called tooling for running system critical pods. e.g., Cluster Autoscaler, CoreDNS, EBS CSI Driver.."),(0,o.kt)("li",{parentName:"ul"},"Three Managed Nodegroup called critical for critical jobs, each in one AZ, this nodegroup use on-demand instances"),(0,o.kt)("li",{parentName:"ul"},"Three Managed Nodegroup called non-critical for non-critical jobs, each in one AZ, this nodegroup use spot instances"),(0,o.kt)("li",{parentName:"ul"},"Three Managed Nodegroup called notebook-driver for non-critical jobs, each in one AZ, this nodegroup use on-demand instances to have a stable driver."),(0,o.kt)("li",{parentName:"ul"},"Three Managed Nodegroup called notebook-executor for non-critical jobs, each in one AZ, this nodegroup use spot instances instances for executors."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Enable EKS Cluster to be with with EMR on EKS service")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"EMR Virtual Cluster called ",(0,o.kt)("inlineCode",{parentName:"p"},"batchjob"),", used to submitted jobs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"EMR Virtual Cluster called ",(0,o.kt)("inlineCode",{parentName:"p"},"emrvcplatform"),", used to submitted jobs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"EMR Studio called ",(0,o.kt)("inlineCode",{parentName:"p"},"platform"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A ",(0,o.kt)("inlineCode",{parentName:"p"},"managed endpoint"),", called ",(0,o.kt)("inlineCode",{parentName:"p"},"platform-myendpoint")," , to use with Jupyter notebooks you will create in the EMR Studio")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/iam-execution-role.html"},"Execution role")," to use when submiting jobs with EMR on EKS ",(0,o.kt)("inlineCode",{parentName:"p"},"start-job-run"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Execution role to use with managed endpoint.  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'pod templates stored in an S3 bucket called "EKS-CLUSTER-NAME-emr-eks-assets-ACCOUNT-ID-REGION"'))),(0,o.kt)("h3",{id:"customize"},"Customize"),(0,o.kt)("p",null,"The infrastructure described above is defined in ",(0,o.kt)("inlineCode",{parentName:"p"},"emr-eks-app/lib/emr-eks-app-stack.ts"),". If you want to customize it you can change the values in it. For example, you can chose not to create the default nodegroup to use for ",(0,o.kt)("inlineCode",{parentName:"p"},"jobs"),", in this case you can set the ",(0,o.kt)("inlineCode",{parentName:"p"},"defaultNodeGroups")," parameter to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"EmrEksCluster"),". You can also call the ",(0,o.kt)("inlineCode",{parentName:"p"},"addEmrEksNodegroup")," method to define your own nodegroups with specific labels, instances or taints. The ",(0,o.kt)("inlineCode",{parentName:"p"},"addEmrEksNodegroup")," method is defined ",(0,o.kt)("a",{parentName:"p",href:"https://constructs.dev/packages/aws-analytics-reference-architecture/v/2.4.11/api/EmrEksCluster?lang=typescript#addEmrEksNodegroup"},"here"),"."),(0,o.kt)("p",null,"You can also create your own execution role through the ",(0,o.kt)("inlineCode",{parentName:"p"},"createExecutionRole")," ",(0,o.kt)("a",{parentName:"p",href:"https://constructs.dev/packages/aws-analytics-reference-architecture/v/2.4.11/api/EmrEksCluster?lang=typescript#createExecutionRole"},"method")," or create a managed endpoint to attach it to an EMR Studio you deployed outside of the ARA library."),(0,o.kt)("p",null,"In order to simplify this example we use IAM authentication with IAM user for ",(0,o.kt)("inlineCode",{parentName:"p"},"EMR Studio"),". If you would like to use a user in the ",(0,o.kt)("inlineCode",{parentName:"p"},"AWS IAM Identity Center")," you can change ",(0,o.kt)("inlineCode",{parentName:"p"},"studioAuthMode")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"NotebookPlatform")," construct. Below you will can see the code snipet that you need to change."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const notebookPlatform = new ara.NotebookPlatform(this, 'platform-notebook', {\n      emrEks: emrEks,\n      eksNamespace: 'dataanalysis',\n      studioName: 'platform',\n      studioAuthMode: ara.StudioAuthMode.IAM,\n      });\n")),(0,o.kt)("h3",{id:"deploy"},"Deploy"),(0,o.kt)("p",null,"Before you run the solution, you ",(0,o.kt)("strong",{parentName:"p"},"MUST")," change the ",(0,o.kt)("inlineCode",{parentName:"p"},"eksAdminRoleArn")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," object of ",(0,o.kt)("inlineCode",{parentName:"p"},"EmrEksCluster")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"lib/emr-eks-app-stack.ts"),". This role allows you to interact manage EKS cluster and should have be allowed at least the IAM action ",(0,o.kt)("inlineCode",{parentName:"p"},"eks:AccessKubernetesApi"),". You need to also change the ",(0,o.kt)("inlineCode",{parentName:"p"},"identityName")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"addUser")," method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"NotebookPlatform")," construct. The identityName ",(0,o.kt)("strong",{parentName:"p"},"MUST BE")," a valid IAM username that you use. Below you will can see the code snipet that you need to change."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"notebookPlatform.addUser([{\n        identityName:'',\n        notebookManagedEndpoints: [{\n        emrOnEksVersion: 'emr-6.8.0-latest',\n        executionPolicy: emrEksPolicy,\n        managedEndpointName: 'myendpoint'\n              }],\n      }]);\n")),(0,o.kt)("p",null,"Last you shold also update the IAM policies passed to the ",(0,o.kt)("inlineCode",{parentName:"p"},"createExecutionRole"),", if you want to process data that is in S3 buckets that you own."),(0,o.kt)("p",null,"Navigate into one of the example directories and run ",(0,o.kt)("inlineCode",{parentName:"p"},"cdk synth --profile YOUR-AWS-PROFILE")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd examples/emr-eks-app\nnpm install\ncdk synth --profile YOUR-AWS-PROFILE\n")),(0,o.kt)("p",null,"Once the synth is completed you can deploy the infrastructrue with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cdk deploy\n")),(0,o.kt)("p",null,"At the end of the deployment you will see output like follow:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"ara-cdk-output",src:a(6362).Z,width:"941",height:"156"})),(0,o.kt)("p",null,"In the output you will find job sample configurations with the best practices for Spark on Kubernetes like ",(0,o.kt)("inlineCode",{parentName:"p"},"dynamicAllocation")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"pod collocation"),"."),(0,o.kt)("h3",{id:"job-submission"},"Job submission"),(0,o.kt)("p",null,"In this example we will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"crittical-job")," job configuration to submit a job using that will compute ",(0,o.kt)("inlineCode",{parentName:"p"},"pi")," using that is part of Spark distribution.\nTo submit a job we will use Below you use ",(0,o.kt)("inlineCode",{parentName:"p"},"start-job-run")," command with AWS CLI."),(0,o.kt)("p",null,"Before you run the command below, make sure to change update the following parameters with the on created by your own deployment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"- <CLUSTER-ID> \u2013 The EMR virtual cluster ID, which you get from the AWS CDK output\n- <SPARK-JOB-NAME> \u2013 The name of your Spark job\n- <ROLE-ARN> \u2013 The execution role you created, which you get from the AWS CDK output\n- <S3URI-CRITICAL-DRIVER> \u2013 The Amazon S3 URI of the driver pod template, which you get from the AWS CDK output\n- <S3URI-CRITICAL-EXECUTOR> \u2013 The Amazon S3 URI of the executor pod template, which you get from the AWS CDK output\n- <Log_Group_Name> \u2013 Your CloudWatch log group name\n- <Log_Stream_Prefix> \u2013 Your CloudWatch log stream prefix\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"AWS CLI for start-job-run command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'\naws emr-containers start-job-run \\\n    --virtual-cluster-id CLUSTER-ID\\\n    --name=SPARK-JOB-NAME\\\n    --execution-role-arn ROLE-ARN \\\n    --release-label emr-6.8.0-latest \\\n    --job-driver \'{\n        "sparkSubmitJobDriver":{\n        "entryPoint": "local:///usr/lib/spark/examples/src/main/python/pi.py"\n        }\n    }\' \\\n    --configuration-overrides \'{\n        "applicationConfiguration": [\n            {\n                "classification": "spark-defaults",\n                "properties": {\n                    "spark.hadoop.hive.metastore.client.factory.class": "com.amazonaws.glue.catalog.metastore.AWSGlueDataCatalogHiveClientFactory",\n                    "spark.sql.catalogImplementation": "hive",\n                    "spark.dynamicAllocation.enabled":"true",\n                    "spark.dynamicAllocation.minExecutors": "8",\n                    "spark.dynamicAllocation.maxExecutors": "40",\n                    "spark.kubernetes.allocation.batch.size": "8",\n                    "spark.executor.cores": "8",\n                    "spark.kubernetes.executor.request.cores": "7",\n                    "spark.executor.memory": "28G",\n                    "spark.driver.cores": "2",\n                    "spark.kubernetes.driver.request.cores": "2",\n                    "spark.driver.memory": "6G",\n                    "spark.dynamicAllocation.executorAllocationRatio": "1",\n                    "spark.dynamicAllocation.shuffleTracking.enabled": "true",\n                    "spark.dynamicAllocation.shuffleTracking.timeout": "300s",\n                    "spark.kubernetes.driver.podTemplateFile": "s3://EKS-CLUSTER-NAME-emr-eks-assets-ACCOUNT-ID-REGION/EKS-CLUSTER-NAME/pod-template/critical-driver.yaml",\n                    "spark.kubernetes.executor.podTemplateFile": "s3://EKS-CLUSTER-NAME-emr-eks-assets-ACCOUNT-ID-REGION/EKS-CLUSTER-NAME/pod-template/critical-executor.yaml"\n                }\n            }\n        ],\n        "monitoringConfiguration": {\n            "cloudWatchMonitoringConfiguration": {\n                "logGroupName": "Log_Group_Name",\n                "logStreamNamePrefix": "Log_Stream_Prefix"\n            }\n        }\n    }\'\n'))),(0,o.kt)("p",null,"Verify the job execution"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get pods --namespace=batchjob -w\n")),(0,o.kt)("h3",{id:"interactive-session"},"Interactive session"),(0,o.kt)("p",null,"To use an interactive session, you should log in to the EMR Studio instance with the URL provided to you at the end of ",(0,o.kt)("inlineCode",{parentName:"p"},"cdk deploy"),".\nThis link will be in the form of ",(0,o.kt)("inlineCode",{parentName:"p"},"https://es-xxxxx/emrstudio-prod-REGION.amazonaws.com"),".\nOnce you click on the link you will be see a log in page where you ",(0,o.kt)("strong",{parentName:"p"},"MUST")," sign-in with the username provided to the ",(0,o.kt)("inlineCode",{parentName:"p"},"addUser")," method. When you sign in you should follow these steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create workspace, this will start for a Jupyter notebook"),(0,o.kt)("li",{parentName:"ol"},"Connect to the Jupter notebook"),(0,o.kt)("li",{parentName:"ol"},'Attach to a Virtual cluster, this would be have the following name "emrvcplatform" and chose an endpoint called "platform-myendpoint"'),(0,o.kt)("li",{parentName:"ol"},"Open a notebook and select the PySpark kernel"),(0,o.kt)("li",{parentName:"ol"},"You are now ready to perform analyse your data with Spark running on EMR on EKS.")),(0,o.kt)("h2",{id:"cleanup"},"Cleanup"),(0,o.kt)("p",null,"To clean up your environment, you call the command below. This will destroy the EKS cluster with Node groups and VPC"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cdk destroy\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"To avoid unwanted charges to your AWS account, delete all the AWS resources created during this deployment")))}c.isMDXComponent=!0},6362:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cdk-deploy-result-7f0116c1481ceb53ea9a11d4fc0c7230.png"},9135:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/emr-eks-studio-cdk-ara-48d05caba069c27f9fea7351e13bba60.png"}}]);