class CategoriesController < ApplicationController
    before_action :find_category, only: [:show]

    def index
        render json: Category.all, status: :ok
    end

    def show
        render json: @category, status: :ok
    end

    def create
        category = Category.create!(category_params)
        render json: category, status: :created
    end

    def update
        @category.update!(update_category_params)
    end

    def destroy
        @category.destroy
        head :no_content 
    end

    private

    def category_params
        params.permit(:meal, :food_id, :user_id, :servings)
    end

    def update_category_params
        params.permit(:servings)
    end

end

## find dates controller