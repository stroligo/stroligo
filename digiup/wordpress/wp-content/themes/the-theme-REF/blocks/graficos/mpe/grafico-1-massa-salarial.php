<!-- tirar classe is-visible para habilitar o display none das tabs -->
<div class="tab-content" id="grafico-1-massa-salarial">

    <div class="md:w-9/12">
        <h3 class="text-azulSebrae20 mb-4"><?php the_field('narrativa_mpe_grafico_3_titulo'); ?></h3>
        <div class="text-lg text-cinzaSebrae20 mb-8 md:mb-9 wysiwyg-medium"><?php the_field('narrativa_mpe_grafico_3_texto'); ?></div>
    </div>

    <div class="flex flex-col-reverse md:flex-row w-full">
        <!-- grafico -->
        <div class="md:w-9/12 h-fit mb-8 md:mb-0 md:pr-4">
            <svg data-csv='<?php echo csvsToJson(get_field('csv_rep_3')); ?>' class="sebrae-chart" id="grafico-massa-salarial" xmlns:xhtml="http://www.w3.org/1999/xhtml"></svg>
        </div>

        <!-- Legenda -->
        <div class="md:w-3/12 flex flex-col justify-center mb-8 md:mb-0">
            <div class="text-azulSebrae20 text-xlarge mb-4 md:mb-5">
            Massa salarial em <b class="date-grafico-massa-salarial"></b>
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
                            R$&nbsp;<dado class="dado-massa-salarial-industria"></dado>
                            <span class="tendencia-massa-salarial-industria"></span>
                        </div>
                        <div class="text-azulSebrae20 font-lato text-xs">em massa salarial</div>
                    </div>
                </div>

                <div>
                    <div class=" bg-cinzaSebrae90 w-full h-2 rounded-md">
                        <div class="bar-pct-massa-salarial-industria h-2 bg-laranja rounded-md"> </div>
                    </div>
                    <div class="font-lato text-xs text-azulSebrae20 flex items-center "><span class="text-pct-massa-salarial-industria font-campuni font-bold text-lg text-laranja mr-1"></span> da massa salarial do país</div>
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
                            R$&nbsp;<dado class="dado-massa-salarial-comercio"></dado>
                            <span class="tendencia-massa-salarial-comercio"></span>
                        </div>
                        <div class="text-azulSebrae20 font-lato text-xs">em massa salarial</div>
                    </div>
                </div>

                <div>
                    <div class=" bg-cinzaSebrae90 w-full h-2 rounded-md">
                        <div class="bar-pct-massa-salarial-comercio h-2 bg-verdeClaro rounded-md"> </div>
                    </div>
                    <div class="font-lato text-xs text-azulSebrae20 flex items-center "><span class="text-pct-massa-salarial-comercio font-campuni font-bold text-lg text-verdeClaro mr-1"></span> da massa salarial do país</div>
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
                            R$&nbsp;<dado class="dado-massa-salarial-servicos"></dado>
                            <span class="tendencia-massa-salarial-servicos"></span>
                        </div>
                        <div class="text-azulSebrae20 font-lato text-xs">em massa salarial</div>
                    </div>
                </div>

                <div>
                    <div class=" bg-cinzaSebrae90 w-full h-2 rounded-md">
                        <div class="bar-pct-massa-salarial-servicos h-2 bg-lilas rounded-md"> </div>
                    </div>
                    <div class="font-lato text-xs text-azulSebrae20 flex items-center "><span class="text-pct-massa-salarial-servicos font-campuni font-bold text-lg text-lilas mr-1"></span> da massa salarial do país</div>
                </div>
            </div>

        </div>

    </div>
    <div class="md:w-9/12 font-lato text-xs md:text-sm text-cinzaSebrae45 mb-9">Fonte: <?php the_field('narrativa_mpe_grafico_3_fonte'); ?></div>

</div>