class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :calories, :fats, :carbs, :sugars, :added_sugars, :protein, :ingredients
end
