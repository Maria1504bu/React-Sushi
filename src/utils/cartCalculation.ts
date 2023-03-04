import { CartItemProps, CartSliceState } from '../redux/slices/CartSlice';

export const cartItemsFromLS = (): CartSliceState => {
    const data = localStorage.getItem("CartItems");
    let items = [] as CartItemProps[];
    let totalPrice = 0;
    let totalCount = 0;
    if (data) {
        items = JSON.parse(data) as CartItemProps[];
        totalCount = computeTotalCount(items);
        totalPrice = computeTotalPrice(items);
    }
    return { items, totalCount, totalPrice } as CartSliceState;
}

// export const computeAndSave = (cartItems: CartItemProps[]): CartSliceState => {
//     saveToLS(cartItems);
//     return {
//         items : cartItems,
//         totalCount : computeTotalCount(cartItems),
//         totalPrice : computeTotalPrice(cartItems)
//     }
// }

export const computeTotalCount = (cartItems: CartItemProps[]): number => {
    return cartItems.reduce((sum, item) => sum + item.count, 0);
}

export const computeTotalPrice = (cartItems: CartItemProps[]): number => {
    return cartItems.reduce((sum, item) => sum + item.count * item.price, 0);
}

export const saveToLS = (cartItems: CartItemProps[]): void => {
    localStorage.setItem("CartItems", JSON.stringify(cartItems));
}