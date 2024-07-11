import { SafeAreaView, View, Text, StyleSheet, TextInput, ImageBackground, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function SignUp({ navigation }) {
  const { height: WINDOW_HEIGHT } = useWindowDimensions();

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  }
  
  return (
    <ImageBackground 
      style={style.mainWrapper}
      source={require('../assets/bg_ori.jpg')}
    >
      <StatusBar style="light" backgroundColor="#44811E" />
      <View style={[style.headerWrapper, { height: WINDOW_HEIGHT * 0.3}]}>
        <Text style={style.textLogin}>Login</Text>
        <Text style={style.textPromotions}>Everyone should contribute </Text>
        <Text style={style.textPromotions}>to preserving the environment</Text>
      </View>
      <View style={style.formWrapper}>
        <ScrollView contentContainerStyle={style.form} >
          <View style={style.textInputWrapper}>
            <AntDesign name="mail" size={24} color="black" />
            <TextInput style={style.textInput} placeholder='Email address'/>
          </View>
          <View style={style.textInputWrapper}>
            <AntDesign name="lock" size={24} color="black" />
            <TextInput style={style.textInput} placeholder='Password' secureTextEntry/>
          </View>
          <View style={{ height: WINDOW_HEIGHT * 0.1}} />
          <TouchableOpacity style={style.btn}>
            <Text style={style.textBtn}>Login</Text>
          </TouchableOpacity>
          <Text style={{ textAlign: 'center'}} onPress={handleSignUp}>
            Doesn't have an account ? 
            <Text style={style.forgotPassword}> Sign Up</Text>
          </Text>
          <View style={{ height: WINDOW_HEIGHT * 0.3}} />
        </ScrollView>
      </View>
    </ImageBackground>
  )
}

const style = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: 'white',
    resizeMode: 'cover',
  },
  formWrapper: {
    backgroundColor: 'white',
    borderTopStartRadius: 25,
    borderTopEndRadius: 25,
  },
  form: {
    gap: 15,
    padding: 30,
  },
  textLogin: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  textPromotions: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
  },
  textInputWrapper: {
    flexDirection: 'row',
    backgroundColor: '#EDEDED',
    padding: 10,
    gap: 10,
    borderRadius: 10
  },
  headerWrapper: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  textInput: {
    flex: 1,
  },
  forgotPassword: {
    fontSize: 14,
    textDecorationLine: 'underline',
    color: 'blue',
  },
  btn: {
    backgroundColor: "#44811E",
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  textBtn: {
    fontSize: 18,
    fontWeight: 'bold', 
    color: 'white',
  }
})