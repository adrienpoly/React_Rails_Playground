Rails.application.routes.draw do
  root to: 'pages#home'

  # get 'video_player', to: 'pages#video_player'
  # get 'video_player_react_on_rails', to: 'pages#video_player_react_on_rails'
  # get 'book_list',    to: 'pages#book_list'
  # get 'weather',      to: 'pages#weather'
  resources :commits, only: [:index]
end
