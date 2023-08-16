const jokeInput =document.querySelector("#jokeInput")
const submit = document.querySelector("#submit")
const nameInput = document.querySelector("#name")
submit.addEventListener("click", () =>{
    const value = jokeInput.value
    const name = nameInput.value
    console.log(value)
    console.log(name)
    saveToDatabase(value, name)

})

const saveToDatabase = (value, name) => {
    const jokeData = {
        joke: value,
        name: name
    }
    
    fetch("/write/jokes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Response from backend:", data);
    })
    .catch(error => {
        console.error("Error:", error);
    });
    
    
}

