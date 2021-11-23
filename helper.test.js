describe('sumPaymentTotal()', function () {
    it('should add all payments together for a total', function () {
        billAmtInput.value = 30;
        tipAmtInput.value = 10;
        submitPaymentInfo();
        billAmtInput.value = 40;
        tipAmtInput.value = 10;
        submitPaymentInfo();
        billAmtInput.value = 20;
        tipAmtInput.value = 5;
        submitPaymentInfo();
        let testItem = sumPaymentTotal('billAmt');
        expect(testItem).toEqual(90)
    })
    afterEach(function () {
        let testItem = '';
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
        paymentTbody.innerHTML = '<tbody></tbody>';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        paymentId = 0;
    })
})

describe('calculateTipPercent()', function () {
    it('should convert billAmt and tipAmt into a tip percentage', function () {
        expect(calculateTipPercent(100, 23)).toEqual(23)
    })
    afterEach(function () {
        let testItem = '';
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
        paymentTbody.innerHTML = '<tbody></tbody>';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        paymentId = 0;
    })
})