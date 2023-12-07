class AddFoodAndUserToCategories < ActiveRecord::Migration[6.1]
  def change
    add_reference :categories, :food, foreign_key: true
    add_reference :categories, :user, foreign_key: true
  end
end
