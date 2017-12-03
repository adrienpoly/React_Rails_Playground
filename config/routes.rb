# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'pages#home'
  get 'page_speed', to: 'pages#page_speed'
  resources :commits, only: [:index]
end
