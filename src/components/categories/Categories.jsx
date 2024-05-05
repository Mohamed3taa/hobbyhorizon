import { useNavigate } from 'react-router-dom';
import { GetCategories } from '../../firebase/functions/getCategories';
import './categories.css'

const Categories = () => {
    const { categories } = GetCategories()
    const navigate = useNavigate();
    
  return (
    <section className="categories" id="categories">
        <section className="section__title">
            <h2>Explore Our Hobbies</h2>
        </section>
        <section className="section__content">
            {categories.map((category)=>(
                <div className="category" key={category.id}>
                    <div className="card">
                        <div className="top" style={{backgroundColor:category.color}}>
                            <img src={category.img} alt="category-img" />
                        </div>
                        <div className="bottom">
                            <div className="details">
                                <h3>{category.title}</h3>
                                <p>{category.desc}</p>
                            </div>
                            <button onClick={()=> navigate(`/hobbies/${category.link}`)}>
                                Explore Hobby
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    </section>
  )
}

export default Categories