export const increment = (nr) => {
    return {
        type: 'INCREMENTTT', 
        payload: nr
    }
}
export const decrement = () => {
    return {
        type: 'DECREMENT'

    }
}