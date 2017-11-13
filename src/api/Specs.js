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
    define(['ApiClient', 'model/ListSpec', 'model/ListSpecOption', 'model/ListSpecProductAssignment', 'model/Spec', 'model/SpecOption', 'model/SpecProductAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ListSpec'), require('../model/ListSpecOption'), require('../model/ListSpecProductAssignment'), require('../model/Spec'), require('../model/SpecOption'), require('../model/SpecProductAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Specs = factory(root.OrderCloud.ApiClient, root.OrderCloud.ListSpec, root.OrderCloud.ListSpecOption, root.OrderCloud.ListSpecProductAssignment, root.OrderCloud.Spec, root.OrderCloud.SpecOption, root.OrderCloud.SpecProductAssignment);
  }
}(this, function(ApiClient, ListSpec, ListSpecOption, ListSpecProductAssignment, Spec, SpecOption, SpecProductAssignment) {
  'use strict';

  /**
   * Spec service.
   * @module api/Specs
   * @version 1.0.56
   */

  /**
   * Constructs a new Specs. 
   * @alias module:api/Specs
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {module:model/Spec} spec 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Spec}
     */
    this.Create = function(spec) {
      var postBody = spec;

      // verify the required parameter 'spec' is set
      if (spec == undefined || spec == null) {
        throw new Error("Missing the required parameter 'spec' when calling Create");
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
      var returnType = Spec;

      return this.apiClient.callApi(
        '/specs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} specID ID of the spec.
     * @param {module:model/SpecOption} option 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SpecOption}
     */
    this.CreateOption = function(specID, option) {
      var postBody = option;

      // verify the required parameter 'specID' is set
      if (specID == undefined || specID == null) {
        throw new Error("Missing the required parameter 'specID' when calling CreateOption");
      }

      // verify the required parameter 'option' is set
      if (option == undefined || option == null) {
        throw new Error("Missing the required parameter 'option' when calling CreateOption");
      }


      var pathParams = {
        'specID': specID
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
      var returnType = SpecOption;

      return this.apiClient.callApi(
        '/specs/{specID}/options', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} specID ID of the spec.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(specID) {
      var postBody = null;

      // verify the required parameter 'specID' is set
      if (specID == undefined || specID == null) {
        throw new Error("Missing the required parameter 'specID' when calling Delete");
      }


      var pathParams = {
        'specID': specID
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
        '/specs/{specID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} specID ID of the spec.
     * @param {String} optionID ID of the option.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteOption = function(specID, optionID) {
      var postBody = null;

      // verify the required parameter 'specID' is set
      if (specID == undefined || specID == null) {
        throw new Error("Missing the required parameter 'specID' when calling DeleteOption");
      }

      // verify the required parameter 'optionID' is set
      if (optionID == undefined || optionID == null) {
        throw new Error("Missing the required parameter 'optionID' when calling DeleteOption");
      }


      var pathParams = {
        'specID': specID,
        'optionID': optionID
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
        '/specs/{specID}/options/{optionID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} specID ID of the spec.
     * @param {String} productID ID of the product.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteProductAssignment = function(specID, productID) {
      var postBody = null;

      // verify the required parameter 'specID' is set
      if (specID == undefined || specID == null) {
        throw new Error("Missing the required parameter 'specID' when calling DeleteProductAssignment");
      }

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling DeleteProductAssignment");
      }


      var pathParams = {
        'specID': specID,
        'productID': productID
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
        '/specs/{specID}/productassignments/{productID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} specID ID of the spec.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Spec}
     */
    this.Get = function(specID) {
      var postBody = null;

      // verify the required parameter 'specID' is set
      if (specID == undefined || specID == null) {
        throw new Error("Missing the required parameter 'specID' when calling Get");
      }


      var pathParams = {
        'specID': specID
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
      var returnType = Spec;

      return this.apiClient.callApi(
        '/specs/{specID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} specID ID of the spec.
     * @param {String} optionID ID of the option.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SpecOption}
     */
    this.GetOption = function(specID, optionID) {
      var postBody = null;

      // verify the required parameter 'specID' is set
      if (specID == undefined || specID == null) {
        throw new Error("Missing the required parameter 'specID' when calling GetOption");
      }

      // verify the required parameter 'optionID' is set
      if (optionID == undefined || optionID == null) {
        throw new Error("Missing the required parameter 'optionID' when calling GetOption");
      }


      var pathParams = {
        'specID': specID,
        'optionID': optionID
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
      var returnType = SpecOption;

      return this.apiClient.callApi(
        '/specs/{specID}/options/{optionID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Search of the spec.
     * @param {Array.<String>} opts.searchOn Search on of the spec.
     * @param {Array.<String>} opts.sortBy Sort by of the spec.
     * @param {Number} opts.page Page of the spec.
     * @param {Number} opts.pageSize Page size of the spec.
     * @param {Object.<String, {String: String}>} opts.filters Filters of the spec.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSpec}
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
      var returnType = ListSpec;

      return this.apiClient.callApi(
        '/specs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} specID ID of the spec.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Search of the spec.
     * @param {Array.<String>} opts.searchOn Search on of the spec.
     * @param {Array.<String>} opts.sortBy Sort by of the spec.
     * @param {Number} opts.page Page of the spec.
     * @param {Number} opts.pageSize Page size of the spec.
     * @param {Object.<String, {String: String}>} opts.filters Filters of the spec.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSpecOption}
     */
    this.ListOptions = function(specID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'specID' is set
      if (specID == undefined || specID == null) {
        throw new Error("Missing the required parameter 'specID' when calling ListOptions");
      }


      var pathParams = {
        'specID': specID
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
      var returnType = ListSpecOption;

      return this.apiClient.callApi(
        '/specs/{specID}/options', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Search of the spec.
     * @param {Array.<String>} opts.searchOn Search on of the spec.
     * @param {Array.<String>} opts.sortBy Sort by of the spec.
     * @param {Number} opts.page Page of the spec.
     * @param {Number} opts.pageSize Page size of the spec.
     * @param {Object.<String, {String: String}>} opts.filters Filters of the spec.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListSpecProductAssignment}
     */
    this.ListProductAssignments = function(opts) {
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
      var returnType = ListSpecProductAssignment;

      return this.apiClient.callApi(
        '/specs/productassignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} specID ID of the spec.
     * @param {module:model/Spec} spec 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Spec}
     */
    this.Patch = function(specID, spec) {
      var postBody = spec;

      // verify the required parameter 'specID' is set
      if (specID == undefined || specID == null) {
        throw new Error("Missing the required parameter 'specID' when calling Patch");
      }

      // verify the required parameter 'spec' is set
      if (spec == undefined || spec == null) {
        throw new Error("Missing the required parameter 'spec' when calling Patch");
      }


      var pathParams = {
        'specID': specID
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
      var returnType = Spec;

      return this.apiClient.callApi(
        '/specs/{specID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} specID ID of the spec.
     * @param {String} optionID ID of the option.
     * @param {module:model/SpecOption} option 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SpecOption}
     */
    this.PatchOption = function(specID, optionID, option) {
      var postBody = option;

      // verify the required parameter 'specID' is set
      if (specID == undefined || specID == null) {
        throw new Error("Missing the required parameter 'specID' when calling PatchOption");
      }

      // verify the required parameter 'optionID' is set
      if (optionID == undefined || optionID == null) {
        throw new Error("Missing the required parameter 'optionID' when calling PatchOption");
      }

      // verify the required parameter 'option' is set
      if (option == undefined || option == null) {
        throw new Error("Missing the required parameter 'option' when calling PatchOption");
      }


      var pathParams = {
        'specID': specID,
        'optionID': optionID
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
      var returnType = SpecOption;

      return this.apiClient.callApi(
        '/specs/{specID}/options/{optionID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {module:model/SpecProductAssignment} productAssignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SaveProductAssignment = function(productAssignment) {
      var postBody = productAssignment;

      // verify the required parameter 'productAssignment' is set
      if (productAssignment == undefined || productAssignment == null) {
        throw new Error("Missing the required parameter 'productAssignment' when calling SaveProductAssignment");
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
      var returnType = null;

      return this.apiClient.callApi(
        '/specs/productassignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} specID ID of the spec.
     * @param {module:model/Spec} spec 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Spec}
     */
    this.Update = function(specID, spec) {
      var postBody = spec;

      // verify the required parameter 'specID' is set
      if (specID == undefined || specID == null) {
        throw new Error("Missing the required parameter 'specID' when calling Update");
      }

      // verify the required parameter 'spec' is set
      if (spec == undefined || spec == null) {
        throw new Error("Missing the required parameter 'spec' when calling Update");
      }


      var pathParams = {
        'specID': specID
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
      var returnType = Spec;

      return this.apiClient.callApi(
        '/specs/{specID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} specID ID of the spec.
     * @param {String} optionID ID of the option.
     * @param {module:model/SpecOption} option 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SpecOption}
     */
    this.UpdateOption = function(specID, optionID, option) {
      var postBody = option;

      // verify the required parameter 'specID' is set
      if (specID == undefined || specID == null) {
        throw new Error("Missing the required parameter 'specID' when calling UpdateOption");
      }

      // verify the required parameter 'optionID' is set
      if (optionID == undefined || optionID == null) {
        throw new Error("Missing the required parameter 'optionID' when calling UpdateOption");
      }

      // verify the required parameter 'option' is set
      if (option == undefined || option == null) {
        throw new Error("Missing the required parameter 'option' when calling UpdateOption");
      }


      var pathParams = {
        'specID': specID,
        'optionID': optionID
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
      var returnType = SpecOption;

      return this.apiClient.callApi(
        '/specs/{specID}/options/{optionID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
