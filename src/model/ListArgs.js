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
    root.OrderCloud.ListArgs = factory(root.OrderCloud.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ListArgs model module.
   * @module model/ListArgs
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>ListArgs</code>.
   * @alias module:model/ListArgs
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ListArgs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListArgs} obj Optional instance to populate.
   * @return {module:model/ListArgs} The populated <code>ListArgs</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Search')) {
        obj['Search'] = ApiClient.convertToType(data['Search'], 'String');
      }
      if (data.hasOwnProperty('SearchOn')) {
        obj['SearchOn'] = ApiClient.convertToType(data['SearchOn'], ['String']);
      }
      if (data.hasOwnProperty('SortBy')) {
        obj['SortBy'] = ApiClient.convertToType(data['SortBy'], ['String']);
      }
      if (data.hasOwnProperty('Page')) {
        obj['Page'] = ApiClient.convertToType(data['Page'], 'Number');
      }
      if (data.hasOwnProperty('PageSize')) {
        obj['PageSize'] = ApiClient.convertToType(data['PageSize'], 'Number');
      }
      if (data.hasOwnProperty('Filters')) {
        obj['Filters'] = ApiClient.convertToType(data['Filters'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} Search
   */
  exports.prototype['Search'] = undefined;
  /**
   * @member {Array.<String>} SearchOn
   */
  exports.prototype['SearchOn'] = undefined;
  /**
   * @member {Array.<String>} SortBy
   */
  exports.prototype['SortBy'] = undefined;
  /**
   * @member {Number} Page
   */
  exports.prototype['Page'] = undefined;
  /**
   * @member {Number} PageSize
   */
  exports.prototype['PageSize'] = undefined;
  /**
   * @member {Object} Filters
   */
  exports.prototype['Filters'] = undefined;



  return exports;
}));


