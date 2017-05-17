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
    root.OrderCloud.MessageConfig = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The MessageConfig model module.
   * @module model/MessageConfig
   * @version 1.0.50
   */

  /**
   * Constructs a new <code>MessageConfig</code>.
   * @alias module:model/MessageConfig
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>MessageConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageConfig} obj Optional instance to populate.
   * @return {module:model/MessageConfig} The populated <code>MessageConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('URL')) {
        obj['URL'] = ApiClient.convertToType(data['URL'], 'String');
      }
      if (data.hasOwnProperty('ElevatedClaimsList')) {
        obj['ElevatedClaimsList'] = ApiClient.convertToType(data['ElevatedClaimsList'], 'String');
      }
      if (data.hasOwnProperty('SharedKey')) {
        obj['SharedKey'] = ApiClient.convertToType(data['SharedKey'], 'String');
      }
      if (data.hasOwnProperty('ConfigData')) {
        obj['ConfigData'] = ApiClient.convertToType(data['ConfigData'], Object);
      }
      if (data.hasOwnProperty('ID')) {
        obj['ID'] = ApiClient.convertToType(data['ID'], 'String');
      }
      if (data.hasOwnProperty('Name')) {
        obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
      }
      if (data.hasOwnProperty('MessageTypes')) {
        obj['MessageTypes'] = ApiClient.convertToType(data['MessageTypes'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} URL
   */
  exports.prototype['URL'] = undefined;
  /**
   * @member {String} ElevatedClaimsList
   */
  exports.prototype['ElevatedClaimsList'] = undefined;
  /**
   * @member {String} SharedKey
   */
  exports.prototype['SharedKey'] = undefined;
  /**
   * @member {Object} ConfigData
   */
  exports.prototype['ConfigData'] = undefined;
  /**
   * @member {String} ID
   */
  exports.prototype['ID'] = undefined;
  /**
   * @member {String} Name
   */
  exports.prototype['Name'] = undefined;
  /**
   * @member {Array.<String>} MessageTypes
   */
  exports.prototype['MessageTypes'] = undefined;



  return exports;
}));


