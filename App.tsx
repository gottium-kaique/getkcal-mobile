import React from "react"
import Home from "./src/screens/Home"
import { StatusBar } from "react-native"
import { Wrapper, WrapperScroll } from "./src/styles"

const App = () => {
  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="#282828" 
        translucent 
      />
      <Wrapper>
        <WrapperScroll>
          <Home/>
        </WrapperScroll>
      </Wrapper>
    </>
  )
}

export default App