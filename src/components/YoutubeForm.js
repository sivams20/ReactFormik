import React from "react";

function YoutubeForm(){
    return(
        <div>
            <form>
                <label>Name</label>
                <input type="text" id="name" name="name" />
                <label>Email</label>
                <input type="text" id="email" name="email" />
                <label>Channel</label>
                <input type="text" id="channel" name="channel" />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default YoutubeForm;
