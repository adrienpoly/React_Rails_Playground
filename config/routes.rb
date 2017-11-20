Rails.application.routes.draw do
  root to: 'pages#home'

    # Simple hack to get react-router over rails routes
    # get '*path', to: 'site#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
