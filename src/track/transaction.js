/**
 * Ecommerce Transaction tracking
 * @param {String} id
 * @param {String} affiliation
 * @param {Number} revenue
 * @param {Number} shipping
 * @param {Number} tax
 */
export default function (id, affiliation, revenue, shipping, tax) {
  if (typeof window.ga === 'undefined') {
    return
  }

  window.ga('ecommerce:addTransaction', { id, affilication, revenue, shipping, tax })
}
