function validate()
        {
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;

            if(name.value==" ")
            {
                alert("no blank values allowed");
                return false;
            }
            else
            {
                true;
            }
        }