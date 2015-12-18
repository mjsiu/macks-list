class SessionsController < ApplicationController
  before_action :require_signed_in!, only: [:show]

  def new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if user
      login(user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid username or password"]
      render :new
    end
  end

  def destroy
    logout
    render :new
  end

end
