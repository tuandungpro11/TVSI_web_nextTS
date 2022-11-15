import SwiperLoop from 'src/views/components/swiper/SwiperLoop'
import Grid from '@mui/material/Grid'
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'
import CardButton from 'src/@core/components/card-button'
import CardElevated from 'src/@core/components/card-evelated'
import { Paper } from '@mui/material'
import Link from 'next/link'
import FAQCard from 'src/views/components/FAQCard'
import IFinCard from 'src/views/components/IFinCard'
import NewsCard from 'src/views/components/newsCard'
import { NewsDisplayType } from 'src/types/enum'

const Demo = () => {
  return (
    <main>
      <section className='main-home'>
        <section className='slider'>
          <div className='container-fluid px-120px'>
            <KeenSliderWrapper>
                <div className="keen-slider">
                    <picture className='keen-slider__slide'>
                        <source media='(max-width: 576px)' srcSet='/images/vendors/slider-mb.png' />
                        <source media='(min-width: 577px)' srcSet='/images/vendors/slider-ipad.png' />
                        <source media='(min-width: 992px)' srcSet='/images/vendors/slider1.png' />
                        <img src='/images/vendors/slider1.png' alt='slider image' className='img-slider' />
                    </picture>
                    <picture className='keen-slider__slide'>
                        <source media='(max-width: 576px)' srcSet='/images/vendors/slider-mb.png' />
                        <source media='(min-width: 577px)' srcSet='/images/vendors/slider-ipad.png' />
                        <source media='(min-width: 992px)' srcSet='/images/vendors/slider1.png' />
                        <img src='/images/vendors/slider1.png' alt='slider image' className='img-slider' />
                    </picture>
                    <picture className='keen-slider__slide'>
                        <source media='(max-width: 576px)' srcSet='/images/vendors/slider-mb.png' />
                        <source media='(min-width: 577px)' srcSet='/images/vendors/slider-ipad.png' />
                        <source media='(min-width: 992px)' srcSet='/images/vendors/slider1.png' />
                        <img src='/images/vendors/slider1.png' alt='slider image' className='img-slider' />
                    </picture>
                </div>
            </KeenSliderWrapper>
            {/* <div className='owl-carousel owl-theme owl-slider'> */}
              {/* <div className='item slider-item'>
                <div className='slider-wrap'>
                  <picture>
                    <source media='(max-width: 576px)' srcSet='/images/vendors/slider-mb.png' />
                    <source media='(min-width: 577px)' srcSet='/images/vendors/slider-ipad.png' />
                    <source media='(min-width: 992px)' srcSet='/images/vendors/slider1.png' />
                    <img src='/images/vendors/slider1.png' alt='slider image' className='img-slider' />
                  </picture>
                </div>
              </div>
              <div className='item slider-item'>
                <div className='slider-wrap'>
                  <picture>
                    <source media='(max-width: 576px)' srcSet='/images/vendors/slider-mb.png' />
                    <source media='(min-width: 577px)' srcSet='/images/vendors/slider-ipad.png' />
                    <source media='(min-width: 992px)' srcSet='/images/vendors/slider1.png' />
                    <img src='/images/vendors/slider1.png' alt='slider image' className='img-slider' />
                  </picture>
                </div>
              </div>
              <div className='item slider-item'>
                <div className='slider-wrap'>
                  <picture>
                    <source media='(max-width: 576px)' srcSet='/images/vendors/slider-mb.png' />
                    <source media='(min-width: 577px)' srcSet='/images/vendors/slider-ipad.png' />
                    <source media='(min-width: 992px)' srcSet='/images/vendors/slider1.png' />
                    <img src='/images/vendors/slider1.png' alt='slider image' className='img-slider' />
                  </picture>
                </div>
              </div> */}
            {/* </div> */}
          </div>
        </section>
        <section className='slider-bottom'>
          <div className='container'>
            <div className='grid-container'>
              <div className='grid-item'>
                <div className='d-flex align-items-center'>
                  <img src='/images/vendors/ic-dollar.svg' alt='icon dollar' />
                  <span className='fw-semibold fz24'>Nộp tiền</span>
                </div>
              </div>
              <div className='grid-item'>
                <div className='d-flex align-items-center'>
                  <img src='/images/vendors/ic-line-chart.svg' alt='icon dollar' />
                  <span className='fw-semibold fz24'>Bảng giá</span>
                </div>
              </div>
              <div className='grid-item'>
                <div className='d-flex align-items-center'>
                  <img src='/images/vendors/ic-smartphone.svg' alt='icon dollar' />
                  <span className='fw-semibold fz24'>
                    Giao dịch <br />
                    Trực tuyến
                  </span>
                </div>
              </div>
              <div className='grid-item'>
                <div className='d-flex align-items-center'>
                  <img src='/images/vendors/ic-flat.svg' alt='icon dollar' />
                  <span className='fw-semibold fz24'>
                    Ứng dụng <br /> Điện thoại
                  </span>
                </div>
              </div>
              <div className='grid-item'>
                <div className='d-flex align-items-center'>
                  <img src='/images/vendors/ic-headphone.svg' alt='icon dollar' />
                  <span className='fw-semibold fz24'>
                    Bạn cần <br /> Hỗ trợ?
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='product'>
          <div className='container'>
            <h2 className='page-heading'>Sản phẩm - Dịch vụ </h2>

            <div className='owl-carousel owl-theme owl-product d-flex d-md-none'>
              <div className='item'>
                <div className='product-item box-shadow'>
                  <img src='/images/vendors/product1.jpeg' alt='product img' className='img-fluid' />
                  <h3>Chứng khoán</h3>
                  <p>
                    Với phương châm nhanh nhất, thuận tiện nhất, hiệu quả nhất, TVSI đầu tư hệ thống công nghệ hiện đại
                    phục vụ khách hàng một cách tốt nhất, tối đa lợi ích
                  </p>
                  <a href='#'>
                    Tìm hiểu thêm
                    <img src='/images/vendors/ic-caret-product.svg' alt='caret product' />
                  </a>
                </div>
              </div>
              <div className='item'>
                <div className='product-item box-shadow'>
                  <img src='/images/vendors/product2.jpeg' alt='product img' className='img-fluid' />
                  <h3>Trái phiếu</h3>
                  <p>
                    Sản phẩm uy tín & an toàn với lợi tức cạnh tranh & hấp dẫn. Sản phẩm linh hoạt, đa dạng, phong phú.
                    Khách hàng chủ động & dễ dàng quản lý, giao dịch qua hệ thống
                  </p>
                  <a href='#'>
                    Tìm hiểu thêm
                    <img src='/images/vendors/ic-caret-product.svg' alt='caret product' />
                  </a>
                </div>
              </div>
              <div className='item'>
                <div className='product-item box-shadow'>
                  <img src='/images/vendors/product3.jpeg' alt='product img' className='img-fluid' />
                  <h3>Quỹ đầu tư</h3>
                  <p>
                    Bạn muốn tích lũy để đảm bảo cho tương lai? Tự do tài chính, không lo lắng về tiền bạc? Kiểm soát
                    chi tiêu khoa học? Tất cả đều thực hiện được qua bộ công cụ của TVFM
                  </p>
                  <a href='#'>
                    Tìm hiểu thêm
                    <img src='/images/vendors/ic-caret-product.svg' alt='caret product' />
                  </a>
                </div>
              </div>
            </div>
            <div className='row d-none d-md-flex justify-content-center justify-content-lg-between'>
              <div className='col-md-4'>
                <div className='product-item box-shadow'>
                  <img src='/images/vendors/product1.jpeg' alt='product img' className='img-fluid' />
                  <h3>Chứng khoán</h3>
                  <p>
                    Với phương châm nhanh nhất, thuận tiện nhất, hiệu quả nhất, TVSI đầu tư hệ thống công nghệ hiện đại
                    phục vụ khách hàng một cách tốt nhất, tối đa lợi ích
                  </p>
                  <a href='#'>
                    Tìm hiểu thêm
                    <img src='/images/vendors/ic-caret-product.svg' alt='caret product' />
                  </a>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='product-item box-shadow'>
                  <img src='/images/vendors/product2.jpeg' alt='product img' className='img-fluid' />
                  <h3>Trái phiếu</h3>
                  <p>
                    Sản phẩm uy tín & an toàn với lợi tức cạnh tranh & hấp dẫn. Sản phẩm linh hoạt, đa dạng, phong phú.
                    Khách hàng chủ động & dễ dàng quản lý, giao dịch qua hệ thống
                  </p>
                  <a href='#'>
                    Tìm hiểu thêm
                    <img src='/images/vendors/ic-caret-product.svg' alt='caret product' />
                  </a>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='product-item box-shadow'>
                  <img src='/images/vendors/product3.jpeg' alt='product img' className='img-fluid' />
                  <h3>Quỹ đầu tư</h3>
                  <p>
                    Bạn muốn tích lũy để đảm bảo cho tương lai? Tự do tài chính, không lo lắng về tiền bạc? Kiểm soát
                    chi tiêu khoa học? Tất cả đều thực hiện được qua bộ công cụ của TVFM
                  </p>
                  <a href='#'>
                    Tìm hiểu thêm
                    <img src='/images/vendors/ic-caret-product.svg' alt='caret product' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className='faqs d-none d-md-block'>
          <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
              <h2 className='fw-bold'>Câu hỏi thường gặp</h2>
              <a
                href='#'
                className='text-primary d-none d-md-flex d-lg-none mb-3 fw-semibold align-items-center home-seemore'
              >
                Xem thêm <img src='/images/vendors/ic-seemore.svg' alt='ic-seemore' className='img-fluid' />
              </a>
            </div>
            <div className='d-flex align-items-center faqs-wrap'>
              <div className='faqs-left'>
                <div className='nav flex-column nav-pills' id='v-pills-faq' role='tablist' aria-orientation='vertical'>
                  <button
                    className='nav-link active'
                    id='v-pills-faq1-tab'
                    data-bs-toggle='pill'
                    data-bs-target='#v-pills-faq1'
                    type='button'
                    role='tab'
                    aria-controls='v-pills-faq1'
                    aria-selected='true'
                  >
                    <span>Khách hàng có thể giao dịch trực tuyến qua hệ thống nào?</span>
                    <img src='/images/vendors/ic-faq.svg' alt='ic-faq' className='img-fluid' />
                  </button>
                  <button
                    className='nav-link'
                    id='v-pills-faq2-tab'
                    data-bs-toggle='pill'
                    data-bs-target='#v-pills-faq2'
                    type='button'
                    role='tab'
                    aria-controls='v-pills-faq2'
                    aria-selected='false'
                  >
                    <span>Có thể đặt lệnh ngoài giờ cho ngày giao dịch kế tiếp từ lúc nào?</span>
                    <img src='/images/vendors/ic-faq.svg' alt='ic-faq' className='img-fluid' />
                  </button>
                  <button
                    className='nav-link'
                    id='v-pills-faq3-tab'
                    data-bs-toggle='pill'
                    data-bs-target='#v-pills-faq3'
                    type='button'
                    role='tab'
                    aria-controls='v-pills-faq3'
                    aria-selected='false'
                  >
                    <span>
                      Có thể nhờ người khác mang Sổ sở hữu cổ phần đến TVSI để thực hiện thủ tục lưu ký không?
                    </span>
                    <img src='/images/vendors/ic-faq.svg' alt='ic-faq' className='img-fluid' />
                  </button>
                  <button
                    className='nav-link mb-0'
                    id='v-pills-faq4-tab'
                    data-bs-toggle='pill'
                    data-bs-target='#v-pills-faq4'
                    type='button'
                    role='tab'
                    aria-controls='v-pills-faq4'
                    aria-selected='false'
                  >
                    <span>Hướng dẫn lưu ký chứng khoán tại TVSI</span>
                    <img src='/images/vendors/ic-faq.svg' alt='ic-faq' className='img-fluid' />
                  </button>
                </div>
              </div>
              <div className='faqs-right'>
                <div className='tab-content' id='v-pills-tabContent'>
                  <div
                    className='tab-pane fade show active'
                    id='v-pills-faq1'
                    role='tabpanel'
                    aria-labelledby='v-pills-faq1-tab'
                    tabIndex={0}
                  >
                    <img src='/images/vendors/faq-img.svg' alt='faq img' />
                    <p>
                      Tại TVSI, Quý khách có thể giao dịch trực tuyến thông qua: webtrading iTrade Home, ứng dụng giao
                      dịch trực tuyến qua điện thoại TVSI Mobile, ứng dụng giao dịch trực tuyến qua máy tính iTrade Pro.
                    </p>
                    <a href='#'>Bạn cần hỗ trợ thêm?</a>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='v-pills-faq2'
                    role='tabpanel'
                    aria-labelledby='v-pills-faq2-tab'
                    tabIndex={0}
                  >
                    <img src='/images/vendors/faq-img.svg' alt='faq img' />
                    <p>
                      Tại TVSI, Quý khách có thể giao dịch trực tuyến thông qua: webtrading iTrade Home, ứng dụng giao
                      dịch trực tuyến qua điện thoại TVSI Mobile, ứng dụng giao dịch trực tuyến qua máy tính iTrade Pro.
                    </p>
                    <a href='#'>Bạn cần hỗ trợ thêm?</a>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='v-pills-faq3'
                    role='tabpanel'
                    aria-labelledby='v-pills-faq3-tab'
                    tabIndex={0}
                  >
                    <img src='/images/vendors/faq-img.svg' alt='faq img' />
                    <p>
                      Tại TVSI, Quý khách có thể giao dịch trực tuyến thông qua: webtrading iTrade Home, ứng dụng giao
                      dịch trực tuyến qua điện thoại TVSI Mobile, ứng dụng giao dịch trực tuyến qua máy tính iTrade Pro.
                    </p>
                    <a href='#'>Bạn cần hỗ trợ thêm?</a>
                  </div>
                  <div
                    className='tab-pane fade'
                    id='v-pills-faq4'
                    role='tabpanel'
                    aria-labelledby='v-pills-faq4-tab'
                    tabIndex={0}
                  >
                    <img src='/images/vendors/faq-img.svg' alt='faq img' />
                    <p>
                      Tại TVSI, Quý khách có thể giao dịch trực tuyến thông qua: webtrading iTrade Home, ứng dụng giao
                      dịch trực tuyến qua điện thoại TVSI Mobile, ứng dụng giao dịch trực tuyến qua máy tính iTrade Pro.
                    </p>
                    <a href='#'>Bạn cần hỗ trợ thêm?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='faqs d-block d-md-none'>
          <div className='accordion' id='accordionFaqs'>
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
                  <span>Khách hàng có thể giao dịch trực tuyến qua hệ thống nào?</span>
                </button>
              </h2>

              <div
                id='collapseOne'
                className='accordion-collapse collapse show'
                aria-labelledby='headingOne'
                data-bs-parent='#accordionFaqs'
              >
                <div className='accordion-body'>
                  <img src='/images/vendors/faq-img.svg' alt='faq img' />
                  <p>
                    Tại TVSI, Quý khách có thể giao dịch trực tuyến thông qua: webtrading iTrade Home, ứng dụng giao
                    dịch trực tuyến qua điện thoại TVSI Mobile, ứng dụng giao dịch trực tuyến qua máy tính iTrade Pro.
                  </p>
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
                  <span>Có thể đặt lệnh ngoài giờ cho ngày giao dịch kế tiếp từ lúc nào?</span>
                </button>
              </h2>

              <div
                id='collapseTwo'
                className='accordion-collapse collapse'
                aria-labelledby='headingTwo'
                data-bs-parent='#accordionFaqs'
              >
                <div className='accordion-body'>
                  <img src='/images/vendors/faq-img.svg' alt='faq img' />
                  <p>
                    Tại TVSI, Quý khách có thể giao dịch trực tuyến thông qua: webtrading iTrade Home, ứng dụng giao
                    dịch trực tuyến qua điện thoại TVSI Mobile, ứng dụng giao dịch trực tuyến qua máy tính iTrade Pro.
                  </p>
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
                  <span>Có thể nhờ người khác mang Sổ sở hữu cổ phần đến TVSI để thực hiện thủ tục lưu ký không?</span>
                </button>
              </h2>

              <div
                id='collapseThree'
                className='accordion-collapse collapse'
                aria-labelledby='headingThree'
                data-bs-parent='#accordionFaqs'
              >
                <div className='accordion-body'>
                  <img src='/images/vendors/faq-img.svg' alt='faq img' />
                  <p>
                    Tại TVSI, Quý khách có thể giao dịch trực tuyến thông qua: webtrading iTrade Home, ứng dụng giao
                    dịch trực tuyến qua điện thoại TVSI Mobile, ứng dụng giao dịch trực tuyến qua máy tính iTrade Pro.
                  </p>
                </div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='headingFour'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#collapseThree'
                  aria-expanded='false'
                  aria-controls='collapseFour'
                >
                  <span>Hướng dẫn lưu ký chứng khoán tại TVSI</span>
                </button>
              </h2>

              <div
                id='collapseFour'
                className='accordion-collapse collapse'
                aria-labelledby='headingFour'
                data-bs-parent='#accordionFaqs'
              >
                <div className='accordion-body'>
                  <img src='/images/vendors/faq-img.svg' alt='faq img' />
                  <p>
                    Tại TVSI, Quý khách có thể giao dịch trực tuyến thông qua: webtrading iTrade Home, ứng dụng giao
                    dịch trực tuyến qua điện thoại TVSI Mobile, ứng dụng giao dịch trực tuyến qua máy tính iTrade Pro.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a href='#' className='d-flex justify-content-end'>
            Bạn cần hỗ trợ thêm?
          </a>
        </div>
        <div className='ifin'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-xl-3'>
                <div className='ifin-left'>
                  <h2 className='fw-bold'>iFin</h2>

                  <p>
                    Là hệ thống dữ liệu, tin tức và báo cáo phân tích cập nhật chính xác tới từng giây. TVSI tự tin cung
                    cấp tới khách hàng nền tảng phân tích vững chắc, chuyên sâu.
                  </p>
                </div>
              </div>
              <div className='col-xl-9'>
                <div className='d-flex ifin-right'>
                  <div className='ifin-item'>
                    <span className='number'>01</span>
                    <h3>Thông tin định lượng nhanh</h3>
                    <p>Số liệu cập nhật liên tục theo thị trường</p>
                    <a href='#' className='btn-seemore'>
                      <span>Tìm hiểu thêm </span>
                      <img src='/images/vendors/ic-caret-ifin.svg' alt='caret ifin' />
                    </a>
                  </div>
                  <div className='ifin-item'>
                    <span className='number'>02</span>
                    <h3>Thông tin định tính chính xác</h3>
                    <p>Tin tức cập nhật đa dạng, chính xác</p>
                    <a href='#' className='btn-seemore'>
                      <span>Tìm hiểu thêm </span>
                      <img src='/images/vendors/ic-caret-ifin.svg' alt='caret ifin' />
                    </a>
                  </div>
                  <div className='ifin-item'>
                    <span className='number'>03</span>
                    <h3>Khuyến nghị chất lượng cao</h3>
                    <p>Nhận định và khuyến nghị theo chuyên gia và hệ thống IRA</p>
                    <a href='#' className='btn-seemore'>
                      <span>Tìm hiểu thêm </span>
                      <img src='/images/vendors/ic-caret-ifin.svg' alt='caret ifin' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='home-news'>
          <div className='container'>
            <h2 className='fw-bold'>Tin tức nổi bật</h2>

            <div className='row'>
              <div className='col-md-6'>
                <div className='home-news-left'>
                  <div className='home-news-big-item'>
                    <a href='#' className='d-block position-relative img-wrap'>
                      <img src='/images/vendors/home-news-big.jpeg' alt='home news img' className='img-fluid' />
                      <img
                        src='/images/vendors/home-news-big-overlay.png'
                        alt='home-news-big-overlay'
                        className='img-fluid img-overlay'
                      />
                    </a>
                    <div className='home-news-big-content'>
                      <h5 className='fw-bold'>
                        <a href='#'>
                          Thông báo mã chứng khoán TVC không đủ điều kiện chứng khoán được làm TSĐB tại TVSI
                        </a>
                      </h5>

                      <p>Tin TVSI | 22/08/2022</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='home-news-right'>
                  <div className='home-news-item'>
                    <a href='#' className='d-block img-wrap'>
                      <img src='/images/vendors/home-news1.jpeg' alt='home news img' className='img-fluid' />
                      <div className='content-wrap'>
                        <h5 className='fw-bold'>
                          <a href='#'>TVSI tặng xe đạp cho học sinh nghèo vùng biên cương</a>
                        </h5>
                        <p>
                          <span>TVSI Vì cộng đồng</span> | 18/05/2022
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='home-news-item'>
                    <a href='#' className='d-block img-wrap'>
                      <img src='/images/vendors/home-news2.jpeg' alt='home news img' className='img-fluid' />
                      <div className='content-wrap'>
                        <h5 className='fw-bold'>
                          <a href='#'>
                            CEO TVSI: Kinh doanh là luôn trong tâm thế sẵn sàng đương đầu với thử thách (ĐTCK)
                          </a>
                        </h5>
                        <p>
                          <span>TVSI với báo chí</span> | 07/02/2022
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='home-news-item'>
                    <a href='#' className='d-block img-wrap'>
                      <img src='/images/vendors/home-news3.jpeg' alt='home news img' className='img-fluid' />
                      <div className='content-wrap'>
                        <h5 className='fw-bold'>
                          <a href='#'>TVSI trao tặng hơn 3.000 khẩu trang 3M tới Bệnh viện Hữu nghị Việt Đức</a>
                        </h5>
                        <p>
                          <span>TVSI Vì cộng đồng</span> | 22/08/2022
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex d-md-none justify-content-end'>
              <a href='#' className='text-primary fw-semibold d-flex align-items-center home-seemore'>
                Xem thêm <img src='/images/vendors/ic-seemore.svg' alt='ic-seemore' className='img-fluid' />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
  // return  (<>
  //   <KeenSliderWrapper>
  //       <Grid item xs={12}>
  //           <SwiperLoop direction='rtl' />
  //       </Grid>
  //       <div style={{
  //           display:'flex',
  //           flexDirection:'row',
  //           justifyContent:'space-between',
  //           gap: '20px',
  //           width: '78.5%',
  //           margin:'0 auto',
  //           marginTop: '-50px',
  //           zIndex: '2'}}
  //       >
  //           <CardButton title='Nộp tiền' iconUrl='/images/icons/nop-tien.svg' redirectUrl='/'></CardButton>
  //           <CardButton title='Bảng giá' iconUrl='/images/icons/bang-gia.svg' redirectUrl='/'></CardButton>
  //           <CardButton title='Giao dịch trực tuyến' iconUrl='/images/icons/gdtt.svg' redirectUrl='/'></CardButton>
  //           <CardButton title='Ứng dụng điện thoại' iconUrl='/images/icons/uddt.svg' redirectUrl='/'></CardButton>
  //           <CardButton title='Bạn cần hỗ trợ' iconUrl='/images/icons/bcht.svg' redirectUrl='/'></CardButton>
  //       </div>
  //   </KeenSliderWrapper>
  //     <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '78.5%', margin: '0 auto', gap: '90px', zIndex: 0}}>
  //         <h2 style={{fontWeight: '700',
  //             fontSize: '48px',
  //             lineHeight: '65px'
  //         }}>
  //             Sản phẩm - Dịch vụ
  //         </h2>
  //         <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
  //             <CardElevated redirectUrl="#" style={{width: '30%', alignItems: 'center'}} imgSrc='/images/stock.png' title='Chứng khoán' text='Với phương châm nhanh nhất, thuận tiện nhất, hiệu quả nhất, TVSI đầu tư hệ thống công nghệ hiện đại phục vụ khách hàng một cách tốt nhất, tối đa lợi ích'/>
  //             <CardElevated redirectUrl="#" style={{width: '30%', alignItems: 'center'}} imgSrc='/images/bond.png' title='Trái phiếu' text='Sản phẩm uy tín & an toàn với lợi tức cạnh tranh & hấp dẫn. Sản phẩm linh hoạt, đa dạng, phong phú. Khách hàng chủ động & dễ dàng quản lý, giao dịch qua hệ thống'/>
  //             <CardElevated redirectUrl="#" style={{width: '30%', alignItems: 'center'}} imgSrc='/images/fund.png' title='Quỹ đầu tư' text='Bạn muốn tích lũy để đảm bảo cho tương lai? Tự do tài chính, không lo lắng về tiền bạc? Kiểm soát chi tiêu khoa học? Tất cả đều thực hiện được qua bộ công cụ của TVFM'/>
  //         </div>
  //     </div>
  //     <div style={{maxWidth: '78.5%', margin: '0 auto'}}>
  //         <h2>Câu hỏi thường gặp</h2>
  //         <div style={{display: 'flex', flexDirection: 'row', }}>
  //             <div style={{width: '47.7%'}}>
  //                 <div style={{
  //                     width: '33.8%',
  //                     height: '477px',
  //                     zIndex: '2',
  //                     position: 'absolute',
  //                     display: 'flex',
  //                     flexDirection: 'column',
  //                     justifyContent: 'space-around'
  //                 }}>
  //                     <FAQCard/>
  //                     <FAQCard/>
  //                     <FAQCard/>
  //                     <FAQCard/>
  //                 </div>
  //             </div>
  //             <Paper variant='outlined' style={{
  //                 background: '#D2353B',
  //                 width: '56.8%',
  //                 height: '477px',
  //                 padding: '120px 20px 20px 120px',
  //                 color: '#fff'
  //             }}>
  //                 <img src='/images/icons/left-quote.svg' alt=''/>
  //                 <p>Tại TVSI, Quý khách có thể giao dịch trực tuyến thông qua: webtrading iTrade Home, ứng dụng giao dịch trực tuyến qua điện thoại TVSI Mobile, ứng dụng giao dịch trực tuyến qua máy tính iTrade Pro.</p>
  //                 <Link href="#"><a style={{color: "#fff"}}>Bạn cần hỗ trợ thêm?</a></Link>
  //             </Paper>
  //         </div>
  //     </div>
  //     <div style={{display: 'flex', width: '78.5%', margin: '50px auto 0', height: '400px', justifyContent: 'space-between'}}>
  //         <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', flexBasis: '22.7%'}}>
  //             <h2>iFin</h2>
  //             <p>Là hệ thống dữ liệu, tin tức và báo cáo phân tích cập nhật chính xác tới từng giây. TVSI tự tin cung cấp tới khách hàng nền tảng phân tích vững chắc, chuyên sâu.</p>
  //         </div>
  //         <div style={{display: 'flex', justifyContent: 'space-between', height: '400px', flexBasis: '75%'}}>
  //             <IFinCard redirectUrl="#" order="01" title="Thông tin định lượng nhanh" text="Số liệu cập nhật liên tục theo thị trường"/>
  //             <IFinCard redirectUrl="#" order="02" title="Thông tin định tính chính xác" text="Tin tức cập nhật đa dạng, chính xác"/>
  //             <IFinCard redirectUrl="#" order="03" title="Khuyến nghị chất lượng cao" text="Nhận định và khuyến nghị theo chuyên gia và hệ thống IRA"/>
  //         </div>
  //     </div>
  //     <div style={{width: '78.5%', margin: '0 auto'}}>
  //         <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
  //             <h2>Tin tức nổi bật</h2>
  //             <Link href="/news/category">
  //                 <a style={{color: "#D2353B"}}>Xem thêm</a>
  //             </Link>
  //         </div>
  //         <div style={{display: 'flex', justifyContent:'space-between'}}>
  //             <Link href="#">
  //                 <div style={{
  //                     width: '48%',
  //                     height: '100%',
  //                     background: "url('/images/featured_news.png')",
  //                     backgroundSize:'cover',
  //                     filter: 'drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.1))',
  //                     borderRadius: '10px',
  //                     color: "#fff",
  //                     cursor: 'pointer',
  //                     padding: '250px 99px 30px 30px',
  //                     backgroundRepeat: 'no-repeat'}}>
  //                         <h3>Thông báo mã chứng khoán TVC không đủ điều kiện chứng khoán được làm TSĐB tại TVSI</h3>
  //                         <span style={{borderRight: "1px solid white", paddingRight: '10px'}}>Tin TVSI</span>
  //                         <span style={{marginLeft: '10px'}}>22/08/2022</span>
  //                 </div>
  //             </Link>
  //             <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '48%'}}>
  //                 <NewsCard RedirectUrl="#" Title="TVSI tặng xe đạp cho học sinh nghèo vùng biên cương" CategoryName="TVSI Vì cộng đồng" CreatedDate="18/05/2022" displayType={NewsDisplayType.HOME}></NewsCard>
  //                 <NewsCard RedirectUrl="#" Title="CEO TVSI: Kinh doanh là luôn trong tâm thế sẵn sàng đương đầu với thử thách (ĐTCK)" CategoryName="TVSI với báo chí" CreatedDate="18/05/2022" displayType={NewsDisplayType.HOME}></NewsCard>
  //                 <NewsCard RedirectUrl="#" Title="TVSI trao tặng hơn 3.000 khẩu trang 3M tới Bệnh viện Hữu nghị Việt Đức" CategoryName="TVSI Vì cộng đồng" CreatedDate="18/05/2022" displayType={NewsDisplayType.HOME}></NewsCard>
  //             </div>
  //         </div>
  //     </div>
  // </>)
}

export default Demo
