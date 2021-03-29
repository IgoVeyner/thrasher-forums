Rails.application.routes.draw do
  scope '/api' do
    scope '/v1' do
      resources :users, only: [:create, :show]
      resources :auth, only: [:create]
      resources :boards, only: [:index, :show]
      resources :posts, only: [:create, :show, :destroy]
      get 'profile', to: "auth#profile"
    end
  end
end
