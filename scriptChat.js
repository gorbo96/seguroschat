// ** Creacion de elemntos de chat en pagina web, inyeccion de html dentro de elemento body

//Lista de dominios permitidos
const dominiosPermitidos = ['localhost', '127.0.0.1','bajajecuador.com','corporativo.curbe.com.ec','ebi.corp.ec','promotions.curbe.com.ec']

//Localicazion URL de servicio
const dominioAPI='http://seguroschatgpt.ghhceec9hnhcd8c9.eastus.azurecontainer.io:5000/'
//Localicazion URL de repositorio contenedor
const dominioRepositorio=''

//Creacion de elemento link de css
const css =document.createElement('link')
css.href=dominioRepositorio.concat('styleChat.css')
css.rel='stylesheet'
css.type='text/css'
css.title='estiloChat'
css.crossOrigin="anonymous"

const pdfjs= document.createElement('script')
pdfjs.src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.4.456/pdf.min.js"

const audioRecord= document.createElement('script')
audioRecord.src=dominioRepositorio.concat("audio-recording.js")

//Creacion de elemento link fuente
const fuente =document.createElement('style')
fuente.innerHTML="@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');"

//Creacion de elemento de imagen avatar inicio chat
const botonAvatar=document.createElement('avatar-chat')

    //Creacion elemento img, lector de imagenes
    const imagenAvatar = new Image()
    imagenAvatar.classList.add('elemento-circular')    
    imagenAvatar.src=dominioRepositorio.concat('avatarN.png')

    //Adicion de la imagen al boton
    botonAvatar.appendChild(imagenAvatar)

