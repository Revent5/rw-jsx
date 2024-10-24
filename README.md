# rw-jsx

[toc]

## Preview

```js
[Fragment, Portal]
[ref, computed, effect, watch, reactive, nextTick];
[hash => router, useRoute, beforeEach, beforeResolve, afterEach, View, Link];
[store => defineStore, getStoreById, listStores];
[style];
[provide - inject];
[
	onMounted, 
	onBeforeUpdate, 
	onBeforeMount, 
	onUpdated, 
	onBeforeUnmount,    
	onUnmounted
];
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
