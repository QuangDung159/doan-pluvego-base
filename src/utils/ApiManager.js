import { ENDPOINT } from "./Constants"
import { getWithToken, post, postWithToken } from "./RestAPI"

export const loginAsync = async body => {
  return await post(ENDPOINT.AUTHENTICATION.LOGIN, body)
}

export const getCurrentUserAsync = async (userId) => {
  return await getWithToken(ENDPOINT.USER.GET_CURRENT_USER)
}

export const getCurrentAdminAsync = async (adminId) => {
  return await getWithToken(ENDPOINT.USER.GET_CURRENT_ADMIN)
}

export const checkValidTokenAsync = async body => {
  return await postWithToken(
    ENDPOINT.AUTHENTICATION.CHECK_PROTECTED_ROUTE,
    body
  )
}
