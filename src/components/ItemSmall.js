import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Receipt21, Clock, Message2} from 'iconsax-react-native';
import React from 'react';
import { fontType, colors } from '../theme';
import {useNavigation} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ItemSmall = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.cardItem}onPress={() => navigation.navigate('BlogDetail', {blogId: item.id})}>
      <FastImage
        style={styles.cardImage}
        source={{
          uri: item.image,
          headers: {Authorization: 'someAuthToken'},
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.cardContent}>
        <View
          style={{
            flexDirection: 'row',
            gap:30
          }}>
          <View style={{gap: 3, flex:1}}>
            <Text style={styles.cardCategory}>{item.category}</Text>
            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>
        </View>
          <Text style={styles.cardText}>{item.createdAt}</Text>
          <Message2
            size={10}
            variant="Linear"
            color={colors.grey(0.6)}
          />
          <Text style={styles.cardText}>{item.totalComments}</Text>
      </View>
      </TouchableOpacity>

  );
};

export default ItemSmall;
const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    gap: 10,
    backgroundColor: colors.darkModeBlack(0.9),
  },
  cardItem: {
    backgroundColor: colors.whitesmoke(),
    flexDirection: 'row-reverse',
    borderRadius: 1,
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
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.6),
  },
  cardImage: {
    width: 150,
    height: 210,
    borderRadius: 9,
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