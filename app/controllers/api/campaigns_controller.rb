class Api::CampaignsController < ApplicationController

  def create
    @campaign = Campaign.new(create_campaign_params)
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
    @campaigns = Campaign.all
  end
  
  private


  def create_campaign_params
    params.require(:campaign).permit(:creator_type, :location, :banking_location, :title, :description, :duration, :image)
  end  
end
