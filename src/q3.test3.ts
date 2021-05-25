import {order1,orderCopy,printOrder,getPrice} from './Question3';

    test("get price test", () => {
        var actual = {
            id: 1,
            title: "Ajay",
            price: 100,
        }
        expect(getPrice()).toBe(actual.price);
    });
