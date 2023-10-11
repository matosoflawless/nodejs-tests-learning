/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'


function Card({post}) {

    
    return(
        <div className="card">
            <Link className="link" to={`/post/${post.id}`}>
            <span className="title">{post.title}</span>
            <img className="cardImg" src={post.img} alt="img" />
            <p className="desc"> {post.desc} </p>
            <button className="cardButton"> Read More</button>
            </Link>
        </div>
    )
}

export default Card