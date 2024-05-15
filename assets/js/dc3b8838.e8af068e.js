"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[4182],{5465:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=a(5893),s=a(1151),t=a(769);const i={sidebar_position:4,sidebar_label:"EMR NVIDIA Spark-RAPIDS"},o="EMR on EKS NVIDIA RAPIDS Accelerator for Apache Spark",l={id:"blueprints/ai-ml/emr-spark-rapids",title:"EMR on EKS NVIDIA RAPIDS Accelerator for Apache Spark",description:"The NVIDIA RAPIDS Accelerator for Apache Spark is a powerful tool that builds on the capabilities of NVIDIA CUDA\xae - a transformative parallel computing platform designed for enhancing computational processes on NVIDIA's GPU architecture. RAPIDS, a project developed by NVIDIA, comprises a suite of open-source libraries that are hinged upon CUDA, thereby enabling GPU-accelerated data science workflows.",source:"@site/docs/blueprints/ai-ml/emr-spark-rapids.md",sourceDirName:"blueprints/ai-ml",slug:"/blueprints/ai-ml/emr-spark-rapids",permalink:"/data-on-eks/docs/blueprints/ai-ml/emr-spark-rapids",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/blueprints/ai-ml/emr-spark-rapids.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"EMR NVIDIA Spark-RAPIDS"},sidebar:"blueprints",previous:{title:"JupyterHub on EKS",permalink:"/data-on-eks/docs/blueprints/ai-ml/jupyterhub"},next:{title:"Trainium on EKS",permalink:"/data-on-eks/docs/blueprints/ai-ml/trainium"}},c={},d=[{value:"EMR support for NVIDIA RAPIDS Accelerator for Apache Spark",id:"emr-support-for-nvidia-rapids-accelerator-for-apache-spark",level:3},{value:"Features",id:"features",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploy",id:"deploy",level:3},{value:"Verify the resources",id:"verify-the-resources",level:3},{value:"Launching XGBoost Spark Job",id:"launching-xgboost-spark-job",level:3},{value:"Training Dataset",id:"training-dataset",level:4},{value:"Step 1: Building a Custom Docker Image",id:"step-1-building-a-custom-docker-image",level:4},{value:"Step2: Acquire the Input Data (Fannie Mae\u2019s Single-Family Loan Performance Data)",id:"step2-acquire-the-input-data-fannie-maes-single-family-loan-performance-data",level:3},{value:"Step3: Run the EMR Spark XGBoost Job",id:"step3-run-the-emr-spark-xgboost-job",level:3},{value:"Step4: Verify the Job results",id:"step4-verify-the-job-results",level:3},{value:"ML Pipeline for Fannie Mae Single Loan Performance Dataset",id:"ml-pipeline-for-fannie-mae-single-loan-performance-dataset",level:3},{value:"GPU Monitoring with DCGM Exporter, Prometheus and Grafana",id:"gpu-monitoring-with-dcgm-exporter-prometheus-and-grafana",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",span:"span",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"emr-on-eks-nvidia-rapids-accelerator-for-apache-spark",children:"EMR on EKS NVIDIA RAPIDS Accelerator for Apache Spark"}),"\n",(0,r.jsx)(n.p,{children:"The NVIDIA RAPIDS Accelerator for Apache Spark is a powerful tool that builds on the capabilities of NVIDIA CUDA\xae - a transformative parallel computing platform designed for enhancing computational processes on NVIDIA's GPU architecture. RAPIDS, a project developed by NVIDIA, comprises a suite of open-source libraries that are hinged upon CUDA, thereby enabling GPU-accelerated data science workflows."}),"\n",(0,r.jsx)(n.p,{children:"With the invention of the RAPIDS Accelerator for Spark 3, NVIDIA has successfully revolutionized extract, transform, and load pipelines by significantly enhancing the efficiency of Spark SQL and DataFrame operations. By merging the capabilities of the RAPIDS cuDF library and the extensive reach of the Spark distributed computing ecosystem, the RAPIDS Accelerator for Apache Spark provides a robust solution to handle large-scale computations.\nMoreover, the RAPIDS Accelerator library incorporates an advanced shuffle optimized by UCX, which can be configured to support GPU-to-GPU communication and RDMA capabilities, hence further boosting its performance."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Alt text",src:a(2330).Z+"",width:"1200",height:"676"})}),"\n",(0,r.jsx)(n.h3,{id:"emr-support-for-nvidia-rapids-accelerator-for-apache-spark",children:"EMR support for NVIDIA RAPIDS Accelerator for Apache Spark"}),"\n",(0,r.jsx)(n.p,{children:"Integration of Amazon EMR with NVIDIA RAPIDS Accelerator for Apache Spark\u200b Amazon EMR on EKS now extends its support to include the use of GPU instance types with the NVIDIA RAPIDS Accelerator for Apache Spark. As the use of artificial intelligence (AI) and machine learning (ML) continues to expand in the realm of data analytics, there's an increasing demand for rapid and cost-efficient data processing, which GPUs can provide. The NVIDIA RAPIDS Accelerator for Apache Spark enables users to harness the superior performance of GPUs, leading to substantial infrastructure cost savings."}),"\n",(0,r.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Highlighted Features\u200b Experience a performance boost in data preparation tasks, allowing you to transition quickly to the subsequent stages of your pipeline. This not only accelerates model training but also liberates data scientists and engineers to concentrate on priority tasks."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Spark 3 ensures seamless coordination of end-to-end pipelines - from data ingestion, through model training, to visualization. The same GPU-accelerated setup can serve both Spark and machine learning or deep learning frameworks. This obviates the need for discrete clusters and provides GPU acceleration to the entire pipeline."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Spark 3 extends support for columnar processing in the Catalyst query optimizer. The RAPIDS Accelerator can plug into this system to speed up SQL and DataFrame operators. When the query plan is actioned, these operators can then utilize the GPUs within the Spark cluster for improved performance."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"NVIDIA has introduced an innovative Spark shuffle implementation designed to optimize data exchange between Spark tasks. This shuffle system is built on GPU-boosted communication libraries, including UCX, RDMA, and NCCL, which significantly enhance data transfer rates and overall performance.-"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.Z,{header:(0,r.jsx)(n.h2,{children:(0,r.jsx)(n.span,{children:"Deploying the Solution"})}),children:[(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Before deploying this blueprint, it is important to be cognizant of the costs associated with the utilization of GPU Instances. The blueprint sets up eight g5.2xlarge GPU instances for training the dataset, employing the NVIDIA Spark-RAPIDS accelerator. Be sure to assess and plan for these costs accordingly."})}),(0,r.jsxs)(n.p,{children:["In this ",(0,r.jsx)(n.a,{href:"https://github.com/awslabs/data-on-eks/tree/main/ai-ml/emr-spark-rapids",children:"example"}),", you will provision the following resources required to run XGBoost Spark RAPIDS Accelerator job with ",(0,r.jsx)(n.a,{href:"https://capitalmarkets.fanniemae.com/credit-risk-transfer/single-family-credit-risk-transfer/fannie-mae-single-family-loan-performance-data",children:"Fannie Mae\u2019s Single-Family Loan Performance Data"}),"."]}),(0,r.jsx)(n.p,{children:"This example deploys the following resources"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Creates a new sample VPC, 2 Private Subnets and 2 Public Subnets"}),"\n",(0,r.jsx)(n.li,{children:"Creates Internet gateway for Public Subnets and NAT Gateway for Private Subnets"}),"\n",(0,r.jsx)(n.li,{children:"Creates EKS Cluster Control plane with public endpoint (for demo reasons only) with core managed node group, Spark driver node group and GPU Spot node group for ML workloads."}),"\n",(0,r.jsx)(n.li,{children:"Ubuntu EKS AMI used for Spark Driver and Spark executor GPU Node groups"}),"\n",(0,r.jsx)(n.li,{children:"NVIDIA GPU Operator helm add-on deployed"}),"\n",(0,r.jsx)(n.li,{children:"Deploys Metrics server, Cluster Autoscaler, Karpenter, Grafana, AMP and Prometheus server."}),"\n",(0,r.jsxs)(n.li,{children:["Enables EMR on EKS","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Creates two namespaces (",(0,r.jsx)(n.code,{children:"emr-ml-team-a"}),", ",(0,r.jsx)(n.code,{children:"emr-ml-team-b"}),") for data teams"]}),"\n",(0,r.jsxs)(n.li,{children:["Creates Kubernetes role and role binding(",(0,r.jsx)(n.code,{children:"emr-containers"})," user) for both namespaces"]}),"\n",(0,r.jsx)(n.li,{children:"IAM roles for both teams needed for job execution"}),"\n",(0,r.jsxs)(n.li,{children:["Update ",(0,r.jsx)(n.code,{children:"AWS_AUTH"})," config map with ",(0,r.jsx)(n.code,{children:"emr-containers"})," user and ",(0,r.jsx)(n.code,{children:"AWSServiceRoleForAmazonEMRContainers"})," role"]}),"\n",(0,r.jsx)(n.li,{children:"Create a trust relationship between the job execution role and the identity of the EMR managed service account"}),"\n",(0,r.jsxs)(n.li,{children:["Create EMR Virtual Cluster for ",(0,r.jsx)(n.code,{children:"emr-ml-team-a"})," & ",(0,r.jsx)(n.code,{children:"emr-ml-team-b"})," and IAM policies for both"]}),"\n"]}),"\n"]}),"\n"]}),(0,r.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),(0,r.jsx)(n.p,{children:"Ensure that you have installed the following tools on your machine."}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html",children:"aws cli"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://Kubernetes.io/docs/tasks/tools/",children:"kubectl"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://learn.hashicorp.com/tutorials/terraform/install-cli",children:"terraform"})}),"\n"]}),(0,r.jsx)(n.h3,{id:"deploy",children:"Deploy"}),(0,r.jsx)(n.p,{children:"Clone the repository"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/awslabs/data-on-eks.git\n"})}),(0,r.jsxs)(n.p,{children:["Navigate into one of the example directories and run ",(0,r.jsx)(n.code,{children:"install.sh"})," script"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd data-on-eks/ai-ml/emr-spark-rapids/ && chmod +x install.sh\n./install.sh\n"})}),(0,r.jsx)(n.h3,{id:"verify-the-resources",children:"Verify the resources"}),(0,r.jsx)(n.p,{children:"Verify the Amazon EKS Cluster and Amazon Managed service for Prometheus"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"aws eks describe-cluster --name emr-spark-rapids\n"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Creates k8s config file to authenticate with EKS\naws eks --region us-west-2 update-kubeconfig --name emr-spark-rapids Cluster\n\nkubectl get nodes # Output shows the EKS Managed Node group nodes\n\n# Verify EMR on EKS Namespaces `emr-ml-team-a` and `emr-ml-team-b`\nkubectl get ns | grep emr-ml-team\n"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl get pods --namespace=gpu-operator\n\n# Output example for GPU node group with one node running\n\n    NAME                                                              READY   STATUS\n    gpu-feature-discovery-7gccd                                       1/1     Running\n    gpu-operator-784b7c5578-pfxgx                                     1/1     Running\n    nvidia-container-toolkit-daemonset-xds6r                          1/1     Running\n    nvidia-cuda-validator-j2b42                                       0/1     Completed\n    nvidia-dcgm-exporter-vlttv                                        1/1     Running\n    nvidia-device-plugin-daemonset-r5m7z                              1/1     Running\n    nvidia-device-plugin-validator-hg78p                              0/1     Completed\n    nvidia-driver-daemonset-6s9qv                                     1/1     Running\n    nvidia-gpu-operator-node-feature-discovery-master-6f78fb7cbx79z   1/1     Running  \n    nvidia-gpu-operator-node-feature-discovery-worker-b2f6b           1/1     Running\n    nvidia-gpu-operator-node-feature-discovery-worker-dc2pq           1/1     Running\n    nvidia-gpu-operator-node-feature-discovery-worker-h7tpq           1/1     Running\n    nvidia-gpu-operator-node-feature-discovery-worker-hkj6x           1/1     Running\n    nvidia-gpu-operator-node-feature-discovery-worker-zjznr           1/1     Running  \n    nvidia-operator-validator-j7lzh                                   1/1     Running\n"})})]}),"\n",(0,r.jsx)(n.h3,{id:"launching-xgboost-spark-job",children:"Launching XGBoost Spark Job"}),"\n",(0,r.jsx)(n.h4,{id:"training-dataset",children:"Training Dataset"}),"\n",(0,r.jsx)(n.p,{children:"Fannie Mae\u2019s Single-Family Loan Performance Data has a comprehensive dataset starting from 2013. It provides valuable insights into the credit performance of a portion of Fannie Mae\u2019s single-family book of business. This dataset is designed to assist investors in better understanding the credit performance of single-family loans owned or guaranteed by Fannie Mae."}),"\n",(0,r.jsx)(n.h4,{id:"step-1-building-a-custom-docker-image",children:"Step 1: Building a Custom Docker Image"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["To pull the Spark Rapids base image from the EMR on EKS ECR repository located in ",(0,r.jsx)(n.code,{children:"us-west-2"}),", log in:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 895885662937.dkr.ecr.us-west-2.amazonaws.com\n"})}),"\n",(0,r.jsxs)(n.p,{children:["If you're located in a different region, please refer to: this ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/docker-custom-images-tag.html.",children:"guide"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"To build your Docker image locally, use the following command:"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Build the custom Docker image using the provided ",(0,r.jsx)(n.code,{children:"Dockerfile"}),". Choose a tag for the image, such as 0.10."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Please note that the build process may take some time, depending on your network speed. Keep in mind that the resulting image size will be approximately ",(0,r.jsx)(n.code,{children:"23.5GB"}),"."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~/data-on-eks/ai-ml/emr-spark-rapids/examples/xgboost\ndocker build -t emr-6.10.0-spark-rapids-custom:0.10 -f Dockerfile .\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Replace ",(0,r.jsx)(n.code,{children:"<ACCOUNTID>"})," with your AWS account ID. Log in to your ECR repository with the following command:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"aws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin <ACCOUNTID>.dkr.ecr.us-west-2.amazonaws.com\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"To push your Docker image to your ECR, use:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ docker tag emr-6.10.0-spark-rapids-custom:0.10 <ACCOUNT_ID>.dkr.ecr.us-west-2.amazonaws.com/emr-6.10.0-spark-rapids-custom:0.10\n$ docker push <ACCOUNT_ID>.dkr.ecr.us-west-2.amazonaws.com/emr-6.10.0-spark-rapids-custom:0.10\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can use this image during the job execution in ",(0,r.jsx)(n.code,{children:"Step3"})," ."]}),"\n",(0,r.jsx)(n.h3,{id:"step2-acquire-the-input-data-fannie-maes-single-family-loan-performance-data",children:"Step2: Acquire the Input Data (Fannie Mae\u2019s Single-Family Loan Performance Data)"}),"\n",(0,r.jsxs)(n.p,{children:["This dataset is sourced from ",(0,r.jsx)(n.a,{href:"http://www.fanniemae.com/portal/funding-the-market/data/loan-performance-data.html",children:"Fannie Mae\u2019s Single-Family Loan Performance Data"}),". All rights are held by Fannie Mae."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Go to the ",(0,r.jsx)(n.a,{href:"https://capitalmarkets.fanniemae.com/credit-risk-transfer/single-family-credit-risk-transfer/fannie-mae-single-family-loan-performance-data",children:"Fannie Mae"})," website"]}),"\n",(0,r.jsxs)(n.li,{children:["Click on ",(0,r.jsx)(n.a,{href:"https://datadynamics.fanniemae.com/data-dynamics/?&_ga=2.181456292.2043790680.1657122341-289272350.1655822609#/reportMenu;category=HP",children:"Single-Family Loan Performance Data"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Register as a new user if you are using the website for the first time"}),"\n",(0,r.jsx)(n.li,{children:"Use the credentials to login"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Select ",(0,r.jsx)(n.a,{href:"https://datadynamics.fanniemae.com/data-dynamics/#/reportMenu;category=HP",children:"HP"})]}),"\n",(0,r.jsxs)(n.li,{children:["Click on  ",(0,r.jsx)(n.code,{children:"Download Data"})," and choose ",(0,r.jsx)(n.code,{children:"Single-Family Loan Performance Data"})]}),"\n",(0,r.jsx)(n.li,{children:"You will find a tabular list of Acquisition and Performance` files sorted based on year and quarter. Click on the file to download. You can download three years(2020, 2021 and 2022 - 4 files for each year and one for each quarter) worth of data that will be used in our example job.  e.g.,: 2017Q1.zip"}),"\n",(0,r.jsx)(n.li,{children:"Unzip the download file to extract the csv file to your local machine. e.g.,: 2017Q1.csv"}),"\n",(0,r.jsxs)(n.li,{children:["Copy only the CSV files to an S3 bucket under ",(0,r.jsx)(n.code,{children:"${S3_BUCKET}/${EMR_VIRTUAL_CLUSTER_ID}/spark-rapids-emr/input/fannie-mae-single-family-loan-performance/"}),". The example below uses three years of data (one file for each quarter, 12 files in total). Note: ",(0,r.jsx)(n.code,{children:"${S3_BUCKET}"})," and ",(0,r.jsx)(n.code,{children:"${EMR_VIRTUAL_CLUSTER_ID}"})," values can be extracted from Terraform outputs."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:" aws s3 ls s3://emr-spark-rapids-<aws-account-id>-us-west-2/949wt7zuphox1beiv0i30v65i/spark-rapids-emr/input/fannie-mae-single-family-loan-performance/\n    2023-06-24 21:38:25 2301641519 2000Q1.csv\n    2023-06-24 21:38:25 9739847213 2020Q2.csv\n    2023-06-24 21:38:25 10985541111 2020Q3.csv\n    2023-06-24 21:38:25 11372073671 2020Q4.csv\n    2023-06-23 16:38:36 9603950656 2021Q1.csv\n    2023-06-23 16:38:36 7955614945 2021Q2.csv\n    2023-06-23 16:38:36 5365827884 2021Q3.csv\n    2023-06-23 16:38:36 4390166275 2021Q4.csv\n    2023-06-22 19:20:08 2723499898 2022Q1.csv\n    2023-06-22 19:20:08 1426204690 2022Q2.csv\n    2023-06-22 19:20:08  595639825 2022Q3.csv\n    2023-06-22 19:20:08  180159771 2022Q4.csv\n"})}),"\n",(0,r.jsx)(n.h3,{id:"step3-run-the-emr-spark-xgboost-job",children:"Step3: Run the EMR Spark XGBoost Job"}),"\n",(0,r.jsx)(n.p,{children:"Here, we will utilize a helper shell script to execute the job. This script requires user input."}),"\n",(0,r.jsx)(n.p,{children:"This script will ask for certain inputs that you can obtain from Terraform outputs. See the example below."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ai-ml/emr-spark-rapids/examples/xgboost/ && chmod +x execute_spark_rapids_xgboost.sh\n./execute_spark_rapids_xgboost.sh\n\n# Example inputs shown below\n    Did you copy the fannie-mae-single-family-loan-performance data to S3 bucket(y/n): y\n    Enter the customized Docker image URI: public.ecr.aws/o7d8v7g9/emr-6.10.0-spark-rapids:0.11\n    Enter EMR Virtual Cluster AWS Region: us-west-2\n    Enter the EMR Virtual Cluster ID: 949wt7zuphox1beiv0i30v65i\n    Enter the EMR Execution Role ARN: arn:aws:iam::<ACCOUNTID>:role/emr-spark-rapids-emr-eks-data-team-a\n    Enter the CloudWatch Log Group name: /emr-on-eks-logs/emr-spark-rapids/emr-ml-team-a\n    Enter the S3 Bucket for storing PySpark Scripts, Pod Templates, Input data and Output data.<bucket-name>: emr-spark-rapids-<ACCOUNTID>-us-west-2\n    Enter the number of executor instances (4 to 8): 8\n"})}),"\n",(0,r.jsx)(n.p,{children:"Verify the pod status"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Alt text",src:a(5550).Z+"",width:"2846",height:"848"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Note that the first execution might take longer as it needs to download the image for the EMR Job Pod, Driver, and Executor pods. Each pod may take up to 8 minutes to download the Docker image. Subsequent runs should be faster (usually under 30 seconds), thanks to image caching"})}),"\n",(0,r.jsx)(n.h3,{id:"step4-verify-the-job-results",children:"Step4: Verify the Job results"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Log in to check the Spark driver pod logs from either CloudWatch logs or your S3 bucket."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Here's a sample output from the log file:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"/emr-on-eks-logs/emr-spark-rapids/emr-ml-team-a\nspark-rapids-emr/949wt7zuphox1beiv0i30v65i/jobs/0000000327fe50tosa4/containers/spark-0000000327fe50tosa4/spark-0000000327fe50tosa4-driver/stdout\n"})}),"\n",(0,r.jsx)(n.p,{children:"The following is a sample output from the above log file:"}),"\n",(0,r.jsx)(n.p,{children:"Raw Dataframe CSV Rows count : 215386024\nRaw Dataframe Parquet Rows count : 215386024\nETL takes 222.34674382209778"}),"\n",(0,r.jsx)(n.p,{children:"Training takes 95.90932035446167 seconds\nIf features_cols param set, then features_col param is ignored."}),"\n",(0,r.jsx)(n.p,{children:"Transformation takes 63.999391317367554 seconds\n+--------------+--------------------+--------------------+----------+\n|delinquency_12|       rawPrediction|         probability|prediction|\n+--------------+--------------------+--------------------+----------+\n|             0|[10.4500541687011...|[0.99997103214263...|       0.0|\n|             0|[10.3076572418212...|[0.99996662139892...|       0.0|\n|             0|[9.81707763671875...|[0.99994546175003...|       0.0|\n|             0|[9.10498714447021...|[0.99988889694213...|       0.0|\n|             0|[8.81903457641601...|[0.99985212087631...|       0.0|\n+--------------+--------------------+--------------------+----------+\nonly showing top 5 rows"}),"\n",(0,r.jsx)(n.p,{children:"Evaluation takes 3.8372223377227783 seconds\nAccuracy is 0.996563056111921"}),"\n",(0,r.jsx)(n.h3,{id:"ml-pipeline-for-fannie-mae-single-loan-performance-dataset",children:"ML Pipeline for Fannie Mae Single Loan Performance Dataset"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step1"}),": Preprocess and clean the dataset to handle missing values, categorical variables, and other data inconsistencies.This may involve techniques like data imputation,one-hot encoding, and data normalization."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step2"}),": Create additional features from the existing ones that might provide more useful information for predicting loan performance. For example, you could extract features like loan-to-value ratio, borrower's credit score range, or loan origination year."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step3"}),": Divide the dataset into two parts: one for training the XGBoost model and one for evaluating its performance. This allows you to assess how well the model generalizes to unseen data."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step4"}),": Feed the training dataset into XGBoost to train the model. XGBoost will analyze the loan attributes and their corresponding loan performance labels to learn the patterns and relationships between them. The objective is to predict whether a loan is likely to default or perform well based on the given features."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step5"}),": Once the model is trained, use the evaluation dataset to assess its performance. This involves analyzing metrics such as accuracy, precision, recall, or area under the receiver operating characteristic curve (AUC-ROC) to measure how well the model predicts loan performance"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step6"}),": If the performance is not satisfactory, you can tune the XGBoost hyperparameters, such as the learning rate, tree depth, or regularization parameters, to improve the model's accuracy or address issues like overfitting."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Step7"}),": Finally, with a trained and validated XGBoost model, you can use it to make predictions on new, unseen loan data. These predictions can help in identifying potential risks associated with loan default or evaluating loan performance."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Alt text",src:a(9066).Z+"",width:"9395",height:"5403"})}),"\n",(0,r.jsx)(n.h3,{id:"gpu-monitoring-with-dcgm-exporter-prometheus-and-grafana",children:"GPU Monitoring with DCGM Exporter, Prometheus and Grafana"}),"\n",(0,r.jsx)(n.p,{children:"Observability plays a crucial role in managing and optimizing hardware resources such as GPUs, particularly in machine learning workloads where the GPU utilization is high. The ability to monitor GPU usage in real-time, identify trends, and detect anomalies can significantly impact performance tuning, troubleshooting, and efficient resource utilization."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/NVIDIA/gpu-operator",children:"NVIDIA GPU Operator"})," plays a key role in GPU observability. It automates the deployment of the necessary components to run GPU workloads on Kubernetes. One of its components, the ",(0,r.jsx)(n.a,{href:"https://docs.nvidia.com/datacenter/cloud-native/gpu-telemetry/latest/index.html",children:"DCGM (Data Center GPU Manager) Exporter"}),", is an open-source project that exports GPU metrics in a format that can be ingested by Prometheus, a leading open-source monitoring solution. These metrics include GPU temperature, memory usage, GPU utilization, and more. The DCGM Exporter allows you to monitor these metrics on a per-GPU basis, providing granular visibility into your GPU resources."]}),"\n",(0,r.jsx)(n.p,{children:"The NVIDIA GPU Operator, in combination with the DCGM Exporter, exports GPU metrics to a Prometheus server. With its flexible query language, Prometheus allows you to slice and dice data to generate insights into resource usage patterns."}),"\n",(0,r.jsxs)(n.p,{children:["However, Prometheus is not designed for long-term data storage. This is where the ",(0,r.jsx)(n.a,{href:"https://aws.amazon.com/prometheus/",children:"Amazon Managed Service for Prometheus (AMP)"})," comes into play. It provides a fully-managed, secure, and scalable service for Prometheus that makes it easy to analyze operational data at scale without having to manage the underlying infrastructure."]}),"\n",(0,r.jsx)(n.p,{children:"Visualizing these metrics and creating informative dashboards is where Grafana excels. Grafana is an open-source platform for monitoring and observability, offering rich visualizations to represent collected metrics intuitively. When combined with Prometheus, Grafana can display the GPU metrics collected by the DCGM Exporter in a user-friendly manner."}),"\n",(0,r.jsxs)(n.p,{children:["The NVIDIA GPU Operator is configured to export metrics to the Prometheus server, which then remote-writes these metrics to Amazon Managed Prometheus (AMP). As a user, you can log into the Grafana WebUI, deployed as part of the blueprint, and add AMP as a data source. Following this, you can import the open-source ",(0,r.jsx)(n.a,{href:"https://grafana.com/grafana/dashboards/12239-nvidia-dcgm-exporter-dashboard/",children:"GPU monitoring dashboard"})," that presents GPU metrics in an easily digestible format, facilitating real-time performance monitoring and resource optimization."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"NVIDIA GPU Operator"}),": Installed on your Kubernetes cluster, the NVIDIA GPU Operator is responsible for managing the lifecycle of GPU resources. It deploys NVIDIA drivers and the DCGM Exporter on each GPU-equipped node."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"DCGM Exporter"}),": The DCGM Exporter runs on each node, collecting GPU metrics and exposing them to Prometheus."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Prometheus"}),": Prometheus is a time-series database that collects metrics from various sources, including the DCGM Exporter. It pulls metrics from the exporter at regular intervals and stores them. In this setup, you would configure Prometheus to remote-write the collected metrics to AMP."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Amazon Managed Service for Prometheus (AMP)"}),": AMP is a fully-managed Prometheus service provided by AWS. It takes care of long-term storage, scalability, and security of your Prometheus data."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Grafana"}),": Grafana is a visualization tool that can query AMP for the collected metrics, and display them on informative dashboards."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"In this blueprint, we leverage DCGM to write GPU metrics to both Prometheus and Amazon Managed Prometheus (AMP). To verify the GPU metrics, you can use Grafana by running the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"kubectl port-forward svc/grafana 3000:80 -n grafana\n``\n\nLogin to Grafana using `admin` as the username, and retrieve the password from Secrets Manager using the following AWS CLI command:\n\n```bash\naws secretsmanager get-secret-value --secret-id emr-spark-rapids-grafana --region us-west-2\n"})}),"\n",(0,r.jsx)(n.p,{children:"Once logged in, add the AMP datasource to Grafana and import the Open Source GPU monitoring dashboard. You can then explore the metrics and visualize them using the Grafana dashboard, as shown in the screenshot below."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Alt text",src:a(7545).Z+"",width:"3076",height:"1882"})}),"\n",(0,r.jsxs)(t.Z,{header:(0,r.jsx)(n.h2,{children:(0,r.jsx)(n.span,{children:"Cleanup"})}),children:[(0,r.jsxs)(n.p,{children:["This script will cleanup the environment using ",(0,r.jsx)(n.code,{children:"-target"})," option to ensure all the resources are deleted in correct order."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd data-on-eks/ai-ml/emr-spark-rapids/ && chmod +x cleanup.sh\n./cleanup.sh\n"})})]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"To avoid unwanted charges to your AWS account, delete all the AWS resources created during this deployment"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},769:(e,n,a)=>{a.d(n,{Z:()=>m});var r=a(7294),s=a(5697),t=a.n(s),i=a(512);const o="collapsibleContent_q3kw",l="header_QCEw",c="icon_PckA",d="content_qLC1",h="expanded_iGsi";var p=a(5893);function u(e){let{children:n,header:a}=e;const[s,t]=(0,r.useState)(!1);return(0,p.jsxs)("div",{className:o,children:[(0,p.jsxs)("div",{className:(0,i.Z)(l,{[h]:s}),onClick:()=>{t(!s)},children:[a,(0,p.jsx)("span",{className:(0,i.Z)(c,{[h]:s}),children:s?"\ud83d\udc47":"\ud83d\udc48"})]}),s&&(0,p.jsx)("div",{className:d,children:n})]})}u.propTypes={children:t().node.isRequired,header:t().node.isRequired};const m=u},9066:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/emr-spark-rapids-fannie-mae-d6c47c14cc7c259e4b07f7fb0b7914c9.png"},7545:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/gpu-dashboard-d829ebf9e69c5f26d76b49fbe2d2f8ce.png"},2330:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/nvidia-505240d62b417acc46d631e6db952871.png"},5550:(e,n,a)=>{a.d(n,{Z:()=>r});const r=a.p+"assets/images/spark-rapids-pod-status-c53b6ca113b175c12558cbd200441bbd.png"},1151:(e,n,a)=>{a.d(n,{Z:()=>o,a:()=>i});var r=a(7294);const s={},t=r.createContext(s);function i(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);