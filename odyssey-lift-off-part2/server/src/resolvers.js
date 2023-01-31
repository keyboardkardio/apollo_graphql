/* As a best practice, try to keep resolver functions as thin as possible to 
make APIs more resilient to future changes. */

const resolvers = {

    Query: {
        /*
         *
         * Returns an array of Tracks that will be used to populate the
         * homepage grid of the web client.
         */
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome();
        }, /* The order of the parameters matters here. By convention, unused 
           parameters are named with underscores. */
    },

    Track: {
        /*
         *
         * Returns the author that is associated with a track.
         */
        author: ({ authorId }, _, { dataSources }) => {
            return dataSources.trackAPI.getAuthor(authorId);
        }, /* `authorId` will come from the `parent` argument which contains 
           data returned by the `tracksForHome` resolver.

           Because `tracksForHome` returns a list, the Apollo Server iterates 
           through that list and calls the `author` resolver for each track.

           It passes the current track as the value of `parent`, which enables 
           extraction of the `authorId`. */
    },
};

module.exports = resolvers;
