import { useState, useEffect } from 'react'
import AnnualReport from './AnnualReport'
import Breadcrumbs from './Breadcrumbs'
import MainLayout from './Main'
import NavPills from './NavPills'
import ShareholdersMeetingLayout from './ShareholderMeetings'

interface ShareholdersRelationLayoutProps {
  slug: string
}
const ShareholdersRelationLayout = ({ slug }: ShareholdersRelationLayoutProps) => {
  const [contentLayout, setContentLayout] = useState<JSX.Element>()
  useEffect(() => {
    console.log(slug)
    switch (slug) {
      case 'financial-report':
        setContentLayout(<MainLayout title='Báo cáo tài chính' />)
        break
      case 'corporate-governance':
        setContentLayout(<MainLayout title='Quản trị doanh nghiệp' />)
        break
      case 'published-information':
        setContentLayout(<MainLayout title='Thông tin công bố' />)
        break
      case 'shareholder-meetings':
        setContentLayout(<ShareholdersMeetingLayout />)
        break
      case 'annual-report':
        setContentLayout(<AnnualReport />)
        break
      default:
        setContentLayout(<MainLayout title='Báo cáo tài chính' />)
        break
    }
  }, [slug])
  return (
    <section className='investor'>
      <Breadcrumbs />
      <section className='investor-tabs'>
        <div className='container'>
          <div className='tabs-to-dropdown'>
            <NavPills slug={slug}/>
            <div className='tab-content' id='pills-tabContent'>
              {contentLayout}
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default ShareholdersRelationLayout
