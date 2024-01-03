class User < ApplicationRecord
    has_many :categories
    has_many :foods, through: :categories

    has_secure_password

    validates :name, presence: true
    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :age, numericality: { greater_than: 0 }
end
