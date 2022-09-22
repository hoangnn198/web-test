import React, { useEffect } from "react";
import {
    useSearchParams,
    useLocation
} from "react-router-dom";

const DetailUser = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        const params = searchParams.getAll()
        console.log("props: ", params)
    })

    return (
        <div>
            <h1>
                Detail User
            </h1>
        </div>
    )
}

export default DetailUser