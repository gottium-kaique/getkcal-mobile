import React from "react"
import { RectButton } from "react-native-gesture-handler"
import { ButtonContent, Text } from "./styles"

interface ButtonProps {
  onPress: () => any
  text: string
}

const Button: React.FC <ButtonProps> = ({ onPress, text }) => {
  return (
    <RectButton 
      style={{marginTop: 10,}} 
      onPress={onPress}
    >
      <ButtonContent 
        colors={["#FF7373", "#FDDB33"]} 
        start={[0, 2]} 
        end={[1, 0]}
      >
        <Text>{text}</Text>
      </ButtonContent>
    </RectButton>
  )
}

export default Button