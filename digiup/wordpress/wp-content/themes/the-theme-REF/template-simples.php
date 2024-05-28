<!-- Pega o Header -->
<?php $current_page = 'simples'; 
get_header(); 
/*
 Template Name: Simples Nacional
 Template Post Type: narrativas
*/
?>

<!-- Hero -->
<section class="bg-cinzaSebrae97 bg-gradient-to-b from-[#FFB380] to-[#FCDECF]">
    
        <div class="container mx-auto px-6 pt-4">
           
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="text-azulSebrae20  pt-8 md:pt-0  flex flex-col justify-center">
                    <div class=" font-campuni mb-2">Narrativas SEBRAE</div>
                    <h1 class="mb-2 md:mb-6 text-h2 md:text-h1">
                        <?php the_title(); ?>
                    </h1>
                </div>
                <div style="width: 95%;">
                    <?php echo get_template_part('blocks/hero/image-hero'); ?>
                </div>
            </div>
           
            <div class="flex justify-center">
                <div class="mb-6 md:w-8/12 mt-6 md:mt-16 wysiwyg-big text-cinzaSebrae30">
                    <?php the_field('narrativa_texto_intro'); ?>
                </div>
            </div>

            <!-- Big Numbers -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:mt-12 md:mb-16">

                <div class="flex flex-col items-center justify-center text-center">
                    <img src="<?php tu(); ?>/assets/img/simples/big1.svg">
                    <?php if(get_field('narrativa_big_numbers_texto_before_1')) : ?>
                        <p class="cinzaSebrae20 text-lg"><?php the_field('narrativa_big_numbers_texto_before_1'); ?>
                    <?php endif; ?>
                    <p class="text-azulSebrae30 text-5xl md:text-6xl font-bold font-campuni"><?php the_field('narrativa_big_numbers_texto_1'); ?></p>
                    <?php if(get_field('narrativa_big_numbers_texto_after_1')) : ?>
                    <p class="cinzaSebrae20 text-lg mb-4"><?php the_field('narrativa_big_numbers_texto_after_1'); ?></p>
                    <?php endif; ?>
                    <button class="btn btn-azul ver-detalhes" data-detalhe="grafico-emprego">Ver detalhes</button>
                </div>

                <div class="flex flex-col items-center justify-center text-center">
                    <img src="<?php tu(); ?>/assets/img/simples/big2.svg">
                    <?php if(get_field('narrativa_big_numbers_texto_before_2')) : ?>
                        <p class="cinzaSebrae20 text-lg"><?php the_field('narrativa_big_numbers_texto_before_2'); ?>
                    <?php endif; ?>
                    <p class="text-azulSebrae30 text-5xl md:text-6xl font-bold font-campuni"><?php the_field('narrativa_big_numbers_texto_2'); ?></p>
                    <?php if(get_field('narrativa_big_numbers_texto_after_2')) : ?>
                    <p class="cinzaSebrae20 text-lg mb-4"><?php the_field('narrativa_big_numbers_texto_after_2'); ?></p>
                    <?php endif; ?>
                    <button class="btn btn-azul ver-detalhes" data-detalhe="grafico-saldo">Ver detalhes</button>
                </div>
                
                <div class="flex flex-col items-center justify-center text-center">
                    <img src="<?php tu(); ?>/assets/img/simples/big3.svg">
                    <?php if(get_field('narrativa_big_numbers_texto_before_3')) : ?>
                        <p class="cinzaSebrae20 text-lg"><?php the_field('narrativa_big_numbers_texto_before_3'); ?>
                    <?php endif; ?>
                    <p class="text-azulSebrae30 text-5xl md:text-6xl font-bold font-campuni"><?php the_field('narrativa_big_numbers_texto_3'); ?></p>
                    <?php if(get_field('narrativa_big_numbers_texto_after_3')) : ?>
                    <p class="cinzaSebrae20 text-lg mb-4"><?php the_field('narrativa_big_numbers_texto_after_3'); ?></p>
                    <?php endif; ?>
                    <button class="btn btn-azul ver-detalhes" data-detalhe="grafico-1-mpe-demais">Ver detalhes</button>
                </div>

                <div class="flex flex-col items-center justify-center text-center">
                    <img src="<?php tu(); ?>/assets/img/simples/big4.svg">
                    <?php if(get_field('narrativa_big_numbers_texto_before_4')) : ?>
                        <p class="cinzaSebrae20 text-lg"><?php the_field('narrativa_big_numbers_texto_before_4'); ?>
                    <?php endif; ?>
                    <p class="text-azulSebrae30 text-5xl md:text-6xl font-bold font-campuni"><?php the_field('narrativa_big_numbers_texto_4'); ?></p>
                    <?php if(get_field('narrativa_big_numbers_texto_after_4')) : ?>
                    <p class="cinzaSebrae20 text-lg mb-4"><?php the_field('narrativa_big_numbers_texto_after_4'); ?></p>
                    <?php endif; ?>
                    <button class="btn btn-azul ver-detalhes" data-detalhe="grafico-1-tomadores-transacoes">Ver detalhes</button>
                </div>

                  

            </div>

            <div class="flex justify-center md:pb-44">
                <?php if(get_field('narrativa_texto_big_numbers')) : ?>
                    <div class="mb-6 md:w-8/12 mt-6 md:mt-10 wysiwyg-big text-cinzaSebrae30">
                        <?php the_field('narrativa_texto_big_numbers'); ?>
                    </div>
                <?php endif; ?>
            </div>

        </div>
