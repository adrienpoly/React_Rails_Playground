Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  root to: 'pages#home'

  get 'video_player', to: 'pages#video_player'
  get 'book_list',    to: 'pages#book_list'
  get 'weather',      to: 'pages#weather'

end
