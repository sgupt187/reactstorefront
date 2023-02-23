node{
    stage("SCM checkout"){
        git branch: 'main', url: 'https://github.com/sgupt187/reactstorefront'
    }
    stage("Build image"){
        sh 'docker build -t reactstorefront-image .'
    }
    stage("run the image"){
        sh 'docker run -d -p 3000:3000 --name react-app reactstorefront-image'
    }
    
}
