import { HookRouter } from 'hookrouter'
import QuizCategory from './Layout/QuizCategory'
import Questions from './Layout/Questions'

const routes: HookRouter.RouteObject = {
  '/questions': () => <Questions />,
  '/': () => <QuizCategory />,
}

export default routes
