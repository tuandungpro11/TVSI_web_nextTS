import Link from 'next/link'
import TransactionFeeDownload from 'src/views/components/transactionFeeDownload'
import TransactionFeeRedirection from 'src/views/components/transactionFeeRedirection'

const TransactionFee = () => {
  return (
    <main>
      <section className='transaction-fee'>
        <section className='page-breadcrumb page-breadcrumb-transaction-fee'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col'>
                <h2 className='text-breadcrumb'>Biểu phí giao dịch chứng khoán</h2>

                <nav aria-label='breadcrumb'>
                  <ol className='breadcrumb text-uppercase text-white'>
                    <li className='breadcrumb-item'>
                      <a href='/demo'>TRANG CHỦ</a>
                    </li>
                    <li className='breadcrumb-item'>BIỂU PHÍ</li>
                    <li className='breadcrumb-item' aria-current='page'>
                      BIỂU PHÍ GIAO DỊCH CHỨNG KHOÁN
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <div className='main-content'>
          <div className='container'>
            <div className='transaction-content'>
              <div className='transaction-header'>
                Gói dịch vụ có Chuyên viên Quản lý tài khoản, tư vấn, hỗ trợ đặt lệnh & chăm sóc
              </div>
              <ul className='transaction-list list-unstyled'>
                <li>
                  <img src='/images/vendors/ic-check-correct.svg' alt='ic-check-correct' className='img-fluid' />
                  Đặt lệnh qua nhân viên chăm sóc tài khoản
                </li>
                <li>
                  <img src='/images/vendors/ic-check-correct.svg' alt='ic-check-correct' className='img-fluid' />
                  Tư vấn giao dịch, cơ cấu danh mục và cung cấp các khuyến nghị chuyên biệt
                </li>
                <li>
                  <img src='/images/vendors/ic-check-correct.svg' alt='ic-check-correct' className='img-fluid' />
                  Thông báo, hỗ trợ, giải đáp trong quá trình giao dịch
                </li>
                <li>
                  <img src='/images/vendors/ic-check-correct.svg' alt='ic-check-correct' className='img-fluid' />
                  Hướng dẫn chuyển tiền, trải nghiệm giao dịch, sử dụng hệ thống TVSI
                </li>
              </ul>
              <div className='transaction-table'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th scope='col'>Giá trị khớp lệnh theo từng lệnh đặt</th>
                      <th scope='col'>Tất cả các kênh giao dịch</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Trên 3 tỷ</td>
                      <td>0.150%</td>
                    </tr>
                    <tr>
                      <td>Từ 1 tỷ đến 3 tỷ</td>
                      <td>0.200%</td>
                    </tr>
                    <tr>
                      <td>Từ 500 triệu đến 1 tỷ</td>
                      <td>0.250%</td>
                    </tr>
                    <tr>
                      <td>Từ 300 triệu đến 500 triệu</td>
                      <td>0.275%</td>
                    </tr>
                    <tr>
                      <td>Dưới 300 triệu</td>
                      <td>0.300%</td>
                    </tr>
                    <tr>
                      <td>Giao dịch thỏa thuận</td>
                      <td>Áp dụng như giao dịch báo giá</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='fst-italic transaction-desc'>Đơn vị: Đồng. Mức phí đã bao gồm Phí trả Sở giao dịch</p>
              <div className='transaction-header'>
                Gói dịch vụ Chủ động giao dịch và có Chuyên viên đồng hành & chăm sóc
              </div>
              <ul className='transaction-list list-unstyled'>
                <li>
                  <img src='/images/vendors/ic-x-square.svg' alt='ic-x-square' className='img-fluid' />
                  Đặt lệnh qua nhân viên chăm sóc tài khoản
                </li>
                <li>
                  <img src='/images/vendors/ic-check-correct.svg' alt='ic-check-correct' className='img-fluid' />
                  Cung cấp bản tin phân tích thị trường, khuyến nghị đầu tư từ các chuyên gia TVSI
                </li>
                <li>
                  <img src='/images/vendors/ic-check-correct.svg' alt='ic-check-correct' className='img-fluid' />
                  Hỗ trợ giải pháp sản phẩm: cổ phiếu, trái phiếu, chứng chỉ quỹ
                </li>
                <li>
                  <img src='/images/vendors/ic-check-correct.svg' alt='ic-check-correct' className='img-fluid' />
                  Hướng dẫn chuyển tiền, trải nghiệm giao dịch, sử dụng hệ thống TVSI
                </li>
              </ul>
              <div className='transaction-table'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th scope='col' rowSpan={2}>
                        Giá trị khớp lệnh theo từng lệnh đặt
                      </th>
                      <th scope='col' colSpan={2}>
                        Tất cả các kênh giao dịch
                      </th>
                    </tr>
                    <tr>
                      <th>Tổng đài hoặc Sàn giao dịch</th>
                      <th>Kênh trực tuyến (Website & App TVSI)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Trên 3 tỷ</td>
                      <td rowSpan={6} className='border-bottom-0'>
                        0.12%
                      </td>
                      <td>0.150%</td>
                    </tr>
                    <tr>
                      <td>Từ 1 tỷ đến 3 tỷ</td>
                      <td>0.150%</td>
                    </tr>
                    <tr>
                      <td>Từ 500 triệu đến 1 tỷ</td>
                      <td>0.250%</td>
                    </tr>
                    <tr>
                      <td>Từ 300 triệu đến 500 triệu</td>
                      <td>0.275%</td>
                    </tr>
                    <tr>
                      <td>Dưới 300 triệu</td>
                      <td>0.300%</td>
                    </tr>
                    <tr>
                      <td>Giao dịch thỏa thuận</td>
                      <td>Áp dụng như giao dịch báo giá</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='fst-italic transaction-desc'>Đơn vị: Đồng. Mức phí đã bao gồm Phí trả Sở giao dịch</p>
              <div className='transaction-header'>Gói dịch vụ Chủ động giao dịch hoàn toàn</div>
              <ul className='transaction-list list-unstyled'>
                <li>
                  <img src='/images/vendors/ic-check-correct.svg' alt='ic-check-correct' className='img-fluid' />
                  Hỗ trợ qua Tổng đài 1900.1885 hoặc tại Sàn
                </li>
              </ul>
              <div className='transaction-table'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th scope='col' rowSpan={2}>
                        Giá trị khớp lệnh theo từng lệnh đặt
                      </th>
                      <th scope='col' colSpan={2}>
                        Tất cả các kênh giao dịch
                      </th>
                    </tr>
                    <tr>
                      <th>Kênh trực tuyến (Website & App TVSI)</th>
                      <th>Tổng đài hoặc Sàn giao dịch</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Trên 3 tỷ</td>
                      <td rowSpan={6} className='border-bottom-0'>
                        0.12%
                      </td>
                      <td>0.150%</td>
                    </tr>
                    <tr>
                      <td>Từ 1 tỷ đến 3 tỷ</td>
                      <td>0.200%</td>
                    </tr>
                    <tr>
                      <td>Từ 500 triệu đến 1 tỷ</td>
                      <td>0.250%</td>
                    </tr>
                    <tr>
                      <td>Từ 300 triệu đến 500 triệu</td>
                      <td>0.275%</td>
                    </tr>
                    <tr>
                      <td>Dưới 300 triệu</td>
                      <td>0.300%</td>
                    </tr>
                    <tr>
                      <td>Giao dịch thỏa thuận</td>
                      <td>Áp dụng như giao dịch báo giá</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='fst-italic transaction-desc'>Đơn vị: Đồng. Mức phí đã bao gồm Phí trả Sở giao dịch</p>
            </div>
            <TransactionFeeDownload/>
            <TransactionFeeRedirection redirectForIndex={true}/>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TransactionFee
