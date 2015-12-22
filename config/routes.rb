Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :listings
    resources :users
    resources :starred_listings
  end
  resources :users, only: [:new, :show, :create]
  resource :session, only: [:new, :create, :destroy]

  root to: "static_pages#root"
end
