import '../post/post.css';
import Avatar from "../../assets/img/avatar.jpg"
import Chavo from "../../assets/img/chavo.jpg"
export function Post() {


    return (
        <>
            <div className="post_divider">
                <article className="post">
                    <div className="post_profile">
                        <img className="post_image" src={Avatar} alt="" />
                        <div className="username">
                            <h5 className="not-margin post-username"> 
                                Jesus G.
                            </h5>
                            <span className="post_date">
                                4 Horas
                            </span>
                        </div>
                    </div>
                    <div className="post-description">
                        <p className='post-text'>
                            Figma ipsum component variant main layer. Boolean frame scale horizontal vertical component team link.
                        </p>
                    </div>
                    <div className="post_banner">
                        <img className="post_thumbnail" src={Chavo} alt="" />
                    </div>
                    <div className="post_interactions">
                        <nav className="post_interactions_nav">
                            <li>
                                <span className="post_interactions_icon"></span>
                                <a href="" className="post_interactions_link">10 me gusta</a>
                            </li>
                            <li>
                                <span className="post_interactions_icon"></span>
                                <a href="" className="post_interactions_link_inherit ">2 Comentarios</a>
                            </li>
                            <li>
                                <span className="post_interactions_icon"></span>
                                <a href="" className="post_interactions_link">0 Compartir</a>
                            </li>
                        </nav>
                    </div>
                </article>
                <div className="post_bottom">
                    <div className="post_bottom_interactions">
                        <span className="post_interactions_icon"></span>
                        <a href="" className="post_interactions_link">10 me gusta</a>
                    </div>
                    <div className="d-flex-beetween">
                        <div className="post_bottom_interactions">
                            <span className="post_interactions_icon"></span>
                            <a href="" className="post_interactions_link">2 Comentarios</a>
                        </div>
                        <div className="post_bottom_interactions">
                            <span className="post_interactions_icon"></span>
                            <a href="" className="post_interactions_link">0 Compartir</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}