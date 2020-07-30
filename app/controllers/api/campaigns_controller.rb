class Api::CampaignsController < ApplicationController

  def create
    @campaign = Campaign.new(campaign_params)
    @campaign.creator_id = current_user.id

    if @campaign.save
      render :show
    else
      render json: @campaign.errors.full_messages, status: 401
    end  

  end
  
  def show
    @campaign = Campaign.find(params[:id])
  end
  
  def index
    @campaign = Campaign.all
  end
  
  private

  def campaign_params
    params.require(:campaign).permit(:location, :title, :description, :duration)
  end  
end
