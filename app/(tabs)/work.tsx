import { Platform, ScrollView, StyleSheet, View, useColorScheme } from 'react-native';
import { DarkModeText } from '@/components/DarkModeText';
import { Image } from 'expo-image';
import liveProjects from '@/otherdetails/liveProjects';
import sampleProjectDetails from '@/otherdetails/sampleProjectDetails';

const topblankspace = Platform.OS === 'web' ? 0 : 40;
const projectImgWidth = Platform.OS === 'web' ? '50%' : '100%';
const projectImgRowGap = Platform.OS === 'web' ? 20 : 0;
const liveProjectHeight = Platform.OS === 'web' ? 0 : 'auto';

export default function Work() {
  const theme = useColorScheme();
  return (
    <ScrollView style={styles.spacingWork}>
      <DarkModeText
        type='sectionListHeader'
        style={{ backgroundColor: theme === 'dark' ? '#fff' : '#1a1a1a', color: theme === 'dark' ? '#1a1a1a' : '#fff' }}
      >Live Project</DarkModeText>
      <View style={styles.projectView}>
        {
          liveProjects.map((item, index) => {
            return (
              <View style={styles.projectViewImage1} key={index}> {/* projectViewImage1 is special case */}
                <Image
                  source={item.img}
                  style={{ width: '100%', aspectRatio: 2 / 1.04 }}
                  contentFit='contain'
                />
              </View>
            )
          })
        }
      </View>
      <DarkModeText
        type='sectionListHeader'
        style={{ backgroundColor: theme === 'dark' ? '#fff' : '#1a1a1a', color: theme === 'dark' ? '#1a1a1a' : '#fff' }}
      >Sample Project</DarkModeText>
      <View style={styles.projectView}>        
      {
          sampleProjectDetails.map((item, index) => {
            return (
              <View style={styles.projectViewImage2} key={index}>
                <Image
                  source={item.img}
                  style={{ width: '100%', aspectRatio: 2 / 1.04 }}
                  contentFit='contain'
                />
              </View>
            )
          })
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  spacingWork: {
    paddingVertical: topblankspace,
  },
  projectView: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    rowGap: projectImgRowGap
  },
  projectViewImage1: {
    width: projectImgWidth,
    height: liveProjectHeight
  },
  projectViewImage2: {
    width: projectImgWidth,
  }
});
