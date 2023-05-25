function Deposit() {

    return (
        <div className="card text-bg-primary mb-3" style={{maxWidth: "18rem", marginLeft: 'auto', marginRight: 'auto'}}>
            <div className="card-header">Deposit</div>
            <div className="card-body">

                <h2>Balance</h2>
                <br/>
                <input type="input" className="form-control" id="depositEmail" placeholder="Balance Here"/>
                <br/> 


                <h2>Amount</h2>
                <br/>
                <input type="number" min="1" className="form-control" id="depositAmount" placeholder="Enter Amount"/>
                <br/> 

                <button type="submit" className="btn btn-outline-dark" id="submit" onClick={Deposit}>Deposit</button>
                <div id="depositStatus"></div>
        
            </div>
        </div>
        );
    }