//Creacion de contenedor de elemento mensajeria
const contenedorchat=document.createElement('contenedor-chat')
contenedorchat.style.display='none'        
contenedorchat.classList.add('borde-cir')
contenedorchat.classList.add('no-sombreado')
contenedorchat.classList.add('color-fondo-primario')

    //Creacion elemnto de esquema de vista
    const esquema= document.createElement('esquema-chat') 
    esquema.id="esquema-inicial"

        //Creacion elemento de cabecera de esquema
        const cabecera=document.createElement('cabecera-chat')
        cabecera.classList.add('top-border-radius')
        cabecera.classList.add('color-primario-fondo')

            //Creacion de elementos de cabecera
            const contenidoCabecera =document.createElement('fila-flexible-chat')
            contenidoCabecera.classList.add('centrado-vertical')
            contenidoCabecera.classList.add('centrado-horizontal')

                //Creacion contenedor para icono de avatar
                const avatarIcono= document.createElement('avatar-icono-chat')

                    //Creacion de elemento imagen para avatar boton inicio
                    const imagenAvatarIcono = new Image()
                    imagenAvatarIcono.classList.add('elemento-circular')
                    imagenAvatarIcono.src=dominioRepositorio.concat('avatarN.png')

                //Adicion de elemento imagen a icono de avatar inicio
                avatarIcono.appendChild(imagenAvatarIcono)

                //Creacion elemento titulo de componente chat
                const tituloCabecera=document.createElement('titulo-chat')                
                tituloCabecera.classList.add('color-primario-texto')
                tituloCabecera.innerHTML='Gala'

                // Creacion de elemento de boton salida
                const btnSalida= document.createElement('button-icon-chat')
                btnSalida.classList.add('no-sombreado')                
                btnSalida.classList.add('color-primario-fondo')
                btnSalida.classList.add('color-primario-texto')
                btnSalida.id='alternarContenedorAvatar'

                    // Creacion de elemento de icono para boton de salida
                    const imgbtnSld=document.createElement('span-icon-chat')                    
                    imgbtnSld.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="24px" height="24px"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>'
                
                // Adicion de imagen a boton 
                btnSalida.appendChild(imgbtnSld)

                //Creacion de elemento boton de menu
                const btnMenu= document.createElement('button-icon-chat')
                btnMenu.classList.add('no-sombreado')                
                btnMenu.classList.add('color-primario-fondo')
                btnMenu.classList.add('color-primario-texto')
                btnMenu.id='menu-container-chat'

                    // Creacion de elemento imagen icono de boton menu
                    const imgbtnMenu=document.createElement('span-icon-chat')                    
                    imgbtnMenu.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="24px" height="24px"><path d="M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"/></svg>'

                //Adicion de imagen de salida a boton menu
                btnMenu.appendChild(imgbtnMenu)

            //Adicion de los elementos: imagen de avatar, titulo,boton menu, boton salida
            contenidoCabecera.appendChild(avatarIcono)
            contenidoCabecera.appendChild(tituloCabecera)
            contenidoCabecera.appendChild(btnMenu)
            contenidoCabecera.appendChild(btnSalida)
            
        //Adicion de contenido cabecera a elemento cabecera
        cabecera.appendChild(contenidoCabecera)

        //Creacion de elemento contenido de esquema
        const contenido=document.createElement('content-chat')
        contenido.style="position:relative"

            // Creacion de elemento para boton scroll de mensajes
            const divBoton=document.createElement('div')
            divBoton.style="position:absolute;right:15px;bottom:16px;z-index:100001;display:none"

                //Creacion de elemento boton para scroll fondo
                const btnScrollFin=document.createElement('button-icon-chat')
                btnScrollFin.classList.add('no-sombreado') 
                btnScrollFin.classList.add('color-ter-back')
                btnScrollFin.id='btn-scroll'

                    //Creacion de imagen para boton imagen
                    const imgAbajo=document.createElement('span-icon-chat')                    
                    imgAbajo.classList.add('color-ter-color')
                    imgAbajo.style.height="24px"
                    imgAbajo.style.width="24px"
                    imgAbajo.innerHTML='<svg viewBox="0 0 1024 1024" focusable="false" fill="currentColor" width="24px" height="24px"><path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"/></svg>'

                // Adicion de imagen a boton
                btnScrollFin.appendChild(imgAbajo)
            
            // Adicion de boton a contenendor
            divBoton.appendChild(btnScrollFin)

            // Creacion de contenedor de mensajes
            const divLista=document.createElement('div')
            divLista.style="position: absolute;height: 100%;width: 100%;overflow-y:auto"

                // Creacion de elemento padre lista de mensajes
                const listaMsg=document.createElement('list-chat')
            
            // Adicion de lista de mensajes a contenedor
            divLista.appendChild(listaMsg)
        
        // Adicion a contenedores a contenido de esquema
        contenido.appendChild(divBoton)
        contenido.appendChild(divLista)        

        //Creacion de elemnto pie de esquema
        const pie=document.createElement('footer-chat')
        pie.classList.add('bottom-border-radius')

            // Creacion de elementos parte inferior
            const filaPie= document.createElement('fila-flexible-chat')
            filaPie.classList.add('centrado-vertical')
            filaPie.classList.add('centrado-horizontal')
            filaPie.id='initRow'

                //Creacion de contenendor parte inferior
                const colunmaInputPie= document.createElement('col-flex-chat')

                    // Creacion de elemento de entrada texto para mensaje
                    const inputMsg=document.createElement('textarea')
                    inputMsg.tabIndex=0
                    inputMsg.rows=1                    
                    inputMsg.wrap='off'
                    inputMsg.id="txtMsg"                    
                    inputMsg.classList.add('input-chat')
                    inputMsg.style.color="#000000"
                    
                    // Creacion de elemento boton de envio mensaje
                    const buttonMic=document.createElement('button-icon-chat')
                    buttonMic.classList.add('color-primario-fondo')
                    buttonMic.id='btn-snd-msg'

                        //Creacion elemento imagen para boton envio de mensaje
                        const imgbtnMic=document.createElement('span-icon-chat')
                        imgbtnMic.classList.add('color-primario-texto')
                        imgbtnMic.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="24px" height="24px"><path d="M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm330-170c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1z"/></svg>'

                    // Adicion de imagen a boton envio de mensaje
                    buttonMic.appendChild(imgbtnMic)
                
                // Adicion de boton y elemento ingreso a contenedor
                colunmaInputPie.appendChild(inputMsg)
                colunmaInputPie.appendChild(buttonMic)
                
            //Adicion de contenedor a pie de esquema
            filaPie.appendChild(colunmaInputPie)

            // Creacion de elemento fila de contenido al grabar
            const filaPieRec= document.createElement('fila-flexible-chat')
            filaPieRec.classList.add('centrado-vertical')
            filaPieRec.classList.add('centrado-horizontal')
            filaPieRec.style.backgroundColor='#ffffff'
            filaPieRec.style.flexDirection='column'
            filaPieRec.classList.add('visible')
            filaPieRec.id='recRow'

                // Creacion de elemento contador de segundos y onda de sonido; en modo pause viusliza reprod audio
                contenidoPieRec=document.createElement('col-flex-chat')
                contenidoPieRec.style.width='100%'

                    // Creacion de elemento para ver segundos de grabacion
                    const txtPieSgRec=document.createElement('p-chat')
                    txtPieSgRec.style='color:black'
                    txtPieSgRec.innerHTML="00:00"

                    // Creacion de elemento de visualizacion de onda de audio
                    const waveAud=document.createElement('canvas')
                    waveAud.classList.add('canvas-chat')
                    waveAud.id='wave-aud'

                    // Creacion de elemnto para reproducir audio
                    const audio=new Audio()
                    audio.style.display="none"
                    audio.controls = true;
                    audio.id='audio-source-chat'

                // Adicion de elementos de texto segundos, elemnto de onda audio y reprod audio a contenedor
                contenidoPieRec.appendChild(txtPieSgRec)
                contenidoPieRec.appendChild(waveAud)
                contenidoPieRec.appendChild(audio)

                // Creacion de contenedor de opciones de grabado de audio
                const opcionesPieRec=document.createElement('col-flex-chat')
                opcionesPieRec.style.width="100%"
                opcionesPieRec.style.display="grid"
                opcionesPieRec.style.gridAutoFlow="column"

                    // Creacion de boton para eliminar audio
                    const btnElmAud=document.createElement('button-transparent-chat')
                    btnElmAud.id="del-rec-chat"

                        // Creacion de imagen de boton para eliminar
                        const imgBtnDel=document.createElement('span-icon-chat')
                        imgBtnDel.style.color="#667781"
                        imgBtnDel.style.width='30px'
                        imgBtnDel.style.height='30px'
                        imgBtnDel.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="24px" height="24px"><path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z"/></svg>'

                    // Adicion de imagen a boton eliminar audio
                    btnElmAud.appendChild(imgBtnDel)

                    // Creacion de elemento para pausar grabacion de voz
                    const btnPausAud=document.createElement('button-transparent-chat')
                    btnPausAud.id='pause-rec-chat'
                    btnPausAud.style.justifySelf="center"

                        // Creacion de imagen para boton pausa
                        const imgBtnPas=document.createElement('span-icon-chat')
                        imgBtnPas.style="color:red"
                        imgBtnPas.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="30px" height="30px"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm-80 524c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304zm224 0c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304z" fill="#ffffff"></path><path d="M424 352h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8zm224 0h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8z"></path></svg>'

                    // Adicion de boton de pause
                    btnPausAud.appendChild(imgBtnPas)

                    // Creacion de boton para enviar audio
                    const btnSndAud=document.createElement('button-icon-chat')
                    btnSndAud.id='stop-rec-chat'
                    btnSndAud.classList.add('btn-circle')
                    btnSndAud.classList.add('color-primario-fondo')
                    btnSndAud.style.justifySelf="end"
                    btnSndAud.style.marginTop="5px"
                    btnSndAud.style.marginBottom="5px"

                        // Creacion de imagen para boton de envio de audio
                        const imgSndAud=document.createElement('span-icon-chat')
                        imgSndAud.classList.add('color-primario-texto')
                        imgSndAud.innerHTML='<svg viewBox="0 0 24 24" focusable="false" height="24px" width="24px" fill="currentColor"><path d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path></svg>'

                    // Adicion de imagen al boton de envio de audio
                    btnSndAud.appendChild(imgSndAud)

                // Adicion de botones: aliminar,pausar y enviar audio
                opcionesPieRec.appendChild(btnElmAud)
                opcionesPieRec.appendChild(btnPausAud)
                opcionesPieRec.appendChild(btnSndAud)

            // Adicion de contenedores de contenido y opciones de audio
            filaPieRec.appendChild(contenidoPieRec)
            filaPieRec.appendChild(opcionesPieRec)

        // Adicion de contenedores a pie de esquema
        pie.appendChild(filaPie)
        pie.appendChild(filaPieRec)

    //Adicion de elemntos: cabecera,contenido y pie al esquema
    esquema.appendChild(cabecera)
    esquema.appendChild(contenido)
    esquema.appendChild(pie)
    
    // Creacion de esquema para componente de verificacion de token
    const esquemaValidacion=document.createElement('esquema-chat')
    esquemaValidacion.style.display='none'
    esquemaValidacion.id="esqval"
    
        // Creacion de elemnto para cabecera de esquema
        const cabeceraValidacion=document.createElement('cabecera-chat')
        cabeceraValidacion.classList.add('top-border-radius')
        cabeceraValidacion.classList.add('color-primario-fondo')

            //Creacion de elementos de cabecera
            const filaCabeceraValidacion =document.createElement('fila-flexible-chat')
            filaCabeceraValidacion.classList.add('centrado-vertical')
            filaCabeceraValidacion.classList.add('centrado-horizontal')
                
                //Creacion contenedor para icono de avatar
                const avatarIconoValidacion= document.createElement('avatar-icono-chat')                

                    //Creacion de elemento imagen para avatar boton inicio
                    const imgAvatarIcnVal = new Image()
                    imgAvatarIcnVal.classList.add('elemento-circular')                    
                    imgAvatarIcnVal.src=dominioRepositorio.concat('avatarN.png')

                //Adicion de elemento imagen a icono de avatar inicio
                avatarIconoValidacion.appendChild(imgAvatarIcnVal)

                // Creacion de titulo de cabecera
                const columnaCabeceraTitVal=document.createElement('titulo-chat')                
                columnaCabeceraTitVal.classList.add('color-primario-texto')
                columnaCabeceraTitVal.innerHTML='Configuracion Tema'

                // Creacion de boton para validacion de token
                const btnSalidaVal= document.createElement('button-icon-chat')
                btnSalidaVal.classList.add('color-primario-fondo')
                btnSalidaVal.classList.add('color-primario-texto')                
                btnSalidaVal.style.boxShadow='none'
                btnSalidaVal.id='close-container-val-chat'                

                    // Creacion de elemento imagen para boton de validacion
                    const imgbtnSldVal=document.createElement('span-icon-chat')                    
                    imgbtnSldVal.innerHTML='<svg viewBox="64 64 896 896" focusable="false" height="24px" width="24px" fill="currentColor"><path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"/></svg>'

                // Adicion de imagen a boton
                btnSalidaVal.appendChild(imgbtnSldVal)

            //Adicion de elemento de columna a fila cabecera
            filaCabeceraValidacion.appendChild(avatarIconoValidacion)
            filaCabeceraValidacion.appendChild(columnaCabeceraTitVal)
            filaCabeceraValidacion.appendChild(btnSalidaVal)            
                
        // Adicion de elementos a contenedor cabecera de esquema
        cabeceraValidacion.appendChild(filaCabeceraValidacion)

        // Creacion de elemento contenedor 
        const contenidoVal=document.createElement('content-chat')

            // Creacion de contenedor para validacion de token seguridad
            const divToken=document.createElement('div-chat')
            divToken.style.display='flex'
            divToken.style.flexDirection='column'

                // Creacion de elemento etiqueta para ingreso token
                const etiquetaToken=document.createElement('label-chat')
                etiquetaToken.id='etiquetaToken'
                etiquetaToken.setAttribute('for','token')
                etiquetaToken.innerHTML="Token:"

                // Creacion de elemento de ingreso de token de seguridad
                const txtToken=document.createElement('input')
                txtToken.classList.add('input-passwd-chat')
                txtToken.id='token'

            //Adicion de elemntos etiqueta y boton de token seguridad
            divToken.appendChild(etiquetaToken)
            divToken.appendChild(txtToken)

            // Creacion de elemento contenedor de seleccionador de colores o ingreso de codigo
            const divColor=document.createElement('div-chat')
            divColor.style.display='none'
            divColor.style.flexDirection='column'
            divColor.style.height='100%'
            divColor.style.overflowY='auto'

                //Creacion de elemento contendor de seleccion de colores
                const divElegiblePrin=document.createElement('div-chat')
                divElegiblePrin.style.display='flex'
                divElegiblePrin.style.flexDirection='row'
                divElegiblePrin.style.flexWrap="wrap"
                divElegiblePrin.style.position="relative"
                divElegiblePrin.style.justifyContent="center"
            
                    //Creacion de elemento seleciconador de color
                    const spanColor1Prin=document.createElement('span-color-chat')
                    spanColor1Prin.classList.add('cambiar-fondo')
                    spanColor1Prin.style.backgroundColor='#00bc94'
                    
                    //Creacion de elemento seleciconador de color
                    const spanColor2Prin=document.createElement('span-color-chat')
                    spanColor2Prin.classList.add('cambiar-fondo')
                    spanColor2Prin.style.backgroundColor='#235ba8'
                    
                    //Creacion de elemento seleciconador de color
                    const spanColor3Prin=document.createElement('span-color-chat')
                    spanColor3Prin.classList.add('cambiar-fondo')
                    spanColor3Prin.style.backgroundColor='#cfd6e0'
                    
                    //Creacion de elemento seleciconador de color
                    const spanColor4Prin=document.createElement('span-color-chat')
                    spanColor4Prin.classList.add('cambiar-fondo')
                    spanColor4Prin.style.backgroundColor='#ffffff'

                    //Creacion de elemento seleciconador de color
                    const spanColor5Prin=document.createElement('span-color-chat')
                    spanColor5Prin.classList.add('cambiar-fondo')
                    spanColor5Prin.style.backgroundColor='#000000'

                    //Creacion de elemento seleciconador de color
                    const spanColor6Prin=document.createElement('span-color-chat')
                    spanColor6Prin.classList.add('cambiar-fondo')
                    spanColor6Prin.style.backgroundColor='#f49100'

                    //Creacion de elemento seleciconador de color
                    const spanColor7Prin=document.createElement('span-color-chat')
                    spanColor7Prin.classList.add('cambiar-fondo')
                    spanColor7Prin.style.backgroundColor='#ee2737'

                    //Creacion de elemento seleciconador de color
                    const spanColor8Prin=document.createElement('span-color-chat')
                    spanColor8Prin.classList.add('cambiar-fondo')
                    spanColor8Prin.style.backgroundColor='#a5b9b2'

                    //Creacion de elemento seleciconador de color
                    const spanColor9Prin=document.createElement('span-color-chat')
                    spanColor9Prin.classList.add('cambiar-fondo')
                    spanColor9Prin.style.backgroundColor='#857c72'

                // Adiccion de seleecionadores de colores a contenedor
                divElegiblePrin.appendChild(spanColor1Prin)
                divElegiblePrin.appendChild(spanColor2Prin)
                divElegiblePrin.appendChild(spanColor3Prin)
                divElegiblePrin.appendChild(spanColor4Prin)
                divElegiblePrin.appendChild(spanColor5Prin)
                divElegiblePrin.appendChild(spanColor6Prin)
                divElegiblePrin.appendChild(spanColor7Prin)
                divElegiblePrin.appendChild(spanColor8Prin)
                divElegiblePrin.appendChild(spanColor9Prin)
                
                // Creacion de elemnto etiqueta 
                const etiquetaColorPrin=document.createElement('label-chat')
                etiquetaColorPrin.setAttribute('for','color-pri')
                etiquetaColorPrin.innerHTML="Color Primario:"

                // Creacion de elemento de elemento ingreso de codigo HEX Fondo
                const txtColorPrin=document.createElement('input')
                txtColorPrin.classList.add('input-passwd-chat')
                txtColorPrin.id='color-pri'

                // Creacion de boton para guardado de color por codigo HEX Fondo
                const btnSndBackColor=document.createElement('button-chat')
                btnSndBackColor.style.width="auto"
                btnSndBackColor.id='background-btn'
                btnSndBackColor.classList.add('block-button')
                btnSndBackColor.classList.add('color-primario-fondo')
                btnSndBackColor.classList.add('color-primario-texto')
                btnSndBackColor.innerHTML="Guardar Codigo"

                // Creacion de elemento contenedor de seleccionador de colores
                const divElegibleSec=document.createElement('div-chat')
                divElegibleSec.style.display='flex'
                divElegibleSec.style.flexDirection='row'
                divElegibleSec.style.flexWrap="wrap"
                divElegibleSec.style.position="relative"
                divElegibleSec.style.justifyContent="center"
            
                    // Elemento seleccionador de color
                    const spanColor1Sec=document.createElement('span-color-chat')
                    spanColor1Sec.classList.add("cambiar-color")
                    spanColor1Sec.style.backgroundColor='#00bc94'
                    
                    // Elemento seleccionador de color
                    const spanColor2Sec=document.createElement('span-color-chat')
                    spanColor2Sec.classList.add("cambiar-color")
                    spanColor2Sec.style.backgroundColor='#235ba8'
                    
                    // Elemento seleccionador de color
                    const spanColor3Sec=document.createElement('span-color-chat')
                    spanColor3Sec.classList.add("cambiar-color")
                    spanColor3Sec.style.backgroundColor='#cfd6e0'
                    
                    // Elemento seleccionador de color
                    const spanColor4Sec=document.createElement('span-color-chat')
                    spanColor4Sec.classList.add("cambiar-color")
                    spanColor4Sec.style.backgroundColor='#ffffff'

                    // Elemento seleccionador de color
                    const spanColor5Sec=document.createElement('span-color-chat')
                    spanColor5Sec.classList.add("cambiar-color")
                    spanColor5Sec.style.backgroundColor='#000000'

                    // Elemento seleccionador de color
                    const spanColor6Sec=document.createElement('span-color-chat')
                    spanColor6Sec.classList.add("cambiar-color")
                    spanColor6Sec.style.backgroundColor='#f49100'

                    // Elemento seleccionador de color
                    const spanColor7Sec=document.createElement('span-color-chat')
                    spanColor7Sec.classList.add("cambiar-color")
                    spanColor7Sec.style.backgroundColor='#ee2737'

                    // Elemento seleccionador de color
                    const spanColor8Sec=document.createElement('span-color-chat')
                    spanColor8Sec.classList.add("cambiar-color")
                    spanColor8Sec.style.backgroundColor='#a5b9b2'

                    // Elemento seleccionador de color
                    const spanColor9Sec=document.createElement('span-color-chat')
                    spanColor9Sec.classList.add("cambiar-color")
                    spanColor9Sec.style.backgroundColor='#857c72'

                // Adicion de elementos selccionadores a contenedor
                divElegibleSec.appendChild(spanColor1Sec)
                divElegibleSec.appendChild(spanColor2Sec)
                divElegibleSec.appendChild(spanColor3Sec)
                divElegibleSec.appendChild(spanColor4Sec)
                divElegibleSec.appendChild(spanColor5Sec)
                divElegibleSec.appendChild(spanColor6Sec)
                divElegibleSec.appendChild(spanColor7Sec)
                divElegibleSec.appendChild(spanColor8Sec)
                divElegibleSec.appendChild(spanColor9Sec)

                // Creacion de elemento etiqueta para ingreso de codigo color HEX texto
                const etiquetaColorSec=document.createElement('label-chat')
                etiquetaColorSec.setAttribute('for','color-sec')
                etiquetaColorSec.innerHTML="Color Texto:"

                // Creacion de elemento de ingreso de codigo HEX texto 
                const txtColorSec=document.createElement('input')
                txtColorSec.classList.add('input-passwd-chat')
                txtColorSec.id='color-sec'
                
                // Creacion de elemento de boton para guardar color codigo HEX texto
                const btnSndTextColor=document.createElement('button-chat')
                btnSndTextColor.style.width="auto"
                btnSndTextColor.id='text-btn'
                btnSndTextColor.classList.add('block-button')
                btnSndTextColor.classList.add('color-primario-fondo')
                btnSndTextColor.classList.add('color-primario-texto')
                btnSndTextColor.innerHTML="Guardar Codigo"
                            
            // Adicion de elementos: seleccionadores de colores, etiquetas y botones a elemento contenedor
            divColor.appendChild(etiquetaColorPrin)
            divColor.appendChild(divElegiblePrin)
            divColor.appendChild(txtColorPrin)
            divColor.appendChild(btnSndBackColor)
            divColor.appendChild(etiquetaColorSec)
            divColor.appendChild(divElegibleSec)
            divColor.appendChild(txtColorSec)
            divColor.appendChild(btnSndTextColor)
        
        // Adicion de contenedores: verificacion de token y seleccionador de color
        contenidoVal.appendChild(divToken)
        contenidoVal.appendChild(divColor)

        // Creacion de elemento pie de esquema de validacion
        const pieVal=document.createElement('footer-chat')
        pieVal.classList.add('bottom-border-radius')
        pieVal.id="pie-validacion"
        
            // Creacion de bootn para comprobacion de token de seguridad
            const btnSndTkn=document.createElement('button-chat')
            btnSndTkn.classList.add('block-button')
            btnSndTkn.classList.add('color-primario-fondo')
            btnSndTkn.classList.add('color-primario-texto')
            btnSndTkn.id='snd-token-chat'
            btnSndTkn.innerHTML="Comprobar"
        
        // Adicion de boton verificador de token seguridad
        pieVal.appendChild(btnSndTkn)
    
    // Adicion delementos: cabecera contenido y pie a esquema de validacion
    esquemaValidacion.appendChild(cabeceraValidacion)
    esquemaValidacion.appendChild(contenidoVal)
    esquemaValidacion.appendChild(pieVal)
    
