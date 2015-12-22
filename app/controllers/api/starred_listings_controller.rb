class Api::StarredListingsController < ApplicationController

  def index
    @starred_listings = current_user.tracked_listings
  end

end
