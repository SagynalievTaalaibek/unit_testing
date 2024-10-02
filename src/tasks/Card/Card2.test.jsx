import { solveQuadratic } from '../../app/constant.js';

describe('Quadratic Equation Solver Tests', () => {
  test('Should return two real roots with precision', () => {
    const result = solveQuadratic(1, -3, 2); // Решаем уравнение: x^2 - 3x + 2 = 0

    const root1 = result.roots[0];
    const root2 = result.roots[1];

    expect(root1).toBeCloseTo(2.01, 1);
    expect(root2).toBeCloseTo(1.01, 1);
  });

  test('Roots should be correct for valid input', () => {
    const result = solveQuadratic(1, -3, 2);
    expect(result.roots).toEqual([2, 1]);
  });

  // Assert.AreNotEqual
  test('Roots should not match incorrect result', () => {
    const result = solveQuadratic(1, -3, 2);
    expect(result.roots).not.toEqual([3, 4]);
  });

  // CollectionAssert.AreEquivalent Проверка эквивалентности корней в разном порядке
  test('Roots should be equivalent in different order', () => {
    const result = solveQuadratic(1, -3, 2);
    expect(result.roots.sort()).toEqual([1, 2]);
  });

  // CollectionAssert.DoesNotContain Проверка отсутствия конкретного значения в корнях
  test('Roots should not contain specific value', () => {
    const result = solveQuadratic(1, -3, 2);
    expect(result.roots).not.toContain(3);
  });

  // CollectionAssert.AllItemsAreUnique Проверка уникальности корней
  test('All roots should be unique', () => {
    const result = solveQuadratic(1, -3, 2);
    const uniqueRoots = [...new Set(result.roots)]; // Set убирает дуюликаты
    expect(uniqueRoots.length).toBe(result.roots.length);
  });
});
