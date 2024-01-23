if (!process.env.NEXT_PUBLIC_WOOCOMMERCE_KEY) {
  throw new Error(
    "Missing required environment variable NEXT_PUBLIC_WOOCOMMERCE_KEY"
  );
}
if (!process.env.NEXT_PUBLIC_WOOCOMMERCE_SECRET) {
  throw new Error(
    "Missing required environment variable NEXT_PUBLIC_WOOCOMMERCE_SECRET"
  );
}

export default {
  key: process.env.NEXT_PUBLIC_WOOCOMMERCE_KEY,
  secret: process.env.NEXT_PUBLIC_WOOCOMMERCE_SECRET,
};
