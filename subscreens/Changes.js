
import React, { useState, useEffect } from "react";
import { Linking } from 'react-native';
import {
  ImageBackground,
  Text,
  Image,
  View,
  SafeAreaView,
  ScrollView,
  Modal,
  Pressable,
  Dimensions
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";



const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


const App = () => {
  const [dimensions, setDimensions] = useState({ window, screen });
  const [mode, setMode] = useState("portrait");

  const image = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/barrensavannah/background.png",
  };
  const image2 = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/barrensavannah/mainImage.jpg",
  };

  const imageText = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/barrensavannah/contentBack.png",
  };

  const imageBlockqote = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/barrensavannah/blockquote.png",
  };


  const bkhover = {
    uri:
      "https://www.html.am/templates/downloads/bryantsmith/barrensavannah/contentBack.png",
  };


  const modeMaker = () => {
    if (dimensions.screen.width > dimensions.screen.height) {
      setMode("landscape")

    } else {
      setMode("portrait")

    }
    console.log(mode)
  };

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);

    return () => {
      Dimensions.removeEventListener("change", onChange),
        modeMaker();
    };

  });


  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.contentBorder}>


        <View style={mode === "portrait" ? styles.navContainer : styles.navContainer2}>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.NavContainer}>
         
            <View style={styles.navButton}  onPress={() => Linking.openURL('')}>
              <Text style={mode === "portrait" ? styles.navBtnTxt : styles.navBtnTxt2}>Home</Text>
            </View>

            <View style={styles.navButton} onPress={() => Linking.openURL('')}>
              <Text style={mode === "portrait" ? styles.navBtnTxt : styles.navBtnTxt2}>About</Text>
            </View>

            <View style={styles.navButton} onPress={() => Linking.openURL('')}>
              <Text style={mode === "portrait" ? styles.navBtnTxt : styles.navBtnTxt2}>Portfolio</Text>
            </View>


            <View style={styles.navButton} onPress={() => Linking.openURL('')}>
              <Text style={mode === "portrait" ? styles.navBtnTxt : styles.navBtnTxt2}>Services</Text>
            </View>


            <View style={styles.navButton} onPress={() => Linking.openURL('')}>
              <Text style={mode === "portrait" ? styles.navBtnTxt : styles.navBtnTxt2}>Contact</Text>
            </View>

          </ScrollView>
        </View>

        {mode === "portrait" ? <View style={styles.containImage}>
          <ImageBackground source={image2} style={{ height: '100%', width: '100%', }}>
            <Text style={styles.titleImage} >Barren Savannah</Text>
            <Text style={styles.SubTitlepImage}>An XHTML 1.0 Strict Template by Bryant Smith</Text>
          </ImageBackground>

        </View> : null}

        <View style={mode === "portrait" ? styles.text : styles.textLandscape}>
          <ScrollView style={styles.contentText} horizontal={false} showsHorizontalScrollIndicator={true} >
            <View>
              <ImageBackground source={imageText} style={{ height: '100%', width: '100%' }}>
                <Text style={styles.h1Text}>The Title of an Article</Text>
                <Text style={styles.p}>You may use this template on any site, anywhere, for free just please leave
                the link back to me in the footer. This template validates XHTML Strict 1.0, CSS Validates as well;
                enjoy :)
                  <Text style={styles.a} onPress={() => Linking.openURL('#')}> This is what a link looks like.</Text>
                  {"\n"}{"\n"}Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque
                   vitae sapien bibendum sodales. Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien.
                   Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc.
                   Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis. Sed vehicula
                   pellentesque quam.{"\n"}{"\n"}</Text>
                <View style={styles.qote}>
                  <Image source={imageBlockqote} />
                  <Text>This is a block quote, use it to include quotes from yourself or others.
                    All you have to do to include this element is wrap some text around blockquote tags</Text>

                </View>

                <Text style={styles.h1Text}> Titles are H1 Tags</Text>
                <Text style={styles.p}> Since the titles are H1 tags, try to include your keywords in them as search
                engines will look at them as being important content.{"\n"}{"\n"} Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales.
                 Curabitur elementum. Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo.
                  Quisque auctor velit sed tellus. Suspendisse potenti. Aenean laoreet imperdiet nunc.
                  Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis.
                  Sed vehicula pellentesque quam.Vestibulum augue quam, interdum id, congue semper, convallis non, velit.
                   Quisque augue tortor, tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis,
                    laoreet nec, porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet,
                     consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                      Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.

