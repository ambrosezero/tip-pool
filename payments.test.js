describe('submitPaymentInfo() tests', function () {
    // ????? HOW TO TEST FOR A PREVENTED DEFAULT
    it('should not execute further if createCurPayment returns undefined', function () {
        // billAmtInput.value = '';
        submitPaymentInfo();
        expect(paymentId).toBe(0);
    })

    it('should reset the paymentForm fields to empty strings', function () {
        // ????? how does the following code cause the previous it() to fail?
        billAmtInput.value = 10;
        tipAmtInput.value = 2;
        submitPaymentInfo();
        expect(billAmtInput.value).toBe('');
    })
})

describe('createCurPayment() tests', function () {

    it('should return an object with billAmt, tipAmt, and tipPercent', function () {

    })

    it('should return undefined if inputs are negative or empty', function () {

    })
    it('should still execute if tipAmt is zero, but not if tipAmt is negative', function () {

    })
    it('should not execute if billAmt is not positive or non-zero', function () {

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
