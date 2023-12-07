class CreateFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :foods do |t|
      t.string :name
      t.float :calories
      t.float :fats
      t.float :carbs
      t.float :sugars
      t.float :added_sugars
      t.float :protein

      t.timestamps
    end
  end
end
