export const TYPES = {
    bunglow:"bunglow",
    house:"house",
    apartment:"apartment"
}

export const dummyData = [
    {
        image:require("../../assets/images/demo-1.jpg"),
        address:"411, Victoria s",
        city:"Kitchener, N2E",
        price:"450,000",
        rating:4.8,
        type: TYPES.bunglow
    },
    {
        image:require("../../assets/images/demo-2.jpg"),
        address:"45, Wellington s",
        city:"Kitchener, N2E",
        price:"230,000",
        rating:4.3,
        type: TYPES.apartment
    },

    {
        image:require("../../assets/images/demo-3.jpg"),
        address:"22, Huron road",
        city:"Kitchener, N2R",
        price:"550,000",
        rating:4.4,
        type: TYPES.bunglow
    },

]