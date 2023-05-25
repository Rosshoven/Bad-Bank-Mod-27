function Login() {
    return (
        <div className="card text-bg-primary mb-3" style={{maxWidth: "18rem", marginLeft: 'auto', marginRight: 'auto'}}>
            <div className="card-header">Login</div>
            <div className="card-body">

                <h2>Email</h2>
                <br/>
                <input type="input" className="form-control" id="loginEmail" placeholder="Enter Email"/>
                <br/> 


                <h2>Password</h2>
                <br/>
                <input type="password" className="form-control" id="loginPassword" placeholder="Enter Password"/>
                <br/> 

                <button type="submit" className="btn btn-outline-dark" id="submit" onClick={Login}>Login</button>
                <div id="loginStatus"></div>
        
            </div>
        </div>
    );
}