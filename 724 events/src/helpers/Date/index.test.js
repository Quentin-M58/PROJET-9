import { getMonth } from './index';

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", async () => {
            // on definie la nouvelle constante date
            const date = new Date('2022-01-01')
            // on verifie si se que la fonction renvoie est egale a janvier
            expect(getMonth(date)).toEqual("janvier")
        });
        it("the function return juillet for 2022-07-08 as date", () => {
            // on definie la nouvelle constante date
            const date = new Date('2022-07-08')
            // on verifie si se que la fonction renvoie est egale a juillet
            expect(getMonth(date)).toEqual("juillet")
        });
    });
})

