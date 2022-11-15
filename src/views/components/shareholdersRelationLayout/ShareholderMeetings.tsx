import { useState } from 'react'
import Pagination from './Pagination'

const ShareholdersMeetingLayout = () => {
  const [activeAccordion, setActiveAccordion] = useState<number>()
  const handleAccordionClick = (id: number) => {
    id === activeAccordion ? setActiveAccordion(-1) : setActiveAccordion(id)
  }
  return (
    <div className='pills-shareholder-tab'>
      <h2 className='tab-title'>Đại hội cổ đông</h2>
      <div className='shareholder'>
        <div className='accordion' id='accordionExample'>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingOne'>
              <button className={`accordion-button ${activeAccordion === 0 ? '' : 'collapsed'}`} type='button' onClick={() => handleAccordionClick(0)}>
                <span>Đại hội cổ đông thường niên TVSI 2022</span>
              </button>
            </h2>
            <div
              id='collapseOne'
              className={`accordion-collapse collapse ${activeAccordion === 0 ? 'show' : ''}`}
              aria-labelledby='headingOne'
              data-bs-parent='#accordionShareholder'
            >
              <div className='accordion-body'>
                <table className='table'>
                  <tbody>
                    <tr>
                      <td>
                        <a href='#'>Nghị quyết họp ĐHĐCĐ thường niên 2022</a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href='#'>Biên bản họp ĐHĐCĐ thường niên 2022</a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href='#'>Nghị quyết v.v Tổ chức Đại hội đồng cổ đông thường niên năm 2022</a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href='#'>
                          Thông báo v.v Chốt danh sách Cổ đông để tổ chức Đại hội đồng cổ đông thường niên năm 2022
                        </a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href='#'>Thư mời ĐHĐCĐ thường niên TVSI 2022</a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href='#'>Tài liệu ĐHĐCĐ thường niên TVSI 2022</a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingTwo'>
              <button
                className={`accordion-button ${activeAccordion === 1 ? '' : 'collapsed'}`}
                type='button'
                onClick={() => handleAccordionClick(1)}
              >
                <span>Đại hội cổ đông thường niên TVSI 2021</span>
              </button>
            </h2>

            <div
              id='collapseTwo'
              className={`accordion-collapse collapse ${activeAccordion === 1 ? 'show' : ''}`}
              aria-labelledby='headingTwo'
              data-bs-parent='#accordionShareholder'
            >
              <div className='accordion-body'>
                <table className='table'>
                  <tbody>
                    <tr>
                      <td>
                        <a href='#'>Nghị quyết họp ĐHĐCĐ thường niên 2022</a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href='#'>Biên bản họp ĐHĐCĐ thường niên 2022</a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href='#'>Nghị quyết v.v Tổ chức Đại hội đồng cổ đông thường niên năm 2022</a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href='#'>
                          Thông báo v.v Chốt danh sách Cổ đông để tổ chức Đại hội đồng cổ đông thường niên năm 2022
                        </a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href='#'>Thư mời ĐHĐCĐ thường niên TVSI 2022</a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href='#'>Tài liệu ĐHĐCĐ thường niên TVSI 2022</a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
                <span>Đại hội cổ đông thường niên TVSI 2020</span>
              </button>
            </h2>

            <div
              id='collapseThree'
              className='accordion-collapse collapse'
              aria-labelledby='headingThree'
              data-bs-parent='#accordionShareholder'
            >
              <div className='accordion-body'>
                <table className='table'>
                  <tbody>
                    <tr>
                      <td>
                        <a href='#'>Nghị quyết họp ĐHĐCĐ thường niên 2022</a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href='#'>Biên bản họp ĐHĐCĐ thường niên 2022</a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href='#'>Nghị quyết v.v Tổ chức Đại hội đồng cổ đông thường niên năm 2022</a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href='#'>
                          Thông báo v.v Chốt danh sách Cổ đông để tổ chức Đại hội đồng cổ đông thường niên năm 2022
                        </a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href='#'>Thư mời ĐHĐCĐ thường niên TVSI 2022</a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href='#'>Tài liệu ĐHĐCĐ thường niên TVSI 2022</a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingFour'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseFour'
                aria-expanded='false'
                aria-controls='collapseFour'
              >
                <span>Đại hội cổ đông thường niên TVSI 2019</span>
              </button>
            </h2>

            <div
              id='collapseFour'
              className='accordion-collapse collapse'
              aria-labelledby='headingFour'
              data-bs-parent='#accordionShareholder'
            >
              <div className='accordion-body'>
                <table className='table'>
                  <tbody>
                    <tr>
                      <td>
                        <a href='#'>Nghị quyết họp ĐHĐCĐ thường niên 2022</a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href='#'>Biên bản họp ĐHĐCĐ thường niên 2022</a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href='#'>Nghị quyết v.v Tổ chức Đại hội đồng cổ đông thường niên năm 2022</a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href='#'>
                          Thông báo v.v Chốt danh sách Cổ đông để tổ chức Đại hội đồng cổ đông thường niên năm 2022
                        </a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href='#'>Thư mời ĐHĐCĐ thường niên TVSI 2022</a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href='#'>Tài liệu ĐHĐCĐ thường niên TVSI 2022</a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='headingFive'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseFive'
                aria-expanded='false'
                aria-controls='collapseFive'
              >
                <span>
                  Xin ý kiến ĐHĐCĐ 2019 bằng văn bản Thực hiện dịch vụ bù trừ, thanh toán giao dịch chứng khoán phái
                  sinh.
                </span>
              </button>
            </h2>

            <div
              id='collapseFive'
              className='accordion-collapse collapse'
              aria-labelledby='headingFive'
              data-bs-parent='#accordionShareholder'
            >
              <div className='accordion-body'>
                <table className='table'>
                  <tbody>
                    <tr>
                      <td>
                        <a href='#'>Nghị quyết họp ĐHĐCĐ thường niên 2022</a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href='#'>Biên bản họp ĐHĐCĐ thường niên 2022</a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href='#'>Nghị quyết v.v Tổ chức Đại hội đồng cổ đông thường niên năm 2022</a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href='#'>
                          Thông báo v.v Chốt danh sách Cổ đông để tổ chức Đại hội đồng cổ đông thường niên năm 2022
                        </a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href='#'>Thư mời ĐHĐCĐ thường niên TVSI 2022</a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href='#'>Tài liệu ĐHĐCĐ thường niên TVSI 2022</a>
                      </td>
                      <td>
                        <a href='#' className='btn-download'>
                          PDF
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <Pagination/>
      </div>
    </div>
  )
}

export default ShareholdersMeetingLayout
