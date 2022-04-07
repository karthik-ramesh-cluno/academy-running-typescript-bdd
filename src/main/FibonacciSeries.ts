export class FibonacciSeries {
    fibonacci(position : number): number {
        let fibonacciNums = [0,1];
        for(let i: number = 1; i< position; i++){
            fibonacciNums.push(fibonacciNums[i] + fibonacciNums[i - 1]);
        }
        return fibonacciNums[position];
    }
}