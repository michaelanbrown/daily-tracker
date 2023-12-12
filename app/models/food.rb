class Food < ApplicationRecord
  has_many :dates
  has_many :foods, through: :dates
end
