<!-- Grafico 2 -->
                <div class="mb-10 md:mb-20">
                    <div class=" font-campuni text-xlarge text-azulSebrae leading-6 mb-6">
                        <?php the_field('narrativa_mpe_grafico_5_titulo'); ?>
                    </div>

                    <ul class="filtro-grafico formpergunta">
                        <li class="">
                            <input type="checkbox" checked name="situacao-economia" value="geral" id="situacao-economia-geral" class="checkBoxEdited mr-1" />
                            <label for="situacao-economia-geral">
                                <?php svg('icon-geral',16,16,"mr-1 fill-cinzaSebrae30");?>
                                Geral
                            </label>
                        </li>
                        <li class="">
                            <input type="checkbox" checked name="situacao-economia" value="mpe" id="situacao-economia-mpe" class="checkBoxEdited mr-1" />
                            <label for="situacao-economia-mpe">
                                <?php svg('icon-mpe',16,16,"mr-1 fill-cinzaSebrae30");?>
                                MPE
                            </label>
                        </li>
                        <li class="">
                            <input type="checkbox" checked name="situacao-economia" value="industria" id="situacao-economia-industria" class="checkBoxEdited mr-1" />
                            <label for="situacao-economia-industria">
                                <?php svg('icon-industria',16,16,"mr-1 fill-cinzaSebrae30");?>
                                Indústria (MPEs)
                            </label>
                        </li>
                        <li class="">
                            <input type="checkbox" checked name="situacao-economia" value="comercio" id="situacao-economia-comercio" class="checkBoxEdited mr-1" />
                            <label for="situacao-economia-comercio">
                                <?php svg('icon-comercio',16,16,"mr-1 fill-cinzaSebrae30");?>
                                Comércio (MPEs)
                            </label>
                        </li>
                        <li class="">
                            <input type="checkbox" checked name="situacao-economia" value="servicos" id="situacao-economia-servicos" class="checkBoxEdited mr-1" />
                            <label for="situacao-economia-servicos">
                                <?php svg('icon-servicos',16,16,"mr-1 fill-cinzaSebrae30");?>
                                Serviços  (MPEs)
                            </label>
                        </li>
                    </ul>

                    <svg data-csv='<?php echo csvsToJson(get_field('csv_rep_5')); ?>' class="sebrae-chart" id="grafico-economia" xmlns:xhtml="http://www.w3.org/1999/xhtml"></svg>

                    <div>
                        <div class="text-cinzaSebrae30 font-bold text-xlarge mb-2 date-grafico-economia">Novembro de 2022</div>
                        <ul class="grid grid-cols-5 md:grid-cols-5 gap-4">
                            <li class="flex flex-col ref-situacao-economia-geral">
                                <div class="flex">
                                    <div class="flex justify-center items-center">
                                        <?php svg('icon-big-geral',40,32,"mr-2 hidden md:flex");?>
                                    </div>
                                    <div>
                                        <div class="text-cinzaSebrae30 text-xs md:text-base leading-3 md:leading-4 font-bold mb-1 border-b-4 border-rosa pb-1 ">Geral</div>
                                        <div>
                                        <div class="dado-situacao-economia-geral font-campuni font-bold text-lg leading-4  text-rosa mr-1">0%</div>
                                        </div>
                                
                                    </div>
                                </div>
                            </li>
                            <li class="flex flex-col ref-situacao-economia-mpe">
                                <div class="flex">
                                    <div class="flex justify-center items-center">
                                        <?php svg('icon-big-mpe',40,32,"mr-2 hidden md:flex");?>
                                    </div>
                                    <div>
                                        <div class="text-cinzaSebrae30 text-xs md:text-base leading-3 md:leading-4 font-bold mb-1 border-b-4 border-azulSebrae pb-1">MPE</div>
                                        <div>
                                        <div class="dado-situacao-economia-mpe font-campuni font-bold text-lg leading-4  text-azulSebrae mr-1">0%</div>
                                        </div>
                                
                                    </div>
                                </div>
                            </li>
                            <li class="flex flex-col ref-situacao-economia-industria">
                                <div class="flex">
                                    <div class="flex justify-center items-center">
                                        <?php svg('icon-big-industria',40,32,"mr-2 hidden md:flex");?>
                                    </div>
                                    <div>
                                        <div class="text-cinzaSebrae30 text-xs md:text-base leading-3 md:leading-4 font-bold mb-1 border-b-4 border-laranja pb-1">Indústria</div>
                                        <div>
                                        <div class="dado-situacao-economia-industria font-campuni font-bold text-lg leading-4 text-laranja mr-1">0%</div>
                                        </div>
                                
                                    </div>
                                </div>
                            </li>
                            <li class="flex flex-col ref-situacao-economia-comercio">
                                <div class="flex">
                                    <div class="flex justify-center items-center">
                                        <?php svg('icon-big-comercio',40,32,"mr-2 hidden md:flex");?>
                                    </div>
                                    <div>
                                        <div class="text-cinzaSebrae30 text-xs md:text-base leading-3 md:leading-4 font-bold mb-1 border-b-4 border-verdeClaro pb-1">Comercio</div>
                                        <div>
                                        <div class="dado-situacao-economia-comercio font-campuni font-bold text-lg leading-4  text-verdeClaro mr-1">0%</div>
                                        </div>
                                
                                    </div>
                                </div>
                            </li>
                            <li class="flex flex-col ref-situacao-economia-servicos">
                                <div class="flex">
                                    <div class="flex justify-center items-center">
                                        <?php svg('icon-big-servicos',40,32,"mr-2 hidden md:flex");?>
                                    </div>
                                    <div>
                                        <div class="text-cinzaSebrae30 text-xs md:text-base leading-3 md:leading-4 font-bold mb-1 border-b-4 border-lilas pb-1">Servicos</div>
                                        <div>
                                        <div class="dado-situacao-economia-servicos font-campuni font-bold text-lg leading-4  text-lilas mr-1">0%</div>
                                        </div>
                                
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>  

                    <div class="w-full flex mt-8">
                        <div class="font-lato text-sm text-cinzaSebrae45 ">Fonte: <?php the_field('narrativa_mpe_grafico_5_fonte'); ?></div>
                    </div>
                </div>
