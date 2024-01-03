class Food < ApplicationRecord
  has_many :categories
  has_many :users, through: :categories

  validates :calories, numericality: { greater_than: 0 }
  validates :fats, numericality: { greater_than: 0 }
  validates :carbs, numericality: { greater_than: 0 }
end
