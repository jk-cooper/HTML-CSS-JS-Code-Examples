/* This is a program to change the picture at the
	top of the page banner ad with a setInterval of
	3000milliseconds*/
	
BannerPics= ['images/cheese.jpg', 'images/tomatoes.jpg', 'images/tortillas.jpg'];

var index = 0;
var iterations = 0;


setInterval(function(){
	if(index >= BannerPics.length) {
		index = 0;
		iterations = 0;
	}
	if (iterations >=4) {
		clearInterval(interval);
	} else {
		document.getElementById("Banner").src = BannerPics[index];
		index++;
	}
	
},3000);
