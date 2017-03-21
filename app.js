'use strict';
var itemsListArray = [];

function Item(itemName, itemPath){
  this.itemName = itemName;
  this.itemPath = itemPath;
  this.itemShownTotal = 0;
  this.itemNumberClicked = 0;
  itemsListArray.push(this);
}

//old items will fill oldUserPageArray, newUserPageArray will //compare to oldUserPageArray and have different results. itemListArray will hold list of all items
var a = new Item ('bag', 'images/bag.jpg');
var b = new Item ('banana', 'images/banana.jpg');
var c = new Item ('bathroom', 'images/bathroom.jpg');
var d = new Item ('boots', 'images/boots.jpg');
var e = new Item ('breakfast', 'images/breakfast.jpg');
var f = new Item ('bubblegum', 'images/bubblegum.jpg');
var g = new Item ('chair', 'images/chair.jpg');
var h = new Item ('chtulu', 'images/cthulhu.jpg');
var i = new Item ('dog-duck', 'images/dog-duck.jpg');
var j = new Item ('dragon', 'images/dragon.jpg');
var k = new Item ('pen', 'images/pen.jpg');
var l = new Item ('pet-sweep', 'images/pet-sweep.jpg');
var m = new Item ('scissors', 'images/scissors.jpg');
var n = new Item ('shark', 'images/shark.jpg');
var o = new Item ('sweep', 'images/sweep.png');
var p = new Item ('tauntaun', 'images/tauntaun.jpg');
var q = new Item ('unicorn', 'images/unicorn.jpg');
var r = new Item ('usb', 'images/usb.gif');
var s = new Item ('water-can', 'images/water-can.jpg');
var t = new Item ('wine glass', 'images/wine-glass.jpg');

function randomItemSelectionFunc(){
  return Math.floor(Math.random() * (itemsListArray.length));
}
var prevShownPicsArray  = [];
 
 function randomPicGenerate(){
   var currentlyShownPicsArray  = [];
   console.log('previous' + prevShownPicsArray);
   while(currentlyShownPicsArray.length < 3){
     var randomItemSelectionVar = randomItemSelectionFunc();
     if(!prevShownPicsArray.includes(randomItemSelectionVar) && !currentlyShownPicsArray.includes(randomItemSelectionVar)){
       currentlyShownPicsArray.push(randomItemSelectionVar);
     }
    }
   prevShownPicsArray = currentlyShownPicsArray;
   var imageLeft   = itemsListArray[currentlyShownPicsArray[0]].itemPath;
   var imageCenter = itemsListArray[currentlyShownPicsArray[1]].itemPath;
   var imageRight  = itemsListArray[currentlyShownPicsArray[2]].itemPath;
   console.log('current' + currentlyShownPicsArray);
   document.getElementById('img1').src = imageLeft;
   document.getElementById('img2').src = imageCenter;
   document.getElementById('img3').src = imageRight;
  }

 randomPicGenerate();

 img1.addEventListener("click", randomPicGenerate());
 img2.addEventListener("click", randomPicGenerate());
 img3.addEventListener("click", randomPicGenerate());	