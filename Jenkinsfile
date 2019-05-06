#!groovy
node ('master'){
try{

stage('Checkout')
{
checkout scm

}
/*stage('Build') {
            sh  'mvn clean install'
                      }
}*/
catch (err) {
    currentBuild.result = "FAILURE"
    throw err
    }
            
     stage ('post-build')
{
build job: 'test'
}       
            
            

}

