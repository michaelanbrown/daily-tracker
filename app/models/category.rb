class Category < ApplicationRecord
    belongs_to :user
    belongs_to :food

    validates :meal, presence: true, inclusion: { in: %w(Breakfast Lunch Dinner Snack) }
    validates :servings, numericality: { greater_than: 0 }
end