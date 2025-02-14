import { describe, expect, test } from "vitest";
import { area } from "../src/area.js";
import { cathetus } from "../src/numbers.js";

describe("Testing area functions", () => {
    test("Rectangle", () => {
        const rect = area.rect(10, 10);

        expect(rect).toBe(100)
    })
})
describe("pythagorean theorem", () => {
    test("Cathetus", () => {
        expect(cathetus(11, 10)).toBe(4.58257569495584)
    })
})