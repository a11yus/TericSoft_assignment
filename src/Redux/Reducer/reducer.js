import { GET_SPORTS_DATA } from "./actionTypes"

const initialState = {
    data: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case GET_SPORTS_DATA:
    return { 
        ...state,
        data: [ ...payload ]
     }

  default:
    return state
  }
}
