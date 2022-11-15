import TransactionFeeDownload from "src/views/components/transactionFeeDownload"
import TransactionFeeRedirection from "src/views/components/transactionFeeRedirection"

const TransactionFeeBond = () => {
  return (
    <main>
      <section className='transaction-fee'>
        <section className='page-breadcrumb page-breadcrumb-transaction-fee'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col'>
                <h2 className='text-breadcrumb'>Biểu phí giao dịch trái phiếu</h2>

                <nav aria-label='breadcrumb'>
                  <ol className='breadcrumb text-uppercase text-white'>
                    <li className='breadcrumb-item'>
                      <a href='index.html'>TRANG CHỦ</a>
                    </li>
                    <li className='breadcrumb-item'>BIỂU PHÍ</li>
                    <li className='breadcrumb-item' aria-current='page'>
                      BIỂU PHÍ GIAO DỊCH TRÁI PHIẾU
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
              <div className='transaction-header'>Giao dịch Trái phiếu đã niêm yết</div>
              <div className='transaction-table transaction-table-other'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th scope='col'>Phí dịch vụ</th>
                      <th scope='col'>Phí tối thiểu</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Từ 0.1% đến 0.2% giá trị giao dịch</td>
                      <td>10,000 VND/giao dịch</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='transaction-header'>Giao dịch ký quỹ</div>
              <div className='transaction-table transaction-table-other'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th scope='col'>Phí dịch vụ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Lãi suất áp dụng sẽ tùy theo gói sản phẩm dịch vụ sử dụng</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='transaction-header'>Ứng trước tiền bán chứng khoán</div>
              <div className='transaction-table transaction-table-other'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th scope='col'>Phí ứng trước</th>
                      <th scope='col'>Phí tối thiểu</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>0.04% * giá trị ứng trước * số ngày ứng trước</td>
                      <td>20,000 VND/lệnh</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <TransactionFeeDownload />
            <TransactionFeeRedirection redirectForBond={true}/>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TransactionFeeBond
