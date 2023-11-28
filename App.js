// import React from 'react';
// import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground, FlatList} from 'react-native';
// import {Element3, Receipt21, Clock, Message, Send2, Add, InfoCircle, Messenger, CardTick} from 'iconsax-react-native';
// import { fontType, colors } from './src/theme';

// import React, {useState} from 'react';
// import {ScrollView, StyleSheet, Text, View, Image, ImageBackground,FlatList, TouchableOpacity} from 'react-native';
// import {Element3, Receipt21, Clock, Message, Send2, Add, InfoCircle, Messenger, CardTick} from 'iconsax-react-native';
// import {BlogList, CategoryList} from './data';
// import { ListHorizontal, ItemSmall } from './src/components';
// import { fontType, colors } from './src/theme';

// import * as React from 'react';
// import {Discover} from './src/screens';
// export default function App() {
//   return <Discover />;
// }

// import * as React from 'react';
// import {Bookmark} from './src/screens';
// export default function App() {
//   return <Bookmark />;
// }

// import * as React from 'react';
// import {Profile} from './src/screens';
// export default function App() {
//   return <Profile />;
// }

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/navigation/Router';
export default function App() {
  return (
    <NavigationContainer>
     <Router/>
    </NavigationContainer>
  );
}



// const ItemCategory = ({item, onPress, color}) => {
//   return (
//     <TouchableOpacity onPress={onPress}>
//       <View style={category.item}>
//         <Text style={{...category.title, color}}>{item.categoryName}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };
// const FlatListCategory = () => {
//   const [selected, setSelected] = useState(1);
//   const renderItem = ({item}) => {
//     const color = item.id === selected ? colors.blue() : colors.black();
//     return (
//       <ItemCategory
//         item={item}
//         onPress={() => setSelected(item.id)}
//         color={color}
//       />
//     );
//   };
//   return (
//     <FlatList
//       data={CategoryList}
//       keyExtractor={item => item.id}
//       renderItem={item => renderItem({...item})}
//       ItemSeparatorComponent={() => <View style={{width: 10}} />}
//       contentContainerStyle={{paddingHorizontal: 24}}
//       horizontal
//       showsHorizontalScrollIndicator={false}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.darkModeBlack(0.9),
//   },
//   header: {
//     paddingHorizontal: 3,
//     justifyContent: 'space-between',
//     flexDirection: 'column',
//     alignItems: 'center',
//     height:50,
//     elevation: 8,
//     paddingTop:6,
//     paddingBottom:9

//   },
//   title: {
//     fontSize: 25,
//     fontFamily: fontType['Pjs-ExtraBold'],
//     color: colors.white(),
//   },
//   listCategory: {
//     paddingVertical: 5,
//   },
//   listBlog: {
//     paddingVertical: 12,
//     gap: 1,
//   },
// });

// const category = StyleSheet.create({
//   item: {
//     paddingHorizontal: 20,
//     paddingVertical: 12,
//     borderRadius: 2,
//     alignItems: 'center',
//     backgroundColor: colors.peachpuff(0.9),
//     marginHorizontal:7
//   },
//   title: {
//     fontFamily: fontType['Pjs-SemiBold'],
//     fontSize: 14,
//     lineHeight: 18,
//     color: colors.black(),
//   },
// });

// const category1 = StyleSheet.create({
//   item: {
//     paddingHorizontal: 10,
//     paddingVertical: 4,
//     borderRadius: 15,
//     alignItems: 'center',
//     backgroundColor: colors.peachpuff(0.9),
//     marginHorizontal:6
//   },
//   title: {
//     fontFamily: fontType['Pjs-SemiBold'],
//     fontSize: 14,
//     lineHeight: 18,
//     color: colors.black(),
//   },
// });

// const itemHorizontal = StyleSheet.create({
//   cardItem: {
//     width: 200,
//   },
//   cardItem1: {
//     width: 100,
//     marginVertical: 1,
//   },
  
//   cardImage: {
//     width: '100%',
//     height: 200,
//     borderRadius: 5,
//   },
//   cardImage1: {
//     width: '100%',
//     height: 100,
//     borderRadius: 5,
//   },
//   cardContent: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//   },
//   cardInfo: {
//     justifyContent: 'flex-end',
//     height: '100%',
//     gap: 5,
//     maxWidth: '80%',
//   },
//   cardTitle: {
//     fontFamily: fontType['Pjs-Bold'],
//     fontSize: 19,
//     color: colors.black(),
//   },
//   cardText: {
//     fontSize: 10,
//     color: colors.black(),
//     fontFamily: fontType['Pjs-Medium'],
//   },
  
//   cardIcon: {
//     backgroundColor: colors.coral(0.9),
//     padding: 5,
//     borderColor: colors.white(),
//     borderWidth: 0.5,
//     borderRadius: 5,
//   },
// });

// const itemVertical = StyleSheet.create({
//   listCard: {
//     paddingHorizontal: 10,
//     paddingVertical: 20,
//     gap: 10,
//     backgroundColor: colors.darkModeBlack(0.9),
//   },
//   cardText: {
//     fontSize: 12,
//     color: colors.grey(),
//     fontFamily: fontType['Pjs-Medium'],
//   },
//   cardItem2: {
//     backgroundColor: colors.whitesmoke(),
//     flexDirection: 'row-reverse',
//     borderRadius: 1,
//   },
//   cardCategory: {
//     color: colors.black(),
//     fontSize: 18,
//     fontFamily: fontType['Pjs-Bold'],
//   },
//   cardTitle: {
//     fontSize: 12,
//     fontFamily: fontType['Pjs-Medium'],
//     color: colors.black(),
//   },
//   cardImage: {
//     width: 150,
//     height: 210,
//     borderRadius: 9,
//     resizeMode: 'cover',
//   },
//   cardInfo: {
//     flexDirection: 'row',
//     gap: 5,
//     alignItems: 'center',
//   },
//   cardContent: {
//     gap: 1,
//     justifyContent: 'space-between',
//     paddingRight: 1,
//     paddingLeft: 1,
//     flex: 1,
//     paddingVertical: 1,
//   },
// });


// AWAL
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Welcome Sport Volley.</Text>  
//       </View>


//       <View style={styles.listCategory}>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//         <View style={{...category.item, marginLeft: 5}}>
//           <Text style={{...category.title, color: colors.black()}}>
//             Latest
//             </Text>
//           </View>
//         <View style={{...category.item, marginLeft: 5}}>
//           <Text style={{...category.title, color: colors.black()}}>
//             Passing Atas
//             </Text>
//           </View>

//           <View style={{...category.item, marginLeft: 5}}>
//           <Text style={{...category.title, color: colors.black()}}>
//             Passing Bawah
//             </Text>
//           </View>

//           <View style={category.item}>
//           <Text style={{...category.title, color: colors.black()}}>
//             Smash
//             </Text>
//           </View>
//           <View style={category.item}>
//           <Text style={{...category.title, color: colors.black()}}>
//             Service 
//             </Text>
//           </View>
//           <View style={category.item}>
//           <Text style={{...category.title, color: colors.black()}}>
//             Attacking 
//             </Text>
//           </View>
//           <View style={category.item}>
//           <Text style={{...category.title, color: colors.black()}}>
//             Blocking 
//             </Text>
//           </View>
//           <View style={category.item}>
//           <Text style={{...category.title, color: colors.black()}}>
//             Digging 
//             </Text>
//           </View>
//         </ScrollView>
//       </View>
//       <ListBlog />
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>Welcome Sport Volley.</Text>
//       </View>
//       <View style={styles.listCategory}>
//         <FlatListCategory />
//       </View>
//       <ListBlog />
//     </View>
//   );
// }
// GAMBAR AWAL
// const ListBlog = () => {
//   return (
    
// {/* <ScrollView>
//   <View style={styles.listBlog}>
//     <ScrollView
//           showsHorizontalScrollIndicator={false}
//           horizontal
//           contentContainerStyle={{gap: 10}}>
//           <View style={{...itemHorizontal.cardItem, marginLeft: 10}}>
//             <ImageBackground
//               style={itemHorizontal.cardImage}
//               resizeMode="cover"
//               imageStyle={{borderRadius: 18}}
//               source={{
//                 uri: 'https://www.nokenlive.com/wp-content/uploads/2021/10/news-blob-1633342970834.jpg',
//               }}>
//               <View style={itemHorizontal.cardContent}>
//                 <View style={itemHorizontal.cardInfo}>
//                   <Text style={itemHorizontal.cardTitle}>
//                     <Text style={{ color: colors.black()}}>volley Indoor</Text>
//                   </Text>
//                   <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
//                 </View>
//                 <View>
//                   <View style={itemHorizontal.cardIcon}>
//                     <Add color={colors.black()} variant="Linear" size={20} />
//                   </View>
//                 </View>
//               </View>
//             </ImageBackground>
//           </View>

