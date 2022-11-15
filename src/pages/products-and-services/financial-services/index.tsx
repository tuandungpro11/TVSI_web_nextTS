import clsx from 'clsx'
import { useState } from 'react'

const FinancialServicesApp = () => {
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <main>
      <section className='business-finance financial-services'>
        <section className='page-breadcrumb page-breadcrumb-financial-services'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col'>
                <h2 className='text-breadcrumb'>Dịch vụ tài chính</h2>

                <nav aria-label='breadcrumb'>
                  <ul className='breadcrumb text-uppercase text-white'>
                    <li className='breadcrumb-item'>
                      <a href='index.html'>TRANG CHỦ</a>
                    </li>
                    <li className='breadcrumb-item'>SẢN PHẨM & DỊCH VỤ</li>
                    <li className='breadcrumb-item'>DỊCH VỤ TÀI CHÍNH</li>
                    <li className={clsx('breadcrumb-item', {'dp-none': tabIndex !== 0})}>
                      CHO VAY GDKQ
                    </li>
                    <li className={clsx('breadcrumb-item', {'dp-none': tabIndex !== 1})}>
                      ỨNG TRƯỚC TIỀN BÁN CK
                    </li>
                    <li className={clsx('breadcrumb-item', {'dp-none': tabIndex !== 2})}>
                      RÚT TIỀN BẰNG SỨC MUA
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <div className='main-content'>
          <div className='container'>
            <div className='tabs-to-dropdown tabs-business-finance'>
              <div className='row'>
                <div className='col-lg-3'>
                  <div className='business-finance-left'>
                    <div className='nav-wrapper d-flex align-items-center justify-content-between'>
                      <ul
                        className='nav nav-pills d-none d-md-flex shadow-none'
                        id='pills-tab-business-finance'
                        role='tablist'
                      >
                        <li className='nav-item' role='presentation'>
                          <a
                            className={clsx('nav-link', {'active': tabIndex === 0})}
                            type='button'
                            onClick={() => setTabIndex(0)}
                          >
                            Cho vay GDKQ
                          </a>
                        </li>
                        <li className='nav-item' role='presentation'>
                          <a
                            className={clsx('nav-link', {'active': tabIndex === 1})}
                            type='button'
                            onClick={() => setTabIndex(1)}
                          >
                            Ứng trước tiền bán CK
                          </a>
                        </li>
                        <li className='nav-item' role='presentation'>
                          <a
                            className={clsx('nav-link', {'active': tabIndex === 2})}
                            type='button'
                            onClick={() => setTabIndex(2)}
                          >
                            Rút tiền bằng sức mua
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-lg-9'>
                  <div className='business-finance-right'>
                    <div className='tab-content' id='pills-tabContent-business-finance'>
                      <div
                        className={clsx('tab-pane fade', {'active show': tabIndex === 0})}
                      >
                        <div className='container-tab'>
                          <h2 className='mb-4 font-weight-bold d-none d-md-block'>Cho vay giao dịch ký quỹ</h2>

                          <p>
                            Dịch vụ Giao dịch ký quỹ (GDKQ) là tiện ích cho phép khách hàng có thể dùng một phần tiền
                            vay từ TVSI trên cơ sở ký quỹ bằng chính chứng khoán mua hoặc chứng khoán hiện có trên tài
                            khoản giao dịch.
                          </p>
                          <h3 className='fs-2 fw-bold mb-4'>Ưu điểm vượt trị của dịch vụ giao dịch ký quỹ tại TVSI</h3>

                          <h4 className='fw-semibold mb-3'>
                            <img src='/images/vendors/ic-caret-financial-services.svg' alt='caret icon' className='me-2' />
                            Sản phẩm phù hợp mọi nhu cầu của khách hàng
                          </h4>

                          <ul className='mb-4'>
                            <li>Danh mục giao dịch ký quỹ đa dạng</li>
                            <li>Tỷ lệ ký quỹ thấp</li>
                            <li>Chính sách hỗ trợ linh hoạt</li>
                          </ul>
                          <h4 className='fw-semibold mb-3'>
                            <img src='/images/vendors/ic-caret-financial-services.svg' alt='caret icon' className='me-2' />
                            Lãi suất hấp dẫn
                          </h4>

                          <ul className='mb-4'>
                            <li>Miễn lãi tối thiểu 1 ngày làm việc</li>
                            <li>Không áp dụng phạt lãi quá hạn</li>
                            <li>Lãi suất thực tế theo gói sản phẩm dịch vụ sử dụng</li>
                          </ul>
                          <h4 className='fw-semibold mb-3'>
                            <img src='/images/vendors/ic-caret-financial-services.svg' alt='caret icon' className='me-2' />
                            Hệ thống tự động, thuận tiện, chuyên biệt
                          </h4>

                          <ul className='mb-4'>
                            <li>Tính toán sức mua và đặt lệnh tự động</li>
                            <li>Tự động kiểm soát hạn mức và tỷ lệ giao dịch ký quỹ</li>
                            <li>Tự động và liên tục cập nhật cảnh báo tỷ lệ gọi ký quỹ</li>
                            <li>
                              Quản lý tập trung trên tài khoản GDKQ giúp khách hàng thuận tiện theo dõi danh mục và hiều
                              quả đầu tư
                            </li>
                          </ul>
                          <h3 className='fs-2 fw-bold'>Tỷ lệ ký quỹ</h3>

                          <ul className='mb-0'>
                            <li>Tỷ lệ ký quỹ ban đầu 50%</li>
                            <li>Tỷ lệ ký quỹ duy trì 40%</li>
                            <li>Tỷ lệ ký quỹ xử lý 30%</li>
                          </ul>
                          <p className='mb-0'>
                            (Tỷ lệ trên có thể tăng/giảm tùy theo danh mục chứng khoán hiện có trên tài khoản GDKQ của
                            khách hàng).
                          </p>
                        </div>
                      </div>
                      <div
                        className={clsx('tab-pane fade', {'active show': tabIndex === 1})}
                      >
                        <div className='container-tab'>
                          <h2 className='mb-4 font-weight-bold d-none d-md-block'>Ứng trước tiền bán</h2>

                          <p>
                            Theo quy định của UBCKNN, sau khi khách hàng thực hiện bán chứng khoán thành công, tới ngày
                            T+2 tiền sẽ về đến tài khoản. Trong khoảng thời gian đó, khách hàng có thể tự động sử dụng
                            dịch vụ Ứng trước tiền bán chứng khoán.
                          </p>
                          <h4 className='fw-normal mb-3'>
                            <img src='/images/vendors/ic-caret-financial-services.svg' alt='caret icon' className='me-2' />
                            Dịch vụ Ứng trước tiền bán chứng khoán dành cho khách hàng là chủ tài khoản hoặc được ủy
                            quyền giao dịch chứng khoán tại TVSI
                          </h4>

                          <h4 className='fw-normal mb-3'>
                            <img src='/images/vendors/ic-caret-financial-services.svg' alt='caret icon' className='me-2' />
                            Điều kiện sử dụng dịch vụ: Khách hàng có lệnh bán chứng khoán đã khớp, bao gồm cả những lệnh
                            vừa khớp ngay trong phiên giao dịch
                          </h4>

                          <h4 className='fw-normal mb-3'>
                            <img src='/images/vendors/ic-caret-financial-services.svg' alt='caret icon' className='me-2' />
                            Số ngày tính phí được tính trên số ngày thực tế kể từ ngày khách hàng nhận tiền ứng trước
                            đến hết ngày thanh toán, bao gồm cả ngày làm việc và ngày nghỉ (nếu có)
                          </h4>

                          <h4 className='fw-normal mb-3'>
                            <img src='/images/vendors/ic-caret-financial-services.svg' alt='caret icon' className='me-2' />
                            Hình thức thanh toán: Số tiền và phí ứng trước sẽ được trích hoàn trả cho TVSI từ tiền bán
                            chứng khoán của khách hàng trong ngày thanh toán
                          </h4>
                        </div>
                      </div>
                      <div
                        className={clsx('tab-pane fade', {'active show': tabIndex === 2})}
                      >
                        <div className='container-tab'>
                          <h2 className='mb-4 font-weight-bold d-none d-md-block'>Rút tiền bằng sức mua</h2>

                          <p>
                            Khi có nhu cầu rút tiền trên Tài khoản GDKQ đang vay, thông thường Khách hàng sẽ cần bán cổ
                            phiếu, trả hết nợ vay. Tuy nhiên, nhiều trường hợp khách hàng cần rút tiền và muốn giữ danh
                            mục, hoặc chỉ bán một phần tương ứng với số tiền cần rút... Để đáp ứng các nhu cầu này, TVSI
                            giới thiệu tới Quý khách tính năng Rút tiền trực tiếp bằng sức mua trên tài khoản GDKQ.
                          </p>
                          <h3 className='fs-2 fw-bold mb-4'>Đối tượng: Khách hàng có tài khoản GDKQ tại TVSI</h3>
                          <h4 className='fw-normal mb-3'>
                            <img src='/images/vendors/ic-caret-financial-services.svg' alt='caret icon' className='me-2' />
                            Khách hàng đang vay trên tài khoản GDKQ: Khách hàng có nhu cầu rút tiền nhưng muốn giữ danh
                            mục, hoặc chỉ muốn bán một phần tương ứng với số tiền cần rút, đồng thời tỷ lệ tài khoản sau
                            khi rút vẫn đáp ứng yêu cầu của TVSI
                          </h4>

                          <h4 className='fw-normal mb-3'>
                            <img src='/images/vendors/ic-caret-financial-services.svg' alt='caret icon' className='me-2' />
                            Khách hàng có cổ phiếu: Khách hàng có nhu cầu rút tiền nhưng chưa muốn bán cổ phiếu. Trong
                            trường hợp này khách hàng có thể chuyển cổ phiếu sang tài khoản GDKQ, sau đó sử dụng tính
                            năng cho vay rút tiền trên tài khoản GDKQ
                          </h4>

                          <h4 className='fw-normal mb-3'>
                            <img src='/images/vendors/ic-caret-financial-services.svg' alt='caret icon' className='me-2' />
                            Khách hàng có cổ phiếu: Khách hàng có nhu cầu rút tiền nhưng chưa muốn bán cổ phiếu. Trong
                            trường hợp này khách hàng có thể chuyển cổ phiếu sang tài khoản GDKQ, sau đó sử dụng tính
                            năng cho vay rút tiền trên tài khoản GDKQ
                          </h4>

                          <h3 className='fs-2 fw-bold mb-4'>Ưu điểm của sản phẩm</h3>

                          <h4 className='fw-normal mb-3'>
                            <img src='/images/vendors/ic-caret-financial-services.svg' alt='caret icon' className='me-2' />
                            Thao tác mọi lúc mọi nơi
                          </h4>

                          <ul className='mb-4'>
                            <li>Trực tiếp tại Phòng giao dịch/Chi nhánh của TVSI;</li>
                            <li>Trực tuyến qua các nền tảng giao dịch của TVSI: iTrade-Home, TVSI Mobile</li>
                            <li>Gọi điện tới Trung tâm Dịch vụ Khách hàng 1900 1885</li>
                          </ul>
                          <h4 className='fw-normal mb-3'>
                            <img src='/images/vendors/ic-caret-financial-services.svg' alt='caret icon' className='me-2' />
                            Thủ tục đơn giản: Khách hàng có tài khoản GDKQ tại TVSI và có tài sản đảm bảo
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default FinancialServicesApp
