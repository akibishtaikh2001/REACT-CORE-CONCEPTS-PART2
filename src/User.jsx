export default function User({user}){
    console.log(user);
    
    return(
        <div className="card">
            <h3>Name: {user.name} </h3>
            <p>Company Name: {user.company.name} </p>
            <p>City: {user.address.city} </p>
        </div>
    )
}