import {GetArticles} from "./queries/getArticles";
import {useQuery} from "@apollo/client";
import {Link} from "react-router-dom";
function App() {
  const {loading, error, data} = useQuery(GetArticles);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const articles = data.Articles.items;

  return (
    <div>
      <h1>My blog site</h1>
      <ul>
        {articles.map((article) => (

          //List the fetched articles
          <li key={article._id}>
            <Link to={article._slug}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
