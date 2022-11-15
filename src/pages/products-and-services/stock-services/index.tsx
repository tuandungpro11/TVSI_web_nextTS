import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
const StockServices = () => {
  const [tabIndex, setTabIndex] = useState(0)
  return (
    <main>
      <section className='business-finance stock-services'>
        <section className='page-breadcrumb page-breadcrumb-stock-services'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col'>
                <h2 className='text-breadcrumb'>Dịch vụ chứng khoán</h2>

                <nav aria-label='breadcrumb'>
                  <ol className='breadcrumb text-uppercase text-white'>
                    <li className='breadcrumb-item'>
                      <Link href='/demo'>
                        <a>TRANG CHỦ</a>
                      </Link>
                    </li>
                    <li className='breadcrumb-item'>SẢN PHẨM & DỊCH VỤ</li>
                    <li className='breadcrumb-item'>DỊCH VỤ CHỨNG KHOÁN</li>
                    <li className={clsx('breadcrumb-item', {'dp-none': tabIndex !== 0})} aria-current='page'>
                      LƯU KÝ CHỨNG KHOÁN
                    </li>
                    <li className={clsx('breadcrumb-item', {'dp-none': tabIndex !== 1})} aria-current='page'>
                      THỰC HIỆN QUYỀN
                    </li>
                    <li className={clsx('breadcrumb-item', {'dp-none': tabIndex !== 2})} aria-current='page'>
                      ĐẠI LÝ ĐẤU GIÁ
                    </li>
                    <li className={clsx('breadcrumb-item', {'dp-none': tabIndex !== 3})} aria-current='page'>
                      QUẢN LÝ SỔ CỔ ĐÔNG
                    </li>
                  </ol>
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
                        id='pills-tab-stock-depository'
                        role='tablist'
                      >
                        <li className='nav-item' role='presentation'>
                          <a
                            className={clsx('nav-link', { active: tabIndex === 0 })}
                            type='button'
                            onClick={() => setTabIndex(0)}
                          >
                            Lưu ký chứng khoán
                          </a>
                        </li>
                        <li className='nav-item' role='presentation'>
                          <a
                            className={clsx('nav-link', { active: tabIndex === 1 })}
                            type='button'
                            onClick={() => setTabIndex(1)}
                          >
                            Thực hiện quyền
                          </a>
                        </li>
                        <li className='nav-item' role='presentation'>
                          <a
                            className={clsx('nav-link', { active: tabIndex === 2 })}
                            type='button'
                            onClick={() => setTabIndex(2)}
                          >
                            Đại lý đấu giá
                          </a>
                        </li>
                        <li className='nav-item' role='presentation'>
                          <a
                            className={clsx('nav-link', { active: tabIndex === 3 })}
                            type='button'
                            onClick={() => setTabIndex(3)}
                          >
                            Quản lý sổ cổ đông
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-lg-9'>
                  <div className='business-finance-right'>
                    <div className='tab-content' id='pills-tabContent-stock-services'>
                      <div
                        className={clsx('tab-pane fade', { 'active show': tabIndex === 0 })}
                        id='pills-stock-depository'
                        role='tabpanel'
                        aria-labelledby='pills-stock-depository-tab'
                      >
                        <div className='container-tab'>
                          <h2 className='mb-4 font-weight-bold d-none d-md-block'>Lưu ký chứng khoán</h2>
                          <p className='mb-4 mb-md-5'>
                            TVSI phối hợp với Trung tâm Lưu ký Chứng khoán (VSD) cung cấp dịch vụ ký gửi, bảo quản,
                            chuyển giao và ghi nhận sở hữu chứng khoán của khách hàng. Với sự chuyên nghiệp và tận tâm
                            TVSI giúp khách hàng dễ dàng thực hiện giao dịch, đảm bảo các quyền lợi và lợi ích liên quan
                            tới chứng khoán của người sở hữu.
                          </p>
                          <div className='row'>
                            <div className='col-md-6'>
                              <h4 className='fw-semibold mb-4'>
                                <img
                                  src='/images/vendors/ic-caret-financial-services.svg'
                                  alt='caret icon'
                                  className='me-2'
                                />
                                Thủ tục đơn giản, thuận tiện
                              </h4>
                            </div>
                            <div className='col-md-6'>
                              <h4 className='fw-semibold mb-4'>
                                <img
                                  src='/images/vendors/ic-caret-financial-services.svg'
                                  alt='caret icon'
                                  className='me-2'
                                />
                                Thời gian chấp thuận hồ sơ nhanh
                              </h4>
                            </div>
                            <div className='col-md-6'>
                              <h4 className='fw-semibold mb-4'>
                                <img
                                  src='/images/vendors/ic-caret-financial-services.svg'
                                  alt='caret icon'
                                  className='me-2'
                                />
                                Nhận được mọi quyền lợi về chứng khoán đầy đủ, kịp thời
                              </h4>
                            </div>
                            <div className='col-md-6'>
                              <h4 className='fw-semibold mb-3'>
                                <img
                                  src='/images/vendors/ic-caret-financial-services.svg'
                                  alt='caret icon'
                                  className='me-2'
                                />
                                An toàn hơn so với khách hàng tự lưu giữ chứng khoán
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={clsx('tab-pane fade', { 'active show': tabIndex === 1 })}
                        id='pills-benefit'
                        role='tabpanel'
                        aria-labelledby='pills-benefit-tab'
                      >
                        <div className='container-tab'>
                          <h2 className='mb-4 font-weight-bold d-none d-md-block'>Thực hiện quyền</h2>

                          <p className='mb-3 mb-md-4'>
                            Với mong muốn mang lại dịch vụ thuận tiện và đảm bảo quyền lợi cho khách hàng, TVSI cung cấp
                            những thông tin liên quan về thực hiện quyền cho người sở hữu chứng khoán. Cụ thể như sau:
                          </p>
                          <h3 className='fs-2 fw-bold mb-4'>Quyền lợi của cổ đông phổ thông</h3>

                          <h4 className='fw-normal mb-3 mb-md-4'>
                            <img
                              src='/images/vendors/ic-caret-financial-services.svg'
                              alt='caret icon'
                              className='me-2'
                            />
                            Hưởng cổ tức của công ty cổ phần
                          </h4>

                          <h4 className='fw-normal mb-3 mb-md-4'>
                            <img
                              src='/images/vendors/ic-caret-financial-services.svg'
                              alt='caret icon'
                              className='me-2'
                            />
                            Tham gia biểu quyết về định hướng hoạt động kinh doanh của công ty trong cuộc họp đại hội
                            đồng cổ đông
                          </h4>

                          <h4 className='fw-normal mb-3 mb-md-4'>
                            <img
                              src='/images/vendors/ic-caret-financial-services.svg'
                              alt='caret icon'
                              className='me-2'
                            />
                            Được ưu tiên mua cổ phần khi công ty tiến hành chào bán
                          </h4>

                          <h4 className='fw-normal mb-3 mb-mb-d4'>
                            <img
                              src='/images/vendors/ic-caret-financial-services.svg'
                              alt='caret icon'
                              className='me-2'
                            />
                            Yêu cầu triệu tập đại hội đồng cổ đông trong một số trường hợp
                          </h4>

                          <h4 className='fw-normal mb-3 mb-mb-d4'>
                            <img
                              src='/images/vendors/ic-caret-financial-services.svg'
                              alt='caret icon'
                              className='me-2'
                            />
                            Các quyền lợi khác nếu công ty có quy định trong điều lệ
                          </h4>

                          <h3 className='fs-2 fw-bold mb-4'>Quyền nhận cổ tức bằng tiền/cổ phiếu/cổ phiếu thưởng</h3>

                          <h4 className='fw-normal mb-3 mb-md-4'>
                            <img
                              src='/images/vendors/ic-caret-financial-services.svg'
                              alt='caret icon'
                              className='me-2'
                            />
                            Tổ chức phát hành sẽ công bố thông tin về quyền nhận cổ tức bằng tiền/cổ phiếu/cổ phiếu
                            thưởng trên các phương tiện thông tin đại chúng
                          </h4>

                          <h4 className='fw-normal mb-3 mb-mb-d4'>
                            <img
                              src='/images/vendors/ic-caret-financial-services.svg'
                              alt='caret icon'
                              className='me-2'
                            />
                            Khách hàng không phải thực hiện bất cứ hình thức đăng ký nào. Vào ngày chi trả cổ tức hoặc
                            ngày giao dịch cổ tức bằng cổ phiếu/cổ phiếu thưởng, TVSI sẽ phân bổ tự động vào tài khoản
                            giao dịch chứng khoán của khách hàng
                          </h4>

                          <h4 className='fw-normal mb-3 mb-mb-d4'>
                            <img
                              src='/images/vendors/ic-caret-financial-services.svg'
                              alt='caret icon'
                              className='me-2'
                            />
                            Trong trường hợp khách hàng muốn rút cổ tức bằng tiền, vui lòng mang theo Căn cước công
                            dân/Chứng minh thư tới Chi nhánh/Phòng giao dịch của TVSI hoặc gọi điện đến Trung tâm Dịch
                            vụ Khách hàng 1900 1885 để thực hiện chuyển tiền online tới tài khoản ngân hàng đã được
                            khách hàng đăng ký
                          </h4>

                          <h3 className='fs-2 fw-bold mb-4'>Quyền mua cổ phiếu phát hành thêm</h3>

                          <h4 className='fw-normal mb-3 mb-md-4'>
                            <img
                              src='/images/vendors/ic-caret-financial-services.svg'
                              alt='caret icon'
                              className='me-2'
                            />
                            Tổ chức phát hành sẽ công bố thông tin về quyền mua trên các phương tiện thông tin đại chúng
                          </h4>

                          <h4 className='fw-normal mb-3 mb-mb-d4'>
                            <img
                              src='/images/vendors/ic-caret-financial-services.svg'
                              alt='caret icon'
                              className='me-2'
                            />
                            Khi có phát sinh quyền mua cổ phiếu phát hành thêm, TVSI sẽ gửi thông báo số cổ phiếu được
                            hưởng quyền mua, giá mua và thời hạn đăng ký quyền mua tới khách hàng qua hệ thống tin nhắn
                            SMS và Email mà khách hàng đăng ký
                          </h4>

                          <h4 className='fw-normal mb-3 mb-mb-d4'>
                            <img
                              src='/images/vendors/ic-caret-financial-services.svg'
                              alt='caret icon'
                              className='me-2'
                            />
                            Để biết thêm chi tiết về thời gian đăng ký và nộp tiền của quyền mua cổ phiếu, khách hàng có
                            <a href='#' className='text-primary'>
                              Tin TVSI
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div
                        className={clsx('tab-pane fade', { 'active show': tabIndex === 2 })}
                        id='pills-auction-agent'
                        role='tabpanel'
                        aria-labelledby='pills-auction-agent-tab'
                      >
                        <div className='container-tab'>
                          <h2 className='mb-4 font-weight-bold d-none d-md-block'>Đại lý đấu giá</h2>

                          <p className='mb-4 mb-md-5'>
                            TVSI là một trong những đại lý đấu giá uy tín trên các Sở giao dịch chứng khoán tại Việt
                            Nam, tích cực tham gia các đợt đấu giá phát hành cổ phiếu, cung cấp dịch vụ tư vấn, nhận ủy
                            thác đấu giá với quy trình thực hiện nhanh chóng, chính xác và đảm bảo an toàn thông tin.
                          </p>
                          <h4 className='fw-normal mb-3 mb-md-4'>
                            <img
                              src='/images/vendors/ic-caret-financial-services.svg'
                              alt='caret icon'
                              className='me-2'
                            />
                            Tại TVSI, khách hàng dễ dàng tham gia đấu giá cổ phần và được tư vấn cụ thể về các thủ tục
                            tham gia đấu giá
                          </h4>

                          <h4 className='fw-normal mb-3 mb-md-4'>
                            <img
                              src='/images/vendors/ic-caret-financial-services.svg'
                              alt='caret icon'
                              className='me-2'
                            />
                            Địa điểm đấu giá cổ phần có thể được tổ chức ngay tại sàn giao dịch TVSI hoặc tại một địa
                            điểm do tổ chức phát hành chỉ định.
                          </h4>
                          <a href='#' className='fs-2 fw-bold fst-italic text-primary'>
                            Hướng dẫn đấu giá tại TVSI
                          </a>
                        </div>
                      </div>
                      <div
                        className={clsx('tab-pane fade', { 'active show': tabIndex === 3 })}
                        id='pills-manage-shareholder'
                        role='tabpanel'
                        aria-labelledby='pills-manage-shareholder-tab'
                      >
                        <div className='container-tab'>
                          <h2 className='mb-4 font-weight-bold d-none d-md-block'>Quản lý sổ cổ đông</h2>

                          <p className='mb-3 mb-md-4'>
                            Với mục tiêu nâng cao tính thanh khoản cho cổ phiếu của các công ty đại chúng, TVSI cung cấp
                            dịch vụ Quản lý sổ cổ đông chuyên nghiệp, bài bản thông qua đội ngũ nhân sự giàu kinh
                            nghiệm.
                          </p>
                          <h3 className='fs-2 fw-bold mb-4'>Các dịch vụ chính của Quản lý sổ cổ đông tại TVSI gồm:</h3>

                          <h4 className='fw-normal mb-3'>
                            <img
                              src='/images/vendors/ic-caret-financial-services.svg'
                              alt='caret icon'
                              className='me-2'
                            />
                            Quản lý danh sách cổ đông
                          </h4>

                          <h4 className='fw-normal mb-3'>
                            <img
                              src='/images/vendors/ic-caret-financial-services.svg'
                              alt='caret icon'
                              className='me-2'
                            />
                            Quản lý chuyển nhượng cổ phiếu
                          </h4>

                          <h4 className='fw-normal mb-3'>
                            <img
                              src='/images/vendors/ic-caret-financial-services.svg'
                              alt='caret icon'
                              className='me-2'
                            />
                            Xây dựng hệ thống báo cáo cho doanh nghiệp theo quy định
                          </h4>

                          <h4 className='fw-normal mb-3'>
                            <img
                              src='/images/vendors/ic-caret-financial-services.svg'
                              alt='caret icon'
                              className='me-2'
                            />
                            Lưu ký chứng khoán khi cổ phiếu được niêm yết
                          </h4>

                          <h4 className='fw-normal mb-3'>
                            <img
                              src='/images/vendors/ic-caret-financial-services.svg'
                              alt='caret icon'
                              className='me-2'
                            />
                            Và các dịch vụ liên quan khác
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

export default StockServices
