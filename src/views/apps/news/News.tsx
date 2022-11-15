import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'src/store'
import { fetchNewsById } from 'src/store/apps/news'
import { NewsDetailType } from 'src/types/apps/newsType'
import DOMPurify from 'isomorphic-dompurify'
import ArticleBox from 'src/views/components/articleBox'

const NewsLayout = ({ id }: NewsDetailType) => {
  const dispatch = useDispatch<AppDispatch>()
  const [content, setContent] = useState<string>('')
  const routeParams = {
    id: id
  }
  const store = useSelector((state: RootState) => state.news)

  useEffect(() => {
    setContent(`<p>
    Căn cứ Quyết định số 701/QĐ-UBCKNN ban hành ngày 20/9/2022, Công ty cổ phần Chứng khoán Tân Việt
    (TVSI) trân trọng thông báo TVSI Chi nhánh Thăng Long chính thức được thành lập, với chức năng
    hoạt động chính là Môi giới chứng khoán và Tư vấn đầu tư chứng khoán.
  </p>
  <div className='my-4'>
    <img src='/images/vendors/article2.jpeg' alt='article img' className='img-fluid' />
  </div>
  <p>
    Tọa lạc ngay vị trí trung tâm Quận Hoàn Kiếm - Hà Nội tại Tầng 10, số 25 Lý Thường Kiệt – TVSI Chi
    nhánh Thăng Long có lợi thế đắc địa, thuận tiện cho mọi Nhà đầu tư tới giao dịch. Chi nhánh được
    thiết kế theo phong cách hiện đại và trẻ trung hướng tới tiêu chuẩn 5 sao trong ngành tài chính
    nhằm mang lại không gian văn phòng sang trọng, thoải mái và tiện nghi cho đội ngũ nhân viên cũng
    như khách hàng của TVSI.
  </p>
  <p>
    Với trọng trách Giám đốc TVSI Chi nhánh Thăng Long, Ông Nguyễn Trung Du - Giám đốc Dịch vụ Đầu Tư
    và Quản lý Tài sản TVSI - chia sẻ niềm tự hào của người đứng đầu đơn vị mới và cam kết sẽ dẫn dắt,
    đồng hành cùng đội ngũ không ngừng nỗ lực sáng tạo, nắm bắt những thách thức, cơ hội, để mang tới
    Khách hàng những sản phẩm dịch vụ chất lượng tốt nhất, xứng đáng là một cánh tay đắc lực đưa
    thương hiệu Chứng khoán Tân Việt ngày càng tới gần hơn với cộng đồng Khách hàng, Đối tác, Nhà Đầu
    tư.
  </p>
  <p className='fst-italic'>(TVSI)</p>`)
  }, [])

  useEffect(() => {
    dispatch(fetchNewsById({ id: routeParams.id || '' }))
  }, [dispatch, routeParams.id])
  return (
    <>
      <main>
        <section className='stock-investment'>
          <section className='page-breadcrumb page-breadcrumb-article'>
            <div className='container'>
              <div className='row'>
                <div className='col'>
                  <nav aria-label='breadcrumb'>
                    <ol className='breadcrumb text-uppercase mb-0'>
                      <li className='breadcrumb-item'>
                        <Link href='/demo'>
                          <a className='text-black'>TRANG CHỦ</a>
                        </Link>
                      </li>
                      <li className='breadcrumb-item'>
                        <Link href='/news/category/tin-tvsi'>
                          <a className='text-black'>TIN TỨC HOẠT ĐỘNG</a>
                        </Link>
                      </li>
                      <li className='breadcrumb-item' aria-current='page'>
                        <Link href='/news/category/tin-tvsi'>
                          <a className='text-black'>TIN TVSI</a>
                        </Link>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </section>
          <div className='article-content'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-8'>
                  <div className='article-content-left'>
                    <img src='/images/vendors/article1.jpeg' alt='article img' className='img-fluid' />
                    <h2>TVSI Chi nhánh Thăng Long chính thức được thành lập</h2>
                    <span className='date'>Date: 20/09/2022</span>
                    <div
                      className='article-content'
                      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}></div>
                    <div className='share-content'>
                      <div className='d-flex align-items-center'>
                        <span>Chia sẻ bài viết:</span>
                        <ul className='d-flex list-unstyled mb-0'>
                          <li>
                            <a href='#'>
                              <img src='/images/vendors/ic-share-fb.svg' alt='share fb' className='img-fluid' />
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <img src='/images/vendors/ic-share-google.svg' alt='share google' className='img-fluid' />
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <img
                                src='/images/vendors/ic-share-twitter.svg'
                                alt='share twitte'
                                className='img-fluid'
                              />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='article-content-right'>
                    <ArticleBox title='Tin nổi bật' listNews={[]} />
                    <ArticleBox title='Tin mới nhất' listNews={[]} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default NewsLayout
