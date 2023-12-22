class FoodSerializer < ActiveModel::Serializer
  attributes :id, :name, :calories, :fat, :carbs, :suars, :added_sugars, :fat
  has_many :categories
  has_many :users
end
