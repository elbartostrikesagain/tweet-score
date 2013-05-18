class SessionsController < ApplicationController
  def create
    user = User.from_omniauth(user_params)
    session[:user_id] = user.id
    redirect_to root_url
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_url
  end

  private

  def user_params
    binding.pry
    params = ActionController::Parameters.new(env["omniauth.auth"])
    params.permit({:info => [:name]}, {:credentials => [:token, :secret]}, :uid, :oauth_token, :oauth_secret, :provider)
  end
end