//Adicion del esquemas a contenedor padre
contenedorchat.appendChild(esquema)
contenedorchat.appendChild(esquemaValidacion)

// Adicion de elementos a pagina principal

    document.head.appendChild(css)
    document.head.appendChild(fuente)
    document.head.appendChild(pdfjs)
    document.head.appendChild(audioRecord)
    document.body.appendChild(contenedorchat)
    document.body.appendChild(botonAvatar)    


// ** Inicio seccion de definicion de funciones

// Varible para verificar tipo de mensaje (audio o texto)
var msgTipo=true
// Variable para verificar si el grabado de audio esta pausado
var recordPause=false
// Variable para conteo de mensajes
var contMsg=0
// Variables para controlar grabacion de audio: tiempo inicio de grabacion, manejador de tiempo, contexto, tiempo trascurrido
var audioRecordStartTime,elapsedTimeTimer,context,elapsedTime;
// Variable para contabilizar tiempo grabado en pausa
var audioRecordPausedTime=0
// Variable para internacionalizacion
var diccionario={
    "es":{"placeholder":"Escribe un mensaje","buttonToken":"Comprobar","saveHex":"Guardar Color HEX","configTheme":"Configurar Tema","principalColor":"Color Principal:","textColor":"Color Texto:","DomainNotAllowed":"Dominio no permitido","SecTokenError":"Error al obtener token seguridad","MsgError":"Error al enviar mensaje","NoValidToken":"Token de seguridad no valido","BackgError":"Error al guardar fondo en BD","ColorError":"Error al guardar color en BD","MsgInvalid":"Mensaje invalido,vacio o no entendible. No se permiten Carecteres especiales","HexError":"Codigo Hex no valido;#012345 Ej","pages":"páginas"},
    "en":{"placeholder":"Write a message","buttonToken":"Check","saveHex":"Save Color HEX","configTheme":"Theme Configuration","principalColor":"Principal Color:","textColor":"Text Color:","DomainNotAllowed":"Domain not allowed","SecTokenError":"Error obtaining security token","MsgError":"Error sending message","NoValidToken":"Invalid security token","BackgError":"Error when saving background to DB","ColorError":"Error when saving color in BD","MsgInvalid":"Invalid, empty or not understandable message. No special characters allowed","HexError":"Invalid Hex code;#012345 Example","pages":"pages"},
}

