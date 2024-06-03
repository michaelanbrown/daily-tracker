class CreateIngredientsController < ApplicationController

    def create
        ingredient = Ingredient.create!(ingredient_params_params)
        render json: ingredient, status: :created
    end

    private

    def ingredient_params
        params.permit(:serving_size, :food_id, :recipe_id)
    end

end