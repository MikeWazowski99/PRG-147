function estimate() {
    let name = document.getElementById("fname").value;
    let fdrink1 = parseFloat(document.getElementById("fdrink1").value);
    let fdrink2 = parseFloat(document.getElementById("fdrink2").value);
    let fdrink3 = parseFloat(document.getElementById("fdrink3").value);
    let fdrink4 = parseFloat(document.getElementById("fdrink4").value);
    let fdrink5 = parseFloat(document.getElementById("fdrink5").value);

    let food1 = parseFloat(document.getElementById("food1").value);
    let food2 = parseFloat(document.getElementById("food2").value);
    let food3 = parseFloat(document.getElementById("food3").value);
    let food4 = parseFloat(document.getElementById("food4").value);
    let food5 = parseFloat(document.getElementById("food5").value);

    let dessert1 = parseFloat(document.getElementById("dessert1").value);
    let dessert2 = parseFloat(document.getElementById("dessert2").value);
    let dessert3 = parseFloat(document.getElementById("dessert3").value);
    let dessert4 = parseFloat(document.getElementById("dessert4").value);
    let dessert5 = parseFloat(document.getElementById("dessert5").value);
    var totalCost1 = ((fdrink1 * 1.5) + (fdrink2 * 5.5) + (fdrink3 * 3.5) + (fdrink4 * 2) + (fdrink5 + 1) - 1);
    var totalCost2 = ((food1 * 7.5) + (food2 * 5.5) + (food3 * 3.5) + (food4 * 2) + (food5 + 1) - 1);
    var totalCost3 = ((dessert1 * 3.5) + (dessert2 * 8.5) + (dessert3 * 3.5) + (dessert4 * 2) + (dessert5 + 1) - 1);
    var totalCost = totalCost1 + totalCost2 + totalCost3;
    document.getElementById("estimate").innerHTML = (name + ", your total amount is: $" + totalCost);

}