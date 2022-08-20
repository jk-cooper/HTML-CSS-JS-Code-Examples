
// row 0 is pictures
// row 1 is items
// row 2 is prices

const pics = new Array();

pics[0] = new Image();
pics[0].src = 'images/fish_tacos.jpg';

pics[1] = new Image();
pics[1].src = 'images/beef_tacos.jpg';

pics[2] = new Image();
pics[2].src = 'images/burrito.jpg';

pics[3] = new Image();
pics[3].src = 'images/enchilada.jpg';

pics[4] = new Image();
pics[4].src = 'images/quesadilla.jpg';

const prices = [4.50, 3.50, 15.99, 17.99, 13.99];

const items = ["Fish Tacos(ea)", "Beef Tacos(ea)", "Burrito",
			   "Enchilada", "Quesadilla"];

const fill = document.getElementById("table");
			 
// Fill table body

function loadBody() {
	for (var i=0; i < prices.length; i++) {
		let row = fill.insertRow();
		let itemPic = row.insertCell(0);
		itemPic.appendChild(pics[i]);
		let item = row.insertCell(1);
		item.innerHTML = items[i];
		let price = row.insertCell(2);
		price.innerHTML = prices[i];
	};
}

loadBody();
	
	
	

