const Overview = () => {
  return (
    <div
      className='tab-pane fade show active'
      id='pills-overview'
      role='tabpanel'
      aria-labelledby='pills-overview-tab'
      tabIndex={0}
    >
      <div className='tab-overview'>
        <div className='row justify-content-center wrap-intro'>
          <div className='col-md-10 col-lg-9'>
            <div className='text-primary text-center text-intro'>
              Thành lập từ năm 2006, TVSI luôn khẳng định là một trong những định chế tài chính uy tín hàng đầu trên
              TTCK Việt Nam và Khu vực.
            </div>
          </div>
        </div>
        <div className='row justify-content-center service'>
          <div className='col-6 col-md-3'>
            <div className='service-item'>
              <h4>
                Môi giới <br />
                Chứng khoán
              </h4>
              <span>01</span>
            </div>
          </div>
          <div className='col-6 col-md-3'>
            <div className='service-item'>
              <h4>
                Dịch vụ <br />
                Chứng khoán
              </h4>
              <span>02</span>
            </div>
          </div>
          <div className='col-6 col-md-3'>
            <div className='service-item'>
              <h4>
                Dịch vụ <br />
                Tài chính
              </h4>
              <span>03</span>
            </div>
          </div>
          <div className='col-6 col-md-3'>
            <div className='service-item'>
              <h4>
                Tự doanh <br />
                Chứng khoán
              </h4>
              <span>04</span>
            </div>
          </div>
          <div className='col-6 col-md-3'>
            <div className='service-item'>
              <h4>
                Quản lý danh mục <br />
                đầu tư
              </h4>
              <span>05</span>
            </div>
          </div>
          <div className='col-6 col-md-3'>
            <div className='service-item'>
              <h4>
                Bảo lãnh <br />
                Phát hành
              </h4>
              <span>06</span>
            </div>
          </div>
          <div className='col-6 col-md-3'>
            <div className='service-item'>
              <h4>
                Tư vấn
                <br />
                Tài chính doanh nghiệp
              </h4>
              <span>07</span>
            </div>
          </div>
        </div>
        <div className='orientation'>
          <h3 className='text-center'>“Định hướng con người là nền tảng, công nghệ làm cốt lõi cho sự phát triển”</h3>

          <p className='text-center fs-4'>
            Ngay từ khi mới thành lập, TVSI không ngừng đầu tư công nghệ và phát triển các công cụ giao dịch trực tuyến
            đa nền tảng
          </p>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='orientation-img'>
              <img src='/images/vendors/orientation1.jpeg' alt='orientation img' />
            </div>
            <div className='orientation-img img-center'>
              <img src='/images/vendors/orientation2.jpeg' alt='orientation img' />
            </div>
            <div className='orientation-img'>
              <img src='/images/vendors/orientation2.jpeg' alt='orientation img' />
            </div>
          </div>
        </div>
        <div className='position'>
          <div className='row align-items-center'>
            <div className='col-xl-4'>
              <div className='position-left'>
                <h3 className='fs-1 text-primary text-center'>“TVSI khẳng định vị thế trên TTCK Việt Nam”</h3>
              </div>
            </div>
            <div className='col-xl-8'>
              <div className='position-right'>
                <div className='position-item box-shadow fw-bold'>
                  <h4>2.639</h4>

                  <p className='mb-0'>
                    Tỷ đồng
                    <br />
                    Vốn điều lệ
                  </p>
                </div>
                <div className='position-item box-shadow fw-bold'>
                  <h4>TOP 10</h4>

                  <p className='mb-0'>
                    Công ty
                    <br />
                    chứng khoán uy tín
                  </p>
                </div>
                <div className='position-item box-shadow fw-bold'>
                  <h4>15+</h4>

                  <p className='mb-0'>
                    Năm
                    <br />
                    Kinh nghiệm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='partner'>
          <h2 className='text-center fw-bold'>
            Đối tác <br />
            Hợp tác chiến lược toàn diện
          </h2>

          <div className='row justify-content-center'>
            <div className='col-xl-9'>
              <div className='box-shadow partner-item'>
                <img src='/images/vendors/img-logoSCB.jpeg' alt='img-logoSCB' className='img-fluid' />
                <div className='partner-content'>
                  <h5>Ngân hàng TMCP Sài Gòn</h5>

                  <p className='mb-0'>
                    TOP 5 Ngân hàng TMCP lớn nhất tại Việt Nam.
                    <br />
                    Mạng lưới giao dịch hơn 239 đơn vị trên cả nước.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-9'>
              <div className='box-shadow partner-item'>
                <img src='/images/vendors/img-logoBL.jpeg' alt='img-logoBL' className='img-fluid' />
                <div className='partner-content'>
                  <h5>Tổng CTCP Bảo hiểm Bảo Long</h5>

                  <p className='mb-0'>
                    Là Công ty cổ phần đầu tiên hoạt động trên lĩnh vực bảo hiểm phi nhân thọ tại Việt Nam;
                    <br />
                    TOP 10 Công ty Bảo hiểm uy tín nhất Việt Nam;
                    <br />
                    Mạng lưới hoạt động 46 Chi nhánh và PGD trên toàn quốc.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-xl-9'>
              <div className='box-shadow partner-item mb-0'>
                <img src='/images/vendors/img-logoTVFM.jpeg' alt='img-logoTV' className='img-fluid' />
                <div className='partner-content'>
                  <h5>Công ty Quản lý quỹ Tân Việt</h5>

                  <p className='mb-0'>
                    Vốn điều lệ: 50 tỷ VNĐ
                    <br />
                    Trở thành Công ty Quản lý quỹ hàng đầu tại Việt Nam với dịch vụ chuyên nghiệp, đem đến lợi nhuận và
                    giá trị gia tăng cho đối tác và khách hàng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
