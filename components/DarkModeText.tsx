import { StyleSheet, Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'heading' | 'subHeading' | 'sectionListHeader' | 'sectionListItems' | 'titleforweb';
};

export function DarkModeText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'heading' ? styles.heading : undefined,
        type === 'subHeading' ? styles.subHeading : undefined,
        type === 'sectionListHeader' ? styles.sectionListHeader : undefined,
        type === 'sectionListItems' ? styles.sectionListItems : undefined ,
        type == 'titleforweb' ? styles.titleforweb : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    textAlign: 'justify',
    fontSize: 18,
    paddingHorizontal:10,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
  heading: {
    padding: 10,
    fontSize: 50,
    fontWeight: 500,
    textAlign: 'center',
  },
  subHeading: {
    paddingVertical: 20,
    fontSize: 30,
    fontWeight: 500,
    textAlign: 'center',
  },
  sectionListHeader: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
    // backgroundColor: 'rgba(247,247,247,1.0)',
    textAlign:'center'
  },
  sectionListItems: {
    padding: 6,
    fontSize: 14,
    // height: 44,
  },
  titleforweb:{
    fontSize: 48,
    fontWeight: 'bold',
    lineHeight: 42
  }
});
