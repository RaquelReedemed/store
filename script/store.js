/* 
Oscurecer Nav
*/


const nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    if(window.pageYOffset > 100) { 
        nav.classList.add('bg-dark', 'shadow');
    }else{
        nav.classList.remove('bg-dark', 'shadow')
    }
} ) //pageYOffsetdevuelve cant de pixeles que la pag ha sido desplazada hacia abajo, si el valor
// es 0, significa que la parte superior de la página está visible en la ventana del navegador,
// y si el valor es mayor que 0, significa que la página ha sido desplazada hacia abajo.

const bar = document.getElementById('ctn-bars-search2');
const search2 = document.getElementById('box-search2');


window.onscroll= function() {
    if(window.pageYOffset > 100) {
        bar.style.display = 'block';
        bar.classList.add('fixed-top');
        search2.classList.add('box-search2');
        
    }else {
        bar.classList.remove('fixed-top');
        bar.style.display = 'none';
        //search2.classList.remove('box-search2')
        
    }
}


/* -------------------------------------------------------------------------- */
/*                                 Buscador interactivo                       */
/* -------------------------------------------------------------------------- */



inputSearch = document.getElementById('inputSearch');
box_search =document.getElementById('box-search');


box_search2 = document.getElementById('box-search2');
inputSearch2 = document.getElementById('inputSearch2');



 //creando filtrado de busqueda

 inputSearch.addEventListener('keyup', () => {
  //convertir el valor del input en mayuscula
  filter = inputSearch.value.toUpperCase();
  //li sera igual a los li que se obtiene del getelementbytagname
  li = box_search.getElementsByTagName("li") //

  //recorriendo elementos a filtrar mediante los "li"
  for (i = 0; i < li.length; i++){ //i arranca en 0, si i es menor a la longitud del objeto li el bucle incrementara 1 e interara atraves de todos los elementos de li

    a = li[i].getElementsByTagName("a")[0]; // se utiliza para acceder al primer elemento <a></a> dentro del li. Devuelte HTMLcollection de todos los a. [0], se utiliza para acceder al primer elemento de la coleccion
    textValue = a.textContent

    if(textValue.toUpperCase().indexOf(filter) > -1){ //si el valor ingresado en el buscador se encuentra en el texValue (li->a) el indexof devolvera un numero positivo

        li[i].style.display = "";
        box_search.style.display = "block";

        if (inputSearch.value === ""){   //si el biscador no tiene texto no se abre el box
            box_search.style.display = "none";
        }

    }else{  //sino hay conincidencias no mostrara nada el box
        li[i].style.display = "none";
    }
}
 });


 ////////////////////

 inputSearch2.addEventListener('keyup', () => {
    //convertir el valor del input en mayuscula
    filter = inputSearch2.value.toUpperCase();
    //li sera igual a los li que se obtiene del getelementbytagname
    li = box_search2.getElementsByTagName("li") //
  
    //recorriendo elementos a filtrar mediante los "li"
    for (i = 0; i < li.length; i++){ //i arranca en 0, si i es menor a la longitud del objeto li el bucle incrementara 1 e interara atraves de todos los elementos de li
  
      a = li[i].getElementsByTagName("a")[0]; // se utiliza para acceder al primer elemento <a></a> dentro del li. Devuelte HTMLcollection de todos los a. [0], se utiliza para acceder al primer elemento de la coleccion
      textValue = a.textContent
  
      if(textValue.toUpperCase().indexOf(filter) > -1){ //si el valor ingresado en el buscador se encuentra en el texValue (li->a) el indexof devolvera un numero positivo
  
          li[i].style.display = "";
          box_search2.style.display = "block";
  
          if (inputSearch2.value === ""){   //si el buscador no tiene texto no se abre el box
              box_search2.style.display = "none";
          }
  
      }else{  //sino hay conincidencias no mostrara nada el box
          li[i].style.display = "none";
      }
  }
   });
