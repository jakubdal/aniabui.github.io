var transition = function(id, newText) {
  var GLITCH = '̵̢̖̜̠̩̭̱̺͇͎͖̍̿͒̈̈́̃̀̒̉ͦͪͮ͆̀͝_';
  var SPEED = 150;
  var GLITCH_CHANCE = 0.5;

  var elem = $(id);
  var oldText = elem.text();
  var newLength = (newText.length > oldText.length) ? newText.length : oldText.length;
  var chars = [];

  for (var i = 0; i < newLength; i++) {
    var span = document.createElement('span');
    span.innerHTML = oldText[i] ? oldText[i] : '';
    chars.push(span);
  }
  elem.html(chars);

  var generateGlitch = function() {
    var getRandom = function() { return Math.floor(Math.random() * GLITCH.length); };
    return GLITCH[getRandom()] + GLITCH[getRandom()] + GLITCH[getRandom()];
  }

  var changeIndex = function(elem, newChar) {
    if(Math.random() > GLITCH_CHANCE) {
      elem.innerHTML = generateGlitch();
      elem.style.color = "#"+(Math.floor(Math.random()*16777215)).toString(16);
      setTimeout(function() { changeIndex(elem, newChar); }, SPEED);
    } else {
      elem.style.color = 'black'; /*font color*/
      elem.innerHTML = newChar.replace("ą", "<b><u><i>Definition 1</i></b></u>")
      .replace("ł", " <br>")
      .replace("ć", "<b>(1)</b>")
      .replace("ę", "<b>(2)</b>")
      .replace("ź", "<b>(3)</b>")
      .replace("ń", "<b><u><i>Definition 2</i></b></u>")
      .replace("ó", "<b><u><i>Definition 3</i></b></u><b>*</b>")
    }

  }

  chars.forEach(function(elem, i) {
    var newContent = (newText[i]) ? newText[i] : '';
    setTimeout(function() { changeIndex(elem, newContent); }, Math.random()*1000);
  });


}

var index = 0;
var array_of_texts = new Array();
array_of_texts[0] = "ą ł ć a graphic designer, an amateur photographer, an art enthusiast ł ę a believer in the power of beauty and an ugliness-fighter ł ź a resident of warsaw who is currently studying in IL"
array_of_texts[1] = "ń ł ć a graphic design & computer science student at illinois wesleyan university ł ę a president & founder of 'photography and graphic art' club at IWU ł ź a member of kappa pi & alpha lambda delta";
array_of_texts[2] = "ó ł ć a big fan of jamie xx’s music, gaspar noe’s movies and prue stent’s photography ł ę an avid traveler who is crazy about local food & contemporary art galleries ł ź an occasional yoga and aerobics freak-wanna-be";


document.getElementById("button_forward").addEventListener("click", function(){
  if (index + 1 < array_of_texts.length) {
    index++;
    transition('#text', array_of_texts[index]);
  }
});

document.getElementById("button_backward").addEventListener("click", function(){
  if (index - 1 >= 0) {
    index--;
    transition('#text', array_of_texts[index]);
  }
});
