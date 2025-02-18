// Form.js

import React, { useEffect } from 'react';
import { Preferences, Features, RecommendationType } from './Fields';
import { SubmitButton } from './SubmitButton';
import useProducts from '../../hooks/useProducts';
import useForm from '../../hooks/useForm';
import useRecommendations from '../../hooks/useRecommendations';

function Form({onRecommendationsUpdate}) {
  const { preferences, features, products } = useProducts();
  const { formData, handleChange } = useForm({
    selectedPreferences: [],
    selectedFeatures: [],
    selectedRecommendationType: '',
  });

  const { getRecommendations, recommendations } = useRecommendations(products);

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataRecommendations = getRecommendations(formData);

    //atualizar as recomendações e passar para a lista de recomendações
      if (!formData.selectedRecommendationType) {
        alert('Selecione o tipo de recomendação: "produto único" ou "multiplos produtos"')
        return;
      }

      const recommendations = getRecommendations(formData, products);

      if(recommendations.length > 1 && formData.selectedRecommendationType === 'SingleProduct'){
        alert('As opções maracadas encontraram mais de um produto. Apenas o último produto válido será exibido.');
        const lastRecommendation = recommendations[recommendations.length -1];
        onRecommendationsUpdate([lastRecommendation]);
      } else {
        onRecommendationsUpdate(recommendations);
      }
    }


  return (
    <form
      className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      <Preferences
        preferences={preferences}
        onPreferenceChange={(selected) =>
          handleChange('selectedPreferences', selected)
        }
      />
      <Features
        features={features}
        onFeatureChange={(selected) =>
          handleChange('selectedFeatures', selected)
        }
      />
      <RecommendationType
        onRecommendationTypeChange={(selected) =>
          handleChange('selectedRecommendationType', selected)
        }
      />
      <SubmitButton text="Obter recomendação" />
    </form>
  );
}

export default Form;
