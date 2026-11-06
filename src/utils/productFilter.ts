import { ProductItem } from '../data/business';

/**
 * Pure function to filter products by category and search keyword.
 * Handles case-insensitive search across title, description, category, and specifications.
 */
export function filterProducts(
  products: ProductItem[],
  selectedCategory: string,
  searchQuery: string
): ProductItem[] {
  const query = searchQuery.trim().toLowerCase();

  return products.filter((item) => {
    // 1. Category match
    const categoryMatches =
      !selectedCategory ||
      selectedCategory === 'All Products' ||
      item.category.toLowerCase() === selectedCategory.toLowerCase();

    if (!categoryMatches) {
      return false;
    }

    // 2. Search query match
    if (!query) {
      return true;
    }

    const inName = item.name.toLowerCase().includes(query);
    const inDesc = item.description.toLowerCase().includes(query);
    const inCat = item.category.toLowerCase().includes(query);
    const inFinish = item.specifications.finish.toLowerCase().includes(query);
    const inApp = item.specifications.application.toLowerCase().includes(query);

    return inName || inDesc || inCat || inFinish || inApp;
  });
}
