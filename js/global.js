const header=`
    <nav class="navbar navbar-light bg-light navbar-expand-lg">
  		<a class="navbar-brand " href="/">Registradora app</a>
		<div class='navbar-nav ml-auto'>
			<a class='navbar-item 'href='/'>Resumen<a/> 
			<a class='navbar-item ml-4'https://rat4.github.io/activo.html'>Activo<a/> 
			<a class='navbar-item ml-4'https://rat4.github.io/maquetacion-registradoraApp/pasivo.html'>Pasivo<a/>

			<a class='navbar-item ml-4 mr-5' href='#'>Informes<a/> 
			<a class='navbar-item ml-5 mr-5' href='#'>Config<a/> 
		</div>
		
	</nav>


`

$('body').prepend(header)

const countList= `
	  			<option value=cuenta-1>cuenta-1</option>
				<option value=cuenta-2>cuenta-2</option>
`

$('.count-select ').html(countList)

const partitionList=`

	  			<option value="particion 1">particion1</option>
				<option value="particion 2">particion 2</option>

`

$('.particion-select ').prepend(partitionList)
$('#partitionList ').prepend(partitionList)

//handle radio inputs unchecked
$('input[type=radio]').click(function(){
    if (this.previous) {
        this.checked = false;
    }
    this.previous = this.checked;
});
