import { CartProvider } from "@/lib/context/cartProvider";
import "../styles/globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { CurrencyProvider } from "@/lib/context/currencyProvider";
import { CategoryChildrenProvider } from "@/lib/context/categoryChildrenProvider";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  return (
    <CartProvider>
      <CurrencyProvider>
        <CategoryChildrenProvider>
          <Component {...pageProps} />
          <GoogleAnalytics gaId="G-7KBK61N96M" />
          <GoogleTagManager gtmId="GTM-K4QBF39" />
          <Analytics />
        </CategoryChildrenProvider>
      </CurrencyProvider>
    </CartProvider>
  );
}
