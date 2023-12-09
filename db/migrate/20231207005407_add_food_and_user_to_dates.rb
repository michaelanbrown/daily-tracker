class AddFoodAndUserToDates < ActiveRecord::Migration[6.1]
  def change
    add_reference :dates, :food, foreign_key: true
    add_reference :dates, :user, foreign_key: true
  end
end
