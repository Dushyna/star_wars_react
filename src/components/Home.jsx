import Hero from "./Hero.jsx";
import DreamTeam from "./DreamTeam.jsx";
import OpeningCrawl from "./OpeningCrawl.jsx";

const Home = () => {
    return (
        <div>
            <main className="clearfix">
                <Hero/>
                <DreamTeam/>
                <OpeningCrawl/>
            </main>
        </div>
    );
};

export default Home;