class IngredientsController < ApplicationController
    before_action :find_ingredient, only: [:update]

    def index
        render json: Ingredient.all, status: :ok
    end

    def show
    end

    def create
        ingredient = Ingredient.create!(ingredient_params)
        recipe = Recipe.find(params[:recipe_id])
        food = Food.find(params[:food_id])
        recipe.update!(calories: food[:calories]*params[:serving_size], fats: food[:fats]*params[:serving_size], carbs: food[:carbs]*params[:serving_size], sugars: food[:sugars]*params[:serving_size], added_sugars: food[:added_sugars]*params[:serving_size], protein: food[:protein]*params[:serving_size])
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