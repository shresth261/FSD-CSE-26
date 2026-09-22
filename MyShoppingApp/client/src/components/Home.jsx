import Items from "./Items"

const Home = () => {
  const Itemdata=[
    {Image:"",title:"ReactJS", price: 465},
    {Image:"",title:"NodeJS", price: 315},
    {Image:"",title:"ExpressJS", price: 753},
    {Image:"",title:"ReactJS", price: 465},
    {Image:"",title:"NodeJS", price: 315},
    {Image:"",title:"ExpressJS", price: 753},
  ]
  return (
    <div className="home">
    {
      Itemdata.map((item,index)=>{
         return <Items key={index} props={item}/>
      })
    } 
    </div>
  )
}

export default Home