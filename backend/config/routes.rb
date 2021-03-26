Rails.application.routes.draw do
  scope '/api' do
    scope '/v1' do
      resources :users, only: [:create]
      resources :auth, only: [:create, :profile]
    end
  end
end
