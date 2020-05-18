import styled from 'styled-components/native'
import {Animated} from 'react-native'
import {StyleSheet} from 'react-native'

export const Container = styled.View`
    flex:1;
    background:#8B10AE;
    
`;

export const Content = styled.View`
    flex:1;
    z-index:5;
    margin-top:45px;
`

export const Card = styled.View`
    background:#fff;
    border-radius:4px;
    margin: 0 20px;
    margin-bottom:20px;
    flex:1;  
`

export const CardReward = styled.View`
    background:#fff;
    border-radius:4px;
    margin: 0 20px;
    margin-bottom:20px;
    flex:1;  
    align-items:center;
`

export const CardLimite = styled.View`
    background:#fff;
    border-radius:4px;
    margin: 0 20px;
    margin-bottom:20px;
    background-color:yellow;
    flex:1;
    flex-direction:column
`

export const BoxDados = styled.View`
    background:#fff;
    border-radius:4px;
    width:100%;
`

export const BoxDadosContainer = styled.View`
    background:#fff;
    border-radius:4px;
    width:97%;
    background-color:blue;
    flex:1;
    flex-direction:row
`

export const BoxCores = styled.View`
    background:#fff;
    border-radius:4px;
    width:3%;
    background-color:black;
`

export const Cor1 = styled.View`
    width:100%;
    height:45%;
    background-color:#f5b400;   
`
export const Cor2 = styled.View`
    height:35%;
    background-color:#13cbcf;   
`
export const Cor3 = styled.View`
    height:20%;
    background-color:#13cf3c ;  
`

export const Scrollcards = styled.ScrollView`
    flex:1;
    border-radius:4px;
    height:100%;
    left:0;
    right:0;
    top:0px;
`

export const CardHeader = styled.View`
flex-direction:row;
justify-content:space-between;
align-items:center;
padding: 30px 17px;
`
export const CardContent = styled.View`
    flex:1;
    padding:0 30px;
    justify-content:center;
    margin-bottom:40px;
`

export const CardFooter = styled.View`
flex-direction:row;
padding:30px;
background:#eee;
border-radius:4px;
margin-top:auto;
`


export const Title = styled.Text`
    font-size:13px;
    color:#999;
`
export const TitleReward = styled.Text`
    font-size:18px;
    text-align:center;
    font-weight:bold;
    color:black;
`

export const TitleFatura = styled.Text`
    font-size:15px;
    color:#999;
    font-weight:bold;
    color:#03a9fc;
`
export const Bold = styled.Text`
font-weight:bold;
color:#03a9fc;
`
export const DescriptionFatura = styled.Text`
font-size:32px;
margin-top:3px;
color:#03a9fc;
`
export const DescriptionRewards = styled.Text`
font-size:16px;
width:250px;
margin-top:3px;
color:black;
text-align:center;
`

export const BoxLimite = styled.View`
flex-direction:row;
border-radius:4px;
`

export const TextLimite = styled.Text`
font-size:14px;
margin-top:3px;
color:black;
`
export const NumeroLimite = styled.Text`
font-size:14px;
margin-top:3px;
font-weight:bold,
color:#00851f;
`

export const Description = styled.Text`
font-size:32px;
margin-top:3px;
color:#333;
`

export const Annotation = styled.Text`
font-size:13px;
color:#333;
margin-left:3px;
`

export const RewardButton = styled.TouchableOpacity`
    border-width:${StyleSheet.hairlineWidth}px;
    border-color:#8B10AE;
    border-radius:4px;
    justify-content:center;
    align-items:center;
    padding:12px;
    margin-top:15px;
`

export const RewardButtonText = styled.Text`
color:#8B10AE;
font-weight:bold;
font-size:13px;
`