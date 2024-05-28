<!-- Grafico 2 -->
                <div class="mb-10 md:mb-20">

                    <div class=" font-campuni text-xlarge text-azulSebrae leading-6 mb-6">
                        <?php the_field('narrativa_credito_grafico_5_titulo'); ?>
                    </div>
                    
                    <ul class="filtro-grafico formpergunta">
                        <li class="">
                            <input type="checkbox" checked name="taxa-media" value="geral" id="juros-microempresa" class="checkBoxEdited mr-1" />
                            <label for="juros-microempresa">
                                <?php svg('icon-geral',16,16,"mr-1 fill-cinzaSebrae30");?>
                                Microempresas
                            </label>
                        </li>
                        <li class="">
                            <input type="checkbox" checked name="taxa-media" value="mpe" id="juros-pequenaempresa" class="checkBoxEdited mr-1" />
                            <label for="juros-pequenaempresa">
                                <?php svg('icon-mpe',16,16,"mr-1 fill-cinzaSebrae30");?>
                                Pequenas empresas
                            </label>
                        </li>
                        <li class="">
                            <input type="checkbox" checked name="taxa-media" value="industria" id="juros-todas-empresas" class="checkBoxEdited mr-1" />
                            <label for="juros-todas-empresas">
                                <?php svg('icon-industria',16,16,"mr-1 fill-cinzaSebrae30");?>
                                Todas as empresas
                            </label>
                        </li>
                        <li class="">
                            <input type="checkbox" checked name="taxa-media" value="comercio" id="juros-selic" class="checkBoxEdited mr-1" />
                            <label for="juros-selic">
                                <?php svg('icon-comercio',16,16,"mr-1 fill-cinzaSebrae30");?>
                                Selic
                            </label>
                        </li>
                        <li class="">
                            <input type="checkbox" checked name="taxa-media" value="servicos" id="juros-ipca" class="checkBoxEdited mr-1" />
                            <label for="juros-ipca">
                                <?php svg('icon-servicos',16,16,"mr-1 fill-cinzaSebrae30");?>
                                IPCA
                            </label>
                        </li>
                    </ul>

                    <svg data-csv='<?php echo csvsToJson(get_field('csv_rep_5')); ?>' class="sebrae-chart" id="grafico-taxa-media" xmlns:xhtml="http://www.w3.org/1999/xhtml"></svg>

                    <div>
                        <div class="text-cinzaSebrae30 font-bold text-xlarge mb-2 date-grafico-taxa-media">Novembro de 2022</div>
                        <ul class="grid grid-cols-2 gap-2 md:grid-cols-5 md:gap-4 ">
                            <li class="flex flex-col ref-juros-microempresa">
                                <div class="flex">
                                    <div class="flex justify-center items-center">
                                        <?php svg('icon-big-microempresas',40,32,"mr-2 hidden md:flex");?>
                                    </div>
                                    <div>
                                        <div class="text-cinzaSebrae30 text-xs md:text-base leading-3 md:leading-4 font-bold mb-1 border-b-4 border-azulSebrae pb-1 ">Microempresas</div>
                                        <div>
                                        <div class="font-campuni font-bold text-lg leading-4  text-azulSebrae mr-1"><dado class="dado-juros-microempresa"></dado>%&nbsp;a.a.</div>
                                        </div>
                                
                                    </div>
                                </div>
                            </li>
                            <li class="flex flex-col ref-juros-pequenaempresa">
                                <div class="flex">
                                    <div class="flex justify-center items-center">
                                        <?php svg('icon-big-pequenasempresas',40,32,"mr-2 hidden md:flex");?>
                                    </div>
                                    <div>
                                        <div class="text-cinzaSebrae30 text-xs md:text-base leading-3 md:leading-4 font-bold mb-1 border-b-4 border-laranja pb-1">Pequenas empresas</div>
                                        <div>
                                        <div class="font-campuni font-bold text-lg leading-4  text-laranja mr-1"><dado class="dado-juros-pequenaempresa"></dado>%&nbsp;a.a.</div>
                                        </div>
                                
                                    </div>
                                </div>
                            </li>
                            <li class="flex flex-col ref-juros-todas-empresas">
                                <div class="flex">
                                    <div class="flex justify-center items-center">
                                        <?php svg('icon-big-todas-empresas',40,32,"mr-2 hidden md:flex");?>
                                    </div>
                                    <div>
                                        <div class="text-cinzaSebrae30 text-xs md:text-base leading-3 md:leading-4 font-bold mb-1 border-b-4 border-verdeClaro pb-1">Todas as empresas</div>
                                        <div>
                                        <div class="font-campuni font-bold text-lg leading-4 text-verdeClaro mr-1"><dado class="dado-juros-todas-empresas"></dado>%&nbsp;a.a.</div>
                                        </div>
                                
                                    </div>
                                </div>
                            </li>
                            <li class="flex flex-col ref-juros-selic">
                                <div class="flex">
                                    <div class="flex justify-center items-center">
                                        <?php svg('icon-big-selic',40,32,"mr-2 hidden md:flex");?>
                                    </div>
                                    <div>
                                        <div class="text-cinzaSebrae30 text-xs md:text-base leading-3 md:leading-4 font-bold mb-1 border-b-4 border-rosa pb-1">Selic</div>
                                        <div>
                                        <div class="font-campuni font-bold text-lg leading-4  text-rosa mr-1"><dado class="dado-juros-selic"></dado>%&nbsp;a.a.</div>
                                        </div>
                                
                                    </div>
                                </div>
                            </li>
                            <li class="flex flex-col ref-juros-ipca">
                                <div class="flex">
                                    <div class="flex justify-center items-center">
                                        <?php svg('icon-big-ipca',40,32,"mr-2 hidden md:flex");?>
                                    </div>
                                    <div>
                                        <div class="text-cinzaSebrae30 text-xs md:text-base leading-3 md:leading-4 font-bold mb-1 border-b-4 border-lilas pb-1">IPCA</div>
                                        <div>
                                        <div class="font-campuni font-bold text-lg leading-4  text-lilas mr-1"><dado class="dado-juros-ipca"></dado>%&nbsp;a.a.</div>
                                        </div>
                                
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>  

                    <div class="w-full flex mt-8">
                        <div class="font-lato text-sm text-cinzaSebrae45 ">Fonte: <?php the_field('narrativa_credito_grafico_5_fonte'); ?></div>
                    </div>
                </div>