class AddBrandToFood < ActiveRecord::Migration[6.1]
  def change
    add_column :foods, :brand, :string
  end
end
