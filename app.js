'use strict';
var itemsListArray = [];
var totalClicks = 0;
var labelArray = [];
var clickDataArray = [];
var percentClicked = [];
var clickLimit = 1;

function Item(itemName, itemPath) {
  this.itemName = itemName;
  this.itemPath = itemPath;
  this.itemShownTotal = 0;
  this.itemNumberClicked = 0;
  itemsListArray.push(this);
}

//old items will fill oldUserPageArray, newUserPageArray will //compare to oldUserPageArray and have different results. itemListArray will hold list of all items
var a = new Item('bag', 'images/bag.jpg');
var b = new Item('banana', 'images/banana.jpg');
var c = new Item('bathroom', 'images/bathroom.jpg');
var d = new Item('boots', 'images/boots.jpg');
var e = new Item('breakfast', 'images/breakfast.jpg');
var f = new Item('bubblegum', 'images/bubblegum.jpg');
var g = new Item('chair', 'images/chair.jpg');
var h = new Item('chtulu', 'images/cthulhu.jpg');
var i = new Item('dog-duck', 'images/dog-duck.jpg');
var j = new Item('dragon', 'images/dragon.jpg');
var k = new Item('pen', 'images/pen.jpg');
var l = new Item('pet-sweep', 'images/pet-sweep.jpg');
var m = new Item('scissors', 'images/scissors.jpg');
var n = new Item('shark', 'images/shark.jpg');
var o = new Item('sweep', 'images/sweep.png');
var p = new Item('tauntaun', 'images/tauntaun.jpg');
var q = new Item('unicorn', 'images/unicorn.jpg');
var r = new Item('usb', 'images/usb.gif');
var s = new Item('water-can', 'images/water-can.jpg');
var t = new Item('wine glass', 'images/wine-glass.jpg');

function randomImgIndex() {
  return Math.floor(Math.random() * (itemsListArray.length));
}
var prevImgIndexes = [];

function randomPicGenerate() {
  var currentImgIndexes = [];
  while (currentImgIndexes.length < 3) {
    var randomImgSelecetVar = randomImgIndex();
    if (!prevImgIndexes.includes(randomImgSelecetVar) && !currentImgIndexes.includes(randomImgSelecetVar)) {
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

function clickHandle(event) {
  randomPicGenerate();
  totalClicks++;
  var productIdx = this.alt;
  itemsListArray[productIdx].itemNumberClicked++;
  //this.itemNumberClicked++;
  if (totalClicks === clickLimit) {
    localStorage.newClick = JSON.stringify(itemsListArray);
    img1.removeEventListener('click', clickHandle);
    img2.removeEventListener('click', clickHandle);
    img3.removeEventListener('click', clickHandle);
    img1.src = "http://i.imgur.com/zugsAYb.gif";
    img2.src = "http://i.imgur.com/zugsAYb.gif";
    img3.src = "http://i.imgur.com/zugsAYb.gif";
    productClicks();

  }

}
var percentTotal = [];

if (localStorage.newClick) {
  var newClickings = JSON.parse(localStorage.newClick);
  for (var i = 0; i < newClickings.length; i++) {
    itemsListArray[i].itemNumberClicked = newClickings[i].itemNumberClicked;
    itemsListArray[i].itemShownTotal = newClickings[i].itemShownTotal;
  }
}
//write a function that gives the percent of an item clicked when shown.

img1.addEventListener('click', clickHandle);
img2.addEventListener('click', clickHandle);
img3.addEventListener('click', clickHandle);

function productClicks() {
  var content = document.getElementById('content');
  var ul = document.createElement('ul');
  content.appendChild(ul);
  for (var i = 0; i < itemsListArray.length; i++) {
    clickDataArray.push(itemsListArray[i].itemNumberClicked);
    labelArray.push(itemsListArray[i].itemName);
    percentTotal.push((itemsListArray[i].itemShownTotal / itemsListArray[i].itemNumberClicked) * 100);

  }

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  Chart.defaults.global.defaultFontColor = '#fff';
  var data = {
    labels: labelArray,
    datasets: [{
      label: 'Times Clicked',
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "rgba(179,181,198,1)",
      pointBackgroundColor: "rgba(179,181,198,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(179,181,198,1)",
      data: clickDataArray
    }, {
      label: 'Percent Cliciked',
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      pointBackgroundColor: "rgba(255,99,132,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255,99,132,1)",
      data: percentTotal
    }]
  };

  var myChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: {
      responsive: true,
      scales: {
        reverse: true,
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}