import { Item } from './item.model'

export class Product extends Item {
    grammare: string;
    description?: string;
    composition: string;
    allergens: string;
    categories: string[];
    img?: string;
    nutriValues: NutriValues;
    portionWeight: number;
}

interface NutriValues {
    protein: number;
    fat: number;
    carbohydrate: number;
    sugar: number;
    calories: number;
    sodium: number;
}
