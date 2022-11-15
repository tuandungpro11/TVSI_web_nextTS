import classnames from "classnames"
import Link from "next/link"
interface NavPillsProps {
  slug: string
}
const NavPills = ({ slug }: NavPillsProps) => {
  const financialReportClassnames = classnames('nav-link', {
    'active': slug === 'financial-report'
  })
  return (
    <div className='nav-wrapper d-flex align-items-center justify-content-center nav-justified'>
      <ul className='nav nav-pills d-none d-md-flex grid-container w-100' id='pills-tab' role='tablist'>
        <li className='nav-item' role='presentation'>
          <Link href='/shareholdersRelation/financial-report'>
            <a
              className={`nav-link ${slug==='financial-report' ? 'active' : ''}`}
              id='pills-report-tab'
            >
              Báo cáo <br />
              tài chính
            </a>
          </Link>
        </li>
        <li className='nav-item' role='presentation'>
          <Link href='/shareholdersRelation/corporate-governance'>
            <a
              className={`nav-link ${slug==='corporate-governance' ? 'active' : ''}`}
              id='pills-enterprise-tab'
            >
              Quản trị <br />
              doanh nghiệp
            </a>
          </Link>
        </li>
        <li className='nav-item' role='presentation'>
          <Link href='/shareholdersRelation/published-information'>
            <a
              className={`nav-link ${slug==='published-information' ? 'active' : ''}`}
              id='pills-news-tab'
            >
              Thông tin <br />
              công bố
            </a>
          </Link>
        </li>
        <li className='nav-item' role='presentation'>
        <Link href='/shareholdersRelation/shareholder-meetings'>
          <a
            className={`nav-link ${slug==='shareholder-meetings' ? 'active' : ''}`}
            id='pills-shareholder-tab'
          >
            Đại hội <br />
            cổ đông
          </a>
        </Link>
        </li>
        <li className='nav-item' role='presentation'>
          <Link href='/shareholdersRelation/annual-report'>
            <a
              className={`nav-link ${slug==='annual-report' ? 'active' : ''}`}
              id='pills-annual-report-tab'
            >
              Báo cáo <br />
              thường niên
            </a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavPills
