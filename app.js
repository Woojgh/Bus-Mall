'use strict';
var itemsListArray = [];
var totalClicks = 0;
var labelArray = [];
var clickDataArray = [];

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

function randomImgIndex(){
  return Math.floor(Math.random() * (itemsListArray.length));
}
var prevImgIndexes  = [];
 
 function randomPicGenerate(){
   var currentImgIndexes  = [];
   while(currentImgIndexes.length < 3){
     var randomImgSelecetVar = randomImgIndex();
     if(!prevImgIndexes.includes(randomImgSelecetVar) && !currentImgIndexes.includes(randomImgSelecetVar)){
       currentImgIndexes.push(randomImgSelecetVar);
     }
    }
   var imageLeft = itemsListArray[currentImgIndexes[0]];
   var imageCenter = itemsListArray[currentImgIndexes[1]];
   var imageRight = itemsListArray[currentImgIndexes[2]];
   img1.src = imageLeft.itemPath
   img2.src = imageCenter.itemPath
   img3.src = imageRight.itemPath
   img1.alt = currentImgIndexes[0];
   img2.alt = currentImgIndexes[1];
   img3.alt = currentImgIndexes[2];  
   prevImgIndexes = currentImgIndexes;
   imageLeft.itemShownTotal++;
   imageCenter.itemShownTotal++;
   imageRight.itemShownTotal++;
  }

 randomPicGenerate();

 var clickLimit = 25;
 function clickHandle(event){
  randomPicGenerate();
  totalClicks++;
  var productIdx = this.alt;
  itemsListArray[productIdx].itemNumberClicked++;
  //this.itemNumberClicked++;
  if(totalClicks === clickLimit) {
    img1.removeEventListener('click', clickHandle);
    img2.removeEventListener('click', clickHandle);
    img3.removeEventListener('click', clickHandle);
    img1.src = "http://i.imgur.com/zugsAYb.gif";
    img2.src = "http://i.imgur.com/zugsAYb.gif";
    img3.src = "http://i.imgur.com/zugsAYb.gif";
    productClicks();
  }

 }

 img1.addEventListener('click', clickHandle);
 img2.addEventListener('click', clickHandle);
 img3.addEventListener('click', clickHandle); 


 function productClicks() {
 var content = document.getElementById('content');
 var ul = document.createElement('ul');
 content.appendChild(ul);
 for(var i = 0; i < itemsListArray.length; i++) {
    clickDataArray.push(itemsListArray[i].itemNumberClicked);
  // var li = document.createElement('li');
  // var dataStr = itemsListArray[i].itemNumberClicked + ' clicks for ' + itemsListArray[i].itemName;
  // li.innerText = dataStr; 
  // ul.appendChild(li);
 }


for (var i = 0; i < itemsListArray.length; i++){
  labelArray.push(itemsListArray[i].itemName);
}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


var data = {
  labels: labelArray,
  datasets: [{
  label: 'Times Clicked',
  data: clickDataArray,
  backgroundColor: 'red'
}]
};

var myChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero:true
        }
      }]
    }
  }
});
}
