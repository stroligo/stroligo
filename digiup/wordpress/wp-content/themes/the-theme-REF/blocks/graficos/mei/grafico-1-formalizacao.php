<!-- tirar classe is-visible para habilitar o display none das tabs -->
<div class="tab-content" id="grafico-1-formalizacao">

<div class="md:w-9/12">
    <h3 class="text-azulSebrae20 mb-4"><?php the_field('narrativa_mei_grafico_2_titulo'); ?></h3>
    <div class="text-lg text-cinzaSebrae20 mb-8 md:mb-9 wysiwyg-medium"><?php the_field('narrativa_mei_grafico_2_texto'); ?></div>
</div>

<div class="flex flex-col-reverse md:flex-row w-full">
    <!-- grafico -->
    <div class="md:w-9/12 h-fit mb-8 md:mb-0 md:pr-4">
        <svg data-csv='<?php echo csvsToJson(get_field('csv_rep_2')); ?>' class="sebrae-chart" id="grafico-formalizacao" xmlns:xhtml="http://www.w3.org/1999/xhtml"></svg>
    </div>

    <!-- Legenda -->
    <div class="md:w-3/12 flex flex-col justify-center mb-8 md:mb-0">
        <div class="text-azulSebrae20 text-xlarge mb-4 md:mb-5">
        Informalidade em <b class="date-grafico-formalizacao"> 2022</b>
        </div>

        <div class="flex flex-col mb-4 md:mb-8">
            <div class="mb-4">
                <div class="flex justify-center items-center">
                    <div>
                        <!-- aqui vai entrar um quadradinho, só pra deixar o espaço -->
                    </div>                
                </div>
                <div>
                    <div class="text-azulSebrae text-large leading-6 font-bold mb-0">Empregado(a) com carteira</div>
                    <div class="text-azulSebrae20 font-campuni text-xlarge leading-6 font-bold flex items-center">
                        <dado class="dado-forma-com-carteira"></dado>%
                        <span class="tendencia-forma-com-carteira"></span>
                    </div>
                </div>
            </div>
            <div class="mb-4">
                <div class="flex justify-center items-center">
                    <div>
                        <!-- aqui vai entrar um quadradinho, só pra deixar o espaço -->
                    </div>                
                </div>
                <div>
                    <div class="text-laranja text-large leading-6 font-bold mb-0">Empregado(a) sem carteira</div>
                    <div class="text-azulSebrae20 font-campuni text-xlarge leading-6 font-bold flex items-center">
                        <dado class="dado-forma-sem-carteira"></dado>%
                        <span class="tendencia-forma-sem-carteira"></span>
                    </div>
                </div>
            </div>
            <div class="mb-4">
                <div class="flex justify-center items-center">
                    <div>
                        <!-- aqui vai entrar um quadradinho, só pra deixar o espaço -->
                    </div>                
                </div>
                <div>
                    <div class="text-rosa text-large leading-6 font-bold mb-0">Empreendedor informal (sem CNPJ)</div>
                    <div class="text-azulSebrae20 font-campuni text-xlarge leading-6 font-bold flex items-center">
                        <dado class="dado-forma-informal"></dado>%
                        <span class="tendencia-forma-informal"></span>
                    </div>
                </div>
            </div>
            <div class="mb-4">
                <div class="flex justify-center items-center">
                    <div>
                        <!-- aqui vai entrar um quadradinho, só pra deixar o espaço -->
                    </div>                
                </div>
                <div>
                    <div class="text-verdeClaro text-large leading-6 font-bold mb-0">Outros</div>
                    <div class="text-azulSebrae20 font-campuni text-xlarge leading-6 font-bold flex items-center">
                        <dado class="dado-forma-outros"></dado>%
                        <span class="tendencia-forma-outros"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>


</div>
<div class="md:w-9/12 font-lato text-xs md:text-sm text-cinzaSebrae45 mb-9">Fonte: <?php the_field('narrativa_mei_grafico_2_fonte'); ?></div>

</div>