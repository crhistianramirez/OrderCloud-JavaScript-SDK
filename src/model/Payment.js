/**
 * OrderCloud
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 * Contact: ordercloud@four51.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PaymentTransaction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PaymentTransaction'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Payment = factory(root.OrderCloud.ApiClient, root.OrderCloud.PaymentTransaction);
  }
}(this, function(ApiClient, PaymentTransaction) {
  'use strict';




  /**
   * The Payment model module.
   * @module model/Payment
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>Payment</code>.
   * @alias module:model/Payment
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>Payment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Payment} obj Optional instance to populate.
   * @return {module:model/Payment} The populated <code>Payment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Type')) {
        obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
      }
      if (data.hasOwnProperty('DateCreated')) {
        obj['DateCreated'] = ApiClient.convertToType(data['DateCreated'], 'String');
      }
      if (data.hasOwnProperty('CreditCardID')) {
        obj['CreditCardID'] = ApiClient.convertToType(data['CreditCardID'], 'String');
      }
      if (data.hasOwnProperty('SpendingAccountID')) {
        obj['SpendingAccountID'] = ApiClient.convertToType(data['SpendingAccountID'], 'String');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('Amount')) {
        obj['Amount'] = ApiClient.convertToType(data['Amount'], 'Number');
      }
      if (data.hasOwnProperty('Accepted')) {
        obj['Accepted'] = ApiClient.convertToType(data['Accepted'], 'Boolean');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
      if (data.hasOwnProperty('Transactions')) {
        obj['Transactions'] = ApiClient.convertToType(data['Transactions'], [PaymentTransaction]);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Type
   */
  exports.prototype['Type'] = undefined;
  /**
   * @member {String} DateCreated
   */
  exports.prototype['DateCreated'] = undefined;
  /**
   * @member {String} CreditCardID
   */
  exports.prototype['CreditCardID'] = undefined;
  /**
   * @member {String} SpendingAccountID
   */
  exports.prototype['SpendingAccountID'] = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {Number} Amount
   */
  exports.prototype['Amount'] = undefined;
  /**
   * @member {Boolean} Accepted
   */
  exports.prototype['Accepted'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;
  /**
   * @member {Array.<module:model/PaymentTransaction>} Transactions
   */
  exports.prototype['Transactions'] = undefined;



  return exports;
}));


