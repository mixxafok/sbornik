import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image, TouchableWithoutFeedback} from 'react-native';
import { styles } from '../styles';

export default function VChristeOdnom({navigation}) {
  
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
                  <Text style={styles.Accordes}>G                D         G               A          {'\n'}</Text>
                  В Христе одном надежда есть,{'\n'}
                  <Text style={styles.Accordes}>D           G            A           D{'\n'}</Text>
                  Вся моя жизнь и сила в Нём.{'\n'}
                  <Text style={styles.Accordes}>G                      D              G      A       {'\n'}</Text>               
                  Он - Камень мой, скала и песнь – {'\n'}
                  <Text style={styles.Accordes}>D                   G                     A             D{'\n'}</Text>
                  надежный  спутник в страшный шторм{'\n'}{'\n'}
                  <Text style={styles.Accordes}>G   Hm       A {'\n'}</Text>
                  Как высока любовь Его. {'\n'}
                  <Text style={styles.Accordes}>D                G      Hm     A{'\n'}</Text>
                  Как мир глубок, как с Ним легко. {'\n'}
                  <Text style={styles.Accordes}>G                 D                G          A  {'\n'}</Text>
                  Мой Утешитель – Всё во всём,{'\n'}
                  <Text style={styles.Accordes}>D           G      A               D{'\n'}</Text>
                  Моя опора только в Нём.{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 2: {'\n'}</Text>
                  В Христе одном, принявшем плоть, {'\n'}
                  Открылся всемогущий Бог.{'\n'}
                  Но дар любви что дал Господь,{'\n'}
                  Отверг народ, избрав порок.{'\n'}
                  Он на кресте Себя отдал,  {'\n'}
                  В смиреньи гнев Отца принял{'\n'}
                  Мой грех на плечи возложил {'\n'}
                  Чтобы Его я смертью жил{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 3: {'\n'}</Text>
                  В земле, как все, Он мёртвым был {'\n'}
                  Объят был тьмою свет небес.{'\n'}
                  Но в третий день Он победил, {'\n'}
                  Из гроба мрачного воскрес{'\n'}
                  Он Бог и победитель всех {'\n'}
                  Уже не правит больше грех.{'\n'}
                  Навеки Он хозяин мой{'\n'}
                  Я куплен кровию святой{'\n'}{'\n'}

                  <Text style={styles.Couplet} >Куплет 4: {'\n'}</Text>
                  Нет страха смерти, нет вины, {'\n'}
                  Всё только силою Христа.{'\n'}
                  От первых дней, до седины {'\n'}
                  До смерти, в Нём моя судьба.{'\n'}
                  Нет никого и ничего {'\n'}
                  Что вырвет из руки Его{'\n'}
                  Он приведёт меня в Свой дом {'\n'}
                  Моя опора только в Нём{'\n'}{'\n'}
              </Text>
        </ScrollView> 

           
       <StatusBar style="auto" />
     </View>
   );
     
 }

 
