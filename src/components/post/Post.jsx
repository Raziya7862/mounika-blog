import { Link } from "react-router-dom";
import "./post.css";

export default function Post({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </span>
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="postTitle">
          <Link to="/post/abc" className="link">
            The nature love
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
      Nature is the intricate and diverse system of life that encompasses all living organisms and their environments on Earth. It includes everything from the smallest microorganisms to the vast expanses of oceans, forests, mountains, and deserts. Nature provides essential resources such as clean air, fresh water, fertile soil, and a variety of foods that sustain life. Beyond its practical significance, nature also offers profound beauty and inspiration, with its stunning landscapes, diverse flora and fauna, and intricate ecological interactions. Moreover, spending time in nature has been linked to numerous health benefits, including reduced stress, improved mood, and enhanced overall well-being. However, human activities such as deforestation, pollution, and climate change are threatening the delicate balance of nature, leading to biodiversity loss, habitat destruction, and other environmental crises. Preserving and protecting nature is therefore essential for the health and survival of both humans and the planet as a whole.
      </p>
    </div>
  );
}