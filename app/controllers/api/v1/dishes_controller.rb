class Api::V1::DishesController < ApplicationController
	before_action :set_dish, only: [ :update, :destroy ]
	
  def index
    render json: Dish.all
  end

  def create
		dish = Dish.new(dish_params)
		# dish[:menu_id] = @menu_id
		binding.pry
		if dish.save
			render json: dish
		else
			render json: { errors: dish.errors }, status: :unprocessable_entity
		end

  end
	
  def update
		@dish.update(complete: !@dish.complete) # TBD May need to adjust this statement
		render json: @dish
  end

	def destroy
		@dish.destroy
		render json: { message: "Dish Deleted" }
	end
	
	private 
		def dish_params
			binding.pry
			# @menu_id = params[:menu_id]
			params.require(:dish).permit( :menu_id, :name, :description, :price, :dish_category )
		end

	def set_dish
		@dish = Dish.find(params[:id])
	end
end
