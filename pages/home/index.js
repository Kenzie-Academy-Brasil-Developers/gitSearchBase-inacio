/* Desenvolva sua lógica aqui...*/
function btnDesability(){
    const user = document.querySelector("#userGit").value;

    if(user){
        document.querySelector("#send").disabled = false
        return
    }else{
        document.querySelector("#send").disabled = true
    }
}

const btn = document.querySelector("#send")

btn.addEventListener("click", function(event){
    event.preventDefault()

    const name = document.querySelector("#userGit")
    const value = name.value

    localStorage.setItem("nameUsers", JSON.stringify(value))
    console.log(value)

    getData(value)
    window.location = "../../pages/profile/index.html"
})

async function getData(value){


 await fetch(`https://api.github.com/users/${value}/repos`)
.then(function(response) {return response.json()})
.then(function(responseJson){
    
    responseJson.forEach(element => {
        
        console.log(element)
    });

})
}
getData()



