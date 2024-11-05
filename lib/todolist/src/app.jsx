import { style } from 'rw-jsx-css';
import './app.css';
import { fetch, save } from './utils';

const logoStyle = style`
    height: 10vmin;
    color: #006BD6FF;
    user-select: none;
    font-size: 5em;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    pointer-events: none;
`;

export default function App() {
    const todosRef = ref(fetch());
    effect(() => save(todosRef.value));
    function handleKeyDown(e, i) {
        if (e.key === 'Enter' && e.target.value.trim()) {
            createTodoAtIndex(e, i);
        }
        if (e.key === 'Backspace' && !e.target.value) {
            e.preventDefault();
            return removeTodoAtIndex(i);
        }
    }

    async function createTodoAtIndex(e, i) {
        todosRef.value.splice(i + 1, 0, {
            content: '',
            isCompleted: false,
        });
        await nextTick();
        document.forms[0].elements[i + 1].focus();
    }
    function updateTodoAtIndex(e, todo) {
        todo.content = e.target.value;
    }
    async function removeTodoAtIndex(i) {
        if (i === 0 && todosRef.value.length === 1) return;
        todosRef.value.splice(i, 1);
        await nextTick();
        document.forms[0].elements[i - 1].focus();
    }
    function toggleTodoCompleteAtIndex(todo) {
        todo.isCompleted = !todo.isCompleted;
    }
    return () => (
        <div className='app'>
            <div className='header'>
                <h1 class={logoStyle.name}>Rw Todos</h1>
            </div>
            <form className='todo-list'>
                <ul>
                    {todosRef.value.map((todo, i) => (
                        <div key={i} class={['todo', { 'todo-is-completed': todo.isCompleted }]}>
                            <div
                                className={'checkbox'}
                                onClick={() => toggleTodoCompleteAtIndex(todo)}>
                                {todo.isCompleted && <span>&#x2714;</span>}
                            </div>
                            <input
                                type='text'
                                value={todo.content}
                                onblur={() => !todo.content.trim() && todosRef.value.splice(i, 1)}
                                onKeyDown={(e) => handleKeyDown(e, i)}
                                onChange={(e) => updateTodoAtIndex(e, todo)}
                            />
                        </div>
                    ))}
                </ul>
            </form>
        </div>
    );
}
