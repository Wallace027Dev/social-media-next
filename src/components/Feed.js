import "../styles/Feed.css";
import clockIcon from "../images/clock.svg";
import emptyFolderIcon from "../images/empty-folder.svg";
import loader from "../images/loader-primary.svg";
import FeedStatus from "./FeedStatus";
import cloudErrorIcon from "../images/cloud-error.svg";

export default function Feed(props) {
  if (props.isLoading) {
    return <img src={loader} alt="Loading" className="spin" />;
  }

  if (props.hasError) {
    return (
      <FeedStatus
        image={cloudErrorIcon}
        title="Algo deu errado"
        subtitle="Sinto muito. Página em desenvolvimento."
      />
    );
  }

  if (props.posts.length === 0) {
    return (
      <FeedStatus
        image={emptyFolderIcon}
        title="Não encontrou nada"
        subtitle="Parece que você e seus amigos não postaram nada. Comece a escrever uma
    nova história!"
      />
    );
  }

  return (
    <>
      <header>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </header>

      <section className="feed">
        {props.posts.map((post) => (
          <article key={post.id}>
            <p>{post.content}</p>

            <footer>
              <div className="user-details">
                <img src={post.imagePath} alt="User" />
                <strong>{post.userName}</strong>
              </div>

              <div className="time">
                <img src={clockIcon} alt="Clock" />
                <span>
                  Publicado em {post.publishedAt.toLocaleDateString("pt-br")}
                </span>
              </div>
            </footer>
          </article>
        ))}
      </section>
    </>
  );
}
