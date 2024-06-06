import { TextInput } from "react-native-paper";


export default function Caixa(props){
    return (
        <TextInput
            mode="outlined" 
            textColor="white" 
            placeholder={props.placeholder}
            onChangeText={props.onChangeText}
            style={{ backgroundColor: "#3a1359", width: "80%", alignSelf: "center",}}
            value={props.value}
        />
    );
}