class Food < ApplicationRecord
  has_many :dates
  has_many :users, through: :dates
end
