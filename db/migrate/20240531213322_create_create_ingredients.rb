class CreateCreateIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :create_ingredients do |t|
      t.float :serving_size
      t.references :food
      t.references :recipe

      t.timestamps
    end
  end
end
