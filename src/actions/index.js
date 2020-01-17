export const add = (num) =>{
    return {
        type: 'ADD',
        payload: num
    }
}
export const take = (num) =>{
    return {
        type: 'TAKE',
        payload: num
    }
}