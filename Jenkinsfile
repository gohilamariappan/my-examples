#!groovy

node('master')
{

		stage('checkout')

        {
          checkout scm
        }
	 
	properties([parameters([choice(choices: ['yes', 'no'], description: '', name: 'approval')])])
        sh  'if [ ${approval} = yes]; '
 stage ('post-build')
 
{
         build job:test
            
        }
}
