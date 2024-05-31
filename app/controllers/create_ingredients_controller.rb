class CreateIngredientsController < ApplicationController

    def create
        ingredient = Ingredient.create!(ingredient_params_params)
    end

    private

    def ingredient_params
        params.permit(:serving_size, :food_id, :recipe_id)
    end

end