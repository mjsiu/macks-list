class Api::ListingsController < ApplicationController

  def index
    @listings = Listing.all
  end

  def create
    temp_params = params[:listing]

    listing = current_user.listings.create!(
    :title => temp_params[:title],
    :description => temp_params[:description],
    :price => temp_params[:price],
    :address => temp_params[:address],
    :latitude => temp_params[:latitude],
    :longitude => temp_params[:longitude],
    :city_id => temp_params[:city_id],
    :category_id => temp_params[:category_id],
    :images_attributes => temp_params[:images_attributes]
    )

    if listing.save
      render json: listing
    end
  end

  def update
    listing = Listing.find(params[:listing][:id])
  end

  def destroy
    listing = Listing.find(params[:listing][:id])

    if (listing.user_id === current_user.id)
      listing.destroy
    end
  end

end
