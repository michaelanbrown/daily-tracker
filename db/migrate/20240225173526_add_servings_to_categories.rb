class AddServingsToCategories < ActiveRecord::Migration[6.1]
  def change
    add_column :categories, :servings, :float
  end
end
