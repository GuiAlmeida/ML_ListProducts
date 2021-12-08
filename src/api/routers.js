const baseURL = "https://api.mercadolibre.com/sites/MLB";

const _routeListCategories = function() {
  return `${baseURL}/categories`;
};
const _routeListProducts = function(idCategory) {
  return `${baseURL}/search?category=${idCategory}`;
};
const _routeSearchProducts = function(query) {
  return `${baseURL}/search?q==${query}`;
};

export { _routeListCategories, _routeListProducts, _routeSearchProducts };
