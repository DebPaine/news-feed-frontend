import './App.css'
import {useEffect, useState} from "react";
import axios from "./utils/axios.ts";

// interface Headlines {
//     articles: any[]
// }

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
        <div className='h-screen bg-white dark:bg-slate-400'>
            {headlines ?
                headlines.map(({publishedAt, title, url, urlToImage}: any) =>
                    <a href={url} target='_blank'>
                        <img key={publishedAt} src={urlToImage} alt={title}/>
                    </a>) :
                <p>Loading .....</p>}
        </div>
    )
}

export default App
