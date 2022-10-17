/* Desenvolva sua lógica aqui...*/
let consulta = localStorage.getItem('nameUsers')
let getUser = JSON.parse(consulta)
console.log(getUser)

async function getData(value){


    await fetch(`https://api.github.com/users/${value}`)
   .then(function(response) {return response.json()})
   .then(function(responseJson){

       let avatar = document.querySelector("#avatar")
       let nameUser = document.querySelector("#nav-name-user")
       let bio = document.querySelector("#bio-user")

       avatar.src = `${responseJson.avatar_url}`
       nameUser.innerText = `${responseJson.name}`
       bio.innerText = `${responseJson.bio}`
       
   })
   }
getData(getUser)

function backToHomePage(){
    window.location = "../home/index.html"
}

 async function getRepoData(value){
    let ul = document.querySelector(".repository")

    await fetch(`https://api.github.com/users/${value}/repos`)
   .then(function(response) {return response.json()})
   .then(function(responseJson){

    console.log(responseJson)
       responseJson.map(element => {
        console.log(element)

        let li = document.createElement("li")
        let div = document.createElement("div")
        let h2 = document.createElement("h2")
        let description = document.createElement("p")
        let divBtn =document.createElement("div")
        let repos = document.createElement("a")
        let demo = document.createElement("a")

        li.className = "repos-card"
        h2.innerText = element.name
        description.innerText = element.description
        repos.innerText = "Repositório"
        repos.href = element.url
        repos.className ="btn-rep-demo"
        demo.innerText = "Demo"
        demo.href = element.homepage
        demo.className ="btn-rep-demo"

        divBtn.append(repos, demo)
        div.append(h2, description, divBtn)
        li.append(div)
        ul.append(li)

        
        
       });
   
   })
}
getRepoData(getUser)