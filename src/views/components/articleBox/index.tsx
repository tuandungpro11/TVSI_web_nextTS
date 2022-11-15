import { NewsItem } from "src/types/apps/newsType"

interface ArticleBoxInterface {
    title: string
    listNews: NewsItem[]
}
const ArticleBox = ({ title, listNews}: ArticleBoxInterface) => {
  return (
    <div className='article-box'>
      <h4>{title}</h4>
      <hr />
      <div className='article-thumb'>
        <div className='article-thumb-img'>
          <a href='#' className='d-block'>
            <img src='/images/vendors/article-thumb1.jpeg' alt='article thumb' className='img-fluid' />
          </a>
        </div>
        <div className='article-thumb-content'>
          <h5 className='fw-semibold'>
            <a href='#'>ACG: Bổ sung CBTT về hồ sơ của chứng khoán mới niêm yết</a>
          </h5>

          <p className='mb-0'>Tin TVSI | 22/08/2022</p>
        </div>
      </div>
      <div className='article-thumb'>
        <div className='article-thumb-img'>
          <a href='#' className='d-block'>
            <img src='/images/vendors/article-thumb2.jpeg' alt='article thumb' className='img-fluid' />
          </a>
        </div>
        <div className='article-thumb-content'>
          <h5 className='fw-semibold'>
            <a href='#'>ACG: Bổ sung CBTT về hồ sơ của chứng khoán mới niêm yết</a>
          </h5>

          <p className='mb-0'>Tin TVSI | 22/08/2022</p>
        </div>
      </div>
      <div className='article-thumb'>
        <div className='article-thumb-img'>
          <a href='#' className='d-block'>
            <img src='/images/vendors/article-thumb3.jpeg' alt='article thumb' className='img-fluid' />
          </a>
        </div>
        <div className='article-thumb-content'>
          <h5 className='fw-semibold'>
            <a href='#'>ACG: Bổ sung CBTT về hồ sơ của chứng khoán mới niêm yết</a>
          </h5>

          <p className='mb-0'>Tin TVSI | 22/08/2022</p>
        </div>
      </div>
      <div className='article-thumb'>
        <div className='article-thumb-img'>
          <a href='#' className='d-block'>
            <img src='/images/vendors/article-thumb4.jpeg' alt='article thumb' className='img-fluid' />
          </a>
        </div>
        <div className='article-thumb-content'>
          <h5 className='fw-semibold'>
            <a href='#'>ACG: Bổ sung CBTT về hồ sơ của chứng khoán mới niêm yết</a>
          </h5>

          <p className='mb-0'>Tin TVSI | 22/08/2022</p>
        </div>
      </div>
    </div>
  )
}

export default ArticleBox
