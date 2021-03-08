import React from "react";
import { useParams } from "react-router-dom";

const SinglePage = () => {
    const aboutData = [
        {
            slug: 'about-app',
            title: 'about the app',
            description: 'blablabla',
        },
        {
            slug: 'about-author',
            title: 'about the author',
            description: 'sasaasasas'

        }
    ]

    const {slug}=useParams();
    const aboutContent=aboutData.find(item=>item.slug===slug);
    const {title,description}=aboutContent

    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default SinglePage