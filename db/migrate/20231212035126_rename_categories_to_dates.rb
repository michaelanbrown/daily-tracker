class RenameCategoriesToDates < ActiveRecord::Migration[6.1]
  def change
    rename_table :categories, :dates
  end 
end