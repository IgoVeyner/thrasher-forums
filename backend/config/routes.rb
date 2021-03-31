Rails.application.routes.draw do
  scope '/api' do
    scope '/v1' do
      resources :users, only: [:create, :show]
      resources :auth, only: [:create]
      resources :boards, only: [:index, :show]
      get 'posts/videos', to: "posts#videos"
      get 'posts/photos', to: "posts#photos"
      get 'posts/events', to: "posts#events"
      resources :posts, only: [:create, :show, :destroy]
      get 'profile', to: "auth#profile"
    end
  end
end
