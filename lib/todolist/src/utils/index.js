const RW_KEY_TODO = 'TODOLIST';
export function fetch() {
    const array = JSON.parse(localStorage.getItem(RW_KEY_TODO));
    if (!Array.isArray(array))
        return [
            {
                content: 'Pickup dry cleaning',
                isCompleted: true,
            },
            {
                content: 'Get haircut',
                isCompleted: false,
            },
            {
                content: 'Build a todo app in Rw',
                isCompleted: false,
            },
        ];
    return array;
}
export function save(array) {
    localStorage.setItem(RW_KEY_TODO, JSON.stringify(array));
}
