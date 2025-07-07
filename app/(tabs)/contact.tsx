import { DarkModeText } from '@/components/DarkModeText';
import { useState } from 'react';
import { 
  Platform, 
  StyleSheet, 
  TextInput, 
  View, 
  TouchableOpacity, 
  Text, 
  useColorScheme, 
  KeyboardAvoidingView, 
  Linking, 
  Alert 
} from 'react-native';


// import { Collapsible } from '@/components/Collapsible';
// import { ExternalLink } from '@/components/ExternalLink';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const theme = useColorScheme();

  const submitFrom = () => {
    if (!name || !email || !msg) {
      Alert.alert('All fields are required');
      return;
    }

    const emailUrl = `mailto:${email}?subject=${encodeURIComponent(`${name} want to connect`)}&body=${encodeURIComponent(msg)}`;

    Linking.canOpenURL(emailUrl)
      .then((supported) => {
        if (!supported) {
          Alert.alert('Email app is not available');
        } else {
          return Linking.openURL(emailUrl);
        }
      })
      .catch((err) => console.error('Error opening email app:', err));
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      <View style={styles.spacingContact}>
        <DarkModeText type='heading'>Let's fill up and Connect!</DarkModeText>
        <View>
          <TextInput
            style={[
              styles.textInputLayout,
              theme === 'dark' ? styles.textInputDark : styles.textInputLight,
            ]}
            onChangeText={setName}
            value={name}
            placeholder='Enter your Name'
            placeholderTextColor = {theme === 'dark' ? '#999999' : '#ababab'}
          />

          <TextInput
            style={[
              styles.textInputLayout,
              theme === 'dark' ? styles.textInputDark : styles.textInputLight,
            ]}
            onChangeText={setEmail}
            value={email}
            // inputMode="email"
            placeholder='Enter your Email'
            placeholderTextColor = {theme === 'dark' ? '#999999' : '#ababab'}
          />

          <TextInput
            style={[
              styles.textInputMultilineLayout,
              theme === 'dark' ? styles.textInputDark : styles.textInputLight,
            ]}
            onChangeText={setMsg}
            value={msg}
            multiline
            numberOfLines={10}
            placeholder='Enter your Message'
            placeholderTextColor = {theme === 'dark' ? '#999999' : '#ababab'}
          />
          <TouchableOpacity
            style={{ backgroundColor: theme === 'dark' ? '#fff' : '#1a1a1a', padding: 10 }}
            onPress={submitFrom}
          >
            {/* <Text style={{ textAlign: 'center', color: theme === 'dark' ? '#1a1a1a' : '#fff' }}>Submit</Text> */}
            <Text 
            style={[
              styles.submitButtonLayout,
              theme === 'dark' ? styles.submitButtonDark : styles.submitButtonLight,
            ]}>
              Send the Email
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  spacingContact: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    // alignItems:'center'
  },
  textInputLayout: {
    height: 40,
    marginVertical: 12,
    // margin: 12,
    outlineWidth: 1,
    padding: 10,
  },
  textInputDark:{
    outlineColor: '#fff',
    color: '#fff',
  },
  textInputLight:{
    outlineColor: '#1a1a1a',
    color: '#1a1a1a',
  },
  textInputMultilineLayout:{
    height: 200,
    marginVertical: 12,
    // margin: 12,
    outlineWidth: 1,
    outlineColor: '#1a1a1a',
    color: '#1a1a1a',
    padding: 10,
  },
  submitButtonLayout:{
    textAlign: 'center',
    fontWeight: 500
  },
  submitButtonDark:{
    color: '#1a1a1a'
  },
  submitButtonLight:{
    color: '#fff'
  }
});
