/**
 * Sends Ecommerce Transaction & Items
 */
export default function () {
  if (typeof window.ga === 'undefined') {
    return
  }

  window.ga('ecommerce:send')
}
