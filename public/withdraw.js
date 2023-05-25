function Withdraw() {
    return (
        <div className="card text-bg-primary mb-3" style={{maxWidth: '18rem', marginLeft: 'auto', marginRight: 'auto'}}>
            <div className="card-header">Withdraw</div>
            <div className="card-body">

                <h2>Balance</h2>
                <br/>
                <input type="input" className="form-control" id="withdrawEmail" placeholder="Balance Here"/>
                <br/> 


                <h2>Amount</h2>
                <br/>
                <input type="number" className="form-control" id="withdrawAmount" placeholder="Enter Amount"/>
                <br/> 

                <button type="submit" className="btn btn-outline-dark" id="submit" onClick={Withdraw}>Withdraw</button>
                <div id="withdrawStatus"></div>
        
            </div>
        </div>
    );
}