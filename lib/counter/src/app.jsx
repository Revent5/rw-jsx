import { ref, style } from 'rw-jsx';
import viteLogo from '/vite.svg';

export function App() {
    const countRef = ref(0);
    return () => (
        <>
            <div class={logoContainer.name}>
                <a href='https://vitejs.dev' target='_blank'>
                    <img src={viteLogo} class={[logo.name]} alt='Vite logo' />
                </a>
                <a href='https://www.npmjs.com/package/rw-jsx' target='_blank'>
                    <h1 class={[logo.name, rw.name]}>Rw</h1>
                </a>
            </div>
            <h1>Vite + Rw</h1>
            <h3>
                <a
                    class={vitePlugin.name}
                    href='https://www.npmjs.com/package/vite-plugins-rw-jsx'
                    target='_blank'>
                    vite-plugins-rw-jsx
                </a>
            </h3>
            <div class={card.name}>
                <button onClick={() => countRef.value++}>count is {countRef.value}</button>
                <p>
                    Edit <code>src/app.jsx</code> and save to test HMR
                </p>
            </div>
            <p class={readTheDocs.name}>Click on the Vite and Rw logos to learn more</p>
        </>
    );
}
const vitePlugin = style`
    color: #888;
    transition: .2s;
    font-weight: bold;
    text-decoration: underline;
    :hover{
        color: #FFFFFFFF;
        filter: drop-shadow(0 0 .5em #FFFFFFAA);
        background: #14141449;
        padding: .8em;
        border-radius: .8em;
    }
`;
const logoContainer = style`
    display: flex;
    align-items: center;
    justify-content: center;
`;
const logo = style`
    height: 6em;
    padding: 1.5em;
    transition: .2s;
    :hover{
        filter: drop-shadow(0 0 2em #646cffaa);
    }
`;
const rw = style`
    height: 1em;
    margin: 0;
    padding: 0;
    font-family: 'Times New Roman', Times, serif;
    font-weight: bolder;
    text-decoration-line: underline;
    text-decoration-color: #ddd;
    user-select: none;
    font-style: italic;
    :hover{
        filter: drop-shadow(0 0 .5em #ffffff);
    }
    color: #ddd;
`;
const card = style`
    padding: 2em;
`;

const readTheDocs = style`
    color: #888;
`;
