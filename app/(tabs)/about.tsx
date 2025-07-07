import { Image } from 'expo-image';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import skills from '@/otherdetails/skills';
import {DarkModeText} from '@/components/DarkModeText';

const skilllogowidth = Platform.OS === 'web' ? '10%' : '20%';
const topblankspace = Platform.OS === 'web' ? 0 : 40;
const bottomblankspace = Platform.OS === 'web' ? 0 : 20;

export default function About() {
  return (
      <ScrollView style={styles.spacingAbout}>
        <DarkModeText type='heading'>Who Am I? Let's find Out!!!!</DarkModeText>
        <DarkModeText>I began my academic journey in 2010 with a BCA from GGSIPU (completed in 2013), followed by an MCA from SMU in 2017. During my final MCA semester, I started working as a Recruiter, gaining valuable corporate experience.</DarkModeText>
        <View style={styles.blankSection}></View>
        <DarkModeText>In 2021, I transitioned to tech and joined Dice Academy to learn full stack development. I completed my Diploma in October 2022.</DarkModeText>
        <View style={styles.blankSection}></View>
        <DarkModeText>In March 2024, I joined Lady First Fashions Pvt. Ltd. and worked on their website development, collaborating with the tech team and learning new stacks. I also helped set up Razorpay, Shiprocket, Vilpower, and NimbusIT accounts. I left in May 2025 and am now open to new opportunities.</DarkModeText>

        <DarkModeText type='subHeading'>----Skills----</DarkModeText>
        <View style={styles.imgFlex}>
          {
            skills.map((test, index) => {
              return (
                <View key={test.key || index} style={styles.imgFlexView}>
                  <Image
                    source={test.img}
                    style={styles.skillImg}
                    contentFit='contain'
                  />
                </View>
              )
            })
          }
        </View>
        <View style={styles.bottomSpace}></View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  spacingAbout: {
    paddingVertical: topblankspace,
  },
  blankSection: {
    paddingVertical: 10
  },
  imgFlex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 14
  },
  imgFlexView:{
    padding: 5,
    width: skilllogowidth,
  },
  skillImg: {
    width: "100%",
    aspectRatio: 1/1,
  },
  bottomSpace:{
    paddingVertical: bottomblankspace,
  }
});