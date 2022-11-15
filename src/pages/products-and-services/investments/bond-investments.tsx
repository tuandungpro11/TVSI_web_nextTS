import { current } from '@reduxjs/toolkit'
import clsx from 'clsx'
import { useKeenSlider } from 'keen-slider/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'

const BondInvestments = () => {
  const [loadedSlider, setLoadedSlider] = useState<boolean>(false)
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [currentMobileSlide, setCurrentMobileSlide] = useState<number>(0)
  const [sliderRef, instanceSliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      origin: 'center',
      perView: 1
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoadedSlider(true)
    },
    breakpoints: {
      '(min-width: 576px)': {
        slides: {
          origin: 'center',
          perView: 1
        }
      }
    }
  })
  const [sliderMobileRef, instanceSliderMobileRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      origin: 'center',
      perView: 1
    },
    slideChanged(slider) {
      setCurrentMobileSlide(slider.track.details.rel)
    },
    created() {
      setLoadedSlider(true)
    }
  })
  const [tabIndex, setTabIndex] = useState(0)
  const handleAccordionClick = (index: number) => {
    if (index === tabIndex) setTabIndex(-1)
    else setTabIndex(index)
  }

  return (
    <main>
      <section className='stock-investment'>
        <section className='page-breadcrumb page-breadcrumb-stock-investment'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col'>
                <h2 className='text-breadcrumb'>Trái phiếu</h2>
                <nav aria-label='breadcrumb'>
                  <ol className='breadcrumb text-uppercase text-white'>
                    <li className='breadcrumb-item'>
                      <Link href='/demo'>
                        <a>TRANG CHỦ</a>
                      </Link>
                    </li>
                    <li className='breadcrumb-item'>SẢN PHẨM & DỊCH VỤ</li>
                    <li className='breadcrumb-item'>ĐẦU TƯ</li>
                    <li className='breadcrumb-item' aria-current='page'>
                      TRÁI PHIẾU
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <div className='main-content'>
          <div className='container'>
            <div className='channel-investment bond-investment'>
              <h3 className='text-center text-intro'>Đầu tư trái phiếu</h3>
              <h4 className='text-center text-intro-big'>Kênh đầu tư an toàn tại TVSI</h4>
              <div className='row'>
                <div className='col-lg-4'>
                  <div className='channel-investment-item'>
                    <h3>
                      Đầu tư an toàn <br /> hiệu quả
                    </h3>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='channel-investment-item'>
                    <h3>
                      Lợi tức đầu tư <br />
                      hấp dẫn
                    </h3>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='channel-investment-item'>
                    <h3>
                      Sản phẩm đa dạng <br />
                      linh hoạt
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className='bond-broker box-shadow'>
              <h2 className='text-center text-primary fw-bold'>Nhà môi giới trái phiếu hàng đầu thị trường</h2>

              <div className='row'>
                <div className='col-lg-6'>
                  <div className='bond-broker-item'>
                    <span className='fw-bold'>TOP 2</span>
                    <h4 className='fw-bold'>
                      Thị phần môi giới <br />
                      Trái phiếu HOSE Quý 4/2021
                    </h4>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='bond-broker-item justify-content-lg-end has-border'>
                    <span className='fw-bold'>TOP 3</span>
                    <h4 className='fw-bold'>
                      Thị phần môi giới <br />
                      Trái phiếu năm 2021
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className='guide-bond'>
              <h2 className='fw-bold text-center'>Hướng dẫn giao dịch trái phiếu</h2>

              <picture>
                <source media='(max-width: 576px)' srcSet='/images/vendors/guide-bond-img-mb.png' />
                <source media='(min-width: 577px)' srcSet='/images/vendors/guide-bond-img.png' />
                <img
                  src='/images/vendors/guide-bond-img.png'
                  alt='guide-bond-img'
                  className='img-fluid d-block mx-auto'
                />
              </picture>
            </div>
            <div className='guide-bond'>
              <h2 className='fw-bold text-center'>Danh mục trái phiếu TVSI đang phân phối</h2>
              <div id='carouselBondThumb' className='carousel slide' data-bs-ride='false'>
                <div className='carousel-indicators d-flex d-sm-none'>
                  <button
                    type='button'
                    data-bs-target='#carouselBondThumb'
                    data-bs-slide-to='0'
                    className='active'
                    aria-current='true'
                    aria-label='Slide 1'
                  ></button>
                  <button
                    type='button'
                    data-bs-target='#carouselBondThumb'
                    data-bs-slide-to='1'
                    aria-label='Slide 2'
                  ></button>
                  <button
                    type='button'
                    data-bs-target='#carouselBondThumb'
                    data-bs-slide-to='2'
                    aria-label='Slide 3'
                  ></button>
                </div>
                <KeenSliderWrapper>
                  <div className='carousel-inner carousel-inner-pc keen-slider' ref={sliderRef}>
                    <div className={clsx('keen-slider__slide', {'active': currentSlide === 0})}>
                      <div className='wrap-img'>
                        <div className='item'>
                          <img src='/images/vendors/bond1.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond2.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond3.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond4.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond5.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond6.png' alt='bond img' className='img-fluid' />
                        </div>
                      </div>
                    </div>
                    <div className={clsx('keen-slider__slide', {'active': currentSlide === 1})}>
                      <div className='wrap-img'>
                        <div className='item'>
                          <img src='/images/vendors/bond1.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond2.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond3.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond4.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond5.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond6.png' alt='bond img' className='img-fluid' />
                        </div>
                      </div>
                    </div>
                    <div className={clsx('keen-slider__slide', {'active': currentSlide === 2})}>
                      <div className='wrap-img'>
                        <div className='item'>
                          <img src='/images/vendors/bond1.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond2.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond3.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond4.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond5.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond6.png' alt='bond img' className='img-fluid' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='carousel-inner carousel-inner-mobile keen-slider' ref={sliderMobileRef}>
                    <div className={clsx('keen-slider__slide', {'active': currentMobileSlide === 0})}>
                      <div className='wrap-img'>
                        <div className='item'>
                          <img src='/images/vendors/bond1.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond2.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond3.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond4.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond5.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond6.png' alt='bond img' className='img-fluid' />
                        </div>
                      </div>
                    </div>
                    <div className={clsx('keen-slider__slide', {'active': currentMobileSlide === 1})}>
                      <div className='wrap-img'>
                        <div className='item'>
                          <img src='/images/vendors/bond1.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond2.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond3.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond4.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond5.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond6.png' alt='bond img' className='img-fluid' />
                        </div>
                      </div>
                    </div>
                    <div className={clsx('keen-slider__slide', {'active': currentMobileSlide === 2})}>
                      <div className='wrap-img'>
                        <div className='item'>
                          <img src='/images/vendors/bond1.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond2.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond3.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond4.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond5.png' alt='bond img' className='img-fluid' />
                        </div>
                        <div className='item'>
                          <img src='/images/vendors/bond6.png' alt='bond img' className='img-fluid' />
                        </div>
                      </div>
                    </div>
                  </div>
                </KeenSliderWrapper>
                {loadedSlider && instanceSliderRef.current && (
                  <button
                    className='arrow arrow-left carousel-control-prev d-none d-sm-block'
                    onClick={(e: any) => e.stopPropagation() || instanceSliderRef.current?.prev()}
                  >
                    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Previous</span>
                  </button>
                )}
                {loadedSlider && instanceSliderRef.current && (
                  <button
                    className='arrow arrow-right carousel-control-next d-none d-sm-block'
                    onClick={(e: any) => e.stopPropagation() || instanceSliderRef.current?.next()}
                  >
                    <span className='carousel-control-next-icon' aria-hidden='true'></span>
                    <span className='visually-hidden'>Next</span>
                  </button>
                )}
              </div>
            </div>
            <div className='bond-term'>
              <h2 className='text-center fw-bold'>Một số thuật ngữ cơ bản về trái phiếu</h2>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='accordion' id='accordionBondTerm'>
                    <div className='accordion-item'>
                      <h2 className='accordion-header' id='headingOne'>
                        <button
                          className={clsx('accordion-button', { 'collapsed': tabIndex !== 0 })}
                          onClick={() => handleAccordionClick(0)}
                        >
                          Trái phiếu doanh nghiệp là gì?
                        </button>
                      </h2>

                      <div
                        id='collapseOne'
                        className={clsx('accordion-collapse collapse', { 'show': tabIndex === 0 })}
                        aria-labelledby='headingOne'
                        data-bs-parent='#accordionBondTerm'
                      >
                        <div className='accordion-body'>
                          <p>
                            + Trái phiếu doanh nghiệp là sản phẩm tài chính được phát hành để huy động vốn từ nhà đầu
                            tư. Người sở hữu trái phiếu có quyền hưởng lãi suất được quy định trên trái phiếu và hoàn
                            lại số vốn đầu tư ban đầu khi đến kỳ đáo hạn.
                          </p>
                          <p>+ Trái Phiếu doanh nghiệp là một loại chứng khoán và có thể chuyển nhượng.</p>
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item'>
                      <h2 className='accordion-header' id='headingTwo'>
                        <button
                          className={clsx('accordion-button', { 'collapsed': tabIndex !== 1 })}
                          onClick={() => handleAccordionClick(1)}
                        >
                          Tổ chức phát hành
                        </button>
                      </h2>

                      <div
                        id='collapseTwo'
                        className={clsx('accordion-collapse collapse', { 'show': tabIndex === 1 })}
                        aria-labelledby='headingTwo'
                        data-bs-parent='#accordionBondTerm'
                      >
                        <div className='accordion-body'>
                          <p>
                            + Trái phiếu doanh nghiệp là sản phẩm tài chính được phát hành để huy động vốn từ nhà đầu
                            tư. Người sở hữu trái phiếu có quyền hưởng lãi suất được quy định trên trái phiếu và hoàn
                            lại số vốn đầu tư ban đầu khi đến kỳ đáo hạn.
                          </p>
                          <p>+ Trái Phiếu doanh nghiệp là một loại chứng khoán và có thể chuyển nhượng.</p>
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item'>
                      <h2 className='accordion-header' id='headingThree'>
                        <button
                          className={clsx('accordion-button', { 'collapsed': tabIndex !== 2 })}
                          onClick={() => handleAccordionClick(2)}
                        >
                          Ngày đáo hạn
                        </button>
                      </h2>

                      <div
                        id='collapseThree'
                        className={clsx('accordion-collapse collapse', { 'show': tabIndex === 2 })}
                        aria-labelledby='headingThree'
                        data-bs-parent='#accordionBondTerm'
                      >
                        <div className='accordion-body'>
                          <p>
                            + Trái phiếu doanh nghiệp là sản phẩm tài chính được phát hành để huy động vốn từ nhà đầu
                            tư. Người sở hữu trái phiếu có quyền hưởng lãi suất được quy định trên trái phiếu và hoàn
                            lại số vốn đầu tư ban đầu khi đến kỳ đáo hạn.
                          </p>
                          <p>+ Trái Phiếu doanh nghiệp là một loại chứng khoán và có thể chuyển nhượng.</p>
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item'>
                      <h2 className='accordion-header' id='headingFour'>
                        <button
                          className={clsx('accordion-button', { 'collapsed': tabIndex !== 3 })}
                          onClick={() => handleAccordionClick(3)}
                        >
                          Kỳ trả lãi
                        </button>
                      </h2>

                      <div
                        id='collapseFour'
                        className={clsx('accordion-collapse collapse', { 'show': tabIndex === 3 })}
                      >
                        <div className='accordion-body'>
                          <p>
                            + Trái phiếu doanh nghiệp là sản phẩm tài chính được phát hành để huy động vốn từ nhà đầu
                            tư. Người sở hữu trái phiếu có quyền hưởng lãi suất được quy định trên trái phiếu và hoàn
                            lại số vốn đầu tư ban đầu khi đến kỳ đáo hạn.
                          </p>
                          <p>+ Trái Phiếu doanh nghiệp là một loại chứng khoán và có thể chuyển nhượng.</p>
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item'>
                      <h2 className='accordion-header' id='headingFive'>
                        <button
                          className={clsx('accordion-button', { 'collapsed': tabIndex !== 4 })}
                          onClick={() => handleAccordionClick(4)}
                        >
                          Coupon/Trái tức
                        </button>
                      </h2>

                      <div
                        id='collapseFive'
                        className={clsx('accordion-collapse collapse', { 'show': tabIndex === 4 })}
                      >
                        <div className='accordion-body'>
                          <p>
                            + Trái phiếu doanh nghiệp là sản phẩm tài chính được phát hành để huy động vốn từ nhà đầu
                            tư. Người sở hữu trái phiếu có quyền hưởng lãi suất được quy định trên trái phiếu và hoàn
                            lại số vốn đầu tư ban đầu khi đến kỳ đáo hạn.
                          </p>
                          <p>+ Trái Phiếu doanh nghiệp là một loại chứng khoán và có thể chuyển nhượng.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='accordion' id='accordionBondTermRight'>
                    <div className='accordion-item'>
                      <h2 className='accordion-header' id='headingSix'>
                        <button
                          className={clsx('accordion-button', { 'collapsed': tabIndex !== 5 })}
                          onClick={() => handleAccordionClick(5)}
                        >
                          Bản cáo hạch/Công bố thông tin
                        </button>
                      </h2>

                      <div
                        id='collapseSix'
                        className={clsx('accordion-collapse collapse', { 'show': tabIndex === 5 })}
                      >
                        <div className='accordion-body'>
                          <p>
                            + Trái phiếu doanh nghiệp là sản phẩm tài chính được phát hành để huy động vốn từ nhà đầu
                            tư. Người sở hữu trái phiếu có quyền hưởng lãi suất được quy định trên trái phiếu và hoàn
                            lại số vốn đầu tư ban đầu khi đến kỳ đáo hạn.
                          </p>
                          <p>+ Trái Phiếu doanh nghiệp là một loại chứng khoán và có thể chuyển nhượng.</p>
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item'>
                      <h2 className='accordion-header' id='headingSeven'>
                        <button
                          className={clsx('accordion-button', { 'collapsed': tabIndex !== 6 })}
                          onClick={() => handleAccordionClick(6)}
                        >
                          Trái phiếu có tài sản đảm bảo
                        </button>
                      </h2>

                      <div
                        id='collapseSeven'
                        className={clsx('accordion-collapse collapse', { 'show': tabIndex === 6 })}
                      >
                        <div className='accordion-body'>
                          <p>
                            + Trái phiếu doanh nghiệp là sản phẩm tài chính được phát hành để huy động vốn từ nhà đầu
                            tư. Người sở hữu trái phiếu có quyền hưởng lãi suất được quy định trên trái phiếu và hoàn
                            lại số vốn đầu tư ban đầu khi đến kỳ đáo hạn.
                          </p>
                          <p>+ Trái Phiếu doanh nghiệp là một loại chứng khoán và có thể chuyển nhượng.</p>
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item'>
                      <h2 className='accordion-header' id='headingEight'>
                        <button
                          className={clsx('accordion-button', { 'collapsed': tabIndex !== 7 })}
                          onClick={() => handleAccordionClick(7)}
                        >
                          Bảo lãnh thanh toán
                        </button>
                      </h2>

                      <div
                        id='collapseEight'
                        className={clsx('accordion-collapse collapse', { 'show': tabIndex === 7 })}
                      >
                        <div className='accordion-body'>
                          <p>
                            + Trái phiếu doanh nghiệp là sản phẩm tài chính được phát hành để huy động vốn từ nhà đầu
                            tư. Người sở hữu trái phiếu có quyền hưởng lãi suất được quy định trên trái phiếu và hoàn
                            lại số vốn đầu tư ban đầu khi đến kỳ đáo hạn.
                          </p>
                          <p>+ Trái Phiếu doanh nghiệp là một loại chứng khoán và có thể chuyển nhượng.</p>
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item'>
                      <h2 className='accordion-header' id='headingNine'>
                        <button
                          className={clsx('accordion-button', { 'collapsed': tabIndex !== 8 })}
                          onClick={() => handleAccordionClick(8)}
                        >
                          Tổ chức tư vấn phát hành
                        </button>
                      </h2>

                      <div
                        id='collapseNine'
                        className={clsx('accordion-collapse collapse', { 'show': tabIndex === 8 })}
                      >
                        <div className='accordion-body'>
                          <p>
                            + Trái phiếu doanh nghiệp là sản phẩm tài chính được phát hành để huy động vốn từ nhà đầu
                            tư. Người sở hữu trái phiếu có quyền hưởng lãi suất được quy định trên trái phiếu và hoàn
                            lại số vốn đầu tư ban đầu khi đến kỳ đáo hạn.
                          </p>
                          <p>+ Trái Phiếu doanh nghiệp là một loại chứng khoán và có thể chuyển nhượng.</p>
                        </div>
                      </div>
                    </div>
                    <div className='accordion-item'>
                      <h2 className='accordion-header' id='headingTen'>
                        <button
                          className={clsx('accordion-button', { 'collapsed': tabIndex !== 9 })}
                          onClick={() => handleAccordionClick(9)}
                        >
                          Đại lý quản lý TSBĐ
                        </button>
                      </h2>

                      <div
                        id='collapseTen'
                        className={clsx('accordion-collapse collapse', { 'show': tabIndex === 9 })}
                      >
                        <div className='accordion-body'>
                          <p>
                            + Trái phiếu doanh nghiệp là sản phẩm tài chính được phát hành để huy động vốn từ nhà đầu
                            tư. Người sở hữu trái phiếu có quyền hưởng lãi suất được quy định trên trái phiếu và hoàn
                            lại số vốn đầu tư ban đầu khi đến kỳ đáo hạn.
                          </p>
                          <p>+ Trái Phiếu doanh nghiệp là một loại chứng khoán và có thể chuyển nhượng.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='guide-investment'>
              <div className='guide-investment-item'>
                <div className='icon'>
                  <img src='/images/vendors/ic-paper.svg' alt='ic-paper' className='img-fluid' />
                </div>
                <h3 className='fw-bold'>
                  <a href='#'>
                    Hướng dẫn <br />
                    Giao dịch trái phiếu
                  </a>
                </h3>
              </div>
              <div className='guide-investment-item'>
                <div className='icon'>
                  <img src='/images/vendors/ic-user-plus.svg' alt='ic-user-plus' className='img-fluid' />
                </div>
                <h3 className='fw-bold'>
                  <a href='#'>
                    Giao dịch <br />
                    trực tuyến
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default BondInvestments
