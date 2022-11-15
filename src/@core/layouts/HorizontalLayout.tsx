// ** MUI Imports
import Fab from '@mui/material/Fab'
import { styled } from '@mui/material/styles'

// ** Icons Imports
import ArrowUp from 'mdi-material-ui/ArrowUp'

// ** Theme Config Import
import themeConfig from 'src/configs/themeConfig'

// ** Type Import
import { LayoutProps } from 'src/@core/layouts/types'

// ** Components
import Footer from './components/shared-components/footer'
import ScrollToTop from 'src/@core/components/scroll-to-top'

// ** Styled Component
import Header from './Header'
import { CurrentHoverContentType } from 'src/types/enum'
import { handleCurrentHoverContent } from 'src/store/apps/main'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from 'src/store'
import QuickLinks from './QuickLinks'
import { useEffect, useRef, useState } from 'react'
import MobileNavBar from './components/mobile-navbar'

const HorizontalLayoutWrapper = styled('div')({
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  ...(themeConfig.horizontalMenuAnimation && { overflow: 'clip' })
})

const ContentWrapper = styled('main')(({ theme }) => ({
  flexGrow: 1,
  width: '100%',
  padding: theme.spacing(6),
  transition: 'padding .25s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4)
  }
}))

const HorizontalLayout = (props: LayoutProps) => {
  const {
    hidden,
    children,
    settings,
    scrollToTop,
    saveSettings,
    horizontalNavMenuContent: userHorizontalNavMenuContent
  } = props

  const [headerHeight, setHeaderHeight] = useState<number>(0)
  const [stickyHeader, setstickyHeader] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const { contentWidth } = settings
  const store = useSelector((state: RootState) => state.main)
  const headerRef = useRef<HTMLElement>()

  useEffect(() => {
    setHeaderHeight(headerRef.current?.offsetHeight || 0)
  },[headerRef])

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 130 ? setstickyHeader(true) : setstickyHeader(false);
    }
  };

  return (
    <HorizontalLayoutWrapper className='layout-wrapper'>
      <Header store={store} dispatch={dispatch} headerRef={headerRef} sticky={stickyHeader}/>
      <MobileNavBar/>
      <ContentWrapper
        onMouseEnter={() => {
          dispatch(handleCurrentHoverContent(CurrentHoverContentType.CONTENT))
        }}
        className='layout-page-content'
        sx={{
          ...(contentWidth === 'boxed' && {
            mx: 'auto',
            '@media (min-width:1440px)': { maxWidth: '87.5%' },
            '@media (min-width:1200px)': { maxWidth: '100%' }
          })
        }}
      >
        {children}
      </ContentWrapper>

      <Footer {...props} />

      <QuickLinks/>
      {scrollToTop ? (
        scrollToTop(props)
      ) : (
        <ScrollToTop className='mui-fixed'>
          <Fab color='primary' size='small' aria-label='scroll back to top'>
            <ArrowUp />
          </Fab>
        </ScrollToTop>
      )}
    </HorizontalLayoutWrapper>
  )
}

export default HorizontalLayout
