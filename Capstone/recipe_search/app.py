from flask import Flask, render_template, request
import pandas as pd
import sqlite3

app = Flask(__name__)

# SQLite3 데이터베이스 경로
ingredients_db_file = 'C:\\Users\\limoo\\CapstoneStart\\Capstone\\test2.sqlite3'
recipes_db_file = 'C:\\Users\\limoo\\CapstoneStart\\Capstone\\recipes.db'

# 재료 및 레시피 데이터 로드
def load_data():
    conn = sqlite3.connect(ingredients_db_file)
    ingredients_df = pd.read_sql_query("SELECT * FROM refrigerated", conn)
    conn.close()
    
    conn = sqlite3.connect(recipes_db_file)
    recipes_df = pd.read_sql_query("SELECT * FROM recipes", conn)
    conn.close()
    
    # 공백 제거
    ingredients_df.columns = ingredients_df.columns.str.strip()
    recipes_df.columns = recipes_df.columns.str.strip()

    # 열 이름 출력
    print("Ingredients DataFrame Columns:", ingredients_df.columns.tolist())
    print("Recipes DataFrame Columns:", recipes_df.columns.tolist())

    return ingredients_df, recipes_df

# 재료가 포함된 메뉴 찾기
def find_menus_with_ingredients(recipes_df, selected_ingredients):
    matching_menus = []
    
    for index, row in recipes_df.iterrows():
        menu_ingredients = row['ingredient'].split(', ')
        # 모든 선택된 재료가 메뉴 재료에 포함되어 있는지 확인
        if all(item in menu_ingredients for item in selected_ingredients):
            matching_menus.append(row['Menu name'])  # 일치하는 메뉴 이름 저장
    return matching_menus

# 메뉴에 맞는 레시피 찾기
def get_recipes(matching_menus, recipes_df):
    if matching_menus:
        recipe_list = recipes_df[recipes_df['Menu name'].isin(matching_menus)]
    else:
        recipe_list = pd.DataFrame()
    return recipe_list[['Menu name', 'instructions']]

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        user_input = request.form['ingredients']
        selected_ingredients = [ingredient.strip() for ingredient in user_input.split(',')]
        
        # 데이터 로드
        ingredients_df, recipes_df = load_data()
        
        # 재료에 맞는 메뉴 찾기
        matching_menus = find_menus_with_ingredients(recipes_df, selected_ingredients)
        
        # 해당 메뉴의 레시피 가져오기
        recommended_recipes = get_recipes(matching_menus, recipes_df)
        
        # 결과 페이지로 레시피 전달
        if recommended_recipes.empty:
            return render_template('index.html', message="해당 재료로 만들 수 있는 레시피가 없습니다.")
        return render_template('results.html', recipes=recommended_recipes)

    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)