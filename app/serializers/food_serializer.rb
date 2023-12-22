class FoodSerializer < ActiveModel::Serializer
  attributes :id, :name, :calories, :fats, :carbs, :suars, :added_sugars, :fat
  has_many :categories
  has_many :users
end
