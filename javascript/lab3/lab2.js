/**
 * Возвращает n-е число Фибоначчи.
 * @param {number} n - Индекс числа Фибоначчи (натуральное число).
 * @returns {BigInt} - n-е число Фибоначчи.
 */
export function fib(n) {
    let a = BigInt(0);
    let b = BigInt(1);
    if (n === 0) return BigInt(0);
    for (let i = 2; i <= n; i++) {
        let temp = a;
        a = b;
        b += temp;
    }
    return b;
}