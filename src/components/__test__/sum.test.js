import { sum } from "../sum";

test("this function should calculate the sum of two number",() => {

    const result=sum(3,4);
// assertion
    expect(result).toBe(7);
 
});