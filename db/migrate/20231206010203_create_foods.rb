class CreateFoods < ActiveRecord::Migration[6.1]
  def change
    create_table :foods do |t|
      t.string :name
      t.references :category, null: false, foreign_key: true
      t.float :calories
      t.float :fat
      t.float :carbs
      t.float :suars
      t.float :added_sugars
      t.float :fat

      t.timestamps
    end
  end
end
