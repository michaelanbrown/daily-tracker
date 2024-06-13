class RemoveRecipesFromIngredient < ActiveRecord::Migration[6.1]
  def change
    remove_reference :ingredients, :recipe, index: true, foreign_key: true
  end
end
