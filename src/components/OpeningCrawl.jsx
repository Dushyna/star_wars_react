import {useEffect, useState} from "react";
import {base_url} from "../utils/constants.js";
import Text from "./ui/Text.jsx";

const OpeningCrawl = () => {
    const [openingCrawl, setOpeningCrawl] = useState();
    useEffect(() => {
        const opening_crawl = sessionStorage.getItem("opening_crawl");
        if (opening_crawl) {
            setOpeningCrawl(opening_crawl);
        } else {
            const episode = Math.floor(Math.random() * 6) + 1;
            fetch(`${base_url}/v1/films/${episode}`)
                .then(res => res.json())
                .then(data => {
                    setOpeningCrawl(data.opening_crawl);
                    sessionStorage.setItem("opening_crawl", data.opening_crawl);
                })
                .catch(() => setOpeningCrawl('Error on fetch opening crawl'));
            //return () => console.log(" component OpeningCrawl unmounted");

        }
    }, [])
    if (openingCrawl) {
        return (
            <Text>{openingCrawl}</Text>
        );
    } else {
        return (
            <Text>
                <svg className="mr-3 size-5 animate-spin bg-main" viewBox="0 0 24 24">
                </svg>
                <span>Loading...</span>
            </Text>
        )
    }


};

export default OpeningCrawl;