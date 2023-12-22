Rails.application.routes.draw do
  
  resources :users, only: [:index, :show, :create]
  resources :foods
  resources :categories, only: [:index, :show, :create]

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post "/login", to: "sessions#create" 
  get "/authorized_user", to: "users#show"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
