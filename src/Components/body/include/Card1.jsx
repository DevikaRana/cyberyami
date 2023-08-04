const Card= (props) =>{
      const {resdata}=props
      const{name,image2}=resdata
      console.log(image2)
 return(
    <div className="card">
          <img className="cardImg" src={"https://www.cyberyami.com/images/courses/"+image2} alt="img" />
          <p className="hd">{name}</p>
    </div>
 )
}
export default Card;