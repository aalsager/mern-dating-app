import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import IconButton from '@material-ui/core/IconButton'

const SwipeButtons = ({onNext, onReset}) => {
    return (
        <div className="swipeButtons">
            <IconButton onClick={onReset} className="swipeButtons__repeat">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton onClick={onNext} className="swipeButtons__left">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton onClick={onNext} className="swipeButtons__star">
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton onClick={onNext} className="swipeButtons__right">
                <FavoriteIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
