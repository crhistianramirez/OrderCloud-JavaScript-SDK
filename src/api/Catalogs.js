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
    define(['ApiClient', 'model/Catalog', 'model/CatalogAssignment', 'model/ListCatalog', 'model/ListCatalogAssignment', 'model/ListProductCatalogAssignment', 'model/ProductCatalogAssignment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Catalog'), require('../model/CatalogAssignment'), require('../model/ListCatalog'), require('../model/ListCatalogAssignment'), require('../model/ListProductCatalogAssignment'), require('../model/ProductCatalogAssignment'));
  } else {
    // Browser globals (root is window)
    if (!root.OrderCloud) {
      root.OrderCloud = {};
    }
    root.OrderCloud.Catalogs = factory(root.OrderCloud.ApiClient, root.OrderCloud.Catalog, root.OrderCloud.CatalogAssignment, root.OrderCloud.ListCatalog, root.OrderCloud.ListCatalogAssignment, root.OrderCloud.ListProductCatalogAssignment, root.OrderCloud.ProductCatalogAssignment);
  }
}(this, function(ApiClient, Catalog, CatalogAssignment, ListCatalog, ListCatalogAssignment, ListProductCatalogAssignment, ProductCatalogAssignment) {
  'use strict';

  /**
   * Catalog service.
   * @module api/Catalogs
   * @version 2.0.0
   */

  /**
   * Constructs a new Catalogs. 
   * @alias module:api/Catalogs
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * @param {module:model/Catalog} catalog 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Catalog}
     */
    this.Create = function(catalog) {
      var postBody = catalog;

      // verify the required parameter 'catalog' is set
      if (catalog == undefined || catalog == null) {
        throw new Error("Missing the required parameter 'catalog' when calling Create");
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
      var returnType = Catalog;

      return this.apiClient.callApi(
        '/catalogs', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.Delete = function(catalogID) {
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling Delete");
      }


      var pathParams = {
        'catalogID': catalogID
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
        '/catalogs/{catalogID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {String} buyerID ID of the buyer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteAssignment = function(catalogID, buyerID) {
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling DeleteAssignment");
      }

      // verify the required parameter 'buyerID' is set
      if (buyerID == undefined || buyerID == null) {
        throw new Error("Missing the required parameter 'buyerID' when calling DeleteAssignment");
      }


      var pathParams = {
        'catalogID': catalogID
      };
      var queryParams = {
        'buyerID': buyerID
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
        '/catalogs/{catalogID}/assignments', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {String} productID ID of the product.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.DeleteProductAssignment = function(catalogID, productID) {
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling DeleteProductAssignment");
      }

      // verify the required parameter 'productID' is set
      if (productID == undefined || productID == null) {
        throw new Error("Missing the required parameter 'productID' when calling DeleteProductAssignment");
      }


      var pathParams = {
        'catalogID': catalogID,
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
        '/catalogs/{catalogID}/productassignments/{productID}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Catalog}
     */
    this.Get = function(catalogID) {
      var postBody = null;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling Get");
      }


      var pathParams = {
        'catalogID': catalogID
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
      var returnType = Catalog;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
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
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCatalog}
     */
    this.List = function(opts) {
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

      var authNames = ['oauth2'];
      var contentTypes = ['application/json', 'text/plain; charset=utf-8'];
      var accepts = ['application/json'];
      var returnType = ListCatalog;

      return this.apiClient.callApi(
        '/catalogs', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.catalogID ID of the catalog.
     * @param {String} opts.buyerID ID of the buyer.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListCatalogAssignment}
     */
    this.ListAssignments = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'catalogID': opts['catalogID'],
        'buyerID': opts['buyerID'],
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
      var returnType = ListCatalogAssignment;

      return this.apiClient.callApi(
        '/catalogs/assignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.catalogID ID of the catalog.
     * @param {String} opts.productID ID of the product.
     * @param {Number} opts.page Page of results to return. Default: 1
     * @param {Number} opts.pageSize Number of results to return per page. Default: 20, max: 100.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ListProductCatalogAssignment}
     */
    this.ListProductAssignments = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'catalogID': opts['catalogID'],
        'productID': opts['productID'],
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
      var returnType = ListProductCatalogAssignment;

      return this.apiClient.callApi(
        '/catalogs/productassignments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {module:model/Catalog} partialCatalog 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Catalog}
     */
    this.Patch = function(catalogID, partialCatalog) {
      var postBody = partialCatalog;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling Patch");
      }

      // verify the required parameter 'partialCatalog' is set
      if (partialCatalog == undefined || partialCatalog == null) {
        throw new Error("Missing the required parameter 'partialCatalog' when calling Patch");
      }


      var pathParams = {
        'catalogID': catalogID
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
      var returnType = Catalog;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {String} catalogID ID of the catalog.
     * @param {module:model/Catalog} catalog 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Catalog}
     */
    this.Save = function(catalogID, catalog) {
      var postBody = catalog;

      // verify the required parameter 'catalogID' is set
      if (catalogID == undefined || catalogID == null) {
        throw new Error("Missing the required parameter 'catalogID' when calling Save");
      }

      // verify the required parameter 'catalog' is set
      if (catalog == undefined || catalog == null) {
        throw new Error("Missing the required parameter 'catalog' when calling Save");
      }


      var pathParams = {
        'catalogID': catalogID
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
      var returnType = Catalog;

      return this.apiClient.callApi(
        '/catalogs/{catalogID}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {module:model/CatalogAssignment} catalogAssignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SaveAssignment = function(catalogAssignment) {
      var postBody = catalogAssignment;

      // verify the required parameter 'catalogAssignment' is set
      if (catalogAssignment == undefined || catalogAssignment == null) {
        throw new Error("Missing the required parameter 'catalogAssignment' when calling SaveAssignment");
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
        '/catalogs/assignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * @param {module:model/ProductCatalogAssignment} productCatalogAssignment 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    this.SaveProductAssignment = function(productCatalogAssignment) {
      var postBody = productCatalogAssignment;

      // verify the required parameter 'productCatalogAssignment' is set
      if (productCatalogAssignment == undefined || productCatalogAssignment == null) {
        throw new Error("Missing the required parameter 'productCatalogAssignment' when calling SaveProductAssignment");
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
        '/catalogs/productassignments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
