export const SITE_TITLE = "CDI Furlers - The Best Choice For Cruisers";
export const SITE_DESCRIPTION =
  "Discover unparalleled sailing efficiency with CDI Furlers, the premier choice for cruisers seeking reliable and cost-effective sail management solutions. ";

export const formatPrice = (prices) => {
  if (prices.price_range) {
    const min =
      prices.price_range.min_amount.slice(
        0,
        prices.price_range.min_amount.length - prices.currency_minor_unit
      ) +
      prices.currency_decimal_separator +
      prices.price_range.min_amount.slice(
        prices.price_range.min_amount.length - prices.currency_minor_unit
      );
    const max =
      prices.price_range.max_amount.slice(
        0,
        prices.price_range.max_amount.length - prices.currency_minor_unit
      ) +
      prices.currency_decimal_separator +
      prices.price_range.max_amount.slice(
        prices.price_range.max_amount.length - prices.currency_minor_unit
      );
    return `${prices.currency_prefix}${min} - ${prices.currency_prefix}${max}`;
  } else {
    const price =
      prices.price.slice(0, prices.price.length - prices.currency_minor_unit) +
      prices.currency_decimal_separator +
      prices.price.slice(prices.price.length - prices.currency_minor_unit);
    return `${prices.currency_prefix}${price}`;
  }
};

export const variationToDropdown = (variations) => {
  const arr = [];
  const obj = { attributes: arr };
  variations.forEach((variants) => {
    const idObj = { id: variants.id, ...variants.attributes[0] };
    if (!obj[variants.attributes[0].name]) {
      obj["name"] = variants.attributes[0].name;
    }
    delete idObj.name;
    obj.attributes.push(idObj);
  });
  return obj;
};

export const removeCharsFromName = (name) => {
  if (name.includes("&#8217;")) {
    return name.replace(/&#8217;/g, "'");
  } else if (name.includes("&amp;") || name.includes("&#038;")) {
    if (name.includes("&amp;")) {
      return name.replace("&amp;", "&");
    } else if (name.includes("&#038;")) {
      return name.replace("&#038;", "&");
    }
  } else {
    return name;
  }
};

export const formatTax = (totals) => {
  const tax = addDecimal(
    totals.total_tax,
    totals.currency_decimal_separator,
    totals.currency_minor_unit
  );
  return `${totals.currency_symbol} ${tax}`;
};

export const formatSubTotal = (totals) => {
  const subTotal = addDecimal(
    totals.total_items,
    totals.currency_decimal_separator,
    totals.currency_minor_unit
  );
  return `${totals.currency_symbol} ${subTotal}`;
};

export const formatTotal = (totals) => {
  const total = addDecimal(
    totals.total_price,
    totals.currency_decimal_separator,
    totals.currency_minor_unit
  );
  return `${totals.currency_symbol} ${Number(total).toFixed(2)}`;
};

export const formatShipping = (totals) => {
  const shipping = addDecimal(
    totals.total_shipping,
    totals.currency_decimal_separator,
    totals.currency_minor_unit
  );
  return `${totals.currency_symbol} ${Number(shipping).toFixed(2)}`;
};

export const addDecimal = (str, subStr, pos) => {
  return [
    str.slice(0, str.length - pos),
    subStr,
    str.slice(str.length - pos, str.length),
  ].join("");
};

export const formatCartItemTotal = (item) => {
  const cartItem = addDecimal(
    item.line_total,
    item.currency_decimal_separator,
    item.currency_minor_unit
  );
  return `${item.currency_symbol} ${cartItem}`;
};

export const deleteKeyReturnObject = (object, keys) => {
  const newObject = object;
  Object.keys(keys).forEach((key) => {
    delete newObject[key];
  });
  return newObject;
};

export const getQuery = (query, filter) => {
  const newObject = query;

  if (Object.values(filter).length > 1) {
    if (
      Object.values(query).includes(Object.values(filter)[0]) &&
      Object.values(query).includes(Object.values(filter)[1])
    ) {
      delete newObject[Object.keys(filter)[0]];
      delete newObject[Object.keys(filter)[1]];
      return newObject;
    } else {
      return { ...newObject, ...filter };
    }
  } else {
    if (Object.values(query).includes(Object.values(filter))) {
      delete newObject[Object.keys(filter)[0]];
      return newObject;
    } else {
      return { ...newObject, ...filter };
    }
  }
};

export const getIfChecked = (query, filter) => {
  if (Object.values(filter).length > 1) {
    if (
      Object.values(query).includes(Object.values(filter)[0]) &&
      Object.values(query).includes(Object.values(filter)[1])
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    if (Object.values(query).includes(Object.values(filter))) {
      return true;
    } else {
      return false;
    }
  }
};
