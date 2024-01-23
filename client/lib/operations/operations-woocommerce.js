export const PER_PAGE = 16;

export const getCart = async () => {
  return await fetch(
    process.env.NODE_ENV === "development"
      ? `${process.env.NEXT_PUBLIC_DEV_URL}/api/wc/store/cart`
      : `${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/wc/store/cart`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .catch((error) => error);
};

export const getOldCart = async (order_id) => {
  return await fetch(
    process.env.NODE_ENV === "development"
      ? `${process.env.NEXT_PUBLIC_DEV_URL}/api/wc/store/cart/id/${order_id}`
      : `${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/wc/store/cart/id/${order_id}`
  )
    .then((response) => response.json())
    .catch((error) => error);
};

export const getPaginatedCategories = async (sort, page) => {
  const order = sort.split("-")[1];
  const orderBy = sort.split("-")[0];
  return await fetch(
    process.env.NODE_ENV === "development"
      ? `${
          process.env.NEXT_PUBLIC_DEV_URL
        }/api/wc/store/products/product-categories/paginated?page=${
          page ? page : 1
        }&order=${order ? order : "asc"}&orderby=${orderBy ? orderBy : "name"}`
      : `${
          process.env.NEXT_PUBLIC_PUBLIC_URL
        }/api/wc/store/products/product-categories/paginated?page=${
          page ? page : 1
        }&order=${order ? order : "asc"}&orderby=${orderBy ? orderBy : "name"}`
  )
    .then((response) => response.json())
    .catch((error) => error);
};

export const getCategories = async () => {
  const data = await fetch(
    `${
      process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_DEV_URL
        : process.env.NEXT_PUBLIC_PUBLIC_URL
    }/api/wc/store/products/product-categories`
  );
  const categories = await data.json();
  return categories.data;
};

export const formatCategoriesWithChildren = async () => {
  const allCategories = await getCategories();
  const parents = allCategories.filter((category) => category.parent === 0);
  const allChildren = allCategories.filter((category) => category.parent !== 0);
  return parents.map((parent) => {
    const myChildren = allChildren.filter(
      (child) => child.parent === parent.id
    );
    return { ...parent, children: myChildren };
  });
};

export const getCategoryPaths = async () => {
  const categories = await getCategories();
  if (categories) {
    return categories.map((category) => category.slug);
  }
};

export const getCategoryId = async (slug) => {
  const categories = await getCategories();
  return categories.find((category) => category.slug === slug).id;
};

export const getCategoryById = async (id) => {
  const data = await fetch(
    process.env.NODE_ENV === "development"
      ? `${process.env.NEXT_PUBLIC_DEV_URL}/api/wc/store/products/product-categories/category/${id}`
      : `${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/wc/store/products/product-categories/category/${id}`
  );
  const category = await data.json();
  return category.data;
};

export const getProductByCategoryId = async (id) => {
  const data = await fetch(
    process.env.NODE_ENV === "development"
      ? `${process.env.NEXT_PUBLIC_DEV_URL}/api/wc/store/products/product-categories/products/${id}`
      : `${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/wc/store/products/product-categories/products/${id}`
  );
  const products = await data.json();
  return products.data;
};

export const getProductPath = async () => {
  const paths = [];
  const categories = await getCategories();
  if (categories) {
    for (const category of categories) {
      const products = await getProductByCategoryId(category.id);
      if (products) {
        for (const product of products) {
          paths.push(`${category.slug}/${product.slug}`);
        }
      }
    }
    console.log(paths);
    return paths;
  }
};

export const getProductById = async (id) => {
  const data = await fetch(
    process.env.NODE_ENV === "development"
      ? `${process.env.NEXT_PUBLIC_DEV_URL}/api/wc/store/products/product/${id}`
      : `${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/wc/store/products/product/${id}`
  );
  const product = await data.json();
  return product.data;
};

export const getProducts = async (query) => {
  const {
    page,
    orderBy,
    max_price,
    min_price,
    shipping_class,
    category,
    tag,
    search,
  } = query;
  const data = await fetch(
    process.env.NODE_ENV === "development"
      ? `${process.env.NEXT_PUBLIC_DEV_URL}/api/wc/store/products?page=${
          !page ? 1 : page
        }&orderBy=${orderBy ? orderBy : "title-asc"}&max_price=${
          max_price ? max_price : 20000
        }&min_price=${min_price ? min_price : 0}&shipping_class=${
          shipping_class ? shipping_class : ""
        }&category=${category ? category : ""}&tag=${tag ? tag : ""}&search=${
          search ? search : ""
        }`
      : `${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/wc/store/products?page=${
          !page ? 1 : page
        }&orderBy=${orderBy}&max_price=${
          max_price ? max_price : 20000
        }&min_price=${min_price ? min_price : 0}&shipping_class=${
          shipping_class ? shipping_class : ""
        }&category=${category ? category : ""}&tag=${tag ? tag : ""}&search=${
          search ? search : ""
        }`
  );
  const products = await data.json();
  return products.data;
};

export const searchProducts = async (searchTerm) => {
  const data = await fetch(
    process.env.NODE_ENV === "development"
      ? `${process.env.NEXT_PUBLIC_DEV_URL}/api/wc/store/products/search/${searchTerm}`
      : `${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/wc/store/products/search/${searchTerm}`
  );
  const products = await data.json();
  return products.data;
};

export const getTotalProducts = async () => {
  const data = await fetch(
    process.env.NODE_ENV === "development"
      ? `${process.env.NEXT_PUBLIC_DEV_URL}/api/wc/store/products/total`
      : `${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/wc/store/products/total`
  );
  const total = await data.json();
  return total.data;
};

export const addItemToCart = async (
  id,
  product_id,
  variation_id,
  quantity = 1
) => {
  const data = await fetch(
    process.env.NODE_ENV === "development"
      ? `${process.env.NEXT_PUBLIC_DEV_URL}/api/wc/store/cart/add-item`
      : `${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/wc/store/cart/add-item`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        product_id: product_id,
        quantity: quantity,
        variation_id: variation_id,
      }),
    }
  );
  const cart = await data.json();
  return cart.data;
};

