class CreateCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :dates do |t|
      t.string :date

      t.timestamps
    end
  end
end
