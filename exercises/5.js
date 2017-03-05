var emptyStr = '';
var asterisk = '*';

function exercise5() {
  var phraseArray = ["November", "is", "the", "coolest", "month", "of", "the", "Year"];
  //Get length of words of phrase 
  var strLengths = phraseArray.map(function(item){  
    return item.length;
  });
  //Get longest word length
  var maxStrLength = Math.max.apply(Math, strLengths);
  //Added placeholders for top and bottom frame
  phraseArray.unshift(emptyStr);
  phraseArray.push(emptyStr);
  //Start framing
  return framePhrase(phraseArray, maxStrLength);
}

function framePhrase(phraseArray, contentLength) {
  var result = emptyStr;
  var item;

  //No more items on phrase to process, finishes recursive cycle
  if(phraseArray.length === 0){
    return result;
  }
  //Gets and remove item 0 from phrase array
  item = phraseArray.shift();
  if(item === emptyStr){
    result = getTopBottom(contentLength);
  } else {
    result = frameContent(item, contentLength);
  }

  return result + '\n' + framePhrase(phraseArray, contentLength);
}

function getTopBottom(contentLength, idx) {
  var i = idx || 0;
  //Breaks recursion if position is greater than last position
  if(i > (contentLength + 3)){
    return emptyStr;
  }

  return asterisk + getTopBottom(contentLength, i + 1);
}

function frameContent(item, contentLength, idx, itemInserted) {
  var i = idx || 0;
  var itemIn = itemInserted || false;
  //Sets default for result to avoid 3rd if after recursion break
  var result = ' ';
  if (i > (contentLength + 4)) {
    return emptyStr;
  } 
  //If is first or last position, get asterisk
  if (i === 0 || i === contentLength + 4){
    result = asterisk;

  //if item has not been added and position is after first asterisk 
  //and space add item, set flag to avoid further insertion and 
  //increase position to shorten cycle
  } else if (!itemIn && i > 1) {
    itemIn = true;
    i += item.length;
    result = item;
  }

  return result + frameContent(item, contentLength, i + 1, itemIn);
}

module.exports = exercise5;