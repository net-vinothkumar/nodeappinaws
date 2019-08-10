# nodeappinaws
run node app in aws ec2 instance

# How to deploy node application in an AWS EC2 Instance ?

# Pre requisite :
AWS Account
Create a EC2 Instance
Connect to EC2 instance using ssh.
  ssh -i "nodedemo.pem" ec2-user@ec2-3-14-150-29.us-east-2.compute.amazonaws.com
Create a sample node application
Copy the application code to EC2
  a. scp tool
  b. using git clone
  c. ftp
    scp -i nodedemo.pem app.js ec2-user@ec2-13-59-110-115.us-east-2.compute.amazonaws.com:~
    scp -i nodedemo.pem package.json ec2-user@ec2-13-59-110-115.us-east-2.compute.amazonaws.com:~


  

