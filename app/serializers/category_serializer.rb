class CategorySerializer < ActiveModel::Serializer
  attributes :id, :meal, :user_id, :food_id, :servings, :created_at

  has_one :food

  def created_at
    return object.created_at.strftime("%d %b %Y")
  end

end