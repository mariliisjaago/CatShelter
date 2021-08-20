import { Injectable } from "@angular/core";
import { CATSFROMDB } from "./cats-db";

@Injectable({
    providedIn: 'root'
})
export class CatsService {
    cats: Cat[] = CATSFROMDB

    getCats(): Cat[] {
        return this.cats;
    }
}

export interface Cat {
    id: number,
    name: string,
    age: number,
    ageCategory: string,
    colorId: number,
    imageUrl: string
}