#!groovy

node('master')
{

		stage('checkout')

        {
          checkout scm
        }
	 
	
 stage ('post-build')
 
 
{
properties([parameters([choice(choices: ['yes', 'no'], description: '', name: 'apporoval')])])
        sh  'if [ ${apporoval} = yes]; then'
         build job:test
         sh'fi'  	
         
        }
}
