# State of State Management

- What state management solutions have you been using?
    - [Redux Toolkit](https://redux-toolkit.js.org/)
        - Side effects e.g. with [redux-saga](https://redux-saga.js.org/), [redux-loop](https://redux-loop.js.org/)
    - [TanStack Query](https://tanstack.com/query/latest)
        - Or in case of GraphQL: [Apollo](https://www.apollographql.com/)
    - [React Signals](https://github.com/preactjs/signals/tree/main/packages/react), coming from Preact
    - Angular: E.g. [NgRx](https://ngrx.io/), [Angular Signals](https://angular.dev/guide/signals)
    - Keep state in URL
        - E.g. query parameters or hash mark
        - May be limited by maximum URL or request size
    - React: [useState](https://react.dev/reference/react/useState) or [useReducer](https://react.dev/reference/react/useReducer)
        - Pull state up and pass it down via context
            - Put state and dispatch in different contexts?
    - [Zustand](https://github.com/pmndrs/zustand)
    - Form state:
        - [React Hook Form](https://react-hook-form.com/)
        - [Formik](https://formik.org/)
    - [XState](https://xstate.js.org/)
    - Built-in state management of frameworks such as [React-Admin](https://marmelab.com/react-admin/)
    - Build your own :)

- How to synchronize client and server state?
    - Idea: Use CQRS (Command-Query Responsibility Segregation)

- Potential problem in apps developed by multiple teams: Mix of different solutions

- Blog post by Dan Abramov: [You Might Not Need Redux](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)

- Anti-patterns
    - Too much "prop drilling"
	- Not separating between presentational and business components
	- Implicit state machines (distributed among different useEffects)
	- [redux-observable](https://redux-observable.js.org/) (ties Redux and [RxJS](https://rxjs.dev/) together, can get too complex quickly)

- Conclusion:
  - There's no "one size fits all".
  - There are a lot of options and people have their preferences.
  - One consensus is that local state, maybe provided via context, is often enough. For server state, use libraries such as TanStack Query.
