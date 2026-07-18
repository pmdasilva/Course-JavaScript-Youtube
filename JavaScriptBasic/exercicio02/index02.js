// - 2a. At restarant, you order 1 soup for $10,3 burguers for $8 each, and 1 ice cream for $5. Use javaScript to calculate the cost of the order.
const shipping = 4.99

const conta = {
    soup:10.3,
    burguers:8,
    IceCream: 5
};

const checkoutAmazon = {
    basketball:20.95,
    toaster:18.99,
    tshirt: 7.99
};

const costToaster = {
    toaster:18.50,
    shirts: 7.50
};

// - 2a. At restarant, you order 1 soup for $10,3 burguers for $8 each, and 1 ice cream for $5. Use javaScript to calculate the cost of the order.
function valorTotalConta(){
    const total = Object.values(conta).reduce(
        (valorItems, valorTotal) => 
            valorItems + valorTotal, 0
        );
        return total.toFixed(2)
}

// - 2b. You're at a restaurant with 2 friends(3 people in total)  and make the same order as 2a. Calculate how mach each person pays.
function contaDividaEmTresPessoas(){
    const media = valorTotalConta() / Object.keys(conta).length
    return media.toFixed(2)
}

// - 2c. Calculate the total cost of a toaster ($18.50) and 2 shirts ($7.50 each).
function somaTotalToaster(){
    const somaTotal = costToaster.shirts * 2 + costToaster.toaster
    return somaTotal.toFixed(2);
}

// 2d. Calculate a 10% tax for the total in 2c.
function taxTenPercent(){
    const tax = somaTotalToaster() * 0.1
    return tax.toFixed(2);
}

// 2e. Calculate a 20% tax for the total in 2c (Remember that 1% = 1/100, so 20% = 20/100=0.2).
function taxTwentyPercent(){
    const tax = somaTotalToaster() * 0.2
    return tax.toFixed(2);
}


// - 2f. Calculate the cost of the products (before shipping and taxes). Hint:Calculate in cents to avoid inacurrencies.
// - 2g. Calculate the total before tax.
function totalAmazonWithoutTax(){
    const somaTotalSemTaxa = checkoutAmazon.basketball + checkoutAmazon.tshirt
    return somaTotalSemTaxa.toFixed(2)
}

// 2h. Calculate the 10% tax exactly. Hint: use Math.round();
function calculateTax(){
    const calculateTax = Math.round((totalAmazonWithoutTax() * 0.1 ))
    return calculateTax
}
// - 2i. Calculate Order total at the bottom.
function orderTotal(){
    const totalOrder = Math.round(totalAmazonWithoutTax() + calculateTax())
    return totalOrder + shipping + calculateTax()
}

// -2f. Finish: after finishing 2i remove the tosater from your cart.
function totalAmazonWithoutTax(){
//    const somaTotalSemTaxa = checkoutAmazon.basketball + checkoutAmazon.tshirt
//    return somaTotalSemTaxa.toFixed(2)
}

// 2j. Let's say we want to always round a number down (2.8 => 2) Using Google or an A.I tool, search for the code to this.
const number1 = 2.8
console.log(Math.floor(number1))
// - 2k. Let's always round a number up (2.3 => 3). Search how to do this.
const number2 = 2.3
console.log(Math.ceil(number2))

//console.log(orderTotal())
//console.log(valorTotalConta())
//console.log(calculateTax())
//console.log(totalAmazonWithoutTax())
//console.log(contaDividaEmTresPessoas())
//console.log(somaTotalToaster())
//console.log(taxTenPercent())
//console.log(taxTwentyPercent())


// We'll use Javascript to convert temperatures from Celsius (C°) to Farenheit(F°). The formula is:
function celsiusPaaFarenheit(celsius){
    return (celsius * 1.8) + 32
}

function farenheitParaCelsius(farenheit){
    return (farenheit - 32) / 1.8
}
//2l. The temperature is 25°C, calculate the teperature is Farenheit. (77);
console.log(celsiusPaaFarenheit(25).toFixed(2) +'°F')

//2m. The temperature is 86°F. Calculate the temperature  is celsius. (30);
console.log(farenheitParaCelsius(86).toFixed(2) + '°C')

//2n. The temperature is -5°C Calculate the temperature in Farenheit. (23);
console.log(farenheitParaCelsius(-10).toFixed(2) +'°F')