function calculate(amount,tip){
    let percent=(tip/amount)*100;
    let totalAmount=amount+tip;

if(tip<=5){
    console.log("You can do better than that."+tip+" is very low");
    console.log("You left "+percent+"% of tip of your dinner");
    console.log("Your total amount is "+totalAmount);
}
else if(tip>=20){
    console.log("You are generous."+tip+" is high");
    console.log("You left "+percent+"% of tip of your dinner");
    console.log("Your total amount is "+totalAmount);
}
else{
    console.log("You left a good tip ."+tip+" is good");
    console.log("You left "+percent+"% of tip of your dinner");
    console.log("Your total amount is "+totalAmount);
}
}
calculate(50,4);

calculate(100,15);
calculate(123,25);
