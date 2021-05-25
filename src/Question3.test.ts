import {order1,orderCopy,printOrder,getPrice} from './Question3';

    test("order test", () => {
        var actual = {
            id: 1,
            title: "Ajay",
            price: 100,
        }
        expect(order1).toStrictEqual(actual);
    });
 
