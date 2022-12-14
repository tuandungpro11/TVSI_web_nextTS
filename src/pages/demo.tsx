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
                  <span className='fw-semibold fz24'>N???p ti???n</span>
                </div>
              </div>
              <div className='grid-item'>
                <div className='d-flex align-items-center'>
                  <img src='/images/vendors/ic-line-chart.svg' alt='icon dollar' />
                  <span className='fw-semibold fz24'>B???ng gi??</span>
                </div>
              </div>
              <div className='grid-item'>
                <div className='d-flex align-items-center'>
                  <img src='/images/vendors/ic-smartphone.svg' alt='icon dollar' />
                  <span className='fw-semibold fz24'>
                    Giao d???ch <br />
                    Tr???c tuy???n
                  </span>
                </div>
              </div>
              <div className='grid-item'>
                <div className='d-flex align-items-center'>
                  <img src='/images/vendors/ic-flat.svg' alt='icon dollar' />
                  <span className='fw-semibold fz24'>
                    ???ng d???ng <br /> ??i???n tho???i
                  </span>
                </div>
              </div>
              <div className='grid-item'>
                <div className='d-flex align-items-center'>
                  <img src='/images/vendors/ic-headphone.svg' alt='icon dollar' />
                  <span className='fw-semibold fz24'>
                    B???n c???n <br /> H??? tr????
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='product'>
          <div className='container'>
            <h2 className='page-heading'>S???n ph???m - D???ch v??? </h2>

            <div className='owl-carousel owl-theme owl-product d-flex d-md-none'>
              <div className='item'>
                <div className='product-item box-shadow'>
                  <img src='/images/vendors/product1.jpeg' alt='product img' className='img-fluid' />
                  <h3>Ch???ng kho??n</h3>
                  <p>
                    V???i ph????ng ch??m nhanh nh???t, thu???n ti???n nh???t, hi???u qu??? nh???t, TVSI ?????u t?? h??? th???ng c??ng ngh??? hi???n ?????i
                    ph???c v??? kh??ch h??ng m???t c??ch t???t nh???t, t???i ??a l???i ??ch
                  </p>
                  <a href='#'>
                    T??m hi???u th??m
                    <img src='/images/vendors/ic-caret-product.svg' alt='caret product' />
                  </a>
                </div>
              </div>
              <div className='item'>
                <div className='product-item box-shadow'>
                  <img src='/images/vendors/product2.jpeg' alt='product img' className='img-fluid' />
                  <h3>Tr??i phi???u</h3>
                  <p>
                    S???n ph???m uy t??n & an to??n v???i l???i t???c c???nh tranh & h???p d???n. S???n ph???m linh ho???t, ??a d???ng, phong ph??.
                    Kh??ch h??ng ch??? ?????ng & d??? d??ng qu???n l??, giao d???ch qua h??? th???ng
                  </p>
                  <a href='#'>
                    T??m hi???u th??m
                    <img src='/images/vendors/ic-caret-product.svg' alt='caret product' />
                  </a>
                </div>
              </div>
              <div className='item'>
                <div className='product-item box-shadow'>
                  <img src='/images/vendors/product3.jpeg' alt='product img' className='img-fluid' />
                  <h3>Qu??? ?????u t??</h3>
                  <p>
                    B???n mu???n t??ch l??y ????? ?????m ba??o cho t????ng lai? T???? do ta??i chi??nh, kh??ng lo l????ng v???? ti????n ba??c? Ki???m so??t
                    chi ti??u khoa h???c? T???t c??? ?????u th???c hi???n ???????c qua b??? c??ng c??? c???a TVFM
                  </p>
                  <a href='#'>
                    T??m hi???u th??m
                    <img src='/images/vendors/ic-caret-product.svg' alt='caret product' />
                  </a>
                </div>
              </div>
            </div>
            <div className='row d-none d-md-flex justify-content-center justify-content-lg-between'>
              <div className='col-md-4'>
                <div className='product-item box-shadow'>
                  <img src='/images/vendors/product1.jpeg' alt='product img' className='img-fluid' />
                  <h3>Ch???ng kho??n</h3>
                  <p>
                    V???i ph????ng ch??m nhanh nh???t, thu???n ti???n nh???t, hi???u qu??? nh???t, TVSI ?????u t?? h??? th???ng c??ng ngh??? hi???n ?????i
                    ph???c v??? kh??ch h??ng m???t c??ch t???t nh???t, t???i ??a l???i ??ch
                  </p>
                  <a href='#'>
                    T??m hi???u th??m
                    <img src='/images/vendors/ic-caret-product.svg' alt='caret product' />
                  </a>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='product-item box-shadow'>
                  <img src='/images/vendors/product2.jpeg' alt='product img' className='img-fluid' />
                  <h3>Tr??i phi???u</h3>
                  <p>
                    S???n ph???m uy t??n & an to??n v???i l???i t???c c???nh tranh & h???p d???n. S???n ph???m linh ho???t, ??a d???ng, phong ph??.
                    Kh??ch h??ng ch??? ?????ng & d??? d??ng qu???n l??, giao d???ch qua h??? th???ng
                  </p>
                  <a href='#'>
                    T??m hi???u th??m
                    <img src='/images/vendors/ic-caret-product.svg' alt='caret product' />
                  </a>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='product-item box-shadow'>
                  <img src='/images/vendors/product3.jpeg' alt='product img' className='img-fluid' />
                  <h3>Qu??? ?????u t??</h3>
                  <p>
                    B???n mu???n t??ch l??y ????? ?????m ba??o cho t????ng lai? T???? do ta??i chi??nh, kh??ng lo l????ng v???? ti????n ba??c? Ki???m so??t
                    chi ti??u khoa h???c? T???t c??? ?????u th???c hi???n ???????c qua b??? c??ng c??? c???a TVFM
                  </p>
                  <a href='#'>
                    T??m hi???u th??m
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
              <h2 className='fw-bold'>C??u h???i th?????ng g???p</h2>
              <a
                href='#'
                className='text-primary d-none d-md-flex d-lg-none mb-3 fw-semibold align-items-center home-seemore'
              >
                Xem th??m <img src='/images/vendors/ic-seemore.svg' alt='ic-seemore' className='img-fluid' />
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
                    <span>Kh??ch h??ng c?? th??? giao d???ch tr???c tuy???n qua h??? th???ng n??o?</span>
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
                    <span>C?? th??? ?????t l???nh ngo??i gi??? cho ng??y giao d???ch k??? ti???p t??? l??c n??o?</span>
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
                      C?? th??? nh??? ng?????i kh??c mang S??? s??? h???u c??? ph???n ?????n TVSI ????? th???c hi???n th??? t???c l??u k?? kh??ng?
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
                    <span>H?????ng d???n l??u k?? ch???ng kho??n t???i TVSI</span>
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
                      T???i TVSI, Qu?? kh??ch c?? th??? giao d???ch tr???c tuy???n th??ng qua: webtrading iTrade Home, ???ng d???ng giao
                      d???ch tr???c tuy???n qua ??i???n tho???i TVSI Mobile, ???ng d???ng giao d???ch tr???c tuy???n qua m??y t??nh iTrade Pro.
                    </p>
                    <a href='#'>B???n c???n h??? tr??? th??m?</a>
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
                      T???i TVSI, Qu?? kh??ch c?? th??? giao d???ch tr???c tuy???n th??ng qua: webtrading iTrade Home, ???ng d???ng giao
                      d???ch tr???c tuy???n qua ??i???n tho???i TVSI Mobile, ???ng d???ng giao d???ch tr???c tuy???n qua m??y t??nh iTrade Pro.
                    </p>
                    <a href='#'>B???n c???n h??? tr??? th??m?</a>
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
                      T???i TVSI, Qu?? kh??ch c?? th??? giao d???ch tr???c tuy???n th??ng qua: webtrading iTrade Home, ???ng d???ng giao
                      d???ch tr???c tuy???n qua ??i???n tho???i TVSI Mobile, ???ng d???ng giao d???ch tr???c tuy???n qua m??y t??nh iTrade Pro.
                    </p>
                    <a href='#'>B???n c???n h??? tr??? th??m?</a>
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
                      T???i TVSI, Qu?? kh??ch c?? th??? giao d???ch tr???c tuy???n th??ng qua: webtrading iTrade Home, ???ng d???ng giao
                      d???ch tr???c tuy???n qua ??i???n tho???i TVSI Mobile, ???ng d???ng giao d???ch tr???c tuy???n qua m??y t??nh iTrade Pro.
                    </p>
                    <a href='#'>B???n c???n h??? tr??? th??m?</a>
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
                  <span>Kh??ch h??ng c?? th??? giao d???ch tr???c tuy???n qua h??? th???ng n??o?</span>
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
                    T???i TVSI, Qu?? kh??ch c?? th??? giao d???ch tr???c tuy???n th??ng qua: webtrading iTrade Home, ???ng d???ng giao
                    d???ch tr???c tuy???n qua ??i???n tho???i TVSI Mobile, ???ng d???ng giao d???ch tr???c tuy???n qua m??y t??nh iTrade Pro.
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
                  <span>C?? th??? ?????t l???nh ngo??i gi??? cho ng??y giao d???ch k??? ti???p t??? l??c n??o?</span>
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
                    T???i TVSI, Qu?? kh??ch c?? th??? giao d???ch tr???c tuy???n th??ng qua: webtrading iTrade Home, ???ng d???ng giao
                    d???ch tr???c tuy???n qua ??i???n tho???i TVSI Mobile, ???ng d???ng giao d???ch tr???c tuy???n qua m??y t??nh iTrade Pro.
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
                  <span>C?? th??? nh??? ng?????i kh??c mang S??? s??? h???u c??? ph???n ?????n TVSI ????? th???c hi???n th??? t???c l??u k?? kh??ng?</span>
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
                    T???i TVSI, Qu?? kh??ch c?? th??? giao d???ch tr???c tuy???n th??ng qua: webtrading iTrade Home, ???ng d???ng giao
                    d???ch tr???c tuy???n qua ??i???n tho???i TVSI Mobile, ???ng d???ng giao d???ch tr???c tuy???n qua m??y t??nh iTrade Pro.
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
                  <span>H?????ng d???n l??u k?? ch???ng kho??n t???i TVSI</span>
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
                    T???i TVSI, Qu?? kh??ch c?? th??? giao d???ch tr???c tuy???n th??ng qua: webtrading iTrade Home, ???ng d???ng giao
                    d???ch tr???c tuy???n qua ??i???n tho???i TVSI Mobile, ???ng d???ng giao d???ch tr???c tuy???n qua m??y t??nh iTrade Pro.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a href='#' className='d-flex justify-content-end'>
            B???n c???n h??? tr??? th??m?
          </a>
        </div>
        <div className='ifin'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-xl-3'>
                <div className='ifin-left'>
                  <h2 className='fw-bold'>iFin</h2>

                  <p>
                    L?? h??? th???ng d??? li???u, tin t???c v?? b??o c??o ph??n t??ch c???p nh???t ch??nh x??c t???i t???ng gi??y. TVSI t??? tin cung
                    c???p t???i kh??ch h??ng n???n t???ng ph??n t??ch v???ng ch???c, chuy??n s??u.
                  </p>
                </div>
              </div>
              <div className='col-xl-9'>
                <div className='d-flex ifin-right'>
                  <div className='ifin-item'>
                    <span className='number'>01</span>
                    <h3>Th??ng tin ?????nh l?????ng nhanh</h3>
                    <p>S??? li???u c???p nh???t li??n t???c theo th??? tr?????ng</p>
                    <a href='#' className='btn-seemore'>
                      <span>T??m hi???u th??m </span>
                      <img src='/images/vendors/ic-caret-ifin.svg' alt='caret ifin' />
                    </a>
                  </div>
                  <div className='ifin-item'>
                    <span className='number'>02</span>
                    <h3>Th??ng tin ?????nh t??nh ch??nh x??c</h3>
                    <p>Tin t???c c???p nh???t ??a d???ng, ch??nh x??c</p>
                    <a href='#' className='btn-seemore'>
                      <span>T??m hi???u th??m </span>
                      <img src='/images/vendors/ic-caret-ifin.svg' alt='caret ifin' />
                    </a>
                  </div>
                  <div className='ifin-item'>
                    <span className='number'>03</span>
                    <h3>Khuy???n ngh??? ch???t l?????ng cao</h3>
                    <p>Nh???n ?????nh v?? khuy???n ngh??? theo chuy??n gia v?? h??? th???ng IRA</p>
                    <a href='#' className='btn-seemore'>
                      <span>T??m hi???u th??m </span>
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
            <h2 className='fw-bold'>Tin t???c n???i b???t</h2>

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
                          Th??ng b??o m?? ch???ng kho??n TVC kh??ng ????? ??i???u ki???n ch???ng kho??n ???????c l??m TS??B t???i TVSI
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
                          <a href='#'>TVSI t???ng xe ?????p cho h???c sinh ngh??o v??ng bi??n c????ng</a>
                        </h5>
                        <p>
                          <span>TVSI V?? c???ng ?????ng</span> | 18/05/2022
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
                            CEO TVSI: Kinh doanh l?? lu??n trong t??m th??? s???n s??ng ??????ng ?????u v???i th??? th??ch (??TCK)
                          </a>
                        </h5>
                        <p>
                          <span>TVSI v???i b??o ch??</span> | 07/02/2022
                        </p>
                      </div>
                    </a>
                  </div>
                  <div className='home-news-item'>
                    <a href='#' className='d-block img-wrap'>
                      <img src='/images/vendors/home-news3.jpeg' alt='home news img' className='img-fluid' />
                      <div className='content-wrap'>
                        <h5 className='fw-bold'>
                          <a href='#'>TVSI trao t???ng h??n 3.000 kh???u trang 3M t???i B???nh vi???n H???u ngh??? Vi???t ?????c</a>
                        </h5>
                        <p>
                          <span>TVSI V?? c???ng ?????ng</span> | 22/08/2022
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex d-md-none justify-content-end'>
              <a href='#' className='text-primary fw-semibold d-flex align-items-center home-seemore'>
                Xem th??m <img src='/images/vendors/ic-seemore.svg' alt='ic-seemore' className='img-fluid' />
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
  //           <CardButton title='N???p ti???n' iconUrl='/images/icons/nop-tien.svg' redirectUrl='/'></CardButton>
  //           <CardButton title='B???ng gi??' iconUrl='/images/icons/bang-gia.svg' redirectUrl='/'></CardButton>
  //           <CardButton title='Giao d???ch tr???c tuy???n' iconUrl='/images/icons/gdtt.svg' redirectUrl='/'></CardButton>
  //           <CardButton title='???ng d???ng ??i???n tho???i' iconUrl='/images/icons/uddt.svg' redirectUrl='/'></CardButton>
  //           <CardButton title='B???n c???n h??? tr???' iconUrl='/images/icons/bcht.svg' redirectUrl='/'></CardButton>
  //       </div>
  //   </KeenSliderWrapper>
  //     <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '78.5%', margin: '0 auto', gap: '90px', zIndex: 0}}>
  //         <h2 style={{fontWeight: '700',
  //             fontSize: '48px',
  //             lineHeight: '65px'
  //         }}>
  //             S???n ph???m - D???ch v???
  //         </h2>
  //         <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
  //             <CardElevated redirectUrl="#" style={{width: '30%', alignItems: 'center'}} imgSrc='/images/stock.png' title='Ch???ng kho??n' text='V???i ph????ng ch??m nhanh nh???t, thu???n ti???n nh???t, hi???u qu??? nh???t, TVSI ?????u t?? h??? th???ng c??ng ngh??? hi???n ?????i ph???c v??? kh??ch h??ng m???t c??ch t???t nh???t, t???i ??a l???i ??ch'/>
  //             <CardElevated redirectUrl="#" style={{width: '30%', alignItems: 'center'}} imgSrc='/images/bond.png' title='Tr??i phi???u' text='S???n ph???m uy t??n & an to??n v???i l???i t???c c???nh tranh & h???p d???n. S???n ph???m linh ho???t, ??a d???ng, phong ph??. Kh??ch h??ng ch??? ?????ng & d??? d??ng qu???n l??, giao d???ch qua h??? th???ng'/>
  //             <CardElevated redirectUrl="#" style={{width: '30%', alignItems: 'center'}} imgSrc='/images/fund.png' title='Qu??? ?????u t??' text='B???n mu???n t??ch l??y ????? ?????m ba??o cho t????ng lai? T???? do ta??i chi??nh, kh??ng lo l????ng v???? ti????n ba??c? Ki???m so??t chi ti??u khoa h???c? T???t c??? ?????u th???c hi???n ???????c qua b??? c??ng c??? c???a TVFM'/>
  //         </div>
  //     </div>
  //     <div style={{maxWidth: '78.5%', margin: '0 auto'}}>
  //         <h2>C??u h???i th?????ng g???p</h2>
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
  //                 <p>T???i TVSI, Qu?? kh??ch c?? th??? giao d???ch tr???c tuy???n th??ng qua: webtrading iTrade Home, ???ng d???ng giao d???ch tr???c tuy???n qua ??i???n tho???i TVSI Mobile, ???ng d???ng giao d???ch tr???c tuy???n qua m??y t??nh iTrade Pro.</p>
  //                 <Link href="#"><a style={{color: "#fff"}}>B???n c???n h??? tr??? th??m?</a></Link>
  //             </Paper>
  //         </div>
  //     </div>
  //     <div style={{display: 'flex', width: '78.5%', margin: '50px auto 0', height: '400px', justifyContent: 'space-between'}}>
  //         <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', flexBasis: '22.7%'}}>
  //             <h2>iFin</h2>
  //             <p>L?? h??? th???ng d??? li???u, tin t???c v?? b??o c??o ph??n t??ch c???p nh???t ch??nh x??c t???i t???ng gi??y. TVSI t??? tin cung c???p t???i kh??ch h??ng n???n t???ng ph??n t??ch v???ng ch???c, chuy??n s??u.</p>
  //         </div>
  //         <div style={{display: 'flex', justifyContent: 'space-between', height: '400px', flexBasis: '75%'}}>
  //             <IFinCard redirectUrl="#" order="01" title="Th??ng tin ?????nh l?????ng nhanh" text="S??? li???u c???p nh???t li??n t???c theo th??? tr?????ng"/>
  //             <IFinCard redirectUrl="#" order="02" title="Th??ng tin ?????nh t??nh ch??nh x??c" text="Tin t???c c???p nh???t ??a d???ng, ch??nh x??c"/>
  //             <IFinCard redirectUrl="#" order="03" title="Khuy???n ngh??? ch???t l?????ng cao" text="Nh???n ?????nh v?? khuy???n ngh??? theo chuy??n gia v?? h??? th???ng IRA"/>
  //         </div>
  //     </div>
  //     <div style={{width: '78.5%', margin: '0 auto'}}>
  //         <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
  //             <h2>Tin t???c n???i b???t</h2>
  //             <Link href="/news/category">
  //                 <a style={{color: "#D2353B"}}>Xem th??m</a>
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
  //                         <h3>Th??ng b??o m?? ch???ng kho??n TVC kh??ng ????? ??i???u ki???n ch???ng kho??n ???????c l??m TS??B t???i TVSI</h3>
  //                         <span style={{borderRight: "1px solid white", paddingRight: '10px'}}>Tin TVSI</span>
  //                         <span style={{marginLeft: '10px'}}>22/08/2022</span>
  //                 </div>
  //             </Link>
  //             <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '48%'}}>
  //                 <NewsCard RedirectUrl="#" Title="TVSI t???ng xe ?????p cho h???c sinh ngh??o v??ng bi??n c????ng" CategoryName="TVSI V?? c???ng ?????ng" CreatedDate="18/05/2022" displayType={NewsDisplayType.HOME}></NewsCard>
  //                 <NewsCard RedirectUrl="#" Title="CEO TVSI: Kinh doanh l?? lu??n trong t??m th??? s???n s??ng ??????ng ?????u v???i th??? th??ch (??TCK)" CategoryName="TVSI v???i b??o ch??" CreatedDate="18/05/2022" displayType={NewsDisplayType.HOME}></NewsCard>
  //                 <NewsCard RedirectUrl="#" Title="TVSI trao t???ng h??n 3.000 kh???u trang 3M t???i B???nh vi???n H???u ngh??? Vi???t ?????c" CategoryName="TVSI V?? c???ng ?????ng" CreatedDate="18/05/2022" displayType={NewsDisplayType.HOME}></NewsCard>
  //             </div>
  //         </div>
  //     </div>
  // </>)
}

export default Demo
