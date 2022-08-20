
const page = (
    <div className="m-4">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" height="40px" className="mb-3" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

ReactDOM.render(page , document.getElementById("root"))