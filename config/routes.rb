Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :menus do
        resources :dishes
      end
    end
  end

end
