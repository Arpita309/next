const setupGuides = (data) => {

  
  data.forEach(doc => {
    const guide = doc.data();
    
    <div className="card text-dark mb-3 mt-4 ml-3" style={{maxWidth: "50rem",backgroundColor:"#e6ff99"}}>
    <div className="card-content">
            <div className="level">
            <div className="level-left">
            <div className="level-item">
    <div className="card-body">
     
 <p className="card-text "><h3>{guide.todo}</h3></p>

    </div>
  </div>
  </div>
  <div className="level-right">
  <div className="level-item">
 <button type="button"    className="btn btn-danger" style={{float:"right"}}>Delete</button>
</div>
</div>
</div>
</div>
</div>
  })
};  


export default setupGuides;


