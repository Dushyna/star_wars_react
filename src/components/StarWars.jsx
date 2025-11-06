import {starWarsInfo} from "../utils/constants.js";
import Text from "./ui/Text.jsx";
const StarWars = () => {
    return (
        <div className="far-galaxy fs-2 lh-2">
          <Text>{starWarsInfo}</Text>
        </div>
    );
};

export default StarWars;