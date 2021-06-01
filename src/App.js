import {Helmet} from "react-helmet";
import jsonld from "./jsonld.json";
import { data } from "./dummy";
const App = () => {
  return (
    <>
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(jsonld)}
      </script>
    </Helmet>
    {
          data.map((data)=>(
          <div key={data._id} className="movie_card" id="tomb">
          <div className="info_section">
            <div  className="movie_header">
              <img
                className="locandina"
                src={data.image}
              alt=""></img>
              <ul>
                <li><h1>{data.name}</h1></li>
                <li><h2>Release : {data.datePublished}</h2></li>
                <li>{data.genres.map((genre,i)=> <p key={genre} className="type">{genre}</p>)}</li>
                <li><p className="text">{data.description}</p></li>
              </ul>
            </div>
          </div>
        </div>
        ))
      }
    </>
  );
};

export default App;
