import React from 'react'
import { Container,TabsContainer,TabItem,TabText } from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'


export default function Tabs({translateY}){
    return(
        <Container style={{
            transform:[{
                translateY: translateY.interpolate({
                    inputRange:[0,350],
                    outputRange:[0,30]
                })
            }],
            opacity:translateY.interpolate({
                inputRange:[0,150],
                outputRange:[1,0]
            })
        }}>
            <TabsContainer>
                <TabItem>
                    <Icon name="person-add" size={30} color="#FFF"></Icon>
                    <TabText>Indicar Amigos</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="chat-bubble-outline" size={30} color="#FFF"></Icon>
                    <TabText>Cobrar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-downward" size={30} color="#FFF"></Icon>
                    <TabText>Depositar</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="arrow-upward" size={30} color="#FFF"></Icon>
                    <TabText>Transferir</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="smartphone" size={30} color="#FFF"></Icon>
                    <TabText>Recarregue celular</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="sort" size={30} color="#FFF"></Icon>
                    <TabText>Ajustar limite</TabText>
                </TabItem>
                <TabItem>
                    <Icon name="lock" size={30} color="#FFF"></Icon>
                    <TabText>Bloquear cartão</TabText>
                </TabItem>
             
            </TabsContainer>
        </Container>
    )
}