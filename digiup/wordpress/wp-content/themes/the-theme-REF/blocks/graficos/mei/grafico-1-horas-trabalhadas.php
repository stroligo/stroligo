<!-- tirar classe is-visible para habilitar o display none das tabs -->
<div class="tab-content" id="grafico-1-horas-trabalhadas">

<div class="md:w-9/12">
    <h3 class="text-azulSebrae20 mb-4"><?php the_field('narrativa_mei_grafico_3_titulo'); ?></h3>
    <div class="text-lg text-cinzaSebrae20 mb-8 md:mb-9 wysiwyg-medium"><?php the_field('narrativa_mei_grafico_3_texto'); ?></div>
</div>

<div class="flex flex-col-reverse md:flex-row w-full">
    <!-- grafico -->
    <div class="md:w-9/12 h-fit mb-8 md:mb-0 md:pr-4">
        <svg data-csv='<?php echo csvsToJson(get_field('csv_rep_3')); ?>' class="sebrae-chart" id="grafico-horas" xmlns:xhtml="http://www.w3.org/1999/xhtml"></svg>
    </div>

    <!-- Legenda -->
    <div class="md:w-3/12 flex flex-col justify-center mb-8 md:mb-0">
        <div class="text-azulSebrae20 text-xlarge mb-4 md:mb-5">
            Horas trabalhadas em <b class="date-grafico-horas">dez/21</b>
        </div>

        <div class="flex flex-col mb-4 md:mb-8">
            <div class="flex mb-4">
                <div class="flex justify-center items-center">
                    <?php svg('icon-big-cnpj',70,56,"mr-2");?>
                </div>
                <div>
                    <div class="text-laranja text-xlarge leading-6 font-bold mb-0">Trabalhadores com CNPJ</div>
                    <div class="text-azulSebrae20 font-campuni text-xlarge leading-6 font-bold flex items-center">
                    <dado class="dado-horas-com-cnpj"></dado>
                    <span class="tendencia-horas-com-cnpj"></span>
                </div>
                    <div class="text-azulSebrae20 font-lato text-xs">horas trabalhadas por semana</div>
                </div>
            </div>
        </div>

        <div class="flex flex-col mb-4 md:mb-8">
            <div class="flex mb-4">
                <div class="flex justify-center items-center">
                    <?php svg('icon-big-sem-cnpj',70,56,"mr-2");?>
                </div>
                <div>
                    <div class=" text-verdeClaro text-xlarge leading-6 font-bold mb-0">Trabalhadores sem CNPJ</div>
                    <div class="text-azulSebrae20 font-campuni text-xlarge leading-6 font-bold flex items-center">
                        <dado class="dado-horas-sem-cnpj"></dado>
                        <span class="tendencia-horas-sem-cnpj"></span>
                    </div>
                    <div class="text-azulSebrae20 font-lato text-xs">horas trabalhadas por semana</div>
                </div>
            </div>
        </div>

    </div>


</div>
<div class="md:w-9/12 font-lato text-xs md:text-sm text-cinzaSebrae45 mb-9">Fonte: <?php the_field('narrativa_mei_grafico_3_fonte'); ?></div>

</div>