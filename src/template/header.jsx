import React from 'react'

export default props => (
  <header className='page-header'>
    <h2> {props.name} <i className='fa fa-video-camera' aria-hidden='true' /></h2>
    <span>Finding movies</span>
  </header>
)
