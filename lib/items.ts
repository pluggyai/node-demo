import { Item } from "pluggy-sdk"

const items = [{id:1}, {id:2}]

export async function saveItem(item: Item) {
    console.log('Saving item: ', item)
}

export async function getItems() {
    return items
}