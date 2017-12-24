import React from 'react'
import ReactLoading from 'react-loading';

import Loader from '../template/loader'

export default props => {

    const renderMovie = () => {

        const list = props.list['data'] || []
        const srcNA = 'https://i.imgur.com/nBsFS8T.jpg'

        if (props.hidden) {
            return (
                <Loader />
            )
        }
        
        return list.map(m => (
            <div className="col-md-4 col-lg-3" key={m.imdbID}>
                <div className="description">
                    <img src={m.Poster == 'N/A' ? srcNA : m.Poster} className="poster"/>
                    <div className="caption">
                        <h5>{m.Title}</h5>
                        <p>{m.Year}</p>
                    </div>
                </div>
            </div>
        ))
    }

    return (
        <div className="row">
            {renderMovie()}
        </div>
    )
}
