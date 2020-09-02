import React, { useState } from "react"

import { 
  Wrapper, 
  Header, 
  Content, 
  Img,
  Text,
  Select,
  ResultTitle,
  Result,
  ResultText,
  Input
} from "./styles"

import { 
  Montserrat_400Regular, 
  Montserrat_700Bold, 
  Montserrat_600SemiBold,
  useFonts
} from "@expo-google-fonts/montserrat"

import logo from "../../assets/images/logo.png"

import { Text as TextNotFontLoaded } from "react-native"

import Button from "../../components/Button"

const Home = () => {
  const [gender, setGender] = useState("masculino")
  const [age, setAge] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)
  const [weight, setWeight] = useState<number>(0)
  const [activityLevel, setActivityLevel] = useState<number>(1.2)

  const [maintenance, setMaintenance] = useState<number>(0)
  const [loseWeight, setLoseWeight] = useState<number>(0)
  const [gainWeight, setGainWeight] = useState<number>(0)
  const [tmb, setTmb] = useState<number>(0)

  const [completedForms, setCompletedForms] = useState<boolean | null>(null)

  const [fonts] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
    Montserrat_600SemiBold,
  })

  function calculate() {
    if (weight && height && age) {
      const tmb = Math.round(gender === "female" ?
      (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))
      : (66 + (13.7 * weight) + (5 * height) - (6.8 * age))
      )

      const maintenance = Math.round(tmb * +activityLevel)

      const loseWeight = maintenance - 450
      const gainWeight = maintenance + 450

      console.log(tmb, maintenance, loseWeight, gainWeight)

      setTmb(tmb)
      setMaintenance(maintenance)
      setGainWeight(gainWeight)
      setLoseWeight(loseWeight)
      setCompletedForms(true)
    } else {
      setCompletedForms(false)
    }
  }

  if (!fonts) {
    return (
      <TextNotFontLoaded>
        Carregando a fonte!
      </TextNotFontLoaded>
    )
  }

  return (
    <Wrapper>
      <Header>
        <Img source={ logo } />
      </Header>
      <Content>
        <Text>
          Sexo
        </Text>
        <Select
          onValueChange={ value => setGender(value) }
          selectedValue={ gender }
        >
          <Select.Item value="male" label="Masculino"  />
          <Select.Item value="female" label="Feminino"  />
        </Select>

        <Text>
          Sua idade
        </Text>
        <Input 
          keyboardType="numeric"
          placeholder="Sua idade"
          onChangeText={ text => setAge(+text) }
        />

        <Text>
          Sua altura
        </Text>
        <Input 
          keyboardType="numeric"
          placeholder="Sua altura"
          onChangeText={ text => setHeight(+text) }
        />

        <Text>
          Seu peso
        </Text>
        <Input 
          keyboardType="numeric"
          placeholder="Seu peso"
          onChangeText={ text => setWeight(+text) }
        />

        <Text>Nível de atividade: </Text>

        <Select
          onValueChange={ value => setActivityLevel(value) }
          selectedValue={ activityLevel }
        >
          <Select.Item label="Sedentário" value={1.2}  />
          <Select.Item label="Pouca Atividade" value={1.375}  />
          <Select.Item label="Atividade Moderada" value={1.55}  />
          <Select.Item label="Atividade Intensa" value={1.725}  />
          <Select.Item label="Atividade Muito Intensa" value={1.9}  />
        </Select>

        <Button text="Calcular!" onPress={calculate} />
      </Content>

      {completedForms && (
        <>
        <ResultTitle>
          Aqui está o resultado: 
        </ResultTitle>
        <Result>
          <ResultText>Seu metabolismo basal é de {tmb} calorias.</ResultText>
          
          <ResultText>Para manter o seu peso você precisa consumir em média {maintenance} calorias.</ResultText>
          
          <ResultText>Para perder peso você precisa consumir em média {loseWeight} calorias.</ResultText>
          
          <ResultText>Para ganhar peso você precisa consumir em média {gainWeight} calorias. </ResultText>
        </Result>
      </>
      )}
      {completedForms === false && (
        <ResultTitle style={{marginBottom: 20,}}>
          Preencha os Campos!
        </ResultTitle>
      )}
    </Wrapper>
  )
}


export default Home