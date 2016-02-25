"use strict"

var immortalise = require("../lib")

var OakObject = require("../lib/types/object")
var OakArray = require("../lib/types/array")
var OakDate = require("../lib/types/date")

describe("immortalise", function () {
  it("stores nulls as nulls", function () {
    expect(immortalise(null)).toBe(null)
  })

  it("stores undefined as undefined", function () {
    expect(immortalise(undefined)).toBe(undefined)
  })

  it("stores booleans as booleans", function () {
    var value1 = true
    var value2 = false
    expect(immortalise(false)).toBe(false)
    expect(immortalise(true)).toBe(true)
  })

  it("stores numbers as numbers", function () {
    var value = 123
    expect(immortalise(value)).toBe(value)
  })

  it("stores strings as strings", function () {
    var value = "asdf"
    expect(immortalise(value)).toBe(value)
  })

  it("stores function as functions", function () {
    var value = function () {}
    expect(immortalise(value)).toBe(value)
  })

  it("stores Dates as OakDates", function () {
    expect(immortalise(new Date(123)) instanceof OakDate)
      .toBe(true, "instanceof OakDate")
  })

  it("stores Arrays as OakArrays", function () {
    expect(immortalise([]) instanceof OakArray)
      .toBe(true, "instanceof OakArray")
  })

  it("stores Objects as OakObjects", function () {
    expect(immortalise([]) instanceof OakArray)
      .toBe(true, "instanceof OakArray")
  })

  it("stores properly array of objects", function () {
    var data = immortalise([{a: 1}, {b: 2}, {c: 3}])

    expect(data instanceof OakArray)
      .toBe(true, "instanceof OakArray")
    expect(data.length)
      .toBe(3, "array's length")

    expect(data.get(0) instanceof OakObject)
      .toBe(true, "instanceof OakObject")
    expect(data.get(1) instanceof OakObject)
      .toBe(true, "instanceof OakObject")
    expect(data.get(2) instanceof OakObject)
      .toBe(true, "instanceof OakObject")

    expect(data.get(0).get("a")).toBe(1)
    expect(data.get(1).get("b")).toBe(2)
    expect(data.get(2).get("c")).toBe(3)
  })
})
