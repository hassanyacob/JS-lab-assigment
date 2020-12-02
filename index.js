fetch("hw.json");
.then(response => response.json());
.then(data => {
     console.log(data);
     document.quuerySelector(#demo).innerTxet = data.topping;
});
