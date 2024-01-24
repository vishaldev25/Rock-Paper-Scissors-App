import {Component} from 'react'

import GameRulesView from '../GameRulesView'
import OurChoice from '../OurChoice'

import {
  App,
  Container,
  Header,
  NamesContainer,
  ScoreContainer,
  Heading,
  ColorHeading,
  ColorPara,
} from './styledComponents'

import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class PlayingView extends Component {
  state = {
    score: 0,
    yourImageUrl: '',
    opponentImageUrl: '',
    gameResult: '',
    isClicked: false,
  }

  clickedRockButton = id => {
    this.setState({yourImageUrl: choicesList[0].imageUrl})
    const raandomChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    this.setState({
      opponentImageUrl: raandomChoice.imageUrl,
    })
    if (choicesList[0].id === id && raandomChoice.id === 'SCISSORS') {
      this.setState(prev => ({score: prev.score + 1}))
      this.setState({gameResult: 'YOU WON'})
    } else if (choicesList[0].id === id && raandomChoice.id === 'PAPER') {
      this.setState(prev => ({score: prev.score - 1}))
      this.setState({gameResult: 'YOU LOSE'})
    } else if (choicesList[0].id === id && raandomChoice.id === 'ROCK') {
      this.setState(prev => ({score: prev.score}))
      this.setState({gameResult: 'IT IS DRAW'})
    }
    this.setState(prev => ({isClicked: !prev.isClicked}))
  }

  clickedScissorButton = id => {
    this.setState({yourImageUrl: choicesList[1].imageUrl})
    const raandomChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    this.setState({
      opponentImageUrl: raandomChoice.imageUrl,
    })
    if (choicesList[1].id === id && raandomChoice.id === 'SCISSORS') {
      this.setState(prev => ({score: prev.score}))
      this.setState({gameResult: 'IT IS DRAW'})
    } else if (choicesList[1].id === id && raandomChoice.id === 'PAPER') {
      this.setState(prev => ({score: prev.score + 1}))
      this.setState({gameResult: 'YOU WON'})
    } else if (choicesList[1].id === id && raandomChoice.id === 'ROCK') {
      this.setState(prev => ({score: prev.score - 1}))
      this.setState({gameResult: 'YOU LOSE'})
    }
    this.setState(prev => ({isClicked: !prev.isClicked}))
  }

  clickedPaperButton = id => {
    this.setState({yourImageUrl: choicesList[2].imageUrl})
    const raandomChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)]
    this.setState({
      opponentImageUrl: raandomChoice.imageUrl,
    })
    if (choicesList[2].id === id && raandomChoice.id === 'SCISSORS') {
      this.setState(prev => ({score: prev.score - 1}))
      this.setState({gameResult: 'YOU LOSE'})
    } else if (choicesList[2].id === id && raandomChoice.id === 'PAPER') {
      this.setState(prev => ({score: prev.score}))
      this.setState({gameResult: 'IT IS DRAW'})
    } else if (choicesList[2].id === id && raandomChoice.id === 'ROCK') {
      this.setState(prev => ({score: prev.score + 1}))
      this.setState({gameResult: 'YOU WON'})
    }
    this.setState(prev => ({isClicked: !prev.isClicked}))
  }

  renderOurChoice = () => (
    <OurChoice
      choiceDetails={choicesList}
      clickedRockButton={this.clickedRockButton}
      clickedScissorButton={this.clickedScissorButton}
      clickedPaperButton={this.clickedPaperButton}
    />
  )

  playAgain = () => {
    this.setState(prev => ({isClicked: !prev.isClicked}))
  }

  renderResultsView = () => {
    const {gameResult, yourImageUrl, opponentImageUrl} = this.state
    return (
      <div className="results-container">
        <div className="result-images-container">
          <img src={yourImageUrl} alt="your choice" className="result-images" />
          <img
            src={opponentImageUrl}
            alt="opponent choice"
            className="result-images"
          />
        </div>
        <Heading>{gameResult}</Heading>
        <div>
          <button
            type="button"
            onClick={this.playAgain}
            className="btn btn-primary"
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    )
  }

  render() {
    const {score, isClicked} = this.state
    return (
      <App>
        <Container>
          <Header>
            <NamesContainer>
              <Heading>Rock</Heading>
              <Heading>Paper</Heading>
              <Heading>Scissors</Heading>
            </NamesContainer>
            <ScoreContainer>
              <ColorPara>Score</ColorPara>
              <ColorHeading>{score}</ColorHeading>
            </ScoreContainer>
          </Header>
          {isClicked ? this.renderResultsView() : this.renderOurChoice()}
          <div className="rules-container">
            <GameRulesView />
          </div>
        </Container>
      </App>
    )
  }
}

export default PlayingView
