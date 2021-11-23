describe('submitPaymentInfo() tests', function () {
    // ????? HOW TO TEST FOR A PREVENTED DEFAULT
    it('should not execute further if createCurPayment returns undefined', function () {
        billAmtInput.value = '';
        submitPaymentInfo();
        expect(paymentId).toBe(0);
    })

    it('should reset the paymentForm fields to empty strings', function () {
        // ????? how does the following code cause the previous it() to fail?
        billAmtInput.value = 10;
        tipAmtInput.value = 3;
        submitPaymentInfo();
        expect(billAmtInput.value).toBe('');
    })
    afterEach(function () {
        allPayments = {};
        paymentTbody.innerHTML = '<tbody></tbody>';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        paymentId = 0;
    })
})

describe('createCurPayment() tests', function () {

    it('should return an object with billAmt, tipAmt, and tipPercent', function () {
        billAmtInput.value = 10;
        tipAmtInput.value = 2;
        let testItem = createCurPayment();
        expect(testItem.billAmt).toEqual('10');
        expect(testItem.tipAmt).toEqual('2');
        expect(testItem.tipPercent).toEqual(20);
    })

    it('should return undefined if inputs are negative or empty', function () {
        billAmtInput.value = -20;
        tipAmtInput.value = 5;
        let testItem = createCurPayment();
        expect(testItem).toBeUndefined();
    })
    it('should still execute if tipAmt is zero', function () {
        billAmtInput.value = 60;
        tipAmtInput.value = 0;
        let testItem = createCurPayment();
        expect(testItem).not.toBeUndefined();
    })

    it('should not execute if tipAmt is negative', function () {
        billAmtInput.value = 60;
        tipAmtInput.value = -20;
        let testItem = createCurPayment();
        expect(testItem).toBeUndefined();
    })

    it('should not execute if billAmt is not positive or non-zero', function () {
        billAmtInput.value = -60;
        tipAmtInput.value = 0;
        let testItem = createCurPayment();
        expect(testItem).toBeUndefined();

        billAmtInput.value = 0;
        tipAmtInput.value = 0;
        testItem = createCurPayment();
        expect(testItem).toBeUndefined();
    })
    afterEach(function () {
        let testItem = '';
        billAmtInput.value = '';
        tipAmtInput.value = '';
    })
})

describe('appendPaymentTable()', function () {

    it('should add a new tr to paymentTbody', function () {

    })

})

describe('updateSummary()', function () {

    it('should fill in all 3 summary tds', function () {

    })

})
