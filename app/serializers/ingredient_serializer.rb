class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :serving_size, :food_id, :recipe_id

  belongs_to :food
  belongs_to :recipe
end
