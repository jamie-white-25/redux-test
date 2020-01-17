export const say = (word) =>{
    return{
        type: 'SAY',
        payload: word,
    }
}