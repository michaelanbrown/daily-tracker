class FoodSerializer < ActiveModel::Serializer
  attributes :id, :name, :calories, :fat, :carbs, :suars, :added_sugars, :fat
  has_one :category
end
