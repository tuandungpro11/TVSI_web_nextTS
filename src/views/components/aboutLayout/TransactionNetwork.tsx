const TransactionNetwork = () => {
  return (
    <div className='tab-pane fade show active' id='pills-branch' role='tabpanel' aria-labelledby='pills-branch-tab' tabIndex={0}>
      <h2 className='text-center fw-bold text-about d-none d-md-block'>Mạng lưới chi nhánh</h2>

      <div className='row'>
        <div className='col-md-6 d-none d-md-block'>
          <img src='/images/vendors/about-branch.jpeg' alt='about-branch' className='img-fluid' />
        </div>
        <div className='col-md-6 px-2 px-md-3'>
          <div>
            <div className='accordion' id='accordionBranch'>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingOne'>
                  <button
                    className='accordion-button'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne'
                    aria-expanded='true'
                    aria-controls='collapseOne'
                  >
                    <span>Trụ sở chính</span>
                  </button>
                </h2>

                <div
                  id='collapseOne'
                  className='accordion-collapse collapse show'
                  aria-labelledby='headingOne'
                  data-bs-parent='#accordionBranch'
                >
                  <div className='accordion-body'>
                    Tầng 6, 79 Lý Thường Kiệt, Quận Hoàn Kiếm, Hà Nội Fax: 024 3728 0920 Email: contact@tvsi.com.vn
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingTwo'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseTwo'
                    aria-expanded='false'
                    aria-controls='collapseTwo'
                  >
                    <span>Chi nhánh Hà Thành</span>
                  </button>
                </h2>

                <div
                  id='collapseTwo'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingTwo'
                  data-bs-parent='#accordionBranch'
                >
                  <div className='accordion-body'>
                    Tầng 6, 79 Lý Thường Kiệt, Quận Hoàn Kiếm, Hà Nội Fax: 024 3728 0920 Email: contact@tvsi.com.vn
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingThree'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseThree'
                    aria-expanded='false'
                    aria-controls='collapseThree'
                  >
                    <span>Chi nhánh Ngọc Khánh</span>
                  </button>
                </h2>

                <div
                  id='collapseThree'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingThree'
                  data-bs-parent='#accordionBranch'
                >
                  <div className='accordion-body'>
                    Tầng 6, 79 Lý Thường Kiệt, Quận Hoàn Kiếm, Hà Nội Fax: 024 3728 0920 Email: contact@tvsi.com.vn
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingFour'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseFour'
                    aria-expanded='false'
                    aria-controls='collapseFour'
                  >
                    <span>Chi nhánh Mỹ Đình</span>
                  </button>
                </h2>

                <div
                  id='collapseFour'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingFour'
                  data-bs-parent='#accordionBranch'
                >
                  <div className='accordion-body'>
                    Tầng 6, 79 Lý Thường Kiệt, Quận Hoàn Kiếm, Hà Nội Fax: 024 3728 0920 Email: contact@tvsi.com.vn
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingFive'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseFive'
                    aria-expanded='false'
                    aria-controls='collapseFive'
                  >
                    <span>Chi nhánh Hải Phòng</span>
                  </button>
                </h2>

                <div
                  id='collapseFive'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingFive'
                  data-bs-parent='#accordionBranch'
                >
                  <div className='accordion-body'>
                    Tầng 6, 79 Lý Thường Kiệt, Quận Hoàn Kiếm, Hà Nội Fax: 024 3728 0920 Email: contact@tvsi.com.vn
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingSix'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseSix'
                    aria-expanded='false'
                    aria-controls='collapseSix'
                  >
                    <span>Chi nhánh Đà Nẵng</span>
                  </button>
                </h2>

                <div
                  id='collapseSix'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingSix'
                  data-bs-parent='#accordionBranch'
                >
                  <div className='accordion-body'>
                    Tầng 6, 79 Lý Thường Kiệt, Quận Hoàn Kiếm, Hà Nội Fax: 024 3728 0920 Email: contact@tvsi.com.vn
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingSeven'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseSeven'
                    aria-expanded='false'
                    aria-controls='collapseSeven'
                  >
                    <span>Chi nhánh Quy Nhơn</span>
                  </button>
                </h2>

                <div
                  id='collapseSeven'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingSeven'
                  data-bs-parent='#accordionBranch'
                >
                  <div className='accordion-body'>
                    Tầng 6, 79 Lý Thường Kiệt, Quận Hoàn Kiếm, Hà Nội Fax: 024 3728 0920 Email: contact@tvsi.com.vn
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingEight'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseEight'
                    aria-expanded='false'
                    aria-controls='collapseEight'
                  >
                    <span>Chi nhánh TP. Hồ Chí Minh</span>
                  </button>
                </h2>

                <div
                  id='collapseEight'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingEight'
                  data-bs-parent='#accordionBranch'
                >
                  <div className='accordion-body'>
                    Tầng 6, 79 Lý Thường Kiệt, Quận Hoàn Kiếm, Hà Nội Fax: 024 3728 0920 Email: contact@tvsi.com.vn
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionNetwork
