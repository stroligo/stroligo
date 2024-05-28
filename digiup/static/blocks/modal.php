<!-- Pega o Header -->
<?php $current_page = 'modal'; get_header(); ?>

<input type="radio" name="lightbox" class="input-lightbox" id="lightbox-curadoria">
<div class="lightbox">
    <div class="content bg-gradient-to-br from-[#9285F9] to-[#3B4AFF] items-center justify-center flex flex-col">
        <label for="lightbox-curadoria" class="lightclose">
            <?php svg('icon-fechar',22,22,"fill-branco ");?>
        </label>
        <div class="lightbox-scroll">
            <div class="flex flex-col ">
                <div class=" mb-12 flex items-center justify-center"> <?php svg('logo-dados-navegaveis',224,60,"fill-black");?> </div>
                <div class="md:flex flex-row gap-4 mb-12 text-branco">
                    <div class="md:w-6/12 pb-6 md:pb-0"><img src="./assets/img/modal/modal.png"> </div>
                    <div class="md:w-6/12">
                        <div class=" font-campuni font-bold text-4xl mb-6">O que é o portal “dados navegáveis” praesent sed ex molestie lorem dolor.</div>
                        <div>Suspendisse consequat, purus id fringilla consectetur, purus dui suscipit ante, et hendrerit orci ex consequat sem. Mauris eget ligula in purus viverra commodo. Ut vel ex libero. Pellentesque non urna eu sapien pulvinar viverra at volutpat nibh consequat.</div>
                    </div>
                </div>
                <div class="text-branco">
                    <div class=" font-bold text-2xl">Aviso de cookies</div>
                    <div class=" mb-4">Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua experiência em nossos serviços, personalizar publicidade e recomendar conteúdo de seu interesse. Ao utilizar nossos serviços, você concorda com tal monitoramento descrito em nossa <a href="https://minio-cpe.sebrae.com.br/documento/politica-privacidade.pdf" class="underline">Política de Privacidade</a></div>
                    <div>
                        <button class="btn btn-azul">Aceitar todos os cookies</button>
                        <button  class="btn btn-azul">Rejeitar cookies opcionais</button>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</div>



