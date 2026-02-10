# react-course

react-course

# learnings

useRef

- I want to store a value with no direct impact to the UI

useState
- I want to store a value with direct impact to the UI
- state update is scheduled, not instant
- state does not re-initialize on re-render, just on initial mount

useEffect
- executes after the component function is done executing
- state or context values need to be added as dependencies
- dependency array cases: https://react.dev/reference/react/useEffect#examples-dependencies
- in JS, functions are objects
- in React, functions are re-created on each component function execution(
  re-render)
    - this makes so that when you add a function to the useEffect deps, it will
      be seen as changed on each re-render
- cleanup function runs before:
    - useEffect is run again OR
    - component gets dismounted ( removed from the DOM )


useCallback
- I want to store the function definition in memory and reuse it when the
  component function executes
- same logic with deps as with useEffect

memo
- apply to component function
- if props are unchanged, the parent does not trigger child re-render


useMemo
- caches function results between re-renders

Other important stuff

- a parent re-render usually causes child re-render. Children are “re-evaluated
  by default” because React assumes change unless proven otherwise.
- a child re-render DOES NOT cause the parent to re-render.