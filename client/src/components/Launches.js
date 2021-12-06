import React from 'react';
import { useQuery, gql } from '@apollo/client'
import LaunchItem from './LaunchItem';

const launchesQuery = gql`
    {
        launches{
            flight_number
            mission_name
            launch_date_local
        }
    }
`

const Launches = () => {
    const { loading, error, data } = useQuery(launchesQuery)
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error...</p>
    console.log(data)
    return (
        <>
            <h4 className="display-4 my-5">Launches</h4>
            {
                data.launches.map(launch => <LaunchItem key={launch.flight_number} launch={launch}/>)
            }
        </>
    )
}

export default Launches