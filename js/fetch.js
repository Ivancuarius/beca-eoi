const request = new Request("https://j4jjw.mocklab.io/users");

const URL = request.url;
const method = request.method;
const credentials = request.credentials;



let tabla=`<table id="dataTable">
<thead>
    <tr>
       <th>Nombre</th>
       <th>Apellidos</th>
       <th>Direccion</th>
    <tr>
</thead>
<tbody> `;

let finTabla=`</tbody>
    </table>`;

let filas=``;

fetch(request)
    .then(response => response.json())
    .then(data => {
        var datos = data.arrayUsuarios;
        datos.forEach(item =>{
            filas+=`
            <tr>
                <td>${item.nombre}</td>
                <td>${item.apellidos}</td>
                <td>${item.direccion}</td>
            </tr>`;

           
        });
        tabla += filas+finTabla;
        document.getElementById("resultados").innerHTML=tabla;
        
    });