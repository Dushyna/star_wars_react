import {useEffect, useState} from "react";
import {base_url, period_month} from "../utils/constants.js";
import Label from "./ui/Label.jsx";
import Input from "./ui/Input.jsx";

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
        <div className="flex justify-center m-2">
            <form className="flex flex-col gap-2 w-1/2" action="./">

                <Label >First Name</Label>
                <Input name="firstname" placeholder="Your name.."/>

                <Label >Last Name</Label>
                <Input name="lastname" placeholder="Your last name.."/>

                <Label >Planets</Label>
                <select className='bg-cyan-50 p-4 border rounded-2xl' name="planet">
                    {planets.map((item) => {
                        return (<option key={item} value={item}>{item}</option>
                        )

                    })}
                </select>

                <Label >Subject</Label>
                <textarea className='bg-cyan-50 p-4 border rounded-2xl' name="subject" placeholder="Write something.."></textarea>

                <input className='border rounded-2xl text-center bg-red border-main p-4  cursor-pointer hover:bg-red-500
              hover:text-white' type="submit" value="Submit"/>

            </form>
        </div>
    );
};

export default Contact;