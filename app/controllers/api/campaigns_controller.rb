class Api::CampaignsController < ApplicationController

  def create
    @campaign = Campaign.new(create_campaign_params)
    # @campaign.creator_id = current_user.id
    @campaign.creator_id = 39
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

  def edit_campaign_params
    params.require(:campaign).permit(:location, :title, :description, :duration)
  end  

  def create_campaign_params
    params.require(:campaign).permit(:creator_type, :location, :banking_location)
  end  
end
