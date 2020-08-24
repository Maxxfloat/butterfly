import React from 'react';
import './Gettingsize.css';

const Size = () => {
    return (
        <div>
            <div className="main-block">
                <h1>Registration</h1>
                <form action="/"><hr />
                <div className="account-type"><input id="radioOne" checked="checked" name="account" type="radio" value="none" /> <label className="radio" for="radioOne">Personal</label> <input id="radioTwo" name="account" type="radio" value="none" /> <label className="radio" for="radioTwo">Company</label></div>
                <hr /><label id="icon" for="name"></label> <input id="name" name="name" required="" type="text" placeholder="Email" /> <label id="icon" for="name"></label> <input id="name" name="name" required="" type="text" placeholder="Name" /> <label id="icon" for="name"></label> <input id="name" name="name" required="" type="password" placeholder="Password" /><hr />
                <div className="gender"><input id="male" checked="checked" name="gender" type="radio" value="none" /> <label className="radio" for="male">Male</label> <input id="female" name="gender" type="radio" value="none" /> <label className="radio" for="female">Female</label></div>
                <hr />
                <div className="btn-block">
                <p>By clicking Register, you agree on our <a href="https://www.w3docs.com/privacy-policy">Privacy Policy for W3Docs</a>.</p>
                <button type="submit">Submit</button></div>
                </form></div><div className="main-block">
                <h1>Registration</h1>
                <form action="/"><hr />
                <div className="account-type"><input id="radioOne" checked="checked" name="account" type="radio" value="none" /> <label className="radio" for="radioOne">Personal</label> <input id="radioTwo" name="account" type="radio" value="none" /> <label className="radio" for="radioTwo">Company</label></div>
                <hr /><label id="icon" for="name"></label> <input id="name" name="name" required="" type="text" placeholder="Email" /> <label id="icon" for="name"></label> <input id="name" name="name" required="" type="text" placeholder="Name" /> <label id="icon" for="name"></label> <input id="name" name="name" required="" type="password" placeholder="Password" /><hr />
                <div className="gender"><input id="male" checked="checked" name="gender" type="radio" value="none" /> <label className="radio" for="male">Male</label> <input id="female" name="gender" type="radio" value="none" /> <label className="radio" for="female">Female</label></div>
                <hr />
                <div className="btn-block">
                <p>By clicking Register, you agree on our <a href="https://www.w3docs.com/privacy-policy">Privacy Policy for W3Docs</a>.</p>
                <button type="submit">Submit</button></div>
                </form>
            </div>
        </div>
    )
}

export default Size;