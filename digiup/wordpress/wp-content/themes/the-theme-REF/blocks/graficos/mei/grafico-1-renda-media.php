<!-- tirar classe is-visible para habilitar o display none das tabs -->
<div class="tab-content" id="grafico-1-renda-media">

<div class="md:w-9/12">
    <h3 class="text-azulSebrae20 mb-4"><?php the_field('narrativa_mei_grafico_4_titulo'); ?></h3>
    <div class="text-lg text-cinzaSebrae20 mb-8 md:mb-9 wysiwyg-medium"><?php the_field('narrativa_mei_grafico_4_texto'); ?></div>
</div>

<div class="flex flex-col-reverse md:flex-row w-full">
    <!-- grafico -->
    <div class="md:w-9/12 h-fit mb-8 md:mb-0 md:pr-4">
        <svg data-csv='<?php echo csvsToJson(get_field('csv_rep_4')); ?>' class="sebrae-chart" id="grafico-renda-media" xmlns:xhtml="http://www.w3.org/1999/xhtml"></svg>
    </div>

    <!-- Legenda -->
    <div class="md:w-3/12 flex flex-col justify-center mb-8 md:mb-0">
        <div class="text-azulSebrae20 text-xlarge mb-4 md:mb-5">
            Renda média em <b class="date-grafico-renda">dez/21</b>
        </div>

        <div class="flex flex-col mb-4 md:mb-8">
            <div class="flex mb-4">
                <div class="flex justify-center items-center">
                    <?php svg('icon-big-cnpj',70,56,"mr-2");?>
                </div>
                <div>
                    <div class="text-laranja text-xlarge leading-6 font-bold mb-0">Trabalhadores com CNPJ</div>
                    <div class="text-azulSebrae20 font-campuni text-xlarge leading-6 font-bold flex items-center">
                    R$&nbsp;<dado class="dado-renda-com-cnpj"></dado>
                    <span class="tendencia-renda-com-cnpj"></span>
                </div>
                    <div class="text-azulSebrae20 font-lato text-xs">de renda média mensal</div>
                </div>
            </div>
        </div>

        <div class="flex flex-col mb-4 md:mb-8">
            <div class="flex mb-4">
                <div class="flex justify-center items-center">
                    <?php svg('icon-big-sem-cnpj',70,56,"mr-2");?>
                </div>
                <div>
                    <div class=" text-verdeClaro text-xlarge leading-6 font-bold mb-0">Trabalhadores sem CNPJ</div>
                    <div class="text-azulSebrae20 font-campuni text-xlarge leading-6 font-bold flex items-center">
                        R$&nbsp;<dado class="dado-renda-sem-cnpj"></dado>
                        <span class="tendencia-renda-sem-cnpj"></span>
                    </div>
                    <div class="text-azulSebrae20 font-lato text-xs">de renda média mensal</div>
                </div>
            </div>
        </div>

    </div>


</div>
<div class="md:w-9/12 font-lato text-xs md:text-sm text-cinzaSebrae45 mb-9">Fonte: <?php the_field('narrativa_mei_grafico_4_fonte'); ?></div>

</div>