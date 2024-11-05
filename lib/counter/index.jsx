import { style } from 'rw-jsx-css';
import { createNode } from 'rw-jsx';
import './index.css';
import { App } from './src/App';

const appStyle = style`
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
`;
const app = createNode(<div className={appStyle.name} />);

render(<App />, app);
