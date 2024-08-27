const campoTextarea = document.querySelector('#id_campoDigitarTexto');
const btn_criptografar = document.querySelector('.criptografar');
const btn_descriptografar = document.querySelector('.descriptografar');
const campo_saida = document.querySelector('.campo-saida-texto-content');
const btn_copiar = document.querySelector('.copiar');

const checaMaiuscula = (textoInput) => {
  for (let i = 0; i < textoInput.length; i++) {
    if (textoInput[i] === textoInput[i].toUpperCase() && textoInput[i] !== textoInput[i].toLowerCase()) {
      return true;
    }
  }

  return false;
}

const criptografar = () => {
  
  const texto = campoTextarea.value

  if (checaMaiuscula(texto)){
    alert('Digite apenas letra minuscula');
    campoTextarea.value = '';
    return;
  }

  let texto_criptografado = '';

  for (let i = 0; i < texto.length; i++){
    if(texto[i] === 'e'){
      texto_criptografado += 'enter';
      continue
    }

    if(texto[i] === 'i'){
      texto_criptografado += 'imes';
      continue
    }

    if(texto[i] === 'a'){
      texto_criptografado += 'ai';
      continue
    }

    if(texto[i] === 'o'){
      texto_criptografado += 'ober';
      continue
    }

    if(texto[i] === 'u'){
      texto_criptografado += 'ufat';
      continue
    }

    texto_criptografado += texto[i];

  }

  campo_saida.innerHTML = `<p class='saida'>${texto_criptografado}</p>`;
  btn_copiar.id = 'copiar';
  campoTextarea.value = '';
}

const descriptografar = () => {

  let texto = campoTextarea.value

  if (checaMaiuscula(texto)){
    alert('Digite apenas letra minuscula');
    campoTextarea.value = '';
    return;
  }


  while (texto.includes("enter") || texto.includes("imes") || texto.includes("ai") || texto.includes("ober") ||     texto.includes("ufat")){

    texto = texto.replace("enter", "e");
    texto = texto.replace("imes", "i");
    texto = texto.replace("ai", "a");
    texto = texto.replace("ober", "o");
    texto = texto.replace("ufat", "u");

  }

  campo_saida.innerHTML = `<p class='saida'>${texto}</p>`;
  campoTextarea.value = '';

};

const copiarParaAreaDeTransferencia =  async (saida) => {
  try {
    await navigator.clipboard.writeText(saida);
    alert('Copiado!');
  } 
  
  catch (error) {
    alert('Erro ao copiar');
  }
}

const handleClickBtnCopiar = () => {
  const saida = document.querySelector('.saida');
  copiarParaAreaDeTransferencia(saida.innerText);

  saida.innerHTML = 'Nenuma Mensagem';
}




btn_criptografar.addEventListener('click', criptografar);
btn_descriptografar.addEventListener('click', descriptografar);
btn_copiar.addEventListener('click', handleClickBtnCopiar);
