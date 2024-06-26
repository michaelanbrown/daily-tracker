# Welcome to Daily Tracker where you can keep track of the foods you like to eat and the macronutrients you have consumed in a day!

This app will calculate certain macronutrients on the given day, and allows you to view previous days macronutrients!

## The following information is calculated:
1. Calories
2. Fats
3. Carbohydrates
4. Sugars
5. Added Sugars
6. Protein

## Throughout the day you are able to edit the serving amounts and delete any foods that were mistakenly added!
#### Here's how!
1. Within the today page click the plus sign "+" that is next to the food you wish to edit or delete
2. Select edit or delete
      - Edit:
        1. Input the new serving size
        2. Press Submit
      - Delete:
        1. Press Delete

## Please fork and clone this for your own use!
We are also open to suggestions!


## Models
1. User
2. Food
3. Category

### User
This allows everyone to have their own account for their own personal use.

It is connected to the food and category models as a user can have many foods and many categories.

### Food
The food model stores a list of all foods and is a growing database. Users have the ability to add foods as they please.

It is connected to the user and category models as a food can be eaten by many users and a food can be in many categories.

### Category
Categories allow a person to list out their serving amounts that they consumed per food.

It is connected to the user and food models by belonging to each of them - a category can only be for one user and can only be for one food.

## Validations

### User
1. Validates that a name is present upon creation
2. Validates that a username is present and unique upon creation
3. Validates that the email is present and unique upon creation
4. Validates that the age of anyone is greater than 0

### Food
1. Validates that a name is present upon creation
2. Validates that calories are greater than 0
3. Validates that fats are greater than -1
4. Validates that carbs are greater than -1
5. Validates that sugars are greater than -1
6. Validates that added sugars are greater than -1
7. Validates that proteins are greater than -1

### Category
1. Validates that a meal is present
2. Validates that a meal name is either Breakfast, Lunch, Dinner, or Snack
3. Validates that a serving size is greater than 0

## Schemas

### Users
The Users schema contains all information needed for a user account - name, username, email, password, and age

### Food
The Food schema owns all information about a food and it's pertinent nutrition facts.

### Category
The Category schema possesses the information regarding the name of the meal and the amount of servings.

** The Category schema references the User and Food tables to connect all information.

## Method Examples
```python
# Index
  def index 
      render json: Food.all, status: :ok
  end
```

```python
# Show
  def find_category
    @category = Category.find(params[:id])
  end

  def show
      render json: @food, status: :ok
  end
```

```python
# Create Request
  def create
      category = Category.create!(category_params)
      render json: category, status: :created
  end

  private
    
  def category_params
      params.permit(:meal, :food_id, :user_id, :servings)
   end
```

```python
# Update Request
  def find_food
    @food = Food.find(params[:id])
  end

  def update
      @food.update!(update_food_params)
      render json: @food, status: :accepted
  end

  private

  def update_food_params
      params.permit(:calories, :fats, :carbs, :sugars, :added_sugars, :protein)
  end
```

```python
# Delete Request
  def find_category
    @category = Category.find(params[:id])
  end

  def destroy
      @category.destroy
      head :no_content 
  end
```

## Routes
```python
  resources :users, only: [:index, :show, :create]
  resources :foods
  resources :categories

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/authorized_user", to: "users#show"
```

## Future Enhancements
1. Create meals with your own ingredients
  - Ingredients model include a food and a serving size of that food
  - Ingredients will reference a food, and belong to food and recipe
  - Ingredient columns: reference to food, reference to recipe, serving size
  - Recipe model that has_many ingredients
  - Recipe model will calculate the macros based on the ingredient food and serving size
  - Recipe columns: name, calories, fats, carbs, sugars, added_sugars, protein