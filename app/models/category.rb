class Category < ApplicationRecord
    belongs_to :user
    belongs_to :food

    validates :meal, presence: true, inclusion: { in: %w(Breakfast) }
end