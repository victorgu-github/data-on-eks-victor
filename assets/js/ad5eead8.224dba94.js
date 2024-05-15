"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[9743],{9262:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var r=s(5893),t=s(1151),i=s(3913),a=s(5775),l=s(769);const o={sidebar_position:3,title:"EMR on EKS with Flink Streaming"},c=void 0,d={id:"blueprints/streaming-platforms/emr-eks-flink",title:"EMR on EKS with Flink Streaming",description:"Please note that we are working on adding more features to this blueprint such as Flink examples with multiple connectors, Ingress for WebUI, Grafana dashboards etc.",source:"@site/docs/blueprints/streaming-platforms/emr-eks-flink.md",sourceDirName:"blueprints/streaming-platforms",slug:"/blueprints/streaming-platforms/emr-eks-flink",permalink:"/data-on-eks/docs/blueprints/streaming-platforms/emr-eks-flink",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/blueprints/streaming-platforms/emr-eks-flink.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"EMR on EKS with Flink Streaming"},sidebar:"blueprints",previous:{title:"EMR on EKS with Spark Streaming",permalink:"/data-on-eks/docs/blueprints/streaming-platforms/emr-eks-stream"},next:{title:"Flink Operator on EKS",permalink:"/data-on-eks/docs/blueprints/streaming-platforms/flink"}},u={},h=[{value:"Introduction to Apache Flink",id:"introduction-to-apache-flink",level:2},{value:"Architecture",id:"architecture",level:2},{value:"EMR on EKS Flink Kubernetes Operator",id:"emr-on-eks-flink-kubernetes-operator",level:2},{value:"Best Practices for Running Flink Jobs on Kubernetes",id:"best-practices-for-running-flink-jobs-on-kubernetes",level:2},{value:"Flink Upgrade",id:"flink-upgrade",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploy",id:"deploy",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Please note that we are working on adding more features to this blueprint such as Flink examples with multiple connectors, Ingress for WebUI, Grafana dashboards etc."})}),"\n",(0,r.jsx)(n.h2,{id:"introduction-to-apache-flink",children:"Introduction to Apache Flink"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://flink.apache.org/",children:"Apache Flink"})," is an open-source, unified stream processing and batch processing framework that was designed to process large amounts of data. It provides fast, reliable, and scalable data processing with fault tolerance and exactly-once semantics.\r\nSome of the key features of Flink are:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Distributed Processing"}),": Flink is designed to process large volumes of data in a distributed fashion, making it horizontally scalable and fault-tolerant."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Stream Processing and Batch Processing"}),": Flink provides APIs for both stream processing and batch processing. This means you can process data in real-time, as it's being generated, or process data in batches."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Fault Tolerance"}),": Flink has built-in mechanisms for handling node failures, network partitions, and other types of failures."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Exactly-once Semantics"}),": Flink supports exactly-once processing, which ensures that each record is processed exactly once, even in the presence of failures."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Low Latency"}),": Flink's streaming engine is optimized for low-latency processing, making it suitable for use cases that require real-time processing of data."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Extensibility"}),": Flink provides a rich set of APIs and libraries, making it easy to extend and customize to fit your specific use case."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"architecture",children:"Architecture"}),"\n",(0,r.jsx)(n.p,{children:"Flink Architecture high level design with EKS."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Flink Design UI",src:s(8949).Z+"",width:"5078",height:"2207"})}),"\n",(0,r.jsx)(n.h2,{id:"emr-on-eks-flink-kubernetes-operator",children:"EMR on EKS Flink Kubernetes Operator"}),"\n",(0,r.jsxs)(n.p,{children:["Amazon EMR releases 6.13.0 and higher support Amazon EMR on EKS with Apache Flink, or the ",(0,r.jsx)(n.img,{src:"https://gallery.ecr.aws/emr-on-eks/flink-kubernetes-operator",alt:"EMR Flink Kubernetes operator"}),", as a job submission model for Amazon EMR on EKS. With Amazon EMR on EKS with Apache Flink, you can deploy and manage Flink applications with the Amazon EMR release runtime on your own Amazon EKS clusters. Once you deploy the Flink Kubernetes operator in your Amazon EKS cluster, you can directly submit Flink applications with the operator. The operator manages the lifecycle of Flink applications."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Running, suspending and deleting applications"}),"\n",(0,r.jsx)(n.li,{children:"Stateful and stateless application upgrades"}),"\n",(0,r.jsx)(n.li,{children:"Triggering and managing savepoints"}),"\n",(0,r.jsx)(n.li,{children:"Handling errors, rolling-back broken upgrades"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In addition to the above features, EMR Flink Kubernetes operator provides the following additional capabilities:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Launching Flink application using jars in Amazon S3"}),"\n",(0,r.jsx)(n.li,{children:"Monitoring integration with Amazon S3 and Amazon CloudWatch and container log rotation."}),"\n",(0,r.jsx)(n.li,{children:"Automatically tunes Autoscaler configurations based on historical trends of observed metrics."}),"\n",(0,r.jsx)(n.li,{children:"Faster Flink Job Restart during scaling or Failure Recovery"}),"\n",(0,r.jsx)(n.li,{children:"IRSA (IAM Roles for Service Accounts) Native Integration"}),"\n",(0,r.jsx)(n.li,{children:"Pyflink support"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Flink Operator defines two types of Custom Resources(CR) which are the extensions of the Kubernetes API."}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(a.Z,{value:"FlinkDeployment",label:"FlinkDeployment",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"FlinkDeployment"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["FlinkDeployment CR defines ",(0,r.jsx)(n.strong,{children:"Flink Application"})," and ",(0,r.jsx)(n.strong,{children:"Session Cluster"})," deployments."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Application deployments manage a single job deployment on a dedicated Flink cluster in Application mode."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Session clusters allows you to run multiple Flink Jobs on an existing Session cluster."}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:"FlinkDeployment in Application modes, Click to toggle content!"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'apiVersion: flink.apache.org/v1beta1\r\nkind: FlinkDeployment\r\nmetadata:\r\nnamespace: default\r\nname: basic-example\r\nspec:\r\nimage: flink:1.16\r\nflinkVersion: v1_16\r\nflinkConfiguration:\r\n    taskmanager.numberOfTaskSlots: "2"\r\nserviceAccount: flink\r\njobManager:\r\n    resource:\r\n    memory: "2048m"\r\n    cpu: 1\r\ntaskManager:\r\n    resource:\r\n    memory: "2048m"\r\n    cpu: 1\r\njob:\r\n    jarURI: local:///opt/flink/examples/streaming/StateMachineExample.jar\r\n    parallelism: 2\r\n    upgradeMode: stateless\r\n    state: running\n'})})]}),"\n"]}),"\n"]})]}),(0,r.jsxs)(a.Z,{value:"FlinkSessionJob",label:"FlinkSessionJob",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"FlinkSessionJob"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"FlinkSessionJob"})," CR defines the session job on the ",(0,r.jsx)(n.strong,{children:"Session cluster"})," and each Session cluster can run multiple ",(0,r.jsx)(n.code,{children:"FlinkSessionJob"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Session deployments manage Flink Session clusters without providing any job management for it"}),"\n",(0,r.jsxs)(o,{children:[(0,r.jsx)("summary",{children:'FlinkSessionJob using an existing "basic-session-cluster" session cluster deployment'}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: flink.apache.org/v1beta1\r\nkind: FlinkSessionJob\r\nmetadata:\r\nname: basic-session-job-example\r\nspec:\r\ndeploymentName: basic-session-cluster\r\njob:\r\n    jarURI: https://repo1.maven.org/maven2/org/apache/flink/flink-examples-streaming_2.12/1.15.3/flink-examples-streaming_2.12-1.15.3-TopSpeedWindowing.jar\r\n    parallelism: 4\r\n    upgradeMode: stateless\n"})})]}),"\n"]}),"\n"]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Session clusters use a similar spec to Application clusters with the only difference that ",(0,r.jsx)(n.code,{children:"job"})," is not defined in the yaml spec."]})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"According to the Flink documentation, it is recommended to use FlinkDeployment in Application mode for production environments."})}),"\n",(0,r.jsxs)(n.p,{children:["On top of the deployment types the Flink Kubernetes Operator also supports two modes of deployments: ",(0,r.jsx)(n.code,{children:"Native"})," and ",(0,r.jsx)(n.code,{children:"Standalone"}),"."]}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(a.Z,{value:"Native",label:"Native",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Native"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Native cluster deployment is the default deployment mode and uses Flink\u2019s built in integration with Kubernetes when deploying the cluster."}),"\n",(0,r.jsx)(n.li,{children:"Flink cluster communicates directly with Kubernetes and allows it to manage Kubernetes resources, e.g. dynamically allocate and de-allocate TaskManager pods."}),"\n",(0,r.jsx)(n.li,{children:"Flink Native can be useful for advanced users who want to build their own cluster management system or integrate with existing management systems."}),"\n",(0,r.jsx)(n.li,{children:"Flink Native allows for more flexibility in terms of job scheduling and execution."}),"\n",(0,r.jsx)(n.li,{children:"For standard Operator use, running your own Flink Jobs in Native mode is recommended."}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: flink.apache.org/v1beta1\r\nkind: FlinkDeployment\r\n...\r\nspec:\r\n...\r\nmode: native\n"})})]}),(0,r.jsxs)(a.Z,{value:"Standalone",label:"Standalone",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Standalone"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Standalone cluster deployment simply uses Kubernetes as an orchestration platform that the Flink cluster is running on."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Flink is unaware that it is running on Kubernetes and therefore all Kubernetes resources need to be managed externally, by the Kubernetes Operator."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"apiVersion: flink.apache.org/v1beta1\r\nkind: FlinkDeployment\r\n...\r\nspec:\r\n...\r\nmode: standalone\n"})}),"\n"]}),"\n"]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"best-practices-for-running-flink-jobs-on-kubernetes",children:"Best Practices for Running Flink Jobs on Kubernetes"}),"\n",(0,r.jsx)(n.p,{children:"To get the most out of Flink on Kubernetes, here are some best practices to follow:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Use the Kubernetes Operator"}),": Install and use the Flink Kubernetes Operator to automate the deployment and management of Flink clusters on Kubernetes."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Deploy in dedicated namespaces"}),": Create a separate namespace for the Flink Kubernetes Operator and another one for Flink jobs/workloads. This ensures that the Flink jobs are isolated and have their own resources."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Use high-quality storage"}),": Store Flink checkpoints and savepoints in high-quality storage such as Amazon S3 or another durable external storage. These storage options are reliable, scalable, and offer durability for large volumes of data."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Optimize resource allocation"}),": Allocate sufficient resources to Flink jobs to ensure optimal performance. This can be done by setting resource requests and limits for Flink containers."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Proper network isolation"}),": Use Kubernetes Network Policies to isolate Flink jobs from other workloads running on the same Kubernetes cluster. This ensures that Flink jobs have the required network access without being impacted by other workloads."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Configure Flink optimally"}),": Tune Flink settings according to your use case. For example, adjust Flink's parallelism settings to ensure that Flink jobs are scaled appropriately based on the size of the input data."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Use checkpoints and savepoints"}),": Use checkpoints for periodic snapshots of Flink application state and savepoints for more advanced use cases such as upgrading or downgrading the application."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Store checkpoints and savepoints in the right places"}),": Store checkpoints in distributed file systems or key-value stores like Amazon S3 or another durable external storage. Store savepoints in a durable external storage like Amazon S3."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"flink-upgrade",children:"Flink Upgrade"}),"\n",(0,r.jsxs)(n.p,{children:["Flink Operator provides three upgrade modes for Flink jobs. Checkout the ",(0,r.jsx)(n.a,{href:"https://nightlies.apache.org/flink/flink-kubernetes-operator-docs-main/docs/custom-resource/job-management/#stateful-and-stateless-application-upgrades",children:"Flink upgrade docs"})," for up-to-date information."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"stateless"}),": Stateless application upgrades from empty state"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"last-state"}),": Quick upgrades in any application state (even for failing jobs), does not require a healthy job as it always uses the latest checkpoint information. Manual recovery may be necessary if HA metadata is lost."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"savepoint"}),": Use savepoint for upgrade, providing maximal safety and possibility to serve as backup/fork point. The savepoint will be created during the upgrade process. Note that the Flink job needs to be running to allow the savepoint to get created. If the job is in an unhealthy state, the last checkpoint will be used (unless kubernetes.operator.job.upgrade.last-state-fallback.enabled is set to false). If the last checkpoint is not available, the job upgrade will fail."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"last-state"})," or ",(0,r.jsx)(n.code,{children:"savepoint"})," are recommended modes for production"]})}),"\n",(0,r.jsxs)(l.Z,{header:(0,r.jsx)(n.h2,{children:(0,r.jsx)(n.span,{children:"Deploying the Solution"})}),children:[(0,r.jsxs)(n.p,{children:["In this ",(0,r.jsx)(n.a,{href:"https://github.com/awslabs/data-on-eks/tree/main/streaming/flink",children:"example"}),", you will provision the following resources required to run Flink Jobs with Flink Operator and Apache YuniKorn."]}),(0,r.jsx)(n.p,{children:"This example deploys an EKS Cluster running the Flink Operator into a new VPC."}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Creates a new sample VPC, 2 Private Subnets and 2 Public Subnets"}),"\n",(0,r.jsx)(n.li,{children:"Creates Internet gateway for Public Subnets and NAT Gateway for Private Subnets"}),"\n",(0,r.jsx)(n.li,{children:"Creates EKS Cluster Control plane with public endpoint (for demo reasons only) with core managed node group, on-demand node group and Spot node group for Flink workloads"}),"\n",(0,r.jsx)(n.li,{children:"Deploys Metrics server, Cluster Autoscaler, Apache YuniKorn, Karpenter, Grafana, AMP and Prometheus server"}),"\n",(0,r.jsx)(n.li,{children:"Deploys Cert Manager and EMR Flink Operator. Flink Operator has dependency on Cert Manager"}),"\n",(0,r.jsx)(n.li,{children:"Creates a new Flink Data team resources that includes namespace, IRSA, Role and Role binding"}),"\n",(0,r.jsx)(n.li,{children:"Deploys Karpenter provisioner for flink-compute-optimized types"}),"\n"]}),(0,r.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),(0,r.jsx)(n.p,{children:"Ensure that you have installed the following tools on your machine."}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html",children:"aws cli"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://Kubernetes.io/docs/tasks/tools/",children:"kubectl"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli",children:"terraform"})}),"\n"]}),(0,r.jsx)(n.h3,{id:"deploy",children:"Deploy"}),(0,r.jsx)(n.p,{children:"Clone the repository."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/awslabs/data-on-eks.git\n"})}),(0,r.jsxs)(n.p,{children:["Navigate into Flink's Terraform template directory and run ",(0,r.jsx)(n.code,{children:"install.sh"})," script."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd data-on-eks/streaming/emr-flink-eks\r\nchmod +x install.sh\r\n./install.sh\n"})}),(0,r.jsx)(n.p,{children:"Verify the cluster status"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"    \u279c kubectl get nodes -A\r\n    NAME                                         STATUS   ROLES    AGE   VERSION\r\n    ip-10-1-160-150.us-west-2.compute.internal   Ready    <none>   24h   v1.24.11-eks-a59e1f0\r\n    ip-10-1-169-249.us-west-2.compute.internal   Ready    <none>   6d    v1.24.11-eks-a59e1f0\r\n    ip-10-1-69-244.us-west-2.compute.internal    Ready    <none>   6d    v1.24.11-eks-a59e1f0\r\n\r\n    \u279c  ~ kubectl get pods -n flink-kubernetes-operator-ns\r\n    NAME                                         READY   STATUS    RESTARTS   AGE\r\n    flink-kubernetes-operator-555776785f-pzx8p   2/2     Running   0          4h21m\r\n    flink-kubernetes-operator-555776785f-z5jpt   2/2     Running   0          4h18m\r\n\r\n    \u279c  ~ kubectl get pods -n cert-manager\r\n    NAME                                      READY   STATUS    RESTARTS   AGE\r\n    cert-manager-77fc7548dc-dzdms             1/1     Running   0          24h\r\n    cert-manager-cainjector-8869b7ff7-4w754   1/1     Running   0          24h\r\n    cert-manager-webhook-586ddf8589-g6s87     1/1     Running   0          24h\n"})}),(0,r.jsx)(n.p,{children:"To list all the resources created for Flink team to run Flink jobs using this namespace"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"    \u279c  ~ kubectl get all,role,rolebinding,serviceaccount --namespace flink-team-a-ns\r\n    NAME                                               CREATED AT\r\n    role.rbac.authorization.k8s.io/flink-team-a-role   2023-04-06T13:17:05Z\r\n\r\n    NAME                                                              ROLE                     AGE\r\n    rolebinding.rbac.authorization.k8s.io/flink-team-a-role-binding   Role/flink-team-a-role   22h\r\n\r\n    NAME                             SECRETS   AGE\r\n    serviceaccount/default           0         22h\r\n    serviceaccount/flink-team-a-sa   0         22h\n"})})]}),"\n",(0,r.jsxs)(l.Z,{header:(0,r.jsx)(n.h2,{children:(0,r.jsx)(n.span,{children:"Execute Sample Flink job with Karpenter"})}),children:[(0,r.jsx)(n.p,{children:"Navigate to example directory and submit the Flink job."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd data-on-eks/streaming/emr-eks-flink/examples/karpenter\n"})}),(0,r.jsx)(n.p,{children:"Get the role arn linked to the job execution service account."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"terraform output flink_job_execution_role_arn\n"})}),(0,r.jsx)(n.p,{children:"Get the S3 bucket name for checkpoint,savepoint,logs and job storage data."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"terraform output flink_operator_bucket\n"})}),(0,r.jsxs)(n.p,{children:["Open the basic-example-app-cluster.yaml in any editor and replace the place holder for ",(0,r.jsx)(n.strong,{children:"JOB_EXECUTION_ROLE_ARN"})," with the flink_job_execution_role_arn terraform output command. Replace the ",(0,r.jsx)(n.strong,{children:"ENTER_S3_BUCKET"})," placeholder with the flink_operator_bucket output."]}),(0,r.jsx)(n.p,{children:"Deploy the job by running the kubectl deploy command."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl apply -f basic-example-app-cluster.yaml\n"})}),(0,r.jsx)(n.p,{children:"Monitor the job status using the below command.\r\nYou should see the new nodes triggered by the karpenter and the YuniKorn will schedule one Job manager pod and one Taskmanager pods on this node."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl get deployments -n flink-team-a-ns\r\nNAME                              READY   UP-TO-DATE   AVAILABLE   AGE\r\nbasic-example-app-cluster-flink   2/2     2            2           3h6m\r\n\r\nkubectl get pods -n flink-team-a-ns\r\nNAME                                               READY   STATUS    RESTARTS   AGE\r\nbasic-example-app-cluster-flink-7c7d9c6fd9-cdfmd   2/2     Running   0          3h7m\r\nbasic-example-app-cluster-flink-7c7d9c6fd9-pjxj2   2/2     Running   0          3h7m\r\nbasic-example-app-cluster-flink-taskmanager-1-1    2/2     Running   0          3h6m\r\n\r\nkubectl get services -n flink-team-a-ns\r\nNAME                                   TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)    AGE\r\nbasic-example-app-cluster-flink-rest   ClusterIP   172.20.17.152   <none>        8081/TCP   3h7m\n"})}),(0,r.jsx)(n.p,{children:"To access the Flink WebUI for the job run this command locally."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl port-forward svc/basic-example-app-cluster-flink-rest 8081 -n flink-team-a-ns\n"})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.img,{alt:"Flink Job UI",src:s(3470).Z+"",width:"3022",height:"1604"}),"\r\n",(0,r.jsx)(n.img,{alt:"Flink Job UI",src:s(1917).Z+"",width:"3022",height:"1604"}),"\r\n",(0,r.jsx)(n.img,{alt:"Flink Job UI",src:s(9052).Z+"",width:"3022",height:"1604"}),"\r\n",(0,r.jsx)(n.img,{alt:"Flink Job UI",src:s(3261).Z+"",width:"3022",height:"1604"}),"\r\n",(0,r.jsx)(n.img,{alt:"Flink Job UI",src:s(8578).Z+"",width:"3022",height:"1604"})]})]}),"\n",(0,r.jsxs)(l.Z,{header:(0,r.jsx)(n.h2,{children:(0,r.jsx)(n.span,{children:"Cleanup"})}),children:[(0,r.jsxs)(n.p,{children:["This script will cleanup the environment using ",(0,r.jsx)(n.code,{children:"-target"})," option to ensure all the resources are deleted in correct order."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd .. && chmod +x cleanup.sh\r\n./cleanup.sh\n"})})]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"To avoid unwanted charges to your AWS account, delete all the AWS resources created during this deployment"})})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},5775:(e,n,s)=>{s.d(n,{Z:()=>a});s(7294);var r=s(512);const t={tabItem:"tabItem__kUE"};var i=s(5893);function a(e){let{children:n,hidden:s,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(t.tabItem,a),hidden:s,children:n})}},3913:(e,n,s)=>{s.d(n,{Z:()=>v});var r=s(7294),t=s(512),i=s(5944),a=s(6550),l=s(469),o=s(2434),c=s(2398),d=s(3088);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:t}}=e;return{value:n,label:s,attributes:r,default:t}}))}(s);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const t=(0,a.k6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function g(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,i=h(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,u]=m({queryString:s,groupId:t}),[g,b]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,d.Nk)(s);return[t,(0,r.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:t}),f=(()=>{const e=c??g;return p({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=s(2389);const f={tabList:"tabList_fbd4",tabItem:"tabItem_v5XY"};var k=s(5893);function x(e){let{className:n,block:s,selectedValue:r,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,s=o.indexOf(n),t=l[s].value;t!==r&&(c(n),a(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...i,className:(0,t.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function j(e){let{lazy:n,children:s,selectedValue:t}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=g(e);return(0,k.jsxs)("div",{className:(0,t.Z)("tabs-container",f.tabList),children:[(0,k.jsx)(x,{...e,...n}),(0,k.jsx)(j,{...e,...n})]})}function v(e){const n=(0,b.Z)();return(0,k.jsx)(y,{...e,children:u(e.children)},String(n))}},769:(e,n,s)=>{s.d(n,{Z:()=>m});var r=s(7294),t=s(5697),i=s.n(t),a=s(512);const l="collapsibleContent_q3kw",o="header_QCEw",c="icon_PckA",d="content_qLC1",u="expanded_iGsi";var h=s(5893);function p(e){let{children:n,header:s}=e;const[t,i]=(0,r.useState)(!1);return(0,h.jsxs)("div",{className:l,children:[(0,h.jsxs)("div",{className:(0,a.Z)(o,{[u]:t}),onClick:()=>{i(!t)},children:[s,(0,h.jsx)("span",{className:(0,a.Z)(c,{[u]:t}),children:t?"\ud83d\udc47":"\ud83d\udc48"})]}),t&&(0,h.jsx)("div",{className:d,children:n})]})}p.propTypes={children:i().node.isRequired,header:i().node.isRequired};const m=p},8949:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/flink-design-76636a1cd4f5b26cb4c136a805d8edb9.png"},3470:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/flink1-917ff73ed2e0467f8f5c3c4c3150bb85.png"},1917:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/flink2-61b9b18791139dd0b8412509e14a1d4a.png"},9052:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/flink3-ce2609f46e015076be7e99da7c953e55.png"},3261:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/flink4-191396cf259ff9c97125466de6b84a9a.png"},8578:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/flink5-d8e8a986eab75fe25b338df4f9a0d031.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>a});var r=s(7294);const t={},i=r.createContext(t);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);