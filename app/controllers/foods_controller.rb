class FoodsController < ApplicationController
    before_action :find_food

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

    private
    def food_params
        params.permit(:name, :calories, :fats, :carbs, :sugars, :added_sugars, :protein, :brand)
    end 

end