const Pagination = () => {
  return (
    <div className='d-flex flex-end justify-content-center align-items-center page-pagination'>
      <nav aria-label='Page navigation'>
        <ul className='pagination justify-content-center mb-0'>
          <li className='page-item pagination-prev'>
            <a className='page-link' href='#'>
              Trang trước
            </a>
          </li>
          <li className='page-item pagination-next'>
            <a className='page-link' href='#'>
              Trang sau
            </a>
          </li>
        </ul>
      </nav>
      <div className='page-pagination-right'>
        <span>Page</span>
        <input type='number' value='1' className='ms-1' /> <span className='ms-1'>of 200</span>
        <a href='#'>
          <img src='/images/vendors/pagination-next.svg' alt='pagination next' />
        </a>
      </div>
    </div>
  )
}

export default Pagination
