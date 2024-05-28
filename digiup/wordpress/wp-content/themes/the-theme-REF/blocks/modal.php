<!-- Pega o Header -->
<?php $current_page = 'modal'; get_header(); ?>

<input type="checkbox" name="lightbox" class="input-lightbox" id="lightbox-sobre" checked>
<div class="lightbox">
    <div class="content bg-gradient-to-br from-[#9285F9] to-[#3B4AFF] flex flex-col">
        <label for="lightbox-sobre" class="lightclose">
            <?php svg('icon-fechar',22,22,"fill-branco ");?>
        </label>
        <div class="lightbox-scroll">
            <div class="flex flex-col ">
                <div class="mb-12 flex items-center justify-center"> <?php svg('logo-dados-navegaveis',224,60,"fill-branco");?> </div>
                <div class="md:flex flex-row gap-4 mb-12 text-branco md:items-center">
                    <div class="md:w-6/12 pb-6 md:pb-0"><img src="<?php tu(); ?>/assets/img/modal/modal.svg"> </div>
                    <div class="md:w-6/12">
                        <div class=" font-campuni font-bold text-4xl mb-6">Bem-vindo ao ambiente de acesso às informações do SEBRAE sobre as micro e pequenas empresas e os microempreendedores individuais.</div>
                        <div>Aqui você poderá fazer consultas sobre informações dos pequenos negócios no Brasil a partir de perguntas estruturadas e conhecer mais sobre estes empreendedores e seus empreendimentos.</div>
                    </div>
                </div>
                <div class="text-branco" id="cookies">
                    <div class="font-bold text-2xl">Aviso de cookies</div>
                    <div class="mb-4">Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua experiência em nossos serviços, personalizar publicidade e recomendar conteúdo de seu interesse. Ao utilizar nossos serviços, você concorda com tal monitoramento descrito em nossa <a target="_blank" href="https://minio-cpe.sebrae.com.br/documento/politica-privacidade.pdf" target="blank" class="underline">Política de Privacidade</a></div>
                    <div>
                        <label for="lightbox-sobre" onclick="setCookies(1)" class="btn btn-azul">Aceitar todos os cookies</label>
                        <label for="lightbox-sobre" onclick="setCookies(2)" class="btn btn-azul">Rejeitar cookies opcionais</label>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</div>



