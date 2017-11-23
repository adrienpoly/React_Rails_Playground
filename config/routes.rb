Rails.application.routes.draw do
  root to: 'pages#home'

  get 'video_player', to: 'pages#video_player'
  get 'book_list',    to: 'pages#book_list'
  get 'weather',      to: 'pages#weather'

end
