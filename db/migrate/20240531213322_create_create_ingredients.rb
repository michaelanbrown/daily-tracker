class CreateCreateIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :create_ingredients do |t|
      t.float :serving_size
      t.food :references
      t.recipe :references

      t.timestamps
    end
  end
end
