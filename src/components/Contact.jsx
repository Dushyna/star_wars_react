import './Contact.css'
import {useEffect, useState} from "react";
import {base_url, period_month} from "../utils/constants.js";

const Contact = () => {
    const [planets, setPlanets] = useState([]);
    useEffect(() => {
        const planetsList=JSON.parse(localStorage.getItem("planetsList"));
        if(planetsList &&((Date.now()-planetsList.timestamp) < period_month)){
            setPlanets(planetsList.payload);
        }else {
            fetch(`${base_url}/v1/planets`)
                .then(res => res.json())
                .then(data => {
                    const planet_arr=data.map(item =>
                        item.name
                    );
                    setPlanets(planet_arr);
                    localStorage.setItem("planetsList",JSON.stringify({
                        payload:planet_arr,timestamp:Date.now()
                    }));
                })
                .catch(() => setPlanets([]));
        }


    }, [])

    return (
        <div className="container">
            <form action="./">

                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                <label htmlFor="country">Planets</label>
                <select id="country" name="country">
                    {planets.map((item) => {
                        return (<option key={item} value={item}>{item}</option>
                        )

                    })}

                </select>

                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>

                <input type="submit" value="Submit"/>

            </form>
        </div>
    );
};

export default Contact;