import logo from './logo.svg';
//import './App.css';
import {useState} from "react"



function App() {


  const [formData,setFormData]=useState({
    firstName:"",lastName:"",email:"",country:"India",
    streetAddress:"", city:"", state:"",Postalcode:"",comments:"false", 
    candiates:'false',offers:"false"
    ,pushNotifications:""
  })


function changeHandler(event){
  const {name,value,checked,type}=event.target;
  setFormData((prev)=>({...prev,[name]:type==="checkbox"? checked:value}));

}

function submitHandler(event){
  event.preventDefault();

  console.log("finally printing the data")
  console.log(formData)

}
  return (
    <div className="flex flex-col items-centre mt-2 ">


<form onSubmit={submitHandler}>

  <label  htmlFor='firstName'>First name</label>
  <br></br>

  <input  type="text" name='firstName' id="firstName" placeholder='Harsh'
  value={formData.firstName} onChange={changeHandler}
  className='outline'/>

  <br></br>


   <label  htmlFor='lastName'>Last name</label>
  <br></br>

  <input  type="text" name='lastName' id="lastName" placeholder='Yaduvanshi'
  value={formData.lastName} onChange={changeHandler}
  className='outline'/>

<br></br>

  <label  htmlFor='email'>Email id</label>
  <br></br>

  <input  type="email" name='email' id="email" placeholder='Harsg1@gmail.com'
  value={formData.email} onChange={changeHandler}
  className='outline'/>



<br></br>
<label htmlFor='country'>Country</label>

<br></br>
<select id='country' name='country' value={formData.country} onChange={changeHandler} className='outline'>
  <option>India</option>
  <option>United Stated</option>
  <option>Canda</option>
  <option>Mexico</option>
</select>



<br></br>

  <label  htmlFor=' streetAddress'>streetAddress</label>
  <br></br>

  <input  type="text" name=' streetAddress' id=" streetAddress" placeholder='B-25c'
  value={formData. streetAddress} onChange={changeHandler}
  className='outline'/>



<br></br>

  <label  htmlFor='city'>City</label>
  <br></br>

  <input  type="text" name='city' id="city" placeholder='gaya'
  value={formData.city} onChange={changeHandler}
  className='outline'/>



<br></br>

  <label  htmlFor='state'>state</label>
  <br></br>

  <input  type="text" name='state' id="state" placeholder='Bihar'
  value={formData. state} onChange={changeHandler}
  className='outline'/>




<br></br>

  <label  htmlFor='Postalcode'>Postal code</label>
  <br></br>

  <input  type="text" name='Postalcode' id="Postalcode" placeholder='825409'
  value={formData.Postalcode} onChange={changeHandler}
  className='outline'/>


  <br></br>

  <fieldset>
    <legend>By Email</legend>


    <div className='flex'>
    <input 
    id='comments'
    name="comments"
    type='checkbox'
    checked={formData.comments}
    onChange={changeHandler}
    />

    <div>
      <label htmlFor='comments'>Comments</label>
      <p>Get notified when someones a comment on a posting.</p>
    </div>
    </div>



    <div className='felx'>
    <input 
    id='candidates'
    name="candidates"
    type='checkbox'
    checked={formData.candidates}
    onChange={changeHandler}
    />

    <div>
      <label htmlFor='candidates'>Candidates</label>
      <p>Get notified when a candiate applies for a job.</p>
    </div>
    </div>


    <div className='felx'>
    <input 
    id='offers'
    name="offers"
    type='checkbox'
    checked={formData.offers}
    onChange={changeHandler}
    />

    <div>
      <label htmlFor='offers'>offers</label>
      <p>Get notified when a candiate accepts or rejects an offer.</p>
    </div>
    </div>
  </fieldset>

  <br></br>

<fieldset >
  <legend>Push Notifications</legend>
  <p>These are delivered via SMS to your mobile phone.</p>

  <input 
  type='radio'
  id='pushEverything'
  name='pushNotifications'
  value="Everything"
  onChange={changeHandler}       
         
  />
  <label htmlFor='pushEverything'>Everything</label>

<br></br>

  <input 
  type='radio'
  id='pushEmail'
  name='pushNotifications'
  value="Same as email"
  onChange={changeHandler}       
         
  />
  <label htmlFor='pushEmail'>Same as email</label>


  <br></br>


  <input 
  type='radio'
  id='pushNothing'
  name='pushNotifications'
  value="No push Notifications"
  onChange={changeHandler}       
         
  />
  <label htmlFor='pushNothing'>No push Notifications</label>
</fieldset>

<br></br>


<button className='bg-blue-800 rounded-sm text-white font-bold py-2 px-4 '>Save</button>
</form>


    </div>
  );
}

export default App;
