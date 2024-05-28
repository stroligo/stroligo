<!-- tirar classe is-visible para habilitar o display none das tabs -->
<div class="tab-content" id="grafico-1-simples-multiplicador">

    <div class="md:w-9/12">
        <h3 class="text-azulSebrae20 mb-4"><?php the_field('narrativa_simples_grafico_3_titulo'); ?></h3>
        <div class=" text-lg text-cinzaSebrae20 mb-8 md:mb-9 wysiwyg-medium"><?php the_field('narrativa_simples_grafico_3_texto'); ?></div>
    </div>

    <div class="flex flex-col md:flex-row w-full">
        <!-- grafico -->
        <div class="md:w-9/12 h-fit mb-24 md:mb-0 md:pr-6" id="grafico-simples-multiplicador" data-json='<?php echo json_encode(get_field('narrativa_simples_grafico_3_rep')); ?>'></div>

        <!-- Legenda -->
        <div class="md:w-3/12 flex flex-col justify-center mb-8 md:mb-0">
            <div class="text-azulSebrae20 text-xlarge mb-4 md:mb-5">
            Efeito multiplicador em <b><?php the_field('narrativa_simples_grafico_3_ano-efeito-multi'); ?></b>
            </div>
            <!-- Industria -->
            <div class="flex flex-col mb-4 md:mb-8">
                <div class="flex items-center mb-4">
                    <div class="flex justify-center items-center">
                        <?php svg('icon-big-credito',70,56,"mr-2");?>
                    </div>
                    <div class="text-azulSebrae leading-6 font-bold mb-0 text-xlarge">Setor</div>
                </div>

                <p class="text-lg">A cada R$1,00 gasto em uma empresa do SIMPLES, são gerados <b><?php the_field('narrativa_big_numbers_texto_3'); ?></b> na economia</p>
            </div>    
        </div>

    </div>
    <div class="md:w-9/12 font-lato text-xs md:text-sm text-cinzaSebrae45 mb-9">Fonte: <?php the_field('narrativa_simples_grafico_3_fonte'); ?></div>

</div>