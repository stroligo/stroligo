<!-- tirar classe is-visible para habilitar o display none das tabs -->
<div class="tab-content" id="grafico-1-simples-massa-salarial">

    <div class="md:w-9/12">
        <h3 class="text-azulSebrae20 mb-4"><?php the_field('narrativa_credito_grafico_1_titulo'); ?></h3>
        <div class=" text-lg text-cinzaSebrae20 mb-8 md:mb-9 wysiwyg-medium"><?php the_field('narrativa_credito_grafico_1_texto'); ?></div>
    </div>

    <div class="flex flex-col-reverse md:flex-row w-full">
        <!-- grafico -->
        <div class="md:w-9/12 h-fit mb-8 md:mb-0 md:pr-4">
            <svg data-csv='<?php echo csvsToJson(get_field('csv_rep_4')); ?>' class="sebrae-chart" id="grafico-simples-massa-salarial" xmlns:xhtml="http://www.w3.org/1999/xhtml"></svg>
        </div>

        <!-- Legenda -->
        <div class="md:w-3/12 flex flex-col justify-center mb-8 md:mb-0">
            <div class="text-azulSebrae20 text-xlarge mb-4 md:mb-5">
            Massa Salarial em <b class="date-grafico-simples-massa-salarial"></b>
            </div>
            <!-- Simples -->
            <div class="flex flex-col mb-4 md:mb-8">
                <div class="flex mb-4">
                    <div class="flex justify-center items-center">
                        <?php svg('icon-big-simples',70,56,"mr-2");?>
                    </div>
                    <div>
                        <div class="text-azulSebrae text-xlarge leading-6 font-bold mb-0">SIMPLES Nacional</div>
                        <div class="text-azulSebrae20 font-campuni text-xlarge leading-6 font-bold flex items-center">
                            R$&nbsp;<dado class="dado-simples-massa-salarial"></dado>
                            <span class="tendencia-simples-massa-salarial"></span>
                        </div>
                    </div>
                </div>

                <div>
                    <div class=" bg-cinzaSebrae90 w-full h-2 rounded-md">
                        <div class="bar-pct-simples-massa-salarial h-2 bg-azulSebrae rounded-md"></div>
                    </div>
                    <div class="font-lato text-xs text-azulSebrae20 flex items-center "><span class="text-pct-simples-massa-salarial font-campuni font-bold text-lg text-azulSebrae mr-1"></span> do todo</div>
                </div>
            </div>
    
        </div>

    </div>
    <div class="md:w-9/12 font-lato text-xs md:text-sm text-cinzaSebrae45 mb-9">Fonte: <?php the_field('narrativa_simples_grafico_4_fonte'); ?></div>

</div>