</section>

<!-- Area Collapsed -->
<section class="bg-branco-mt-2 relative" id="detalhes">
    
    <!-- Grafismo  --> 
    <div class="flex w-full  h-full justify-between items-start relative -top-6 md:top-0 md:mb-14" >  
        <?php svg('grafismo3-p1',"735","93","");?>  
       <div class="hidden md:flex"> <?php svg('grafismo3-p2',"369","62","");?></div>
    </div>

    <div class="container mx-auto px-6 -mt-12 md:-mt-0 md:mb-28 tab-wrapper tab-detalhes">  
        <!-- Filtro -->
        <div class="flex flex-col md:flex-row md:justify-between mt-8 md:mt-0 mb-8">
            <!-- Menu Desktop -->
            <div class="hidden md:flex">   
                <ul class="menu-simples  ">
                    <li data-tab="grafico-1-simples-empregos" class="active">Empregos</li>
                    <li data-tab="grafico-1-simples-saldo">Saldo</li>
                    <li data-tab="grafico-1-simples-multiplicador">Multiplicador</li>
                    <li data-tab="grafico-1-simples-massa-salarial">Massa salarial</li>
                </ul>
            </div>

            <button class="flex text-azulSebrae items-center justify-end md:justify-center font-lato mb-6 md:mb-0 pointer-events-auto" id="fechar-detalhes">
              <?php svg('icon-fechar',12,12,"fill-azulSebrae mr-3");?> Fechar detalhes
            </button>

            <form class="w-full md:hidden relative"> 
                <select class="btn-azul w-full rounded-md font-lato tab-select">
                    <option selected value="grafico-1-simples-empregos">Empregos</option>
                    <option value="grafico-1-simples-saldo">Saldo</option>
                    <option value="grafico-1-simples-multiplicador">Multiplicador</option>
                    <option value="grafico-1-simples-massa-salarial">Massa salarial</option>
                </select>
            </form>

        </div>
        
        <?php get_template_part('blocks/graficos/simples/grafico-1-empregos'); ?>
        <?php get_template_part('blocks/graficos/simples/grafico-1-saldo'); ?>
        <?php get_template_part('blocks/graficos/simples/grafico-1-multiplicador'); ?>
        <?php get_template_part('blocks/graficos/simples/grafico-1-massa-salarial'); ?>

    </div>

    <!-- Grafismo 4 --> 
    <div class=" flex w-full  h-full justify-between items-start relative  bg-azulSebrae97" >  
        <?php svg('grafismo4-p1',"700","93","flex w-full  h-full justify-between items-start");?>  
        <div class="hidden md:flex"> <?php svg('grafismo4-p2',"540","63","");?></div>
    </div>
</section>

