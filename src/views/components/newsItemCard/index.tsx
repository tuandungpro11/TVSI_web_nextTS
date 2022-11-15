interface NewsItemCardProps {
    title: string
    slug?: string
    url: string
    date: string
    imgUrl?: string
    categoryName: string
}

const NewsItemCard = ({ title, slug, url, date, imgUrl, categoryName }: NewsItemCardProps) => {
  return (
    <>
      <div className='col-md-6 col-lg-4'>
        <div className='blog-item'>
          <div className='blog-img'>
            <a href={url} className='d-block'>
              <img src={imgUrl} alt='blog img' className='img-fluid' />
            </a>
          </div>
          <div className='blog-content'>
            <h5>
              <a href={url}>{title}</a>
            </h5>

            <p className='mb-0'>{categoryName} | {date}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsItemCard
