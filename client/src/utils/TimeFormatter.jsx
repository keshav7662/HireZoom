export const getRelativeTime = (timestamp) => {
    const currentTime = new Date();
    const inputTime = new Date(timestamp);
    const difference = currentTime - inputTime;
    const seconds = Math.floor(difference / 1000);

    if (seconds < 60) {
        return `${seconds} s`;
    } else if (seconds < 3600) {
        const minutes = Math.floor(seconds / 60);
        return `${minutes} m`;
    } else if (seconds < 86400) {
        const hours = Math.floor(seconds / 3600);
        return `${hours} hr`;
    } else {
        const days = Math.floor(seconds / 86400);
        if (days < 7) {
            return `${days} d`;
        } else {
            const weeks = Math.floor(days / 7);
            return `${weeks} w`;
        }
    }
}
