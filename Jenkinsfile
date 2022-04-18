pipeline{
    agent any

    tools{nodejs "node"}

    stages {
        stage('Cypress Parallel Test Suite')
           Parallel{
               stage('Slave Node1'){
                   agent{
                       label "remote_node1"
                   }
                   steps{
                       git url : 'https://github.com/SenthilPandian92/Cypress_Automation_Framework.git'
                       sh 'npm install'
                       sh 'npm update'
                       sh 'npm run %Script%'
                   }
               }
               stage('Slave Node2'){
                   agent{
                       label "remote_node2"
                   }
                   steps{
                       git url : 'https://github.com/SenthilPandian92/Cypress_Automation_Framework.git'
                       sh 'npm install'
                       sh 'npm update'
                       sh 'npm run %Script%'
                   }
               }
           }
    }
}