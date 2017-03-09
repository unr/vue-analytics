import { updateConfig } from './config'
import loadScript from './loadScript'
import trackPage from './track/page'
import trackEvent from './track/event'
import trackTime from './track/time'
import trackItem from './track/item'
import trackTransaction from './track/transaction'
import autoTracking from './track/autoTracking'
import send from './send'
import set from './set'
import init from './init'

/**
 * Vue installer
 * @param  {Vue instance} Vue
 * @param  {Object} [options={}]
 */
const install = function (Vue, options = {}) {
  const { router } = options

  delete options.router
  updateConfig(options)

  init(router, options.onAnalyticsReady)

  const features = { trackEvent, trackPage, trackTime, trackItem, trackTransaction, send, set }

  Vue.prototype.$ga = Vue.$ga = features
}

export default {
  install,
  loadScript,
  autoTracking
}
