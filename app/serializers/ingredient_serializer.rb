class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :serving_size, :food_id, :references
end
