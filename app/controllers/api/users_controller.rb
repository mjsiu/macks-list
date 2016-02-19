class Api::UsersController < ApplicationController

  def index
    @user_listings = current_user.listings
  end

end
