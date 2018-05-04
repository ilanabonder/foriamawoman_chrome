

//store json file
let info = null;
let keys = null;

let yesterdayInfo;
let todayInfo;

//preload() runs first, once
function preload() {
  //load json file
  data = loadJSON("./content.json");
}

//setup() runs once, after preload()
function setup() {
    noCanvas();

    // let d = new Date;
    // let h = d.getHours();
    // if (h == 9){
      getRandomData();
    // }

    let ImgURL = data.inspo[yesterdayInfo].picture;
    let personName = data.inspo[yesterdayInfo].name;
    let Impact = data.inspo[yesterdayInfo].impact;
    let SmallText = data.inspo[yesterdayInfo].smalltext;

    createText(ImgURL,personName, Impact, SmallText);
        }


function draw() {


}

function getRandomData(){
  let todayInfo = Math.floor(Math.random() * Math.floor(data.inspo.length));
  yesterdayInfo = todayInfo;
}

function createText(ImgURL,personName, Impact, SmallText) {
  var htmlString = '<div class="new">';
  htmlString = '<div class="newImg">';
  htmlString +=	'<img class="myImg" src="' + ImgURL + '">';
  htmlString += '</div>';
  $('.displaycontent').append(htmlString);
  htmlString = '<div class="newText">';
	htmlString +=	'<h1 class="newTitle">' + personName + '</h1>';
  htmlString +=	'<p class="newSubTitle">' + Impact + '<p>';
  htmlString +=	'<p class="newSmallText">' + SmallText + '<p>';
  htmlString += '</div>';
	htmlString += '</div>';
	$('.displaycontent').append(htmlString);
	}
