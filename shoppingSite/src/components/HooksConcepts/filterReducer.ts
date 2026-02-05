export const filterReducer=(state:any, action:any)=>{
    switch(action.type){
        case 'price':
            return {
                ...state,
                price:action.payload
            }
        case 'discount':
            return{
                ...state,
                discount:action.payload
            }
        case 'rating':
            return{
                ...state,
                rating:action.payload
            }
        default:
            return state
    }
}