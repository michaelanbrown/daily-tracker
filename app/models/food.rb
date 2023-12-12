class Food < ApplicationRecord
  has_many :categories
  has_many :users, through: :categories
end
