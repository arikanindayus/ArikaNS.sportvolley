import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Message,Microphone2} from 'iconsax-react-native';
import FastImage from 'react-native-fast-image';
import { fontType, colors } from '../theme';
import {useNavigation} from '@react-navigation/native';



const truncateTextByWords = (text, maxWords) => {

  const navigation = useNavigation();

  const words = text.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + ' ...';
  }
  return text;
}

const ItemBookmark = ({item, onPress, variant}) => {
    return (
      <TouchableOpacity style={styles.cardItem2} onPress={()=>navigation.navigate('BlogDetail', {blogId: item.id})}>
                <FastImage
            style={styles.cardImage}
            source={{
              uri: item.image,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}>
            <View style={styles.cardContent}>
              <View style={styles.cardCategory}>
                <View style={styles.categoryBadge}>
                  <Text style={styles.categoryLabel}>{item.category}</Text>
                </View>
              </View>
              <View>
                <View style={styles.cardIcon}>
                  <TouchableOpacity onPress={onPress}>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            </FastImage>
        </TouchableOpacity>
    );
  };

  export default ItemBookmark;

const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    gap: 10,
    backgroundColor: colors.darkModeBlack(0.9),
  },
  cardText: {
    fontSize: 12,
    color: colors.grey(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardItem2: {
    backgroundColor: colors.coral(0.8),
    flexDirection: 'row-reverse',
    borderRadius:150,
  },
  cardCategory: {
    color: colors.black(),
    fontSize: 18,
    fontFamily: fontType['Pjs-Bold'],
  },
  cardTitle: {
    fontSize: 12,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.black(),
  },
  cardImage: {
    width: 300,
    height: 200,
    borderRadius: 1,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 1,
    justifyContent: 'space-between',
    paddingRight: 1,
    paddingLeft: 1,
    flex: 1,
    paddingVertical: 1,
  },
});