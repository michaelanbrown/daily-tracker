class UsersController < ApplicationController

    def index 
        render json: User.all, status: :ok
    end

    def create

    end
    
end
