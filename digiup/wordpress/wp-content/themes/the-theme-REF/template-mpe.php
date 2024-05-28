<!-- Pega o Header -->
<?php $current_page = 'mpe'; 
get_header(); 
/*
 Template Name: MPE
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
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6 md:mt-12 md:mb-16">
                <div class="flex flex-col items-center justify-center text-center">
                    <img class="" src="<?php tu(); ?>/assets/img/mpe/big1.svg">
                    <?php if(get_field('narrativa_big_numbers_texto_before_1')) : ?>
                        <p class="cinzaSebrae20 text-lg"><?php the_field('narrativa_big_numbers_texto_before_1'); ?>
                    <?php endif; ?>
                    <p class="text-azulSebrae30 text-5xl md:text-6xl font-bold font-campuni"><?php the_field('narrativa_big_numbers_texto_1'); ?></p>
                    <?php if(get_field('narrativa_big_numbers_texto_after_1')) : ?>
                    <p class="cinzaSebrae20 text-lg mb-4"><?php the_field('narrativa_big_numbers_texto_after_1'); ?></p>
                    <?php endif; ?>
                    <button class="btn btn-azul ver-detalhes" data-detalhe="grafico-1-pib">Ver detalhes</button>
                </div>
                <div class="flex flex-col items-center justify-center text-center">
                    <img class="" src="<?php tu(); ?>/assets/img/mpe/big2.svg">
                    <?php if(get_field('narrativa_big_numbers_texto_before_2')) : ?>
                        <p class="cinzaSebrae20 text-lg"><?php the_field('narrativa_big_numbers_texto_before_2'); ?>
                    <?php endif; ?>
                    <p class="text-azulSebrae30 text-5xl md:text-6xl font-bold font-campuni"><?php the_field('narrativa_big_numbers_texto_2'); ?></p>
                    <?php if(get_field('narrativa_big_numbers_texto_after_2')) : ?>
                    <p class="cinzaSebrae20 text-lg mb-4"><?php the_field('narrativa_big_numbers_texto_after_2'); ?></p>
                    <?php endif; ?>
                    <button class="btn btn-azul ver-detalhes" data-detalhe="grafico-1-empregos">Ver detalhes</button>
                </div>
                <div class="flex flex-col items-center justify-center text-center">
                    <img class="" src="<?php tu(); ?>/assets/img/mpe/big3.svg">
                    <?php if(get_field('narrativa_big_numbers_texto_before_3')) : ?>
                        <p class="cinzaSebrae20 text-lg"><?php the_field('narrativa_big_numbers_texto_before_3'); ?>
                    <?php endif; ?>
                    <p class="text-azulSebrae30 text-5xl md:text-6xl font-bold font-campuni"><?php the_field('narrativa_big_numbers_texto_3'); ?></p>
                    <?php if(get_field('narrativa_big_numbers_texto_after_3')) : ?>
                    <p class="cinzaSebrae20 text-lg mb-4"><?php the_field('narrativa_big_numbers_texto_after_3'); ?></p>
                    <?php endif; ?>
                    <button class="btn btn-azul ver-detalhes" data-detalhe="grafico-1-massa-salarial">Ver detalhes</button>
                </div>
                <div class="flex flex-col items-center justify-center text-center">
                    <img class="" src="<?php tu(); ?>/assets/img/mpe/big4.svg">
                    <?php if(get_field('narrativa_big_numbers_texto_before_4')) : ?>
                        <p class="cinzaSebrae20 text-lg"><?php the_field('narrativa_big_numbers_texto_before_4'); ?>
                    <?php endif; ?>
                    <p class="text-azulSebrae30 text-5xl md:text-6xl font-bold font-campuni"><?php the_field('narrativa_big_numbers_texto_4'); ?></p>
                    <?php if(get_field('narrativa_big_numbers_texto_after_4')) : ?>
                    <p class="cinzaSebrae20 text-lg mb-4"><?php the_field('narrativa_big_numbers_texto_after_4'); ?></p>
                    <?php endif; ?>
                    <!-- <button class="btn btn-azul ver-detalhes" data-detalhe="grafico-1-renda">Ver detalhes</button> -->
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
            <div class="invisible max-h-0 md:visible md:max-h-none">   
                <ul class="menu-simples">
                    <li data-tab="grafico-1-pib" class="active">PIB</li>
                    <li data-tab="grafico-1-empregos">Empregos</li>
                    <li data-tab="grafico-1-massa-salarial">Massa salarial</li>
                    <!-- <li data-tab="grafico-1-renda">Renda</li> -->
                </ul>
            </div>

            <button class="flex text-azulSebrae items-center justify-end md:justify-center font-lato mb-6 md:mb-0 pointer-events-auto" id="fechar-detalhes">
              <?php svg('icon-fechar',12,12,"fill-azulSebrae mr-3");?> Fechar detalhes
            </button>

            <form class="w-full md:hidden relative"> 
                <select class="btn-azul w-full rounded-md font-lato tab-select">
                    <option selected value="grafico-1-pib">PIB</option>
                    <option value="grafico-1-empregos">Empregos</option>
                    <option value="grafico-1-massa-salarial">Massa salarial</option>
                    <!-- <option value="grafico-1-renda">Renda</option> -->
                </select>
            </form>

        </div>
        
        <?php get_template_part('blocks/graficos/mpe/grafico-1-pib'); ?>
        <?php get_template_part('blocks/graficos/mpe/grafico-1-empregos'); ?>
        <?php get_template_part('blocks/graficos/mpe/grafico-1-massa-salarial'); ?>
        <?php get_template_part('blocks/graficos/mpe/grafico-1-renda'); ?>

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
                        <img src="<?php tu(); ?>/assets/img/mei/dinamica_logo_desktop.png" alt="logo dinamica">
                </div>
            </div>


            <div class="w-full md:w-6/12 text-cinzaSebrae30 md:pl-4  items-center flex flex-col wysiwyg-medium ">
                <?php the_field('narrativa_mpe_texto_intro_1'); ?>
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
    <!-- Grafismo -->
    <div class="flex w-full  h-full justify-between items-start  bg-branco" >  
        <?php svg('grafismo8-p1',"545","96","");?>  
         <div class="hidden md:flex"> <?php svg('grafismo8-p2',"623","64"," ");?></div>
    </div>
</section>

<section >
    <div class=" md:flex flex-col container mx-auto  mb-14"> 
        <div class="flex flex-col md:flex-row mx-auto px-6 md:mb-16">
            <div class="h-fit w-full md:w-6/12">
                <img class="z-10 w-full p-8" src="<?php tu(); ?>/assets/img/mpe/confianca.png" alt="confianca">
            </div>
            <div class="w-full md:w-6/12 flex flex-col justify-center">
                <img class="z-10 mb-2 w-fit" src="<?php tu(); ?>/assets/img/mpe/confiancatexto.png" alt="confianca">
                <div class="text-cinzaSebrae45 wysiwyg-medium leading-6">
                    <?php the_field('narrativa_mpe_texto_intro_2'); ?>
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col md:flex-row container mx-auto px-6 mb-8 relative">
        <div class="w-full md:w-3/12 text-cinzaSebrae45 sticky mb-6 wysiwyg-medium">
            <?php the_field('narrativa_mpe_grafico_5_texto'); ?>
        </div>
        <div class="w-full md:w-9/12 md:pl-5">
            <?php get_template_part('blocks/graficos/mpe/grafico-2-situacao-economia'); ?>
        </div>
    </div>
    <div class="flex flex-col md:flex-row container mx-auto px-6 mb-14 relative">
        <div class="w-full md:w-3/12 text-cinzaSebrae45 sticky mb-6 wysiwyg-medium">
            <?php the_field('narrativa_mpe_grafico_6_texto'); ?>
        </div>
        <div class="w-full md:w-9/12 md:pl-5">
            <?php get_template_part('blocks/graficos/mpe/grafico-2-situacao-negocio'); ?>
        </div>
    </div>
</section>


<!-- Diversidade de perfis DESKTOP -->
<section class=" bg-gradient-to-b from-[#FFB48166] to-[#3B4AFFE5] relative hidden md:flex flex-col">

    <!-- Grafismo -->
    <div class="flex w-full  h-full justify-between items-start -top-6  mb-10 md:mb-20 " >  
        <?php svg('grafismo7-p1',"702","93","");?>  
       <div class="hidden md:flex"> <?php svg('grafismo7-p2',"349","62","");?></div>
    </div>

    <!-- Intro Desktop -->
    <div class=" container mx-auto px-6 mb-14"> 
        <div class="flex flex-col md:flex-row mb-16">
            <div class="w-6/12  relative">
                <div class="">
                    <img src="<?php tu(); ?>/assets/img/mei/diversidade_logo_desktop.png" alt="logo diversidade">
                </div>
            </div>
            <div class="w-6/12  text-cinzaSebrae20 ">
                <div class="text-xlarge mb-6 md:pl-8 md:pt-8 relative z-10 wysiwyg-medium">
                    <?php the_field('narrativa_mpe_texto_intro_3'); ?>
                </div>
            </div>
        </div>
    </div>

    <!-- Cards -->
    <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-2 mb-10">

            <div class="card azulsebrae py-8 px-8 md:py-6 ">
                <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">Onde funciona a empresa dessas MPEs?</h4>
                <div class="h-fit md:mb-4 w-full">
                    <img class="z-10 w-full p-8" src="<?php tu(); ?>/assets/img/mpe/diversidade1.png" alt="diversidade1">
                </div>
                <div class="w-full flex flex-col items-center">
                    <div class=" font-campuni text-5xl text-azulSebrae mb-1">73,1%</div>
                    <div class=" text-lg mb-6 leading-5 text-center">em um estabelecimento comercial</div>
                    <?php 
                    $link = get_field('narrativa_mpe_diversidade_card_1');
                    if( $link ): $link_url = $link['url']; $link_target = $link['target'] ? $link['target'] : '_self';
                    ?>
                    <a class="btn btn-azul" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">Saiba mais</a>
                    <?php endif; ?>  
                </div>
            </div>

            <div class="card azulsebrae py-8 px-8 md:py-6 ">
                <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">Quem é esse empreendedor das MPEs?</h4>
                <div class="h-fit md:mb-4 w-full">
                    <img class="z-10 w-full p-8" src="<?php tu(); ?>/assets/img/mpe/diversidade2.png" alt="diversidade2">
                </div>
                <div class="w-full flex flex-col items-center">
                    <div class=" font-campuni text-5xl text-azulSebrae mb-1">71%</div>
                    <div class=" text-lg mb-6 leading-5 text-center">são homens</div>
                    <?php 
                    $link = get_field('narrativa_mpe_diversidade_card_2');
                    if( $link ): $link_url = $link['url']; $link_target = $link['target'] ? $link['target'] : '_self';
                    ?>
                    <a class="btn btn-azul" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">Saiba mais</a>
                    <?php endif; ?>  
                </div>
            </div>

            <div class="card azulsebrae py-8 px-8 md:py-6 ">
                <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">Qual o tempo de atividade das MPEs no Brasil?</h4>
                <div class="h-fit md:mb-4 w-full">
                    <img class="z-10 w-full p-8" src="<?php tu(); ?>/assets/img/mpe/diversidade3.png" alt="diversidade3">
                </div>
                <div class="w-full flex flex-col items-center">
                    <div class=" font-campuni text-5xl text-azulSebrae mb-1">39,2%</div>
                    <div class=" text-lg mb-6 leading-5 text-center">mais de 10 anos</div>
                    <?php 
                    $link = get_field('narrativa_mpe_diversidade_card_3');
                    if( $link ): $link_url = $link['url']; $link_target = $link['target'] ? $link['target'] : '_self';
                    ?>
                    <a class="btn btn-azul" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">Saiba mais</a>
                    <?php endif; ?>  
                </div>
            </div>

            <div class="card azulsebrae py-8 px-8 md:py-6 ">
                <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">Qual a ocupação do empreendedor antes de iniciar sua empresa?</h4>
                <div class="h-fit md:mb-4 w-full">
                    <img class="z-10 w-full p-8" src="<?php tu(); ?>/assets/img/mpe/diversidade4.png" alt="diversidade4">
                </div>
                <div class="w-full flex flex-col items-center">
                    <div class=" font-campuni text-5xl text-azulSebrae mb-1">49,4%</div>
                    <div class=" text-lg mb-6 leading-5 text-center">eram empregado(a) com carteira</div>
                    <?php 
                    $link = get_field('narrativa_mpe_diversidade_card_4');
                    if( $link ): $link_url = $link['url']; $link_target = $link['target'] ? $link['target'] : '_self';
                    ?>
                    <a class="btn btn-azul" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">Saiba mais</a>
                    <?php endif; ?>  
                </div>
            </div>

            <div class="card azulsebrae py-8 px-8 md:py-6 ">
                <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">A abertura da empresa aumentou seus ganhos?</h4>
                <div class="h-fit md:mb-4 w-full">
                    <img class="z-10 w-full p-8" src="<?php tu(); ?>/assets/img/mpe/diversidade5.png" alt="diversidade5">
                </div>
                <div class="w-full flex flex-col items-center">
                    <div class=" font-campuni text-5xl text-azulSebrae mb-1">82,5%</div>
                    <div class=" text-lg mb-6 leading-5 text-center">sim</div>
                    <?php 
                    $link = get_field('narrativa_mpe_diversidade_card_5');
                    if( $link ): $link_url = $link['url']; $link_target = $link['target'] ? $link['target'] : '_self';
                    ?>
                    <a class="btn btn-azul" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">Saiba mais</a>
                    <?php endif; ?>  
                </div>
            </div>

        </div>
    </div>

    <div class="h-20 w-full"></div>
</section>

<!-- Diversidade de perfis MOBILE -->
<section class=" bg-gradient-to-b from-[#FFB48166] to-[#3B4AFFE5] relative flex flex-col md:hidden ">

    <!-- Grafismo -->
    <div class="flex w-full  h-full justify-between items-start -top-6  mb-10 md:mb-20 " >  
        <?php svg('grafismo7-p1',"702","93","");?>  
       <div class="hidden md:flex"> <?php svg('grafismo7-p2',"349","62","");?></div>
    </div>


    <!-- Intro Mobile -->
    <div class="flex-col "> 
        <div class="container mx-auto px-6">
            <div class="relative mb-8 md:mb-6">
                <div class="w-full flex items-center">
                    <img src="<?php tu(); ?>/assets/img/mei/diversidade_logo_desktop.png" alt="logo diversidade" class="">
                </div>
            </div>
            <div class="text-xlarge mb-6 wisywig-medium">
                <?php the_field('narrativa_mpe_texto_intro_3'); ?>
            </div>
        </div>

    </div>
    
    <!-- Cards -->
    <div class="splideDiversidade relative mb-8">

        <!-- Controler -->
        <div class="w-full absolute top-[40%] hidden md:flex justify-between items-center px-6 hover:fill-azulSebrae  splide__arrows splide__arrows--ltr">
            <button type="button" class="btn btn-azul h-10 w-10 splide__arrow--prev"> 
                <?php svg('icon-proximo',16,16,"fill-branco");?>
            </button>
            <button type="button" class="btn btn-azul h-10 w-10 splide__arrow--next"> 
                <?php svg('icon-proximo',16,16,"fill-branco");?>
            </button>
        </div>

        <div class="splide__track">
            <div class="splide__list">

                <div class="card azulsebrae py-8 px-8 splide__slide ">
                    <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">Onde funciona a empresa dessas MPEs?</h4>
                    <div class="h-fit md:mb-4 w-full">
                        <img class="z-10 w-full p-8" src="<?php tu(); ?>/assets/img/mpe/diversidade1.png" alt="diversidade1">
                    </div>
                    <div class="w-full flex flex-col items-center">
                        <div class=" font-campuni text-5xl text-azulSebrae mb-1">73,1%</div>
                        <div class=" text-lg mb-6 leading-5 text-center">em um estabelecimento comercial</div>
                        <?php 
                        $link = get_field('narrativa_mpe_diversidade_card_1');
                        if( $link ): $link_url = $link['url']; $link_target = $link['target'] ? $link['target'] : '_self';
                        ?>
                        <a class="btn btn-azul" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">Saiba mais</a>
                        <?php endif; ?>  
                    </div>
                </div>

                <div class="card azulsebrae py-8 px-8 splide__slide ">
                    <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">Quem é esse empreendedor das MPEs?</h4>
                    <div class="h-fit md:mb-4 w-full">
                        <img class="z-10 w-full p-8" src="<?php tu(); ?>/assets/img/mpe/diversidade2.png" alt="diversidade2">
                    </div>
                    <div class="w-full flex flex-col items-center">
                        <div class=" font-campuni text-5xl text-azulSebrae mb-1">71%</div>
                        <div class=" text-lg mb-6 leading-5 text-center">são homens</div>
                        <?php 
                        $link = get_field('narrativa_mpe_diversidade_card_2');
                        if( $link ): $link_url = $link['url']; $link_target = $link['target'] ? $link['target'] : '_self';
                        ?>
                        <a class="btn btn-azul" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">Saiba mais</a>
                        <?php endif; ?>  
                    </div>
                </div>

                <div class="card azulsebrae py-8 px-8 splide__slide ">
                    <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">Qual o tempo de atividade das MPEs no Brasil?</h4>
                    <div class="h-fit md:mb-4 w-full">
                        <img class="z-10 w-full p-8" src="<?php tu(); ?>/assets/img/mpe/diversidade3.png" alt="diversidade3">
                    </div>
                    <div class="w-full flex flex-col items-center">
                        <div class=" font-campuni text-5xl text-azulSebrae mb-1">39,2%</div>
                        <div class=" text-lg mb-6 leading-5 text-center">mais de 10 anos</div>
                        <?php 
                        $link = get_field('narrativa_mpe_diversidade_card_3');
                        if( $link ): $link_url = $link['url']; $link_target = $link['target'] ? $link['target'] : '_self';
                        ?>
                        <a class="btn btn-azul" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">Saiba mais</a>
                        <?php endif; ?>  
                    </div>
                </div>

                <div class="card azulsebrae py-8 px-8 splide__slide ">
                    <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">Qual a ocupação do empreendedor antes de iniciar sua empresa?</h4>
                    <div class="h-fit md:mb-4 w-full">
                        <img class="z-10 w-full p-8" src="<?php tu(); ?>/assets/img/mpe/diversidade4.png" alt="diversidade4">
                    </div>
                    <div class="w-full flex flex-col items-center">
                    <div class=" font-campuni text-5xl text-azulSebrae mb-1">49,4%</div>
                    <div class=" text-lg mb-6 leading-5 text-center">eram empregado(a) com carteira</div>
                        <?php 
                        $link = get_field('narrativa_mpe_diversidade_card_4');
                        if( $link ): $link_url = $link['url']; $link_target = $link['target'] ? $link['target'] : '_self';
                        ?>
                        <a class="btn btn-azul" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">Saiba mais</a>
                        <?php endif; ?>    
                    </div>
                </div>

                <div class="card azulsebrae py-8 px-8 splide__slide ">
                    <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">A abertura da empresa aumentou seus ganhos?</h4>
                    <div class="h-fit md:mb-4 w-full">
                        <img class="z-10 w-full p-8" src="<?php tu(); ?>/assets/img/mpe/diversidade5.png" alt="diversidade5">
                    </div>
                    <div class="w-full flex flex-col items-center">
                        <div class=" font-campuni text-5xl text-azulSebrae mb-1">82,5%</div>
                        <div class=" text-lg mb-6 leading-5 text-center">sim</div>
                        <?php 
                        $link = get_field('narrativa_mpe_diversidade_card_5');
                        if( $link ): $link_url = $link['url']; $link_target = $link['target'] ? $link['target'] : '_self';
                        ?>
                        <a class="btn btn-azul" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">Saiba mais</a>
                        <?php endif; ?>                    
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>

<!-- Pega o Footer -->
<?php get_footer(); ?>


