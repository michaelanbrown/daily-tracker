class CreateRecipesController < ApplicationController

    def create
        recipe = Recipe.create!(recipe_params)
        render json: recipe, status: :created
    end

    private
    def recipe_params
        params.permit(:name, :calories, :fats, :carbs, :sugars, :added_sugars, :protein)
    end

end