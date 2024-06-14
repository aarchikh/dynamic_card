
function Dynamic() {

    let items = [
      {img:"https://wallpapers-clan.com/wp-content/uploads/2022/06/sailor-moon-messages-icon-aesthetic.png",title:"Aarchi",para:"heyy aarchi heree!!!!"},
      {img:"https://wallpapers-clan.com/wp-content/uploads/2022/06/sailor-moon-messages-icon-aesthetic.png",title:"Quote1",para:" You are your best thing!!!!"},
      {img:"https://wallpapers-clan.com/wp-content/uploads/2022/06/sailor-moon-messages-icon-aesthetic.png",title:"Quote2",para:" the more thing you own , the more they own you.!!!!"},
    ];
        return (
      <>    
      {items.map((item,index)=>(

    
       <div className="card" style={{ width: "18rem" }}>
  <img src="https://wallpapers-clan.com/wp-content/uploads/2022/06/sailor-moon-messages-icon-aesthetic.png" className="card-img-top" alt="..." width={"230px"}/>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.para}
      {/* Some quick example text to build on the card title and make up the bulk of
      the card's content. */}
    </p>
    <a href="#" className="btn btn-primary">
      {/* Go somewhere */}
    </a>
  </div>
</div>
  ))}


</>
    );
  }

  export default Dynamic;