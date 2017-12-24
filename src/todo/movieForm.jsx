import React from 'react'

export default props => {
    const keyHandle = (e) => {
        if (e.key === 'Enter') {
            props.handleSearch()
        }
    }

    const showDataNumbers = () => {

        if (props.list['total'] || props.list['total'] == 0) {
            return (
                <div>
                    <br />
                    <span>Results: {props.list['total']} - Pages: {props.list['total_pages']}</span>
                </div>
            )
        }
    }

    return (
        <div role='form' className='movieForm'>
            <div>
                <input id='movie' className='form-control'
                    placeholder='Digite um filme e pressione enter!' value={props.movie}
                    onKeyUp={keyHandle}
                    onChange={props.handleChange}
                />
            </div>
            <div>
                {showDataNumbers()}
            </div>
        </div>
    )
}
    