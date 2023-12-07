class AddFoodAndUserToCategories < ActiveRecord::Migration[6.1]
  def change
    add_reference :caategories, :foods, foreign_key: true
    add_reference :caategories, :users, foreign_key: true
  end
end
