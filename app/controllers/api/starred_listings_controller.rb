class Api::StarredListingsController < ApplicationController

  def index
    @starred_listings = current_user.tracked_listings
  end

  def create
     starred_listing = current_user.starred_listings.create!(listing_id: params[:starred_listing][:id])

     if starred_listing.save
       render json: starred_listing
     end
  end

  def destroy
    # starred_listing = StarredListing.find_by(user_id: params[:starred_listing][:user_id], listing_id: params[:starred_listing][:id])
    starred_listing = current_user.starred_listings.find_by(listing_id: params[:starred_listing][:id])

    if (starred_listing.user_id === current_user.id)
      starred_listing.destroy
      render json: starred_listing
    end
  end

  def starred_listing_params
    params.require(:starred_listing).permit(:user_id, )
  end

end
