/**
 * Initialisation and static functions
 */

import Main from "./main-new";

/**
 * Initialises a TAG visualisation on the given element
 * @param {String|Element|jQuery} params.container - Either a string
 *     containing the ID of the container element, or the element itself (as a
 *     native/jQuery object)
 * @param {Object} [params.data] - The initial data to load, if any
 * @param {String} [params.format] - One of the supported format identifiers for
 *     the data
 */
function tag(params) {
  if (!params.container) {
    throw "No TAG container element specified.";
  }
  const instance = new Main(params.container);

  if (params.data && params.format) {
    instance.loadData(params.data, params.format);
  }
  return instance;
}

module.exports = {
  tag
};