//           <View style={itemHorizontal.cardItem}>
//             <ImageBackground
//               style={itemHorizontal.cardImage}
//               resizeMode="cover"
//               imageStyle={{borderRadius: 15}}
//               source={{
//                 uri: 'https://media.istockphoto.com/id/186010902/id/foto/teman-bermain-voli.jpg?s=612x612&w=is&k=20&c=ECMFAU4K5t8ZKF_YluwVE9jSS4R-lZXBD_QkJZTi4eE=',
//               }}>
//               <View style={itemHorizontal.cardContent}>
//                 <View style={itemHorizontal.cardInfo}>
//                   <Text style={itemHorizontal.cardTitle}>
//                   <Text style={{ color: colors.black()}}>volley Pantai</Text>
//                   </Text>
//                   <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
//                 </View>
//                 <View>
//                   <View style={itemHorizontal.cardIcon}>
//                     <Add color={colors.black()} variant="Linear" size={20} />
//                   </View>
//                 </View>
//               </View>
//             </ImageBackground>
//           </View>
          
//           <View style={itemHorizontal.cardItem}>
//             <ImageBackground
//               style={itemHorizontal.cardImage}
//               resizeMode="cover"
//               imageStyle={{borderRadius: 15}}
//               source={{
//                 uri: 'https://media.istockphoto.com/id/1415357647/id/foto/dua-rekan-setim-bola-voli-berjalan-keluar-lapangan-setelah-menang.jpg?s=612x612&w=is&k=20&c=hG8rAk4Ni06IZpG1DFDmWS-QwbUtjv4i6Ny3EaC0fMk=',
//               }}>
//               <View style={itemHorizontal.cardContent}>
//                 <View style={itemHorizontal.cardInfo}>
//                   <Text style={itemHorizontal.cardTitle}>
//                   <Text style={{ color: colors.black()}}>volley Mini</Text>
//                   </Text>
//                   <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
//                 </View>
//                 <View>
//                   <View style={itemHorizontal.cardIcon}>
//                     <Add color={colors.black()} variant="Linear" size={20} />
//                   </View>
//                 </View>
//               </View>
//             </ImageBackground>
//           </View> 
//     </ScrollView> */}
        
// {/* SHOP */}
//   <View style={{ marginHorizontal: 1, marginBottom: 10, marginTop: 10 }}>
//   <Text style={{ fontSize: 19, fontWeight: 'bold', color: colors.white() }}> Shop</Text>
//   </View>

//  {/* GAMBAR SHOP */}
//   <View style={styles.listCategory}>
          
//     <ScrollView
//           showsHorizontalScrollIndicator={false}
//           horizontal
//           contentContainerStyle={{gap: 4}}>
//            <View style={{...itemHorizontal.cardItem1, marginLeft: 20}}>
//             <ImageBackground
//               style={itemHorizontal.cardImage1}
//               resizeMode="cover"
//               imageStyle={{borderRadius: 1}}
//               source={{
//                 uri: 'https://images.tokopedia.net/img/cache/700/product-1/2020/1/25/1468699/1468699_141d6ad2-f3d4-4d97-b290-f7fec70d741c_700_700.jpg'
//               }}>
//               <View style={itemHorizontal.cardContent}>
//                 <View style={itemHorizontal.cardInfo}>
//                   <Text style={itemHorizontal.cardTitle}>
//                   </Text>
//                   {/* <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text> */}
//                 </View>
//                 <View>
//                 </View>
//               </View>
//             </ImageBackground>
//           </View>

//           <View style={itemHorizontal.cardItem1}>
//             <ImageBackground
//               style={itemHorizontal.cardImage1}
//               resizeMode="cover"
//               imageStyle={{borderRadius: 1}}
//               source={{
//                 uri: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/10/2/584974c6-9624-4be3-beaa-df43aa37878e.jpg',
//               }}>
//               <View style={itemHorizontal.cardContent}>
//                 <View style={itemHorizontal.cardInfo}>
//                   <Text style={itemHorizontal.cardTitle}>
//                   </Text>
//                 </View>
//                 <View>
//                 </View>
//               </View>
//             </ImageBackground>
//           </View>
          
