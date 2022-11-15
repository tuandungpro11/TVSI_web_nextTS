import clsx from "clsx"
import { useState } from "react"

const CorporateFinances = () => {
    const [tabIndex, setTabIndex] = useState(0)
  return (
    <main>
      <section className='business-finance'>
        <section className='page-breadcrumb page-breadcrumb-business-finance'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col'>
                <h2 className='text-breadcrumb'>Tài chính doanh nghiệp</h2>

                <nav aria-label='breadcrumb'>
                  <ul className='breadcrumb text-uppercase text-white'>
                    <li className='breadcrumb-item'>
                      <a href='index.html'>TRANG CHỦ</a>
                    </li>
                    <li className='breadcrumb-item'>SẢN PHẨM & DỊCH VỤ</li>
                    <li className='breadcrumb-item'>TÀI CHÍNH DOANH NGHIỆP</li>
                    <li className={clsx('breadcrumb-item', {'dp-none': tabIndex !== 0})} aria-current='page'>
                      NGHIỆP VỤ THỊ TRƯỜNG VỐN
                    </li>
                    <li className={clsx('breadcrumb-item', {'dp-none': tabIndex !== 1})} aria-current='page'>
                      NGHIỆP VỤ THỊ TRƯỜNG NỢ
                    </li>
                    <li className={clsx('breadcrumb-item', {'dp-none': tabIndex !== 2})} aria-current='page'>
                      NGHIỆP VỤ NGÂN HÀNG ĐẦU TƯ
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
                            className={clsx('nav-link', { 'active': tabIndex === 0})}
                            type='button'
                            onClick={() => setTabIndex(0)}
                          >
                            Nghiệp vụ thị trường vốn
                          </a>
                        </li>
                        <li className='nav-item' role='presentation'>
                          <a
                            className={clsx('nav-link', { 'active': tabIndex === 1})}
                            type='button'
                            onClick={() => setTabIndex(1)}
                          >
                            Nghiệp vụ thị trường nợ
                          </a>
                        </li>
                        <li className='nav-item' role='presentation'>
                          <a
                            className={clsx('nav-link', { 'active': tabIndex === 2})}
                            type='button'
                            onClick={() => setTabIndex(2)}
                          >
                            NV ngân hàng đầu tư
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
                        id='pills-market-operation'
                        role='tabpanel'
                        aria-labelledby='pills-company-tab'
                      >
                        <div className='container-tab'>
                          <h2 className='mb-3 font-weight-bold d-none d-md-block'>Nghiệp vụ thị trường vốn</h2>

                          <p>
                            Phát hành cổ phiếu là một trong những kênh huy động mang lại hiệu quả cao cho doanh nghiệp.
                            TVSI đồng hành cùng doanh nghiệp trong suốt quá trình phát hành cổ phiếu lần đầu ra công
                            chúng (IPO), niêm yết trên sàn chứng khoán và quản lý quan hệ nhà đầu tư nhằm quảng bá và
                            duy trì hình ảnh doanh nghiệp trong mắt nhà đầu tư, tạo thuận lợi cho các đợt huy động sau
                            này.
                          </p>
                          <p>Các dịch vụ thị trường vốn của TVSI bao gồm:</p>
                          <h3 className='fs-2 fw-bold'>1. Tư vấn phát hành</h3>

                          <p>
                            Uy tín cao và mối quan hệ mật thiết với các nhà đầu tư cá nhân và tổ chức có tiềm lực tài
                            chính mạnh cùng với đội ngũ chuyên gia tư vấn giàu kinh nghiệm là nền tảng để TVSI hỗ trợ
                            tối đa cho khách hàng trong quá trình IPO, phát hành ra công chúng cũng như phát hành riêng
                            lẻ cổ phiếu.
                          </p>
                          <h3 className='fs-2 fw-bold'>2. Tư vấn niêm yết</h3>
                          <p>
                            Niêm yết trên thị trường chứng khoán giúp tăng khả năng nhận diện thương hiệu đồng thời thúc
                            đẩy thanh khoản cho các đợt phát hành tăng vốn của doanh nghiệp. TVSI sẽ tham gia tư vấn
                            trong các khâu điều chỉnh cơ cấu vốn, chuẩn hóa các điều kiện, xác định giá trị niêm yết,
                            soạn thảo hồ sơ tài liệu và thực hiện các thủ tục đăng ký niêm yết.
                          </p>
                          <h3 className='fs-2 fw-bold'>3. Tư vấn cổ phần hóa</h3>

                          <p>
                            Để thúc đẩy nhanh quá trình cổ phần hóa và hạn chế tối đa ảnh hưởng từ quá trình chuyển đổi
                            tới hoạt động sản xuất kinh doanh, đội ngũ tư vấn chuyên nghiệp của TVSI sẽ cung cấp cho
                            Doanh nghiệp dịch vụ trọn gói từ khâu xây dựng kế hoạch cổ phần hóa cho đến khi kết thúc bán
                            đấu giá cổ phiếu ra công chúng.
                          </p>
                          <h3 className='fs-2 fw-bold'>4. Quản lý quan hệ nhà đầu tư</h3>

                          <p>
                            Là cầu nối giữa doanh nghiệp và nhà đầu tư, chúng tôi có sự am hiểu và kinh nghiệm cần thiết
                            để xây dựng và duy trì hình ảnh doanh nghiệp trong mắt nhà đầu tư. TVSI hỗ trợ các hoạt động
                            tương tác giữa doanh nghiệp và nhà đầu tư như quản lý sổ cổ đông, giúp doanh nghiệp công
                            bố/gửi thông tin tới cổ đông của mình.
                          </p>
                          <h3 className='fs-2 fw-bold mb-4'>5. Khách hàng tiêu biểu</h3>

                          <picture>
                            <source media='(max-width: 576px)' srcSet='/images/vendors/bussiness-finance-client-mb.jpeg' />
                            <source media='(min-width: 577px)' srcSet='/images/vendors/bussiness-finance-client.png' />
                            <img
                              src='/images/vendors/bussiness-finance-client.png'
                              alt='bussiness-finance-client'
                              className='img-fluid'
                            />
                          </picture>
                        </div>
                      </div>
                      <div
                        className={clsx('tab-pane fade', {'active show': tabIndex === 1})}
                        id='pills-market-debt'
                        role='tabpanel'
                        aria-labelledby='pills-market-debt-tab'
                      >
                        <div className='container-tab'>
                          <h2 className='mb-3 font-weight-bold d-none d-md-block'>Nghiệp vụ thị trường nợ</h2>

                          <p>
                            Bên cạnh phát hành cổ phiếu, trái phiếu và các công cụ nợ là kênh huy động vốn không thể
                            thiếu đối với một doanh nghiệp, có tác dụng khuếch đại lợi nhuận thông qua việc sử dụng đòn
                            bẩy. Đội ngũ chuyên gia của TVSI sẽ tìm hiểu cơ cấu vốn hiện tại cũng như nhu cầu sử dụng
                            vốn trong tương lai của doanh nghiệp nhằm tư vấn cơ cấu vốn và các phương án phát hành tối
                            ưu.
                          </p>
                          <p>Các dịch vụ dẫn vốn thị trường nợ bao gồm:</p>
                          <h3 className='fs-2 fw-bold'>1. Tư vấn phát hành</h3>

                          <p>
                            TVSI cung cấp dịch vụ tư vấn cho khách hàng các phương án, thủ tục và yêu cầu pháp lý liên
                            quan đến công cụ chứng khoán nợ.
                          </p>
                          <h3 className='fs-2 fw-bold'>2. Tư vấn phát hành trái phiếu cơ cấu</h3>

                          <p>
                            Đáp ứng sự phát triển ngày càng cao của thị trường tài chính, TVSI sẽ tư vấn phát hành các
                            sản phẩm trái phiếu cơ cấu như trái phiếu chuyển đổi, trái phiếu có quyền mua – bán lại,
                            trái phiếu kèm chứng quyền; để các doanh nghiệp có thể cơ cấu lại các khoản nợ, tăng quy mô
                            vốn, hoặc để đầu tư các chương trình, dự án mới.
                          </p>
                          <h3 className='fs-2 fw-bold'>3. Phân phối sản phẩm trái phiếu</h3>

                          <p>
                            Mạng lưới khách hàng tổ chức đa dạng từ các ngân hàng thương mại đến các công ty bảo hiểm và
                            quỹ đầu tư là nền tảng và lợi thế giúp TVSI phân phối trái phiếu thành công và huy động đủ
                            vốn theo nhu cầu doanh nghiệp.
                          </p>
                          <h3 className='fs-2 fw-bold mb-4'>4. Khách hàng tiêu biểu</h3>
                          <picture>
                            <source media='(max-width: 576px)' srcSet='/images/vendors/market-debt-mb.jpeg' />
                            <source media='(min-width: 577px)' srcSet='/images/vendors/market-debt.png' />
                            <img src='/images/vendors/market-debt.png' alt='market-debt' className='img-fluid' />
                          </picture>
                        </div>
                      </div>
                      <div
                        className={clsx('tab-pane fade', {'active show': tabIndex === 2})}
                        id='pills-investment-banker'
                        role='tabpanel'
                        aria-labelledby='pills-investment-banker-tab'
                      >
                        <div className='container-tab'>
                          <h2 className='mb-3 font-weight-bold d-none d-md-block'>NV ngân hàng đầu tư</h2>

                          <p>
                            Có nền tảng quan hệ sâu rộng với một số lượng lớn các doanh nghiệp và nhà đầu tư sau nhiều
                            năm hoạt động trên thị trường chứng khoán, TVSI có thể kết nối giữa doanh nghiệp và doanh
                            nghiệp, doanh nghiệp và nhà đầu tư; giúp Khách hàng tìm được bên đối ứng đáng tin cậy. Đồng
                            thời TVSI hỗ trợ tối đa trong quá trình định giá, xây dựng chiến lược và đàm phán trong các
                            thương vụ M&A, nhằm tạo ra giá trị cộng hưởng cho các bên tham gia.
                          </p>
                          <h3 className='fs-2 fw-bold mb-4 mt-3 mt-md-5'>Các dịch vụ tư vấn M&A</h3>
                          <h4 className='fw-semibold'>1. Mua bán tài sản</h4>

                          <p>
                            TVSI kết nối bên mua và bên bán, giúp các bên tìm kiếm đối tác phù hợp và hỗ trợ trong quá
                            trình đàm phán thực hiện thương vụ.
                          </p>
                          <h4 className='fw-semibold'>2. Mua bán cổ phần chi phối</h4>

                          <p>
                            TVSI là cầu nối cho các doanh nghiệp hoặc cá nhân có nhu cầu, đồng thời là đại diện đề xuất
                            và thương thảo các điều kiện hợp lý giúp thương vụ thành công tốt đẹp.
                          </p>
                          <h4 className='fw-semibold'>3. Thâu tóm sáp nhập</h4>

                          <p>
                            TVSI hỗ trợ doanh nghiệp trong các hoạt động trước, trong và sau khi mua bán sáp nhập bao
                            gồm việc xác định chiến lược và mục tiêu mua bán, khảo sát và làm nghiên cứu chi tiết về
                            doanh nghiệp, xây dựng kế hoạch mua bán và thương lượng các điều khoản.
                          </p>
                          <h3 className='fs-2 fw-bold mb-4 mt-3 mt-md-4'>Khách hàng tiêu biểu</h3>

                          <picture>
                            <source media='(max-width: 576px)' srcSet='/images/vendors/investment-banker-mb.jpeg' />
                            <source media='(min-width: 577px)' srcSet='/images/vendors/investment-banker.png' />
                            <img src='/images/vendors/investment-banker.png' alt='investment-banker' className='img-fluid' />
                          </picture>
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

export default CorporateFinances
