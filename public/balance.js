function Balance() {
return (
<div className="card text-bg-primary mb-3" style={{maxWidth: "18rem", marginLeft: 'auto', marginRight: 'auto'}}>
    <div className="card-header">Balance</div>
    <div className="card-body">

    {/* <h2>Balance</h2> */}
    <br/>
    <input type="input" className="form-control" id="balanceEmail" placeholder="Balance Here" />
    <br/>
    {/* <button type="submit" className="btn btn-outline-dark" id="submit" onClick={Balance}>Show Balance</button> */}
    <div id="balanceStatus"></div>
        
    </div>
    </div>
    );
}