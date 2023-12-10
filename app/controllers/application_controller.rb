class ApplicationController < ActionController::API

  before_action :authenticate_user

  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def current_user
    
  end

  private

  def authenticate_user
    render json: { errors: "Not authorized" }, status: :unauthorized unless current_user
  end

end