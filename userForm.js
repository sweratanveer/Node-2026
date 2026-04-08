function userForm(req, res) {
    res.write(`  
         <form action="/submit" method = "post">
         <input type = "text" placeholder = "enter name" name = 'name' />
         <input type = "text" placeholder = "enter email" name = 'email' />
         <input type = "text" placeholder = "enter number" name = 'number' />
        <button type="button">Submit</button>
 </form>`
);

}
module.exports = userForm;