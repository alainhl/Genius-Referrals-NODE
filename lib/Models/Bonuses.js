
/**
 * GeniusReferralsLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */
var BaseModel = require("./BaseModel");

/**
 * Creates an instance of Bonuses
 *
 * @constructor
 */
Bonuses = function (obj) {
    if(!obj) {
        this.advocateToken = null;     
        this.reference = null;     
        this.paymentAmount = null;     
        //Append to variable dictionary
        this._variableDict['advocateToken'] = 'advocate_token';
        this._variableDict['paymentAmount'] = 'payment_amount';
    } else {
        this.advocateToken = (obj.advocate_token !== undefined && obj.advocate_token !== null)? obj.advocate_token : null;
        this.reference = (obj.reference !== undefined && obj.reference !== null)? obj.reference : null;
        this.paymentAmount = (obj.payment_amount !== undefined && obj.payment_amount !== null)? obj.payment_amount : null;
        //Append to variable dictionary
        this._variableDict['advocateToken'] = 'advocate_token';
        this._variableDict['paymentAmount'] = 'payment_amount';
    }
};

Bonuses.prototype = new BaseModel();
Bonuses.prototype.constructor = Bonuses;

/**
 * The referral's token. Usually the one that completed the purchase, or trigger an event.
 *
 * @return {string}
 */
Bonuses.prototype.getAdvocateToken = function() {
    return this.advocateToken;
};

/**
 * Setter for AdvocateToken
 * 
 * @param {string} value 
 */
Bonuses.prototype.setAdvocateToken = function(value) {
    this.advocateToken = value;
};

/**
 * The reference number for this request. Usually the order_id, payment_id, or timestamp.
 *
 * @return {string}
 */
Bonuses.prototype.getReference = function() {
    return this.reference;
};

/**
 * Setter for Reference
 * 
 * @param {string} value 
 */
Bonuses.prototype.setReference = function(value) {
    this.reference = value;
};

/**
 * The payment amount the referrals has made. Required for a percentage based campaign.
 *
 * @return {double|null}
 */
Bonuses.prototype.getPaymentAmount = function() {
    return this.paymentAmount;
};

/**
 * Setter for PaymentAmount
 * 
 * @param {double|null} value 
 */
Bonuses.prototype.setPaymentAmount = function(value) {
    this.paymentAmount = value;
};


module.exports = Bonuses;
