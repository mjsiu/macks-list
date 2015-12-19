class Api::ListingsController < ApplicationController

  def index
    @listings = Listing.all
    render 'index'
  end

  def create
    temp_params = params[:listing]
    listing = current_user.listings.create!(
    :title => temp_params[:title],
    :description => temp_params[:description],
    :price => temp_params[:price],
    :address => temp_params[:address],
    :city_id => temp_params[:city_id],
    :category_id => temp_params[:category_id],
    :images_attributes => temp_params[:images_attributes]
    )

    if listing.save
      render json: listing
    end

  end

  # private
  # def listing_params
  #   params.require(:listing).permit(
  #     :title, :description,
  #     :price, :address,
  #     :latitude, :longitude,
  #     :city_id, :category_id,
  #     :images_attributes
  #   )
  # end

end
