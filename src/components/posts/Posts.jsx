import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://static.vecteezy.com/system/resources/thumbnails/025/284/015/small_2x/close-up-growing-beautiful-forest-in-glass-ball-and-flying-butterflies-in-nature-outdoors-spring-season-concept-generative-ai-photo.jpg" />
      <Post img="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"/>
      <Post img="https://static.vecteezy.com/system/resources/thumbnails/024/669/482/small_2x/mountain-countryside-landscape-at-sunset-dramatic-sky-over-a-distant-valley-green-fields-and-trees-on-hill-beautiful-natural-landscapes-of-the-carpathians-generative-ai-variation-8-photo.jpeg"/>
      <Post img="https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg"/>
      <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHAk4HS_UjYOlIatx4b5EAIz1JVtkc2zNaQrHyeaRotw&s"/>
    </div>
  );
}