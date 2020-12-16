var express = require("express");

var app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use("/public", express.static("public"));

app.get("/", function(req, res) {
    res.render("pages/landing");
});
app.get("/result", function(req, res){
    
    // We need the values in cm and with pareInt we validate if that is a number 
    var m = (parseInt(req.query.cm, 10)/100);
    var kg = parseInt(req.query.kg, 10);

    // When the User give not a number it will jump back to the startsite
    if(m == 0 || isNaN(m) ) {
        res.redirect("/");
        console.warn("It is not a number!");
    } else {
        // The Form of the BMI
        var bmi = (kg / (m * m))
        console.log(bmi);
        // We want the show the result on the result page 
        res.render("pages/result",{
        bmi: bmi
        });
    }
})
//test
app.listen(8080);