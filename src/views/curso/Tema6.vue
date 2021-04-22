<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3
          i.num-title 6
      .h3 Caso de estudio
    p.mt-5 La unidad objeto de estudio no es de nueva creación, sino que lleva años tramitando expedientes de forma local, antes manualmente, ahora por medio de un sistema informático propio. A este sistema informático se le ha añadido recientemente una conexión a un archivo central que funciona como “memoria histórica”: permite recuperar datos y conservar los expedientes cerrados.  La última novedad consiste en ofrecer un servicio propio de la administración electrónica, en el que los usuarios pueden realizar sus tramitaciones vía web, usando su Número de Identificación Fiscal (NIF) como identificación, más una contraseña personal. El mismo sistema de tramitación es usado localmente por un funcionario que atiende a los ciudadanos que se presentan en las dependencias de la unidad.
    
    .tarjeta(style="background: linear-gradient(70deg, #9B235C, #131023, #131023);").p-3.mt-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/componentes/ej-02.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-white Revise el siguiente caso de estudio para profundizar los conceptos descritos en este componente. 
            .col-sm-auto
              a.boton.boton--c(:href="obtenerLink('/downloads/estudio_de_caso_cf1.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
            


</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema5',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped>
.img-18
  width: 18%
  margin-top: -23px
</style>
