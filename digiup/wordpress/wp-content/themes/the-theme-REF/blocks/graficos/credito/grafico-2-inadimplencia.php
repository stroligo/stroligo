                    <!-- Grafico 2 -->
                    <div class="mb-10 md:mb-36">

                    <div class=" font-campuni text-xlarge text-azulSebrae leading-6 mb-6">
                        <?php the_field('narrativa_credito_grafico_6_titulo'); ?>
                    </div>
                    
                    <ul class="filtro-grafico formpergunta">
                        <li class="">
                            <input type="checkbox" checked name="inadimplencia-media" value="geral" id="inadimplencia-microempresa" class="checkBoxEdited mr-1" />
                            <label for="inadimplencia-microempresa">
                                <?php svg('icon-geral',16,16,"mr-1 fill-cinzaSebrae30");?>
                                Microempresas
                            </label>
                        </li>
                        <li class="">
                            <input type="checkbox" checked name="inadimplencia-media" value="mpe" id="inadimplencia-pequenaempresa" class="checkBoxEdited mr-1" />
                            <label for="inadimplencia-pequenaempresa">
                                <?php svg('icon-mpe',16,16,"mr-1 fill-cinzaSebrae30");?>
                                Pequenas empresas
                            </label>
                        </li>
                        <li class="">
                            <input type="checkbox" checked name="inadimplencia-media" value="industria" id="inadimplencia-todas-empresas" class="checkBoxEdited mr-1" />
                            <label for="inadimplencia-todas-empresas">
                                <?php svg('icon-industria',16,16,"mr-1 fill-cinzaSebrae30");?>
                                Todas as empresas
                            </label>
                        </li>
                    </ul>

                    <svg data-csv='<?php echo csvsToJson(get_field('csv_rep_6')); ?>' class="sebrae-chart" id="grafico-inadimplencia-media" xmlns:xhtml="http://www.w3.org/1999/xhtml"></svg>

                    <div>
                        <div class="text-cinzaSebrae30 font-bold text-xlarge mb-2 date-grafico-inadimplencia-media">Novembro de 2022</div>
                        <ul class="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-4 ">
                            <li class="flex flex-col ref-inadimplencia-microempresa">
                                <div class="flex">
                                    <div class="flex justify-center items-center">
                                        <?php svg('icon-big-microempresas',40,32,"mr-2 hidden md:flex");?>
                                    </div>
                                    <div>
                                        <div class="text-cinzaSebrae30 text-xs md:text-base leading-3 md:leading-4 font-bold mb-1 border-b-4 border-azulSebrae pb-1 ">Microempresas</div>
                                        <div>
                                        <div class="font-campuni font-bold text-lg leading-4  text-azulSebrae mr-1"><dado class="dado-inadimplencia-microempresa"></dado>%</div>
                                        </div>
                                
                                    </div>
                                </div>
                            </li>
                            <li class="flex flex-col ref-inadimplencia-pequenaempresa">
                                <div class="flex">
                                    <div class="flex justify-center items-center">
                                        <?php svg('icon-big-pequenasempresas',40,32,"mr-2 hidden md:flex");?>
                                    </div>
                                    <div>
                                        <div class="text-cinzaSebrae30 text-xs md:text-base leading-3 md:leading-4 font-bold mb-1 border-b-4 border-laranja pb-1">Pequenas empresas</div>
                                        <div>
                                        <div class="font-campuni font-bold text-lg leading-4  text-laranja mr-1"><dado class="dado-inadimplencia-pequenaempresa"></dado>%</div>
                                        </div>
                                
                                    </div>
                                </div>
                            </li>
                            <li class="flex flex-col ref-inadimplencia-todas-empresas">
                                <div class="flex">
                                    <div class="flex justify-center items-center">
                                        <?php svg('icon-big-todas-empresas',40,32,"mr-2 hidden md:flex");?>
                                    </div>
                                    <div>
                                        <div class="text-cinzaSebrae30 text-xs md:text-base leading-3 md:leading-4 font-bold mb-1 border-b-4 border-verdeClaro pb-1">Todas as empresas</div>
                                        <div>
                                        <div class="font-campuni font-bold text-lg leading-4 text-verdeClaro mr-1"><dado class="dado-inadimplencia-todas-empresas"></dado>%</div>
                                        </div>
                                
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>  

                    <div class="w-full flex mt-8">
                        <div class="font-lato text-sm text-cinzaSebrae45 ">Fonte: <?php the_field('narrativa_credito_grafico_6_fonte'); ?></div>
                    </div>
                </div>