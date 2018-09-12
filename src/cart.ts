import { Item } from "./app/item";

export interface CartItem{
    [id: string]: ItemWithAmount
  /*  id: string
    title: string
    price: string
    imageUrl: string
  */
}

export interface ItemWithAmount{
    item: Item,
    amount: number,
}