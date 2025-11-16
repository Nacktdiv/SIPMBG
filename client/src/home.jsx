import React from "react";
import Navbar from "./component/navbar";
import { IoMenu } from "react-icons/io5"

function Home() {
    return (
        <div>
            <Navbar />
            <IoMenu className="text-2xl" />
            <h2>Welcome to the Home Page</h2>
            <p>This is the main content of the home page.</p>
        </div>
    )
}

export default Home