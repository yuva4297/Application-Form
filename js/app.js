var valid = 0;
$(function(){
    $("span").hide();

});
function addDetails()
{
    var validate = validateDetails();
    if(validate)
    {
        postTheData();
    }
    
}
function validateDetails()
{
    validateFirstName();
    validateFullName();
    if(valid == 1)
    {
        return false;
    }
    return true;
}
function validateFirstName()
{
   if(checkNull("firstName"))
   {
        valid = 1;
        showError("errorMessageForFirstName", "firstName");
   }
}
function validateFullName()
{
   if(checkNull("fullName"))
   {
       valid = 1;
       showError("errorMessageForFullName", "fullName");
      
   }
}
function checkNull(id)
{
    const value = $(`#${id}`).val();
    if(value === '')
    {
        return true;
    }
    return false;
}
function showError(spanId, inputId)
{
    $(`#${spanId}`).show();
    $(`#${inputId}`).addClass('error');
}

function postTheData()
{
    console.log("Finally inside posting the data");
    const firstName = $("#firstName").val();
    const fullName = $("#fullName").val();
    const formDetails = {
        "firstName" : firstName,
        "fullName" : fullName
    }
    const data = JSON.stringify(formDetails);
    $.ajax({
        type: "POST",
        url: "https://application-form-fd16d.firebaseio.com/ApplicationIds.json",
        data: data,
        success : function(data)
        {
            console.log("In success");
        },
        error : function(err)
        {
            console.log(err);
        }
      });
}