// Funcion para carga de token seguridad y verificacion de temas
window.onload=funcionesInicio;
// Funcion para cambio de idioma de pagina
window.onlanguagechange=obtenerIdioma;

// Funcion para control de tamaño entrada de mensaje
inputMsg.addEventListener('input', () => {
    // Obtener el tamaño de scroll de elemento ingreso
    const scrollHeight = inputMsg.scrollHeight;
    // Obtencion de valor de entrada
    if(!jQuery("#txtMsg").val()){
        // Tipo de mensaje texto
        msgTipo=true
        // Cambio de propiedades de entrada
        inputMsg.style.overflowY = 'hidden';
        inputMsg.style.height = '37px';        
        // Cambio de icono de microfono a envio
        cambiarIcnBtnInic()
    }else {
        // Tipo de mensaje audio
        msgTipo=false
        // Cambio de icono de microfono a envio
        cambiarIcnBtnInic()
        // COntrol de tamaño conforme aumenta o disminuye el contenido de entrada
        if (scrollHeight > 100) {
            inputMsg.style.overflowY = 'scroll';
            inputMsg.style.height = '100px';
        } else {
            inputMsg.style.overflowY = 'hidden';
            inputMsg.style.height = scrollHeight + 'px';
        }
    }    
});

// Evento de escucha para scroll de elemento de contenedor, boton de desplazado a fondo
divLista.addEventListener('scroll',() => {
    if (divLista.offsetHeight + divLista.scrollTop < divLista.scrollHeight) {
        divBoton.style.display='flex'
        divBoton.style.zIndex="100001"
    }else{
        divBoton.style.display='none'
    }
})

