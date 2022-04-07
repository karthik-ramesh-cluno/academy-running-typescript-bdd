import {FibonacciSeries} from "../main/FibonacciSeries";

describe('Fibonacci series test', () => {
    it.each([
        [0,0],[1, 1],[2, 1],[3, 2],[4, 3],[5, 5],[6,8],[7,13],[9,34],
        [50,12586269025],
        [74,1304969544928657]
    ])("Given %i this is the value returned %i", (input:number, expected:number) => {
        let numbers = new FibonacciSeries();
        expect(numbers.fibonacci(input)).toEqual(expected);
    })
})