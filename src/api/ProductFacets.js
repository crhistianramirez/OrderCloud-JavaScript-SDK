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
    define(['Sdk', 'model/ListProductFacet', 'model/ProductFacet'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../Sdk'), require('../model/ListProductFacet'), require('../model/ProductFacet'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.ProductFacets = factory(root.OrderCloud.Sdk, root.OrderCloud.ListProductFacet, root.OrderCloud.ProductFacet);
  }
}(this, function(Sdk, ListProductFacet, ProductFacet) {
  'use strict';

  /**
   * ProductFacet service.
   * @module api/ProductFacets
   */

  /**
   * Constructs a new ProductFacets. 
   * @alias module:api/ProductFacets
   * @class
   * @param {module:Sdk} sdk Optional API client implementation to use,
   * default to {@link module:Sdk#instance} if unspecified.
   */
  var exports = function(sdk) {
    this.sdk = sdk || Sdk.instance;



    /**
     * @param {module:model/ProductFacet} productFacet 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductFacet}
     */
    this.Create = function(productFacet, accessToken ) {
      var postBody = productFacet;

      // verify the required parameter 'productFacet' is set
      if (productFacet == undefined || productFacet == null) {
        throw new Error("Missing the required parameter 'productFacet' when calling Create");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ProductFacet;

      return this.sdk.callApi(
        '/productfacets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, accessToken
      );
    }


    /**
     * @param {String} productFacetID ID of the product facet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(productFacetID, accessToken ) {
      var postBody = null;

      // verify the required parameter 'productFacetID' is set
      if (productFacetID == undefined || productFacetID == null) {
        throw new Error("Missing the required parameter 'productFacetID' when calling Delete");
      }


      var pathParams = {
        'productFacetID': productFacetID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.sdk.callApi(
        '/productfacets/{productFacetID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, accessToken
      );
    }


    /**
     * @param {String} productFacetID ID of the product facet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductFacet}
     */
    this.Get = function(productFacetID, accessToken ) {
      var postBody = null;

      // verify the required parameter 'productFacetID' is set
      if (productFacetID == undefined || productFacetID == null) {
        throw new Error("Missing the required parameter 'productFacetID' when calling Get");
      }


      var pathParams = {
        'productFacetID': productFacetID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ProductFacet;

      return this.sdk.callApi(
        '/productfacets/{productFacetID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, accessToken
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Word or phrase to search for.
     * @param {String} opts.searchOn Comma-delimited list of fields to search on.
     * @param {String} opts.sortBy Comma-delimited list of fields to sort by.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @param {Object.<String, {String: String}>} opts.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or &#39;xp.???&#39;
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListProductFacet}
     */
    this.List = function(opts, accessToken ) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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

      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListProductFacet;

      return this.sdk.callApi(
        '/productfacets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, accessToken
      );
    }


    /**
     * @param {String} productFacetID ID of the product facet.
     * @param {module:model/ProductFacet} partialProductFacet 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductFacet}
     */
    this.Patch = function(productFacetID, partialProductFacet, accessToken ) {
      var postBody = partialProductFacet;

      // verify the required parameter 'productFacetID' is set
      if (productFacetID == undefined || productFacetID == null) {
        throw new Error("Missing the required parameter 'productFacetID' when calling Patch");
      }

      // verify the required parameter 'partialProductFacet' is set
      if (partialProductFacet == undefined || partialProductFacet == null) {
        throw new Error("Missing the required parameter 'partialProductFacet' when calling Patch");
      }


      var pathParams = {
        'productFacetID': productFacetID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ProductFacet;

      return this.sdk.callApi(
        '/productfacets/{productFacetID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, accessToken
      );
    }


    /**
     * @param {String} productFacetID ID of the product facet.
     * @param {module:model/ProductFacet} productFacet 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ProductFacet}
     */
    this.Save = function(productFacetID, productFacet, accessToken ) {
      var postBody = productFacet;

      // verify the required parameter 'productFacetID' is set
      if (productFacetID == undefined || productFacetID == null) {
        throw new Error("Missing the required parameter 'productFacetID' when calling Save");
      }

      // verify the required parameter 'productFacet' is set
      if (productFacet == undefined || productFacet == null) {
        throw new Error("Missing the required parameter 'productFacet' when calling Save");
      }


      var pathParams = {
        'productFacetID': productFacetID
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ProductFacet;

      return this.sdk.callApi(
        '/productfacets/{productFacetID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        contentTypes, accepts, returnType, accessToken
      );
    }
  };

  return exports;
}));
