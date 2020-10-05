Rails.application.routes.draw do
  
  devise_for :users
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'index#index'
  get 'current_user', to: 'currentsession#show' 
  get 'sign_out', to: 'currentsession#logout' 
end
