import {useEffect, useState} from "react";
import {base_url, period_month} from "../utils/constants.js";
import hero from "../assets/main.jpg";
import Text from "./ui/Text.jsx";

const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState({});
    useEffect(() => {
        const hero = JSON.parse(localStorage.getItem("hero"));
        if (hero && ((Date.now() - hero.timestamp) < period_month)) {
        setAboutMe(hero.payload);
        }else{
            fetch(`${base_url}/v1/peoples/1`)
                .then(res => res.json())
                .then(data => {
                    setAboutMe(data);
                    localStorage.setItem("hero", JSON.stringify({
                        payload: data, timestamp: Date.now()
                    }));
                })
                .catch(() => {
                    setAboutMe({});
                });
        }


    }, [])
    if (Object.keys(aboutMe).length) {
        return (<div>
                <main className=" flex ">
                    <div className=" w-1/2 m-2 ">
                        <img className="w-full rounded-md" src={hero} alt="Luke Skywalker"/>
                    </div>
                    <div
                        className=" w-1/2  border border-main rounded-md m-2 p-2">
                        <Text>{`Name: ${aboutMe.name}`} </Text>
                        <Text>{`Gender: ${aboutMe.gender}`}</Text>
                        <Text>{`Skin color: ${aboutMe.skin_color}`}</Text>
                        <Text>{`Hair color: ${aboutMe.hair_color}`}</Text>
                        <Text>{`Height: ${aboutMe.height}`}</Text>
                        <Text>{`Eye color: ${aboutMe.eye_color}`}</Text>
                        <Text>{`Mass: ${aboutMe.mass}`}</Text>
                        <Text>{`Birth year: ${aboutMe.birth_year}`}</Text>
                    </div>
                </main>
            </div>
        );
    } else {
        return (
            <Text>
                <svg className="mr-3 size-5 animate-spin bg-main" viewBox="0 0 24 24">
                </svg>
                <span>Loading...</span>
            </Text>
        );
    }

};

export default AboutMe;