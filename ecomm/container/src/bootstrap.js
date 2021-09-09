import { mount as ProductMount } from "products/ProductsIndex";
import { mount as CartMount } from "cart/cartIndex";

const productsContainer = document.querySelector("#my-products");
ProductMount(productsContainer);

const cartContainer = document.querySelector("#my-cart");
CartMount(cartContainer);
