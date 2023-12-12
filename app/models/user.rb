class User < ApplicationRecord
    has_many :dates
    has_many :foods, through: :dates

    has_secure_password
end
