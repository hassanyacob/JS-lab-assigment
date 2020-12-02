fetch("hw.json")
.then(response => response.json())
.then(data => {
     console.log(data)
     const myObj = JSON.parse(this.responseText)
     document.quuerySelector(#demo).innerText =data.topping
})
