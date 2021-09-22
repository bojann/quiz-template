export interface TState {
  error: boolean | null | string
  loading: boolean
}

type TAction =
  | { type: 'SEND' }
  | { type: 'RESPONSE' }
  | { type: 'ERROR'; errorData: string }
  | { type: 'CLEAR_ERROR' }

const httpReducer = (state: TState, action: TAction): TState => {
  switch (action.type) {
    case 'SEND':
      return { loading: true, error: null }
    case 'RESPONSE':
      return { ...state, loading: false }
    case 'ERROR':
      return { loading: false, error: action.errorData }
    case 'CLEAR_ERROR':
      return { ...state, error: null }
  }
}

export default httpReducer
