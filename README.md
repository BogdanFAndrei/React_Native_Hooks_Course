# React Native Tutorial Notes

This repository contains examples and notes from a React Native course from Udemy covering fundamental concepts and navigation.

## Course Progress Notes

### Section Progress
- [x] Section 1-4: Completed
  - Basic Component Structure
  - Navigation Setup
  - List Building
  - Button & TouchableOpacity Components

### Latest Changes (Date: Current)
- Implemented basic navigation between screens
- Created HomeScreen with navigation buttons
- Built a list demo using FlatList
- Added comprehensive documentation

### Next Topics
- [ ] Section 5: Building Reusable Components
- [ ] Section 6: State Management
- [ ] Section 7: How to Handle Screen Layout
- [ ] Section 8: Restaurant Search App
- [ ] Section 9: Using Outside API's

## Environment Management

### Starting and Stopping the Development Environment

```bash
# To stop the React Native bundler
Control + C in terminal

# To restart the development server
npm start
# Then scan the QR code on your mobile device
```

## React Component Structure

### 1. Basic Component Structure
A React Native component consists of four main parts:

1. **Import Libraries**
   ```javascript
   import React from "react";
   import { Text, StyleSheet, View } from "react-native";
   ```

2. **Create Component**
   ```javascript
   const MyComponent = () => {
     return <Text>Some JSX content</Text>;
   };
   ```

3. **Create StyleSheet**
   ```javascript
   const styles = StyleSheet.create({
     text: {
       fontSize: 30
     }
   });
   ```

4. **Export Component**
   ```javascript
   export default MyComponent;
   ```

### 2. Primitive Elements
- **Text**: Displays text content (required for any text display)
- **View**: Container for grouping elements (similar to div)
- **Image**: Displays images
- **Button**: Creates a pressable button with built-in feedback

## JSX Rules and Best Practices

1. JSX elements can be nested like HTML
2. Configure elements using 'props'
3. Reference JavaScript variables using curly braces: `{variableName}`
4. Cannot display JavaScript objects directly in JSX
5. Can assign JSX to variables and display them
6. Multi-line JSX must either:
   - Start on the same line as return statement, OR
   - Be wrapped in parentheses

## List Building with FlatList

### FlatList Component
- Efficiently renders scrollable lists
- Required props:
  - `data`: Array of data to render
  - `renderItem`: Function to render each item

```javascript
<FlatList 
    data={arrayOfData}
    renderItem={({item}) => <Text>{item.name}</Text>}
    keyExtractor={(item) => item.id}
    showsHorizontalScrollIndicator={false}
/>
```

### Key Properties
Two ways to handle keys:
1. Add key property directly to data
2. Use `keyExtractor` prop (preferred method)

## Navigation

### Navigation Setup
- Uses 'react-navigation' library
- Configured in App.js using StackNavigator

### Navigation Components

1. **Button**
   ```javascript
   <Button 
     title="Go to Components Demo"
     onPress={() => navigation.navigate('Components')}
   />
   ```

2. **TouchableOpacity**
   ```javascript
   <TouchableOpacity onPress={() => navigation.navigate('List')}>
     <Text>Go to List Demo</Text>
   </TouchableOpacity>
   ```

Key differences:
- Button: Simple, pre-styled component
- TouchableOpacity: More customizable, can wrap any elements

## Project Structure
```
src/
  ├── screens/
  │   ├── HomeScreen.js
  │   ├── ComponentsScreen.js
  │   └── ListScreen.js
  └── components/
App.js
```

## Navigation Flow
- App starts at the Home screen (configured in App.js)
- Navigation between screens using the `navigation.navigate()` method
- Automatic back button provided by React Navigation

## Styling
- Uses StyleSheet.create() for style validation
- Supports flexbox for layout
- Margins and padding follow standard CSS-like properties
- Styles can be applied directly or through StyleSheet objects 