</Text>
                <Text style={styles.h1Text}>Yet Another One!</Text>

                <Text style={styles.p}>
                  You may use this template on any site, anywhere, for free just please leave the link back to me in the footer.
                   This template validates XHTML Strict 1.0, CSS Validates as well; enjoy :) {"\n"} {"\n"}Lorem ipsum dolor sit amet, 
                   consectetuer adipiscing elit. Integer mi. Vivamus sit amet neque vitae sapien bibendum sodales. Curabitur elementum.
                    Duis imperdiet. Donec eleifend porttitor sapien. Praesent leo. Quisque auctor velit sed tellus. Suspendisse potenti. 
                    Aenean laoreet imperdiet nunc. Donec commodo suscipit dolor. Aenean nibh. Sed id odio. Aliquam lobortis risus ut felis.
                     Sed vehicula pellentesque quam.{"\n"}{"\n"}Vestibulum augue quam, interdum id, congue semper, convallis non, velit. Quisque augue tortor,
                     tristique ac, scelerisque eget, aliquam id, sem. Aenean lorem. Fusce velit nibh, dapibus quis, laoreet nec,
                      porta a, dui. Nullam ac urna. Proin eget elit. Nunc scelerisque venenatis urna. Lorem ipsum dolor sit amet, 
                      consectetuer adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                       Fusce congue, turpis ut commodo mattis, pede erat fringilla tellus, pulvinar suscipit odio lorem sed pede.
                    </Text>


                <Text style={styles.footer} onPress={() => Linking.openURL('http://www.bryantsmith.com')}>web development by bryant smith</Text>



              </ImageBackground>
            </View>
          </ScrollView>
        </View>

      </View>
    </SafeAreaView >
  );
}

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#e67300',
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentBorder: {
    flexDirection: "column",
    flex: 1,
    // padding: '2@s',
    marginTop: '35@s',
    marginBottom: '10@s',
    marginLeft: '10@s',
    marginRight: '10@s',
    // backgroundColor: "#331a00",
    borderWidth: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,

  },

  image: {

  },

  navBtnTxt: {
    color: '#fff3e6',
    fontWeight: 'bold',
    lineHeight: 30,
    fontSize: '18@s',
    textDecorationLine: 'underline',
    textDecorationStyle: 'dashed',
    textDecorationColor: '#000000',
    paddingLeft: '15@s',
    fontFamily: 'Adobe Garamond Pro Bold", Georgia, "Times New Roman", Times, serif'
  },
  navBtnTxt2: {
    color: '#fff3e6',
    fontWeight: 'bold',
    lineHeight: 40,
    fontSize: '20@s',
    textDecorationLine: 'underline',
    textDecorationColor: '#000000',
    paddingLeft: '35@s',
    fontFamily: 'Adobe Garamond Pro Bold", Georgia, "Times New Roman", Times, serif'
  },

  navContainer: {
    flex: .09,
    backgroundColor: '#1a0d00',
    flexDirection: "row",
  },
  
  navContainer2: {
    flex: .2,
    backgroundColor: '#1a0d00',
    flexDirection: "row",
  },


  navButton: {
    flex: 1,
    alignItems: "center",
    paddingLeft: '5@s',
    paddingRight: '5@s',
  },



  containImage: {
    marginTop: '0@s',
    flex: .5,


  },
  image: {
    flex: 1,
  },

  text: {
    marginTop: '0@s',
    flex: .5,
    

  },

  textLandscape: {
    marginTop: '0@s',
    flex: .9,
    
  },


  titleImage: {
    color: '#FFFFFF',
    fontSize: '20@s',
    paddingLeft: '10@s',
    paddingTop: '10@s',
    fontFamily: 'Adobe Garamond Pro Bold", Georgia, "Times New Roman", Times, serif',
  },

  SubTitlepImage: {

    color: '#25060B',
    paddingLeft: '10@s',
    fontFamily: 'Adobe Garamond Pro Bold", Georgia, "Times New Roman", Times, serif',

  },
  h1Text: {
    paddingTop: '20@s',
    paddingBottom: '15@s',
    paddingLeft: '10@s',
    color: '#1F1603',
    fontSize: '20@s',
    paddingLeft: '10@s',
    fontFamily: 'Adobe Garamond Pro Bold", Georgia, "Times New Roman", Times, serif',


  },
  p: {
    lineHeight: '20@s',
    paddingLeft: '15@s',

  },
  a: {
    color: '#C87002'
  },
  qote: {
    borderStyle: 'dashed',
    borderColor: '#C87002',
    borderWidth: 1,
    marginLeft: '15@s',
    marginRight: '15@s',
    padding: '20@s'
  },
  footer: {
    color: 'black',
    marginTop: '15@s',
    fontSize: '9@s',
    textAlign: 'center',


  },
  imageBlockqote: {
    //width:10


  }



});
export default App;