// Funcion para cambiar icono de envio mensaje
function cambiarIcnBtnInic(){
    if(msgTipo){
        imgbtnMic.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="24px" height="24px"><path d="M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm330-170c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1z"/></svg>'
    }else{
        imgbtnMic.innerHTML='<svg viewBox="0 0 24 24" focusable="false" height="24px" width="24px" fill="currentColor"><path d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path></svg>'   
    }
}

// Funcion para generado de elemento carga
function generateLoading(origin){
    // Creacion de elemento para lista de mensajes
    const actualMsg=document.createElement('list-item-chat')
    // Cambio de id para identificaicon de elemento carga
    actualMsg.id="loading"
    // Condicion para diferenciar mensaje de sistema o usuario
    if(origin){
        actualMsg.classList.add('inverse-row')
    }
    // Creacion elemento de carga
    const loadingIcon=document.createElement('loading-chat')    
    loadingIcon.classList.add('lds-dual-ring')
    loadingIcon.id="loadingIcon"
    // Adicion de elemento a contenedor
    actualMsg.appendChild(loadingIcon)
    // Adicion de elemento a lista de mensajes
    listaMsg.appendChild(actualMsg)
    // Vaciado de entrada
    inputMsg.value=""
    // Accion de scroll al fondo elemento
    divLista.scrollTo(0, divLista.scrollHeight);
}

// Funcion para eliminar evento de carga
function deleteLoading(){
    jQuery('#loading').remove()
}

function alternarContenedorAvatar(){
    jQuery("avatar-chat").toggle('scale');
    jQuery("contenedor-chat").toggle('scale');
}

function obtenerToken(){
    axios.post(dominioAPI.concat('token'),{
        domain:window.location.host
    })
    .then(function (response) {
        sessionStorage.setItem('token',response.data.token);
        sessionStorage.setItem('id',response.data.id);        
        consultarTema()        
        jQuery("avatar-chat").click(alternarContenedorAvatar)
    })
    .catch(function(error){
        console.error(error)
        if(sessionStorage.getItem("idioma")=="es"){
            window.alert(diccionario["es"]["SecTokenError"])
        }else{
            window.alert(diccionario["en"]["SecTokenError"])
        }
    })
}

function createMsgElement(origin,message){
    const actualMsg=document.createElement('list-item-chat')
    const containerMsg=document.createElement('card-chat')
    if(origin){
        actualMsg.classList.add('inverse-row')        
        // containerMsg.classList.add('color-sec-back')
        // containerMsg.classList.add('color-sec-color')        
        containerMsg.style.backgroundColor="#FFFFFF"
        containerMsg.style.color="#000000"
        var msjLimpio = message.replace(/(\r\n|\n|\r)/gm, " ")
        msjLimpio = msjLimpio.replace(/(\(|\)|\[|\])/gm, " ")
        console.log(msjLimpio)
        if(/.pdf/.test(msjLimpio)){
            let enlaces=obtenerEnlaces(msjLimpio)
            console.log(enlaces)
            for (let i=0;i<enlaces.length;i++){                
                downloadPDF(enlaces[i],containerMsg)                
            }            
        }else{
            if(/http/.test(msjLimpio)){
                let link=msjLimpio.substring(msjLimpio.indexOf('http'),msjLimpio.indexOf('.com')+4)                
                let aux=msjLimpio.replace('http',"<a style='color:blue' target='_blank' href=http")
                aux=aux.replace('.com','.com/>'+link+'</a>')
                containerMsg.innerHTML=aux
            }else{
                containerMsg.innerHTML=message
            }
            
        }        
    }else{        
        containerMsg.classList.add('color-primario-fondo')
        containerMsg.classList.add('color-primario-texto')
        containerMsg.innerHTML=message
    }
    actualMsg.appendChild(containerMsg)
    listaMsg.appendChild(actualMsg)
    inputMsg.value=""    
    divLista.scrollTo(0, divLista.scrollHeight);
}

