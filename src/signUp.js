import './signUp.css';
function SignUp(){
    return(
        <div className="full min-vw-100 d-flex row w-100">
            <div className="text-light left text-start w-50 ms-5 col-sm">
            <h1 className='mb-3 pt-3'><i>Sign Up</i></h1>
            <h6><i>First Name</i></h6>
            <input className="form-control inp" placeholder='Enter your first name' type='text' required></input>
            <h6><i>Middle Name</i></h6>
            <input className="form-control inp" placeholder='Enter your middle name' type='text'></input>
            <h6><i>Last Name</i></h6>
            <input className="form-control inp" placeholder='Enter your last name' type='text'></input>
            <h6><i>Email Address</i></h6>
            <input className="form-control inp" placeholder='Enter your email address' type='email'></input>
            <h6><i>Phone Number</i></h6>
            <input className="form-control inp" placeholder='Enter your phone number' type='number'></input>
            <h6><i>Password</i></h6>
            <input className="form-control inp" placeholder='Enter your Password' type='password'></input>
            <h6><i>Re-Password</i></h6>
            <input className="form-control inp" placeholder='Re-enter your password' type='password'></input>
            <button className='btn btn-success button'>Sign Up</button>
            </div>
            <div className='text-light text-start col-sm right ms-5 pt-2 me-5'>
                <h1 className='text-warning text-center'><i>Recipe Finder</i></h1>
                <h2><i>
"Culinary Exploration Awaits: Embark on a Gastronomic Journey with Our Recipe Finder – Sign Up Today for a World of Flavor!"</i></h2>
                <h3><i>Tailored to your taste preferences, our algorithm delivers handpicked recipes, ensuring a delightful and personalized cooking experience.</i></h3>
                <h3><i>Join a vibrant community of food enthusiasts, share your culinary creations, and engage in discussions with fellow members to elevate your cooking skills together.</i></h3>
                </div>
        </div>
    )
}
export default SignUp;
