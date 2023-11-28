import {StyleSheet, Text, View, ScrollView, FlatList, Animated} from 'react-native';
import React, {useRef} from 'react';
import {BlogList} from '../../../data';
import {ItemSmall} from '../../components'; 
import {SearchNormal1, Microphone2} from 'iconsax-react-native';
import { fontType, colors } from '../../theme';

const data = [
  {id: 1, label: 'passing atas'},
  {id: 2, label: 'passing bawah'},
  {id: 3, label: 'smash'},
  {id: 4, label: 'service'},
  {id: 5, label: 'attacking'},
  {id: 6, label: 'blocking'},
  {id: 7, label: 'digging'},
];

const ItemRecent = ({item}) => {
  return (
    <View style={recent.button}>
      <Text style={recent.label}>{item.label}</Text>
    </View>
  );
};
const FlatListRecent = () => {
  const renderItem = ({item}) => {
    return <ItemRecent item={item} />;
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 10}} />}
      contentContainerStyle={{paddingHorizontal: 24, paddingVertical: 10}}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};


const Discover = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const recentBlog = BlogList.slice();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.bar}>
          <SearchNormal1 size={18} color={colors.black()} variant="Linear" />
          <Text style={styles.placeholder}>Search</Text>
          <Microphone2 size={20} color={colors.black()} variant="Bulk" />
        </View>
      </View>
      <View>
        <Text style={recent.text}>Volley</Text>
        <FlatListRecent />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.listCard}>
          {recentBlog.map((item, index) => (
            <ItemSmall item={item} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};


export default Discover;
const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 20,
    paddingVertical: 18,
    gap: 8,
    backgroundColor: colors.seashell(),
  },
  container: {
    flex: 1,
    backgroundColor: colors.seashell(),
  },
header: {
    paddingHorizontal: 10,
    gap: 30,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  bar: {
    flexDirection: 'row',
    padding: 10,
    gap: 120,
    alignItems: 'center',
    backgroundColor: colors.grey(0.3),
    borderRadius: 1,
    flex: 1,
  },
  placeholder: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.black(),
    lineHeight: 14,
  },
  
});
const recent = StyleSheet.create({
  button: {
    paddingHorizontal: 9,
    paddingVertical: 6,
    borderRadius: 15,
    borderColor: colors.grey(0.15),
    borderWidth: 2,
    backgroundColor: colors.black(0.7),
  },
  label: {
    fontSize: 15,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.white(),
  },
  text: {
    fontSize: 15,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    paddingVertical: 4,
    paddingHorizontal: 20,
  },
  
});