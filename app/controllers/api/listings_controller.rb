class Api::ListingsController < ApplicationController

  def index
    @listings = Listing.all
  end

  def create
    listing = current_user.listings.create!(listing_params)

    if listing.save
      render json: listing
    end
  end

  def update
    listing = Listing.find(params[:listing][:id])

    if (listing.user_id === current_user.id)
      listing.update(listing_params)
    end
  end

  def destroy
    listing = Listing.find(params[:listing][:id])

    if (listing.user_id === current_user.id)
      listing.destroy
      render json: listing
    end
  end

  private
  def listing_params
    params.require(:listing).permit(
      :title, :description,
      :price, :address,
      :latitude, :longitude,
      :city_id, :category_id,
      {images_attributes: :url }
      )
  end

end
