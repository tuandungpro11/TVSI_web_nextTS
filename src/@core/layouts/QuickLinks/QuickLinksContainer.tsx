interface QuickLinksContainerProps {
  menuClassName: string
}
const QuickLinksContainer = ({ menuClassName }: QuickLinksContainerProps) => {
  return (
    <div
      className={menuClassName}
      style={{ margin: '0px', position: 'fixed' }}
      data-popper-placement='top-end'
    >
      <div className='quick-links-content js-quick-links-content'>
        <h4 className='text-white text-center mb-3 mb-md-4'>Liên kết nhanh</h4>
        <hr className='text-white mb-0' />
        <div className='row'>
          <div className='col-6 col-md-4'>
            <div className='quick-links-item'>
              <div className='quick-links-icon'>
                <img src='/images/vendors/quick-links1.svg' alt='quick link img' />
              </div>
              <a href='#' data-bs-dismiss='offcanvas'>
                Mở tài khoản <br />
                trực tuyến
              </a>
            </div>
          </div>
          <div className='col-6 col-md-4'>
            <div className='quick-links-item'>
              <div className='quick-links-icon'>
                <img src='/images/vendors/quick-links2.svg' alt='quick link img' />
              </div>
              <a href='#'>
                Bảng giá
                <br />
                trực tuyến
              </a>
            </div>
          </div>
          <div className='col-6 col-md-4'>
            <div className='quick-links-item'>
              <div className='quick-links-icon'>
                <img src='/images/vendors/quick-links3.svg' alt='quick link img' />
              </div>
              <a href='#'>
                Đặt lệnh
                <br />
                trực tuyến
              </a>
            </div>
          </div>
          <div className='col-6 col-md-4'>
            <div className='quick-links-item'>
              <div className='quick-links-icon'>
                <img src='/images/vendors/quick-links4.svg' alt='quick link img' />
              </div>
              <a href='#'>
                Bảng giá
                <br />
                giao dịch
              </a>
            </div>
          </div>
          <div className='col-6 col-md-4'>
            <div className='quick-links-item'>
              <div className='quick-links-icon'>
                <img src='/images/vendors/quick-links5.svg' alt='quick link img' />
              </div>
              <a href='#'>
                Hỗ trợ
                <br />
                trực tuyến
              </a>
            </div>
          </div>
          <div className='col-6 col-md-4'>
            <div className='quick-links-item'>
              <div className='quick-links-icon'>
                <img src='/images/vendors/quick-links6.svg' alt='quick link img' />
              </div>
              <a href='#'>
                Hướng dẫn
                <br />
                giao dịch
              </a>
            </div>
          </div>
          <div className='col-6 col-md-4'>
            <div className='quick-links-item'>
              <div className='quick-links-icon'>
                <img src='/images/vendors/quick-links7.svg' alt='quick link img' />
              </div>
              <a href='#'>
                Câu hỏi
                <br />
                thường gặp
              </a>
            </div>
          </div>
          <div className='col-6 col-md-4'>
            <div className='quick-links-item'>
              <div className='quick-links-icon'>
                <img src='/images/vendors/quick-links8.svg' alt='quick link img' />
              </div>
              <a href='#'>Bản tin ngày</a>
            </div>
          </div>
          <div className='col-6 col-md-4'>
            <div className='quick-links-item'>
              <div className='quick-links-icon'>
                <img src='/images/vendors/quick-links9.svg' alt='quick link img' />
              </div>
              <a href='#'>
                Các
                <br />
                biểu mẫu
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickLinksContainer
