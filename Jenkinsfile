#!groovy
node ('master'){
try{

stage('Checkout')
{
checkout scm

}
stage('Build') {
            sh  'mvn clean install'
                      }
   stage ('post-build')
{
            build job: ${choice}
                       
                       
                       }   
            
            
}
catch (err) {
    currentBuild.result = "FAILURE"
    throw err
    }
            

}










      










