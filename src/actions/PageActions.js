import {
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_REQUEST
} from './../constants/Page'

export function getPhotos(year) {
  return (dispatch) => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year
    })

    setTimeout(() => {
      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: [1, 2, 3, 4, 5]
      })
    }, 1000)
  }
}