export const categories = [
  {
    id: 0,
    title: "Men",
    name: "men",
  },
  {
    id: 1,
    title: "Women",
    name: "women",
  },
  {
    id: 3,
    title: "Kids",
    name: "kids",
  },
];

export type Cart = {
  userId: string;
  items: Array<{
    id: string;
    name: string;
    price: number;
    quantity: number;
    imageString: string;
  }>;
};
