import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecord from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecord />

            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle("This clone is built from Scratch with React.js(Redux,Firebase)","Top news - 8,122 readers")}
        {newsArticle("Google to pull back on hiring","Top news - 16,725 readers")}
        {newsArticle("Twitter sues Musk for yanking deal","Top news - 6,775 readers")}
        {newsArticle("Is hiring in IT slowing down ?","Top news - 3,011 readers")}
        {newsArticle("Startups feel the financial pinch","Top news - 290 readers")}
        {newsArticle("India's aviation sector to fly high","Top news - 1,128 readers")}
    </div>
  )
}

export default Widgets