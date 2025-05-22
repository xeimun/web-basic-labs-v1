// 할인율을 입력받아 할인 가격을 계산하는 함수를 반환하세요.

function createDiscount(rate) {
    // TODO: 클로저로 rate를 기억하고, 가격을 받아 할인된 가격 반환
    return function (price) {
        return price * (1 - rate);
    };
}

function createDiscount2(price, rate) {
    return price * (1 - rate);
}

const blackFriday = createDiscount(0.3);
console.log(blackFriday(100000)); // → 70000

const blackFriday2 = createDiscount2(100000, 0.3);
console.log(blackFriday2); // → 70000
