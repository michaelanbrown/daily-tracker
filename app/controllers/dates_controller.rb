class DatesController < ApplicationController
    before_action :find_date, only: [:show]

    def index
        render json: Date.all, status: :ok
    end

    def show
        render json: @date, status: :ok
    end

    def create
        date = Date.create!(date_params)
        render json: date, status: :created
    end

    private

    def date_params
        params.permit(:date, :food_id, :user_id)
    end

end