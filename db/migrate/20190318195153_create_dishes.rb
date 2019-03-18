class CreateDishes < ActiveRecord::Migration[5.2]
  def change
    create_table :dishes do |t|
      t.string :name
      t.string :description
      t.float :price
      t.string :dish_category
      t.belongs_to :menu, foreign_key: true

      t.timestamps
    end
  end
end
