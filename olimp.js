/*часы*/
function digitalWatch() {
var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
if (hours < 10) hours = "0" + hours;
if (minutes < 10) minutes = "0" + minutes;
if (seconds < 10) seconds = "0" + seconds;
document.getElementById("digital_watch").innerHTML = hours + ":" + minutes + ":" + seconds;
setTimeout("digitalWatch()", 1000);
}

/*Кнопка*/
var smoothJumpUp = function() {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            window.scrollBy(0,-50);
            setTimeout(smoothJumpUp, 10);
        }
    }

    window.onscroll = function() {
      var scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if (scrolled > 100) {
      	document.getElementById('upbutton').style.display = 'block';
      } else {
      	document.getElementById('upbutton').style.display = 'none';
      }
    }
