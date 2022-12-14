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
                            V??? TVSI
                          </a>
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href=''>
                          <a className='nav-link' href='#'>
                            Quan h??? nh?? ?????u t??
                          </a>
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href=''>
                          <a className='nav-link' href='#'>
                            Tin t???c ho???t ?????ng
                          </a>
                        </Link>
                      </li>
                      <li className='nav-item'>
                        <Link href=''>
                          <a className='nav-link' href='#'>
                            C?? h???i ngh??? nghi???p
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
                        ????ng nh???p
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
                      <a href='#'>M??? T??I KHO???N</a>
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
                        S???n ph???m & D???ch v???
                      </a>
                    </Link>
                  </li>
                  <li className='nav-item' onMouseOver={() => handleMenuHover(2)}>
                    <Link href=''>
                      <a className='nav-link' href='#'>
                        Trung t??m ph??n t??ch
                      </a>
                    </Link>
                  </li>
                  <li className='nav-item' onMouseOver={() => handleMenuHover(3)}>
                    <Link href=''>
                      <a className='nav-link' href='#'>
                        Bi???u ph??
                      </a>
                    </Link>
                  </li>
                  <li className='nav-item' onMouseOver={() => handleMenuHover(4)}>
                    <Link href=''>
                      <a className='nav-link' href='#'>
                        H??? tr???
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
                      <a href='#'>M??? T??I KHO???N</a>
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
                          M?? ch???ng kho??n
                        </label>
                      </div>
                      <div className='form-check'>
                        <input className='form-check-input' type='radio' name='flexRadioDefault' id='radioNews' />
                        <label className='form-check-label' htmlFor='radioNews'>
                          Tin b??i
                        </label>
                      </div>
                    </div>
                    <div className='page-search'>
                      <form>
                        <input className='form-control' type='input' placeholder='T??m ki???m' />
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
                    <h6 className='fw-bold text-uppercase'>?????u t??</h6>
                    <ul className='list-unstyled text-start'>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Ch???ng kho??n c?? s???
                        </a>
                      </li>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Tr??i phi???u
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='sub-menu-item'>
                    <h6 className='fw-bold text-uppercase'>D???ch v??? ch???ng kho??n</h6>
                    <ul className='list-unstyled text-start'>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          L??u k?? ch???ng kho??n
                        </a>
                      </li>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Th???c hi???n quy???n
                        </a>
                      </li>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          ?????i l?? ?????u gi??
                        </a>
                      </li>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Qu???n l?? s??? c??? ????ng
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='sub-menu-item'>
                    <h6 className='fw-bold text-uppercase'>D???ch v??? t??i ch??nh</h6>

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
                          ???ng tr?????c ti???n b??n
                        </a>
                      </li>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          R??t ti???n b???ng s???c mua
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='sub-menu-item'>
                    <h6 className='fw-bold text-uppercase'>T??i ch??nh doanh nghi???p</h6>

                    <ul className='list-unstyled text-start'>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Nghi???p v??? th??? tr?????ng v???n
                        </a>
                      </li>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Nghi???p v??? th??? tr?????ng n???
                        </a>
                      </li>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Nghi???p v??? ng??n h??ng ?????u t??
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
                    <h6 className='fw-bold text-uppercase'>C??c lo???i ph?? d???ch v???</h6>

                    <ul className='list-unstyled text-start'>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Bi???u ph?? giao d???ch ch???ng kho??n
                        </a>
                      </li>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Bi???u ph?? giao d???ch tr??i phi???u
                        </a>
                      </li>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Bi???u ph?? c??c d???ch v??? kh??c
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
                    <h6 className='fw-bold text-uppercase'>H?????ng d???n & H??? tr???</h6>

                    <ul className='list-unstyled text-start'>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          C??u h???i th?????ng g???p
                        </a>
                      </li>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          Ki???n th???c t??i ch??nh
                        </a>
                      </li>
                      <li>
                        <a href='#' title=''>
                          <img src='/images/vendors/ic-caret-sub-menu.svg/' alt='icon-caret-submenu' />
                          L???ch h???i th???o & ????o t???o
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
