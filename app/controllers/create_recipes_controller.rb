class CreateRecipesController < ApplicationController

    def create
        recipe = Recipe.create!
    end

    private

end