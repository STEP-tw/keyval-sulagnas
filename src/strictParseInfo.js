const Parsed=require("./parsed.js");
const ParseInfo=require("./parseInfo.js");
const InvalidKeyError=require("./errors/invalidKeyError.js");

const contains=function(list,key,stateOfStrictParse) {
  return list.find(function(validKey){
    if(stateOfStrictParse==false){
      return key.toLowerCase()==validKey.toLowerCase();
    }
    return key==validKey;
  });
}

var StrictParseInfo=function(initialParsingFunction,validKeys,stateOfStrictParse) {
  ParseInfo.call(this,initialParsingFunction);
  this.validKeys=validKeys;
  this.stateOfStrictParse=stateOfStrictParse;
}

StrictParseInfo.prototype=Object.create(ParseInfo.prototype);

StrictParseInfo.prototype.pushKeyValuePair=function() {
  if(!contains(this.validKeys,this.currentKey,this.stateOfStrictParse))
    throw new InvalidKeyError("invalid key",this.currentKey,this.currentPos);
  this.parsedKeys[this.currentKey]=this.currentValue;
  this.resetKeysAndValues();
}

module.exports=StrictParseInfo;
