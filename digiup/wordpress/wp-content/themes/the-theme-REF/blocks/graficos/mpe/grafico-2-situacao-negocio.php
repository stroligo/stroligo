<div class="mb-10 md:mb-36">
<div class=" font-campuni text-xlarge text-azulSebrae leading-6 mb-6">
    <?php the_field('narrativa_mpe_grafico_6_titulo'); ?>
</div>

<ul class="filtro-grafico formpergunta">
    <li class="">
        <input type="checkbox" checked name="situacao-negocio" id="situacao-negocio-geral" class="checkBoxEdited mr-1" />
        <label for="situacao-negocio-geral">
            <?php svg('icon-geral',16,16,"mr-1 fill-cinzaSebrae30");?>
            Geral
        </label>
    </li>
    <li class="">
        <input type="checkbox" checked name="situacao-negocio" id="situacao-negocio-mpe" class="checkBoxEdited mr-1" />
        <label for="situacao-negocio-mpe">
            <?php svg('icon-mpe',16,16,"mr-1 fill-cinzaSebrae30");?>
            MPE
        </label>
    </li>
    <li class="">
        <input type="checkbox" checked name="situacao-negocio" id="situacao-negocio-industria" class="checkBoxEdited mr-1" />
        <label for="situacao-negocio-industria">
            <?php svg('icon-industria',16,16,"mr-1 fill-cinzaSebrae30");?>
            Indústria (MPEs)
        </label>
    </li>
    <li class="">
        <input type="checkbox" checked name="situacao-negocio" id="situacao-negocio-comercio" class="checkBoxEdited mr-1" />
        <label for="situacao-negocio-comercio">
            <?php svg('icon-comercio',16,16,"mr-1 fill-cinzaSebrae30");?>
            Comércio (MPEs)
        </label>
    </li>
    <li class="">
        <input type="checkbox" checked name="situacao-negocio" id="situacao-negocio-servicos" class="checkBoxEdited mr-1" />
        <label for="situacao-negocio-servicos">
            <?php svg('icon-servicos',16,16,"mr-1 fill-cinzaSebrae30");?>
            Serviços  (MPEs)
        </label>
    </li>
</ul>

<svg data-csv='<?php echo csvsToJson(get_field('csv_rep_6')); ?>' class="sebrae-chart" id="grafico-negocio" xmlns:xhtml="http://www.w3.org/1999/xhtml"></svg>