function downloadPDF(fileName,element){

    const filaDscPdf = document.createElement('fila-flexible-chat')
    filaDscPdf.style.flexDirection='row'

    const columnaIcono=document.createElement('icon-chat')    
    columnaIcono.classList.add('centrado-vertical')
    columnaIcono.classList.add('centrado-horizontal')
    columnaIcono.style.color='#f34646'
    columnaIcono.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="24px" height="35px"> <path d="M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4l215.2 215.3zM790.2 326L602 137.8V326h188.2zM633.22 637.26c-15.18-.5-31.32.67-49.65 2.96-24.3-14.99-40.66-35.58-52.28-65.83l1.07-4.38 1.24-5.18c4.3-18.13 6.61-31.36 7.3-44.7.52-10.07-.04-19.36-1.83-27.97-3.3-18.59-16.45-29.46-33.02-30.13-15.45-.63-29.65 8-33.28 21.37-5.91 21.62-2.45 50.07 10.08 98.59-15.96 38.05-37.05 82.66-51.2 107.54-18.89 9.74-33.6 18.6-45.96 28.42-16.3 12.97-26.48 26.3-29.28 40.3-1.36 6.49.69 14.97 5.36 21.92 5.3 7.88 13.28 13 22.85 13.74 24.15 1.87 53.83-23.03 86.6-79.26 3.29-1.1 6.77-2.26 11.02-3.7l11.9-4.02c7.53-2.54 12.99-4.36 18.39-6.11 23.4-7.62 41.1-12.43 57.2-15.17 27.98 14.98 60.32 24.8 82.1 24.8 17.98 0 30.13-9.32 34.52-23.99 3.85-12.88.8-27.82-7.48-36.08-8.56-8.41-24.3-12.43-45.65-13.12zM385.23 765.68v-.36l.13-.34a54.86 54.86 0 015.6-10.76c4.28-6.58 10.17-13.5 17.47-20.87 3.92-3.95 8-7.8 12.79-12.12 1.07-.96 7.91-7.05 9.19-8.25l11.17-10.4-8.12 12.93c-12.32 19.64-23.46 33.78-33 43-3.51 3.4-6.6 5.9-9.1 7.51a16.43 16.43 0 01-2.61 1.42c-.41.17-.77.27-1.13.3a2.2 2.2 0 01-1.12-.15 2.07 2.07 0 01-1.27-1.91zM511.17 547.4l-2.26 4-1.4-4.38c-3.1-9.83-5.38-24.64-6.01-38-.72-15.2.49-24.32 5.29-24.32 6.74 0 9.83 10.8 10.07 27.05.22 14.28-2.03 29.14-5.7 35.65zm-5.81 58.46l1.53-4.05 2.09 3.8c11.69 21.24 26.86 38.96 43.54 51.31l3.6 2.66-4.39.9c-16.33 3.38-31.54 8.46-52.34 16.85 2.17-.88-21.62 8.86-27.64 11.17l-5.25 2.01 2.8-4.88c12.35-21.5 23.76-47.32 36.05-79.77zm157.62 76.26c-7.86 3.1-24.78.33-54.57-12.39l-7.56-3.22 8.2-.6c23.3-1.73 39.8-.45 49.42 3.07 4.1 1.5 6.83 3.39 8.04 5.55a4.64 4.64 0 01-1.36 6.31 6.7 6.7 0 01-2.17 1.28z"/></svg>'
    
    const div=document.createElement("div-chat")
    div.style.display="flex"
    div.style.flexDirection="column"
    div.style.fontSize="12px"

        const columnaNombre=document.createElement('name-chat')    
        columnaNombre.classList.add('centrado-vertical')
        columnaNombre.classList.add('centrado-horizontal')
        columnaNombre.style.fontsize="12px"
        columnaNombre.innerHTML=fileName.substring(fileName.lastIndexOf('/')+1,fileName.indexOf(".pdf")+4)

        const columnaDetalle=document.createElement('detail-chat')    
        columnaDetalle.classList.add('centrado-vertical')
        columnaDetalle.classList.add('centrado-horizontal')
        columnaDetalle.style.fontsize="12px"
        columnaDetalle.innerHTML="PDF"
    
    div.appendChild(columnaNombre)
    div.appendChild(columnaDetalle)

    const linkDesc= document.createElement('a')
    linkDesc.style.display="flex"    
    linkDesc.href=fileName
    linkDesc.target="_blank"
    linkDesc.download=fileName.substring(fileName.lastIndexOf('/')+1,fileName.indexOf(".pdf")+4)
    linkDesc.style.color="#000000"
   
    linkDesc.appendChild(columnaIcono)
    linkDesc.appendChild(div)
    
    filaDscPdf.appendChild(linkDesc)

    element.appendChild(filaDscPdf)    
}

function stopTimer() {
    clearInterval(elapsedTimeTimer);
}

function loadAudio(recorderAudioAsBlob) {
    
    reader = new FileReader();

    reader.onload = (e) => {
        
        let base64URL = e.target.result;

        let sourceElement = document.createElement("source");        
        audio.appendChild(sourceElement);

        sourceElement.src = base64URL;

        let BlobType = recorderAudioAsBlob.type.includes(";") ?
            recorderAudioAsBlob.type.substr(0, recorderAudioAsBlob.type.indexOf(';')) : recorderAudioAsBlob.type;
            sourceElement.type=BlobType

        audio.load();
    };
    reader.readAsDataURL(recorderAudioAsBlob);
}

function sendTextMsg(message){        
    generateLoading(true)
    axios.post(dominioAPI.concat('bot-question'),{
        question:message,
        language:sessionStorage.getItem("idioma")
    },
    {
        headers: {
            Authorization: "Bearer ".concat(sessionStorage.getItem('token'))
        }
    })
    .then(function (response) {
        contMsg++
        deleteLoading()        
        createMsgElement(true,response.data)
    })
    .catch(function(error){
        console.error(error)
        if(sessionStorage.getItem("idioma")=="es"){
            window.alert(diccionario["es"]["MsgError"])
        }else{
            window.alert(diccionario["en"]["MsgError"])
        }
    })
}

jQuery("#alternarContenedorAvatar").click(alternarContenedorAvatar)

jQuery('#btn-snd-msg').click(function(){
    if(!msgTipo){
        if(validarMensaje(jQuery('.input-chat').val())){
            sendMsgTxt()
            msgTipo=true
            cambiarIcnBtnInic()
        }else{
            jQuery('.input-chat').val("")
        }        
    }else{
        startRecording()
    }
    jQuery('.input-chat').val("")
    jQuery('#txtMsg').css({'overflowY':'hidden','height':'37px'});
})

function sendMsgTxt() {    
    var msgContent=jQuery('.input-chat').val()
    createMsgElement(false,msgContent)
    sendTextMsg(msgContent)    
}

jQuery('.input-chat').keypress(function(e) {
    var key = e.which;
    if(key==13)
    {
        var msgContent=jQuery('.input-chat').val()
        createMsgElement(false,msgContent)
        sendTextMsg(msgContent)        
    }
})

jQuery('.input-chat').keyup(function(e) {
    var key = e.which;
    if(key==13)
    {        
        jQuery('#txtMsg').val("")
        jQuery('#txtMsg').css({'overflowY':'hidden','height':'37px'});
    }
})

jQuery('#btn-scroll').click(() =>{
    divLista.scrollTo(0, divLista.scrollHeight);
})

function startRecording(){
jQuery("#initRow").toggle();
jQuery("#recRow").toggle();
console.log("Recording Audio...");
let recorderAudioIsPlaying = !audio.paused;
audioRecorder.start()
    .then(() => {
        audioRecordStartTime = new Date();
        handleElapsedRecordingTime()
    })
    .catch(error => {
        if (error.message.includes("mediaDevices API or getUserMedia method is not supported in this browser.")) {
            console.log("To record audio, use browsers like Chrome and Firefox.");
        }
        switch (error.name) {
            case 'AbortError': //error from navigator.mediaDevices.getUserMedia
                console.error("An AbortError has occured.");
                break;
            case 'NotAllowedError': //error from navigator.mediaDevices.getUserMedia
                console.error("A NotAllowedError has occured. User might have denied permission.");
                break;
            case 'NotFoundError': //error from navigator.mediaDevices.getUserMedia
                console.error("A NotFoundError has occured. No Audio Record Device");
                break;
            case 'NotReadableError': //error from navigator.mediaDevices.getUserMedia
                console.error("A NotReadableError has occured.");
                break;
            case 'SecurityError': //error from navigator.mediaDevices.getUserMedia or from the MediaRecorder.start
                console.error("A SecurityError has occured.");
                break;
            case 'TypeError': //error from navigator.mediaDevices.getUserMedia
                console.error("A TypeError has occured.");
                break;
            case 'InvalidStateError': //error from the MediaRecorder.start
                console.error("An InvalidStateError has occured.");
                break;
            case 'UnknownError': //error from the MediaRecorder.start
                console.error("An UnknownError has occured.");
                break;
            default:
                console.error("An error occured with the error name " + error.name);
        };
        console.log(error)
    });
}

jQuery('#pause-rec-chat').click(function() {
    if(!recordPause){
        console.log('Recording pause...')
        audioRecorder.pause()
        .then(blob=>{
            loadAudio(blob)
        })        
        recordPause=!recordPause
        cambiarIconoPause()
        jQuery('p-chat').toggle()
        jQuery('canvas').toggle()
        jQuery('audio').toggle()
    }else{        
        audioRecorder.resume()
        console.log('Recording resume...')
        recordPause=!recordPause
        cambiarIconoPause()
        jQuery('p-chat').toggle()
        jQuery('canvas').toggle()
        jQuery('audio').toggle()
    }    
})