//           <View style={itemHorizontal.cardItem1}>
//             <ImageBackground
//               style={itemHorizontal.cardImage1}
//               resizeMode="cover"
//               imageStyle={{borderRadius: 1}}
//               source={{
//                 uri: 'https://sportaways.com/media/amasty/amoptmobile/catalog/product/cache/0d7816c24452afaf73bca9711eab0053/m/i/mizuno_cyclone_speed_4_v1ga238045_-_whitecabernetmp_gold_1.jpg',
//               }}>
//               <View style={itemHorizontal.cardContent}>
//                 <View style={itemHorizontal.cardInfo}>
//                   <Text style={itemHorizontal.cardTitle}>
//                   </Text>
//                 </View>
//                 <View>
//                 </View>
//               </View>
//             </ImageBackground>
//           </View> 

//           <View style={itemHorizontal.cardItem1}>
//             <ImageBackground
//               style={itemHorizontal.cardImage1}
//               resizeMode="cover"
//               imageStyle={{borderRadius: 1}}
//               source={{
//                 uri: 'https://media.istockphoto.com/id/1435049184/id/foto/jaring-voli-pantai-dengan-bingkai-kuning-dipasang-pada-tiang-logam-di-pantai.jpg?s=612x612&w=0&k=20&c=PzgQ7w3E0Z9uh0pQ-r2ONisjpA2B5QcofpB1R-ILCrI=',
//               }}>
//               <View style={itemHorizontal.cardContent}>
//                 <View style={itemHorizontal.cardInfo}>
//                   <Text style={itemHorizontal.cardTitle}>
//                   </Text>
//                 </View>
//                 <View>
//                 </View>
//               </View>
//             </ImageBackground>
//           </View> 

//           <View style={{...itemHorizontal.cardItem1, marginLeft: 20}}>
//             <ImageBackground
//               style={itemHorizontal.cardImage1}
//               resizeMode="cover"
//               imageStyle={{borderRadius: 1}}
//               source={{
//                 uri: 'https://images.tokopedia.net/img/cache/700/VqbcmM/2023/4/18/9e0d0661-0dec-4643-b83b-250478de2c1a.jpg'
//               }}>
//               <View style={itemHorizontal.cardContent}>
//                 <View style={itemHorizontal.cardInfo}>
//                   <Text style={itemHorizontal.cardTitle}>
//                   </Text>
//                   {/* <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text> */}
//                 </View>
//                 <View>
//                 </View>
//               </View>
//             </ImageBackground>
//           </View>

//           <View style={{...itemHorizontal.cardItem1, marginLeft: 20}}>
//             <ImageBackground
//               style={itemHorizontal.cardImage1}
//               resizeMode="cover"
//               imageStyle={{borderRadius: 1}}
//               source={{
//                 uri: 'https://id-test-11.slatic.net/p/5a18ecc5d3f178bb55459cef7e6cec48.jpg'
//               }}>
//               <View style={itemHorizontal.cardContent}>
//                 <View style={itemHorizontal.cardInfo}>
//                   <Text style={itemHorizontal.cardTitle}>
//                   </Text>
//                   {/* <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text> */}
//                 </View>
//                 <View>
//                 </View>
//               </View>
//             </ImageBackground>
//           </View>
//     </ScrollView>

// {/* BAWAH GAMBAR */}
//     <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <View style={{...category1.item, marginLeft: 5}}>
//           <Text style={{...category1.title, color: colors.black()}}>
//             Kaos
//             </Text>
//           </View>

//           <View style={category1.item}>
//           <Text style={{...category1.title, color: colors.black()}}>
//             Bola
//             </Text>
//           </View>
//           <View style={category1.item}>
//           <Text style={{...category1.title, color: colors.black()}}>
//             Sepatu
//             </Text>
//           </View>
//           <View style={category1.item}>
//           <Text style={{...category1.title, color: colors.black()}}>
//             Net
//             </Text>
//           </View>
//           <View style={category1.item}>
//           <Text style={{...category1.title, color: colors.black()}}>
//             Celana
//             </Text>
//           </View>
//           <View style={category1.item}>
//           <Text style={{...category1.title, color: colors.black()}}>
//             Pelindung Ruas Jari
//             </Text>
//           </View>
//     </ScrollView>
//   </View>

