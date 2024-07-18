class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :name, :calories, :fats, :carbs, :sugars, :added_sugars, :protein
  has_many :foods
  has_many :ingredients
end
