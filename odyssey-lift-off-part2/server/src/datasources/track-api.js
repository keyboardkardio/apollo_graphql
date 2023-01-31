const { RESTDataSource } = require('apollo-datasource-rest');

/** The `RESTDataSource` class provides helper methods for HTTP requests. */
class TrackAPI extends RESTDataSource {

    constructor() {
        super(); // allow access to `RESTDataSource` features
        this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/';
    }

    getTracksForHome() {
        return this.get('tracks');
    }

    getAuthor(authorId) {

        /*
         *
         * `encodeURIComponent` is a standard JavaScript function that encodes 
         * special characters in a URI and helps mitigate possible injection 
         * attack vectors. 
         *   
         * It is recommended to use the `encodeURIComponent` function for any 
         * HTTP path that accepts dynamic input to prevent malicious clients 
         * from accessing/manipulating data they shouldn't be.
         */

        return this.get(`author/${encodeURIComponent(authorId)}`); // string interpolation
    }
}

module.exports = TrackAPI;
