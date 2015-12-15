Rails.application.routes.draw do

  resources :users, only: [:new, :show, :create]
  resource :session, only: [:new, :create, :destroy]

  root to: "static_pages#root"
end
