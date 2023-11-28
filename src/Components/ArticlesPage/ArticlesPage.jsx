import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SingleArticle from "./SingleArticle";

const ArticlePage = () => {
  const { id } = useParams("id");
  const allArticles = useSelector((state) => state.MyFetches.articles);

  return (
    <div id="articlesPage">
      {allArticles.length > 0 ? (
        <div>
          {allArticles.map((singleArticle) =>
            singleArticle.id === id ? (
              <SingleArticle article={singleArticle} />
            ) : null
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default ArticlePage;