// {/* PENGERTIAN */}   
// {<View style={itemVertical.listCard}>
//           <View style={itemVertical.cardItem2}>
//             <Image
//               style={itemVertical.cardImage}
//               source={{
//                 uri: 'https://media.istockphoto.com/id/185061138/id/foto/pemain-voli-mengoper-bola.jpg?s=612x612&w=0&k=20&c=SyaKG6eHCHjJa0cEN_jeMTiLL203mtT3lDtSavOvs58=',
//               }}
//             />
//             <View style={itemVertical.cardContent}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                   color: 'colors.black(0.6)',
//                 }}>
//                 <View style={{gap: 5, width: '90%'}}>
//                   <Text style={itemVertical.cardCategory}>Passing Atas</Text>
//                   <Text style={itemVertical.cardTitle}>
//                   Passing atas atau sering disebut dengan set up biasanya digunakan untuk memberikan umpan kepada spiker untuk melakukan serangan, namun dapat juga digunakan untuk menyeberangkan bola ke daerah lawan.
//                   </Text>
//                 </View>
//               </View>
//               <View style={itemVertical.cardInfo}>
//                 <Message
//                   size={15}
//                   variant="Linear"
//                   color={colors.black(0.6)}
//                 />
//                 <Text style={itemVertical.cardText}>89</Text>
//               </View>
//             </View>
//           </View>

//           <View style={itemVertical.cardItem2}>
//             <Image
//               style={itemVertical.cardImage}
//               source={{
//                 uri: 'https://media.istockphoto.com/id/1490911899/id/foto/pemain-wanita-belajar-keterampilan-dasar-dalam-bola-voli.webp?b=1&s=170667a&w=0&k=20&c=mN6XE56GyRU8GsvvKMtnrBwjAw2Bd3RUSez4X_58PKA=',
//               }}
//             />
//             <View style={itemVertical.cardContent}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                 }}>
//                 <View style={{gap: 5, width: '90%'}}>
//                   <Text style={itemVertical.cardCategory}>Passing Bawah</Text>
//                   <Text style={itemVertical.cardTitle}>
//                   Passing bawah adalah salah satu teknik dasar dalam permainan bola voli dan merupakan upaya seorang pemain untuk mengoper bola kepada teman satu regunya dengan menggunakan tangan sisi lengan bawah.
//                   </Text>
//                 </View>
//               </View>
//               <View style={itemVertical.cardInfo}>
//                 <Message
//                   size={15}
//                   variant="Linear"
//                   color={colors.black(0.6)}
//                 />
//                 <Text style={itemVertical.cardText}>89</Text>
//               </View>
//             </View>
//           </View>

//           <View style={itemVertical.cardItem2}>
//             <Image
//               style={itemVertical.cardImage}
//               source={{
//                 uri: 'https://static.promediateknologi.id/crop/0x0:0x0/0x0/photo/beritrust/2023/05/c9daf8bdb861d1655f6e32ac8e7d1172.webp',
//               }}
//             />
//             <View style={itemVertical.cardContent}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                 }}>
//                 <View style={{gap: 5, width: '90%'}}>
//                   <Text style={itemVertical.cardCategory}>Smash</Text>
//                   <Text style={itemVertical.cardTitle}>
//                   Smash atau spike adalah gerakan memukul bola yang dilakukan dengan kuat dan keras serta jalannya bola cepat, tajam dan menukik serta sulit diterima lawan apabila pukulan itu dilakukan dengan cepat dan tepat
//                   </Text>
//                 </View>
//               </View>
//               <View style={itemVertical.cardInfo}>
//                 <Message
//                   size={15}
//                   variant="Linear"
//                   color={colors.black(0.6)}
//                 />
//                 <Text style={itemVertical.cardText}>89</Text>
//               </View>
//             </View>
//           </View>

//           <View style={itemVertical.cardItem2}>
//             <Image
//               style={itemVertical.cardImage}
//               source={{
//                 uri: 'https://perpustakaan.id/wp-content/uploads/2016/04/Teknik-Cara-Servisbawah-Pada-Permainan-Bola-Voli.jpg',
//               }}
//             />
//             <View style={itemVertical.cardContent}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                 }}>
//                 <View style={{gap: 5, width: '90%'}}>
//                   <Text style={itemVertical.cardCategory}>Service</Text>
//                   <Text style={itemVertical.cardTitle}>
//                   Servis adalah pukulan bola yang dilakukan dari daerah belakang garis lapangan melampaui net ke daerah lawan. Pukulan servis dilakukan pada permulaan dan setelah terjadinya suatu kesalahan.
//                     </Text>
//                 </View>
//               </View>
//               <View style={itemVertical.cardInfo}>
//                 <Message
//                   size={15}
//                   variant="Linear"
//                   color={colors.black(0.6)}
//                 />
//                 <Text style={itemVertical.cardText}>89</Text>
//               </View>
//             </View>
//           </View>
//           <View style={itemVertical.cardItem2}>
//             <Image
//               style={itemVertical.cardImage}
//               source={{
//                 uri: 'https://www.telkomsel.com/sites/default/files/2023-03/w4-49.png',
//               }}
//             />
//             <View style={itemVertical.cardContent}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                 }}>
//                 <View style={{gap: 5, width: '90%'}}>
//                   <Text style={itemVertical.cardCategory}>Attacking</Text>
//                   <Text style={itemVertical.cardTitle}>
//                   Menyerang atau attacking Selain melakukan servis dan mengoper bola, teknik dasar bola voli lain yang perlu kamu kuasai adalah menyerang atau disebut juga attack. Tujuan utama teknik ini tak lain dan tak bukan adalah memasukkan bola ke area tim lawan untuk mencetak poin.
//                   </Text>
//                 </View>
//               </View>
//               <View style={itemVertical.cardInfo}>
//                 <Message
//                   size={15}
//                   variant="Linear"
//                   color={colors.black(0.6)}
//                 />
//                 <Text style={itemVertical.cardText}>89</Text>
//               </View>
//             </View>
//           </View>

//           <View style={itemVertical.cardItem2}>
//             <Image
//               style={itemVertical.cardImage}
//               source={{
//                 uri: 'https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1626936599/mcv8uhk5jbtxsyvdxfa7.jpg',
//               }}
//             />
//             <View style={itemVertical.cardContent}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                 }}>
//                 <View style={{gap: 5, width: '90%'}}>
//                   <Text style={itemVertical.cardCategory}>Blocking</Text>
//                   <Text style={itemVertical.cardTitle}>
//                   Blocking merupakan teknik bertahan yang dilakukan di atas net, dengan cara melompat sambil menjulurkan kedua tangan untuk menahan serangan atau smash lawan.
//                   </Text>
//                 </View>
//               </View>
//               <View style={itemVertical.cardInfo}>
//                 <Message
//                   size={15}
//                   variant="Linear"
//                   color={colors.black(0.6)}
//                 />
//                 <Text style={itemVertical.cardText}>89</Text>
//               </View>
//             </View>
//           </View>

//           <View style={itemVertical.cardItem2}>
//             <Image
//               style={itemVertical.cardImage}
//               source={{
//                 uri: 'https://shopee.co.id/inspirasi-shopee/wp-content/uploads/2022/04/voli-passing-bawah.webp',
//               }}
//             />
//             <View style={itemVertical.cardContent}>
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                 }}>
//                 <View style={{gap: 5, width: '90%'}}>
//                   <Text style={itemVertical.cardCategory}>Digging</Text>
//                   <Text style={itemVertical.cardTitle}>
//                   Digging adalah teknik dasar bola voli yang digunakan untuk menyelamatkan bola dari jatuh di lapangan. Digging yang baik dapat mencegah lawan mencetak poin. Digging dilakukan dengan cara melompat dan memukul bola dengan kedua tangan.
//                   </Text>
//                 </View>
//               </View>
//               <View style={itemVertical.cardInfo}>
//                 <Message
//                   size={15}
//                   variant="Linear"
//                   color={colors.black(0.6)}
//                 />
//                 <Text style={itemVertical.cardText}>89</Text>
//               </View>
//             </View>
//           </View>
//   </View>
        
//   </View>
// </ScrollView> */}
//   );
// };

