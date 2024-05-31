class CreateRecipesController < ApplicationController

    def create
        recipe = Recipe.create!
    end

    private
    def recipe_params
        
    end

end