import { useEffect, useState } from 'react'
import Breadcrumbs from './Breadcrumbs'
import EnterpriseValue from './EnterpriseValue'
import Milestones from './Milestones'
import NavPills from './NavPills'
import Overview from './Overview'
import Profile from './Profile'
import Teams from './Teams'
import TransactionNetwork from './TransactionNetwork'

interface AboutLayoutProps {
  slug: string
}

const AboutLayout = ({ slug }: AboutLayoutProps) => {
  const [contentLayout, setContentLayout] = useState<JSX.Element>()
  useEffect(() => {
    switch (slug) {
      case 'index':
        setContentLayout(<Overview />)
        break
      case 'enterprise-value':
        setContentLayout(<EnterpriseValue />)
        break
      case 'milestones':
        setContentLayout(<Milestones />)
        break
      case 'teams':
        setContentLayout(<Teams />)
        break
      case 'transaction-network':
        setContentLayout(<TransactionNetwork />)
        break
      case 'profile':
        setContentLayout(<Profile />)
        break
      default:
        setContentLayout(<Overview />)
        break
    }
  }, [slug])
  return (
    <main>
      <Breadcrumbs slug={slug}/>
      <section className='about-us'>
        <section className='about-tabs'>
          <NavPills slug={slug}/>
          <div className='container'>
            <div className='tab-content' id='pills-tabContent'>
              {contentLayout}
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}

export default AboutLayout
