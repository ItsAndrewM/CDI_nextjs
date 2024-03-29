/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/7QxejbdSU5N
 */
import { Label } from "@/components/ui/label";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { Quantity } from "./quantity";
import { useAddItemToCart } from "@/lib/hooks/useAddItemToCart";
import { CartContext } from "@/lib/context/cartContext";
import { addItemToCart } from "@/lib/operations/operations-woocommerce";
import LoadingSpinner from "../ui/loadingSpinner";

export function ProductPage({ product }) {
  const [selected, setSelected] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Add to cart");
  const { cart, orderId, setCart } = useContext(CartContext);

  const handleAddToCart = async (e) => {
    e.preventDefault();

    try {
      if (selected) {
        setLoading(true);
        const newItem = await addItemToCart(
          orderId,
          product.id,
          selected.id,
          quantity > 1 ? quantity : 1,
          product.shipping_class,
          product.shipping_class_id
        );
        if (newItem) {
          setButtonText("Added");
          setCart(newItem);
          setLoading(false);
        } else {
          setLoading(false);
        }
      }
    } catch (err) {
      window.alert(err);
    }
  };

  useEffect(() => {
    setButtonText("Add to cart");
  }, [selected]);

  const handleVariationSelect = (name) => {
    if (product.type === "variable" && product.variations.length) {
      const variant = product.variations.find(
        (variation) => variation.name === name
      );
      if (variant) {
        setSelected(variant);
      }
    }
  };
  return (
    <div
      key="1"
      className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6"
    >
      <div className="grid md:grid-cols-5 gap-3 items-start">
        <div className="md:col-span-4">
          <Image
            alt={
              !product.images.length ? "Product Image" : product.images[0].alt
            }
            className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800 dark:border-gray-800"
            height="600"
            src={
              !product.images.length
                ? "/placeholder.svg"
                : product.images[0].src
            }
            width="600"
          />
        </div>
        <div className="md:col-span-1 grid gap-3">
          {!product.images.length
            ? null
            : product.images.map((image, index) => {
                if (index > 0) {
                  return (
                    <Image
                      alt={image.alt}
                      className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800 dark:border-gray-800"
                      height="200"
                      key={image.id}
                      src={image.src}
                      width="200"
                    />
                  );
                }
              })}
        </div>
      </div>
      <div className="grid gap-4 md:gap-10 items-start">
        <div className="grid gap-4">
          <h1 className="font-bold text-3xl lg:text-4xl">{product.name}</h1>
          <div className="flex flex-wrap gap-2">
            {product.categories.map((category) => {
              return (
                <Link
                  href={`/product-category/${category.slug}`}
                  key={category.id}
                >
                  <Button
                    variant="solid"
                    className="text-sm text-black bg-cdiLightBlue hover:bg-cdiBlue hover:text-white"
                  >
                    {category.name}
                  </Button>
                </Link>
              );
            })}
          </div>

          <div className="text-4xl font-bold">
            {`${product.prices.currency_code} ${
              product.prices.currency_symbol
            } ${
              selected
                ? Number(selected.price).toFixed(2)
                : Number(product.price).toFixed(2)
            }`}
          </div>
        </div>
        <form className="grid gap-4 md:gap-10">
          <div className="grid gap-2">
            <Label className="text-base" htmlFor="quantity">
              Quantity
            </Label>
            {/* <Select defaultValue="1">
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select> */}
            <Quantity setQuantity={setQuantity} quantity={quantity} min={1} />
          </div>
          <div className="grid gap-2">
            {!product.variations.length ? null : (
              <Label className="text-base" htmlFor="size">
                {product.variations[0].attributes[0].name}
              </Label>
            )}
            {!product.variations.length ? null : (
              <Select
                defaultValue={product.variations[0].id}
                onValueChange={handleVariationSelect}
                required
              >
                <SelectTrigger className="w-24">
                  <SelectValue placeholder={product.variations[0].name} />
                </SelectTrigger>
                <SelectContent>
                  {product.variations.map((variant) => {
                    return (
                      <SelectItem value={variant.name} key={variant.id}>
                        {variant.name}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            )}
          </div>
          <div className="grid gap-2">
            <Label className="text-base" htmlFor="availability">
              Availability
            </Label>
            <div className="flex items-center">
              <span className="h-3 w-3 rounded-full bg-green-500 inline-block mr-2 animate-ping" />
              <p>In Stock</p>
            </div>
          </div>
          <Button
            size="lg"
            variant="solid"
            className="bg-cdiBlue hover:bg-cdiLightBlue text-white hover:text-black"
            onClick={handleAddToCart}
          >
            {loading ? (
              <LoadingSpinner />
            ) : product.type == "variable" && !selected ? (
              "Select Option"
            ) : (
              buttonText
            )}
          </Button>
        </form>
        <div className="grid gap-4">
          <h2 className="font-bold text-2xl">Product Features</h2>
          <div dangerouslySetInnerHTML={{ __html: product.description }} />
          {/* <ul className="list-disc list-inside">
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul> */}
        </div>
        <div className="grid gap-4">
          <h2 className="font-bold text-2xl">Shipping Class</h2>
          <p className="capitalize">{product.shipping_class}</p>
        </div>
        {/* <div className="grid gap-4">
          <h2 className="font-bold text-2xl">Related Products</h2>
          <div className="grid grid-cols-2 gap-4">
            <Image
              alt="Related Product 1"
              className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800 dark:border-gray-800"
              height="200"
              src="/placeholder.svg"
              width="200"
            />
            <Image
              alt="Related Product 2"
              className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800 dark:border-gray-800"
              height="200"
              src="/placeholder.svg"
              width="200"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}
