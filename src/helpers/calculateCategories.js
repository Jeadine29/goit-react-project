// helpers/calculateCategories.js
import { fetchColors } from './fetchColors'; // Ensure this function is properly implemented
import { currentMonth } from './currentMonth'; // Fixed typo

export function calculateCategories(data, total) {
  if (!data.length) return [];

  const categorySum = {};
  const { firstDayOfMonth, lastDayOfMonth } = currentMonth(); // Fixed typo

  // Filter transactions for the current month
  const currentMonthTransactions = data.filter(
    item => item.date >= firstDayOfMonth && item.date <= lastDayOfMonth
  );

  if (!currentMonthTransactions.length) return [];

  // Sum up values for each category
  currentMonthTransactions.forEach(transaction => {
    const { category, sum } = transaction;
    if (categorySum[category.categoryName]) {
      categorySum[category.categoryName] += sum;
    } else {
      categorySum[category.categoryName] = sum;
    }
  });

  const categoriesData = [];

  // Create categories data with percentages
  Object.entries(categorySum).forEach(([key, value]) => {
    const percent = ((value / total) * 100).toFixed(1); // Ensure 1 decimal place for precision
    categoriesData.push({ name: key, value: parseFloat(percent) }); // Convert to float for consistency
  });

  // Ensure percentages sum up to 100%
  const sumPercentages = categoriesData.reduce(
    (total, item) => total + item.value,
    0
  );

  const sortedCategories = categoriesData.sort((a, b) => b.value - a.value);

  if (sumPercentages !== 100) {
    const diff = 100 - sumPercentages;

    if (sortedCategories.length) {
      const lastIndex = sortedCategories.length - 1;
      const lastCategory = sortedCategories[lastIndex];

      if (lastCategory.value > 1) {
        lastCategory.value = parseFloat((lastCategory.value + diff).toFixed(1));
      } else {
        lastCategory.value = 0.1; // Ensure a minimum value for visibility
      }
    }
  }

  // Ensure fetchColors is properly implemented
  return fetchColors(sortedCategories);
}
