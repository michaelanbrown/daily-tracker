class FoodsController < ApplicationController
    before_action :find_food, only: [:show, :update, :destroy]

    def index
        render json: Food.all, status: :ok
    end

    def show
        render json: @food, status: :ok
    end

    def create
        food = Food.create!(food_params)
        render json: food, status: :created
    end

    def update
        @food.update!(update_food_params)
        render json: @food, status: :accepted
    end

    def destroy
        @food.destroy
        head :no_content 
    end

    private
    def food_params
        params.permit(:name, :calories, :fats, :carbs, :sugars, :added_sugars, :protein, :brand)
    end

    def update_food_params
        params.permit(:calories, :fats, :carbs, :sugars, :added_sugars, :protein)
    end

end