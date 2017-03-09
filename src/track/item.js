/**
 * Ecommerce Item tracking
 * @param {String} id
 * @param {String} name
 * @param {String} sku
 * @param {String} category
 * @param {Number} price
 * @param {Number} quantity
 */
export default function (id, name, sku, category, price, quantity) {
  if (typeof window.ga === 'undefined') {
    return
  }

  window.ga('ecommerce:addTransaction', { id, name, sku, category, price, quantity })
}
