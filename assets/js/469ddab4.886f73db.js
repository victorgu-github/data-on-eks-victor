"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[3922],{992:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=r(5893),t=r(1151);const o={title:"EMR on EKS with Spark Streaming",sidebar_position:2},i="EMR on EKS with Spark Streaming",a={id:"blueprints/streaming-platforms/emr-eks-stream",title:"EMR on EKS with Spark Streaming",description:"This is a project developed in Python CDK.",source:"@site/docs/blueprints/streaming-platforms/emr-eks-stream.md",sourceDirName:"blueprints/streaming-platforms",slug:"/blueprints/streaming-platforms/emr-eks-stream",permalink:"/data-on-eks/docs/blueprints/streaming-platforms/emr-eks-stream",draft:!1,unlisted:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/blueprints/streaming-platforms/emr-eks-stream.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"EMR on EKS with Spark Streaming",sidebar_position:2},sidebar:"blueprints",previous:{title:"Introduction",permalink:"/data-on-eks/docs/blueprints/streaming-platforms/"},next:{title:"EMR on EKS with Flink Streaming",permalink:"/data-on-eks/docs/blueprints/streaming-platforms/emr-eks-flink"}},l={},c=[{value:"Spark examples - read stream from MSK",id:"spark-examples---read-stream-from-msk",level:2},{value:"Spark examples - read stream from Kinesis",id:"spark-examples---read-stream-from-kinesis",level:2},{value:"Deploy Infrastructure",id:"deploy-infrastructure",level:2},{value:"CloudFormation Deployment",id:"cloudformation-deployment",level:3},{value:"Customization",id:"customization",level:3},{value:"CDK Deployment",id:"cdk-deployment",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Deploy",id:"deploy",level:4},{value:"Post-deployment",id:"post-deployment",level:2},{value:"MSK integration",id:"msk-integration",level:2},{value:"1. Submit a job with EMR on EKS",id:"1-submit-a-job-with-emr-on-eks",level:3},{value:"Verify the job is running:",id:"verify-the-job-is-running",level:3},{value:"Cancel the long-running job (can get job id from the job submission output or in EMR console)",id:"cancel-the-long-running-job-can-get-job-id-from-the-job-submission-output-or-in-emr-console",level:3},{value:"2. EMR on EKS with Fargate",id:"2-emr-on-eks-with-fargate",level:3},{value:"Verify the job is running on EKS Fargate",id:"verify-the-job-is-running-on-eks-fargate",level:3},{value:"3. (Optional) Submit step to EMR on EC2",id:"3-optional-submit-step-to-emr-on-ec2",level:3},{value:"Verify",id:"verify",level:3},{value:"Kinesis integration",id:"kinesis-integration",level:2},{value:"1. (Optional) Build custom docker image",id:"1-optional-build-custom-docker-image",level:3},{value:"2. Use kinesis-sql connector",id:"2-use-kinesis-sql-connector",level:3},{value:"3. Use Spark&#39;s DStream",id:"3-use-sparks-dstream",level:3},{value:"Useful commands",id:"useful-commands",level:2},{value:"Clean up",id:"clean-up",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"emr-on-eks-with-spark-streaming",children:"EMR on EKS with Spark Streaming"}),"\n",(0,s.jsxs)(n.p,{children:["This is a project developed in Python ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/cdk/latest/guide/home.html",children:"CDK"}),".\r\nIt includes sample data, Kafka producer simulator, and a consumer example that can be run with EMR on EC2 or EMR on EKS. Additionally, we have added few Kinesis examples for difference use cases."]}),"\n",(0,s.jsx)(n.p,{children:"The infrastructure deployment includes the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A new S3 bucket to store sample data and stream job code"}),"\n",(0,s.jsxs)(n.li,{children:["An EKS cluster v1.24 in a new VPC across 2 AZs","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The Cluster has 2 default managed node groups: the OnDemand nodegroup scales from 1 to 5, SPOT instance nodegroup can scale from 1 to 30."}),"\n",(0,s.jsxs)(n.li,{children:["It also has a Fargate profile labelled with the value ",(0,s.jsx)(n.code,{children:"serverless"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["An EMR virtual cluster in the same VPC","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The virtual cluster links to ",(0,s.jsx)(n.code,{children:"emr"})," namespace"]}),"\n",(0,s.jsx)(n.li,{children:"The namespace accommodates two types of Spark jobs, ie. run on managed node group or serverless job on Fargate"}),"\n",(0,s.jsx)(n.li,{children:"All EMR on EKS configuration are done, including fine-grained access controls for pods by the AWS native solution IAM roles for service accounts"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["A MSK Cluster in the same VPC with 2 brokers in total. Kafka version is 2.8.1","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A Cloud9 IDE as the command line environment in the demo."}),"\n",(0,s.jsx)(n.li,{children:"Kafka Client tool will be installed on the Cloud9 IDE"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["An EMR on EC2 cluster with managed scaling enabled.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"1 primary and 1 core nodes with r5.xlarge."}),"\n",(0,s.jsx)(n.li,{children:"configured to run one Spark job at a time."}),"\n",(0,s.jsx)(n.li,{children:"can scale from 1 to 10 core + task nodes"}),"\n",(0,s.jsx)(n.li,{children:"mounted EFS for checkpointing test/demo (a bootstrap action)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"spark-examples---read-stream-from-msk",children:"Spark examples - read stream from MSK"}),"\n",(0,s.jsx)(n.p,{children:"Spark consumer applications reading from Amazon MSK:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#1-submit-a-job-with-emr-on-eks",children:"1. Run a job with EMR on EKS"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#2-emr-on-eks-with-fargate",children:"2. Same job with Fargate on EMR on EKS"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#3-optional-submit-step-to-emr-on-ec2",children:"3. Same job with EMR on EC2"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"spark-examples---read-stream-from-kinesis",children:"Spark examples - read stream from Kinesis"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#1-optional-build-custom-docker-image",children:"1. (Optional) Build a custom docker image"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#2-use-kinesis-sql-connector",children:"2. Run a job with kinesis-sql connector"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#3-use-sparks-dstream",children:"3. Run a job with Spark's DStream"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"deploy-infrastructure",children:"Deploy Infrastructure"}),"\n",(0,s.jsx)(n.p,{children:"The provisioning takes about 30 minutes to complete.\r\nTwo ways to deploy:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"AWS CloudFormation template (CFN)"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/cdk/latest/guide/home.html",children:"AWS Cloud Development Kit (AWS CDK)"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"cloudformation-deployment",children:"CloudFormation Deployment"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Region"}),(0,s.jsx)(n.th,{children:"Launch Template"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"---------------------------"}),(0,s.jsx)(n.td,{children:"-----------------------"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"US East (N. Virginia)"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/quickcreate?stackName=emr-stream-demo&templateURL=https://blogpost-sparkoneks-us-east-1.s3.amazonaws.com/emr-stream-demo/v2.0.0/emr-stream-demo.template",children:(0,s.jsx)(n.img,{alt:"Deploy to AWS",src:r(756).Z+"",width:"150",height:"30"})})})]})]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To launch in a different AWS Region, check out the following customization section, or use the CDK deployment option."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"customization",children:"Customization"}),"\n",(0,s.jsx)(n.p,{children:"You can customize the solution, such as set to a different region, then generate the CFN templates in your required region:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export BUCKET_NAME_PREFIX=<my-bucket-name> # bucket where customized code will reside\r\nexport AWS_REGION=<your-region>\r\nexport SOLUTION_NAME=emr-stream-demo\r\nexport VERSION=v2.0.0 # version number for the customized code\r\n\r\ncd data-on-eks/analytics/cdk/stream-emr-on-eks\r\n./deployment/build-s3-dist.sh $BUCKET_NAME_PREFIX $SOLUTION_NAME $VERSION\r\n\r\n# create the bucket where customized code will reside\r\naws s3 mb s3://$BUCKET_NAME_PREFIX-$AWS_REGION --region $AWS_REGION\r\n\r\n# Upload deployment assets to the S3 bucket\r\naws s3 cp ./deployment/global-s3-assets/ s3://$BUCKET_NAME_PREFIX-$AWS_REGION/$SOLUTION_NAME/$VERSION/ --recursive --acl bucket-owner-full-control\r\naws s3 cp ./deployment/regional-s3-assets/ s3://$BUCKET_NAME_PREFIX-$AWS_REGION/$SOLUTION_NAME/$VERSION/ --recursive --acl bucket-owner-full-control\r\n\r\necho -e "\\nIn web browser, paste the URL to launch the template: https://console.aws.amazon.com/cloudformation/home?region=$AWS_REGION#/stacks/quickcreate?stackName=emr-stream-demo&templateURL=https://$BUCKET_NAME_PREFIX-$AWS_REGION.s3.amazonaws.com/$SOLUTION_NAME/$VERSION/emr-stream-demo.template\\n"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"cdk-deployment",children:"CDK Deployment"}),"\n",(0,s.jsx)(n.h4,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Install the following tools:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://www.python.org/downloads/",children:"Python 3.6 +"}),"."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://nodejs.org/en/",children:"Node.js 10.3.0 +"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/cli/latest/userguide/install-macos.html#install-macosos-bundled",children:"AWS CLI"}),". Configure the CLI by ",(0,s.jsx)(n.code,{children:"aws configure"}),"."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://cdkworkshop.com/15-prerequisites/500-toolkit.html",children:"CDK toolkit"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://cdkworkshop.com/20-typescript/20-create-project/500-deploy.html",children:"One-off CDK bootstrap"})," for the first time deployment."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"deploy",children:"Deploy"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"python3 -m venv .env\r\nsource .env/bin/activate\r\npip install -r requirements.txt\r\n\r\ncdk deploy\n"})}),"\n",(0,s.jsx)(n.h2,{id:"post-deployment",children:"Post-deployment"}),"\n",(0,s.jsxs)(n.p,{children:["The following ",(0,s.jsx)(n.code,{children:"post-deployment.sh"})," is executable in Linux, not for Mac OSX. Modify the script if needed."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:'Open the "Kafka Client" IDE in Cloud9 console. Create one if the Cloud9 IDE doesn\'t exist.'}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"VPC prefix: 'emr-stream-demo'\r\nInstance Type: 't3.small'\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.a,{href:"https://catalog.us-east-1.prod.workshops.aws/workshops/d90c2f2d-a84b-4e80-b4f9-f5cee0614426/en-US/30-emr-serverless/31-set-up-env#setup-cloud9-ide",children:["Attach the IAM role that contains ",(0,s.jsx)(n.code,{children:"Cloud9Admin"})," to your IDE"]}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Turn off AWS managed temporary credentials in Cloud9:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"\r\nunzip awscliv2.zip\r\nsudo ./aws/install --update\r\n/usr/local/bin/aws cloud9 update-environment  --environment-id $C9_PID --managed-credentials-action DISABLE\r\nrm -vf ${HOME}/.aws/credentials\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Run the script to configure the cloud9 IDE environment:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl https://raw.githubusercontent.com/aws-samples/stream-emr-on-eks/main/deployment/app_code/post-deployment.sh | bash\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsxs)(n.li,{children:["Wait for 5 mins, then check the ",(0,s.jsx)(n.a,{href:"https://console.aws.amazon.com/msk/",children:"MSK cluster"})," status. Make sure it is ",(0,s.jsx)(n.code,{children:"active"})," before sending data to the cluster."]}),"\n",(0,s.jsx)(n.li,{children:"Launching a new terminal window in Cloud9, send the sample data to MSK:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'wget https://github.com/xuite627/workshop_flink1015-1/raw/master/dataset/nycTaxiRides.gz\r\nzcat nycTaxiRides.gz | split -l 10000 --filter="kafka_2.12-2.8.1/bin/kafka-console-producer.sh --broker-list ${MSK_SERVER} --topic taxirides ; sleep 0.2"  > /dev/null\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:"Launching the 3rd terminal window and monitor the source MSK topic:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kafka_2.12-2.8.1/bin/kafka-console-consumer.sh \\\r\n--bootstrap-server ${MSK_SERVER} \\\r\n--topic taxirides \\\r\n--from-beginning\n"})}),"\n",(0,s.jsx)(n.h2,{id:"msk-integration",children:"MSK integration"}),"\n",(0,s.jsx)(n.h3,{id:"1-submit-a-job-with-emr-on-eks",children:"1. Submit a job with EMR on EKS"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/aws-samples/stream-emr-on-eks/blob/main/deployment/app_code/job/msk_consumer.py",children:"Sample job"})," to consume data stream in MSK"]}),"\n",(0,s.jsx)(n.li,{children:"Submit the job:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'aws emr-containers start-job-run \\\r\n--virtual-cluster-id $VIRTUAL_CLUSTER_ID \\\r\n--name msk_consumer \\\r\n--execution-role-arn $EMR_ROLE_ARN \\\r\n--release-label emr-5.33.0-latest \\\r\n--job-driver \'{\r\n    "sparkSubmitJobDriver":{\r\n        "entryPoint": "s3://\'$S3BUCKET\'/app_code/job/msk_consumer.py",\r\n        "entryPointArguments":["\'$MSK_SERVER\'","s3://\'$S3BUCKET\'/stream/checkpoint/emreks","emreks_output"],\r\n        "sparkSubmitParameters": "--conf spark.jars.packages=org.apache.spark:spark-sql-kafka-0-10_2.11:2.4.7 --conf spark.cleaner.referenceTracking.cleanCheckpoints=true --conf spark.executor.instances=2 --conf spark.executor.memory=2G --conf spark.driver.memory=2G --conf spark.executor.cores=2"}}\' \\\r\n--configuration-overrides \'{\r\n    "applicationConfiguration": [\r\n      {\r\n        "classification": "spark-defaults",\r\n        "properties": {\r\n          "spark.kubernetes.driver.podTemplateFile":"s3://\'$S3BUCKET\'/app_code/job/driver_template.yaml","spark.kubernetes.executor.podTemplateFile":"s3://\'$S3BUCKET\'/app_code/job/executor_template.yaml"\r\n         }\r\n      }\r\n    ],\r\n    "monitoringConfiguration": {\r\n        "s3MonitoringConfiguration": {"logUri": "s3://\'${S3BUCKET}\'/elasticmapreduce/emreks-log/"}}\r\n}\'  \n'})}),"\n",(0,s.jsx)(n.h3,{id:"verify-the-job-is-running",children:"Verify the job is running:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# can see the job pod in EKS\r\nkubectl get po -n emr\r\n\r\n# verify in EMR console\r\n# in Cloud9, run the consumer tool to check if any data comeing through in the target Kafka topic\r\nkafka_2.12-2.8.1/bin/kafka-console-consumer.sh --bootstrap-server ${MSK_SERVER} --topic emreks_output --from-beginning\n"})}),"\n",(0,s.jsx)(n.h3,{id:"cancel-the-long-running-job-can-get-job-id-from-the-job-submission-output-or-in-emr-console",children:"Cancel the long-running job (can get job id from the job submission output or in EMR console)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"aws emr-containers cancel-job-run --virtual-cluster-id $VIRTUAL_CLUSTER_ID  --id <YOUR_JOB_ID>\n"})}),"\n",(0,s.jsx)(n.h3,{id:"2-emr-on-eks-with-fargate",children:"2. EMR on EKS with Fargate"}),"\n",(0,s.jsxs)(n.p,{children:["Run the ",(0,s.jsx)(n.a,{href:"https://github.com/aws-samples/stream-emr-on-eks/blob/main/deployment/app_code/job/msk_consumer.py",children:"same job"})," on the same EKS cluster, but with the serverless option - Fargate compute choice."]}),"\n",(0,s.jsxs)(n.p,{children:["To ensure it is picked up by Fargate not by the managed nodegroup on EC2, we will tag the Spark job by a ",(0,s.jsx)(n.code,{children:"serverless"})," label, which has setup in a Fargate profile previously:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"--conf spark.kubernetes.driver.label.type=serverless\r\n--conf spark.kubernetes.executor.label.type=serverless\n"})}),"\n",(0,s.jsx)(n.p,{children:"Submit the job to Fargate:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'aws emr-containers start-job-run \\\r\n--virtual-cluster-id $VIRTUAL_CLUSTER_ID \\\r\n--name msk_consumer_fg \\\r\n--execution-role-arn $EMR_ROLE_ARN \\\r\n--release-label emr-5.33.0-latest \\\r\n--job-driver \'{\r\n    "sparkSubmitJobDriver":{\r\n        "entryPoint": "s3://\'$S3BUCKET\'/app_code/job/msk_consumer.py",\r\n        "entryPointArguments":["\'$MSK_SERVER\'","s3://\'$S3BUCKET\'/stream/checkpoint/emreksfg","emreksfg_output"],\r\n        "sparkSubmitParameters": "--conf spark.jars.packages=org.apache.spark:spark-sql-kafka-0-10_2.11:2.4.7 --conf spark.cleaner.referenceTracking.cleanCheckpoints=true --conf spark.executor.instances=2 --conf spark.executor.memory=2G --conf spark.driver.memory=2G --conf spark.executor.cores=2 --conf spark.kubernetes.driver.label.type=serverless --conf spark.kubernetes.executor.label.type=serverless"}}\' \\\r\n--configuration-overrides \'{\r\n    "monitoringConfiguration": {\r\n        "s3MonitoringConfiguration": {"logUri": "s3://\'${S3BUCKET}\'/elasticmapreduce/emreksfg-log/"}}}\'  \n'})}),"\n",(0,s.jsx)(n.h3,{id:"verify-the-job-is-running-on-eks-fargate",children:"Verify the job is running on EKS Fargate"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"kubectl get po -n emr\r\n\r\n# verify in EMR console\r\n# in Cloud9, run the consumer tool to check if any data comeing through in the target Kafka topic\r\nkafka_2.12-2.8.1/bin/kafka-console-consumer.sh \\\r\n--bootstrap-server ${MSK_SERVER} \\\r\n--topic emreksfg_output \\\r\n--from-beginning\n"})}),"\n",(0,s.jsx)(n.h3,{id:"3-optional-submit-step-to-emr-on-ec2",children:"3. (Optional) Submit step to EMR on EC2"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cluster_id=$(aws emr list-clusters --cluster-states WAITING --query 'Clusters[?Name==`emr-stream-demo`].Id' --output text)\r\nMSK_SERVER=$(echo $MSK_SERVER | cut -d',' -f 2)\r\n\r\naws emr add-steps \\\r\n--cluster-id $cluster_id \\\r\n--steps Type=spark,Name=emrec2_stream,Args=[--deploy-mode,cluster,--conf,spark.cleaner.referenceTracking.cleanCheckpoints=true,--conf,spark.executor.instances=2,--conf,spark.executor.memory=2G,--conf,spark.driver.memory=2G,--conf,spark.executor.cores=2,--packages,org.apache.spark:spark-sql-kafka-0-10_2.12:3.0.1,s3://$S3BUCKET/app_code/job/msk_consumer.py,$MSK_SERVER,s3://$S3BUCKET/stream/checkpoint/emrec2,emrec2_output],ActionOnFailure=CONTINUE  \n"})}),"\n",(0,s.jsx)(n.h3,{id:"verify",children:"Verify"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# verify in EMR console\r\n# in Cloud9, run the consumer tool to check if any data comeing through in the target Kafka topic\r\nkafka_2.12-2.8.1/bin/kafka-console-consumer.sh \\\r\n--bootstrap-server ${MSK_SERVER} \\\r\n--topic emrec2_output \\\r\n--from-beginning\n"})}),"\n",(0,s.jsx)(n.h2,{id:"kinesis-integration",children:"Kinesis integration"}),"\n",(0,s.jsx)(n.h3,{id:"1-optional-build-custom-docker-image",children:"1. (Optional) Build custom docker image"}),"\n",(0,s.jsx)(n.p,{children:"We will create & delete a kinesis test stream on the fly via boto3, so a custom EMR on EKS docker image to include the Python library is needed. The custom docker image is not compulsory, if you don't need the boto3 and kinesis-sql connector."}),"\n",(0,s.jsx)(n.p,{children:"Build a image based on EMR on EKS 6.5:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"export AWS_REGION=$(aws configure list | grep region | awk '{print $2}')\r\nexport ACCOUNT_ID=$(aws sts get-caller-identity --output text --query Account)\r\nexport ECR_URL=$ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com\r\n\r\naws ecr get-login-password --region us-west-2 | docker login --username AWS --password-stdin 895885662937.dkr.ecr.us-west-2.amazonaws.com\r\ndocker build -t emr6.5_custom .\r\n\r\n# create ECR repo in current account\r\naws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $ECR_URL\r\naws ecr create-repository --repository-name emr6.5_custom_boto3 --image-scanning-configuration scanOnPush=true --region $AWS_REGION\r\n\r\n# push to ECR\r\ndocker tag emr6.5_custom $ECR_URL/emr6.5_custom_boto3\r\ndocker push $ECR_URL/emr6.5_custom_boto3\n"})}),"\n",(0,s.jsx)(n.h3,{id:"2-use-kinesis-sql-connector",children:"2. Use kinesis-sql connector"}),"\n",(0,s.jsxs)(n.p,{children:["This demo uses the ",(0,s.jsx)(n.code,{children:"com.qubole.spark/spark-sql-kinesis_2.12/1.2.0-spark_3.0"})," connector to interact with Kinesis."]}),"\n",(0,s.jsxs)(n.p,{children:["To enable the job-level access control, ie. the ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html",children:"IRSA feature"}),", we have forked the ",(0,s.jsx)(n.a,{href:"https://github.com/aws-samples/kinesis-sql",children:"kinesis-sql git repo"})," and recompiled a new jar after upgraded the AWS java SDK. The custom docker build above will pick up the upgraded connector automatically."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/aws-samples/stream-emr-on-eks/blob/main/deployment/app_code/job/qubole-kinesis.py",children:"Sample job"})," to consume data stream in Kinesis"]}),"\n",(0,s.jsx)(n.li,{children:"Submit the job:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export AWS_REGION=$(aws configure list | grep region | awk \'{print $2}\')\r\nexport ACCOUNT_ID=$(aws sts get-caller-identity --output text --query Account)\r\nexport ECR_URL=$ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com\r\n\r\naws emr-containers start-job-run \\\r\n--virtual-cluster-id $VIRTUAL_CLUSTER_ID \\\r\n--name kinesis-demo \\\r\n--execution-role-arn $EMR_ROLE_ARN \\\r\n--release-label emr-6.5.0-latest \\\r\n--job-driver \'{\r\n    "sparkSubmitJobDriver":{\r\n        "entryPoint": "s3://\'$S3BUCKET\'/app_code/job/qubole-kinesis.py",\r\n        "entryPointArguments":["\'${AWS_REGION}\'","s3://\'${S3BUCKET}\'/qubolecheckpoint","s3://\'${S3BUCKET}\'/qubole-kinesis-output"],\r\n        "sparkSubmitParameters": "--conf spark.cleaner.referenceTracking.cleanCheckpoints=true"}}\' \\\r\n--configuration-overrides \'{\r\n    "applicationConfiguration": [\r\n        {\r\n            "classification": "spark-defaults",\r\n            "properties": {\r\n                "spark.kubernetes.container.image": "\'${ECR_URL}\'/emr6.5_custom_boto3:latest"\r\n            }\r\n        }\r\n    ],\r\n    "monitoringConfiguration": {\r\n        "s3MonitoringConfiguration": {"logUri": "s3://\'${S3BUCKET}\'/elasticmapreduce/kinesis-fargate-log/"}\r\n    }\r\n}\'\n'})}),"\n",(0,s.jsx)(n.h3,{id:"3-use-sparks-dstream",children:"3. Use Spark's DStream"}),"\n",(0,s.jsxs)(n.p,{children:["This demo uses the ",(0,s.jsx)(n.code,{children:"spark-streaming-kinesis-asl_2.12"})," library to read from Kinesis. Check out the ",(0,s.jsx)(n.a,{href:"https://spark.apache.org/docs/latest/streaming-kinesis-integration.html",children:"Spark's official document"}),". The Spark syntax is slightly different from the spark-sql-kinesis approach. It operates at RDD level."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/aws-samples/stream-emr-on-eks/blob/main/deployment/app_code/job/pyspark-kinesis.py",children:"Sample job"})," to consume data stream from Kinesis"]}),"\n",(0,s.jsx)(n.li,{children:"Submit the job:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export AWS_REGION=$(aws configure list | grep region | awk \'{print $2}\')\r\nexport ACCOUNT_ID=$(aws sts get-caller-identity --output text --query Account)\r\nexport ECR_URL=$ACCOUNT_ID.dkr.ecr.$AWS_REGION.amazonaws.com\r\n\r\naws emr-containers start-job-run \\\r\n--virtual-cluster-id $VIRTUAL_CLUSTER_ID \\\r\n--name kinesis-demo \\\r\n--execution-role-arn $EMR_ROLE_ARN \\\r\n--release-label emr-6.5.0-latest \\\r\n--job-driver \'{\r\n    "sparkSubmitJobDriver":{\r\n        "entryPoint": "s3://\'$S3BUCKET\'/app_code/job/pyspark-kinesis.py",\r\n        "entryPointArguments":["\'${AWS_REGION}\'","s3://\'$S3BUCKET\'/asloutput/"],\r\n        "sparkSubmitParameters": "--jars https://repo1.maven.org/maven2/org/apache/spark/spark-streaming-kinesis-asl_2.12/3.1.2/spark-streaming-kinesis-asl_2.12-3.1.2.jar,https://repo1.maven.org/maven2/com/amazonaws/amazon-kinesis-client/1.12.0/amazon-kinesis-client-1.12.0.jar"}}\' \\\r\n--configuration-overrides \'{\r\n    "applicationConfiguration": [\r\n        {\r\n            "classification": "spark-defaults",\r\n            "properties": {\r\n                "spark.kubernetes.container.image": "\'${ECR_URL}\'/emr6.5_custom_boto3:latest"\r\n            }\r\n        }\r\n    ],\r\n    "monitoringConfiguration": {\r\n        "s3MonitoringConfiguration": {"logUri": "s3://\'${S3BUCKET}\'/elasticmapreduce/kinesis-fargate-log/"}\r\n    }\r\n}\'  \n'})}),"\n",(0,s.jsx)(n.h2,{id:"useful-commands",children:"Useful commands"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kubectl get pod -n emr"}),"               list running Spark jobs"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kubectl delete pod --all -n emr"}),"      delete all Spark jobs"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kubectl logs <pod name> -n emr"}),"       check logs against a pod in the emr namespace"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kubectl get node --label-columns=eks.amazonaws.com/capacityType,topology.kubernetes.io/zone"})," check EKS compute capacity types and AZ distribution."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"clean-up",children:"Clean up"}),"\n",(0,s.jsx)(n.p,{children:"Run the clean-up script with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"curl https://raw.githubusercontent.com/aws-samples/stream-emr-on-eks/main/deployment/app_code/delete_all.sh | bash\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Go to the ",(0,s.jsx)(n.a,{href:"https://console.aws.amazon.com/cloudformation/home?region=us-east-1",children:"CloudFormation console"}),", manually delete the remaining resources if needed."]})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},756:(e,n,r)=>{r.d(n,{Z:()=>s});const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAeCAMAAAD5PBdlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAKhQTFRF+tyz+den98aA/fDf/vXq+dGb++bK9sJ2+MyP9bha++G+/OPD/OvV/OzX/vr198eD9r1o+tqu/vv1/vr19rxm9bhZ+dmt//79//79+dWj+dOe98Fz98F0/vbs+dCX/OXG9bdY//37/OvT++G9++PD+dWi/vz4//38+t63/vPk+MyL++fN//36/vz5++bK///+/vPl/vjv/fHh/e7a+MuK98Z/////9LJM3blaNgAAAnlJREFUeNrMmIly2jAQhiUsjSXXjN0KGALkaK4maeue/Hr/N+uubFM7GMi0DGjHYyQf0jf/HpYQqO3nbB2F/X5yjCMC1OXax2Mz12Dd3/iYbOkC1thHZktHWG4SG5Z/IKzZ9uVrdO3j4uRchLUt1gte2eT0WJfbF9/j8fbdxm6B0emxxkNYHzogo9iwpi/XP6rYsEbPmANXsWFNEwr2+WoLqwpZIAaGkgMTKN3vl1B8Mt4bHsNC24yGq+xbsRahOPgdWMj/DUsqFN4ngp9PmM1mqvSFyvZjXWyqwpyP5yEsml4D2msFp30KRbrKgGWJOTFWoaQJGTzw03MbdZXOiUAQUZLBckPxLen2Y33t1qvxQuzA8hkyTXNlMCkT5tCMlZAUOVJuZuyooFZKvaKR0jhLB4tkUTrDsglk6cHYAqZtbHHT78ISqFiTAnnK0UK/xFKwQpqmIf841TqRpalP9DJJ5UhVGJ34SlhmlxRcSXEIa1MguOn3qBVWRlDMQIokhGVQhSapphu3EVaWb7xkwyvsQVEJLxPT+I6cXx4Di2LLqHqoAbW8hEM6oJZU4YWUuuTBFFXlg2CUm/q/sZpMlMRn2GM0JLH+ja3CW4ekCXHZja0Q3p7SzoDi3Su+WqmCxT+s1gU+9b7U33bULek4A0mtvJ+JdCtvq0XFmeiaTDS1hMKVNuSpCH1e870ltiZ9KnyZ7qvIaStM55JQzh61ygfPre546QDUS4i7/euaASwJaH98rK3m6b+J7hXWvNVmNT8nFvqbscdOTH0/J9bnHd9E/Drb3uOGkzOmvWttT4zllpFRXdW7aheXXg/tfxC4j2cLux4Tzx8BBgBEE3DEesAT9AAAAABJRU5ErkJgggo="},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>i});var s=r(7294);const t={},o=s.createContext(t);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);