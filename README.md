# rw-jsx

- [rw-jsx](#rw-jsx)
- [Preview](#preview)
  - [rw-jsx](#rw-jsx-1)
  - [rw-jsx-hash-router](#rw-jsx-hash-router)
  - [rw-jsx-store](#rw-jsx-store)
  - [rw-jsx-control](#rw-jsx-control)
  - [rw-jsx-css](#rw-jsx-css)
- [Use](#use)
  - [Directive](#directive)
  - [Fragment](#fragment)
  - [Portal](#portal)
  - [Router](#router)
  - [Store](#store)
  - [Style](#style)
  - [For](#for)
  - [Show](#show)
  - [Switch Match](#switch-match)

# Preview

## rw-jsx

`[Fragment, Portal]`

`[reactive, readonly, shallowReactive, shallowReadonly, isReactive, isReadonly, isShallow, isProxy, toRaw]`

`[ref, shallowRef, isRef, isShallowRef, unref, toRefs, toRef]`

`[computed]`

`[effect]`

`[context, emit, props, slots, children, getContext]`

`[watch, watchEffect, watchPostEffect, watchSyncEffect, debouncedWatch, throttledWatch]`

`[nextTick]`

`[provide, inject]`

`[onMounted, onBeforeUpdate, onBeforeMount, onUpdated, onBeforeUnmount,  onUnmounted ];`

`[directive]`

## rw-jsx-hash-router

`[createHashRouter, createHistoryRouter, useRoute, useRouter, beforeEach, beforeResolve, afterEach, View, Link]`

## rw-jsx-store

`[defineStore, getStoreById, listStores]`

## rw-jsx-control

`[For, Show, Switch]`

## rw-jsx-css

`[style]`

# Use

## Directive

```jsx
directive(String, (el, binding, hooks) => {
    // mount
    // ...code

    hooks.mount((binding) => {
        // mount
        // ...code
    });
    hooks.update((binding) => {
        // update
        // ...code
    });
    return () => {
        // cleanup
        // ...code
    };
});
<div rw-focus={...}></div>;
<div rw-focus:xxx={...}></div>;
<div rw-focus:xxx.xxx.xxx...={...}></div>;
<div rw-focus.xxx.xxx...={...}></div>;
```

```jsx
import { context, emit, children, props, slots, getContext } from 'rw-jsx'
export default function App(){
    context()
    emit('test', "Test Emit")
    props()
    slots()
    children()
    getContext.ctx
    getContext.emit
    getContext.props
    getContext.slots
    getContext.children
    return () => <div>Rw App</div>
}

```



## Fragment

```jsx
<>···</>
<Fragment>···</Fragment>
```

## Portal

```jsx
<Portal target={String || Node}>···</Portal>
```

## Router

```jsx
const routes = [
    {
        path: '/',
        component: ···
    },
    {
        name: 'About',
        path: '/about',
        component: ···,
        meta: {
            ···
        }
    },
    {
        path: '/redirect-about',
        redirect: '/about'
    },
    {
        path: '/redirect-user',
        redirect: (route) => console.log(route)
    },
    {
        path: '/user',
        component: ···,
        children: [
            {
                path: ':id',
                component: ···
            },
            {
                path: 'setting',
                component: ···
            },
        ]
    }
]
const router = createHashRouter(routes);
// or
const router = createHistoryRouter(routes);
<router.Link to={String || Object}>···</router.Link>
<router.View>
    {/** Not 404 */}
    <div>Not 404</div>
</router.View>
```

## Store

```js
const ··· = defineStore(() => {})
const ··· = defineStore(String, () => {})
```

## Style

```jsx
const ··· = style`
    color: red;
    bacground: ${props => props.bacground || 'green'}
    :hover {
        color: ${props => props.color || '#000000'};
    }
`
const ··· = style`
    ::before {
        content: 'before';
    }
`
···.name
···.value.xxx
....clear()
<h1 class={···.name}>Rw App</h1>
```

## For

```jsx
const listRef = ref([]);
<For each={listRef.value} fallback={<p>fallback</p>}>
    {(item) => <li key={item}>{item}</li>}
<For>

```

## Show

```jsx
<Show when={countRef.value % 2 === 0} fallback={<h3>false fallback</h3>}>
    {() => <h2>true Content fn h2</h2>}
    <h2>true Content h2</h2>
    <p>true Content p</p>
</Show>
```

## Switch Match

```jsx
<Switch fallback={<h3>false fallback</h3>}>
    <Match when={countRef.value > 0 && countRef.value < 5}>
        <h2>Match Content 1</h2>
        <h2>Match Content h2</h2>
        {() => <h2>Match Content fn h2</h2>}
    </Match>
    <Match when={countRef.value > 5 && countRef.value < 10}>
        <h2>Match Content 2</h2>
    </Match>
    <Match when={countRef.value > 10 && countRef.value < 15}>
        <h2>Match Content 3</h2>
    </Match>
</Switch>
```
