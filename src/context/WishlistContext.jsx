import { createContext, useState } from "react";

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (restaurant) => {
    const exists = wishlist.find((item) => item.id === restaurant.id);

    if (!exists) {
      setWishlist([...wishlist, restaurant]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const isFavourite = (id) => {
    return wishlist.some((item) => item.id === id);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isFavourite,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
