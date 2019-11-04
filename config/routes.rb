Rails.application.routes.draw do
  resources :topics
  mount Ckeditor::Engine => '/ckeditor'
  root to: 'cards#index'
  devise_for :users
  resources :cards
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
