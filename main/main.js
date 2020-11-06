module.exports = function main(inputArray) {
    let ret = '';
    let totalCost = 0;
    const grouped = inputArray.reduce((result, currentValue) => {
        (result[currentValue[`Barcode`]] = result[currentValue[`Barcode`]] || []).push(currentValue);
        return result;
    }, {})

    ret += '***<store earning no money>Receipt ***\n';

    for (let c in grouped) {
        let subtotal = grouped[c].length * grouped[c][0].Price;
        totalCost += subtotal;
        if (grouped[c][0].Unit != 'a') {
            ret += `Name: ${grouped[c][0].Name}, Quantity: ${grouped[c].length} ${grouped[c][0].Unit}s,`
                + ` Unit price: ${grouped[c][0].Price.toFixed(2)} (yuan), Subtotal: ${subtotal.toFixed(2)} (yuan)\n`;
        }
        else {
            ret += `Name: ${grouped[c][0].Name}, Quantity: ${grouped[c].length},`
                + ` Unit price: ${grouped[c][0].Price.toFixed(2)} (yuan), Subtotal: ${subtotal.toFixed(2)} (yuan)\n`;
        }
    }

    ret += '----------------------\n'
        + `Total: ${totalCost.toFixed(2)} (yuan)\n`
        + '**********************\n';
    return ret;
}
