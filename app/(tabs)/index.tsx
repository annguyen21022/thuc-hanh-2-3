import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.square, { backgroundColor: 'red' }]}>
        <Text style={styles.text}>Square 1</Text>
      </View>

      <View style={[styles.square, { backgroundColor: 'green' }]}>
        <Text style={styles.text}>Square 2</Text>
      </View>

      <View style={[styles.square, { backgroundColor: 'blue' }]}>
        <Text style={styles.text}>Square 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});