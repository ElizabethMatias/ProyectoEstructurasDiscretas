    var correctas = 0;

    function incisos(numeritoAleatorio) {
      var posibilidades = "";
      for( var i = 0; i < arregloDeRespuestas[numeritoAleatorio].length; i ++){
        posibilidades += '<input type="radio" name = "preguntitas'+numeritoAleatorio+'" value= "'+i+'"><label>'+ arregloDeRespuestas[numeritoAleatorio][i] + '</label><br>';
      }
      return posibilidades;
    }

    var arregloDePreguntas = [
      "Siglo en que fue creado el sistema algebraico.",
      "< S, f_1,  f_2 … > es un…",
      "A completa. < S, f_1,  f_2 … > donde S es un _____ vacío y, f_1 y , f_2 son operaciones sobre S.",
      "El Sistema Algebraico es una ...",
      "Elementos son conjuntos y relaciones entre estos conjuntos.", 
      "¿Que destaca en las n-tuplas?",
      "¿Elementos singulares destacan en?",
      "Respecto a que las operaciones pueden tener elementos singulares.",
      "(X, Y,…, R_1, R_2,…, *, +,…, a, b, c,… ) ¿Es?",
      "(X, Y,…, R_1, R_2,…, *, +,…, a, b, c,… ) ¿X, Y son?",
      
      "(X, Y,…, R_1, R_2,…, *, +,…, a, b, c,… ) ¿ R_1, R_2 son?",
      "(X, Y,…, R_1, R_2,…, *, +,…, a, b, c,… ) ¿*, + son?",
      "(X, Y,…, R_1, R_2,…, *, +,…, a, b, c,… ) ¿a, b, c son?",
      "¿Sobre qué las operaciones más importantes están definidas?",
      "Un único conjunto en el cual hay definidas una o dos operaciones.",
      "¿Qué pasa si los elementos singulares son fácilmente deducibles?",
      "La estructura algebraica (X, *) está definida sobre ...",
      "(X, *) Si y solo si * es asociativa es...",
      "(X, *) Si y solo si * es asociativa y X tiene elemento neutro es...",
      "(X, *) Si y solo si * es asociativa, X tiene elemento neutro y cada elemento x tiene inverso es...", 
      
      "(X, *) Si * es conmutativa diremos que la estructura correspondiente e...",
      "La estructura algebraica (X, *, +) está definida sobre...",
      "(X, *, +) Si y solo si (X, *) es un grupo abeliano, + es asociativa y distributiva respecto de *.",
      "(X, *, +) Si y solo si es un anillo y (X,+) tiene elemento neutro.",
      "(X, *, +) Si y solo si es un anillo y (X,+) tiene elemento neutro y es conmutativo.",
      "(X, *, +) Si y solo si es un anillo unitario abeliano y (X, +) tienen inverso.",
      "Función *: Ɛ x Ɛ → Ɛ de manera que *(a, b) = (a*b). Si ∀ a, b ϵ Ɛ [a * b ϵ Ɛ].",
      "Función *: Ɛ x Ɛ → Ɛ de manera que *(a, b) = (a*b). Si ∀ a, b ϵ Ɛ [(a * b) * c = a * (b * c)].",
      "Función *: Ɛ x Ɛ → Ɛ de manera que *(a, b) = (a*b). Si ∃ e ϵ Ɛ ∀ a ϵ Ɛ [a * e = e * a = a].",
      "Función *: Ɛ x Ɛ → Ɛ de manera que *(a, b) = (a*b). Si ∀ a ϵ Ɛ ∃ i ϵ Ɛ tal que [a * i = i * a = e].",
      
      "Función *: Ɛ x Ɛ → Ɛ de manera que *(a, b) = (a*b). Si ∀ a, b ϵ Ɛ [a * b = b * a].",
      "A completa. La mayor parte de las operaciones que se encuentran en matemáticas son _________.",
      "Se define a partir de un conjunto arbitrario y varias operaciones sobre el conjunto.",
      "Las operaciones tienen propiedades que se toman como:",
      "A completa. Cualquier conclusión valida que se deduzca de estos _______ es un teorema del sistema.",
      "A completa. Esos _______ son verdaderos para cualquier sistema algebraico para el cual los axiomas son válidos.",
      "Cuando S es finito y su orden no es grande se puede describir...",
      "Se puede describir un ________ dando la tabla de composición de la operación.",
      "Si se describir dado la tabla de composición de la operación, quiere decir que se puede describir mediante alguna _____ para la operación * sobre S.",
      "Semigrupo con un elemento (M,*) de identidad con respecto a la operación *.",
      
      "La existencia del ________ garantiza que no hay dos columnas ni renglones iguales.",
      "Un monoide con idéntico e,  es...",
      "A completa. Un ____ es un par de objetos: u conjunto (G, H,…) y una operación (*, +, -,…).",
      "A completar. Por obvias razones el_____ no necesita se conmutativa.",
      "Los grupos en los que la operación (*, +, -,…) es conmutativa.",
      "A completar. Si una operación binaria puede darse por una tabla de multiplicación. Tiene un________ de elementos.",
      "Se dice que G es un grupo finito y el orden de G es el número de elementos de |G| en G respectivamente. Si G es un grupo que tiene...",
      "¿Cuántas veces deberán aparecer los renglones y columnas de la tabla en el sistema algebraico grupo?",
      "A completa. Cada renglón (y cada columna) es una ________ de los elementos a_1,a_2,…,a_n, de G y cada renglón (y cada columna) determina una ______ diferente.",
      "El sistema (A,*) en donde A=-{-1} y la operación binaria * definida por x*y = x + xy + y es un grupo abeliano. Obtener el inversos de u=1*2."
    ];
    var arregloDeRespuestas =[
      ["a) XIX", "b) XX", "c) XVIII", "d) XXI"],
      ["a) Sistema vectorial", "b) Conjunto", "c) Sistema algebraico", "d) Espacio Algebraico"],
      ["a) Conjunto no", "b)Conjunto", "c) Espacio", "d) Monoide"],
      ["a) Tupla", "b) n-aria", "c) n-tupla", "d) Binaria"],
      ["a) Tupla", "b) n-aria","c) n-tupla", "d) Binaria"],
      ["a) Operaciones", "b) Conjuntos", "c) Espacios", "d) Vectores"],
      ["a) Operaciones", "b) n-tuplas", "c) Conjuntos", "d) Sistemas"],
      ["a) Espacios Vectoriales", "b) Sistemas Algebraicos", "c) Operaciones Asociadas", "d) Conjuntos"],
      ["a) Espacios Vectoriales", "b) Sistemas Algebraicos", "c) Operaciones Asociadas", "d) Conjuntos"],
      ["a) Conjuntos", "b) Relaciones definidas", "c) Operaciones n-arias", "d) Elementos singulares"],

      ["a) Conjuntos", "b) Relaciones definidas", "c) Operaciones n-arias", "d) Elementos singulares"],
      ["a) Conjuntos", "b) Relaciones definidas", "c) Operaciones n-arias", "d) Elementos singulares"],
      ["a) Conjuntos", "b) Relaciones definidas", "c) Operaciones n-arias", "d) Elementos singulares"],
      ["a) Elementos", "b) Único conjuntos", "c) Operaciones", "d) Conjuntos deducibles"],
      ["a) Operaciones importantes", "b) Operaciones algebraicas", "c) Conjuntos definidos", "d) Conjuntos deducibles"],
      ["a) Se deducen", "b) No se deducen", "c) Se especifican", "d) No se especifican"],
      ["a) Operaciones", "b) Conjuntos", "c) Único Conjunto", "d) Única Operación"],
      ["a) Grupo", "b) G. Abeliano", "c) Semigrupo", "d) Monoide"],
      ["a) Grupo", "b) G. Abeliano", "c) Semigrupo", "d) Monoide"],
      ["a) Grupo", "b) G. Abeliano", "c) Semigrupo", "d) Monoide"],

      ["a) Grupo", "b) G. Abeliano", "c) Semigrupo", "d) Monoide"],
      ["a) Dos operaciones", "b) Conjuntos", "c) Único Conjunto", "d) Única Operación"],
      ["a) Anillo", "b) A. Unitario", "c) A. U. abeliano", "d) Cuerpo"],
      ["a) Anillo", "b) A. Unitario", "c) A. U. abeliano", "d) Cuerpo"],
      ["a) Anillo", "b) A. Unitario", "c) A. U. abeliano", "d) Cuerpo"],
      ["a) Anillo", "b) A. Unitario", "c) A. U. abeliano", "d) Cuerpo"],
      ["a) Cerradura", "b) Asociativa", "c) Elemento Neutro", "d) Elemento Inverso"],
      ["a) Cerradura", "b) Asociativa", "c) Elemento Neutro", "d) Elemento Inverso"],
      ["a) Cerradura", "b) Asociativa", "c) Elemento Neutro", "d) Elemento Inverso"],
      ["a) Cerradura", "b) Asociativa", "c) Elemento Neutro", "d) Elemento Inverso"],

      ["a) Cerradura", "b) Asociativa", "c) Elemento Neutro", "d) Conmutativa"],
      ["a) Cerraduras", "b) Asociativas", "c) Idénticas", "d) Neutras"],
      ["a) Grupos", "b) Semigrupos", "c) Monoides", "d) Sistema Algebraico abstracto"],
      ["a) Axiomas", "b) Teoremas", "c) Propiedades", "d) Hipótesis"],
      ["a) Teoremas", "b) Axiomas", "c) Propiedades", "d) Hipótesis"],
      ["a) Axiomas", "b) Propiedades", "c) Teoremas", "d) Hipótesis"],
      ["a) Semigrupo", "b) Espacio", "c) Teorema", "d) Campo"],
      ["a) Campo", "b) Teorema", "c) Espacio", "d) Semigrupo"],
      ["a) Campo", "b) Teorema", "c) Espacio", "d) Regla"],
      ["a) Monoide", "b) Grupo", "c) Campo", "d) Cuerpo"],
      
      ["a) Cerradura", "b) Elemento inverso", "c) Elemento asociativo", "d) Elemento identidad"],
      ["a) Campo", "b) Semigrupo", "c) Grupo", "d) Cuerpo"],
      ["a) Cuerpo", "b) Semigrupo", "c) Campo", "d) Grupo"],
      ["a) Cuerpo", "b) Grupo", "c) Semigrupo", "d) Campo"],
      ["a) Grupo Abeliano", "b) Semigrupo", "c) Campo", "d) Espacio Vectorial"],
      ["a) Sistema", "b) Número infinito", "c) Conjunto", "d) Numero finito"],
      ["a) Número infinito de conjuntos", "b) Número finito de conjuntos", "c) Número infinito de elementos", "d) Número finito de elementos"],
      ["a) Dos", "b) Una", "c) Infinitas", "d) Ninguna"],
      ["a) Sistema", "b) Propiedad", "c) Estructura", "d) Permutación"],
      ["a) -5/6","b) 5/6","c) 6/5","d) -6/5"]
  ];
    var arregloDeIncisosRespuestasCorrectas=[
      "0","2","0","2","2","0","1","2","2","0", 
      "1","2","3","1","0","3","3","2","3","0",
      "1","0","0","1","2","3","0","1","2","3",
      "3","1","3","0","1","2","0","3","3","0",
      "3","2","3","1","0","3","3","1","3","0"
  ];


    /*Validaci�n de preguntas aleatorias no repetidas*/
    var cantidadNumeros = arregloDePreguntas.length;
    var arregloDeAleatorios = []
    while(arregloDeAleatorios.length < cantidadNumeros ){
      var numeroAleatorio = Math.floor(Math.random()*cantidadNumeros);
      var existe = false;
      for(var i=0;i<arregloDeAleatorios.length;i++){
        if(arregloDeAleatorios [i] == numeroAleatorio){
          existe = true;
          break;
        }
      }
      if(!existe){
        arregloDeAleatorios[arregloDeAleatorios.length] = numeroAleatorio;
      }

    }

    var aleatorio1 = arregloDeAleatorios[0];
    var aleatorio2 = arregloDeAleatorios[1];
    var aleatorio3 = arregloDeAleatorios[2];
    var aleatorio4 = arregloDeAleatorios[3];
    var aleatorio5 = arregloDeAleatorios[4];
    var aleatorio6 = arregloDeAleatorios[5];
    var aleatorio7 = arregloDeAleatorios[6];
    var aleatorio8 = arregloDeAleatorios[7];
    var aleatorio9 = arregloDeAleatorios[8];
    var aleatorio10 = arregloDeAleatorios[9];

    document.getElementById('pregunta1').innerHTML = arregloDePreguntas[aleatorio1];
    document.getElementById('respuestas1').innerHTML = incisos(aleatorio1);

    document.getElementById('pregunta2').innerHTML = arregloDePreguntas[aleatorio2];
    document.getElementById('respuestas2').innerHTML = incisos(aleatorio2);

    document.getElementById('pregunta3').innerHTML = arregloDePreguntas[aleatorio3];
    document.getElementById('respuestas3').innerHTML = incisos(aleatorio3);

    document.getElementById('pregunta4').innerHTML = arregloDePreguntas[aleatorio4];
    document.getElementById('respuestas4').innerHTML = incisos(aleatorio4);

    document.getElementById('pregunta5').innerHTML = arregloDePreguntas[aleatorio5];
    document.getElementById('respuestas5').innerHTML = incisos(aleatorio5);

    document.getElementById('pregunta6').innerHTML = arregloDePreguntas[aleatorio6];
    document.getElementById('respuestas6').innerHTML = incisos(aleatorio6);

    document.getElementById('pregunta7').innerHTML = arregloDePreguntas[aleatorio7];
    document.getElementById('respuestas7').innerHTML = incisos(aleatorio7);
    
    document.getElementById('pregunta8').innerHTML = arregloDePreguntas[aleatorio8];
    document.getElementById('respuestas8').innerHTML = incisos(aleatorio8);

    document.getElementById('pregunta9').innerHTML = arregloDePreguntas[aleatorio9];
    document.getElementById('respuestas9').innerHTML = incisos(aleatorio9);

    document.getElementById('pregunta10').innerHTML = arregloDePreguntas[aleatorio10];
    document.getElementById('respuestas10').innerHTML = incisos(aleatorio10);
    
    var correctas = 0;

    function calificacion(arregloAleatorios){
      for (var i = 0; i < arregloAleatorios.length; i++) {
        var respuesta = $("input[name=preguntitas"+arregloAleatorios[i]+"]:checked").val();
        if (respuesta == arregloDeIncisosRespuestasCorrectas[arregloAleatorios[i]]){
          correctas++;
        }
      }
      alert('tu calificación es:'+correctas);
      correctas =0 ;
    }

    function comprobar(){
      calificacion(arregloDeAleatorios);

    }