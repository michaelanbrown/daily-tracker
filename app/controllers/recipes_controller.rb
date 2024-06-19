class RecipesController < ApplicationController
    before_action :find_recipe, only: [:show, :update]

    def index
        render json: Recipe.all, status: :ok
    end

    def show
        render json: @recipe, status: :ok
    end

    def create
        recipe = Recipe.create!(recipe_params)
        render json: recipe, status: :created
    end

    def update
        
    end

    private
    
    def recipe_params
        params.permit(:name, :calories, :fats, :carbs, :sugars, :added_sugars, :protein)
    end

    def update_recipe_params
    end

end