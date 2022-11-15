import TransactionFeeDownload from "src/views/components/transactionFeeDownload"
import TransactionFeeRedirection from "src/views/components/transactionFeeRedirection"

const TransactionFeeOther = () => {
  return (
    <main>
      <section className='transaction-fee'>
        <section className='page-breadcrumb page-breadcrumb-transaction-fee'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col'>
                <h2 className='text-breadcrumb'>Biểu phí các dịch vụ khác</h2>

                <nav aria-label='breadcrumb'>
                  <ol className='breadcrumb text-uppercase text-white'>
                    <li className='breadcrumb-item'>
                      <a href='index.html'>TRANG CHỦ</a>
                    </li>
                    <li className='breadcrumb-item'>BIỂU PHÍ</li>
                    <li className='breadcrumb-item' aria-current='page'>
                      BIỂU PHÍ CÁC DỊCH VỤ KHÁC
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
                Chuyển tiền từ tài khoản chứng khoán ra tài khoản Ngân hàng đăng ký
              </div>
              <div className='transaction-table transaction-table-other'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th scope='col'>Phí dịch vụ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Được quy định bởi từng Ngân hàng. TVSI không thu phí trung gian</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='transaction-header'>Đóng tài khoản</div>
              <div className='transaction-table transaction-table-other'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th scope='col'>Phí dịch vụ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>100,000 VND/tài khoản</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='transaction-header'>Rút chứng khoán</div>
              <div className='transaction-table transaction-table-other'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th scope='col'>Phí dịch vụ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>100,000 VND/hồ sơ</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='transaction-header'>Đấu giá</div>
              <div className='transaction-table transaction-table-other'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th scope='col'>Phí dịch vụ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Miễn phí</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='transaction-header'>Dịch vụ khác</div>
              <div className='transaction-table transaction-table-other'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th scope='col'>Dịch vụ</th>
                      <th scope='col'>Phí dịch vụ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Cấp mã số giao dịch cho khách hàng nước ngoài</td>
                      <td>Miễn phí</td>
                    </tr>
                    <tr>
                      <td>Chuyển khoán chứng khoán giữa tài khoản thường và tài khoản ký quỹ</td>
                      <td>Miễn phí</td>
                    </tr>
                    <tr>
                      <td>Đấu thầu trái phiếu</td>
                      <td>0.05% giá trị mỗi giao dịch</td>
                    </tr>
                    <tr>
                      <td>Xác nhận chuyển nhượng OTC</td>
                      <td>
                        <ul className='mb-0 text-left'>
                          <li>Phí tối thiểu: 50,000 VND/lần</li>
                          <li>
                            Nếu cổ phiếu do TVSI quản lý sổ cổ đông: Phí tối đa và Phí xác nhận chuyển nhượng: Theo hợp
                            đồng ký kết với tổ chức phát hành.
                          </li>
                          <li>
                            Nếu cổ phiếu đã lưu ký tại Trung tâm lưu ký: Phí xác nhận chuyển nhượng: 0.4% (đã bao gồm
                            phí thu hộ Trung tâm lưu ký, chưa gồm thuế, phí khác).
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Phong tỏa cổ phiếu cầm cố, repo</td>
                      <td>
                        <ul className='mb-0 text-left'>
                          <li>Phí tối thiểu: 50,000 VND/lần</li>
                          <li>Phí tối đa: Không quá 2,000,000 VND/lần</li>
                          <li>Phí phong tỏa: 0.5 VND/chứng khoán/lần/mã chứng khoán</li>
                          <li>Các khoản phí khác theo quy định của Ngân hàng</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Giao dịch lô lẻ</td>
                      <td>30% giá trị mỗi giao dịch</td>
                    </tr>
                    <tr>
                      <td>In sao kê giao dịch, xác nhận số dư tiền, chứng khoán</td>
                      <td>10,000 VND/bản (sao kê/số dư tiền/số dư chứng khoán)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='transaction-table transaction-table-other'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th scope='col'>Dịch vụ</th>
                      <th scope='col'>Thu hộ VSD</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={2} className='text-primary fst-italic fw-bold'>
                        Phí lưu ký chứng khoán
                      </td>
                    </tr>
                    <tr>
                      <td>Cổ phiếu, chứng chỉ quỹ, chứng quyền có đảm bảo</td>
                      <td>0.27 VND/cổ phiếu, chứng chỉ quỹ, chứng quyền/tháng</td>
                    </tr>
                    <tr>
                      <td>Trái phiếu</td>
                      <td>0.2 VND/trái phiếu/tháng</td>
                    </tr>
                    <tr>
                      <td colSpan={2} className='text-primary fst-italic fw-bold'>
                        Phí chuyển khoản chứng khoán
                      </td>
                    </tr>
                    <tr>
                      <td>Phí chuyển khoản chứng khoán phát sinh do nhà đầu tư tất toán tài khoản</td>
                      <td>
                        0.3 VND/chứng khoán/lần chuyển khoản/mã chứng khoán
                        <br />
                        (tối đa không quá 300,000 VND/lần/mã chứng khoán)
                      </td>
                    </tr>
                    <tr>
                      <td>Phí chuyển khoản phát sinh để thực hiện thanh toán</td>
                      <td>
                        0.3 VND/chứng khoán/lần chuyển khoản/mã chứng khoán
                        <br />
                        (tối đa không quá 300,000 VND/lần/mã chứng khoán)
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2} className='text-primary fst-italic fw-bold'>
                        Phí chuyển quyền sở hữu chứng khoán không qua hệ thống giao dịch của Sở giao dịch chứng khoán
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className='mb-0'>Chuyển nhượng chứng khoán do:</p>
                        <ul className='mb-0 text-left'>
                          <li>
                            Cổ đông sáng lập đang trong thời gian hạn chế chuyển nhượng theo quy định của pháp luật
                          </li>
                          <li>Các trường hợp chuyển nhượng được cơ quan nhà nước chấp thuận</li>
                          <li>Chứng khoán đã niêm yết/đăng ký giao dịch do UBCKNN chấp thuận</li>
                          <li>
                            Công ty đại chúng đã đăng ký chứng khoán tại VSD nhưng chưa, không niêm yết hoặc đăng ký
                            giao dịch trên Sở giao dịch Chứng khoán
                          </li>
                        </ul>
                      </td>
                      <td>0.1% giá trị mỗi giao dịch</td>
                    </tr>
                    <tr>
                      <td>
                        Chuyển quyền sở hữu chứng khoán do chia tách, sáp nhập, hợp nhật, góp vốn bằng cổ phiếu thành
                        lập
                      </td>
                      <td>0.2% giá trị mỗi giao dịch</td>
                    </tr>
                    <tr>
                      <td>
                        Biếu, tặng, thừa kế chứng khoán, trừ các trường hợp biếu, tặng, cho, thừa kế giữa vợ với chồng;
                        giữa cha đẻ, mẹ đẻ với con cái; cha nuôi, mẹ nuôi với con nuôi; giữa cha chồng, mẹ chồng với con
                        dâu; giữa cha vợ, mẹ vợ với con rể; giữa ông nội, bà nội với cháu nội; giữa ông ngoại, bà ngoại
                        với cháu ngoại; giữa anh, chị, em ruột với nhau
                      </td>
                      <td>0.1% giá trị mỗi giao dịch</td>
                    </tr>
                    <tr>
                      <td>Chuyển quyền sở hữu do thực hiện chào mua công khai</td>
                      <td>0.03% giá trị mỗi giao dịch</td>
                    </tr>
                    <tr>
                      <td>
                        Chuyển quyền sở hữu do bán phần vốn nhà nước, vốn của doanh nghiệp nhà nước đầu tư với doanh
                        nghiệp khác
                      </td>
                      <td>0.03% giá trị mỗi giao dịch</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <TransactionFeeDownload/>
            <TransactionFeeRedirection redirectForOther={true}/>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TransactionFeeOther
