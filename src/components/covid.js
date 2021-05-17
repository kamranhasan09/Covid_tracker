import React,{useEffect,useState} from  'react';
import './covid.css'


const Covid = () =>{

    const [data,setdata] = useState([]);

    const getCovidData =async()=>{
        try{
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            setdata(actualData.statewise[0]);

        }catch(err){
            console.log(err);
        }
 
    }
    useEffect(() => {
      getCovidData();
    }, [])

    return(
      
        <div>
            <div className="upper"> 
            <h2>🔴LIVE</h2>
            <h3>COVID-19 CORONAVIRUS TRACKER</h3>
            <h3>FOR INDIA </h3>
            </div>



            <div className="container">
  <div className="row p-4">
    <div className="col pb-3">
     
    <div className="card  card_size bg-primary">
  <div className="card-body">
  <h3 className="card-title">ACTIVE CASES</h3>
  <h1 className="card-title">{data.active}</h1>
  
  </div>
</div>



    </div>
    <div className="col  pb-3">
     
     
    <div className="card card_size bg-success p-3">
  <div className="card-body">
  <h3 className="card-title">TOTAL RECOVERED</h3>
  <h1 className="card-title">{data.recovered}</h1>
  </div>
</div>

    </div>
    <div className="col ">
     

    <div className="card  card_size bg-danger">
  <div className="card-body">
  <h3 className="card-title">TOTAL DEATHS</h3>
  <h1 className="card-title">{data.deaths}</h1>
  </div>
</div>

    </div>
  </div>
</div>


<div className="container">
  <div className="row">
    
    <div className="col ">
     

     <div className="card  card_size bg-warning">
   <div className="card-body">
   <h3 className="card-title">TOTAL CONFIRMED</h3>
   <h1 className="card-title">{data.confirmed}</h1>
   </div>
 
 
     </div>


    
    </div>
    <div className="col">




    <div className="col ">
     

     <div className="card  card_size bg-secondary">
   <div className="card-body">
   <h3 className="card-title">LAST TIME UPDATE</h3>
   <h1 className="card-title">{data.lastupdatedtime}</h1>
   </div>
 </div>

</div>
    </div>
  </div>
  </div>


</div>
    
    )
}

export default Covid