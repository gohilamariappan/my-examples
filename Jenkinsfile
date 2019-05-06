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
        if [ ${approval} == yes ]
     {
                  build job: test 
     
     }
        }
}
