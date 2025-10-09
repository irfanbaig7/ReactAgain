import React from 'react'
import { useFetch } from '../hooks/useFetch'

const FetchProjects = () => {

    // example API
    const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    console.log(data);
    

    if (loading) return <p className="text-center text-lg text-blue-500">{loading}</p>;
    if (error) return <p className="text-center text-red-500 font-semibold">{error}</p>;


    return (
        <div className="p-4">
            <h2 className="text-2xl text-center font-bold mb-4">🎯 Fetched Projects</h2>
            <ul className="space-y-3">
                {data.map((item) => (
                    <li
                        key={item.id}
                        className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg shadow"
                    >
                        <h3 className="font-semibold text-lg">{item.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{item.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FetchProjects