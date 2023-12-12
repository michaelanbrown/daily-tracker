class CategoriesController < ApplicationController
    before_action :find_category, only: [:show]

    def index
        render json: Category.all, status: :ok
    end

    def show
        render json: @category, status: :ok
    end

end