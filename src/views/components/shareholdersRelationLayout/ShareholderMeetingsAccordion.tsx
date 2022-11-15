interface ShareholdermeetingAccordionProps {
    title: string
}
const ShareholderMeetingAccordion = ({ title }: ShareholdermeetingAccordionProps) => {
  return (
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
          <span>Đại hội cổ đông thường niên TVSI 2022</span>
        </button>
      </h2>

      <div
        id='collapseOne'
        className='accordion-collapse collapse show'
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
  )
}

export default ShareholderMeetingAccordion
