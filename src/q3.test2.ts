import {order1,orderCopy,printOrder,getPrice} from './Question3';

    test("print order test", () => {
        var actual = {
            id: 1,
            title: "Ajay",
            price: 100,
        }
        expect(printOrder()).toStrictEqual(actual);
    });

