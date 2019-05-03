var imgCarousel = {
  images: ["assets/images/faceShot.jpg", "assets/images/ncwit1.JPG", "assets/images/ncwit2.JPG"],
  currentImg: 0
};
setInterval(function() {
  ++imgCarousel.currentImg;
  if (imgCarousel.currentImg > 2) {
    imgCarousel.currentImg = 0;
  }
  document.getElementById("imgCarousel").src = imgCarousel.images[imgCarousel.currentImg];
}, 6000);

function toggleNavigation() {
	if (document.getElementById("navigation").style.display == "none") {
		document.getElementById("navigation").style.display = "inline-block";
	} else {
		document.getElementById("navigation").style.display = "none";
	}
}
toggleNavigation();
function navDrop(id) {
	document.getElementById(id).style.visibility = "visible";
}
function navLift(id) {
	document.getElementById(id).style.visibility = "hidden";
}
navLift("list1");
navLift("list2");
navLift("list3");
navLift("list4");
navLift("list5");