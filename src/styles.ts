import styled from "styled-components/native"
import { StatusBar, Platform } from "react-native"

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  margin-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`

export const WrapperScroll = styled.ScrollView`
  flex: 1;
  background: #282828;
`