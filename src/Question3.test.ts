import {order1,orderCopy,printOrder,getPrice} from './Question3';

    test("order test", () => {
        var actual = {
            id: 1,
            title: "Ajay",
            price: 100,
        }
        expect(order1).toStrictEqual(actual);
    });
    test("ordercopy test", () => {
        var actual = {
            id: 1,
            title: "Ajay",
            price: 100,
        }
        expect(orderCopy).toStrictEqual(actual);
    });
    test("print order test", () => {
        var actual = {
            id: 1,
            title: "Ajay",
            price: 100,
        }
        expect(printOrder()).toStrictEqual(actual);
    });
    test("get price test", () => {
        var actual = {
            id: 1,
            title: "Ajay",
            price: 100,
        }
        expect(getPrice()).toBe(actual.price);
    });
