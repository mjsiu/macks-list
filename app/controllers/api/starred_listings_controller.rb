class Api::StarredListingsController < ApplicationController

  def index
    @starred_listings = current_user.tracked_listings
  end

  def destroy
    starred_listing = StarredListing.find_by(user_id: params[:starred_listing][:user_id], listing_id: params[:starred_listing][:id])

    if (starred_listing.user_id === current_user.id)
      starred_listing.destroy
      render json: starred_listing
    end
  end

end
