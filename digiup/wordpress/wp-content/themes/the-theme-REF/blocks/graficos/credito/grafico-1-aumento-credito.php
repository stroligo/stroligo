<!-- tirar classe is-visible para habilitar o display none das tabs -->
<div class="tab-content" id="grafico-1-aumento-credito">

    <div class="md:w-9/12">
        <h3 class="text-azulSebrae20 mb-4"><?php the_field('narrativa_credito_grafico_2_titulo'); ?></h3>
        <div class=" text-lg text-cinzaSebrae20 mb-8 md:mb-9 wysiwyg-medium"><?php the_field('narrativa_credito_grafico_2_texto'); ?></div>
    </div>

    <div class="flex flex-col-reverse md:flex-row w-full">
        <!-- grafico -->
        <div class="md:w-9/12 md:h-fit h-64 mb-8 md:mb-0 md:pr-4">
            <svg data-csv='<?php echo csvsToJson(get_field('csv_rep_2')); ?>' class="sebrae-chart" id="grafico-aumento-credito" xmlns:xhtml="http://www.w3.org/1999/xhtml"></svg>
        </div>

        <!-- Legenda -->
        <div class="md:w-3/12 flex flex-col justify-center mb-8 md:mb-0">
            <?php svg('icon-big-arrow-up',70,56,"mb-2");?>
            <div class="text-azulSebrae font-bold text-xlarge mb-2 md:mb-3">
            Crescimento da concessão<br>
            <big>6,9% a.a.</big> <!-- <b class="date-grafico-aumento-credito"></b> -->
            </div>
            
            <div class="flex flex-col mb-4 md:mb-8">
                <div class="text-azulSebrae20 font-lato text-sm">de crescimento médio do crédito concedido às MPEs nos últimos 5 anos</div>
                <div class="text-azulSebrae20 font-lato text-xs"><span class="font-campuni font-bold text-lg text-azulSebrae mr-1">39,8%</span> de crescimento total nos últimos 5 anos</div>
            </div>

        </div>

    </div>
    <div class="md:w-9/12 font-lato text-xs md:text-sm text-cinzaSebrae45 mb-9">Fonte: <?php the_field('narrativa_credito_grafico_2_fonte'); ?></div>

</div>