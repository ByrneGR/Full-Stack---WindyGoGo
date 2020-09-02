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
    if user_id == ":user_id"
      @campaigns = Campaign.all
    else  
      @campaigns = Campaign.where(creator_id: user_id)
    end  
    render :index
  end

  def update
    @campaign = Campaign.find(params[:id])
    @campaign.update(create_campaign_params)
    if @campaign.save
      render :show
    else
      render json: @campaign.errors.full_messages, status: 401
    end  
  end  

  def destroy
    @campaign = Campaign.find(params[:id])
    @campaign.delete
    @campaigns = Campaign.all
    render :index
  end  
  
  private

  def create_campaign_params
    params.require(:campaign).permit(:funding_goal, :tagline, :creator_type, :location, :banking_location, :title, :description, :duration, :image)
  end  
end
