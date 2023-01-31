/* `gql` is a tagged template literal used to wrap GraphQl strings and converts 
them into a format that is compatible with Apollo libraries. */
const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        "Get tracks array for homepage grid."
        tracksForHome: [Track!]!
    }

    "A track is a group of Modules that teaches about a specific topic."
    type Track {
        id: ID!
        "The track's title."
        title: String!
        "The track's main author."
        author: Author!
        "The art cover to be displayed in a media card or the track's page detail."
        thumbnail: String
        "The track's duration."
        length: Int
        "The number of modules the track contains."
        modulesCount: Int
    }

    "Author of a complete Track or a Module."
    type Author {
        id: ID!
        "The author's full name."
        name: String!
        "The url to the author's profile picture."
        photo: String
    }
`;

module.exports = typeDefs;
