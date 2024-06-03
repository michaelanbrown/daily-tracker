class CreateIngredientSerializer < ActiveModel::Serializer
  attributes :id, :serving_size, :references, :references
end
