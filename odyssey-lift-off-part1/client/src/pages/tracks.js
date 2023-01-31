import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Layout } from '../components';
import TrackCard from '../containers/track-card';
import QueryResult from '../components/query-result';

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
    const { error, loading, data } = useQuery(TRACKS);
    return (
        <Layout grid>
            <QueryResult error={error} loading={loading} data={data}>
                {data?.tracksForHome?.map((track) => (
                    <TrackCard key={track.id} track={track} />
                ))}
            </QueryResult>
        </Layout>
    );
};

/** Tracks gql query to retrieve all tracks. */
const TRACKS = gql`
    query GetTracks {
        tracksForHome {
            id
            title
            thumbnail
            length
            modulesCount
            author {
                name
                photo
            }
        }
    }
`;

export default Tracks;
