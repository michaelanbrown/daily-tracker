class AddServingsToCategories < ActiveRecord::Migration[6.1]
  def change
    add_reference :categories, :servings, :float
  end
end
