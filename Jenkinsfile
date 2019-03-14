#!groovy
node ('master'){
try{

stage('Checkout')
{
checkout scm

}
stage('Build') {
            sh  'mvn clean install'
            def pom = readMavenPom file:'pom.xml'
            print pom.version
            env.version = pom.version

	}
}
catch (err) {
    currentBuild.result = "FAILURE"
    throw err
    }

}

