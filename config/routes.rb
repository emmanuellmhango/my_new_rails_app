Rails.application.routes.draw do
  get'/messeges', to: 'messages#index'
  root 'root#index'
end