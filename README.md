## Running the React Native Bundler

- To stop the bundler, press **Control + C** in the terminal.
- To restart, run `npm start` in the project directory.
- Scan the QR code on your mobile device to reload the app.

---

## React Any Component File

### Part 1: Importing Libraries

- Import necessary libraries to create a React Native component.

```jsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
```

### Part 2: Creating a Component

- A function that returns **JSX** (similar to HTML), defining what should be displayed on the screen.

```jsx
const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
    </View>
  );
};
```

### Part 3: Styling a Component

- Use `StyleSheet.create()` to define styles for the component.
- Alternatively, styles can be passed directly into elements.

```jsx
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
});
```

### Part 4: Exporting a Component

- Allows the component to be used elsewhere in the project.

```jsx
export default MyComponent;

```

---

## React Native Elements

### Primitive Elements

| Element | Description |
| --- | --- |
| **Text** | Displays text content. All text must be within a `<Text>` component. |
| **View** | A general-purpose container for grouping elements or styling.`<View>` |
| **Image** | Displays an image.`<ImageDetail>` |
| **Button** | Displays a pressable button that provides feedback.`<Button>` |

---

## JSX Rules

1. JSX resembles HTML and allows assembling different elements.
2. Elements can be configured using **props**.
3. JavaScript variables can be referenced inside JSX using curly braces `{}`.

```jsx
const name = "React Native";
return <Text>Welcome to {name}!</Text>;
```

1. Objects cannot be displayed inside JSX directly.
2. JSX elements can be assigned to variables and reused.
3. Multi-line JSX blocks must:
    - Open on the same line as `return`, or
    - Be wrapped in parentheses `()`.

```jsx
return (
  <View>
    <Text>Hello</Text>
    <Text>World!</Text>
  </View>
);
```

---

## FlatList Component

- Converts an array into a list of elements.
- **Required Props:**
    - `data`: The array of data.
    - `renderItem`: Function that transforms each item into an element.
- **Keys for Optimization:**
    - Assign a `key` prop (must be a **unique string**).
    - Use `keyExtractor` for automatic key assignment.
- To **hide the scroll bar**, use `showsHorizontalScrollIndicator={false}`.

```jsx
import { FlatList, Text, View } from 'react-native';

const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];

const renderItem = ({ item }) => (
  <Text>{item.title}</Text>
);

return (
  <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={item => item.id}
  />
);
```

---

## Navigation & Buttons

### Button Types

![image.png](attachment:fa751dbf-7e00-42a9-b846-ee9c94cd684c:image.png)

| Type | Description |
| --- | --- |
| Button | Simple, built-in button component. No closing tag needed. |
| **TouchableOpacity** | Customizable button that can wrap other elements. |

```jsx
import { Button } from 'react-native';

<Button title="Click Me" onPress={() => alert('Button Pressed!')} />;
```

```jsx
import { TouchableOpacity, Text } from 'react-native';

<TouchableOpacity onPress={() => alert('Tapped!')}>
  <Text>Tap Me</Text>
</TouchableOpacity>;
```

### Navigation (React Navigation Stack)

- Used to navigate between different screens in the app.

---

## Props vs. State

1. **Props**: Used to pass data **from parent to child**.

```jsx
const Greeting = (props) => {
  return <Text>Hello, {props.name}!</Text>;
};

<Greeting name="Alice" />;
```

1. **State**: Tracks data that **changes over time** and triggers re-renders.

```jsx
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
    </View>
  );
};
```

### State Rules:

- Never modify state variables directly; always use the setter function.
- State variables can store **numbers, strings, arrays, objects**, etc.
- When a component re-renders, all its children also re-render.
- A **stable state variable** can be passed to a child as **props**.

### Reducers (Community Convention)

- Instead of `{colorToChange: 'red', amount: 15}`
- Use `{type: 'change_red', payload: 15}`

```jsx
import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
};
const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <View>
      <Button
        style={styles.buttonContainer}
        title="Increase"
        onPress={() => dispatch({ type: 'increment' })}
      />
      <Button
        style={styles.buttonContainer}
        title="Decrease"
        onPress={() => dispatch({ type: 'decrement' })}
      />

      <Text style={styles.text}>Current Counter {state}</Text>
    </View>
  );
};
```

---

## Password Input

- Use `secureTextEntry={true}` to hide password characters in `TextInput`.

```jsx
import { TextInput } from 'react-native';

<TextInput secureTextEntry={true} placeholder="Enter password" />;
```

---

## Layout Systems

### **Box Model** (For positioning a single element)

