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
    root.OrderCloud.LineItemProduct = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LineItemProduct model module.
   * @module model/LineItemProduct
   * @version 1.0.56
   */

  /**
   * Constructs a new <code>LineItemProduct</code>.
   * @alias module:model/LineItemProduct
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>LineItemProduct</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LineItemProduct} obj Optional instance to populate.
   * @return {module:model/LineItemProduct} The populated <code>LineItemProduct</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('QuantityMultiplier')) {
        obj['QuantityMultiplier'] = ApiClient.convertToType(data['QuantityMultiplier'], 'Number');
      }
      if (data.hasOwnProperty('ShipWeight')) {
        obj['ShipWeight'] = ApiClient.convertToType(data['ShipWeight'], 'Number');
      }
      if (data.hasOwnProperty('ShipHeight')) {
        obj['ShipHeight'] = ApiClient.convertToType(data['ShipHeight'], 'Number');
      }
      if (data.hasOwnProperty('ShipWidth')) {
        obj['ShipWidth'] = ApiClient.convertToType(data['ShipWidth'], 'Number');
      }
      if (data.hasOwnProperty('ShipLength')) {
        obj['ShipLength'] = ApiClient.convertToType(data['ShipLength'], 'Number');
      }
      if (data.hasOwnProperty('xp')) {
        obj['xp'] = ApiClient.convertToType(data['xp'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * @member {Number} QuantityMultiplier
   */
  exports.prototype['QuantityMultiplier'] = undefined;
  /**
   * @member {Number} ShipWeight
   */
  exports.prototype['ShipWeight'] = undefined;
  /**
   * @member {Number} ShipHeight
   */
  exports.prototype['ShipHeight'] = undefined;
  /**
   * @member {Number} ShipWidth
   */
  exports.prototype['ShipWidth'] = undefined;
  /**
   * @member {Number} ShipLength
   */
  exports.prototype['ShipLength'] = undefined;
  /**
   * @member {Object} xp
   */
  exports.prototype['xp'] = undefined;



  return exports;
}));


