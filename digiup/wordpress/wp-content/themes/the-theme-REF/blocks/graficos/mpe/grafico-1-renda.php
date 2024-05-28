<!-- tirar classe is-visible para habilitar o display none das tabs -->
<div class="tab-content" id="grafico-1-renda">

    <div class="md:w-9/12">
        <h3 class="text-azulSebrae20 mb-4">Qual é a renda estimada para os empreendedores nas MPEs?</h3>
        <p class=" text-lg text-cinzaSebrae20 mb-8 md:mb-9">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae accusamus quia mollitia neque, veritatis inventore corporis soluta molestiae, temporibus autem voluptatibus distinctio ducimus quibusdam quas rerum maxime harum quo aperiam.</p>
    </div>

    <div class="flex flex-col-reverse md:flex-row w-full">
        <!-- grafico -->
        <div class="md:w-9/12 h-fit mb-8 md:mb-0 md:pr-4">
            <svg data-csv='<?php echo csvsToJson(get_field('csv_rep_4')); ?>' class="sebrae-chart" id="grafico-renda" xmlns:xhtml="http://www.w3.org/1999/xhtml"></svg>
        </div>

        <!-- Legenda -->
        <div class="md:w-3/12 flex flex-col justify-center mb-8 md:mb-0">
            <div class="text-azulSebrae20 text-xlarge mb-4 md:mb-5">
            Renda em <b class="date-grafico-renda"></b>
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
                            <dado class="dado-renda-industria"></dado>
                            <span class="tendencia-renda-industria"></span>
                        </div>
                        <div class="text-azulSebrae20 font-lato text-xs">renda estimada</div>
                    </div>
                </div>

                <div>
                    <div class=" bg-cinzaSebrae90 w-full h-2 rounded-md">
                        <div class="bar-pct-renda-industria h-2 bg-laranja rounded-md"> </div>
                    </div>
                    <div class="font-lato text-xs text-azulSebrae20 flex items-center "><span class="text-pct-renda-industria font-campuni font-bold text-lg text-laranja mr-1"></span>da renda para empreendedores no país</div>
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
                            <dado class="dado-renda-comercio"></dado>
                            <span class="tendencia-renda-comercio"></span>
                        </div>
                        <div class="text-azulSebrae20 font-lato text-xs">renda estimada</div>
                    </div>
                </div>

                <div>
                    <div class=" bg-cinzaSebrae90 w-full h-2 rounded-md">
                        <div class="bar-pct-renda-comercio h-2 bg-verdeClaro rounded-md"> </div>
                    </div>
                    <div class="font-lato text-xs text-azulSebrae20 flex items-center "><span class="text-pct-renda-comercio font-campuni font-bold text-lg text-verdeClaro mr-1"></span>da renda para empreendedores no país</div>
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
                            <dado class="dado-renda-servicos"></dado>
                            <span class="tendencia-renda-servicos"></span>
                        </div>
                        <div class="text-azulSebrae20 font-lato text-xs">renda estimada</div>
                    </div>
                </div>

                <div>
                    <div class=" bg-cinzaSebrae90 w-full h-2 rounded-md">
                        <div class="bar-pct-renda-servicos h-2 bg-lilas rounded-md"> </div>
                    </div>
                    <div class="font-lato text-xs text-azulSebrae20 flex items-center "><span class="text-pct-renda-servicos font-campuni font-bold text-lg text-lilas mr-1"></span>da renda para empreendedores no país</div>
                </div>
            </div>

        </div>

    </div>
    <div class="md:w-9/12 font-lato text-xs md:text-sm text-cinzaSebrae45 mb-9">Fonte: Pesquisa Sebrae – Pulso dos Pequenos Negócios – 1ª edição. Coleta: 26 de agosto a 11 de setembro de 2022.</div>

</div>