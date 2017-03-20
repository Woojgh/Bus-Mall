'use strict';

function TestItem(itemName, itemPath) {
	this.itemName = itemName;
	this.itemPath = itemPath;
	itemListArray.push(this);
}

itemListArray = [];
oldListItemsArray = [];
newListItemsArray = [];

function randomItemListFunc() {
	Math.floor(Math.random() * (itemsListArray.length + 1));
}
var randomItemListPic = randomItemListFunc();
for (var i = 0; i < 3; i++) {
	newListItemsArray.push(randomItemListPic);
}

var = new TestItem ('bag', 'images/bag.jpg');
var = new TestItem ('banana', 'images/banana.jpg');
var = new TestItem ('bathroom', 'images/bathroom.jpg');
var = new TestItem ('boots', 'images/boots.jpg', );
var = new TestItem ('breakfast', 'images/breakfast.jpg');
var = new TestItem ('bubblegum', 'images/bubblegum.jpg');
var = new TestItem ('chair', 'images/chair.jpg');
var = new TestItem ('chtulu', 'images/cthulhu.jpg');
var = new TestItem ('dog-duck', 'images/dog-duck.jpg');
var = new TestItem ('dragon', 'images/dragon.jpg');
var = new TestItem ('pen', 'images/pen.jpg');
var = new TestItem ('pet-sweep', 'images/pet-sweep.jpg');
var = new TestItem ('scissors', 'images/scissors.jpg');
var = new TestItem ('shark', 'images/shark.jpg');
var = new TestItem ('sweep', 'images/sweep.png');
var = new TestItem ('tauntaun', 'images/tauntaun.jpg');
var = new TestItem ('unicorn', 'images/unicorn.jpg');
var = new TestItem ('usb', 'images/usb.gif');
var = new TestItem ('water-can', 'images/water-can.jpg');
var = new TestItem ('wine glass', 'images/wine-glass.jpg');