<!-- Dinamica Regional -->
<section class="bg-azulSebrae97">
    <div class="container mx-auto px-6 pt-8 md:pt-20">
        <div class="flex flex-col md:flex-row mb-8 md:mb-16">

            <div class="w-full md:w-6/12  relative items-center flex">
                <div class="ml-1">
                        <img src="<?php tu(); ?>/assets/img/simples/dinamica_logo_desktop.png" alt="logo dinamica">
                </div>
            </div>


            <div class="w-full md:w-6/12 text-cinzaSebrae30 md:pl-4  items-center flex flex-col wysiwyg-medium">
                <?php the_field('narrativa_simples_texto_intro_1'); ?>
            </div>
        </div>
       
        <!-- Filter -->
        <div class="flex flex-col md:flex-row justify-between mb-1 md:mb-12 ">
            <div class="flex flex-col w-full md:w-8/12">
                <div class=" font-lato text-cinzaSebrae45 mb-1">Exibir:</div>
                <!-- Menu Desktop -->
                <div class="md:flex">   
                    <ul class="menu-mutavel">
                        <li data-mapampeseletor="pib">PIB</li>
                        <li data-mapampeseletor="empregos">Empregos</li>
                        <li data-mapampeseletor="massasalarial">Massa salarial</li>
                    </ul>
                </div>    

            </div>
            <div class="w-full md:w-4/12">
                <div class="font-lato text-cinzaSebrae45 mb-2">Filtrar MPEs por Setor:</div>
                <div class="flex md:flex">   
                    <ul class="filtro-simples">
                        <li data-mapampefiltro="industria"><?php svg('icon-industria',12,14,"mr-1");?>Industria</li>
                        <li data-mapampefiltro="comercio"><?php svg('icon-comercio',16,14,"mr-1");?>Comércio</li>
                        <li data-mapampefiltro="servico"><?php svg('icon-servicos',16,14,"mr-1");?>Serviços</li>
                        <li data-mapampefiltro="total"><?php svg('icon-todos',16,16,"mr-1");?>Todos</li>
                    </ul>
           
                </div>
            </div>
        </div>

        <div class="md:flex flex-col">
            <div class="w-full flex flex-col-reverse md:flex-row mb-4">
                <div class="md:w-7/12 md:pr-[8.333%] flex flex-col">
                     <!-- Legenda -->
                    <div class="mb-8 flex-auto grow flex flex-col justify-center childanimate" id="mapampe_legenda">-</div>
           
                    <!-- Sub Legenda -->
                    <div>
                        <div class="mb-2" id="mapampe_sublegenda"></div>

                        <div class="w-full h-2 rounded-md bg-cinzaSebrae75 flex mb-4">
                            <div id="mapampe_barra_industria" class="h-2 bg-laranja rounded-l-md transition-all"> </div>
                            <div id="mapampe_barra_comercio" class="h-2 bg-verdeClaro transition-all"> </div>
                            <div id="mapampe_barra_servico" class="h-2 bg-lilas rounded-r-md transition-all"> </div>
                        </div>

                        <div class="flex flex-col md:flex-row w-full ">
                            <div class="flex flex-col mb-4 mr-10 md:mb-4">
                                <div class="flex">
                                    <div class="flex justify-center items-center">
                                        <?php svg('icon-big-industria',40,32,"mr-2");?>
                                    </div>
                                    <div class="w-full">
                                        <div class="text-cinzaSebrae30 text-base leading-4 font-bold mb-1">Indústria</div>
                                        <div>
                                        <div class="font-campuni font-bold text-lg leading-4  text-laranja mr-1" id="mapampe_texto_industria">--</div>
                                        </div>
                                
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col mb-4 mr-10  md:mb-4">
                                <div class="flex">
                                    <div class="flex justify-center items-center">
                                        <?php svg('icon-big-comercio',40,32,"mr-2");?>
                                    </div>
                                    <div class="w-full">
                                        <div class="text-cinzaSebrae30 text-base leading-4 font-bold mb-1">Comércio</div>
                                        <div>
                                        <div class="font-campuni font-bold text-lg leading-4  text-verdeClaro mr-1" id="mapampe_texto_comercio">--</div>
                                        </div>
                                
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col mb-4 md:mb-4">
                                <div class="flex">
                                    <div class="flex justify-center items-center">
                                        <?php svg('icon-big-servicos',40,32,"mr-2");?>
                                    </div>
                                    <div class="w-full">
                                        <div class="text-cinzaSebrae30 text-base leading-4 font-bold mb-1">Serviços</div>
                                        <div>
                                        <div class="font-campuni font-bold text-lg leading-4  text-lilas mr-1" id="mapampe_texto_servico">--</div>
                                        </div>
                                
                                    </div>
                                </div>
                            </div>
                        </div>
                  

                        <div class=" font-lato italic text-xs text-cinzaSebrae60 flex items-center">
                            <?php svg('icon-mouse',"10","14","fill-cinzaSebrae60 mr-1");?>Clique no mapa para ver outros estados
                        </div>
                    </div>
                   
                </div>

                <!-- Mapa  -->
                <div class="flex flex-col md:w-5/12">
                    <div class="my-4 h-full" id="mapampe">
                        <?php echo get_template_part('blocks/mapa'); ?>
                    </div>
                    
                    <!-- Grafico Mapa  -->
                    <div class="flex flex-col justify-center">
                        <div class=" text-sm font-lato text-azulSebrae text-center" id="mapampe_legendamapa"></div>
                        <div class="flex items-center mb-6 ">
                            <div class=" min-w-max p-2 font-lato text-xs text-cinzaSebrae45 flex text-center" id="mapampe_min"></div>
                            <ul class="flex w-full h-2">
                                <li class="bg-nivel1 w-1/5 "></li>
                                <li class="bg-nivel2 w-1/5 "></li>
                                <li class="bg-nivel3 w-1/5 "></li>
                                <li class="bg-nivel4 w-1/5 "></li>
                                <li class="bg-nivel5 w-1/5 "></li>
                            </ul>
                            <div class=" min-w-max p-2 font-lato text-xs text-cinzaSebrae45 flex text-center" id="mapampe_max"></div>
                        </div>
                    </div>
              
                </div>
            </div>

            <div class="w-full flex pb-10 md:pb-14">
               <div class="font-lato text-sm text-cinzaSebrae45" id="mapampe_fonte"></div>
            </div>
        </div>
    </div>

</section>




<!-- Pega o Footer -->
<?php get_footer(); ?>


