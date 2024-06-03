class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :serving_size, :references, :references
end
