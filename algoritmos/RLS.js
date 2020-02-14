const SLR = require('ml-regression').SLR;
const ER = require('ml-regression').ExponentialRegression;

let regresion = (input, output) => {
    reg = new SLR(input, output);
    return reg;
}
let exporeg = (input, ouput) => {
    reg = new ER(input, ouput);
    return reg;
}
module.exports = {
    regresion,
    exporeg
}