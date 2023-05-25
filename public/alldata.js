// all data with useContext and no back end calls
// function AllData() {
//     const ctx = React.useContext(UserContext);

//     const allData = () => {
//         const status = document.getElementById('allDataStatus');
//         // JSON.stringify can read your object and parse it for you
//         status.innerHTML = JSON.stringify(ctx.users);
//         // status.innerHTML = "<h1>Fuck it All<h1>"
//     }

//     return (
//         <div className="card text-bg-primary mb-3" style={{maxWidth: "18rem", marginLeft: 'auto', marginRight: 'auto'}}>
//             <div className="card-header">All Data</div>
//             <div className="card-body">
//                 <h5 className="card-title">All Data in Store</h5>
//                 <button type="button" className="btn btn-outline-dark" onClick={allData}>Show All Data</button>
//                 <div id="allDataStatus"></div>
//             </div>
//         </div>
//     );
// }

function AllData() {
    const [data, setData] = React.useState('');

    //useEffect hook loads only once when the page is loaded
    React.useEffect(() => {
        // fetch all accounts from the API
        fetch('/account/all')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(JSON.stringify(data));
        });
    }, []); 


    return (
        <>
        <h5 className="card-title">All Data in Store:</h5>
        {data}
        <br/>
        </>
    );
}