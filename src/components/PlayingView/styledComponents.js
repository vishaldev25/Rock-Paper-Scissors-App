import styled from 'styled-components'

export const App = styled.div`
  background-color: #223a5f;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  padding: 30px;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`

export const Header = styled.div`
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 18px;
`
export const NamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
  border-radius: 12px;
  align-self: center;
  padding: 12px;
`
export const ScoreContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding: 12px;
  border-radius: 12px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-weight: 800;
  color: #ffffff;
  font-size: 25px;
`
export const ColorHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: bold;
  color: #223a5f;
  font-size: 40px;
`
export const ColorPara = styled.p`
  font-family: 'Roboto';
  font-weight: bold;
  color: #223a5f;
  font-size: 20px;
`
