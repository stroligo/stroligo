<!-- tirar classe is-visible para habilitar o display none das tabs -->
<div class="tab-content is-visible" id="grafico-1-pib">

    <div class="md:w-9/12">
        <h3 class="text-azulSebrae20 mb-4"><?php the_field('narrativa_mpe_grafico_1_titulo'); ?></h3>
        <div class="text-lg text-cinzaSebrae20 mb-8 md:mb-9 wysiwyg-medium"><?php the_field('narrativa_mpe_grafico_1_texto'); ?></div>
    </div>

    <div class="flex flex-col-reverse md:flex-row w-full">
        <!-- grafico -->
        <div class="md:w-9/12 h-fit mb-8 md:mb-0 md:pr-4">
            <svg data-csv='<?php echo csvsToJson(get_field('csv_rep_1')); ?>' class="sebrae-chart" id="grafico-pib" xmlns:xhtml="http://www.w3.org/1999/xhtml"></svg>
        </div>

        <!-- Legenda -->
        <div class="md:w-3/12 flex flex-col justify-center mb-8 md:mb-0">
            <div class="text-azulSebrae20 text-xlarge mb-4 md:mb-5">
            PIB em <b class="date-grafico-pib"></b>
            </div>
            <!-- Industria -->
            <div class="flex flex-col mb-4 md:mb-8">
                <div class="flex mb-4">
                    <div class="flex justify-center items-center">
                        <?php svg('icon-big-industria',70,56,"mr-2");?>
                    </div>
                    <div>
                        <div class="text-laranja text-xlarge leading-6 font-bold mb-0">Industria</div>
                        <div class="text-azulSebrae20 font-campuni text-xlarge leading-6 font-bold flex items-center">
                            R$&nbsp;<dado class="dado-pib-industria"></dado>
                            <span class="tendencia-pib-industria"></span>
                        </div>
                        <div class="text-azulSebrae20 font-lato text-xs">em valor adicionado</div>
                    </div>
                </div>

                <div>
                    <div class=" bg-cinzaSebrae90 w-full h-2 rounded-md">
                        <div class="bar-pct-pib-industria h-2 bg-laranja rounded-md"> </div>
                    </div>
                    <div class="font-lato text-xs text-azulSebrae20 flex items-center "><span class="text-pct-pib-industria font-campuni font-bold text-lg text-laranja mr-1"></span> do valor adicionado no país</div>
                </div>
            </div>
            <!-- Comercio -->
            <div class="flex flex-col mb-4 md:mb-8">
                <div class="flex mb-4">
                    <div class="flex justify-center items-center">
                        <?php svg('icon-big-comercio',70,56,"mr-2");?>
                    </div>
                    <div>
                        <div class=" text-verdeClaro text-xlarge leading-6 font-bold mb-0">Comercio</div>
                        <div class="text-azulSebrae20 font-campuni text-xlarge leading-6 font-bold flex items-center">
                            R$&nbsp;<dado class="dado-pib-comercio"></dado>
                            <span class="tendencia-pib-comercio"></span>
                        </div>
                        <div class="text-azulSebrae20 font-lato text-xs">em valor adicionado</div>
                    </div>
                </div>

                <div>
                    <div class=" bg-cinzaSebrae90 w-full h-2 rounded-md">
                        <div class="bar-pct-pib-comercio h-2 bg-verdeClaro rounded-md"> </div>
                    </div>
                    <div class="font-lato text-xs text-azulSebrae20 flex items-center "><span class="text-pct-pib-comercio font-campuni font-bold text-lg text-verdeClaro mr-1"></span> do valor adicionado no país</div>
                </div>
            </div>
            <!-- Servicos -->
            <div class="flex flex-col mb-4 md:mb-8">
                <div class="flex mb-4">
                    <div class="flex justify-center items-center">
                        <?php svg('icon-big-servicos',70,56,"mr-2");?>
                    </div>
                    <div>
                        <div class=" text-lilas text-xlarge leading-6 font-bold mb-0">Serviços</div>
                        <div class="text-azulSebrae20 font-campuni text-xlarge leading-6 font-bold flex items-center">
                            R$&nbsp;<dado class="dado-pib-servicos"></dado>
                            <span class="tendencia-pib-servicos"></span>
                        </div>
                        <div class="text-azulSebrae20 font-lato text-xs">em valor adicionado</div>
                    </div>
                </div>

                <div>
                    <div class=" bg-cinzaSebrae90 w-full h-2 rounded-md">
                        <div class="bar-pct-pib-servicos h-2 bg-lilas rounded-md"></div>
                    </div>
                    <div class="font-lato text-xs text-azulSebrae20 flex items-center "><span class="text-pct-pib-servicos font-campuni font-bold text-lg text-lilas mr-1"></span> do valor adicionado no país</div>
                </div>
            </div>
    
        </div>

    </div>
    <div class="md:w-9/12 font-lato text-xs md:text-sm text-cinzaSebrae45 mb-9">Fonte: <?php the_field('narrativa_mpe_grafico_1_fonte'); ?></div>

</div>