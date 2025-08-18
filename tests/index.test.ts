import { describe, it, expect } from 'vitest';
import { insertionSort, mergeSort, quickSort } from '../src/index.js';

describe('Array Sort Module', () => {
	it('should export all sorting functions', () => {
		expect(insertionSort).toBeDefined();
		expect(mergeSort).toBeDefined();
		expect(quickSort).toBeDefined();
		expect(typeof insertionSort).toBe('function');
		expect(typeof mergeSort).toBe('function');
		expect(typeof quickSort).toBe('function');
	});
});

describe('insertionSort', () => {
	it('should sort an empty array', () => {
		const arr: number[] = [];
		insertionSort(arr);
		expect(arr).toEqual([]);
	});

	it('should sort a single element array', () => {
		const arr = [5];
		insertionSort(arr);
		expect(arr).toEqual([5]);
	});

	it('should sort numbers in ascending order', () => {
		const arr = [64, 34, 25, 12, 22, 11, 90];
		insertionSort(arr);
		expect(arr).toEqual([11, 12, 22, 25, 34, 64, 90]);
	});

	it('should sort already sorted array', () => {
		const arr = [1, 2, 3, 4, 5];
		insertionSort(arr);
		expect(arr).toEqual([1, 2, 3, 4, 5]);
	});

	it('should sort reverse sorted array', () => {
		const arr = [5, 4, 3, 2, 1];
		insertionSort(arr);
		expect(arr).toEqual([1, 2, 3, 4, 5]);
	});

	it('should sort array with duplicates', () => {
		const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
		insertionSort(arr);
		expect(arr).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9]);
	});

	it('should sort strings', () => {
		const arr = ['banana', 'apple', 'orange', 'grape'];
		insertionSort(arr);
		expect(arr).toEqual(['apple', 'banana', 'grape', 'orange']);
	});

	it('should handle negative numbers', () => {
		const arr = [-5, 3, -1, 0, 8, -3];
		insertionSort(arr);
		expect(arr).toEqual([-5, -3, -1, 0, 3, 8]);
	});
});

describe('mergeSort', () => {
	it('should sort an empty array', () => {
		const arr: number[] = [];
		mergeSort(arr);
		expect(arr).toEqual([]);
	});

	it('should sort a single element array', () => {
		const arr = [5];
		mergeSort(arr);
		expect(arr).toEqual([5]);
	});

	it('should sort numbers in ascending order', () => {
		const arr = [64, 34, 25, 12, 22, 11, 90];
		mergeSort(arr);
		expect(arr).toEqual([11, 12, 22, 25, 34, 64, 90]);
	});

	it('should sort already sorted array', () => {
		const arr = [1, 2, 3, 4, 5];
		mergeSort(arr);
		expect(arr).toEqual([1, 2, 3, 4, 5]);
	});

	it('should sort reverse sorted array', () => {
		const arr = [5, 4, 3, 2, 1];
		mergeSort(arr);
		expect(arr).toEqual([1, 2, 3, 4, 5]);
	});

	it('should sort array with duplicates', () => {
		const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
		mergeSort(arr);
		expect(arr).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9]);
	});

	it('should sort strings', () => {
		const arr = ['banana', 'apple', 'orange', 'grape'];
		mergeSort(arr);
		expect(arr).toEqual(['apple', 'banana', 'grape', 'orange']);
	});

	it('should handle negative numbers', () => {
		const arr = [-5, 3, -1, 0, 8, -3];
		mergeSort(arr);
		expect(arr).toEqual([-5, -3, -1, 0, 3, 8]);
	});

	it('should handle large arrays efficiently', () => {
		const arr = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
		const sorted = [...arr].sort((a, b) => a - b);
		mergeSort(arr);
		expect(arr).toEqual(sorted);
	});
});

describe('quickSort', () => {
	it('should sort an empty array', () => {
		const arr: number[] = [];
		quickSort(arr);
		expect(arr).toEqual([]);
	});

	it('should sort a single element array', () => {
		const arr = [5];
		quickSort(arr);
		expect(arr).toEqual([5]);
	});

	it('should sort numbers in ascending order', () => {
		const arr = [64, 34, 25, 12, 22, 11, 90];
		quickSort(arr);
		expect(arr).toEqual([11, 12, 22, 25, 34, 64, 90]);
	});

	it('should sort already sorted array', () => {
		const arr = [1, 2, 3, 4, 5];
		quickSort(arr);
		expect(arr).toEqual([1, 2, 3, 4, 5]);
	});

	it('should sort reverse sorted array', () => {
		const arr = [5, 4, 3, 2, 1];
		quickSort(arr);
		expect(arr).toEqual([1, 2, 3, 4, 5]);
	});

	it('should sort array with duplicates', () => {
		const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
		quickSort(arr);
		expect(arr).toEqual([1, 1, 2, 3, 4, 5, 5, 6, 9]);
	});

	it('should sort strings', () => {
		const arr = ['banana', 'apple', 'orange', 'grape'];
		quickSort(arr);
		expect(arr).toEqual(['apple', 'banana', 'grape', 'orange']);
	});

	it('should handle negative numbers', () => {
		const arr = [-5, 3, -1, 0, 8, -3];
		quickSort(arr);
		expect(arr).toEqual([-5, -3, -1, 0, 3, 8]);
	});

	it('should handle large arrays efficiently', () => {
		const arr = Array.from({ length: 100 }, () => Math.floor(Math.random() * 1000));
		const sorted = [...arr].sort((a, b) => a - b);
		quickSort(arr);
		expect(arr).toEqual(sorted);
	});
});

describe('Sorting Algorithm Comparisons', () => {
	it('all algorithms should produce identical results', () => {
		const testArray = [64, 34, 25, 12, 22, 11, 90, 88, 76, 50, 42];
		
		const arr1 = [...testArray];
		const arr2 = [...testArray];
		const arr3 = [...testArray];
		
		insertionSort(arr1);
		mergeSort(arr2);
		quickSort(arr3);
		
		const expected = [11, 12, 22, 25, 34, 42, 50, 64, 76, 88, 90];
		expect(arr1).toEqual(expected);
		expect(arr2).toEqual(expected);
		expect(arr3).toEqual(expected);
		
		// All should be identical
		expect(arr1).toEqual(arr2);
		expect(arr2).toEqual(arr3);
	});

	it('should handle edge case arrays consistently', () => {
		const edgeCases = [
			[],
			[1],
			[2, 1],
			[1, 1, 1],
			[3, 2, 1],
			[1, 2, 3]
		];

		edgeCases.forEach((testCase) => {
			const arr1 = [...testCase];
			const arr2 = [...testCase];
			const arr3 = [...testCase];
			const expected = [...testCase].sort((a, b) => a - b);
			
			insertionSort(arr1);
			mergeSort(arr2);
			quickSort(arr3);
			
			expect(arr1).toEqual(expected);
			expect(arr2).toEqual(expected);
			expect(arr3).toEqual(expected);
		});
	});
});