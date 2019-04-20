export function updateClock(date) {
    return {
        type: 'UPDATE_CLOCK',
        date // new Date()
    }
}