jQuery('#stop-rec-chat').click(function(){
jQuery("#recRow").toggle();
jQuery("#initRow").toggle();
console.log("Stopping Audio Recording...");
audioRecorder.stop()
    .then(audioAsblob => {
        loadAudio(audioAsblob);
        stopTimer();
        txtPieSgRec.innerHTML="00:00"
        sendAudMsg()
        recordPause=false
    })
    .catch(error => {
        switch (error.name) {
            case 'InvalidStateError':
                console.error("An InvalidStateError has occured.");
                break;
            default:
                console.error("An error occured with the error name " + error.name);
        };
    });    
})

jQuery('#del-rec-chat').click(function(){
    console.log("Canceling audio...");
    audioRecorder.cancel()
    recordPause=false
    audio.innerHTML=""
    txtPieSgRec.innerHTML="00:00"
    stopTimer()    
    if(document.getElementsByTagName('audio')[0].style.display!='none'){
        jQuery('p-chat').toggle()
        jQuery('canvas').toggle()
        jQuery('audio').toggle()
    }    
    jQuery("#initRow").toggle();
    jQuery("#recRow").toggle();    
})

function sendAudMsg(){
    generateLoading(false)    
    var form = new FormData();
    const blob = new Blob(audioRecorder.audioBlobs,{'type':'audio/mpeg-3'})
    form.append("file", blob);
    axios.post(dominioAPI.concat('get-audio'),
    form,
    {
        headers: {
            "Accept": "application/json",
            "Content-type": "audio/mpeg-3",
            Authorization: "Bearer ".concat(sessionStorage.getItem('token'))
        }
    }
    )
    .then(result => {
        deleteLoading()
        createMsgElement(false,result.data)
        sendTextMsg(result.data)
    })
    .catch(error=>{
        console.error("Error al obtener texto: ".concat(error))
    })
}

function handleElapsedRecordingTime() {    
    elapsedTimeTimer = window.setInterval(() => {
        if(!recordPause){            
            elapsedTime = computeElapsedTime(audioRecordStartTime);            
            txtPieSgRec.innerHTML=elapsedTime;
        }else{
            audioRecordPausedTime+=1000;            
        }     
    }, 1000);
}

function cambiarIconoPause(){
    if(recordPause){
        imgBtnPas.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="24px" height="24px"><path d="M512 624c93.9 0 170-75.2 170-168V232c0-92.8-76.1-168-170-168s-170 75.2-170 168v224c0 92.8 76.1 168 170 168zm330-170c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 140.3-113.7 254-254 254S258 594.3 258 454c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8 0 168.7 126.6 307.9 290 327.6V884H326.7c-13.7 0-24.7 14.3-24.7 32v36c0 4.4 2.8 8 6.2 8h407.6c3.4 0 6.2-3.6 6.2-8v-36c0-17.7-11-32-24.7-32H548V782.1c165.3-18 294-158 294-328.1z"/></svg>'
    }else{
        imgBtnPas.innerHTML='<svg viewBox="64 64 896 896" focusable="false" fill="currentColor" width="30px" height="30px"><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path><path d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372 372-166.6 372-372-166.6-372-372-372zm-80 524c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304zm224 0c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v304z" fill="#ffffff"></path><path d="M424 352h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8zm224 0h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8z"></path></svg>'
    }
    
}

function computeElapsedTime(startTime) {
    let endTime = new Date();
    let timeDiff = (endTime - startTime) - audioRecordPausedTime;    
    timeDiff = timeDiff / 1000;
    let seconds = Math.floor(timeDiff % 60);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timeDiff = Math.floor(timeDiff / 60);
    let minutes = timeDiff % 60;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    timeDiff = Math.floor(timeDiff / 60);
    let hours = timeDiff % 24;
    timeDiff = Math.floor(timeDiff / 24);
    let days = timeDiff;
    let totalHours = hours + (days * 24);
    totalHours = totalHours < 10 ? "0" + totalHours : totalHours;
    if (totalHours === "00") {
        return minutes + ":" + seconds;
    } else {
        return totalHours + ":" + minutes + ":" + seconds;
    }
}
function buscarTema(){
    for(let i=0;i<document.styleSheets.length;i++){
        if(document.styleSheets[i].title==="estiloChat"){
            return document.styleSheets[i]
        }
    }
}
function cambiarTema(colorfondo,colortexto){
    var reglas=buscarTema()
    for(let i =0;i<reglas.cssRules.length;i++){
        switch(reglas.cssRules[i].selectorText){
            case ".color-back-prin":
                reglas.cssRules[i].style.setProperty('background-color','#EFEAE2')
                break;
            case ".color-primario-fondo":
                reglas.cssRules[i].style.setProperty('background-color',colorfondo)
                break;
            case ".color-primario-texto":
                reglas.cssRules[i].style.setProperty('color',colortexto)
                break;
            case ".color-sec-back":
                reglas.cssRules[i].style.setProperty('background-color',colorfondo)
                break;
            case ".color-sec-color":
                reglas.cssRules[i].style.setProperty('color',colortexto)
                break;
            case ".color-ter-back":
                reglas.cssRules[i].style.setProperty('background-color',colorfondo)
                break;
            case ".color-ter-color":
                reglas.cssRules[i].style.setProperty('color',colortexto)
                break;
            case ".lds-dual-ring::after":                
                reglas.cssRules[i].style.setProperty("border","6px solid "+colorfondo)
                reglas.cssRules[i].style.setProperty("border-color",colorfondo+" transparent "+colorfondo+"transparent")
                break;
        }        
    }
}
function cambiarFondo(colorfondo){
    jQuery('#color-pri').val("")
    var reglas=buscarTema()
    for(let i =0;i<reglas.cssRules.length;i++){
        switch(reglas.cssRules[i].selectorText){            
            case ".color-primario-fondo":
                reglas.cssRules[i].style.setProperty('background-color',colorfondo)
                break;            
            case ".color-sec-back":
                reglas.cssRules[i].style.setProperty('background-color',colorfondo)
                break;            
            case ".color-ter-back":
                reglas.cssRules[i].style.setProperty('background-color',colorfondo)
                break;            
            case ".lds-dual-ring::after":                
                reglas.cssRules[i].style.setProperty("border","6px solid "+colorfondo)
                reglas.cssRules[i].style.setProperty("border-color",colorfondo+" transparent "+colorfondo+"transparent")
                break;
        }        
    }
}
function cambiarColor(colortexto){
    jQuery('#color-sec').val("")
    var reglas=buscarTema()
    for(let i =0;i<reglas.cssRules.length;i++){
        switch(reglas.cssRules[i].selectorText){
            case ".color-primario-texto":
                reglas.cssRules[i].style.setProperty('color',colortexto)
                break;            
            case ".color-sec-color":
                reglas.cssRules[i].style.setProperty('color',colortexto)
                break;            
            case ".color-ter-color":
                reglas.cssRules[i].style.setProperty('color',colortexto)
                break;            
        }        
    }
}

