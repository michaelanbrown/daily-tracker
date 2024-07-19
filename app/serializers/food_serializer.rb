class FoodSerializer < ActiveModel::Serializer
  attributes :id, :name, :calories, :fats, :carbs, :sugars, :added_sugars, :protein, :brand, :categories
  has_many :categories
  has_many :users
  has_many :ingredients
end
