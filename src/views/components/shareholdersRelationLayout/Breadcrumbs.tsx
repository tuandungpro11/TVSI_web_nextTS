const Breadcrumbs = () => {
  return (
    <section className='page-breadcrumb page-breadcrumb-invest'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col'>
              <h2 className='text-breadcrumb'>Quan hệ nhà đầu tư</h2>
              <nav aria-label='breadcrumb'>
                <ol className='breadcrumb text-uppercase text-white'>
                  <li className='breadcrumb-item'>
                    <a href='index.html'>TRANG CHỦ</a>
                  </li>
                  <li className='breadcrumb-item'>QUAN HỆ NHÀ ĐẦU TƯ</li>
                  <li className='breadcrumb-item' aria-current='page'>
                    ĐẠI HỘI CỔ ĐÔNG
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
