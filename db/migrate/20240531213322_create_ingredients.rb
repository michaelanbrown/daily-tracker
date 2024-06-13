class CreateIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients do |t|
      t.float :serving_size
      t.references :food

      t.timestamps
    end
  end
end
