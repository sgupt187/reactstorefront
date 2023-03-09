node{
    
    stage('SCM Checkout'){
        git branch: 'main', credentialsId: 'access-token-1', url: 'https://github.com/sgupt187/reactstorefront.git'
    }
    stage('SonarQube Analysis') {
        def scannerHome = tool 'SonarScanner';
        withSonarQubeEnv('sonar-server') {
            sh "${scannerHome}/bin/sonar-scanner"
        }
   }
    stage('build the image'){
        sh 'docker build -t reactstorefront .'
    }
    
    stage('stop and remove already running container'){
        sh 'docker stop react-app'
        sh 'docker rm react-app'
    }
    
    stage('run the image'){
        sh 'docker run -dp 3000:3000 --name react-app reactstorefront'
    }
}
