import Friend from "./Friend.jsx";
import {friends} from "../utils/constants.js";

const DreamTeam = () => {
    return (
        <section className="float-end w-50 row border border-warning rounded-bottom-5 ms-2 me-0">
            <h2 className="text-center">Dream team</h2>
            {friends.map((f, i) =>
                <Friend picture={f} pos={i + 1} key={i}/>)}
        </section>
    );
};

export default DreamTeam;