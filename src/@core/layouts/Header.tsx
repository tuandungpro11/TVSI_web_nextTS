import { Dispatch } from '@reduxjs/toolkit'
import axios from 'axios'
import Link from 'next/link'
import { MutableRefObject, useEffect, useState } from 'react'
import { handleCurrentHoverContent } from 'src/store/apps/main'
import { MainStoreType } from 'src/types/apps/main'
import { Category } from 'src/types/apps/newsType'
import { CurrentHoverContentType } from 'src/types/enum'
import classnames from 'classnames'
interface HeaderProps {
  store: MainStoreType
  dispatch: Dispatch<any>
  headerRef: MutableRefObject<any>
  sticky: boolean
}

const Header = ({ store, dispatch, sticky }: HeaderProps) => {
  const [currentOnHoverItem, setCurrentOnHoverItem] = useState<number>(-1)
  const [headerClassName, setHeaderClassName] = useState('page-header js-page-header d-none d-lg-block')
  const [categories, setCategories] = useState<Category[]>([])
  useEffect(() => {
    axios.get('/apps/categories/getAllCategories').then(response => {
      if (response.data && response.data.length > 0) {
        setCategories([...response.data])
      }
    })
  }, [])
  useEffect(() => {
    setHeaderClassName(
      classnames('page-header js-page-header d-none d-lg-block', {
        'fixed-header': sticky
      })
    )
  }, [sticky])
  useEffect(() => {
    if (store.currentHoverContent != CurrentHoverContentType.HEADER) {
      setCurrentOnHoverItem(-1)
    }
  }, [store.currentHoverContent])
  const handleMenuHover = (id: number) => {
    setCurrentOnHoverItem(id)
  }
  return (
    <header className={headerClassName}>
      <div className='page-header-wrap d-none d-lg-block'>
        {!sticky && <div className='page-header-top'>
          <div className='container-fluid px-120px'>
            <div className='d-flex align-items-center justify-content-between'>
              <div className='logo'>
                <Link href='/demo'>
                  <a title='logo'>
                    <img src='/images/vendors/logo.png' alt='logo image' className='img-fluid' />
                  </a>
                </Link>
              </div>
              <div className='page-menu-wrap'>
                <div className='page-menu'>
                  <nav className='navbar navbar-expand'>
                    <ul className='navbar-nav'>
                      <li className='nav-item'>
                        <Link href=''>
                          <a className='nav-link' href='#'>
                            Về TVSI
                          </a>
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href=''>
                          <a className='nav-link' href='#'>
                            Quan hệ nhà đầu tư
                          </a>
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href=''>
                          <a className='nav-link' href='#'>
                            Tin tức hoạt động
                          </a>
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href=''>
                          <a className='nav-link' href='#'>
                            Cơ hội nghề nghiệp
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className='page-menu-right'>
                <div className='page-language'></div>
                <div className='d-flex align-items-center justify-content-between'>
                  <div className='page-login'>
                    <Link href=''>
                      <a href='#'>
                        <img src='/images/vendors/ic-login.svg' alt='icon login' />
                        Đăng nhập
                      </a>
                    </Link>
                  </div>
                  <div className='phone-header'>
                    <Link href='tel:19001885'>
                      <a>
                        <img src='/images/vendors/ic-phone-red.svg' alt='icon phone red' />
                        1900 1885
                      </a>
                    </Link>
                  </div>
                  <div className='open-account'>
                    <Link href=''>
                      <a href='#'>MỞ TÀI KHOẢN</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
        <div className='container-fluid px-120px'>
          <div className='row'>
            <div className='col-12'>
              <hr />
            </div>
          </div>
        </div>
        <div
          className='page-header-bottom'
          onMouseEnter={() => {
            dispatch(handleCurrentHoverContent(CurrentHoverContentType.HEADER))
          }}
        >
          <div className='container-fluid px-120px'>
            <div className='d-flex align-items-center justify-content-between'>
              {sticky && <div className='logo js-logo-fixed'>
                <a href='/demo' title='logo'>
                  <img src='/images/vendors/logo.png' alt='logo image' className='img-fluid' />
                </a>
              </div>}
              <div className='col8'>
                <ul className='d-flex list-unstyled align-items-center justify-content-between mb-0 menu-bottom'>
                  <li className='nav-item' onMouseOver={() => handleMenuHover(1)}>
                    <Link href=''>
                      <a className='nav-link' href='#'>
                        Sản phẩm & Dịch vụ
                      </a>
                    </Link>
                  </li>
                  <li className='nav-item' onMouseOver={() => handleMenuHover(2)}>
                    <Link href=''>
                      <a className='nav-link' href='#'>
                        Trung tâm phân tích
                      </a>
                    </Link>
                  </li>
                  <li className='nav-item' onMouseOver={() => handleMenuHover(3)}>
                    <Link href=''>
                      <a className='nav-link' href='#'>
                        Biểu phí
                      </a>
                    </Link>
                  </li>
                  <li className='nav-item' onMouseOver={() => handleMenuHover(4)}>
                    <Link href=''>
                      <a className='nav-link' href='#'>
                        Hỗ trợ
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className='col4'>
                {sticky ?<div className='d-flex align-items-center justify-content-between'>
                  <div className='phone-header'>
                    <Link href='tel:19001885'>
                      <a>
                        <img src='/images/vendors/ic-phone-red.svg' alt='icon phone red' />
                        1900 1885
                      </a>
                    </Link>
                  </div>
                  <div className='open-account'>
                    <Link href=''>
                      <a href='#'>MỞ TÀI KHOẢN</a>
                    </Link>
                  </div>
                </div> : <div className='page-header-bottom-right'>
                  <div className='d-flex justify-content-between align-items-center'>
                    <div className='menu-bottom-radio d-flex justify-content-between align-items-center'>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='radio'
                          name='flexRadioDefault'
                          id='radioStockCode'
                          checked
                        />
                        <label className='form-check-label' htmlFor='radioStockCode'>
                          Mã chứng khoán
                        </label>
                      </div>
                      <div className='form-check'>
                        <input className='form-check-input' type='radio' name='flexRadioDefault' id='radioNews' />
                        <label className='form-check-label' htmlFor='radioNews'>
                          Tin bài
                        </label>
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
                  </div>
                </div>}
              </div>
            </div>
            {currentOnHoverItem === 1 && (
              <div className='sub-menu'>
                <div className='d-flex justify-content-between sub-menu-container'>
                  <div className='sub-menu-item'>
                    <h6 className='fw-bold text-uppercase'>Đầu tư</h6>
                    <ul className='list-unstyled text-start'>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Chứng khoán cơ sở
                        </a>
                      </li>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Trái phiếu
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='sub-menu-item'>
                    <h6 className='fw-bold text-uppercase'>Dịch vụ chứng khoán</h6>
                    <ul className='list-unstyled text-start'>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Lưu ký chứng khoán
                        </a>
                      </li>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Thực hiện quyền
                        </a>
                      </li>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Đại lý đấu giá
                        </a>
                      </li>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Quản lý sổ cổ đông
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='sub-menu-item'>
                    <h6 className='fw-bold text-uppercase'>Dịch vụ tài chính</h6>

                    <ul className='list-unstyled text-start'>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Cho vay GDKQ
                        </a>
                      </li>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Ứng trước tiền bán
                        </a>
                      </li>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Rút tiền bằng sức mua
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='sub-menu-item'>
                    <h6 className='fw-bold text-uppercase'>Tài chính doanh nghiệp</h6>

                    <ul className='list-unstyled text-start'>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Nghiệp vụ thị trường vốn
                        </a>
                      </li>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Nghiệp vụ thị trường nợ
                        </a>
                      </li>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Nghiệp vụ ngân hàng đầu tư
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {currentOnHoverItem === 3 && (
              <div className='sub-menu'>
                <div className='d-flex justify-content-between sub-menu-container'>
                  <div className='sub-menu-item'>
                    <h6 className='fw-bold text-uppercase'>Các loại phí dịch vụ</h6>

                    <ul className='list-unstyled text-start'>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Biểu phí giao dịch chứng khoán
                        </a>
                      </li>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Biểu phí giao dịch trái phiếu
                        </a>
                      </li>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Biểu phí các dịch vụ khác
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            {currentOnHoverItem === 4 && (
              <div className='sub-menu'>
                <div className='d-flex justify-content-between sub-menu-container'>
                  <div className='sub-menu-item'>
                    <h6 className='fw-bold text-uppercase'>Hướng dẫn & Hỗ trợ</h6>

                    <ul className='list-unstyled text-start'>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Câu hỏi thường gặp
                        </a>
                      </li>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Kiến thức tài chính
                        </a>
                      </li>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Lịch hội thảo & đào tạo
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
