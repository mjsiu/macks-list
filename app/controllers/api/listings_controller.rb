class Api::ListingsController < ApplicationController

  def index
    @listings = Listing.all
    render 'index'
  end

  def create
    listing = Listing.create!(listing_params)
    listing.author_id = current_user.id

    if listing.save
      render json: listing
    end

  end

  private
  def listing_params
    params.require(:listing).permit(
      :title, :description,
      :price, :address,
      :latitude, :longitude,
      :author_id, :city_id,
      :category_id,
      :image_url
    )
  end

end
