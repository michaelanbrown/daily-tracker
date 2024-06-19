class IngredientsController < ApplicationController
    before_action :find_ingredient, only: [:update]

    def index
        render json: Ingredient.all, status: :ok
    end

    def create
        ingredient = Ingredient.create!(ingredient_params)
        recipe = Recipe.find(params[:recipe_id])
        food = Food.find(params[:food_id])
        byebug
        render json: ingredient, status: :created
    end

    def update
        @ingredient.update!(update_ingredient_params)
        render json: @ingredient, status: :accepted
    end

    private

    def ingredient_params
        params.permit(:serving_size, :food_id, :recipe_id)
    end

    def update_ingredient_params
        params.permit(:serving_size)
    end

end