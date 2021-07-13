const Car = require("./car.js")

test("1st test",()=>{
    expect(3).toBe(3) //eslint-disable-line
    expect(3).not.toBe(4)
    expect(3).toBeGreaterThan(2)
})
test("is not the toEqual and toBe",()=>{
    let a = {}
    let b = {}
    let c = a
    // expect(a).not.toBe(b)
    // expect(a).toEqual(b)
    expect(a).toBe(c)
})

describe("car class",()=>{
    let odyssey
    beforeEach(()=>{
        odyssey = new Car("honda","odyssey")
    })

    it("exists",()=>{
        expect(Car).toBeDefined()
    })
    it("creates car instances",()=>{
        expect(odyssey).toBeInstanceOf(Car)
    })
    it.only("cars have a make property",()=>{
        expect(odyssey).toHaveProperty("make")
        // expect(odyssey).toEqual({make:"honda"})
    })
    it("cars have a model property", ()=>{
        expect(odyssey).toHaveProperty("model")
    })
    it("has odometer prop starting at 0", ()=>{
        expect(odyssey).toHaveProperty("odometer",0)
    })
    it("cars have a drive method",()=>{
        expect(odyssey.drive).toBeInstanceOf(Function)
    })
    it("drive method returns drive distance",()=>{
        //arrange act assert
        const expected = `${10} miles driven`
        const actual = odyssey.drive(10)
        expect(actual).toBe(expected)
    })
    it("drive method increases odo by driven dist",()=>{
        expect(odyssey.odometer).toBe(0)
        odyssey.drive(10)
        expect(odyssey.odometer).toBe(10)
        odyssey.drive(10)
        expect(odyssey.odometer).toBe(20)
    })

})