const jdata = '[\
	{\
		"id": "0001",\
		"type": "donut",\
		"name": "Cake",\
		"ppu":0.78,\
		"batters":\
			{\
				"batter":\
					[\
						{ "id": "1001", "type": "Regular" },\
						{ "id": "1002", "type": "Chocolate" },\
						{ "id": "1003", "type": "Blueberry" },\
						{ "id": "1004", "type": "Devil\'s Food" }\
					]\
			},\
		"topping":\
			[\
				{ "id": "5001", "type": "None" },\
				{ "id": "5002", "type": "Glazed" },\
				{ "id": "5005", "type": "Sugar" },\
				{ "id": "5007", "type": "Powdered Sugar" },\
				{ "id": "5006", "type": "Chocolate with Sprinkles" },\
				{ "id": "5003", "type": "Chocolate" },\
				{ "id": "5004", "type": "Maple" }\
			]\
	},\
	{\
		"id": "0002",\
		"type": "donut",\
		"name": "Raised",\
		"ppu": 0.55,\
		"batters":\
			{\
				"batter":\
					[\
						{ "id": "1001", "type": "Regular" }\
					]\
			},\
		"topping":\
			[\
				{ "id": "5001", "type": "None" },\
				{ "id": "5002", "type": "Glazed" },\
				{ "id": "5005", "type": "Sugar" },\
				{ "id": "5003", "type": "Chocolate" },\
				{ "id": "5004", "type": "Maple" }\
			]\
	},\
	{\
		"id": "0003",\
		"type": "donut",\
		"name": "Old Fashioned",\
		"ppu":0.26,\
		"batters":\
			{\
				"batter":\
					[\
						{ "id": "1001", "type": "Regular" },\
						{ "id": "1002", "type": "Chocolate" }\
					]\
			},\
		"topping":\
			[\
				{ "id": "5001", "type": "None" },\
				{ "id": "5002", "type": "Glazed" },\
				{ "id": "5003", "type": "Chocolate" },\
				{ "id": "5004", "type": "Maple" }\
			]\
	}\
]';

fetch("hw.json")
.then(response => response.json())
.then(data => {
     console.log(data)
})
console.log("==============================");
const gg = JSON.parse(jdata);
var sum = 0;
console.log("topping types is: ");
for (var index = 0; index < gg.length; index++) {
	var donut = gg[index];
	sum += donut.ppu;
	var toppings =  donut.topping;
	for (var i = 0; i < toppings.length; i++) {
		console.log(toppings[i].type)	
	}
}
console.log("==============================");

console.log("batter types is: ");
for (var index = 0; index < gg.length; index++) {
	var donut = gg[index];
	var batter =  donut.batters.batter;
	for (var i = 0; i < batter.length; i++) {
		console.log(batter[i].type)	
	}
}
console.log("=============================");

console.log("sum is "+sum);

console.log("average is "+sum / gg.length);

console.log("ID'S: ");
for (var index = 0; index < gg.length; index++) {
	var donut = gg[index];
	console.log(donut.id);
	var batter =  donut.batters.batter;
	for (var i = 0; i < batter.length; i++) {
		console.log(batter[i].id)	
	}
	var toppings =  donut.topping;
	for (var i = 0; i < toppings.length; i++) {
		console.log(toppings[i].id)	
	}
}
console.log("================================");

