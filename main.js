var cash = prompt("Amount of money that you have");
var uzs = 1;
var usd = uzs * 9433;
var eur = uzs * 10354;
var usage = (500 * usd) + (250 * eur) + (120 * eur);
if (cash >= usage) {
    alert("Good luck,you have sufficent cash");
} else if (cash < usage) {
    var necessary = usage - cash;
    alert(`Sorry,you don't have sufficent money .You need ${necessary} UZS `)
}