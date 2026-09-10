const root = ReactDOM.createRoot(document.getElementById("root"));

const ChildComponent = (props) => {
    const { name, email, section, isStudent } = props.user;

    return (
        <div>
            <h1>Hello {name}</h1>
            <p>Email: {email}</p>
            {section ? <p>Section: {section}</p> : <p>Section not available</p>}
            {isStudent ? <p>Student</p> : <p>Not student</p>}
        </div>
    );
};

const ParentComponent = () => {
    const user = {
        name: "Ayush",
        email: "ayush@example.com",
        section: 16,
        isStudent: true,
    };

    return (
        <div>
            <ChildComponent user={user} />
        </div>
    );
};

root.render(<ParentComponent />);