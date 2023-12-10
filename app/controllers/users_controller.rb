class UsersController < ApplicationController

    def index 
        render json: Users.all, status: :ok
    end
    
end
