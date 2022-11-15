import axios from 'axios'
import { StickerRemove } from 'mdi-material-ui'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'src/store'
import { fetchNewsBySlug } from 'src/store/apps/news'
import { NewsCategoryLayoutType, NewsItem } from 'src/types/apps/newsType'
import Pagination from '@mui/material/Pagination'
import { ChangeEvent } from 'cleave.js/react/props'
import NewsItemCard from 'src/views/components/newsItemCard'
import classNames from "classnames"

const NewsCategoryLayout = ({ slug }: NewsCategoryLayoutType) => {
  const dispatch = useDispatch<AppDispatch>()
  const [page, setPage] = useState<number>(1)
  const [selectedCategory, setSelectedCategory] = useState<string>("tin-tvsi")
  const routeParams = {
    slug: slug || 'tin-tvsi'
  }
  const store = useSelector((state: RootState) => state.news)
  const handleOnPaginationChange = (event: ChangeEvent<any>, value: number) => {
    setPage(value)
  }
  const navPillClassNames = (navPillName: string) : string => {
    return classNames({
        'nav-link': true,
        'active': navPillName == selectedCategory
      })
  } 

  useEffect(() => {
    setSelectedCategory(routeParams.slug)
  }, [slug])

  useEffect(() => {
    dispatch(fetchNewsBySlug({ slug: routeParams.slug, page }))
  }, [dispatch, page, routeParams.slug])

  return (
    <main>
      <section className='active-news'>
        <section className='page-breadcrumb page-breadcrumb-news'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col'>
                <h2 className='text-breadcrumb'>Tin tức hoạt động</h2>
                <nav aria-label='breadcrumb'>
                  <ol className='breadcrumb text-uppercase text-white'>
                    <li className='breadcrumb-item'>
                      <a href='/demo'>TRANG CHỦ</a>
                    </li>
                    <li className='breadcrumb-item'>TIN TỨC HOẠT ĐỘNG</li>
                    <li className='breadcrumb-item' aria-current='page'>
                      TIN TVSI
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section className='investor-tabs'>
          <div className='container px-md-0'>
            <div className='tabs-to-dropdown'>
              <div className='nav-wrapper d-flex align-items-center justify-content-center nav-justified'>
                <ul className='nav nav-pills d-none d-md-flex grid-container w-100' id='pills-tab' role='tablist'>
                  <li className='nav-item' role='presentation'>
                    <Link href="/news/category/tin-tvsi">
                        <a
                            className={navPillClassNames("tin-tvsi")}
                            id='pills-news1-tab'
                            data-toggle='pill'
                            href='#pills-news1'
                            role='tab'
                            aria-controls='pills-news1'
                            aria-selected='true'
                        >
                            Tin TVSI
                        </a>
                    </Link>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <Link href="/news/category/vi-cong-dong">
                        <a
                            className={navPillClassNames("vi-cong-dong")}
                            id='pills-news2-tab'
                            data-toggle='pill'
                            href='#pills-news2'
                            role='tab'
                            aria-controls='pills-news2'
                            aria-selected='false'
                        >
                            TVSI <br />
                            vì cộng đồng
                        </a>
                    </Link>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <Link href="/news/category/voi-bao-chi">
                        <a
                            className={navPillClassNames("voi-bao-chi")}
                            id='pills-news3-tab'
                            data-toggle='pill'
                            href='#pills-news3'
                            role='tab'
                            aria-controls='pills-news'
                            aria-selected='false'
                        >
                            TVSI <br />
                            với báo chí
                        </a>
                    </Link>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <Link href="/news/category/hoat-dong-noi-bo">
                        <a
                            className={navPillClassNames("hoat-dong-noi-bo")}
                            id='pills-news4-tab'
                            data-toggle='pill'
                            href='#pills-news4'
                            role='tab'
                            aria-controls='pills-news4'
                            aria-selected='false'
                        >
                            Hoạt động <br />
                            nội bộ
                        </a>
                    </Link>
                  </li>
                  <li className='nav-item' role='presentation'>
                    <Link href="/news/category/anh-tu-lieu">
                        <a
                            className={navPillClassNames("anh-tu-lieu")}
                            id='pills-news5-tab'
                            data-toggle='pill'
                            href='#pills-news5'
                            role='tab'
                            aria-controls='pills-news5'
                            aria-selected='false'
                        >
                            Ảnh <br />
                            tư liệu
                        </a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className='tab-content' id='pills-tabContent-News'>
                <div
                  className='tab-pane fade show active'
                  id='pills-news1'
                  role='tabpanel'
                  aria-labelledby='pills-news1-tab'
                >
                  <div className='pills-news-tab'>
                    <div className='blog-wrap'>
                      <div className='row'>
                        {store.listNews.map((x) => {
                            return <>
                                <NewsItemCard 
                                    title="TVSI Chi nhánh Thăng Long chính thức được thành lập" 
                                    imgUrl='/images/vendors/blog1.jpeg'
                                    date='20/09/2022'
                                    categoryName='Tin TVSI'
                                    url='#'
                                />
                            </>
                        })}
                      </div>
                      <div className='d-flex flex-end justify-content-center align-items-center page-pagination'>
                        <nav aria-label='Page navigation'>
                          <ul className='pagination justify-content-center mb-0'>
                            <li className='page-item pagination-prev'>
                              <a className='page-link' href='#'>
                                Trang trước
                              </a>
                            </li>
                            <li className='page-item pagination-next'>
                              <a className='page-link' href='#'>
                                Trang sau
                              </a>
                            </li>
                          </ul>
                        </nav>
                        <div className='page-pagination-right'>
                          <span>Page</span>
                          <input type='number' value='1' className='ms-1' /> <span className='ms-1'>of 200</span>
                          <a href='#'>
                            <img src='/images/vendors/pagination-next.svg' alt='pagination next' />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  )

  // return <>
  //     <p>Active category: {slug}</p>
  //     <div>
  //         <Link href="/news/category/tin-tvsi">Tin TVSI</Link>
  //         <Link href="/news/category/anh-tu-lieu">Ảnh tư liệu</Link>
  //         <Link href="/news/category/vi-cong-dong">Vì cộng đồng</Link>
  //     </div>
  //     <ul>
  //         {store.listNews.length > 0 && store.listNews.map((news: NewsItem) => {
  //             return <li key={`${news.title}-${news.id}`}><Link href={`/news/${news.id.toString()}`}>{news.title}</Link></li>
  //         })}
  //     </ul>
  //     {store.totalPage && <Pagination count={store.totalPage} page={page} onChange={handleOnPaginationChange}/>}
  // </>
}

export default NewsCategoryLayout
