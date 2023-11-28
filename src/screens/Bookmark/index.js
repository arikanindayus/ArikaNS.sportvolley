import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Add} from 'iconsax-react-native';
import {BlogList, Blocking} from '../../../data';
import { ItemBookmark, ItemSmall, ListHorizontal } from '../../components';
import { fontType, colors } from '../../theme';

const Bookmark = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>SHOP</Text>
        <Add color={colors.black()} variant="Bold" size={30} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingHorizontal:24, gap:10, paddingVertical:10}}>
        {Blocking.map((item, index) => (
          <ItemBookmark item={item} key={index} />
        ))}

        </View>
      </ScrollView>
    </View>
  );
};


export default Bookmark;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.seashell(0.9),
  },
  header: {
    padding: 20,
    gap: 80,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontSize: 30,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
    letterSpacing: 3,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },

 
});

