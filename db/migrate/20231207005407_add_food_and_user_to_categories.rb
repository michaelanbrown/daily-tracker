class AddFoodAndUserToCategories < ActiveRecord::Migration[6.1]
  def change
    add_reference :caategories, :food, foreign_key: true
    add_reference :caategories, :user, foreign_key: true
  end
end
