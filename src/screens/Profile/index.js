import {ScrollView, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Setting2, DirectInbox, Reserve, Whatsapp} from 'iconsax-react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {ProfileData, BlogList, Blocking} from '../../../data';
import {ItemSmall} from '../../components';
import { fontType, colors } from '../../theme';

const formatNumber = number => {
  if (number >= 1000000000) {
    return (number / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
  }
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (number >= 1000) {
    return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return number.toString();
};

const data = Blocking.slice(5);
const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Reserve color={colors.black()} variant="Linear" size={24} />
        <Text style ={styles.tag2}>PROFILE</Text>
        <Setting2 color={colors.black()} variant="Linear" size={24} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 20,
        }}>
        <View style={styles.item}>
        <View style={{gap: 50, alignItems: 'center'}}>
          <FastImage
            style={profile.pic}
            source={{
              uri: ProfileData.profilePict,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
            <View style={{gap: 5, alignItems: 'center'}}>
            <Text style={profile.name}>{ProfileData.name}</Text>
            <Text style={profile.info}>

            </Text>
          </View>

          <View style={{flexDirection: 'column', gap:10}}>
            <View style={{alignItems:'stretch', gap:10 }}>
            <Whatsapp size={40} color={colors.chartreuse(1)} variant="Bold"/>
            <View style={{alignItems:'flex-start', gap:1 }}>
            <Text style={profile.tag}>{ProfileData.hp} </Text>
            </View>
            </View>

            <View style={{alignItems:'stretch', gap:1 }}>
            <DirectInbox size={40} color={colors.red()} variant="Bold"/>
            <View style={{alignItems:'flex-start', gap:10 }}>
            <Text style={profile.tag}>{ProfileData.berat} </Text>
            </View>
            </View>
            </View>

        </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:colors.crimson(0.1),
  },
  header: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'space-between',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 1,
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  title2: {
    justifyContent: 'space-between',
  },
  tag2: {
    fontSize: 20,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
});
const profile = StyleSheet.create({
  pic: {width: 200, height: 200, borderRadius: 1},
  name: {
    color: colors.black(),
    fontSize: 30,
    fontFamily: fontType['Pjs-Bold'],
    textTransform:'capitalize'
  },
  tag: {
    fontSize: 18,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.black(),
  },
  

});
