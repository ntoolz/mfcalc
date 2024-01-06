function getInvestment() {
    // Calculate the value of the investment
    var nav = get("#nav");
    var fundunit = get("#fundunit");
    var investmentValue = parseFloat((fundunit * nav).toFixed(4));
    return investmentValue;
}

function calculateProfit()
{
    //var nav = get("#nav");
    var fundunit = get("#fundunit");
    var avgnav = get("#avgNav");
    var initinv = parseFloat((fundunit * avgnav).toFixed(4));
    //var unit = nav - avgnav;
    var profit  = parseFloat((getInvestment() - initinv).toFixed(4));
    set("#totReturn",profit )

    var totatlReturnPc = (profit / getInvestment()  * 100);
    set("#totReturnPc",totatlReturnPc + " %");
}

function calculateExpanse() {
    // Calculate the expenses
    var expratio = get("#expratio");
    var expenseValue = getInvestment() * (expratio / 100);
    expenseValue = parseFloat(expenseValue.toFixed(4));
    set("#expval", expenseValue);
}

function calculateExit() {
    // Calculate the exit load        
    var exitLoad = get("#exitload");
    var exitLoadValue = getInvestment() * (exitLoad / 100);
    exitLoadValue = parseFloat(exitLoadValue.toFixed(4));
    set("#exitval", exitLoadValue);
}

function calculateInv() {
    //Calculate Investment
    var buy = get("#buy");
    var inavprice = get("#inavprice");
    var unitsbuy = buy / nav;
    set("#fundunit", unitsbuy);
}

function calculateRedeem() {
    //Caculate Redeem
    var sell = get("#sell");
    var amount = sell * nav;
    set("#redeem", amount)
}

function calculateUnit() {
    var nav = get("#nav");
    var investmentValue = get("#investmentValue");

    var fundunit = investmentValue / nav;
    set("#fundunit", fundunit);

    calculate();
}

function calculate() {
    //var fundsize = get('#fundsize');

    set("#investmentValue", getInvestment())

    //Stamp Duty
    var stampDuty = parseFloat((getInvestment() * 0.005).toFixed(4));
    set("#stampduty", stampDuty);

    //STCG
    var stcg = getInvestment() * 0.15;
    set("#STCG", stcg);

    //LTCG
    var ltcg = getInvestment() * 0.10;
    set("#LTCG", ltcg);


    calculateExit();
    calculateExpanse();

}

function get(f) {
    return document.querySelector(f).value;
}

function set(f, v) {
    document.querySelector(f).value = v;//parseFloat(v.toFixed(2));
    /*
    if (v < 0)
        document.querySelector(f).className = "ro red";

    if (v > 0)
        document.querySelector(f).className = "ro green";
        */
}

function printDiv(divName) {
    var printContents = document.querySelector(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}
