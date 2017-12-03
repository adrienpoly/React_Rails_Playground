# frozen_string_literal: true

Rails.application.routes.draw do
  # root to: 'pages#home'
  # get 'page_speed' => 'pages#page_speed', as: :page, format: false
  get 'page_speed', to: 'pages#page_speed'
  # get 'video_player_react_on_rails', to: 'pages#video_player_react_on_rails'
  # get 'book_list',    to: 'pages#book_list'
  # get 'weather',      to: 'pages#weather'
  resources :commits, only: [:index]
end
