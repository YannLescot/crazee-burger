import { findObjectById } from "./array";

export function formatPrice(priceToFormat) {
  let price = priceToFormat;

  // @TODO: perhaps change this to if(!price) return 0
  if (!price) return "0,00 €";
  price = replaceFrenchCommaWithDot(price);

  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price);
  return formattedPrice;
}

export function replaceFrenchCommaWithDot(price) {
  if (typeof price === "string") price = price.replace(",", ".");
  return price;
}

export function calculateTotalPrice(basket, menu) {
  return basket.reduce((currentTotal, product) => {
    const productInfo = findObjectById(product.id, menu);
    const price =
      replaceFrenchCommaWithDot(productInfo.price) * product.quantity;

    if (isNaN(price)) return currentTotal;
    return currentTotal + price;
  }, 0);
}
