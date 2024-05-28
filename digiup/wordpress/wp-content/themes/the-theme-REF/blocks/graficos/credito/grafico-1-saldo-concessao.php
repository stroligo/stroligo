<!-- tirar classe is-visible para habilitar o display none das tabs -->
<div class="tab-content is-visible" id="grafico-1-saldo-concessao">

    <div class="md:w-9/12">
        <h3 class="text-azulSebrae20 mb-4"><?php the_field('narrativa_credito_grafico_1_titulo'); ?></h3>
        <div class=" text-lg text-cinzaSebrae20 mb-8 md:mb-9 wysiwyg-medium"><?php the_field('narrativa_credito_grafico_1_texto'); ?></div>
    </div>

    <div class="flex flex-col-reverse md:flex-row w-full">
        <!-- grafico -->
        <div class="md:w-9/12 h-fit mb-8 md:mb-0 md:pr-4">
            <svg data-csv='<?php echo csvsToJson(get_field('csv_rep_1')); ?>' class="sebrae-chart" id="grafico-saldo-concessao" xmlns:xhtml="http://www.w3.org/1999/xhtml"></svg>
        </div>

        <!-- Legenda -->
        <div class="md:w-3/12 flex flex-col justify-center mb-8 md:mb-0">
            <div class="text-azulSebrae20 text-xlarge mb-4 md:mb-5">
            Crédito em <b class="date-grafico-saldo-concessao"></b>
            </div>
            <!-- Industria -->
            <div class="flex flex-col mb-4 md:mb-8">
                <div class="flex mb-4">
                    <div class="flex justify-center items-center">
                        <?php svg('icon-big-credito',70,56,"mr-2");?>
                    </div>
                    <div>
                        <div class="text-azulSebrae text-xlarge leading-6 font-bold mb-0">Concessão</div>
                        <div class="text-azulSebrae20 font-campuni text-xlarge leading-6 font-bold flex items-center">
                            R$&nbsp;<dado class="dado-valor-concessao-mpe"></dado>
                            <span class="tendencia-valor-concessao-mpe"></span>
                        </div>
                    </div>
                </div>

                <div>
                    <div class=" bg-cinzaSebrae90 w-full h-2 rounded-md">
                        <div class="bar-pct-valor-concessao-mpe h-2 bg-azulSebrae rounded-md"> </div>
                    </div>
                    <div class="font-lato text-xs text-azulSebrae20 flex items-center "><span class="text-pct-valor-concessao-mpe font-campuni font-bold text-lg text-azulSebrae mr-1"></span> do valor concedido para todas as empresas</div>
                </div>
            </div>
            <!-- Comercio -->
            <div class="flex flex-col mb-4 md:mb-8">
                <div class="flex mb-4">
                    <div class="flex justify-center items-center">
                        <?php svg('icon-big-saldo',70,56,"mr-2");?>
                    </div>
                    <div>
                        <div class=" text-laranja text-xlarge leading-6 font-bold mb-0">Saldo</div>
                        <div class="text-azulSebrae20 font-campuni text-xlarge leading-6 font-bold flex items-center">
                            R$&nbsp;<dado class="dado-valor-saldo-mpe"></dado>
                            <span class="tendencia-valor-saldo-mpe"></span>
                        </div>
                    </div>
                </div>

                <div>
                    <div class=" bg-cinzaSebrae90 w-full h-2 rounded-md">
                        <div class="bar-pct-valor-saldo-mpe h-2 bg-laranja rounded-md"> </div>
                    </div>
                    <div class="font-lato text-xs text-azulSebrae20 flex items-center "><span class="text-pct-valor-saldo-mpe font-campuni font-bold text-lg text-laranja mr-1"></span> do valor concedido para todas as empresas</div>
                </div>
            </div>
    
        </div>

    </div>
    <div class="md:w-9/12 font-lato text-xs md:text-sm text-cinzaSebrae45 mb-9">Fonte: <?php the_field('narrativa_credito_grafico_1_fonte'); ?></div>

</div>