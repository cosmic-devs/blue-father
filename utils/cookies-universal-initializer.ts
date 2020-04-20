import { NuxtCookies } from 'cookie-universal-nuxt'

let $cookies: NuxtCookies

const oneYearFromNow = new Date()
oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1)
const defaultOptions = { expires: oneYearFromNow }

export function initializeCookies(cookiesInstance: NuxtCookies) {
  $cookies = cookiesInstance
}

export { $cookies, defaultOptions }
