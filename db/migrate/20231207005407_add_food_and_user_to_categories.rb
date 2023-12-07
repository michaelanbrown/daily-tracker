class AddFoodAndUserToCategories < ActiveRecord::Migration[6.1]
  def change
    add_reference :category, :foods, foreign_key: true
    add_reference :category, :users, foreign_key: true
  end
end