- **Height/Width**: Defines size.
- **Spacing Properties:**
    - `margin`: Sets margin on all sides.
    - `marginVertical`: Margin on top and bottom.
    - `marginHorizontal`: Margin on left and right.
    - `padding`: Sets padding on all sides.
    - `borderWidth`: Defines border thickness.

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxModelExample = () => {
  return (
     <View style={styles.box}>
       <Text>Box Model</Text>
     </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'skyblue',
    padding: 20, // Adds space inside the box
    margin: 20,  // Adds space outside the box
    borderWidth: 5, // Adds a border around the box
    borderColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BoxModelExample;

```

### **Flexbox** (For positioning multiple elements within a parent)

- **Default alignment:** `alignItems: 'stretch'` **(Parent behaviour)**
- **Other alignments:**
    - `alignItems: 'flex-start'` → Align items to the left/top.
    - `alignItems: 'center'` → Center items.
    - `alignItems: 'flex-end'` → Align items to the right/bottom.
- **Flex Direction (Parent behaviour) :**
    - Default: `column` (Stacks children top to bottom)
    - Use `row` for horizontal alignment
- Justify Content (Align Items Vertically in Column / Horizontally in Row) **(Parent behaviour)** :
    - `justifyContent: 'flex-start'` → Items start from the top (or left if `row`).
    - `justifyContent: 'center'` → Items are centered along the main axis.
    - `justifyContent: 'flex-end'` → Items are pushed to the bottom (or right if `row`).
    - `justifyContent: 'space-between'` → Items are spaced evenly, with no gaps at the edges.
    - `justifyContent: 'space-around'` → Items have equal space around them.
    - `justifyContent: 'space-evenly'` → Items have equal spacing **between** and **at the edges**.
- Flex Property - (determines how much space an element takes relative to its siblings) **Child behaviour**
    - `flex: 1` → Takes **equal** space with other `flex: 1` elements.
    - `flex: 2` → Takes **twice** the space of a `flex: 1` element.
    - `flex: 4` → Takes **four times** the space of a `flex: 1` element.
- Align Self —> **(Child Behaviour)**
    - `alignSelf` **overrides** `alignItems` **for a specific child**.
    - Useful when you want a single item to be positioned differently.
- **Align Self Options:**
    - `alignSelf: 'auto'` (default) - Uses the parent’s `alignItems` setting.
    - `alignSelf: 'flex-start'` - Aligns the item to the left/top.
    - `alignSelf: 'center'` -  Centers the item.
    - `alignSelf: 'flex-end'` - Aligns the item to the right/bottom.
    - `alignSelf: 'stretch'` - Stretches the item to fill the container.

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlexExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxOne}><Text>Child 1</Text></View>
      <View style={styles.boxTwo}><Text>Ch*ld* 2</Text></View>
      <View style={styles.boxThree}><Text>Child 3</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',  // Aligns children horizontally or use column to vertically
    justifyContent: 'center', // Centers them horizontally
    alignItems: 'center', // Default alignment for all children
    backgroundColor: '#f8f8f8',
  },
  boxOne: {
    width: 80,
    height: 80,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    //alignSelf: 'center', // Overrides alignItems, moves to center
    // flex: 1, =>  Takes equal space with other flex: 1 elements.
  },
    boxTwo: {
    width: 80,
    height: 80,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    // flex: 2, => Takes twice the space of a flex: 1 element.
    //alignSelf: 'flex-end', // Overrides alignItems, moves to bottom/right
  },
    boxThree: {
    width: 80,
    height: 80,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    // flex: 4, =>  Takes four times the space of a flex: 1 element.
    // alignSelf: 'flex-start', // Overrides alignItems, moves to top/left
  },
});

export default FlexExample;

```

### **Position Property**

The `position` property in React Native determines how an element is placed inside its parent container. The default position is `relative`.

- **Position Values**
    - **relative** (default) - The element follows the normal layout flow.
    - **absolute** - The element is positioned relative to its closest positioned ancestor (or the screen if no ancestor has `position: absolute` or `relative`) (Ignored by sibling. Still obeys some flex box rules set by parent)
    - **Top, Bottom, Left, Right**
        - **Relative Positioning:** If the element’s position is set to `relative` , the `top` , `bottom` , `left` and `right` properties shift the element from its normal position rather than being placed absolutely within its container
    - Absolute Fill Objects
        - An element is positioned absolutely within its parent container, and it is stretched to fill the entire space of its parent.
        - Using the `position: 'absolute'` style combined with `top`, `bottom`, `left`, and `right` set to `0`, effectively making the element fill the entire parent container.
        - **!! React native Shortcut** !! to achieve the same result `...Stylesheet.absoluteFillObject`can be used.

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PositionExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>Relative Box</Text>
      </View>
      <View style={styles.box2}>
        <Text>Absolute Box</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', // Overrides normal layout flow
    top: 50, // Moves 50 units from the top
    left: 50, // Moves 50 units from the left
    bottom: 50, // Moves 50 units from the bottom
    right: 50, // Moves 50 units from the right
    // This will ensure that the child covers fully the container
    //position: 'absolute',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    // Or absolute fill can be achieved by using the hard coded object:
    // ...StyleSheet.absoluteFillObject
  },
});

export default PositionExample;
```