<div>
    <div class="text-cinzaSebrae30 font-bold text-xlarge mb-2 date-grafico-negocio"></div>
    <ul class="grid grid-cols-5 md:grid-cols-5 gap-4">
        <li class="flex flex-col ref-situacao-negocio-geral">
            <div class="flex">
                <div class="flex justify-center">
                    <?php svg('icon-big-geral',40,32,"mr-2 hidden md:flex");?>
                </div>
                <div>
                    <div class="text-cinzaSebrae30 text-xs md:text-base leading-3 md:leading-4 font-bold mb-1 pb-1 ">Geral</div>
                    <div class="mb-2">
                        <p class="text-cinzaSebrae30 text-xs leading-3 md:leading-4 font-bold mb-1 border-b-4 border-rosa pb-1 ">Situação atual</p>
                        <div>
                            <div class="dado-situacao-negocio-geral w-full font-campuni font-bold text-lg leading-4  text-rosa mr-1">0%</div>
                        </div>
                    </div>
                    <div>
                        <p class="text-cinzaSebrae30 text-xs leading-3 md:leading-4 font-bold mb-1 border-b-4 border-rosa pb-1 border-dashed">Expectativa</p>
                        <div>
                            <div class="dado-expectativa-negocio-geral w-full font-campuni font-bold text-lg leading-4  text-rosa mr-1">0%</div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="flex flex-col ref-situacao-negocio-mpe">
            <div class="flex">
                <div class="flex justify-center">
                    <?php svg('icon-big-mpe',40,32,"mr-2 hidden md:flex");?>
                </div>
                <div>
                    <div class="text-cinzaSebrae30 text-xs md:text-base leading-3 md:leading-4 font-bold mb-1 pb-1 ">MPE</div>
                    <div class="mb-2">
                        <p class="text-cinzaSebrae30 text-xs leading-3 md:leading-4 font-bold mb-1 border-b-4 border-azulSebrae pb-1 ">Situação atual</p>
                        <div>
                            <div class="dado-situacao-negocio-mpe w-full font-campuni font-bold text-lg leading-4  text-azulSebrae mr-1">0%</div>
                        </div>
                    </div>
                    <div>
                        <p class="text-cinzaSebrae30 text-xs leading-3 md:leading-4 font-bold mb-1 border-b-4 border-azulSebrae pb-1 border-dashed">Expectativa</p>
                        <div>
                            <div class="dado-expectativa-negocio-mpe w-full font-campuni font-bold text-lg leading-4 text-azulSebrae mr-1">0%</div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="flex flex-col ref-situacao-negocio-industria">
            <div class="flex">
                <div class="flex justify-center">
                    <?php svg('icon-big-industria',40,32,"mr-2 hidden md:flex");?>
                </div>
                <div>
                    <div class="text-cinzaSebrae30 text-xs md:text-base leading-3 md:leading-4 font-bold mb-1 pb-1 ">Indústria</div>
                    <div class="mb-2">
                        <p class="text-cinzaSebrae30 text-xs leading-3 md:leading-4 font-bold mb-1 border-b-4 border-laranja pb-1 ">Situação atual</p>
                        <div>
                            <div class="dado-situacao-negocio-industria w-full font-campuni font-bold text-lg leading-4  text-laranja mr-1">0%</div>
                        </div>
                    </div>
                    <div>
                        <p class="text-cinzaSebrae30 text-xs leading-3 md:leading-4 font-bold mb-1 border-b-4 border-laranja pb-1 border-dashed">Expectativa</p>
                        <div>
                            <div class="dado-expectativa-negocio-industria w-full font-campuni font-bold text-lg leading-4 text-laranja mr-1">0%</div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="flex flex-col ref-situacao-negocio-comercio">
            <div class="flex">
                <div class="flex justify-center">
                    <?php svg('icon-big-comercio',40,32,"mr-2 hidden md:flex");?>
                </div>
                <div>
                    <div class="text-cinzaSebrae30 text-xs md:text-base leading-3 md:leading-4 font-bold mb-1 pb-1 ">Comércio</div>
                    <div class="mb-2">
                        <p class="text-cinzaSebrae30 text-xs leading-3 md:leading-4 font-bold mb-1 border-b-4 border-verdeClaro pb-1 ">Situação atual</p>
                        <div>
                            <div class="dado-situacao-negocio-comercio w-full font-campuni font-bold text-lg leading-4  text-verdeClaro mr-1">0%</div>
                        </div>
                    </div>
                    <div>
                        <p class="text-cinzaSebrae30 text-xs leading-3 md:leading-4 font-bold mb-1 border-b-4 border-verdeClaro pb-1 border-dashed">Expectativa</p>
                        <div>
                            <div class="dado-expectativa-negocio-comercio w-full font-campuni font-bold text-lg leading-4 text-verdeClaro mr-1">0%</div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        <li class="flex flex-col ref-situacao-negocio-servicos">
            <div class="flex">
                <div class="flex justify-center">
                    <?php svg('icon-big-servicos',40,32,"mr-2 hidden md:flex");?>
                </div>
                <div>
                    <div class="text-cinzaSebrae30 text-xs md:text-base leading-3 md:leading-4 font-bold mb-1 pb-1 ">Serviços</div>
                    <div class="mb-2">
                        <p class="text-cinzaSebrae30 text-xs leading-3 md:leading-4 font-bold mb-1 border-b-4 border-lilas pb-1 ">Situação atual</p>
                        <div>
                            <div class="dado-situacao-negocio-servicos w-full font-campuni font-bold text-lg leading-4  text-lilas mr-1">0%</div>
                        </div>
                    </div>
                    <div>
                        <p class="text-cinzaSebrae30 text-xs leading-3 md:leading-4 font-bold mb-1 border-b-4 border-lilas pb-1 border-dashed">Expectativa</p>
                        <div>
                            <div class="dado-expectativa-negocio-servicos w-full font-campuni font-bold text-lg leading-4 text-lilas mr-1">0%</div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</div>  
<div class="w-full flex mt-8">
    <div class="font-lato text-sm text-cinzaSebrae45 ">Fonte: <?php the_field('narrativa_mpe_grafico_6_fonte'); ?></div>
</div>

</div>