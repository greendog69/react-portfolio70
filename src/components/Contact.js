import React from 'react';

const Contact = () => (
    <div>
        <h3>Contact</h3>
        {/*
        //name
        //email
        //message
        //submit
            */}
        <form>
            <div class="form-group" >
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" placeholder="enter" required/>
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
            </div>
              <div class="form-group">
                <label for="textarea">Message</label>
                <textarea class="form-control" id="textarea" rows="3" required></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div> 
);

export default Contact; 