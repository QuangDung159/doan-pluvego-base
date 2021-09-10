import axios from "axios"
import { ENDPOINT } from "./Constants"

// const baseUrl = "https://pick-me-api-v1.herokuapp.com/api/v1"
const baseUrl = "https://plugove1.free.beeceptor.com"

export const get = async (url, headers = {}) => {
  const response = await axios.get(`${baseUrl}${url}`, headers)

  console.log(`GET ${url} :>> `, response.data)
  return response.data
}

export const getWithToken = async (url, headers = {}) => {
  const token = localStorage.getItem("token")
  const response = await axios
    .get(`${baseUrl}${url}`, {
      headers: {
        ...headers,
        Authorization: token
      }
    })
    .catch(error => {
      console.log("error :>> ", error)
    })

  console.log(`GET ${url} :>> `, response?.data)
  switch (url) {
    case ENDPOINT.USER.GET_CURRENT_USER: {
      return {
        status: 200,
        data: {
          nom: "User",
          prenom: "User",
          fonction: "Fonction",
          email: "user@mail.com",
          phoneNum: "123123123",
          id: "user123"
        }
      }
    }
    case ENDPOINT.USER.GET_CURRENT_ADMIN: {
      return {
        status: 200,
        data: {
          nom: "Admin",
          prenom: "Admin",
          fonction: "Fonction",
          email: "admin@mail.com",
          phoneNum: "123123123",
          id: "admin123"
        }
      }
    }
    default: {
      return {
        status: 401
      }
    }
  }
}

export const post = async (url, body = {}, headers = {}) => {
  const response = await axios
    .post(`${baseUrl}${url}`, body, headers)
    .catch(error => {
      console.log("error :>> ", error)
    })

  console.log(`POST ${url} :>> `, response?.data)

  if (response?.data) {
    return response.data
  } else {
    switch (url) {
      case ENDPOINT.AUTHENTICATION.CHECK_PROTECTED_ROUTE: {
        return {
          status: 200
        }
      }
      case ENDPOINT.AUTHENTICATION.LOGIN: {
        switch (body.username) {
          case "admin@mail.com": {
            return {
              status: 200,
              data: {
                message: "Login success",
                token:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwibmFtZSI6IkpvaG4gRG9lIiwidHlwZSI6ImFkbWluIn0.qvqvE7ZZdo8MSYdNE4TS_7qggYQV5wdgs1_3TIM7y7M"
              }
            }
          }
          case "user@mail.com": {
            return {
              status: 200,
              data: {
                message: "Login success",
                token:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwibmFtZSI6IkpvaG4gRG9lIiwidHlwZSI6InVzZXIifQ.5b_JXUPfljZ4sf-DxliA6x9FF32RUJqrdjYd2RmxJHE"
              }
            }
          }
          default: {
            return {
              status: 401,
              data: {
                message: "Account not authorized"
              }
            }
          }
        }
      }
      case ENDPOINT.USER.GET_CURRENT_USER: {
        return {
          status: 200,
          data: {
            nom: "User",
            prenom: "User",
            fonction: "Fonction",
            email: "user@mail.com",
            phoneNum: "123123123",
            id: "user123"
          }
        }
      }
      case ENDPOINT.USER.GET_CURRENT_ADMIN: {
        return {
          status: 200,
          data: {
            nom: "Admin",
            prenom: "Admin",
            fonction: "Fonction",
            email: "admin@mail.com",
            phoneNum: "123123123",
            id: "admin123"
          }
        }
      }
      default: {
        return {
          status: 401
        }
      }
    }
  }
}

export const postWithToken = async (url, body = {}, headers = {}) => {
  const token = localStorage.getItem("token")
  const response = await axios
    .post(`${baseUrl}${url}`, body, {
      ...headers,
      Authorization: token
    })
    .catch(error => {
      console.log("error :>> ", error)
    })

  console.log(`POST ${url} :>> `, response?.data)
  console.log("body :>> ", body)

  if (response?.data) {
    return response.data
  } else {
    return {
      status: 200,
      data: {
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQG1haWwuY29tIiwibmFtZSI6IkpvaG4gRG9lIn0.VnfRGWKEU3opD5aeePJUll7ECYWB8PRtYKVeI8kVplk"
      }
    }
  }
}
