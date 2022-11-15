import classNames from 'classnames'
import { useEffect, useState } from 'react'

const MobileNavBar = () => {
  const [navCollapsed, setNavCollapsed] = useState(false)
  const [navCollapseClassName, setNavCollapseClassName] = useState('collapse navbar-collapse')
  useEffect(() => {
    setNavCollapseClassName(classNames('collapse navbar-collapse', { show: navCollapsed }))
  }, [navCollapsed])
  return (
    <nav className='navbar navbar-expand-lg fixed-top bg-white d-flex d-lg-none py-0' id='menuMobile'>
      <div className='container'>
        <div className='d-flex page-header justify-content-between align-items-center w-100' id='menubar'>
          <div className='logo'>
            <a href='index.html' title='logo'>
              <img src='/images/vendors/logo.png' alt='logo image' className='img-fluid' />
            </a>
          </div>
            <div className='open-account'>
                <a href='#'>MỞ TÀI KHOẢN</a>
            </div>
            <button
                onClick={() => setNavCollapsed(true)}
                className='btn'
            >
                <img src='/images/vendors/ic-menu-mb.svg' alt='ic-menu-mb' />
            </button>
          {/* <div className='right'>
          </div> */}
        </div>
        <div className={navCollapseClassName} id='navbarResponsive'>
          <div className='d-flex justify-content-between align-items-center'>
            <button
              data-toggle='collapse'
              data-target='#navbarResponsive'
              className='btn'
              onClick={() => setNavCollapsed(false)}
            >
              <img src='/images/vendors/ic-close-menu-mb.svg' alt='icon close' />
            </button>
            <div className='page-language'>
              <div id='lang_selector' className='language-dropdown'>
                <label htmlFor='toggle' className='lang-flag lang-vi' title='Click to select the language'>
                  <span className='flag'></span>
                </label>
                <ul className='lang-list'>
                  <li className='lang lang-vi selected' title='vi'>
                    <span className='flag'></span>
                  </li>
                  <li className='lang lang-en' title='en'>
                    <span className='flag'></span>
                  </li>
                </ul>
              </div>
              <img src='/images/vendors/ic-caretdown-lang.svg' alt='caret lang' className='js-language' />
              <div id='lang_selected' className='d-none'>
                <p>EN</p>
              </div>
            </div>
          </div>
          <div className='page-search'>
            <form>
              <input className='form-control' type='input' placeholder='Tìm kiếm' />
              <button className='btn text-white' type='submit'>
                <img src='/images/vendors/ic-search.svg' alt='icon search' />
              </button>
            </form>
          </div>
          <div className='menu-bottom-radio d-flex align-items-center'>
            <div className='form-check'>
              <input
                className='form-check-input'
                type='radio'
                name='flexRadioDefaultMB'
                id='radioStockCodeMB'
                checked
              />
              <label className='form-check-label' htmlFor='radioStockCodeMB'>
                Mã chứng khoán
              </label>
            </div>
            <div className='form-check'>
              <input className='form-check-input' type='radio' name='flexRadioDefaultMB' id='radioNewsMb' />
              <label className='form-check-label' htmlFor='radioNewsMB'>
                Tin bài
              </label>
            </div>
          </div>
          <div className='mb-divided'></div>
          <div className='page-menu'>
            <nav className='navbar navbar-expand'>
              <ul className='navbar-nav flex-column'>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Về TVSI
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Quan hệ nhà đầu tư
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Tin tức hoạt động
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='#'>
                    Cơ hội nghề nghiệp
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='mb-divided'></div>
          <ul className='nav navbar-nav' id='main-menu'>
            <li className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle' href='#' data-toggle='dropdown'>
                Sản phẩm & Dịch vụ
              </a>
              <ul className='dropdown-menu sub-menu-one'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Đầu tư
                  </a>

                  <ul className='submenus dropdown-menu'>
                    <li>
                      <a className='dropdown-item' href='index.html'>
                        <img src='/images/vendors/ic-caret-sub-menu.svg' alt='icon-caret-submenu' />
                        Chứng khoán cơ sở
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        <img src='/images/vendors/ic-caret-sub-menu.svg' alt='icon-caret-submenu' />
                        Trái phiếu
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Dịch vụ chứng khoán
                  </a>

                  <ul className='submenus dropdown-menu'>
                    <li>
                      <a className='dropdown-item' href='#'>
                        <img src='/images/vendors/ic-caret-sub-menu.svg' alt='icon-caret-submenu' />
                        Lưu ký chứng khoán
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        <img src='/images/vendors/ic-caret-sub-menu.svg' alt='icon-caret-submenu' />
                        Thực hiện quyền
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        <img src='/images/vendors/ic-caret-sub-menu.svg' alt='icon-caret-submenu' />
                        Đại lý đấu giá
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        <img src='/images/vendors/ic-caret-sub-menu.svg' alt='icon-caret-submenu' />
                        Quản lý sổ cổ đông
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className='dropdown-item' href='#'></a>

                  <ul className='submenus dropdown-menu'>
                    <li>
                      <a className='dropdown-item' href='#'>
                        <img src='/images/vendors/ic-caret-sub-menu.svg' alt='icon-caret-submenu' />
                        Cho vay GDKQ
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        <img src='/images/vendors/ic-caret-sub-menu.svg' alt='icon-caret-submenu' />
                        Ứng trước tiền bán
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        <img src='/images/vendors/ic-caret-sub-menu.svg' alt='icon-caret-submenu' />
                        Rút tiền bằng sức mua
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Tài chính doanh nghiệp
                  </a>

                  <ul className='submenus dropdown-menu'>
                    <li>
                      <a className='dropdown-item' href='#'>
                        <img src='/images/vendors/ic-caret-sub-menu.svg' alt='icon-caret-submenu' />
                        Nghiệp vụ thị trường vốn
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        <img src='/images/vendors/ic-caret-sub-menu.svg' alt='icon-caret-submenu' />
                        Nghiệp vụ thị trường nợ
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        <img src='/images/vendors/ic-caret-sub-menu.svg' alt='icon-caret-submenu' />
                        Nghiệp vụ ngân hàng đầu tư
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className='nav-item' role='presentation'>
              <a className='nav-link' href='#'>
                Trung tâm phân tích
              </a>
            </li>
            <li className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle' href='#' data-toggle='dropdown'>
                Biểu phí
              </a>
              <ul className='dropdown-menu sub-menu-one'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Dịch vụ chứng khoán
                  </a>

                  <ul className='submenus dropdown-menu'>
                    <li>
                      <a className='dropdown-item' href='#'>
                        <img src='/images/vendors/ic-caret-sub-menu.svg' alt='icon-caret-submenu' />
                        Biểu phí giao dịch chứng khoán
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        <img src='/images/vendors/ic-caret-sub-menu.svg' alt='icon-caret-submenu' />
                        Biểu phí giao dịch trái phiếu
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        <img src='/images/vendors/ic-caret-sub-menu.svg' alt='icon-caret-submenu' />
                        Biểu phí các dịch vụ khác
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className='nav-item dropdown'>
              <a className='nav-link dropdown-toggle' href='#' data-toggle='dropdown'>
                Hỗ trợ
              </a>
              <ul className='dropdown-menu sub-menu-one'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Hướng dẫn & Hỗ trợ
                  </a>

                  <ul className='submenus dropdown-menu'>
                    <li>
                      <a className='dropdown-item' href='#'>
                        <img src='/images/vendors/ic-caret-sub-menu.svg' alt='icon-caret-submenu' />
                        Câu hỏi thường gặp
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        <img src='/images/vendors/ic-caret-sub-menu.svg' alt='icon-caret-submenu' />
                        Kiến thức tài chính
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item' href='#'>
                        <img src='/images/vendors/ic-caret-sub-menu.svg' alt='icon-caret-submenu' />
                        Lịch hội thảo & đào tạo
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <div className='d-flex page-header wrap-info'>
            <div className='phone-header'>
              <a href='tel:19001885'>
                <img src='/images/vendors/ic-phone-red.svg' alt='icon phone red' />
                1900 1885
              </a>
            </div>
            <div className='open-account'>
              <a href='#'>MỞ TÀI KHOẢN</a>
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <div className='page-login'>
              <a href='#'>
                <img src='/images/vendors/ic-login.svg' alt='icon login' />
                Đăng nhập
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MobileNavBar
