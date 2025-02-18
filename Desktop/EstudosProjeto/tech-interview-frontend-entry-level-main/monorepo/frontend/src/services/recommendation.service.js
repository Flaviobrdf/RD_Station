// getRecommendations.services.js

const getRecommendations = (
  formData = { selectedPreferences: [], selectedFeatures: [] },
  products
) => {

  // Retornar os produtos recomendados.
  const filteredProducts = products.filter(product => {
    const matchesPreferences = formData.selectedPreferences.every(pref =>
      product.preferences.includes(pref)
    );
    const matchesFeatures = formData.selectedFeatures.every(feat =>
      product.features.includes(feat)
    );
    const matchesAny = formData.selectedPreferences.some(pref =>
      product.preferences.includes(pref)
    ) || formData.selectedFeatures.some(feat =>
      product.features.includes(feat)
    );
    return (matchesPreferences && matchesFeatures) || matchesAny;
  });

  if (formData.selectedRecommendationType === 'SingleProduct' && filteredProducts.length > 1) {
    return [filteredProducts[filteredProducts.length - 1]]
  }
  return filteredProducts;
};

export default { getRecommendations };