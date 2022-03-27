export function romanToInteger(str) {
    let result = 0;
    let previous = 0;
    const VALUES = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1,
    };
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    for (let i = 0; i < str.length; i++) {
        let current = VALUES[str[i]];
        result += previous < current ? current - 2 * previous : current;
        previous = current;
    }
    return result;
}
