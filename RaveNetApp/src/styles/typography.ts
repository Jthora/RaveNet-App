// typography.ts

export const typography = {
  heading1: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  heading2: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  heading3: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
  },
  caption: {
    fontSize: 14,
  },
};

// In this typography.ts file:

// We export an object named typography containing different typography styles.
// Each style is defined with properties like fontSize and fontWeight.
// We have predefined styles for headings (heading1, heading2, heading3), body text, and captions.
// These styles can be imported and applied to text components throughout the app to maintain consistent typography. For example:
// tsx
// Copy code
// import { Text, StyleSheet } from 'react-native';
// import { typography } from './styles/typography';

// const AppText: React.FC<{ style?: object }> = ({ children, style }) => {
//   return <Text style={[styles.text, style]}>{children}</Text>;
// };

// const styles = StyleSheet.create({
//   text: {
//     ...typography.body,
//     color: 'black', // Example color
//   },
// });

// export default AppText;
// By utilizing a typography.ts file like this, you can easily manage and apply consistent typography styles across your RaveNet App. Adjust the styles in typography.ts according to your app's design requirements.
