class CategorySerializer < ActiveModel::Serializer
  attributes :id, :meal, :user_id
end
