import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image, TouchableWithoutFeedback} from 'react-native';
import { styles } from '../styles';

export default function LoveChtoNePomnit({navigation}) {
  
   return (
     <View style={styles.container}>
 
       <View style={styles.header}>
         <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <Image  source={require('./../assets/icons8.png')} style={styles.Arrow} />
         </TouchableWithoutFeedback>
         <Image source={require('./../assets/menu.png')} style={styles.Menu}/>
       </View>
 
        <ScrollView>
              <Text style={styles.Song} >
                  <Text style={styles.Couplet} >Куплет 1: {'\n'}</Text>
                  <Text style={styles.Accordes}>C                   F                C{'\n'}</Text>
                  Любовь, что не помнит неправды людской,{'\n'}
                  <Text style={styles.Accordes}>G                   C                F              G{'\n'}</Text>
                  Всё зная, не полнит наш список долгов,{'\n'}
                  <Text style={styles.Accordes}>C                                  G                        F{'\n'}</Text>
                   Бросает их в море без дна, берегов, {'\n'}
                  <Text style={styles.Accordes}>F                                  G                        C{'\n'}</Text>
                  Ведь милость Господня превыше грехов!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  О, как долготерпит заблудших и ждёт,{'\n'}
                  Отец, что так нежно домой нас зовёт. {'\n'}
                  Злых, немощных, бедных, принять Он готов, {'\n'}
                  Ведь милость Господня превыше грехов.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>F    C    G         F          C          G{'\n'}</Text>
                  Славен Бог, ведь милость Его,{'\n'}
                  <Text style={styles.Accordes}>F                  C                G            C{'\n'}</Text>
                   Каждое утро тьму гонит прочь,{'\n'}
                  <Text style={styles.Accordes}>F                  C                G            C{'\n'}</Text>
                   Ведь милость Господня, превыше грехов.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Как щедро на нас расточил Он добро,{'\n'}
                  Ценой стала Жизнь, а оплатою - Кровь. {'\n'}
                  Печальная участь ждала должников –{'\n'}
                  Но милость Господня превыше грехов!{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 4: {'\n'}</Text>
                  Любовь, что не помнит неправды людской, {'\n'}
                  Всё зная, не полнит наш список долгов,{'\n'}
                  Бросает их в море без дна, берегов,{'\n'}
                  Ведь милость Господня превыше грехов!{'\n'}

              </Text>
        </ScrollView> 

       <StatusBar style="auto" />
     </View>
   );
     
 }
