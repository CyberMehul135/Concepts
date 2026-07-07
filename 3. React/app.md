# Mock Interview Questions

## ( 1 ) How many 'Hooks' are there

- React does not have a fixed number of hooks
- React provides several built-in hooks, and developer can also create custom hooks.

### > Most common built-in Hooks :

#### Basic Hooks :

1. useState
2. useEffect
3. useContext

#### Additional Hooks :

1. useReducer
2. useCallback
3. useMemo
4. useRef
5. useImperativeHandle
6. useLayoutEffect
7. useDebugValue

#### React 18+

1. useId
2. useTransition
3. useDefferedValue
4. useSyncExternalStore
5. useInsertionEffect

### > Explanation :

- useState manages state
- useEffect handles side effects

### > Followup Questions :

### **Q - 1 : What is hook?**

- A hook is a function <br>that allows functional components to use React features like state and lifecycle methods.

### **Q - 2 : Can we create our own Hooks?**

- Yes, we can create custom hooks to reuse logic across components.

### **Q - 3 : Why were Hooks introduced?**

- Hooks were introduce to use state and lifecycle features in functional components without writing class components.

## ( 2 ) useEffect

### 1 ) Explain the useEffect hook. What arguments does it take?

- useEffect?
  - useEffect is a React Hook, used to perform side effects in a component.
  - Examples of side effects :<br>
    - API Calls
    - Event listeners
    - Timers ( setTimeout, setInterval )
    - Updating document title
    - Accessing browser APIs
  - Before hooks, these tasks were usually done in lifecycle methods like componentDidMount,  
    componentDidUpdate and componentWillUnmount

- What argument does useEffect take?<br>
  A. Callback Function
  - This function contains the side-effect code.

  ```
    useEffect(() => {
        console.log("Runs on every render");
    });
  ```
