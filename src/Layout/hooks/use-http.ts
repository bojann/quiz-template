import axios from 'axios'
import httpReducer from 'Layout/reducer'
import { useCallback, useReducer } from 'react'

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    loading: false,
    error: null,
  })

  const getData = useCallback(async (reqConfig, applyData) => {
    dispatchHttp({ type: 'SEND' })
    axios({
      method: 'get',
      url: reqConfig.url,
    })
      .then((response) => {
        dispatchHttp({ type: 'RESPONSE' })
        applyData(response.data)
      })
      .catch((error: Error) => {
        dispatchHttp({ type: 'ERROR', errorData: error.message })
      })
  }, [])

  return {
    loading: httpState.loading,
    error: httpState.error,
    getData,
  }
}

export default useHttp
