class CategorySerializer < ActiveModel::Serializer
  attributes :id, :meal, :user_id, :food_id, :servings

  has_one :food

  def created_at
  end

end