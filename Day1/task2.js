exports.userdata = (name,birthdate) => {
    const date = new Date(birthdate);
    if (date instanceof Date && isNaN(date.getTime())) 
    {
        console.log("Invalid date");
    }
    else 
    {
        var month_diff = Date.now() - date.getTime();
        var age_dt = new Date(month_diff);
        age = Math.abs(age_dt.getUTCFullYear() - 1970);
        if(age <= 3){
            console.log("year must be less than 2020");

        }
        else
        console.log("Hello", name, "your age is", age);
    }
}