export const updateItemInCart = async (id, product, quantity) => {
  const data = await fetch(
    process.env.NODE_ENV === "development"
      ? `${process.env.NEXT_PUBLIC_DEV_URL}/api/wc/store/cart/update-item`
      : `${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/wc/store/cart/update-item`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        quantity: quantity,
        product,
      }),
    }
  );
  const cart = await data.json();
  return cart.data;
};

export const deleteItemInCart = async (
  id,
  cart_item_id,
  product_id,
  variation_id
) => {
  const data = await fetch(
    process.env.NODE_ENV === "development"
      ? `${process.env.NEXT_PUBLIC_DEV_URL}/api/wc/store/cart/delete-item`
      : `${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/wc/store/cart/delete-item`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        product_id: product_id,
        cart_item_id: cart_item_id,
        variation_id: variation_id,
      }),
    }
  );
  const cart = await data.json();
  return cart.data;
};

export const addShippingToOrder = async (id, shipping) => {
  const data = await fetch(
    process.env.NODE_ENV === "development"
      ? `${process.env.NEXT_PUBLIC_DEV_URL}/api/wc/store/order/add-shipping-address`
      : `${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/wc/store/order/add-shipping-address`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        shipping: shipping,
      }),
    }
  )
    .then((response) => response.json())
    .catch((error) => error);
  return data;
};

export const addBillingToOrder = async (id, billing) => {
  const data = await fetch(
    process.env.NODE_ENV === "development"
      ? `${process.env.NEXT_PUBLIC_DEV_URL}/api/wc/store/order/add-billing-address`
      : `${process.env.NEXT_PUBLIC_PUBLIC_URL}/api/wc/store/order/add-billing-address`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        billing: billing,
      }),
    }
  )
    .then((response) => response.json())
    .catch((error) => error);
  return data;
};
