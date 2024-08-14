import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  // const [firstName, setFirstName]=useState("");
  // const [lastName, setLastName]=useState("");

  // console.log(firstName);
  // console.log(lastName);
  // function changefirstNameHandler(event){
  //  // console.log("first name")
  //   //console.log(event.target.value)
  //   setFirstName(event.value.target)
  // }

  // function changelastNameHandler(event){
  //   //console.log("last name")
  //   //console.log(event.target.value)
  //   setLastName(event.target.value);
  // }


  const [formData,setFormData]=useState(

    {firstName:"",lastName:"" , email:"",comments:""  , isVisible:true,mode:""}
  );
  //console.log(formData);

  function changeHandler(event){
    const {name,value,checked, type}=event.target

    setFormData(prevFormData=>{
      return{
        ...prevFormData,
        //[event.target.name]:event.target.value
        [name]:type==="checkbox"?checked:value

      }
    });
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("finaaly printing the  ")
    console.log(formData)
  }

  return (
    <div className="App">


<form onSubmit={submitHandler}>

  <input type="text" placeholder='first name'
  onChange={changeHandler}
  name='firstName'
  value={formData.firstName}
  />

<br></br>
<br></br>

  <input type="text" placeholder='last name'
  onChange={changeHandler}
  name="lastName"
  value={formData.lastName}
  />


  <br/>
  <br></br>

  <input type="email"
  placeholder='enter your email here'
  onChange={changeHandler}
  name="email"
value={formData.email}
/>

<br></br>
<br></br>

<textarea  placeholder='enter your comments here'
onChange={changeHandler}
name="comment"
value={formData.comments}
/>

<br></br>
<br></br>
<input type="checkbox"
onChange={changeHandler}
name="isVisible" 
checked={formData.isVisible} />

<label htmlFor='isVisible'>Am I visible ?</label>

<br></br>
<br></br>
<fieldset>
  <legend>mode:</legend>
  <input  type='radio'
onChange={changeHandler}
name="mode"
value="online-mode"
id="online-mode"
checked={formData.mode==="online-mode"}
/>
<lable htmlFor="online-mode">Online mode</lable>



<input  type='radio'
onChange={changeHandler}
name="mode"
value="offline-mode"
id="offline-mode"
checked={formData.mode==="offline-mode"}
/>
<lable htmlFor="offline-mode">offline mode</lable>




</fieldset>


<label htmlFor='favcar'>Tell me your favourite car?</label>

<select
  name="favcar"
  id="favcar"
  value={formData.favcar}
  onChange={changeHandler}

>

<option value="Scorpio">Scarpio</option>
<option value="fortuner">fortuner</option>
<option value="Mahindra">Mahindra</option>
<option value="Defender">defender</option>
</select>


<br></br>
<br></br>


<button>Submit</button>

</form>
    </div>
  );
}

export default App;
