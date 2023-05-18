/**
 * This file takes care of global app side effects,
 * like clicking on add to cart and the cart modal being displayed
 */

import { signal } from "@preact/signals";

const displayCart = signal(false);
const displayMenu = signal(false);
const displaySearchbar = signal(false);
const listingType = signal("grid");
const detailsToggle = signal("Descrição");

const state = {
  displayCart,
  displayMenu,
  displaySearchbar,
  listingType,
  detailsToggle,
};

export const useUI = () => state;
