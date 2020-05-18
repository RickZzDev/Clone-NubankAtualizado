import React from 'react'
import { Container, Top,Logo,Title } from './style'
import logo from '../../assets/Nubank_Logo.png'
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont()

export default function Header({tamanho,setTamanho}){
    return(
        <Container>
            <Top>
                <Logo source={logo}/>
                <Title>Gustavo Julio</Title>
            </Top>
            <Icon name="keyboard-arrow-down" onPress={()=>{
                tamanho == "40%" ? 
                setTamanho(tamanho = "0%")
                :
                setTamanho(tamanho = "40%")
            }} size={20} color="#FFF"></Icon>

        </Container>
    )
}