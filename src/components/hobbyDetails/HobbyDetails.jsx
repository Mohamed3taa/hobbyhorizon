import './hobbyDetails.css'

// eslint-disable-next-line react/prop-types
const HobbyDetails = ({hobbyDetails}) => {
  return (
    <div className="hobby__details">
                {/* eslint-disable-next-line react/prop-types */}
        <div className="hobby__details-landing"  style={{backgroundImage: `url(${hobbyDetails.img})`}}>
            <div className="hobby__details-overlay">
                {/* eslint-disable-next-line react/prop-types */}
                <h1>{hobbyDetails.name}</h1>
                {/* eslint-disable-next-line react/prop-types */}
                <p>{hobbyDetails.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default HobbyDetails