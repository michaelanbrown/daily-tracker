class User < ApplicationRecord
    has_many :categories
    has_many :foods, through: :categories

    has_secure_password

    validates :age, numericality: { greater_than: 0 }
end
