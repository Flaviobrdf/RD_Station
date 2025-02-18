# Notas do Autor

Utilizado VS CODE Windows para atualização do projeto

######################
Executar Projeto
npm install

cd frontend
yarn install
cd..
cd backend
yarn install

cd..

yarn start


######################

códigos Adicionado:
 // getRecommendations.services.js

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


------------------------------------------------------------

códigos Adicionado:
//App.js
//Atualizar a lista e chamar no form
  const handleRecommendationsUpdate = (newRecommendations) => {
    setRecommendations(newRecommendations);
  }

...

# <div>
#  <Form onRecommendationsUpdate = {handleRecommendationsUpdate}/>
# </div>

------------------------------------------------------------

códigos Adicionado:
// Form.js
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


------------------------------------------------------------

códigos Adicionado:
//recommendation.service.test.js
 //Testes adicionados
   test('Retorna mensagem de erro quando o formulário é submetido sem valores selecionados', () => {
    const formData = {
      selectedPreferences: [],
      selectedFeatures: [],
      selectedRecommendationType: '',
    };

    const recommendations = recommendationService.getRecommendations(formData, mockProducts);

    expect(recommendations).toEqual(mockProducts);
  });


  test('Retorna mensagem de erro quando um produto não tem preferências ou recursos', () => {
    const formData = {
      selectedPreferences: ['Integração com chatbots'],
      selectedFeatures: ['Chat ao vivo e mensagens automatizadas'],
      selectedRecommendationType: 'SingleProduct',
    };

    const mockProducts = [
      {
        name: 'Produto sem preferências ou recursos',
        preferences: [],
        features: [],
      },
    ];

    const recommendations = recommendationService.getRecommendations(formData, mockProducts);

    expect(recommendations).toEqual([]);
  });



######################

//Test
npm test

Testes realizados:
    √ Retorna recomendação correta para SingleProduct com base nas preferências selecionadas (5 ms)
    √ Retorna recomendações corretas para MultipleProducts com base nas preferências selecionadas (3 ms)
    √ Retorna apenas um produto para SingleProduct com mais de um produto de match (3 ms)
    √ Retorna o último match em caso de empate para SingleProduct (2 ms)
    √ Retorna mensagem de erro quando o formulário é submetido sem valores selecionados (9 ms)
    √ Retorna mensagem de erro quando um produto não tem preferências ou recursos (1 ms)



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
