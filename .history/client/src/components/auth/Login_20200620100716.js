import React ,{ useState  }from 'react'

const Login = () => {
    const [user, setUser] =useState({
        email:'',
        password:'',
        
    });

    const {  email, password }= user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.terget.value})

    const onSubmit = e =>{
        e.preventDefault();
        console.log('Login Submit')
    }

    return (
        <div className='form-container'>
            <h1>
                Account <span className='text-primary'>Login</span>
            </h1>
            <form onSubmit={onSubmit}>
               
                <div className='form-group'> 
                    <label htmlFor='email'>Email Address</label>
                    <input type='email' name='email' value={name} onChange={onChange}/>
                </div>
                
                <div className='form-group'> 
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' value={name} onChange={onChange}/>
                </div>

                <input type='submit' value='Login' className='btn btn-primary btn--block'></input>
            </form>
            
        </div>
    )
}

export default Login
