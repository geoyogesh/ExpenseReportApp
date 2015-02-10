define(["dojo/on","dojo/dom","dojo/ready"],
	function(on,dom,ready){
		var form = dom.byId("loginForm");
		var employeeNumberElem = dom.byId("employeeNumber");
		if (form) {
			on(form,"submit",function(e){
				var isValid = true;
				var employeeNumber = parseInt(employeeNumberElem.value);
				if (isNaN(employeeNumber) || employeeNumber != 12345) {
					alert("employee number must be 12345");
					isValid = false;
				};
				if (!isValid) {
					e.preventDefault();
				};
			});
		};
	}
);