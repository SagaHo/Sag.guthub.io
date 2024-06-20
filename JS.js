document.querySelectorAll('details-checkbox').forEach(function(selectBox)
{ 
    selectBox.addEventListener('Exchange' , function()
    {
        var Row = selectBox.closest('tr').nextElementSibling;
        
        if (selectBox.checked)
        {
            Row.style.display = 'table';
        }
        else 
        {
            Row.style.display = 'none';
        }
    });
});

function tog_Deta(selectBox)
{
   let Row = selectBox.closest('tr').nextElementSibling;
   Row.style.display = selectBox.checked ? 'table' : 'none';
}

function show()
{
    let Property = document.querySelector('input[name="radio"]:chacked');
    if(Property)
        {
            document.getElementById('Container').style.display = 'block';
        }
        else
        {
            alert('اختر أحد العقارات الموجودة');
        }
}

function validate()
{
    return true;
}