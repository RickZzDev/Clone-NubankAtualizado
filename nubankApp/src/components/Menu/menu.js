import React from 'react'
import {WebView} from 'react-native-webview'
import {Container,Code, Nav, NavItem, NavText,SignOutButton,SignOutButtonText} from './styles'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function Menu({translateY,tamanho}){
    return(
        // Estava no menu
        // style={{
        //     opacity:translateY.interpolate({
        //         inputRange:[0,150],
        //         outputRange:[0,1]
        //     })
        // }}
        <Container height={tamanho}> 
            {/* <Code>
                <WebView value="https://rocketseat.com.br"
                size={20}
                bgColor="#FFF"
                fgColor="#8B10AE"/>
            </Code> */}
            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF"/>
                    <NavText>Me ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#FFF"/>
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF"/>
                    <NavText>Configurar cartão</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="smartphone" size={20} color="#FFF"/>
                    <NavText>Configurações do App</NavText>
                </NavItem>
            </Nav>

            <SignOutButton onPress={()=>{}}>
                <SignOutButtonText>
                    Sair do App
                </SignOutButtonText>
            </SignOutButton>
        </Container>
    )
}