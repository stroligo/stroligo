<!-- tirar classe is-visible para habilitar o display none das tabs -->
<div class="tab-content" id="grafico-1-mpe-demais">

    <div class="md:w-9/12">
        <h3 class="text-azulSebrae20 mb-4"><?php the_field('narrativa_credito_grafico_3_titulo'); ?></h3>
        <div class=" text-lg text-cinzaSebrae20 mb-8 md:mb-9 wysiwyg-medium"><?php the_field('narrativa_credito_grafico_3_texto'); ?></div>
    </div>

    <div class="flex flex-col md:flex-row gap-4 md:gap-10 mb-10">
        <!-- Col1 -->
        <div class="flex flex-col w-full md:w-1/2">
            <!-- grafico -->
            <div class="h-fit mb-4 ">
                <svg data-csv='<?php echo csvsToJson(get_field('csv_rep_3')); ?>' class="sebrae-chart" id="grafico-mpe-demais-saldo" xmlns:xhtml="http://www.w3.org/1999/xhtml"></svg>
            </div>

            <!-- Legenda -->
            <div class="flex flex-col justify-center mb-8 md:mb-0 px-9">
                <div class="text-azulSebrae20 text-xlarge mb-2 ">
                    Saldo em <b class="date-grafico-mpe-demais-saldo"></b>
                </div>

                <ul class="grid grid-cols-2 md:grid-cols-2 gap-9 ">
                    <li class="flex flex-col">
                        <div class="flex">
                            <div class="flex justify-center items-center">
                                <?php svg('icon-big-mpe',40,32,"mr-2 hidden md:flex");?>
                            </div>
                            <div class="w-full">
                                <div class="text-cinzaSebrae30 text-xs md:text-base leading-3 md:leading-4 font-bold mb-1 border-b-4 border-azulSebrae pb-1">MPE</div>
                                <div>
                                <div class="font-campuni font-bold text-lg leading-4  text-azulSebrae mr-1"><dado class="dado-pct-saldo-mpe"></dado>%</div>
                                </div>
                        
                            </div>
                        </div>
                    </li>
                    <li class="flex flex-col">
                        <div class="flex">
                            <div class="flex justify-center items-center">
                                <?php svg('icon-big-demais',40,32,"mr-2 hidden md:flex");?>
                            </div>
                            <div class="w-full">
                                <div class="text-cinzaSebrae30 text-xs md:text-base leading-3 md:leading-4 font-bold mb-1 border-b-4 border-laranja pb-1 ">Geral</div>
                                <div>
                                <div class="font-campuni font-bold text-lg leading-4  text-laranja mr-1"><dado class="dado-pct-saldo-demais"></dado>%</div>
                                </div>
                        
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Col2 -->
        <div class="flex flex-col w-full md:w-1/2">
            <!-- grafico -->
            <div class="h-fit mb-4  ">
                <svg class="sebrae-chart" id="grafico-mpe-demais-concessao" xmlns:xhtml="http://www.w3.org/1999/xhtml"></svg>
            </div>

            <!-- Legenda -->
            <div class="flex flex-col justify-center mb-8 md:mb-0 px-9">
                <div class="text-azulSebrae20 text-xlarge mb-2 ">
                    Concessão em <b class="date-grafico-mpe-demais-concessao"></b>
                </div>

                <ul class="grid grid-cols-2 md:grid-cols-2 gap-9 ">
                    <li class="flex flex-col">
                        <div class="flex">
                            <div class="flex justify-center items-center">
                                <?php svg('icon-big-mpe',40,32,"mr-2 hidden md:flex");?>
                            </div>
                            <div class="w-full">
                                <div class="text-cinzaSebrae30 text-xs md:text-base leading-3 md:leading-4 font-bold mb-1 border-b-4 border-azulSebrae pb-1">MPE</div>
                                <div>
                                <div class="font-campuni font-bold text-lg leading-4  text-azulSebrae mr-1"><dado class="dado-pct-concessao-mpe"></dado>%</div>
                                </div>
                        
                            </div>
                        </div>
                    </li>
                    <li class="flex flex-col">
                        <div class="flex">
                            <div class="flex justify-center items-center">
                                <?php svg('icon-big-demais',40,32,"mr-2 hidden md:flex");?>
                            </div>
                            <div class="w-full">
                                <div class="text-cinzaSebrae30 text-xs md:text-base leading-3 md:leading-4 font-bold mb-1 border-b-4 border-laranja pb-1 ">Demais empresas</div>
                                <div>
                                <div class="font-campuni font-bold text-lg leading-4 text-laranja mr-1"><dado class="dado-pct-concessao-demais"></dado>%</div>
                                </div>
                        
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="md:w-9/12 font-lato text-xs md:text-sm text-cinzaSebrae45 mb-9">Fonte: <?php the_field('narrativa_credito_grafico_3_fonte'); ?></div>

</div>