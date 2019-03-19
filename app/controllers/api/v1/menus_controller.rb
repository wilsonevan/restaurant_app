class Api::V1::MenusController < ApplicationController
	before_action :set_menu, only: [ :update, :destroy ]
	
	def index
		# binding.pry
    render json: Menu.all
  end

  def create
		menu = Menu.new(menu_params)
		
		if menu.save
			render json: menu
		else
			render json: { errors: menu.errors }, status: :unprocessable_entity
		end

  end
	
  def update
		@menu.update(complete: !@menu.complete) # TBD May need to adjust this statement
		render json: @menu
  end

	def destroy
		@menu.destroy
		render json: { message: "Menu Deleted" }
	end
	
	private 
		def menu_params
			params.require( :menu ).permit( :name )
		end

		def set_menu
			@menu = Menu.find(params[:id])
		end
end
