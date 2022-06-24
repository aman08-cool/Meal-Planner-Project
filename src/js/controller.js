import * as model from './model';
import recipeView from './views/recipeView';


import 'core-js/stable';
import 'regenerator-runtime/runtime';


const recipeContainer = document.querySelector('.recipe');



// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function() {
  try{
    const id = window.location.hash.slice(1);
    console.log(id);

    if(!id) return;
    recipeView.renderSpinner();

    // 1. Loading Recipes
    await model.loadRecipe(id);

    // 2. Rendering the Recipe
    recipeView.render(model.state.recipe);
  }catch(err){
    alert(err);
  }
};
// controlRecipes();

['hashchange','load'].forEach(ev => window.addEventListener(ev, controlRecipes))
// window.addEventListener('hashcharge', controlRecipes);
// window.addEventListener('load', controlRecipes);
