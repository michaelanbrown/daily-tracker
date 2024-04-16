# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2024_04_16_205221) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "meal"
    t.created_at.to_date "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "food_id"
    t.bigint "user_id"
    t.float "servings"
    t.index ["food_id"], name: "index_categories_on_food_id"
    t.index ["user_id"], name: "index_categories_on_user_id"
  end

  create_table "foods", force: :cascade do |t|
    t.string "name"
    t.float "calories"
    t.float "fats"
    t.float "carbs"
    t.float "sugars"
    t.float "added_sugars"
    t.float "protein"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "brand"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "age"
    t.string "email"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "categories", "foods"
  add_foreign_key "categories", "users"
end
