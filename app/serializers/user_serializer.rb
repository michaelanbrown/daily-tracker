class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :email, :username, :password_digest, :categories, :foods
end
