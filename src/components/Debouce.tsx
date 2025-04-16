
export default function Debounce<T>(callback: (value: T) => void, delay: number) {
    let timer: NodeJS.Timeout | null = null;
    return (value: T) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            callback(value);
        }, delay)
    }
}