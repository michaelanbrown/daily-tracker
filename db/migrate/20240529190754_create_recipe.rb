class CreateRecipe < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.float :calories, default: 0
      t.float :fats, default: 0
      t.float :carbs, default: 0
      t.float :sugars, default: 0
      t.float :added_sugars
      t.float :protein

      t.timestamps
    end
  end
end
