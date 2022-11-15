import Link from "next/link"
interface NavPillsInterface {
  slug: string
}
const NavPills = ({slug}: NavPillsInterface) => {
  return (
    <div className='container wrap-tab-dropdown'>
      <div className='tabs-to-dropdown'>
        <div className='nav-wrapper d-flex align-items-center justify-content-center nav-justified'>
          <ul className='nav nav-pills d-none d-md-flex grid-container w-100' id='pills-tab' role='tablist'>
            <li className='nav-item' role='presentation'>
              <Link href='/about/index'>
                <a className={`nav-link ${slug === 'index' ? 'active' : ''}`}>
                  Tổng quan
                </a>
              </Link>
            </li>
            <li className='nav-item' role='presentation'>
              <Link href='/about/enterprise-value'>
              <a className={`nav-link ${slug === 'enterprise-value' ? 'active' : ''}`}>
                  Giá trị <br />
                  doanh nghiệp
                </a>
              </Link>
            </li>
            <li className='nav-item' role='presentation'>
              <Link href='/about/milestones'>
              <a className={`nav-link ${slug === 'milestones' ? 'active' : ''}`}>
                  Mốc son <br />
                  phát triển
                </a>
              </Link>
            </li>
            <li className='nav-item' role='presentation'>
              <Link href='/about/teams'>
              <a className={`nav-link ${slug === 'teams' ? 'active' : ''}`}>
                  Đội ngũ
                </a>
              </Link>
            </li>
            <li className='nav-item' role='presentation'>
              <Link href='/about/transaction-network'>
              <a className={`nav-link ${slug === 'transaction-network' ? 'active' : ''}`}>
                  Mạng lưới <br />
                  chi nhánh
                </a>
              </Link>
            </li>
            <li className='nav-item' role='presentation'>
              <Link href='profile'>
              <a className={`nav-link ${slug === 'profile' ? 'active' : ''}`}>
                  Hồ sơ <br />
                  năng lực
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavPills
