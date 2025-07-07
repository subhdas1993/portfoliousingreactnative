import { Image } from 'expo-image';
import { Platform, TouchableOpacity, StyleSheet, Text, View, Linking, useColorScheme } from 'react-native';
import { DarkModeText } from '@/components/DarkModeText';

// import { Platform, StyleSheet, Text, View } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const theme = useColorScheme();

  return (
    <View
      style={{
        flex: 1
      }}
    >
      {/* <View style={intro.display}>
        <Text>Hello</Text>
        <Text>This is Subhashis Das</Text>
        <Text>a Web Developer</Text>
      </View> */}
      <View style={styles.blankSection}></View>
      <Text style={styles.homeTitle}>SUBHASHIS</Text>
      <View
        style={{
          flex: 1,
          flexDirection: Platform.OS === 'web' ? 'row-reverse' : 'column',
          justifyContent: Platform.OS === 'web' ? 'space-evenly' : 'flex-start',
          // justifyContent: 'center'
        }}>
        <Image
          source={require('@/assets/images/profile_picture/profile_picture_max_680px.webp')}
          style={styles.profileImage}
        />
        {
          Platform.OS === 'web' && (
            <View style={{
              width: 466
            }}>
              <View style={{
                width: '100%',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: 20
              }}>
                <DarkModeText type='titleforweb'>Hello,</DarkModeText>
                <DarkModeText type='titleforweb'>this is Subhashis Das</DarkModeText>
                <DarkModeText type='titleforweb'>a Web Developer</DarkModeText>

                <TouchableOpacity style={styles.downloadButtonLayoutForWeb}>
                  <DarkModeText
                    style={{ fontWeight: 500, color: '#000' }}
                    onPress={
                      () => {
                        Linking.openURL('https://drive.google.com/file/d/1YpmdGGke3wkEM0E8WcF4DrdvEiFvCimM/view?usp=sharing')
                      }
                    }
                  >
                    Open My Resume
                  </DarkModeText>
                </TouchableOpacity>
              </View>
            </View>
          )
        }
      </View>
      {
        Platform.OS !== 'web' && (
          <View style={styles.downloadButtonPosition}>
            <TouchableOpacity style={styles.downloadButtonLayout}>
              <DarkModeText
                style={{ fontWeight: 500, color: '#fff' }}
                onPress={
                  () => {
                    Linking.openURL('https://drive.google.com/file/d/1YpmdGGke3wkEM0E8WcF4DrdvEiFvCimM/view?usp=sharing')
                  }
                }
              >
                Open My Resume
              </DarkModeText>
            </TouchableOpacity>
          </View>
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  blankSection: {
    paddingVertical: Platform.OS === 'web' ? 0 : 20
  },
  homeTitle: {
    textAlign: 'center',
    fontSize: 30,
    borderWidth: 2,
    backgroundColor: '#1a1a1a',
    color: '#fff'
  },
  profileImage: {
    width: Platform.OS === 'web' ? '30%' : '100%',
    aspectRatio: 9 / 16,
  },
  downloadButtonPosition: {
    width: '100%',
    position: 'absolute',
    top: '90%',
    zIndex: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  downloadButtonLayout: {
    backgroundColor: '#000',
    padding: 20,
    borderRadius: 10,
  },
  downloadButtonLayoutForWeb: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  }
  // downloadButton: {
  //   color: 'white',
  //   fontSize: 20,
  //   fontWeight: 500,
  // }
});
