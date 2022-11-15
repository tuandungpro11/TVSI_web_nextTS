// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'

// ** Footer Content Component
import FooterContent from './FooterContent'

interface Props {
  settings: Settings
  saveSettings: (values: Settings) => void
  footerContent?: (props?: any) => ReactNode
}

const Footer = (props: Props) => {
  // ** Props
  const { settings, footerContent: userFooterContent } = props

  // ** Vars
  const { skin, footer, contentWidth } = settings

  if (footer === 'hidden') {
    return null
  }

  return (
    <footer>
      <div className='footer-top text-white'>
        <div className='container-fluid px-120px'>
          <div className='row'>
            <div className='col-6 col-md-12 col-xl-6 d-none d-sm-flex align-items-center mb-md-3 mb-xl-0'>
              <img src='/images/vendors/logo-footer.svg' className='logo-footer pr-30px' alt='logo footer' />
              <div className='border-start pl-30px'>
                <h4 className='fw-bold mb-0'>Công ty Cổ phần Chứng khoán Tân Việt</h4>

                <p className='mb-0'>Trụ sở chính: 79 Lý Thường Kiệt, Quận Hoàn Kiếm, Hà Nội</p>
              </div>
            </div>
            <div className='col-12 col-md-12 col-xl-6 d-flex justify-content-between justify-content-md-start justify-content-xl-end align-items-center'>
              <div className='d-flex flex-column flex-md-row'>
                <div className='footer-top-mail d-flex align-items-center me-sm-3'>
                  <a href='mailto:contact@tvsi.com.vn' className='footerAnchor fz24 ps-2'>
                    contact@tvsi.com.vn
                  </a>
                </div>
                <div className='footer-top-phone d-flex align-items-center me-sm-3'>
                  <a href='tel:19001885' className='footerAnchor fz24 ps-2'>
                    1900 1885
                  </a>
                </div>
              </div>
              <ul className='nav footer-top-links'>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <img src='/images/vendors/ic-fb.svg' alt='icon fb' />
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <img src='/images/vendors/ic-zalo.svg' alt='icon zalo' />
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    <img src='/images/vendors/ic-youtube.svg' alt='icon youtube' />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-info py-5'>
        <div className='container-fluild px-120px'>
          <div className='col'>
            <div className='title_footer'>
              <h4 className='fw-bold text-uppercase h4 mb-0'>MẠNG LƯỚI GIAO DỊCH</h4>
            </div>
          </div>
          <div className='d-grid footer-top-grid mt-35px'>
            <div className='grid-item'>
              <div className='title_footer  mb-0'>
                <h5 className='fw-bold text-uppercase'>
                  <img src='/images/vendors/ic-caret-right.svg' alt='icon caret right' />
                  TRỤ SỞ CHÍNH
                </h5>

                <p className='mb-0'>Tầng 6, 79 Lý Thường Kiệt, Quận Hoàn Kiếm, Hà Nội</p>
                <p className='mb-0'>Fax: 024 3728 0920</p>
                <p className='mb-0'>Email: contact@tvsi.com.vn</p>
              </div>
            </div>
            <div className='grid-item'>
              <div className='title_footer  mb-0'>
                <h5 className='fw-bold text-uppercase'>
                  <img src='/images/vendors/ic-caret-right.svg' alt='icon caret right' />
                  CN MỸ ĐÌNH
                </h5>

                <p className='mb-0'>Tầng 2, toà nhà AP, 87 Trần Thái Tông, Q.Cầu Giấy, Hà Nội</p>
                <p className='mb-0'>Fax: 024. 3792 5180</p>
              </div>
            </div>
            <div className='grid-item'>
              <div className='title_footer  mb-0'>
                <h5 className='fw-bold text-uppercase'>
                  <img src='/images/vendors/ic-caret-right.svg' alt='icon caret right' />
                  CN HÀ THÀNH
                </h5>

                <p className='mb-0'>Tầng 3, 33 Lê Thánh Tông, Hoàn Kiếm, Hà Nội</p>
                <p className='mb-0'>Fax: 024 3717 3250</p>
              </div>
            </div>
            <div className='grid-item'>
              <div className='title_footer  mb-0'>
                <h5 className='fw-bold text-uppercase'>
                  <img src='/images/vendors/ic-caret-right.svg' alt='icon caret right' />
                  CN NGỌC KHÁNH
                </h5>

                <p className='mb-0'>Tòa nhà Ngọc Khánh Plaza, Số 1 Phạm Huy Thông, Ba Đình, Hà Nội</p>
                <p className='mb-0'>Fax: 024. 3237 3092</p>
              </div>
            </div>
            <div className='grid-item'>
              <div className='title_footer  mb-0'>
                <h5 className='fw-bold text-uppercase'>
                  <img src='/images/vendors/ic-caret-right.svg' alt='icon caret right' />
                  CN HẢI PHÒNG
                </h5>

                <p className='mb-0'>Tầng 1 tòa nhà Akashi, số 10 Lê Hồng Phong, TP.Hải Phòng</p>
                <p className='mb-0'>Fax: 0225. 3757560</p>
              </div>
            </div>
            <div className='grid-item'>
              <div className='title_footer  mb-0'>
                <h5 className='fw-bold text-uppercase'>
                  <img src='/images/vendors/ic-caret-right.svg' alt='icon caret right' />
                  CN ĐÀ NẴNG
                </h5>

                <p className='mb-0'>115 Lê Lợi, Q.Hải Châu, Tp. Đà Nẵng</p>
                <p className='mb-0'>Fax: 0236. 3752283</p>
              </div>
            </div>
            <div className='grid-item'>
              <div className='title_footer  mb-0'>
                <h5 className='fw-bold text-uppercase'>
                  <img src='/images/vendors/ic-caret-right.svg' alt='icon caret right' />
                  CN QUY NHƠN
                </h5>

                <p className='mb-0'>Số 147 Lê Hồng Phong, Phường Trần Phú Tp.Quy Nhơn, Bình Định</p>
                <p className='mb-0'>Fax: 0256. 3818 820</p>
              </div>
            </div>
            <div className='grid-item'>
              <div className='title_footer  mb-0'>
                <h5 className='fw-bold text-uppercase'>
                  <img src='/images/vendors/ic-caret-right.svg' alt='icon caret right' />
                  CN HỒ CHÍ MINH
                </h5>

                <p className='mb-0'>Tầng 3-4-5, 66 Phó Đức Chính, P.Nguyễn Thái Bình Q.1, TP.Hồ Chí Minh</p>
                <p className='mb-0'>Fax: 028. 3920 7542</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright fz16'>
        <div className='container-fluid px-120px'>
          <div className='d-flex flex-column-reverse flex-md-row align-items-center'>
            <div className='col-md-6'>
              <p className='mb-0'>&copy; Bản quyền 2022 thuộc Chứng khoán Tân Việt (TVSI) | Khuyến cáo</p>
            </div>
            <div className='col-md-6'>
              <ul className='ps-0 navbar-nav flex-row justify-content-center justify-content-md-end fw-semibold'>
                <li className='nav-item'>
                  <a className='nav-link' aria-current='page' href='index.html'>
                    Trang chủ
                  </a>
                </li>
                <li className='nav-item mx-4'>
                  <a className='nav-link' href='#'>
                    Chính sách & Điều khoản
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
