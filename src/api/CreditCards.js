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
    define(['ApiClient', 'model/CreditCard', 'model/CreditCardAssignment', 'model/ListCreditCard', 'model/ListCreditCardAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreditCard'), require('../model/CreditCardAssignment'), require('../model/ListCreditCard'), require('../model/ListCreditCardAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.CreditCards = factory(root.OrderCloud.ApiClient, root.OrderCloud.CreditCard, root.OrderCloud.CreditCardAssignment, root.OrderCloud.ListCreditCard, root.OrderCloud.ListCreditCardAssignment);
  }
}(this, function(ApiClient, CreditCard, CreditCardAssignment, ListCreditCard, ListCreditCardAssignment) {
  'use strict';

  /**
   * CreditCard service.
   * @module api/CreditCards
   * @version 2.0.0
   */

  /**
   * Constructs a new CreditCards. 
   * @alias module:api/CreditCards
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/CreditCard} creditCard 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreditCard}
     */
    this.Create = function(buyerID, creditCard) {
      var postBody = creditCard;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Create");
      }

      // verify the required parameter 'creditCard' is set
      if (creditCard == undefined || creditCard == null) {
        throw new Error("Missing the required parameter 'creditCard' when calling Create");
      }


      var pathParams = {
        'buyerID': buyerID
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
      var returnType = CreditCard;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/creditcards', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} creditCardID ID of the credit card.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(buyerID, creditCardID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Delete");
      }

      // verify the required parameter 'creditCardID' is set
      if (creditCardID == undefined || creditCardID == null) {
        throw new Error("Missing the required parameter 'creditCardID' when calling Delete");
      }


      var pathParams = {
        'buyerID': buyerID,
        'creditCardID': creditCardID
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
        '/buyers/{buyerID}/creditcards/{creditCardID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} creditCardID ID of the credit card.
     * @param {Object} opts Optional parameters
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteAssignment = function(buyerID, creditCardID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling DeleteAssignment");
      }

      // verify the required parameter 'creditCardID' is set
      if (creditCardID == undefined || creditCardID == null) {
        throw new Error("Missing the required parameter 'creditCardID' when calling DeleteAssignment");
      }


      var pathParams = {
        'buyerID': buyerID,
        'creditCardID': creditCardID
      };
      var queryParams = {
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID']
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
        '/buyers/{buyerID}/creditcards/{creditCardID}/assignments', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} creditCardID ID of the credit card.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreditCard}
     */
    this.Get = function(buyerID, creditCardID) {
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Get");
      }

      // verify the required parameter 'creditCardID' is set
      if (creditCardID == undefined || creditCardID == null) {
        throw new Error("Missing the required parameter 'creditCardID' when calling Get");
      }


      var pathParams = {
        'buyerID': buyerID,
        'creditCardID': creditCardID
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
      var returnType = CreditCard;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/creditcards/{creditCardID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCreditCard}
     */
    this.List = function(buyerID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling List");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
        'search': opts['search'],
        'searchOn': opts['searchOn'],
        'sortBy': opts['sortBy'],
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
      var returnType = ListCreditCard;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/creditcards', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {Object} opts Optional parameters
     * @param {String} opts.creditCardID ID of the credit card.
     * @param {String} opts.userID ID of the user.
     * @param {String} opts.userGroupID ID of the user group.
     * @param {String} opts.level Level of the credit card assignment. Possible values: User, Group, Company.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCreditCardAssignment}
     */
    this.ListAssignments = function(buyerID, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling ListAssignments");
      }


      var pathParams = {
        'buyerID': buyerID
      };
      var queryParams = {
        'creditCardID': opts['creditCardID'],
        'userID': opts['userID'],
        'userGroupID': opts['userGroupID'],
        'level': opts['level'],
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListCreditCardAssignment;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/creditcards/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} creditCardID ID of the credit card.
     * @param {module:model/CreditCard} partialCreditCard 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreditCard}
     */
    this.Patch = function(buyerID, creditCardID, partialCreditCard) {
      var postBody = partialCreditCard;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Patch");
      }

      // verify the required parameter 'creditCardID' is set
      if (creditCardID == undefined || creditCardID == null) {
        throw new Error("Missing the required parameter 'creditCardID' when calling Patch");
      }

      // verify the required parameter 'partialCreditCard' is set
      if (partialCreditCard == undefined || partialCreditCard == null) {
        throw new Error("Missing the required parameter 'partialCreditCard' when calling Patch");
      }


      var pathParams = {
        'buyerID': buyerID,
        'creditCardID': creditCardID
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
      var returnType = CreditCard;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/creditcards/{creditCardID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {String} creditCardID ID of the credit card.
     * @param {module:model/CreditCard} creditCard 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreditCard}
     */
    this.Save = function(buyerID, creditCardID, creditCard) {
      var postBody = creditCard;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling Save");
      }

      // verify the required parameter 'creditCardID' is set
      if (creditCardID == undefined || creditCardID == null) {
        throw new Error("Missing the required parameter 'creditCardID' when calling Save");
      }

      // verify the required parameter 'creditCard' is set
      if (creditCard == undefined || creditCard == null) {
        throw new Error("Missing the required parameter 'creditCard' when calling Save");
      }


      var pathParams = {
        'buyerID': buyerID,
        'creditCardID': creditCardID
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
      var returnType = CreditCard;

      return this.apiClient.callApi(
        '/buyers/{buyerID}/creditcards/{creditCardID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} buyerID ID of the buyer.
     * @param {module:model/CreditCardAssignment} creditCardAssignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SaveAssignment = function(buyerID, creditCardAssignment) {
      var postBody = creditCardAssignment;

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling SaveAssignment");
      }

      // verify the required parameter 'creditCardAssignment' is set
      if (creditCardAssignment == undefined || creditCardAssignment == null) {
        throw new Error("Missing the required parameter 'creditCardAssignment' when calling SaveAssignment");
      }


      var pathParams = {
        'buyerID': buyerID
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
        '/buyers/{buyerID}/creditcards/assignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
