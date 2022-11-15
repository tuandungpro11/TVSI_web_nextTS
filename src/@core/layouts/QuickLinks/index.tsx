import classNames from 'classnames'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'src/store'
import { handleCurrentHoverContent } from 'src/store/apps/main'
import { CurrentHoverContentType } from 'src/types/enum'
import QuickLinksContainer from './QuickLinksContainer'

const QuickLinks = () => {
  const dispatch = useDispatch<AppDispatch>()
  const [quickLinksOpen, setQuickLinksOpen] = useState(false)
  const menuClassName = classNames({
    'dropdown-menu': true,
    show: quickLinksOpen
  })
  const buttonClassName = classNames('btn-quick-links fw-semibold js-quick-links', {
    show: quickLinksOpen
  })
  return (
    <div
      className='dropup quick-links'
      onMouseEnter={() => {
        dispatch(handleCurrentHoverContent(CurrentHoverContentType.QUICKLINKS))
      }}
    >
      <a
        onClick={() => setQuickLinksOpen(!quickLinksOpen)}
        type='button'
        className={buttonClassName}
        role='button'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        <span style={{color: "#fff"}}>Liên kết nhanh</span>
        <picture>
          <source media='(max-width: 576px)' srcSet='/images/vendors/ic-caret-quick-link-mb.svg' />
          <source media='(min-width: 577px)' srcSet='/images/vendors/ic-caret-quick-link.svg' />
          <img src='/images/vendors/ic-caret-quick-link.svg' alt='caret icon' />
        </picture>
      </a>
      <QuickLinksContainer menuClassName={menuClassName}/>
    </div>
  )
}

export default QuickLinks
