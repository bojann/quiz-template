import GlobalStyle from './style/theme/globalStyles'
import QuizProvider from './store/QuizProvider'
import routes from 'routes'
import { useRoutes } from 'hookrouter'
import ErrorPage from 'Layout/Error/ErrorPage'
import AppContainer from 'Layout/AppContainer'

const App = () => {
  const router = useRoutes(routes) || <ErrorPage />

  return (
    <AppContainer>
      <GlobalStyle />
      <QuizProvider>{router}</QuizProvider>
    </AppContainer>
  )
}

export default App
