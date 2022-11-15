import KeenSliderWrapper from "src/@core/styles/libs/keen-slider"
import SwiperAutoSwitch from "../swiper/SwiperAutoSwitch"
import SwiperCentered from "../swiper/SwiperCentered"
import SwiperControls from "../swiper/SwiperControls"
import SwiperDefault from "../swiper/SwiperDefault"
import SwiperFader from "../swiper/SwiperFader"
import SwiperFreeMode from "../swiper/SwiperFreeMode"
import SwiperLoop from "../swiper/SwiperLoop"
import SwiperMutationObserver from "../swiper/SwiperMutationObserver"
import MilestoneTimeline from "./MilestoneTimeline"

const Milestone = () => {
  return (
    <div
      className='tab-pane fade show active'
      id='pills-development'
      role='tabpanel'
      aria-labelledby='pills-development-tab'
      tabIndex={0}
    >
      <div className='tab-development'>
        <h2 className='text-center fw-bold text-about'>
          Những mốc son trong <br className='d-none d-lg-block' />
        </h2>
        <div className='journey'>
          <KeenSliderWrapper>
            <MilestoneTimeline />
          </KeenSliderWrapper>
          
        </div>
        <div className='award'>
          <h2 className='text-center fw-bold text-about'>Giải thưởng & Thành tựu</h2>

          <div className='row justify-content-center'>
            <div className='col-md-6 col-xl-3'>
              <div className='box-shadow award-item'>
                <div className='text-lg-center award-img'>
                  <img src='/images/vendors/award1.jpeg' alt='award img' className='img-fluid' />
                  <h4>2020</h4>
                </div>
                <div className='text-lg-center award-content'>
                  <p>
                    Công ty chứng khoán quản trị doanh nghiệp hiệu quả nhất Việt Nam 2020 (Best Corporate Governance
                    Brokerage Firm - Vietnam 2020)
                  </p>
                  <p className='mb-0'>Công ty chứng khoán thành viên tiêu biểu của HNX năm 2020</p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-xl-3'>
              <div className='box-shadow award-item'>
                <div className='text-lg-center award-img'>
                  <img src='/images/vendors/award2.jpeg' alt='award img' className='img-fluid' />
                  <h4>2019</h4>
                </div>
                <div className='text-lg-center award-content'>
                  <p>TOP 500 Công ty lợi nhuận tốt nhất Việt Nam</p>
                  <p className='mb-0'>Thành viên chứng khoán tích cực năm 2018 - 2019</p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-xl-3'>
              <div className='box-shadow award-item'>
                <div className='text-lg-center award-img'>
                  <img src='/images/vendors/award3.jpeg' alt='award img' className='img-fluid' />
                  <h4>2018</h4>
                </div>
                <div className='text-lg-center award-content'>
                  <p>Mạng lưới môi giới phát triển nhanh nhất Việt Nam</p>
                  <p className='mb-0'>TOP 500 Công ty lợi nhuận tốt nhất Việt Nam</p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-xl-3'>
              <div className='box-shadow award-item'>
                <div className='text-lg-center award-img'>
                  <img src='/images/vendors/award4.jpeg' alt='award img' className='img-fluid' />
                  <h4>2017</h4>
                </div>
                <div className='text-lg-center award-content'>
                  <p className='mb-0'>Giải thưởng sản phẩm giao dịch chứng khoán ký quỹ tốt nhất Việt Nam</p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-xl-3'>
              <div className='box-shadow award-item'>
                <div className='text-lg-center award-img'>
                  <img src='/images/vendors/award5.jpeg' alt='award img' className='img-fluid' />
                  <h4>2010</h4>
                </div>
                <div className='text-lg-center award-content'>
                  <p className='mb-0'>Hệ thống giao dịch chứng khoán trực tuyến tốt nhất Việt Nam</p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-xl-3'>
              <div className='box-shadow award-item'>
                <div className='text-lg-center award-img'>
                  <img src='/images/vendors/award6.jpeg' alt='award img' className='img-fluid' />
                  <h4>2011</h4>
                </div>
                <div className='text-lg-center award-content'>
                  <p className='mb-0'>Giao dịch trực tuyến tốt nhất</p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-xl-3'>
              <div className='box-shadow award-item'>
                <div className='text-lg-center award-img'>
                  <img src='/images/vendors/award7.jpeg' alt='award img' className='img-fluid' />
                  <h4>2010</h4>
                </div>
                <div className='text-lg-center award-content'>
                  <p>Thương hiệu chứng khoán uy tín</p>
                  <p className='mb-0'>TOP 500 Doanh nghiệp tư nhân lớn nhất Việt Nam</p>
                </div>
              </div>
            </div>
          </div>
          <div className='award-seemore'>
            <a href='#'>
              <img src='/images/vendors/ic-caret-seemore.svg' alt='ic-caret-seemore' className='img-fluid' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Milestone
