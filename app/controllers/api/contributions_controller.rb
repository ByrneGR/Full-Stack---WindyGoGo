class Api::ContributionsController < ApplicationController

  def create
    @contribution = Contribution.new(contribution_params)
    @contribution.backer_id = current_user.id

    if contribution_params[:perk_id] != "0"
      @perk = Perk.find(contribution_params[:perk_id])
    
      if @contribution.save
      @perk.quantity_available -= 1
      @perk.save
      render :show
      end

    else
      if @contribution.save
        render :show
      else  
        render json: @contribution.errors.full_messages, status: 401
      end  
    end  

  end

  def index
    @contributions = Contribution.all
  end  

  def show
    @contribution = Contribution.find(params[:id])
  end  
  
  def contribution_params
    params.require(:contribution).permit(:contribution_amount, :name_on_card, :card_number, :contribution_appearance, :campaign_id, :perk_id)
  end  

  
end

