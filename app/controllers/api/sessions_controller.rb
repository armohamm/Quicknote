class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: ["Invalid username or password"], status: 401
    end
  end

  def destroy
    @user = current_user

    if @user
      logout!
      # render "api/users/show"
      render json: {}
    else
      render json: ["There is no user to log out"], status: 404
    end
  end
  
end
