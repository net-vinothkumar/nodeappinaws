# nodeappinaws
run node app in aws ec2 instance

# How to deploy node application in an AWS EC2 Instance ?

<img width="1178" alt="Screen Shot 2019-08-16 at 22 23 40" src="https://user-images.githubusercontent.com/30971809/63196051-992b4580-c074-11e9-91d2-91e055fe1d21.png">


# Pre requisite :
AWS Account\
Create a EC2 Instance\
Connect to EC2 instance using ssh.\
  ssh -i "nodeappk.pem" ec2-user@ec2-18-218-127-117.us-east-2.compute.amazonaws.com\
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash \
  source /home/ec2-user/.bashrc\
  nvm -version\
  nvm install node\
  node -v\
  ls\
  app.js\
  package.json\
  npm install \
  node app.js \
  
  Note : Please add the inbound rule 3000 Custom TCP rule
  
  The node application is running in http://ec2-user@ec2-18-222-153-153.us-east-2.compute.amazonaws.com:3000/ \
  
Create a sample node application\
Copy the application code to EC2\
  a. scp tool\
  b. using git clone\
  c. ftp\
    scp -i nodedemo.pem app.js ec2-user@ec2-13-59-110-115.us-east-2.compute.amazonaws.com:~\
    scp -i nodedemo.pem package.json ec2-user@ec2-13-59-110-115.us-east-2.compute.amazonaws.com:~ \
    
    


  

