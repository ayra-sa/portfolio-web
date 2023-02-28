import React from "react";
import ReactPaginate from 'react-paginate';
import { PaginateWrap } from "./PaginationStyles";

const Paginate = ({pageCount, handleChange}) => {
  return (
    <div>
      <PaginateWrap>
        <ReactPaginate
          previousLabel={''}
          nextLabel={''}
          pageCount={pageCount}
          pageRangeDisplayed={5}
          onPageChange={handleChange}
          marginPagesDisplayed={5}
          containerClassName={'container'}
          pageClassName={'item'}
          activeClassName={'item active'}
          // pageLinkClassName={'page-link'}
        
        />
      </PaginateWrap>
    </div>
  )
}

export default Paginate
