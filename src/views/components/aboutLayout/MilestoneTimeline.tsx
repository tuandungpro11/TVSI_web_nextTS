import clsx from 'clsx'
import { useKeenSlider } from 'keen-slider/react'
import { useEffect, useState } from 'react'

const MilestoneTimeline = () => {
  const [loadedTimeline, setLoadedTimeline] = useState<boolean>(false)
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [timelineRef, instanceTimelineRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      origin: 'center',
      perView: 3
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
      instanceContentSliderRef.current?.moveToIdx(slider.track.details.rel)
    },
    created() {
      setLoadedTimeline(true)
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
  const [contentSliderRef, instanceContentSliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      origin: 'center',
      perView: 1
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
      if (instanceTimelineRef.current?.track.details.rel !== slider.track.details.rel)
        instanceTimelineRef.current?.moveToIdx(slider.track.details.rel)
    },
    created() {
      setLoadedTimeline(true)
    }
  })

  return (
    <>
      <div className='journey-wrapper'>
        {loadedTimeline && instanceTimelineRef.current && (
          <button
            className={clsx('arrow arrow-left slick-prev slick-arrow', {
              'arrow-disabled': currentSlide === 0
            })}
            onClick={(e: any) => {
              e.stopPropagation()
              instanceTimelineRef.current?.prev()
              instanceContentSliderRef.current?.prev()
            }}
          />
        )}
        <div className='journey-bar'>
          <div className='keen-slider slick-list' style={{ minHeight: 150 }} ref={timelineRef}>
            <div
              className={clsx('journey-bar-bullet keen-slider__slide', {
                'slick-current': currentSlide === 0
              })}
            >
              <span>2018</span>
            </div>
            <div
              className={clsx('journey-bar-bullet keen-slider__slide', {
                'slick-current': currentSlide === 1
              })}
            >
              <span>2019</span>
            </div>
            <div
              className={clsx('journey-bar-bullet keen-slider__slide', {
                'slick-current': currentSlide === 2
              })}
            >
              <span>2020</span>
            </div>
            <div
              className={clsx('journey-bar-bullet keen-slider__slide', {
                'slick-current': currentSlide === 3
              })}
            >
              <span>2021</span>
            </div>
            <div
              className={clsx('journey-bar-bullet keen-slider__slide', {
                'slick-current': currentSlide === 4
              })}
            >
              <span>2022</span>
            </div>
            <div
              className={clsx('journey-bar-bullet keen-slider__slide', {
                'slick-current': currentSlide === 5
              })}
            >
              <span>2016</span>
            </div>
            <div
              className={clsx('journey-bar-bullet keen-slider__slide', {
                'slick-current': currentSlide === 6
              })}
            >
              <span>2017</span>
            </div>
          </div>
        </div>
        {loadedTimeline && instanceTimelineRef.current && (
          <button
            className={clsx('arrow arrow-right slick-next slick-arrow', {
              'arrow-disabled': currentSlide === instanceTimelineRef.current.track.details.slides.length - 1
            })}
            onClick={(e: any) => {
              e.stopPropagation()
              instanceTimelineRef.current?.next()
              instanceContentSliderRef.current?.next()
            }}
          />
        )}
      </div>
      <div className='labels keen-slider' ref={contentSliderRef}>
        <div className='journey-content keen-slider__slide'>
          <ul className='list-unstyled'>
            <li>
              <img src='/images/vendors/ic-caret-journey.svg' alt='ic-caret-journey' />
              T??ng v???n ??i???u l??? l??n 1.080 t??? ?????ng
            </li>
            <li>
              <img src='/images/vendors/ic-caret-journey.svg' alt='ic-caret-journey' />
              TOP 500 doanh nghi???p c?? l???i nhu???n t???t nh???t n??m 2018
            </li>
            <li>
              <img src='/images/vendors/ic-caret-journey.svg' alt='ic-caret-journey' />
              Gi???i th?????ng "C??ng ty ph??t tri???n m???ng l?????i m??i gi???i nhanh nh???t Vi???t Nam 2018??? do T???p ch?? Global Banking and
              Finance Review, Anh Qu???c b??nh ch???n
            </li>
          </ul>
        </div>
        <div className='journey-content keen-slider__slide'>
          <ul className='list-unstyled'>
            <li>
              <img src='/images/vendors/ic-caret-journey.svg' alt='ic-caret-journey' />
              T??ng v???n ??i???u l??? l??n 1.080 t??? ?????ng
            </li>
            <li>
              <img src='/images/vendors/ic-caret-journey.svg' alt='ic-caret-journey' />
              TOP 500 doanh nghi???p c?? l???i nhu???n t???t nh???t n??m 2019
            </li>
            <li>
              <img src='/images/vendors/ic-caret-journey.svg' alt='ic-caret-journey' />
              Gi???i th?????ng "C??ng ty ph??t tri???n m???ng l?????i m??i gi???i nhanh nh???t Vi???t Nam 2018??? do T???p ch?? Global Banking and
              Finance Review, Anh Qu???c b??nh ch???n
            </li>
          </ul>
        </div>
        <div className='journey-content keen-slider__slide'>
          <ul className='list-unstyled'>
            <li>
              <img src='/images/vendors/ic-caret-journey.svg' alt='ic-caret-journey' />
              T??ng v???n ??i???u l??? l??n 1.080 t??? ?????ng
            </li>
            <li>
              <img src='/images/vendors/ic-caret-journey.svg' alt='ic-caret-journey' />
              TOP 500 doanh nghi???p c?? l???i nhu???n t???t nh???t n??m 2020
            </li>
            <li>
              <img src='/images/vendors/ic-caret-journey.svg' alt='ic-caret-journey' />
              Gi???i th?????ng "C??ng ty ph??t tri???n m???ng l?????i m??i gi???i nhanh nh???t Vi???t Nam 2018??? do T???p ch?? Global Banking and
              Finance Review, Anh Qu???c b??nh ch???n
            </li>
          </ul>
        </div>
        <div className='journey-content keen-slider__slide'>
          <ul className='list-unstyled'>
            <li>
              <img src='/images/vendors/ic-caret-journey.svg' alt='ic-caret-journey' />
              T??ng v???n ??i???u l??? l??n 1.080 t??? ?????ng
            </li>
            <li>
              <img src='/images/vendors/ic-caret-journey.svg' alt='ic-caret-journey' />
              TOP 500 doanh nghi???p c?? l???i nhu???n t???t nh???t n??m 2021
            </li>
            <li>
              <img src='/images/vendors/ic-caret-journey.svg' alt='ic-caret-journey' />
              Gi???i th?????ng "C??ng ty ph??t tri???n m???ng l?????i m??i gi???i nhanh nh???t Vi???t Nam 2018??? do T???p ch?? Global Banking and
              Finance Review, Anh Qu???c b??nh ch???n
            </li>
          </ul>
        </div>
        <div className='journey-content keen-slider__slide'>
          <ul className='list-unstyled'>
            <li>
              <img src='/images/vendors/ic-caret-journey.svg' alt='ic-caret-journey' />
              T??ng v???n ??i???u l??? l??n 1.080 t??? ?????ng
            </li>
            <li>
              <img src='/images/vendors/ic-caret-journey.svg' alt='ic-caret-journey' />
              TOP 500 doanh nghi???p 2022
            </li>
            <li>
              <img src='/images/vendors/ic-caret-journey.svg' alt='ic-caret-journey' />
              Gi???i th?????ng "C??ng ty ph??t tri???n m???ng l?????i m??i gi???i nhanh nh???t Vi???t Nam 2018??? do T???p ch?? Global Banking and
              Finance Review, Anh Qu???c b??nh ch???n
            </li>
          </ul>
        </div>
        <div className='journey-content keen-slider__slide'>
          <ul className='list-unstyled'>
            <li>
              <img src='/images/vendors/ic-caret-journey.svg' alt='ic-caret-journey' />
              T??ng v???n ??i???u l??? l??n 1.080 t??? ?????ng
            </li>
            <li>
              <img src='/images/vendors/ic-caret-journey.svg' alt='ic-caret-journey' />
              TOP 500 doanh nghi???p 2016
            </li>
            <li>
              <img src='/images/vendors/ic-caret-journey.svg' alt='ic-caret-journey' />
              Gi???i th?????ng "C??ng ty ph??t tri???n m???ng l?????i m??i gi???i nhanh nh???t Vi???t Nam 2018??? do T???p ch?? Global Banking and
              Finance Review, Anh Qu???c b??nh ch???n
            </li>
          </ul>
        </div>
        <div className='journey-content keen-slider__slide'>
          <ul className='list-unstyled'>
            <li>
              <img src='/images/vendors/ic-caret-journey.svg' alt='ic-caret-journey' />
              T??ng v???n ??i???u l??? l??n 1.080 t??? ?????ng
            </li>
            <li>
              <img src='/images/vendors/ic-caret-journey.svg' alt='ic-caret-journey' />
              TOP 500 doanh nghi???p 2017
            </li>
            <li>
              <img src='/images/vendors/ic-caret-journey.svg' alt='ic-caret-journey' />
              Gi???i th?????ng "C??ng ty ph??t tri???n m???ng l?????i m??i gi???i nhanh nh???t Vi???t Nam 2018??? do T???p ch?? Global Banking and
              Finance Review, Anh Qu???c b??nh ch???n
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default MilestoneTimeline
