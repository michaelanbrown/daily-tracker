Rails.application.routes.draw do
  
  resources :ingredients, only: [:index, :show, :create, :update]
  resources :recipes, only: [:index, :show, :create, :update]
  resources :users, only: [:index, :show, :create]
  resources :foods
  resources :categories

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/authorized_user", to: "users#show"
  get "/date/:date_value", to: "categories#date"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
