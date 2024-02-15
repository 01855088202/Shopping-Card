document.getElementById('btn2').addEventListener('click',function () {
    var input1=document.getElementById('in');
    var caseInputString=input1.value;
    var caseInputNumber=parseInt(caseInputString);
    var caseInputNew=caseInputNumber+1;
    input1.value=caseInputNew;
    
})
//minus
document.getElementById('btn1').addEventListener('click',function () {
    var input2=document.getElementById('in');
    var caseInputString=input2.value;
    var caseInputNumber=parseInt(caseInputString);
    var caseInputNew=caseInputNumber-1;
    input2.value=caseInputNew;

    
})


//secondinput
function updateProductQ(isIcrease) {
    var caseInput = document.getElementById('in2')
    var caseInputString = caseInput.value;
    var caseInputNumber = parseInt(caseInputString);
    //var caseInputNew = caseInputNumber+1;  //changeable
      var caseInputNew;
   if (isIcrease===true) {
      caseInputNew = caseInputNumber+1;
   }
   else{
    caseInputNew = caseInputNumber-1;
   }



     caseInput.value = caseInputNew;
      return caseInputNew;
}
document.getElementById('btn4').addEventListener('click',function(){
             var plusProduct=updateProductQ(true);
             //console.log(plusProduct);
             totalPrice = plusProduct * 59;
             var total=document.getElementById('case-total');
             total.innerText=totalPrice;
           
})
document.getElementById('btn3').addEventListener('click',function(){
    var plusProduct=updateProductQ(false);
    //console.log(plusProduct);
    totalPrice = plusProduct * 59;
    var total=document.getElementById('case-total');
    total.innerText=totalPrice;
})

