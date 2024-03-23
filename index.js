const axios = require('axios');

const fetchRecipe = async () => {
  const options = {
    method: 'GET',
    url: 'https://low-carb-recipes.p.rapidapi.com/recipes/2807982c-986a-4def-9e3a-153a3066af7a',
    headers: {
      'X-RapidAPI-Key': '3d22db8984msh64a48e552b6ce93p11d34ajsndc212bc8bccc',
      'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

fetchRecipe();
