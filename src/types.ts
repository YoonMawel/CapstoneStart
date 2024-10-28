// types.ts
export type RootStackParamList = {
  Ingredients: undefined; // Ingredients 화면에는 params가 없음
  IngredientDetail: {
      foodName: string;
      foodCategory: string;
      expirationDate: string;
  };
  Recipe: undefined; // Recipe 화면에도 params가 없음
  Add: undefined; // Add 화면에도 params가 없음
};
