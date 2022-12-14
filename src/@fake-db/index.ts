import mock from './mock'

import './cards'
import './table'
import './auth/jwt'
import './apps/chat'
import './pages/faq'
import './apps/email'
import './apps/news'
import './apps/categories'
import './apps/invoice'
import './autocomplete'
import './apps/userList'
import './apps/calendar'
import './pages/pricing'
import './app-bar-search'
import './apps/permissions'
import './pages/knowledge-base'
import './server-side-menu/vertical'
import './server-side-menu/horizontal'

mock.onAny().passThrough()
