class CreateIngredientsController < ApplicationController

    def create
        
    end

    private

    def ingredient_params
        params.permit(:serving_size, :food_id, :recipe_id)
    end

end