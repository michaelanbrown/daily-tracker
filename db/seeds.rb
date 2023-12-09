# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

f1 = Food.create(name: "Yogurt", calories: 100, fats: 0, carbs: 8, sugars: 7, added_sugars: 2, protein: 13)

u1 = User.create(name:, age:, email:, username:, password)

c1 = Category.create(name:, food_id:, user_id:)