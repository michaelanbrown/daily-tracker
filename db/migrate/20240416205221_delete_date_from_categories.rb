class DeleteDateFromCategories < ActiveRecord::Migration[6.1]
  def change
    remove_column :categories, :date
  end
end
