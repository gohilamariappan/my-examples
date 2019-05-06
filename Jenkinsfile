#!groovy

node('master')
{
 stage('checkout')

        {
          checkout scm
        }
                           
stage ('post-build')
    {
       properties([parameters([choice(choices: ['yes', 'no'], description: '', name: 'approval')])])     
       sh ' if [ ${approval} = yes ]; then'
     {
                  build job: test 
     
     }
        }
}
