function Profile( props){
    console.log( props );
    return(
        <div>
            <h2>
                Welcome back {props.fN} {props.lastName}
            </h2>
            <h3>
                Your instructor is {props.instructor}
            </h3>
            <p>
                Age: {props.age}
            </p>
            <button onClick={() => props.printHello() }>
                Hello
            </button>
        </div>
    );
}

export default Profile;