function computerPick(){

  let humanClick = Math.random();
  let result = "";

  if(humanClick>=0 && humanClick <1/6){
    result = "1";
  }
  else if(humanClick>1/6 && humanClick <1/3){
    result = "2";
  }
  else if(humanClick>1/3 && humanClick <1/2){
    result = "3";
  }
  else if(humanClick>1/2 && humanClick <2/3){
    result = "4";
  }
  else if(humanClick>2/3 && humanClick <5/6){
    result = "5"
  }
  else if(humanClick>=5/6 && humanClick <=1){
    result = "6";
  }
  alert(`You got ${result}`)
  
}