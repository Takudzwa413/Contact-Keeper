import React ,{ useState  }from 'react'

const Register = () => {
    const [user, setUser] =useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const { name, email, password, password2} = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.terget.value})

    const onSubmit = e =>{
        e.preventDefault();
        console.log('Register Submit')
    }

    return (
        <div className='form-container'>
            <h1>
                Account <span className='text-primary'>Register</span>
            </h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'> 
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' value={name} onChange={onChange}/>
                </div>

                <div className='form-group'> 
                    <label htmlFor='email'>Email Address</label>
                    <input type='email' name='email' value={name} onChange={onChange}/>
                </div>
                
                <div className='form-group'> 
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' value={name} onChange={onChange}/>
                </div>

                <div className='form-group'> 
                    <label htmlFor='password2'>Confirm Password</label>
                    <input type='password2' name='password2' value={name} onChange={onChange}/>
                </div>
                <input type='submit' value='Register' className='btn btn-primary btn--block'></input>
            </form>
            
        </div>
    )
}

export default Register
