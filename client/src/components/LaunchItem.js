import React from 'react'
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export default function LaunchItem({
    launch: { flight_number, mission_name, launch_date_local }
}) {
    return (
        <div className="card card-body mb-4">
            <div className="col-md-4">
                <h3>{mission_name}</h3>
                <p><Moment format="dddd, MMMM Do YYYY, h:mm a">{launch_date_local}</Moment></p>
            </div>
            <div className="col-md-3">
                <Link to={`/launch/${flight_number}`} className="btn btn-secondary">Launch Details</Link>
            </div>
        </div>
    )
}

