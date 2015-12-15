class Api::ListingsController < ApplicationController

  def index
    @listings = Listing.all
    render 'index'
  end

  def create
    listing = Listing.create!(listing_params)
    render json: listing
  end

  private
  def listing_params
    params.require(:listing).permit(
      :title, :description,
      :price, :address,
      :latitude, :longitude,
      :author_id, :city_id,
      :category_id
    )
  end

end
