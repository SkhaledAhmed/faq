window.onload = function(){
	const list = document.querySelectorAll('li');


	list.forEach(function(l){

		l.addEventListener("click", function() {
		  if(l.classList.contains('active'))
			{
				l.classList.remove("active");
			}else
			{
				l.classList.add("active");
			}
		});
	});

}

