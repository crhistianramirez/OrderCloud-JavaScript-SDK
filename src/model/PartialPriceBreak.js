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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.PartialPriceBreak = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PartialPriceBreak model module.
   * @module model/PartialPriceBreak
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>PartialPriceBreak</code>.
   * @alias module:model/PartialPriceBreak
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PartialPriceBreak</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PartialPriceBreak} obj Optional instance to populate.
   * @return {module:model/PartialPriceBreak} The populated <code>PartialPriceBreak</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Quantity')) {
        obj['Quantity'] = ApiClient.convertToType(data['Quantity'], 'Number');
      }
      if (data.hasOwnProperty('Price')) {
        obj['Price'] = ApiClient.convertToType(data['Price'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} Quantity
   */
  exports.prototype['Quantity'] = undefined;
  /**
   * @member {Number} Price
   */
  exports.prototype['Price'] = undefined;



  return exports;
}));


