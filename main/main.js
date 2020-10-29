module.exports = function main(inputArray) {
    let ret = '';
    let totalCost = 0;
    ret += '***<store earning no money>Receipt ***\n';

    const groupBy = (array, key) => {
        return array.reduce((result, currentValue) => {
            (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
            return result;
        }, {});
    };

    let groupedArray = groupBy(inputArray, 'Barcode')
    for (let c in groupedArray) {
        let quantity = groupedArray[c].length;
        let subtotal = quantity * groupedArray[c][0].Price;
        totalCost += subtotal;
        if (groupedArray[c][0].Unit != 'a') {
            ret += 'Name: ' + groupedArray[c][0].Name + ', Quantity: ' + quantity + ' ' + groupedArray[c][0].Unit + 's, Unit price: '
                + groupedArray[c][0].Price.toFixed(2) + ' (yuan), Subtotal: ' + subtotal.toFixed(2) + ' (yuan)\n';
        }
        else {
            ret += 'Name: ' + groupedArray[c][0].Name + ', Quantity: ' + quantity + ', Unit price: '
                + groupedArray[c][0].Price.toFixed(2) + ' (yuan), Subtotal: ' + subtotal.toFixed(2) + ' (yuan)\n';
        }
    }


    ret += '----------------------\n';
    ret += 'Total: ' + totalCost.toFixed(2) + ' (yuan)\n'
    ret += '**********************\n';
    return ret;
}
