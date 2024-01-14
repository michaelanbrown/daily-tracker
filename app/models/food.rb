class Food < ApplicationRecord
  has_many :categories
  has_many :users, through: :categories

  validates :name, presence: true
  validates :calories, numericality: { greater_than: 0 }
  validates :fats, numericality: { greater_than: -1 }
  validates :carbs, numericality: { greater_than: -1 }
  validates :sugars, numericality: { greater_than: -1 }
  validates :added_sugars, numericality: { greater_than: -1 }
  validates :protein, numericality: { greater_than: -1 }
end
