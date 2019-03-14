#!groovy
node ('master'){
try{

stage('Checkout')
{
checkout scm

}
}
catch (err) {
    currentBuild.result = "FAILURE"
    throw err
    }

}

