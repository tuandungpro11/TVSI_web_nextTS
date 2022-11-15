interface BreadcrumbsProps {
  slug: string
}
const Breadcrumbs = ({ slug }: BreadcrumbsProps) => {
  return (
    <section className='page-breadcrumb'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <h2 className='text-breadcrumb'>Về TVSI</h2>

            <nav aria-label='breadcrumb'>
              <ol className='breadcrumb text-uppercase text-white'>
                <li className='breadcrumb-item'>
                  <a href='index.html'>TRANG CHỦ</a>
                </li>
                <li className='breadcrumb-item'>VỀ TVSI</li>
                <li className='breadcrumb-item' aria-current='page'>
                  TỔNG QUAN
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Breadcrumbs
