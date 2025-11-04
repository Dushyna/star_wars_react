import {useEffect, useState} from "react";
import {base_url} from "../utils/constants.js";
import hero from "../assets/main.jpg";

const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState({});
    useEffect(() => {
        fetch(`${base_url}/v1/peoples/1`)
            .then(res => res.json())
            .then(data => setAboutMe(data))
            .catch(() => {
                setAboutMe({});
            });
    }, [])
    if (Object.keys(aboutMe).length) {
        return (<div>
                <main className="clearfix d-flex justify-content-between">
                    <div className=" w-50 me-3">
                        <img className="w-100" src={hero} alt="Luke Skywalker"/>
                    </div>
                    <div
                        className=" w-50 justify-content-center border border-warning rounded-bottom-5 ms-2 me-1 ps-2 pt-2">
                        <p className="far-galaxy fs-2 lh-2">{`Name: ${aboutMe.name}`} </p>
                        <p className="far-galaxy fs-2 lh-2">{`Gender: ${aboutMe.gender}`}</p>
                        <p className="far-galaxy fs-2 lh-2">{`Skin color: ${aboutMe.skin_color}`}</p>
                        <p className="far-galaxy fs-2 lh-2">{`Hair color: ${aboutMe.hair_color}`}</p>
                        <p className="far-galaxy fs-2 lh-2">{`Height: ${aboutMe.height}`}</p>
                        <p className="far-galaxy fs-2 lh-2">{`Eye color: ${aboutMe.eye_color}`}</p>
                        <p className="far-galaxy fs-2 lh-2">{`Mass: ${aboutMe.mass}`}</p>
                        <p className="far-galaxy fs-2 lh-2">{`Birth year: ${aboutMe.birth_year}`}</p>
                    </div>
                </main>
            </div>
        );
    } else {
        return (
            <p className="far-galaxy fs-2 lh-2">
                <span className={'spinner-border spinner-border-sm'}> </span>
                <span className={'spinner-grow spinner-grow-sm'}>Loading...</span>
            </p>
        );
    }

};

export default AboutMe;