class FoodsController < ApplicationController

    def create
        food = Food.create!(food_params)
        render json: food, status: :created
    end

    private
    def food_params
        
    end 

end