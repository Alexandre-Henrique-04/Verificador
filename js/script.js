function clicar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano= window.document.getElementById('txtano');
  var res= window.document.getElementById('res');

  if (fano.value.length==0 || Number(fano.value) > ano){
    window.alert('Erro!!');
  }
  else{
    var sex = window.document.getElementsByName('radsex');
    var idade = ano - Number(fano.value);
    var genero="";
    var img = window.document.createElement('img');
    img.setAttribute ('id', 'foto');
  }
  if (sex[0].checked){
    genero="O homem";
    if (idade >=0 && idade <12){
      //criança
      img.setAttribute('src', 'imagens/bebe-m.png');
      res.innerHTML=`A criança tem ${idade} anos de idade`;
    }
    else if (idade >=12 && idade <18){
      //jovem
      img.setAttribute('src', 'imagens/jovem-m.png');
      res.innerHTML=`O jovem tem ${idade} anos de idade`;
    }
    else if (idade >= 18 && idade < 60){
      //adulto
      img.setAttribute('src', 'imagens/adulto-m.png');
      res.innerHTML=`${genero} tem ${idade} anos de idade`;
    } else{
      //idoso
      img.setAttribute('src', 'imagens/idoso-m.png');
      res.innerHTML=`O idoso tem ${idade} anos de idade`;
    }
  } else if (sex[1].checked){
    genero="A mulher";  
    if (idade >=0 && idade <12){
      //criança
      img.setAttribute('src', 'imagens/bebe-f.png');
      res.innerText=`A menina tem ${idade} anos de idade`;
    }
    else if (idade >=12 && idade <18){
      //jovem
      img.setAttribute('src', 'imagens/jovem-f.png');
      res.innerText=`A jovem tem ${idade} anos de idade`;
    }
    else if (idade >= 18 && idade < 60){
      //adulto
      img.setAttribute('src', 'imagens/adulto-f.png');
      res.innerHTML=`${genero} tem ${idade} anos de idade`;
    } else{
      //idoso
      img.setAttribute('src', 'imagens/idoso-f.png');
      res.innerText=`A idosa tem ${idade} anos de idade`;
    }
  }
  res.style.textAlign="center";
  res.appendChild(img);
}
