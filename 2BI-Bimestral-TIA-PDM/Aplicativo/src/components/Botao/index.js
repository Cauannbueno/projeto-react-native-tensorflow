import { Button } from "react-native-paper";

export default function Botao(props){
    return (
        <Button 
            mode="outlined"
            children={props.children}
            textColor="white" 
            buttonColor="#63181c"
            onPress={props.onPress} 
        />
    )
}