function rgb_to_hex(rgb_color) {
    if (!rgb_color) return ''
    return rgb_color
        .replace(/.*rgba?\(([^(]+)\).*/gi, '$1')
        .split(',')
        .splice(0,3)
        .reduce(function(acc, cur) { return acc+format_hex(cur) }, '');
}

function format_hex(ns) {
    var v;
    return isNaN(v = parseInt(ns)) ? '' : ('00' + v.toString(16)).substr(-2);
}

jQuery('.cambiar-fondo').click(function(e) {
    var bColor = jQuery(this).css('background-color');
    cambiarFondo(bColor)    
    var hex=rgb_to_hex(bColor)    
    guardarFondo('#'+hex)
});

jQuery('.cambiar-color').click(function(e) {
    var bColor = jQuery(this).css('background-color');    
    cambiarColor(bColor)
    var hex=rgb_to_hex(bColor)    
    guardarColor('#'+hex)
});

function cambiarEsquema(){
    desactivarElegirColor()
    txtToken.value=""
    jQuery('#esquema-inicial').toggle()
    jQuery('#esqval').toggle()    
}

function activarElegirColor(){
    divColor.style.display='flex'
    divToken.style.display='none'
    pieVal.style.display='none'
}
function desactivarElegirColor(){
    divColor.style.display='none'
    divToken.style.display='flex'
    pieVal.style.display='flex'
}

jQuery('#menu-container-chat').click(cambiarEsquema)
jQuery('#close-container-val-chat').click(cambiarEsquema)

function verificarToken(){
    axios.post(dominioAPI.concat('verify-auth'),{
        domain:window.location.host,
        token:jQuery('#token').val(),
        id:sessionStorage.getItem('id')
    })
    .then(function (response) {
        activarElegirColor()
    })
    .catch(function(error){
        txtToken.value=""
        console.error(error)
        if(sessionStorage.getItem("idioma")=="es"){
            window.alert(diccionario["es"]["NoValidToken"])
        }else{
            window.alert(diccionario["en"]["NoValidToken"])
        }
    })
}

jQuery('#token').keypress(function(e) {
    var key = e.which;
    if(key==13)
    {
        verificarToken()
        jQuery('#token').val("")
    }
})

jQuery('#snd-token-chat').click(verificarToken)

function consultarTema(){
    axios.post(dominioAPI.concat('consult-style'),{        
        id:sessionStorage.getItem('id')
    })
    .then(function (response) {        
        cambiarTema(response.data[1],response.data[2])
    })
    .catch(function(error){        
        console.error("Tema inexistente para empresa")        
    })
}

function guardarFondo(colorFondo){
    axios.post(dominioAPI.concat('save-background'),{        
        est_emp_id:sessionStorage.getItem('id'),
        est_color_fondo_prin:'#EFEAE2',
        est_color_prin_fondo:colorFondo,        
        est_color_sec_fondo:colorFondo,        
        est_color_ter_fondo:colorFondo        
    })
    .then(function (response) {        
        console.log("Guardado fondo con exito")
        console.log(response)
    })
    .catch(function(error){        
        console.error(error)
        if(sessionStorage.getItem("idioma")=="es"){
            window.alert(diccionario["es"]["BackgError"])
        }else{
            window.alert(diccionario["en"]["BackgError"])
        }
    })
}
function guardarColor(colorFondo){
    axios.post(dominioAPI.concat('save-color'),{
        est_emp_id:sessionStorage.getItem('id'),
        est_color_prin_color:colorFondo,
        est_color_sec_color:colorFondo,
        est_color_ter_color:colorFondo
    })
    .then(function (response) {        
        console.log("Guardado color con exito")
        console.log(response)
    })
    .catch(function(error){        
        console.error(error)
        if(sessionStorage.getItem("idioma")=="es"){
            window.alert(diccionario["es"]["ColorError"])
        }else{
            window.alert(diccionario["en"]["ColorError"])
        }
    })
}

function cambiarFondoCodigo(){
    const backtxt=jQuery('#color-pri').val()
    if(validatHexadecimal(backtxt)){
        cambiarFondo(backtxt)
        guardarFondo(backtxt)
    }
    jQuery('#color-pri').val("")    
}

jQuery('#background-btn').click(cambiarFondoCodigo)

jQuery('#color-pri').keypress(function(e) {
    var key = e.which;
    if(key==13)
    {
        cambiarFondoCodigo()
        jQuery('#color-pri').val("")        
    }
})

function cambiarColorCodigo(){
    const backtxt=jQuery('#color-sec').val()
    if(validatHexadecimal(backtxt)){
        cambiarColor(backtxt)
        guardarColor(backtxt)
    }
    jQuery('#color-sec').val("")
}

jQuery('#text-btn').click(cambiarColorCodigo)

jQuery('#color-sec').keypress(function(e) {
    var key = e.which;
    if(key==13)
    {
        cambiarColorCodigo()
        jQuery('#color-sec').val("")
    }
})

function validarMensaje(texto){
    if(texto && /[a-zA-Z]+/g.test(texto) && !(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(texto))){        
        return true
    }else{
        if(sessionStorage.getItem("idioma")=="es"){
            window.alert(diccionario["es"]["MsgInvalid"])
        }else{
            window.alert(diccionario["en"]["MsgInvalid"])
        }
        return false
    }
}

function validatHexadecimal(hex){
    if(hex && /^\u0023[0-9A-F]+$/.test(hex)){
        return true
    }else{
        if(sessionStorage.getItem("idioma")=="es"){
            window.alert(diccionario["es"]["HexError"])
        }else{
            window.alert(diccionario["en"]["HexError"])
        }
        return false        
    }
}

function obtenerIdioma(){
    var lenguaje=document.documentElement.lang || navigator.language
    sessionStorage.setItem('idioma',lenguaje)    
    if(/es/i.test(lenguaje)){
        inputMsg.placeholder=diccionario["es"]["placeholder"]
        btnSndTkn.innerHTML=diccionario["es"]["buttonToken"]
        btnSndBackColor.innerHTML=diccionario["es"]["saveHex"]
        btnSndTextColor.innerHTML=diccionario["es"]["saveHex"]
        columnaCabeceraTitVal.innerHTML=diccionario["es"]["configTheme"]
        etiquetaColorPrin.innerHTML=diccionario["es"]["principalColor"]
        etiquetaColorSec.innerHTML=diccionario["es"]["textColor"]
    }else{
        inputMsg.placeholder=diccionario["en"]["placeholder"]
        btnSndTkn.innerHTML=diccionario["en"]["buttonToken"]
        btnSndBackColor.innerHTML=diccionario["en"]["saveHex"]
        btnSndTextColor.innerHTML=diccionario["en"]["saveHex"]
        columnaCabeceraTitVal.innerHTML=diccionario["en"]["configTheme"]
        etiquetaColorPrin.innerHTML=diccionario["en"]["principalColor"]
        etiquetaColorSec.innerHTML=diccionario["en"]["textColor"]
    }    
}

function funcionesInicio(){
    obtenerToken()
    obtenerIdioma()    
}

function obtenerEnlaces(cadena) {    
    var regex = /(http|https):\/\/[\S]+[pdf]/g;
    return [...new Set(cadena.match(regex))];
  }
  