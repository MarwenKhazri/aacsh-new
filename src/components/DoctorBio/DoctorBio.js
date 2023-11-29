import '../../index.css';


function DoctorBio(props){
    <div className="member d-flex align-items-start">
      <div className="pic"><img src={props.image} className="img-fluid" alt="" /></div>
      <div className="member-info">
        <h4 style={{ color: "#69426f" }}>{props.name}</h4>
        <span>{props.speciality}</span>
        <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
      </div>
    </div>


}

export default DoctorBio