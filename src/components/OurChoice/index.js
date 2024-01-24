import './index.css'

const OurChoice = props => {
  const {
    choiceDetails,
    clickedRockButton,
    clickedScissorButton,
    clickedPaperButton,
  } = props

  const onClickRock = () => {
    clickedRockButton(choiceDetails[0].id)
  }

  const onClickPaper = () => {
    clickedPaperButton(choiceDetails[2].id)
  }
  const onClickScissor = () => {
    clickedScissorButton(choiceDetails[1].id)
  }

  return (
    <div className="our-choice-container">
      <button
        type="button"
        data-testid="rockButton"
        onClick={onClickRock}
        className="button-images"
      >
        <img
          key={choiceDetails[0].id}
          src={choiceDetails[0].imageUrl}
          alt={choiceDetails[0].id}
          className="result-images"
        />
      </button>
      <button
        type="button"
        data-testid="scissorsButton"
        onClick={onClickScissor}
        className="button-images"
      >
        <img
          key={choiceDetails[1].id}
          src={choiceDetails[1].imageUrl}
          alt={choiceDetails[1].id}
          className="result-images"
        />
      </button>
      <button
        type="button"
        data-testid="paperButton"
        onClick={onClickPaper}
        className="button-images"
      >
        <img
          key={choiceDetails[2].id}
          src={choiceDetails[2].imageUrl}
          alt={choiceDetails[2].id}
          className="result-images"
        />
      </button>
    </div>
  )
}

export default OurChoice
