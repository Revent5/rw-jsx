# rw-jsx

[toc]

## Preview

```js
[ref, computed, effect, watch, reactive, nextTick];
[hash => router, useRoute, beforeEach, beforeResolve, afterEach, View, Link];
[store];
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
