window.onload = function ()
{
	if (sessionStorage.getItem("windowAnimation") == null)
	{
		document.body.classList.add("window-open-animation");
		sessionStorage.setItem("windowAnimation", true);	
	}
}
