function CreateAccount() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');

    return (
        <Card 
            bgcolor = "primary"
            header = "Create Account"
            status={status}
            body={ show ? <CreateForm setShow={setShow} /> :
            <CreateMsg setShow={setShow} />}
        />    
    );
}    

function CreateMsg(props) {
    return (
        
        <><h5>Success</h5><button type="submit" className="btn btn-light" onClick={() => props.setShow(true)}>Add Another Account</button></>
          
    );
}

function CreateForm(props) {
    const [name,setName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    // const ctx = React.useContext(UserContext);

    // function handle() {
    //     console.log(name, email, password);
    //     ctx.users.push({name,email,password});
    //     props.setShow(false);
    // }

    function handle() {
        console.log(name, email, password);
        const url = `/account/create/${name}/${email}/${password}`;
        (async () => {
            let res = await fetch(url);
            let data = await res.json();
            console.log(data);
        })();
        props.setShow(false);
    }

    return (
        <div className="card text-bg-primary mb-3" style={{maxWidth: "18rem", marginLeft: 'auto', marginRight: 'auto'}}>
        {/* <div className="card-header">Create Account</div>  ... This is created by the Car component */}
        <div className="card-body">

            <h2>Name</h2>
            <br/>
            <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)}/>
            <br/> 
    
            <h2>Email Address</h2>
            <br/>
            <input type="password" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.currentTarget.value)}/>
            <br/>
    
            <h2>Password</h2>
            <br/>
            <input type="password" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.currentTarget.value)}/>
            <br/> 
    
            <button type="submit" className="btn btn-outline-dark" id="submit" onClick={handle}>Create Account</button>
            <div id="createStatus"></div>
            
         </div>
    </div>
    )

}

    
    
    
    
    
//     // define ctx - define context
//     const ctx = {
//         "accounts": [
//             {
//                 "name": "Michael",
//                 "email": "michael@mil.com",
//                 "balance": 0,
//                 "password": "secret"
//             }
//         ]
//     }
//     // function executed create account button
//     const create = () => {
//     const name = document.getElementById('name');
//     const email = document.getElementById('email');
//     const password = document.getElementById('password');
//     const status = document.getElementById('createStatus');
//     ctx.accounts.push({
//         name: name.value,
//         email: email.value,
//         password: password.value,
//         balance: 0
//     });
//     // update status and clear form
//     name.value = '';
//     email.value = '';
//     password.value = '';
//     status.innerHTML = 'Account Created!';
// }
//     return (
//         <div className="card text-bg-primary mb-3" style={{maxWidth: "18rem", marginLeft: 'auto', marginRight: 'auto'}}>
//             <div className="card-header">Create Account</div>
//             <div className="card-body">
    
//                 <h2>Name</h2>
//                 <br/>
//                 <input type="input" className="form-control" id="name" placeholder="Enter name"/>
//                 <br/> 
        
//                 <h2>Email Address</h2>
//                 <br/>
//                 <input type="password" className="form-control" id="email" placeholder="Enter Email"/>
//                 <br/>
        
//                 <h2>Password</h2>
//                 <br/>
//                 <input type="password" className="form-control" id="password" placeholder="Enter Password"/>
//                 <br/> 
        
//                 <button type="submit" className="btn btn-outline-dark" id="submit" onClick={create}>Create Account</button>
//                 <div id="createStatus"></div>
                
//              </div>
//         </div>
//     );
// }