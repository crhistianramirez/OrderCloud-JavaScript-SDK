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
    define(['ApiClient', 'model/ImpersonationConfig', 'model/ListImpersonationConfig'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ImpersonationConfig'), require('../model/ListImpersonationConfig'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ImpersonationConfigs = factory(root.OrderCloud.ApiClient, root.OrderCloud.ImpersonationConfig, root.OrderCloud.ListImpersonationConfig);
  }
}(this, function(ApiClient, ImpersonationConfig, ListImpersonationConfig) {
  'use strict';

  /**
   * ImpersonationConfig service.
   * @module api/ImpersonationConfigs
   * @version 1.0.50
   */

  /**
   * Constructs a new ImpersonationConfigs. 
   * @alias module:api/ImpersonationConfigs
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {module:model/ImpersonationConfig} impersonationConfig 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ImpersonationConfig}
     */
    this.Create = function(impersonationConfig) {
      var postBody = impersonationConfig;

      // verify the required parameter 'impersonationConfig' is set
      if (impersonationConfig == undefined || impersonationConfig == null) {
        throw new Error("Missing the required parameter 'impersonationConfig' when calling Create");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ImpersonationConfig;

      return this.apiClient.callApi(
        '/impersonationconfig', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} impersonationConfigID ID of the impersonation config.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(impersonationConfigID) {
      var postBody = null;

      // verify the required parameter 'impersonationConfigID' is set
      if (impersonationConfigID == undefined || impersonationConfigID == null) {
        throw new Error("Missing the required parameter 'impersonationConfigID' when calling Delete");
      }


      var pathParams = {
        'impersonationConfigID': impersonationConfigID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/impersonationconfig/{impersonationConfigID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} impersonationConfigID ID of the impersonation config.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ImpersonationConfig}
     */
    this.Get = function(impersonationConfigID) {
      var postBody = null;

      // verify the required parameter 'impersonationConfigID' is set
      if (impersonationConfigID == undefined || impersonationConfigID == null) {
        throw new Error("Missing the required parameter 'impersonationConfigID' when calling Get");
      }


      var pathParams = {
        'impersonationConfigID': impersonationConfigID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ImpersonationConfig;

      return this.apiClient.callApi(
        '/impersonationconfig/{impersonationConfigID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Search of the impersonation config.
     * @param {Array.<String>} opts.searchOn Search on of the impersonation config.
     * @param {Array.<String>} opts.sortBy Sort by of the impersonation config.
     * @param {Number} opts.page Page of the impersonation config.
     * @param {Number} opts.pageSize Page size of the impersonation config.
     * @param {Object.<String, {String: String}>} opts.filters Filters of the impersonation config.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListImpersonationConfig}
     */
    this.List = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': this.apiClient.buildCollectionParam(opts['searchOn'], 'csv'),
        'sortBy': this.apiClient.buildCollectionParam(opts['sortBy'], 'csv'),
        'page': opts['page'],
        'pageSize': opts['pageSize'],
        'filters': opts['filters']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListImpersonationConfig;

      return this.apiClient.callApi(
        '/impersonationconfig', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} impersonationConfigID ID of the impersonation config.
     * @param {module:model/ImpersonationConfig} impersonationConfig 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ImpersonationConfig}
     */
    this.Patch = function(impersonationConfigID, impersonationConfig) {
      var postBody = impersonationConfig;

      // verify the required parameter 'impersonationConfigID' is set
      if (impersonationConfigID == undefined || impersonationConfigID == null) {
        throw new Error("Missing the required parameter 'impersonationConfigID' when calling Patch");
      }

      // verify the required parameter 'impersonationConfig' is set
      if (impersonationConfig == undefined || impersonationConfig == null) {
        throw new Error("Missing the required parameter 'impersonationConfig' when calling Patch");
      }


      var pathParams = {
        'impersonationConfigID': impersonationConfigID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ImpersonationConfig;

      return this.apiClient.callApi(
        '/impersonationconfig/{impersonationConfigID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} impersonationConfigID ID of the impersonation config.
     * @param {module:model/ImpersonationConfig} impersonationConfig 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ImpersonationConfig}
     */
    this.Update = function(impersonationConfigID, impersonationConfig) {
      var postBody = impersonationConfig;

      // verify the required parameter 'impersonationConfigID' is set
      if (impersonationConfigID == undefined || impersonationConfigID == null) {
        throw new Error("Missing the required parameter 'impersonationConfigID' when calling Update");
      }

      // verify the required parameter 'impersonationConfig' is set
      if (impersonationConfig == undefined || impersonationConfig == null) {
        throw new Error("Missing the required parameter 'impersonationConfig' when calling Update");
      }


      var pathParams = {
        'impersonationConfigID': impersonationConfigID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ImpersonationConfig;

      return this.apiClient.callApi(
        '/impersonationconfig/{impersonationConfigID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
