import Dialog from '@mui/material/Dialog'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

const Teams = () => {
  const [tabIndex, setTabIndex] = useState(0)
  const [openModal, setOpenModal] = useState(false)
  useEffect(() => {
    console.log(openModal)
  }, [openModal])
  return (
    <div
      className='tab-pane fade show active'
      id='pills-team'
      role='tabpanel'
      aria-labelledby='pills-team-tab'
      tabIndex={0}
    >
      <div className='tab-team'>
        <h2 className='text-center fw-bold text-about d-none d-md-block'>Hội đồng quản trị & Ban điều hành</h2>
        <div className='row'>
          <div className='col-md-4 col-xl-3'>
            <nav className='tab-team-left'>
              <div className='nav nav-tabs border-0' id='nav-tab' role='tablist'>
                <button
                  className={clsx('nav-link', { active: tabIndex === 0 })}
                  id='nav-home-tab'
                  type='button'
                  onClick={() => setTabIndex(0)}
                >
                  Hội đồng quản trị
                </button>
                <button
                  className={clsx('nav-link', { active: tabIndex === 1 })}
                  id='nav-profile-tab'
                  type='button'
                  onClick={() => setTabIndex(1)}
                >
                  Ban Giám đốc
                </button>
                <button
                  className={clsx('nav-link', { active: tabIndex === 2 })}
                  id='nav-contact-tab'
                  type='button'
                  onClick={() => setTabIndex(2)}
                >
                  Ban Điều hành
                </button>
                <button
                  className={clsx('nav-link', { active: tabIndex === 3 })}
                  id='nav-disabled-tab'
                  type='button'
                  onClick={() => setTabIndex(3)}
                >
                  Sơ đồ tổ chức
                </button>
              </div>
            </nav>
          </div>
          <Dialog fullWidth={true} maxWidth="lg" aria-labelledby='simple-dialog-title' onClose={() => setOpenModal(false)} open={openModal}>
            <div className='modal-dialog modal-dialog-centered tab-team-modal'>
              <div className='modal-content'>
                <div className='modal-header border-0 justify-content-end'>
                  <a type='button' onClick={() => setOpenModal(false)} data-bs-dismiss='modal' aria-label='Close'>
                    <img src='/images/vendors/ic-close-modal.svg' alt='ic close modal' />
                  </a>
                </div>
                <div className='modal-body'>
                  <div className='row'>
                    <div className='col-lg-4'>
                      <img
                        src='/images/vendors/team-big-img.jpeg'
                        alt='team-big'
                        className='d-block mx-auto img-fluid'
                      />
                    </div>
                    <div className='col-lg-8'>
                      <div className='text-center text-lg-left'>
                        <span className='gender'>Ông</span>
                        <h3 className='fw-bold'>Nguyễn Tiến Thành</h3>
                        <span className='team-position text-uppercase'>CHỦ TỊCH HĐQT - TỔNG GIÁM ĐỐC</span>
                      </div>
                      <p className='mb-0'>
                        Thạc sỹ Quản lý Phát triển –Asian Institute of Management – Philipines Cử nhân Tài chính Ngân
                        hàng – ĐH KTQD
                      </p>
                      <p className='mb-0'>2019: Chủ tịch HĐQT, Tổng giám đốc Công ty CP Chứng khoán Tân Việt</p>
                      <p className='mb-0'>2016: Tổng Giám đốc Công ty Chứng khoán Tân Việt</p>
                      <p className='mb-0'>2014: Thành viên HĐQT – Phó Tổng Giám đốc Công ty CP Chứng khoán Tân Việt</p>
                      <p className='mb-0'>
                        2009: Phó Tổng Giám đốc Kiêm Giám đốc Chi nhánh HCM Công ty CP Chứng khoán Tân Việt
                      </p>
                      <p className='mb-0'>2008: Giám đốc Chi nhánh Hồ Chí Minh - Công ty CP Chứng khoán Tân Việt</p>
                      <p className='mb-0'>2007: Giám đốc DVCK Công ty CP Chứng khoán Tân Việt</p>
                      <p className='mb-0'>1994: Trưởng Phòng Kế toán Ngân hàng Ngoại Thương Việt Nam</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Dialog>
          <div className='col-md-8 col-xl-9 px-2 px-md-3'>
            <div className='tab-team-right'>
              <div className='tab-content pt-4 pt-md-0 pb-0' id='nav-tabContentTeam'>
                <div
                  className={clsx('tab-pane fade', { 'show active': tabIndex === 0 })}
                  id='nav-home'
                  role='tabpanel'
                  aria-labelledby='nav-home-tab'
                >
                  <div className='row'>
                    <div className='col-xl-4' onClick={() => setOpenModal(true)}>
                      <div className='box-shadow tab-team-item'>
                        <img
                          src='/images/vendors/team1.jpeg'
                          alt='team img'
                          className='img-fluid d-block mx-lg-auto'
                          data-bs-toggle='modal'
                          data-bs-target='#teamModal'
                        />
                        <div className='text-lg-center  tab-team-content'>
                          <p className='mb-0'>Ông</p>
                          <h4 className='fw-bold' data-bs-toggle='modal' data-bs-target='#teamModal'>
                            Nguyễn Tiến Thành
                          </h4>
                          <span className='fw-semibold'>
                            CHỦ TỊCH HĐQT, <br className='d-none d-xl-inline-block' />
                            TỔNG GIÁM ĐỐC
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='col-xl-4'>
                      <div className='box-shadow tab-team-item'>
                        <img
                          src='/images/vendors/team2.jpeg'
                          alt='team img'
                          className='img-fluid d-block mx-lg-auto'
                          data-bs-toggle='modal'
                          data-bs-target='#teamModal'
                        />
                        <div className='text-lg-center  tab-team-content'>
                          <p className='mb-0'>Ông</p>
                          <h4 className='fw-bold' data-bs-toggle='modal' data-bs-target='#teamModal'>
                            Nguyễn Việt Cường
                          </h4>
                          <span className='fw-semibold'>
                            PHÓ TỔNG GIÁM ĐỐC, <br className='d-none d-xl-inline-block' />
                            THÀNH VIÊN HĐQT
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='col-xl-4'>
                      <div className='box-shadow tab-team-item'>
                        <img
                          src='/images/vendors/team3.jpeg'
                          alt='team img'
                          className='img-fluid d-block mx-lg-auto'
                          data-bs-toggle='modal'
                          data-bs-target='#teamModal'
                        />
                        <div className='text-lg-center  tab-team-content'>
                          <p className='mb-0'>Ông</p>
                          <h4 className='fw-bold' data-bs-toggle='modal' data-bs-target='#teamModal'>
                            Lê Thanh Tùng
                          </h4>
                          <span className='fw-semibold'>
                            PHÓ TỔNG GIÁM ĐỐC, <br className='d-none d-xl-inline-block' />
                            THÀNH VIÊN HĐQT
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='col-xl-4'>
                      <div className='box-shadow tab-team-item'>
                        <img
                          src='/images/vendors/team4.jpeg'
                          alt='team img'
                          className='img-fluid d-block mx-lg-auto'
                          data-bs-toggle='modal'
                          data-bs-target='#teamModal'
                        />
                        <div className='text-lg-center  tab-team-content'>
                          <p className='mb-0'>Ông</p>
                          <h4 className='fw-bold' data-bs-toggle='modal' data-bs-target='#teamModal'>
                            Trần Việt Đức
                          </h4>
                          <span className='fw-semibold'>
                            PHÓ TỔNG GIÁM ĐỐC, <br className='d-none d-xl-inline-block' />
                            THÀNH VIÊN HĐQT
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='col-xl-4'>
                      <div className='box-shadow tab-team-item'>
                        <img
                          src='/images/vendors/team5.jpeg'
                          alt='team img'
                          className='img-fluid d-block mx-lg-auto'
                          data-bs-toggle='modal'
                          data-bs-target='#teamModal'
                        />
                        <div className='text-lg-center tab-team-content'>
                          <p className='mb-0'>Bà</p>
                          <h4 className='fw-bold' data-bs-toggle='modal' data-bs-target='#teamModal'>
                            Bùi Thị Thanh Hiền
                          </h4>
                          <span className='fw-semibold'>
                            PHÓ TỔNG GIÁM ĐỐC, <br className='d-none d-xl-inline-block' />
                            THÀNH VIÊN HĐQT
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={clsx('modal fade', { show: openModal })} id='teamModal'></div>
                </div>
                <div
                  className={clsx('tab-pane fade', { 'show active': tabIndex === 1 })}
                  id='nav-profile'
                  role='tabpanel'
                  aria-labelledby='nav-profile-tab'
                >
                  Ban Giám đốc
                </div>
                <div
                  className={clsx('tab-pane fade', { 'show active': tabIndex === 2 })}
                  id='nav-contact'
                  role='tabpanel'
                  aria-labelledby='nav-contact-tab'
                >
                  Ban điều hành
                </div>
                <div
                  className={clsx('tab-pane fade', { 'show active': tabIndex === 3 })}
                  id='nav-disabled'
                  role='tabpanel'
                  aria-labelledby='nav-disabled-tab'
                >
                  <img
                    src='/images/vendors/team-diagram.jpeg'
                    alt='team diagram'
                    className='img-fluid d-block mx-auto'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Teams
