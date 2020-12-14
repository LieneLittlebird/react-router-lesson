import doggo from "../../assets/images/doggo.jpg";

const Home = () => {
    return (
        <div>
            This is the Home page
            <div>Foo bar baz</div>
            <img src={doggo} alt="dogmeme" style={{ maxWidth: "200px" }} />
        </div>
    );
};

export default Home;
