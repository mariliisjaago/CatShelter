import { Cat } from "./cats-service"

export const CATSFROMDB: Cat[] = [
    {
        id: 0,
        name: 'Kiisuliisu',
        age: 2,
        ageCategory: 'adult',
        colorId: 1,
        imageUrl: '../../assets/images/black-white-1.jfif' 
    },
    {
        id: 1,
        name: 'Ossu',
        age: 7,
        ageCategory: 'adult',
        colorId: 5,
        imageUrl: '../../assets/images/orange-1.jfif' 
    },
    {
        id: 2,
        name: 'Sille',
        age: 0,
        ageCategory: 'kitten',
        colorId: 6,
        imageUrl: '../../assets/images/kitten-white-1.jfif' 
    },
    {
        id: 3,
        name: 'Tripsu',
        age: 6,
        ageCategory: 'adult',
        colorId: 4,
        imageUrl: '../../assets/images/tabby-1.jfif' 
    },
    {
        id: 4,
        name: 'Kulla',
        age: 0,
        ageCategory: 'kitten',
        colorId: 3,
        imageUrl: '../../assets/images/kitten-grey-1.jfif' 
    },
    {
        id: 5,
        name: 'Max',
        age: 4,
        ageCategory: 'adult',
        colorId: 2,
        imageUrl: '../../assets/images/beige-1.jfif' 
    },
    {
        id: 6,
        name: 'Julia',
        age: 3,
        ageCategory: 'adult',
        colorId: 1,
        imageUrl: '../../assets/images/black-white-2.jfif' 
    },
]


let colorTypes = [
    {
        id: 1,
        color: 'black-and-white'
    },
    {
        id: 2,
        color: 'beige'
    },
    {
        id: 3,
        color: 'grey'
    },
    {
        id: 4,
        color: 'tabby'
    },
    {
        id: 5,
        color: 'orange'
    },
    {
        id: 6,
        color: 'white'
    }
]