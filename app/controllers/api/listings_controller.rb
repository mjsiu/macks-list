class Api::ListingsController < ApplicationController

  def index
    @listings = Listing.all
    render 'index'
  end

  def create
    listing = current_user.listings.create!(listing_params)

    listing_params[:image_array].each do |image_url|
      listing.images.create!(img_url: image_url)
    end

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
      :city_id, :category_id,
      {:image_params => [{}]}
    )
  end

end
