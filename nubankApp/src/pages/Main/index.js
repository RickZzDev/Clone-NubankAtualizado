import React, {useState} from 'react';
import Header from '../../components/Header/header'
import Tabs from '../../components/Tabs/tabs'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Menu from '../../components/Menu/menu'
import {Animated,Text,StyleSheet} from 'react-native'
import {PanGestureHandler,State} from 'react-native-gesture-handler'

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Annotation,
  Title,
  Bold,
  Description,
  TitleFatura,
  DescriptionFatura,
  NumeroLimite,
  TextLimite,
  BoxLimite,
  BoxDados,
  BoxCores,
  CardLimite,
  CardReward,
  DescriptionRewards,
  RewardButtonText,
  BoxDadosContainer,
  RewardButton,
  Cor1,
  Cor2,
  Cor3,
  TitleReward,
  Scrollcards
} from './styles';

export default function Main(){
  //Guarda a quantidade de pixels arrastados
  let offset = 0;
  
  const translateY = new Animated.Value(0)

  var [tamanho,setTamanho] = useState('0%')

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent:{
          translationY: translateY,
        }
      },

    ],
    {useNativeDriver:true},
  )

  function onHandlerStateChange(event){
    //Conferindo se o estado anterior era ativo
    //Podendo saber se a animação foi finalizada
    if (event.nativeEvent.oldState === State.ACTIVE){
      const {translationY} = event.nativeEvent;
      //Armazena se o menu esta aberto ou nao
      let opened = false
      offset += translationY;
      
      //Caso o usuario mova mais que 100pixels
      //Setamos a variavel para true
      if(translationY >= 100){
        opened = true
      }else{
        //Caso não seja, voltamos ela para zero 
        translateY.setValue(offset)
        translateY.setOffset(0)
        offset = 0
      }

      //Se o usario mexeu mais que 100 pixels
      //ou seja,variavel opened esta true
      //Jogamos o menu la para baixo
      Animated.timing(translateY,{
        toValue: opened ?  350 : 0,
        duration:200,
        useNativeDriver:true
      }).start(()=>{
        //Função que é executada ao finalizar a animaçao
        //O offset é basicamente onde o objeto deve estar
        //Então se a animação esta la em baixo, ele deve permanceer no ponto maximo
        //Caso contrario ele deve permanecer no ponto mínimo
        offset = opened ? 350 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      })

  
      //Ao detectar que o usuario soltou a animação
      //Nos atribuimos o valor antigo ao translateY
      //Para que o mesmo não retorne do início
      // translateY.setOffset(offset)
      // translateY.setValue(0)
    }
  }

  return(
    <Container>
      <Header tamanho={tamanho} setTamanho={setTamanho}>

      </Header>
      <Menu tamanho={tamanho}/>
      <Content>
      
        {/* <Menu translateY={translateY}/> */}
{/* 
        <PanGestureHandler 
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        > */}
        {/* Isso estava em card */}
        {/* style={{
            transform:[{
              translateY:translateY.interpolate({
                //Valores que o translate y pode chegar
                inputRange:[-350,0,300],
                //Qual o valor da saida na interface real
                outputRange:[-50,0,300],
                //O que acontece quando extrapola os valores
                extrapolate:'clamp',
              }),
            }]
          }} */}
          <Scrollcards>
            <CardLimite >
              <BoxDadosContainer>
                <BoxDados>
                  <CardHeader>
                    <Icon name="payment" size={28} color="#999"/>
                    <Text style={styles.conta}>
                      Cartão de crédito
                    </Text> 
                  </CardHeader>
                  <CardContent>
                    <TitleFatura>Fatura atual</TitleFatura>
                    <DescriptionFatura>
                      R$
                      <Bold>
                        150
                      </Bold>,00
                    </DescriptionFatura>
                    <BoxLimite>
                      <TextLimite>Limite disponivel </TextLimite>
                      <NumeroLimite>R$ 50,00</NumeroLimite>
                    </BoxLimite>
                  </CardContent>
                </BoxDados>
                <BoxCores>
                  <Cor1></Cor1>
                  <Cor2></Cor2>
                  <Cor3></Cor3>
                </BoxCores>
                              
              </BoxDadosContainer>
              <CardFooter>
                    <Icon name="fullscreen" size={19}></Icon>
                    <Annotation>
                      Compra feita no Mercado Livre
                    </Annotation>
              </CardFooter>
            </CardLimite>

            <Card >
              <CardHeader>
                <Icon name="attach-money" size={28} color="#999"/>
                <Text style={styles.conta}>
                  Conta
                </Text> 
                <Icon name="visibility-off" size={28} color="#999"/>
              </CardHeader>
              <CardContent>
                <Title>Saldo disponível</Title>
                <Description>R$ 29.900,00</Description>
              </CardContent>
              <CardFooter>
                <Icon name="payment" size={19}></Icon>
                <Annotation>
                  Trânsferencia recebida de R$20.000,00
                </Annotation>
              </CardFooter>
            </Card>

            <CardReward >
              <Icon name="redeem" size={28}/>
              <CardContent>
                <TitleReward>Nubank Rewards</TitleReward>
                <DescriptionRewards>
                  Acumule pontos que nunca expiram e troque por passagens 
                  aéreas ou serviços que você realmente usa
                </DescriptionRewards>
                <RewardButton onPress={()=>{}}>
                    <RewardButtonText>
                        Ative o seu rewards
                    </RewardButtonText>
                </RewardButton>
              </CardContent>
            </CardReward>

          </Scrollcards>
        {/* </PanGestureHandler> */}


      </Content>
      <Tabs translateY={translateY}></Tabs>
    </Container>
  )
}

const styles = StyleSheet.create({
  conta:{
      marginRight:'auto',
      color:'#999'
  },
 
});

