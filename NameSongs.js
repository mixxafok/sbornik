import React, {useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, Image, Modal, TouchableWithoutFeedback, Switch, TouchableOpacity,Slider} from 'react-native';

import { styles } from './styles';
import { ListSongs } from './ListSongs.js'
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function App({navigation}) {

  const [sliderValue, setSliderValue] = useState(18);
  const [ modalOpen , setModalOpen ] = useState (false);
  const [isEnabled, setIsEnabled] = useState(AsyncStorage.getItem('isssEnabled'));
  const toggleSwitch = () =>{
    setIsEnabled(!isEnabled);
    SaveSwitch(!isEnabled);
  } 

  const GetSwitch = async () => {
   try{
     let EnabledSwitch = await AsyncStorage.getItem('isssEnabled');
     if (JSON.parse(EnabledSwitch) === false){
     await setIsEnabled(false);
     await SaveSwitch(false);
       console.log(isEnabled)
     }
     if (JSON.parse(EnabledSwitch) === true){
    await  setIsEnabled(true);
    await  SaveSwitch(true);
      console.log(isEnabled)
    }
   }catch (e){
      console.log("Error");
   }
 }
 
 const SaveSwitch = async (a) => {
  try{
     await AsyncStorage.setItem('isssEnabled', JSON.stringify(a));
     console.log(JSON.stringify(isEnabled) + 'c')
  }catch (e){
     console.log("Errorrrr");
  }
}

useEffect(()=>{
  GetSwitch();
},[])

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



const songss = ListSongs.sort((a,b)=>{return a.title.localeCompare(b.title)}).map(item =>{
  return (
    <Text numberOfLines={item.id} ellipsizeMode='tail' style={isEnabled ? styles.NameSongsDark : styles.NameSongs} onPress={()=>SongLoad1(item.id)}>{item.title}</Text>
  )
})

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
    if (it==15) navigation.navigate('KraiChydeshu');
    if (it==16) navigation.navigate('KtoJeYa');
    if (it==17) navigation.navigate('KtoMoraVse');
    if (it==18) navigation.navigate('KydaBiYaIdtiHotel');
    if (it==19) navigation.navigate('LybitJesusMenya');
    if (it==20) navigation.navigate('LybitEtoZnachit');
    if (it==21) navigation.navigate('LoveChtoNePomnit');
    if (it==22) navigation.navigate('MilostiTvoey');
    if (it==23) navigation.navigate('MiNygniDrygDrygy');
    if (it==24) navigation.navigate('MoyaMolitva');
    if (it==25) navigation.navigate('NaDalekomHolme');
    if (it==26) navigation.navigate('NadCerkovnimiKupolami');
    if (it==27) navigation.navigate('NaychiMenya');
    if (it==28) navigation.navigate('NeymryINoBydy');
    if (it==29) navigation.navigate('OdnaListva');
    if (it==30) navigation.navigate('OtPogibeliSpasla');
    if (it==31) navigation.navigate('ProsipausNaZare');
    if (it==32) navigation.navigate('PustYgasloNebo');
    if (it==33) navigation.navigate('PytKGolgofe');
    if (it==34) navigation.navigate('SvetomSvoim');
    if (it==35) navigation.navigate('SkolkoEstiZamanchivih');
    if (it==36) navigation.navigate('SkoroDayTotPridet');
    if (it==37) navigation.navigate('SkrouMenya');
    if (it==38) navigation.navigate('SonGodNamRojden');
    if (it==39) navigation.navigate('TamDaleko');
    if (it==40) navigation.navigate('TiIskupilMir');
    if (it==41) navigation.navigate('TiKydaIdesh');
    if (it==42) navigation.navigate('TiMenyaNapolni');
    if (it==43) navigation.navigate('TiNePechalsya');
    if (it==44) navigation.navigate('TiPrishelVEtotMir');
    if (it==45) navigation.navigate('HristianinNesiOgon');
    if (it==46) navigation.navigate('UnostSvetlya');
    if (it==47) navigation.navigate('VdoliPoViaDolorossa');
  }

  return (
    <View style={isEnabled ? styles.containerDark : styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.Pesni}>Песни</Text>
        <TouchableWithoutFeedback style={styles.button}  onPress={() => setModalOpen(!modalOpen)}>
          <Image source={require('./assets/menu.png')} style={styles.Menu1}/>     
        </TouchableWithoutFeedback>
      </View>

      <Modal visible={modalOpen} animationType='fade' transparent={true}>
        <TouchableOpacity activeOpacity={0} style={{flex:1}} onPress={() => { setModalOpen(false)}}>
          <View style={styles.modView}>
            <Text style={styles.modText}>Темная тема </Text>
            <Switch style={styles.modSwitch}
              onValueChange={toggleSwitch}
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
        {songss}
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
    
};

