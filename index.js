fetch("hw.json")
.then(response => response.json())
.then(data => {
     console.log(data)
     document.querySelector("#demo").innerText =data.topping
})
