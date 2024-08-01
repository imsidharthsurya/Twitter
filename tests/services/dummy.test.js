const execute=require("../../src/services/dummy-service")

jest.mock("../../src/services/dummy-helper")
const helper=require("../../src/services/dummy-helper")


test('should return learning nodejs if value true', () => { 
    helper.mockImplementation(()=>true)
    expect(execute()).toBe("learning nodejs")
})

test('should return learning reactjs if value true', () => { 
    helper.mockImplementation(()=>false)
    expect(execute()).toBe("learning reactjs")
})