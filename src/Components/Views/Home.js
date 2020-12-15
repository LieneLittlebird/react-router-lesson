import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSleigh, faTrash } from "@fortawesome/free-solid-svg-icons";
import doggo from "../../assets/images/doggo.jpg";

const Home = () => {
    return (
        <div>
            This is the Home page component
            <div>Foo bar baz</div>
            <img src={doggo} alt="dogmeme" style={{ maxWidth: "200px" }} />
            <button className="btn btn-primary">
                <FontAwesomeIcon icon={faSleigh} />
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
};

export default Home;
