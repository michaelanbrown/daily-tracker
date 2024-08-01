class CategorySerializer < ActiveModel::Serializer
  attributes :id, :meal, :user_id, :food_id, :servings, :created_at

  belongs_to :user

  def created_at
    object.created_at.strftime("%B %d, %Y")
  end

end