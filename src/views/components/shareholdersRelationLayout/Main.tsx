import { useEffect, useState } from 'react'
import Breadcrumbs from './Breadcrumbs'
import NavPills from './NavPills'
import Pagination from './Pagination'

interface MainLayoutProps {
  title: string
}

const MainLayout = ({ title }: MainLayoutProps) => {
  return (
    <div className='pills-report-tab'>
      <h2 className='tab-title'>{title}</h2>
      <div className='finance-report box-shadow'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col' className='ps-0'>
                Tên tài liệu
              </th>
              <th scope='col' className='text-center'>
                Ngày cập nhật
              </th>
              <th scope='col'>Tải xuống</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href='#'>Báo cáo tỷ lệ an toàn tài chính tại ngày 30.6.2022 đã kiểm toán</a>
              </td>
              <td className='text-center'>12/08/2022</td>
              <td>
                <a href='#' className='btn-download'>
                  PDF
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href='#'>
                  Báo cáo tài chính 6 tháng đầu năm 2022 đã kiểm toán và giải trình chênh lệch lợi nhuận sau thuế
                </a>
              </td>
              <td className='text-center'>12/08/2022</td>
              <td>
                <a href='#' className='btn-download'>
                  PDF
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href='#'>CBTT Báo cáo tài chính Quý 2 năm 2022 và Giải trình chênh lệch lợi nhuận sau thuế</a>
              </td>
              <td className='text-center'>12/08/2022</td>
              <td>
                <a href='#' className='btn-download'>
                  PDF
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href='#'>Báo cáo tài chính Quý I-2022</a>
              </td>
              <td className='text-center'>12/08/2022</td>
              <td>
                <a href='#' className='btn-download'>
                  PDF
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href='#'>Báo cáo Tỷ lệ An toàn tài chính 2021 đã kiểm toán</a>
              </td>
              <td className='text-center'>12/08/2022</td>
              <td>
                <a href='#' className='btn-download'>
                  PDF
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href='#'>Báo cáo Tài chính 2021 đã kiểm toán</a>
              </td>
              <td className='text-center'>12/08/2022</td>
              <td>
                <a href='#' className='btn-download'>
                  PDF
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href='#'>Báo cáo tài chính Quý IV-2021</a>
              </td>
              <td className='text-center'>12/08/2022</td>
              <td>
                <a href='#' className='btn-download'>
                  PDF
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href='#'>Báo cáo tài chính Quý III-2021</a>
              </td>
              <td className='text-center'>12/08/2022</td>
              <td>
                <a href='#' className='btn-download'>
                  PDF
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href='#'>Báo cáo tỷ lệ an toàn tài chính bán niên 2021 đã được kiểm</a>
              </td>
              <td className='text-center'>12/08/2022</td>
              <td>
                <a href='#' className='btn-download'>
                  PDF
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a href='#'>Báo cáo tỷ lệ an toàn tài chính bán niên 2021 đã được kiểm</a>
              </td>
              <td className='text-center'>12/08/2022</td>
              <td>
                <a href='#' className='btn-download'>
                  PDF
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination/>
    </div>
  )
}

export default MainLayout
