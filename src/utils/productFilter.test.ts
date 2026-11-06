import test from 'node:test';
import assert from 'node:assert/strict';
import { filterProducts } from './productFilter';
import { PRODUCTS } from '../data/business';

test('filterProducts returns all products when category is "All Products" and query is empty', () => {
  const result = filterProducts(PRODUCTS, 'All Products', '');
  assert.equal(result.length, PRODUCTS.length);
});

test('filterProducts filters correctly by category', () => {
  const chandeliers = filterProducts(PRODUCTS, 'Chandeliers', '');
  assert.ok(chandeliers.length > 0);
  assert.ok(chandeliers.every((p) => p.category === 'Chandeliers'));
});

test('filterProducts searches correctly across titles and descriptions', () => {
  const results = filterProducts(PRODUCTS, 'All Products', 'gate');
  assert.ok(results.length > 0);
  assert.ok(
    results.every(
      (p) =>
        p.name.toLowerCase().includes('gate') ||
        p.description.toLowerCase().includes('gate') ||
        p.category.toLowerCase().includes('gate')
    )
  );
});

test('filterProducts handles combined category and search filter', () => {
  const results = filterProducts(PRODUCTS, 'Chandeliers', 'crystal');
  assert.ok(results.length > 0);
  assert.ok(results.every((p) => p.category === 'Chandeliers'));
  assert.ok(
    results.every((p) => p.name.toLowerCase().includes('crystal') || p.description.toLowerCase().includes('crystal'))
  );
});

test('filterProducts returns empty array when no matches exist', () => {
  const results = filterProducts(PRODUCTS, 'Chandeliers', 'nonexistenttermxyz999');
  assert.equal(results.length, 0);
});
