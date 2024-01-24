import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'

import './index.css'

const GameRulesView = () => (
  <div>
    <Popup
      modal
      trigger={
        <button type="button" className="button">
          RULES
        </button>
      }
      className="popup-content"
    >
      {close => (
        <div className="modal-container">
          <button
            type="button"
            className="close-button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <RiCloseLine size={20} color="#231f20" aria-label="close" />
          </button>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
              className="thumbnail"
            />
          </div>
        </div>
      )}
    </Popup>
  </div>
)

export default GameRulesView
