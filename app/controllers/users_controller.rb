class UsersController < ApplicationController

    def index 
        render json: User.all, status: :ok
    end

    def create
        user = User.create!()

    end

    private
    def user_params
        
    end 
    
end
