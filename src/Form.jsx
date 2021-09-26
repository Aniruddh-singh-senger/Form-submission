import React from 'react';
import Table from './Table';
import { useEffect} from 'react';

const Form = () => {
    useEffect(() => {
        let form=document.getElementById("formSubmission");

        let table=document.getElementById('data');
        form.addEventListener("submit",(e)=>{
          e.preventDefault();
          submit();
        })
        
        
        const submit=()=>{
          let name = document.getElementById("name").value;
            let age = document.getElementById("age").value;
            let state = document.getElementById("state").value;
            let email = document.getElementById("email").value;
          
            let phone = document.getElementById("phone").value;
             let Excellent = document.getElementById("Excellent").value;
           
        
        
          let newArray = [name,age,state,email,phone,Excellent];
          newArray.forEach((item)=>{
              var li = document.createElement("li");
          var text = document.createTextNode(item);
          li.appendChild(text);
          table.appendChild(li);
          })
          form.reset(); 
        }
        return () => {
            
        }
    }, [])
    return (
        <div >
            <input type="radio" name="slider" id="form" />
            <input type="radio" name="slider" id="table" />
            <nav className='wrapper'>
                <label for="form" className='form'>Form</label>
                <label for="table" className='table'>Table</label>
                <div className='slider'></div>
            </nav>

            <section>
                <div className="home-content">
                  <h1>Aromatic Bar</h1>
                  <p>We are committed to providing you with the best dinning experience possible, so we welcome your comments, Please fill out this questionnaire. Thank you</p>
                  <div className='main'>
                <form action="#" id="formSubmission" method="get">
                  <div>
                  <div id='texts'>
        <span>Text field</span>
        <input type="text" placeholder="enter text" id="name"/>
        </div>
        <div id='phonefield'>
        <span>Phonefield</span>
        <input type="number" placeholder="enter number" id="age"/>
        </div>
        <div id='Names'>
        <span>Name</span>
        <input type="text" placeholder="Enter name" id="state"/>
        </div>
        </div>
        <div id='basic'>
        <div id='emailfield'>
        <span>Email</span>
        <input type="Email" placeholder="enter mail id" id="email"/>
        </div>
        <div id='reviews'>
        <span>Radio button</span>
        <input className='imp' type="radio" name="select" value='Excellent' id="Excellent"/>
        <label for="Excellent" id='Excellent'>Excellent</label>
        </div>
        <span className='ages'>Age</span>
        <input type="number" placeholder="Enter age" id="phone"/>
        
        
        <div id='submitinfo'>
        <button type="submit">Submit</button>
        </div>
        
        </div>
        
      </form>
      </div>
                </div>
                <div className="table-content">
                <Table/>
                </div>
            </section>
        </div>

    )
}

export default Form
