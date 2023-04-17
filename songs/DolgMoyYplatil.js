import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image, TouchableWithoutFeedback} from 'react-native';
import { styles } from '../styles';

export default function DolgMoyYplatil({navigation}) {
  
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
                  <Text style={styles.Accordes}>G       D       G{'\n'}</Text>
                  Я слышу со Креста, Спаситель говорит: {'\n'}
                  <Text style={styles.Accordes}>G       C    G       D       G{'\n'}</Text>
                  “Ты грешен за тебя, Я ко Кресту прибит"{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Припев: {'\n'}</Text>
                  <Text style={styles.Accordes}>G       C    G       D{'\n'}</Text>
                  Долг мой уплатил, любящий Иисус. {'\n'}
                  <Text style={styles.Accordes}>G       C    G       D       G{'\n'}</Text>
                  Своей кровью искупил, я только Им хвалюсь.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  Господь, Tвоя рука, Всё, может совершить.{'\n'}
                  Сокрушить, ярмо греха, и все раны, исцелить.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  Я не достоин жить, с Христом на высоте.{'\n'}
                  Но мой грех, с меня oмыт, Кровью Aгнца, нa Кресте.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 4: {'\n'}</Text>
                  Когда жe, в оный день, перед Творцом явлюсь.{'\n'}
                  Буду повторять везде, умер за меня, Иисус.{'\n'}{'\n'}
              </Text>
        </ScrollView> 

           
       <StatusBar style="auto" />
     </View>
   );
     
 }

 
