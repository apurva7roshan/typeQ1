import {order1,orderCopy,printOrder,getPrice} from './Question3';

    test("ordercopy test", () => {
        var actual = {
            id: 1,
            title: "Ajay",
            price: 100,
        }
        expect(orderCopy).toStrictEqual(actual);
    });
   
