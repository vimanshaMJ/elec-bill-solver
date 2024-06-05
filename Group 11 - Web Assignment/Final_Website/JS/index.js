function Validation()
{
    /*
    if(document.form1.fname.value=="")
    {
        alert("Name must be filled");
        return false;
    }
    if(document.form1.address.value=="")
    {
        alert("Address must be filled");
        return false;
    }
    else if(document.form1.district.value=="")
    {
        alert("District must be filled");
        return false;
    }
    else if(document.form1.nic.value=="")
    {
        alert("NIC must be filled");
        return false;
    }
    else if(document.form1.tpnum.value=="")
    {
        alert("Telephone Number must be filled");
        return false;
    }
    */
    
    
     popup.classList.add("open-slide");
     return false;
                
    
}

var popup = document.getElementById('popup');

function CloseSlide()
{
    popup.classList.remove("open-slide");
}