import { describe, it, expect, beforeEach } from "vitest";
import {
  addProduct,
  addToCart,
  applyShippingDiscount,
  calculateTotal,
  clearCart,
} from "../src/ecommerce";

let cart = {};
describe("E-commerce System", () => {
  beforeEach(() => {
    addProduct("Soap", 100, 10);
    addProduct("Shampoo", 200, 5);
    clearCart();
  });

  it("should calculate price of all products", () => {
    addToCart("Soap", 2);
    addToCart("Shampoo", 2);
    const sum = calculateTotal();
    expect(sum).toBe(600);
  });

  it("should add products to cart", () => {
    let cart = {}
    cart = addToCart("Shampoo", 2);
    expect(cart['Shampoo']).toBe(2)
  })

  it("should apply a $10 discount on shipping over $500", () => {
    // Arrange - Act - Assert
    let cart = {}
    cart = addToCart("Soap", 10);
    const sum = calculateTotal();
    expect(applyShippingDiscount(sum)).toBe(990);
  })

  it("should not apply a $10 discount on shipping less than or equal to $500", () => {
    let cart = {}
    cart = addToCart("Soap", 3);
    const sum = calculateTotal();
    expect(applyShippingDiscount(sum)).toBe(300);
  })
});
