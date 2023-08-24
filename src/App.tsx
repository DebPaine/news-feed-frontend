import './App.css'
import {useEffect, useState} from "react";
import axios from "./utils/axios.ts";

function App() {
    const [headlines, setHeadlines] = useState<any>(null)

    useEffect(() => {
        // IIFE
        (async () => {
            try {
                const response = await axios.get('/headlines')
                console.log(JSON.parse(response.data))
                setHeadlines(JSON.parse(response.data)?.articles)
            } catch (err) {
                console.error(err)
            }
        })()
    }, []);

    return (
        <div className='tile is-ancestor is-flex is-flex-wrap-wrap box'>
            {headlines ?
                headlines.map(({publishedAt, title, url, urlToImage, description}: any) =>
                    <div className='tile is-parent'>
                        <a href={url} target='_blank' className='tile is-child box notification is-info is-light'>
                            <article>
                                <figure className='image is-128x128'>
                                    <img key={publishedAt} src={urlToImage} alt={title}/>
                                </figure>
                                <p className='is-size-7'>{description}</p>
                            </article>
                        </a>
                    </div>) :
                <p>Loading .....</p>}
        </div>
    )
}

export default App
