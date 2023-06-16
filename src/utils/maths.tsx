import { findObjectById } from "./array";
import { Product, BasketProduct } from "./interfaces";

export function formatPrice(priceToFormat: number): string {
  if (!priceToFormat) return "0,00 €";

  let price = priceToFormat.toString();
  price = replaceFrenchCommaWithDot(price);

  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(parseInt(price));
  return formattedPrice;
}

export function replaceFrenchCommaWithDot(price: string) {
  if (typeof price === "string") price = price.replace(",", ".");
  return price;
}

export function calculateTotalPrice(basket: BasketProduct[], menu: Product[]) {
  return basket.reduce((currentTotal, product) => {
    const productInfo = findObjectById(product.id, menu) as Product;
    if (!productInfo) return currentTotal;
    const summedProductPrice =
      parseInt(replaceFrenchCommaWithDot(productInfo.price.toString())) *
      product.quantity;

    if (isNaN(summedProductPrice)) return currentTotal;
    return currentTotal + summedProductPrice;
  }, 0);
}
