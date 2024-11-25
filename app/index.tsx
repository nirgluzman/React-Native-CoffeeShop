import { StyleSheet, View, Text, ImageBackground, Pressable } from 'react-native';
import { Link } from 'expo-router';

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('@/assets/images/iced-coffee.png')}
        resizeMode='cover'>
        <Text style={styles.title}>Coffee Shop</Text>

        <Link style={{ marginHorizontal: 'auto' }} href='/menu' asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Our Menu</Text>
          </Pressable>
        </Link>

        <Link style={{ marginHorizontal: 'auto' }} href='/contact' asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
};
export default app;

const styles = StyleSheet.create({
  // React Native implicitly sets all views as flex containers by default.
  container: {
    flex: 1, // distribute available space equally among flex items within a flex container.
    flexDirection: 'column', // control the direction in which the children of a node are laid out (main axis).
  },
  image: {
    flex: 1,
    justifyContent: 'center', // align children of a container in the center of the container's main axis.
    height: '100%',
    resizeMode: 'cover', // scale the image to fill the entire container, preserving aspect ratio.
  },
  title: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 120,
  },
  button: {
    height: 60,
    width: 150,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding: 6,
    marginBottom: 50,
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 4,
  },
});
