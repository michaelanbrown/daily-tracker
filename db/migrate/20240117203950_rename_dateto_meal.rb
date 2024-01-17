class RenameDatetoMeal < ActiveRecord::Migration[6.1]
  def change
    rename_column :categories, :date, :meal
  end
end
