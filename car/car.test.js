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
        odyssey = new Car("Honda","Odyssey")
    })

    it("exists",()=>{
        expect(Car).toBeDefined()
    })
    it("creates car instances",()=>{
        expect(odyssey).toBeInstanceOf(Car)
    })
    it("cars have a make property",()=>{
        expect(odyssey).toHaveProperty("make")
    })
})