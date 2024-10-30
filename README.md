# rw-jsx

-   [rw-jsx](#rw-jsx)
-   [Preview](#preview)
    -   [rw-jsx](#rw-jsx-1)
    -   [rw-jsx-hash-router](#rw-jsx-hash-router)
    -   [rw-jsx-store](#rw-jsx-store)
    -   [rw-jsx-control](#rw-jsx-control)
-   [Use](#use)
    -   [Directive](#directive)
    -   [Fragment](#fragment)
    -   [Portal](#portal)
    -   [Router](#router)
    -   [Store](#store)
    -   [Style](#style)
    -   [For](#for)
    -   [Index](#index)
    -   [Show](#show)
    -   [Switch Match](#switch-match)

# Preview

## rw-jsx

`[Fragment, Portal]`

`[reactive, readonly, shallowReactive, shallowReadonly, isReactive, isReadonly, isShallow, isProxy, toRaw]`

`[ref, shallowRef, isRef, isShallowRef, unref, toRefs, toRef]`

`[computed]`

`[effect]`

`[getContext]`

`[watch, watchEffect, watchPostEffect, watchSyncEffect, debouncedWatch, throttledWatch]`

`[nextTick]`

`[style]`

`[provide, inject]`

`[onMounted, onBeforeUpdate, onBeforeMount, onUpdated, onBeforeUnmount,  onUnmounted ];`

`[directive]`

## rw-jsx-hash-router

`[createRouter, useRoute, useRouter, beforeEach, beforeResolve, afterEach, View, Link]`

## rw-jsx-store

`[defineStore, getStoreById, listStores]`

## rw-jsx-control

`[For, Index, Show, Switch]`

# Use

## Directive

```jsx
directive(String, (el, hooks) => {
    hooks.mount(() => {
        // ...mount
    });
    hooks.update(() => {
        // ...update
    });
    return () => {
        // ...cleanup
    };
});
<div rw-focus={...}></div>;
<div rw-focus:xxx={...}></div>;
<div rw-focus:xxx.xxx.xxx...={...}></div>;
<div rw-focus.xxx.xxx...={...}></div>;
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
const router = createRouter(routes);
<router.Link to={String || Object}>···</router.Link>
<router.View />
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
    :hover {
        color: blue;
    }
`
const ··· = style`
    ::before {
        content: 'before';
        ···
    }
`
···.name
···.styles
<h1 class={···.name}>Rw App</h1>
```

## For

```jsx
const listRef = ref([]);

<For {...listRef}>
    {/** main */}
    {(item) => <li key={item}>{item}</li>}
    {/** fallback */}
    <p>fallback</p>
</For>
<For {...listRef.value}>
    {/** main */}
    {(item) => <li key={item}>{item}</li>}
    {/** fallback */}
    <p>fallback</p>
</For>
<For each={listRef.value}>
    {/** main */}
    {(item) => <li key={item}>{item}</li>}
    {/** fallback */}
    <p>fallback</p>
</For>

```

## Index

```jsx
const listRef = ref([]);
<Index each={listRef.value} fallback={<h1>No items</h1>}>
    {(item, index) => (
        <h1>
            Item Index: {index} - <mark>{item}</mark>
        </h1>
    )}
</Index>;
<Index each={listRef.value} fallback={() => <h1>No items</h1>}>
    {(item, index) => (
        <h1>
            Item Index: {index} - <mark>{item}</mark>
        </h1>
    )}
</Index>;
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
