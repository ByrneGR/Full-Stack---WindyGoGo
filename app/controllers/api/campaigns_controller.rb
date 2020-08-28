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
    render :show
  end
  
  def index
    user_id = params[:user_id]
    if user_id
      @campaigns = Campaign.find_by(user_id: user_id)
    else  
      @campaigns = Campaign.all
    end  
    render :index
  end
  
  private

  def create_campaign_params
    params.require(:campaign).permit(:funding_goal, :creator_type, :location, :banking_location, :title, :description, :duration, :image)
  end  
end
