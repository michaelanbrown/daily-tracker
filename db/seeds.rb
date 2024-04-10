# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

f1 = Food.create(name: "Yogurt", brand: "Friendly Farms", calories: 100, fats: 0, carbs: 8, sugars: 7, added_sugars: 2, protein: 13)
f2 = Food.create(name: "Mashed Potatoes", brand: "Idahoan", calories: 110, fats: 2.5, carbs: 19, sugars: 2, added_sugars: 1, protein: 2)
f3 = Food.create(name: "Turkey Pepperoni", brand: "Great Value", calories: 70, fats: 4, carbs: 1, sugars: 0, added_sugars: 0, protein: 9)

u1 = User.create(name: "Michaela", age: 24, email: "michaela.brown375@gmail.com", username: "michaelanbrown", password: "owner")

c1 = Category.create(meal: "Breakfast", servings: 1.5, food_id: f1.id, user_id: u1.id, date: Today)