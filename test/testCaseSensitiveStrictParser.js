const src=function(filePath){return "../src/"+filePath};

const assert=require('chai').assert;
const Parsed=require(src('parsed.js'));
const StrictParser=require(src('index.js')).StrictParser;

describe("strict parser that is case sensitive",function(){
  it("should parse when specified keys are in lower case and actual is not",function(){
    let kvParser=new StrictParser(["name"],false);
    // false indicates that case sensitive is false. By default it is true
    let expected=new Parsed();
    expected["NAME"]="jayanth";
    let parsed=kvParser.parse("NAME=jayanth");
    assert.deepEqual(parsed,expected);
  });

  it("should parse when specified keys are in lower case and first letter of actual is not",function(){
    let kvParser=new StrictParser(["name"],false);
    // false indicates that case sensitive is false. By default it is true
    let expected=new Parsed();
    expected["Name"]="jayanth";
    let parsed=kvParser.parse("Name=jayanth");
    assert.deepEqual(parsed,expected);
  });

  it("should parse when specified keys are in lower case and last letter of actual is not",function(){
    let kvParser=new StrictParser(["name"],false);
    // false indicates that case sensitive is false. By default it is true
    let expected=new Parsed();
    expected["namE"]="jayanth";
    let parsed=kvParser.parse("namE=jayanth");
    assert.deepEqual(parsed,expected);
  });

  it("should parse when specified keys are in lower case and any letter of actual is not",function(){
    let kvParser=new StrictParser(["name"],false);
    // false indicates that case sensitive is false. By default it is true
    let expected=new Parsed();
    expected["NaMe"]="jayanth";
    let parsed=kvParser.parse("NaMe=jayanth");
    assert.deepEqual(parsed,expected);
  });

  it("should parse when specified keys are in upper case and first letter of actual is not",function(){
    let kvParser=new StrictParser(["NAME"],false);
    // false indicates that case sensitive is false. By default it is true
    let expected=new Parsed();
    expected["nAME"]="jayanth";
    let parsed=kvParser.parse("nAME=jayanth");
    assert.deepEqual(parsed,expected);
  });

  it("should parse when specified keys are in upper case and last letter of actual is not",function(){
    let kvParser=new StrictParser(["NAME"],false);
    // false indicates that case sensitive is false. By default it is true
    let expected=new Parsed();
    expected["NAMe"]="jayanth";
    let parsed=kvParser.parse("NAMe=jayanth");
    assert.deepEqual(parsed,expected);
  });

  it("should parse when specified keys are in upper case and any letter of actual is not",function(){
    let kvParser=new StrictParser(["NAME"],false);
    // false indicates that case sensitive is false. By default it is true
    let expected=new Parsed();
    expected["nAme"]="jayanth";
    let parsed=kvParser.parse("nAme=jayanth");
    assert.deepEqual(parsed,expected);
  });

  it("should throw error when specified keys are in lower case and actual is not",function(){
    let kvParser=new StrictParser(["name"],true);
    // true indicates that parser is case sensitive
    assert.throws(()=>{
      kvParser.parse("NAME=jayanth");
    })
  });

  it("should throw error when specified keys are in lower case and first letter of actual is not",function(){
    let kvParser=new StrictParser(["name"],true);
    // true indicates that parser is case sensitive
    assert.throws(()=>{
      kvParser.parse("Name=jayanth");
    })
  });

  it("should throw error when specified keys are in lower case and last letter of actual is not",function(){
    let kvParser=new StrictParser(["name"],true);
    // true indicates that parser is case sensitive
    assert.throws(()=>{
      kvParser.parse("namE=jayanth");
    })
  });

  it("should throw error when specified keys are in lower case and any letter of actual is not",function(){
    let kvParser=new StrictParser(["name"],true);
    // true indicates that parser is case sensitive
    assert.throws(()=>{
      kvParser.parse("nAme=jayanth");
    })
  });

  it("should throw error when specified keys are in upper case and actual is not",function(){
    let kvParser=new StrictParser(["NAME"],true);
    // true indicates that parser is case sensitive
    assert.throws(()=>{
      kvParser.parse("name=jayanth");
    })
  });

  it("should throw error when specified keys are in upper case and first letter of actual is not",function(){
    let kvParser=new StrictParser(["NAME"],true);
    // true indicates that parser is case sensitive
    assert.throws(()=>{
      kvParser.parse("nAME=jayanth");
    })
  });

  it("should throw error when specified keys are in upper case and last letter of actual is not",function(){
    let kvParser=new StrictParser(["NAME"],true);
    // true indicates that parser is case sensitive
    assert.throws(()=>{
      kvParser.parse("NAMe=jayanth");
    })
  });
  
  it("should throw error when specified keys are in upper case and any letter of actual is not",function(){
    let kvParser=new StrictParser(["NAME"],true);
    // true indicates that parser is case sensitive
    assert.throws(()=>{
      kvParser.parse("nAme=jayanth");
    })
  });

});
