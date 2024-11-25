import {
  StyleSheet,
  Appearance,
  Platform,
  SafeAreaView,
  ScrollView,
  FlatList,
  View,
  Text,
  Image,
  ColorSchemeName,
} from 'react-native';

import { Colors } from '@/constants/Colors';
import { MENU_ITEMS } from '@/constants/MenuItems';
import { MENU_IMAGES } from '@/constants/MenuImages';

export default function MenuScreen() {
  const colorScheme = Appearance.getColorScheme(); // indicates the user preferred color scheme.

  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;

  const styles = createStyles(theme, colorScheme);

  const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

  const separatorComp = () => {
    return <View style={styles.separator} />;
  };

  // const Header = () => {
  //   return <Text style={{ color: theme.text }}>Top of List</Text>;
  // };

  const Footer = () => {
    return <Text style={{ color: theme.text, textAlign: 'center' }}>End of Menu</Text>;
  };

  return (
    <Container>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()} // tells the list to use the ids for the react keys instead of the default key property.
        showsVerticalScrollIndicator={false} // when false, doesn't show a vertical scroll indicator.
        contentContainerStyle={styles.contentContainer} // these styles will be applied to the scroll view content container which wraps all of the child views.
        ItemSeparatorComponent={separatorComp} // rendered in between each item, but not at the top or bottom.
        //ListHeaderComponent={Header}
        ListFooterComponent={Footer}
        // ListFooterComponentStyle={styles.footerComp} // https://www.ifelsething.com/post/header-footer-virtualizedlist/
        ListEmptyComponent={<Text>No items</Text>}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.menuTextRow}>
              <Text style={[styles.menuItemTitle, styles.menuItemText]}>{item.title}</Text>
              <Text style={styles.menuItemText}>{item.description}</Text>
            </View>
            <Image style={styles.menuImage} source={MENU_IMAGES[item.id - 1]} />
          </View>
        )}
      />
    </Container>
  );
}

function createStyles(theme: any, colorScheme: ColorSchemeName) {
  return StyleSheet.create({
    contentContainer: {
      paddingTop: 10,
      paddingBottom: 20,
      paddingHorizontal: 12,
      backgroundColor: theme.background,
    },
    separator: {
      height: 2,
      backgroundColor: colorScheme === 'dark' ? 'papayawhip' : '#000',
      width: '50%',
      maxWidth: 300,
      marginBottom: 10,
      marginHorizontal: 'auto', // to center the item.
    },
    row: {
      flexDirection: 'row',
      width: '100%',
      maxWidth: 600,
      height: 100,
      marginBottom: 10,
      borderStyle: 'solid',
      borderColor: colorScheme === 'dark' ? 'papayawhip' : '#000',
      borderWidth: 1,
      borderRadius: 20,
      overflow: 'hidden',
      marginHorizontal: 'auto',
    },
    menuTextRow: {
      width: '65%',
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 5,
      flexGrow: 1, // how much a flex item should grow relative to its siblings when there's extra space in the flex container.
    },
    menuItemTitle: {
      fontSize: 18,
      textDecorationLine: 'underline',
    },
    menuItemText: {
      color: theme.text,
    },
    menuImage: {
      width: 100,
      height: 100,
    },
  });
}
