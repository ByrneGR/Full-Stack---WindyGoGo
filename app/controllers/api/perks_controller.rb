class Api::PerksController < ApplicationController

  def create
    @perk = Perk.new(perk_params)
    # @perk.backer_id = current_user.id
    @perk.backer_id = 44
    if @perk.save
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
    params.require(:perk).permit(:title, :description, :delivery_date, :quantity_available, :price, :retail_price)
  end  

  
end

