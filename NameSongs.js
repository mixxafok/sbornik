import React, {useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image, Modal, TouchableWithoutFeedback, Switch, TouchableOpacity, Slider} from 'react-native';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function App({navigation}) {

  const [sliderValue, setSliderValue] = useState(18);
  const [ modalOpen , setModalOpen ] = useState (false);
  const [isEnabled, setIsEnabled] = useState();
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

//  const SaveSwitch = async () => {
//   try{
//      await AsyncStorage.setItem('issEnabled', isEnabled);
//   }catch (e){
//      console.log("Error");
//   }
//}
//
//const GetSwitch = async () => {
//   try{
//     let EnabledSwitch = await AsyncStorage.getItem('issEnabled');
//     if (EnabledSwitch !== null)
//     toggleSwitch();
//   }catch (e){
//      console.log("Error");
//   }
//}
//
//useEffect(()=>{
//   GetSwitch();
//},[])

  if(isEnabled) { 
    styles.Accordes = [styles.AccordesDark, {fontSize: sliderValue}],
    styles.Song = [styles.SongDark,{fontSize: sliderValue}],
    styles.Couplet = [styles.Couplet, {fontSize: sliderValue}],
    styles.container = styles.containerDark
   } 
  else { 
    styles.Accordes = [styles.AccordesLight, {fontSize: sliderValue}],
    styles.Song = [styles.SongLight,{fontSize: sliderValue}],
    styles.Couplet = [styles.Couplet, {fontSize: sliderValue}],
    styles.container = styles.containerLight
  };

  const SongLoad1 = (it) => {

    if (it==1) navigation.navigate('BlagoEsti');
    if (it==2) navigation.navigate('VTebeGospod');
    if (it==3) navigation.navigate('VChristeOdnom');
    if (it==4) navigation.navigate('VChasKogdaTryba');
    if (it==5) navigation.navigate('VstaetZarya');
    if (it==6) navigation.navigate('DerjitOnMenya');
    if (it==7) navigation.navigate('DoveryatTebe');
    if (it==8) navigation.navigate('DolgMoyYplatil');
    if (it==9) navigation.navigate('EstiNaNebeGorod');
    if (it==10) navigation.navigate('ZaLoveZaMilost');
    if (it==11) navigation.navigate('ZvezdDivnieAlmazi');
    if (it==12) navigation.navigate('ZdeciNaZemle');
    if (it==13) navigation.navigate('KakPrekrasno');
    if (it==14) navigation.navigate('KakHorosho');
    if (it==15) navigation.navigate('KtoJeYa');
    if (it==16) navigation.navigate('KtoMoraVse');
    if (it==17) navigation.navigate('KydaBiYaIdtiHotel');
    if (it==18) navigation.navigate('LybitJesusMenya');
    if (it==19) navigation.navigate('LoveChtoNePomnit');
    if (it==20) navigation.navigate('MilostiTvoey');
    if (it==21) navigation.navigate('MoyaMolitva');
    if (it==22) navigation.navigate('MiNygniDrygDrygy');
    if (it==23) navigation.navigate('NaDalekomHolme');
    if (it==24) navigation.navigate('NadCerkovnimiKupolami');
    if (it==25) navigation.navigate('NaychiMenya');
    if (it==26) navigation.navigate('NeymryINoBydy');
    if (it==27) navigation.navigate('OdnaListva');
    if (it==28) navigation.navigate('OtPogibeliSpasla');
    if (it==29) navigation.navigate('ProsipausNaZare');
    if (it==30) navigation.navigate('PustYgasloNebo');
    if (it==31) navigation.navigate('PytKGolgofe');
    if (it==32) navigation.navigate('SvetomSvoim');
    if (it==33) navigation.navigate('SkoroDayTotPridet');
    if (it==34) navigation.navigate('SkrouMenya');
    if (it==35) navigation.navigate('SonGodNamRojden');
    if (it==36) navigation.navigate('TamDaleko');
    if (it==37) navigation.navigate('TiIskupilMir');
    if (it==38) navigation.navigate('TiKydaIdesh');
    if (it==39) navigation.navigate('TiMenyaNapolni');
    if (it==40) navigation.navigate('TiNePechalsya');
    if (it==41) navigation.navigate('UnostSvetlya');
    if (it==42) navigation.navigate('LybitEtoZnachit');
    if (it==43) navigation.navigate('KraiChydeshu');
    if (it==44) navigation.navigate('HristianinNesiOgon');
    if (it==45) navigation.navigate('SkolkoEstiZamanchivih');
    if (it==46) navigation.navigate('TiPrishelVEtotMir');
  }

  return (
    <View style={isEnabled ? styles.containerDark : styles.container}>

      <View style={styles.header}>
        <Text style={styles.Pesni}>Песни</Text>
        <TouchableWithoutFeedback style={styles.button}  onPress={() => setModalOpen(true)}>
          <Image source={require('./assets/menu.png')} style={styles.Menu1}/>     
        </TouchableWithoutFeedback>
      </View>

      <Modal visible={modalOpen} animationType='fade' transparent={true}>
        <TouchableOpacity activeOpacity={0} style={{flex:1}} onPress={() => { setModalOpen(false)}}>
          <View style={styles.modView}>
            <Text style={styles.modText}>Темная тема </Text>
            <Switch style={styles.modSwitch}
              onValueChange={toggleSwitch }
              value={isEnabled}
              
            /> 
            <Text style={styles.SliderText}>Размер текста : {sliderValue}</Text>
           <Slider
              style={styles.Slider}
              maximumValue={32}
              minimumValue={10}
              step={1}
              value={sliderValue}
              onSlidingComplete={(sliderValue) => setSliderValue(sliderValue)}
            />
          </View>
        </TouchableOpacity>
      </Modal>

      <ScrollView>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(1)}>Благо есть славить Господа</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(2)}>В Тебе Господь вся жизнь моя</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(3)}>В Христе одном надежда есть</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(4)}>В час, когда труба Господня</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(5)}>Встает заря</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(6)}>Держит Он меня</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(7)}>Доверять Тебе</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(8)}>Долг мой уплатил</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(9)}>Есть на небе город</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(10)}>За любовь, за милость, за спасение</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(11)}>Звезд дивные алмазы</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(12)}>Здесь, на земле, мы только странники</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(13)}>Как прекрасно всё то, что Твое</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(14)}>Как хорошо, что со мною Спаситель</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(43)}>Край чудесный нас ждет</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(15)}>Кто же я, что Царя Вселенной всей</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(16)}>Кто моря все горстью исчерпал</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(17)}>Куда бы я идти хотел</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(18)}>Любит Иисус меня</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(42)}>Любить это значит</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(19)}>Любовь, что не помнит неправды</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(20)}>Милости Твоей полна вся земля</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(21)}>Моя молитва да струится</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(22)}>Мы нужны друг другу</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(23)}>На далеком холме</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(24)}>Над церковными куполами</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(25)}>Научи меня</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(26)}>Не умру я, но буду</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(27)}>Одна листва</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(28)}>От погибели спасла</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(29)}>Просыпаюсь на заре</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(30)}>Пусть угасло небо</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(31)}>Путь к Голгофе далёк</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(32)}>Светом Своим</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(45)}>Сколько есть заманчивых дорог</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(33)}>Скоро день тот придет</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(34)}>Скрой меня, Своим крылом</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(35)}>Сын Божий нам рождён</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(36)}>Там далеко, за облаками</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(37)}>Ты искупил мир от греха</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(38)}>Ты куда идешь</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(39)}>Ты меня наполни</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(40)}>Ты не печалься</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(46)}>Ты пришел в этот мир</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(44)}>Христианин неси огонь</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(41)}>Юность светлая</Text>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
    
};

