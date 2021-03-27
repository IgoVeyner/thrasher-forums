Rails.application.routes.draw do
  scope '/api' do
    scope '/v1' do
      resources :users, only: [:create]
      resources :auth, only: [:create]
      resources :boards, only: [:index, :show]
      get 'profile', to: "auth#profile"
    end
  end
end
