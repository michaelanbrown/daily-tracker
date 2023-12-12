class DatesController < ApplicationController
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

    private

    def category_params
    end

end