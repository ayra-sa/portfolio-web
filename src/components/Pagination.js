import React from "react";
import ReactPaginate from 'react-paginate';

const Paginate = ({pageCount, handleChange}) => {
  return (
    <div>
        <ReactPaginate
          previousLabel={''}
          nextLabel={''}
          pageCount={pageCount}
          pageRangeDisplayed={5}
          onPageChange={handleChange}
          marginPagesDisplayed={5}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
          activeClassName={'page-item active'}
          pageLinkClassName={'page-link'}
        
        />
    </div>
  )
}

export default Paginate
