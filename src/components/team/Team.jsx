import { GetTeam } from '../../firebase/functions/getTeam'
import './team.css'

const Team = () => {
    const { team } = GetTeam();
  return (
    <section className="team">
        <section className="section__title">
            <h2>meet our team</h2>
        </section>
        <section className="section__content">
            {team.map((member)=>(
                <div className="member" key={member.id}>
                    <div className="card">
                        <div className="top">
                            <img src={member.img} alt="member-img" />
                        </div>

                        <div className="bottom">
                            <h3>{member.name}</h3>
                            <p>{member.position}</p>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    </section>
  )
}

export default Team