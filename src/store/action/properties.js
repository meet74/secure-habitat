export const FETCH_DATA = "FETCH_DATA"
export const STORE_DATA = "STORE_DATA"
export const SET_ALL_DATA = "SET_ALL_DATA"


export const storeDataInState = (props) => {
    return{
        type:FETCH_DATA,
        props
    }
}

