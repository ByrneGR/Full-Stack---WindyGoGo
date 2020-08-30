class Api::PerksController < ApplicationController

  def create
    @perk = Perk.new(perk_params)
    if @perk.save
      debugger
      render :show
    else
    
      render json: @perk.errors.full_messages, status: 401
    end  

  end

  def index
    @perks= Perk.all
  end  

  def show
    @perk = Perk.find(params[:id])
  end  
  
  def perk_params
    params.require(:perk).permit(:title, :description, :delivery_date, :quantity_available, :campaign_id, :price, :retail_price)
  end  

  
end

