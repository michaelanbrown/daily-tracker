class AddDateToCategories < ActiveRecord::Migration[6.1]
  def change
    add_column :categories, :date, :datetime, default: Time.now.to_datetime
  end
end
