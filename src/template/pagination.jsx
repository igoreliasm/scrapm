import React from 'react'
import Pagination from 'react-js-pagination'

export default props => {
  const renderPagination = () => {
    if (props.totalItemsCount > 0) {
      return (
        <div className='footer'>
          <Pagination
            activePage={props.activePage}
            itemsCountPerPage={props.itemsCountPerPage}
            totalItemsCount={props.totalItemsCount}
            pageRangeDisplayed={props.pageRangeDisplayed}
            onChange={props.onChange}
          />
        </div>
      )
    }
  }

  return (
    <div>
      {renderPagination()}
    </div>
  )
}
