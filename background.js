console.log ("background active")
var popup = chrome.extension.getURL('foriamawoman/index.html');
var win;

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(){
  console.log("button clicked")
}

setInterval(checkTime, 10000);

var alarmTriggered = false;

win = window.open(popup, '', 'width=500, height=500');

function checkTime(){
  var now = new Date;
  var hour = now.getHours();
  if (hour == 6){
    if (!alarmTriggered){
      win = window.open(popup, '', 'width=750, height=360');
      alarmTriggered = true;
    }
  } else if (hour > 6){
    if (alarmTriggered){
      alarmTriggered = false;
    }
  }
}
