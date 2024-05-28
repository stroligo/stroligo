<!-- Pega o Header -->
<?php $current_page = 'mei'; 
get_header(); 
/*
 Template Name: MEI
 Template Post Type: narrativas
*/
?>

<div class="tabset">
    <!-- Hero -->
    <section class="bg-cinzaSebrae97 bg-gradient-to-b from-[#FFB380] to-[#FCDECF]">

            <div class="container mx-auto px-6 pt-4">
            
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    <div class="text-azulSebrae20 pt-8 md:pt-0 flex flex-col justify-center">
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
                        <img class="" src="<?php tu(); ?>/assets/img/mei/big1.svg">
                        <?php if(get_field('narrativa_big_numbers_texto_before_1')) : ?>
                            <p class="cinzaSebrae20 text-lg"><?php the_field('narrativa_big_numbers_texto_before_1'); ?>
                        <?php endif; ?>
                        <p class="text-azulSebrae30 text-5xl md:text-6xl font-bold font-campuni"><?php the_field('narrativa_big_numbers_texto_1'); ?></p>                       
                        <?php if(get_field('narrativa_big_numbers_texto_after_1')) : ?>
                        <p class="cinzaSebrae20 text-lg mb-4"><?php the_field('narrativa_big_numbers_texto_after_1'); ?></p>
                        <?php endif; ?>
                        <button class="btn btn-azul ver-detalhes" data-detalhe="grafico-1-trabalhadores">Ver detalhes</button>
                    </div>

                    <div class="flex flex-col items-center justify-center text-center">
                        <img class="" src="<?php tu(); ?>/assets/img/mei/big2.svg">
                        <?php if(get_field('narrativa_big_numbers_texto_before_2')) : ?>
                            <p class="cinzaSebrae20 text-lg"><?php the_field('narrativa_big_numbers_texto_before_2'); ?>
                        <?php endif; ?>
                        <p class="text-azulSebrae30 text-5xl md:text-6xl font-bold font-campuni"><?php the_field('narrativa_big_numbers_texto_2'); ?></p>                      
                        <?php if(get_field('narrativa_big_numbers_texto_after_2')) : ?>
                        <p class="cinzaSebrae20 text-lg mb-4"><?php the_field('narrativa_big_numbers_texto_after_2'); ?></p>
                        <?php endif; ?>
                        <button class="btn btn-azul ver-detalhes" data-detalhe="grafico-1-formalizacao">Ver detalhes</button>
                    </div>

                    <div class="flex flex-col items-center justify-center text-center">
                        <img class="" src="<?php tu(); ?>/assets/img/mei/big3.svg">
                        <?php if(get_field('narrativa_big_numbers_texto_before_3')) : ?>
                            <p class="cinzaSebrae20 text-lg"><?php the_field('narrativa_big_numbers_texto_before_3'); ?>
                        <?php endif; ?>
                        <p class="text-azulSebrae30 text-5xl md:text-6xl font-bold font-campuni"><?php the_field('narrativa_big_numbers_texto_3'); ?></p>                       
                        <?php if(get_field('narrativa_big_numbers_texto_after_3')) : ?>
                        <p class="cinzaSebrae20 text-lg mb-4"><?php the_field('narrativa_big_numbers_texto_after_3'); ?></p>
                        <?php endif; ?>
                        <button class="btn btn-azul ver-detalhes" data-detalhe="grafico-1-horas-trabalhadas">Ver detalhes</button>
                    </div>

                    <div class="flex flex-col items-center justify-center text-center">
                        <img class="" src="<?php tu(); ?>/assets/img/mei/big4.svg">
                        <?php if(get_field('narrativa_big_numbers_texto_before_4')) : ?>
                            <p class="cinzaSebrae20 text-lg"><?php the_field('narrativa_big_numbers_texto_before_4'); ?>
                        <?php endif; ?>
                        <p class="text-azulSebrae30 text-5xl md:text-6xl font-bold font-campuni"><?php the_field('narrativa_big_numbers_texto_4'); ?></p>                      
                        <?php if(get_field('narrativa_big_numbers_texto_after_4')) : ?>
                        <p class="cinzaSebrae20 text-lg mb-4"><?php the_field('narrativa_big_numbers_texto_after_4'); ?></p>
                        <?php endif; ?>
                        <button class="btn btn-azul ver-detalhes" data-detalhe="grafico-1-renda-media">Ver detalhes</button>
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
    <section class="bg-branco -mt-2 relative" id="detalhes">
        <!-- Grafismo  --> 
        <div class="flex w-full  h-full justify-between items-start relative -top-6 md:top-0 md:mb-14" >  
            <?php svg('grafismo3-p1',"735","93","");?>  
        <div class="hidden md:flex"> <?php svg('grafismo3-p2',"369","62","");?></div>
        </div>

        <!-- Conteudo  --> 
        <div class="container mx-auto px-6 -mt-12 md:-mt-0 md:mb-28 tab-wrapper tab-detalhes">  
            <!-- Filtro -->
            <div class="flex flex-col md:flex-row md:justify-between mt-8 md:mt-0 mb-8">
                <!-- Menu Desktop -->
                <div class="invisible max-h-0 md:visible md:max-h-none">   
                    <ul class="menu-simples">
                        <li data-tab="grafico-1-trabalhadores" class="active">Trabalhadores</li>
                        <li data-tab="grafico-1-formalizacao">Formalização</li>
                        <li data-tab="grafico-1-horas-trabalhadas">Horas trabalhadas</li>
                        <li data-tab="grafico-1-renda-media">Renda média</li>
                    </ul>
                </div>

                <button class="flex text-azulSebrae items-center justify-end md:justify-center font-lato mb-6 md:mb-0 pointer-events-auto" id="fechar-detalhes">
                <?php svg('icon-fechar',12,12,"fill-azulSebrae mr-3");?> Fechar detalhes
                </button>

                <!-- Menu Mobile -->
                <form class="w-full md:hidden relative"> 
                    <select class="btn-azul w-full rounded-md font-lato tab-select">
                        <option selected value="grafico-1-trabalhadores">Trabalhadores</option>
                        <option value="grafico-1-formalizacao">Formalização</option>
                        <option value="grafico-1-horas-trabalhadas">Horas trabalhadas</option>
                        <option value="grafico-1-renda-media">Renda média</option>
                    </select>
                </form>

            </div>

            <?php get_template_part('blocks/graficos/mei/grafico-1-trabalhadores'); ?>

            <?php get_template_part('blocks/graficos/mei/grafico-1-formalizacao'); ?>

            <?php get_template_part('blocks/graficos/mei/grafico-1-horas-trabalhadas'); ?>

            <?php get_template_part('blocks/graficos/mei/grafico-1-renda-media'); ?>
                            
        </div>

        <!-- Grafismo 4 --> 
        <div class=" flex w-full  h-full justify-between items-start relative  bg-azulSebrae97" >  
            <?php svg('grafismo4-p1',"700","93","flex w-full  h-full justify-between items-start");?>  
            <div class="hidden md:flex"> <?php svg('grafismo4-p2',"540","63","");?></div>
        </div>
    </section>
</div>

<!-- Dinamica Regional -->
<section class="bg-azulSebrae97">
    <div class="container mx-auto px-6 pt-8 md:pt-20">
        <div class="flex flex-col md:flex-row mb-8 md:mb-16">

            <div class="w-full md:w-6/12 relative  items-center flex">
                <div class="ml-1">
                    <img class="h-full" src="<?php tu(); ?>/assets/img/mei/dinamica_logo_desktop.png" alt="logo dinamica">
                </div>
            </div>

            <div class="w-full md:w-6/12 text-cinzaSebrae30 md:pl-4  items-center flex flex-col wysiwyg-medium ">
                <?php the_field('narrativa_mei_texto_intro_1'); ?>
            </div>
        </div>

        <!-- Filter -->
        <div class="flex flex-col md:flex-row justify-between mb-1 md:mb-12 ">
            <div class="flex flex-col w-full md:w-9/12">
                <div class=" font-lato text-cinzaSebrae45 mb-1">Exibir:</div>
                <!-- Menu Desktop -->
                <div class="md:flex">   
                    <ul class="menu-mutavel">
                        <li data-mapameiseletor="renda">Renda média</li>
                        <li data-mapameiseletor="horas">Horas trabalhadas</li>
                        <li data-mapameiseletor="trabalhadores">Trabalhadores</li>
                    </ul>
                </div>    
            </div>
            <div class="w-full md:w-3/12">
                <div class="font-lato text-cinzaSebrae45 mb-2">Filtrar trabalhadores por conta própria:</div>
                <div class=" flex md:flex">   
                    <ul class="filtro-simples">
                        <li data-mapameifiltro="cnpj"><?php svg('icon-cnpj',12,14,"mr-1");?>Com CNPJ</li>
                        <li data-mapameifiltro="nao_cnpj"><?php svg('icon-sem-cnpj',16,14,"mr-1");?>Sem CNPJ</li>
                        <li data-mapameifiltro="total"><?php svg('icon-todos',16,16,"mr-1");?>Todos</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Versao Desktop -->
        <div class="md:flex flex-col">

            <div class="w-full flex flex-col-reverse md:flex-row mb-4">
                <div class="md:w-7/12 md:pr-[8.333%] flex flex-col">
                     <!-- Legenda -->
                    <div class="mb-8 flex-auto grow flex flex-col justify-center childanimate" id="mapamei_legenda">-</div>
           
                    <!-- Sub Legenda -->
                    <div>
                        <div class="mb-4" id="mapamei_sublegenda">-</div>
                        <div class="flex flex-col mb-4 md:mb-4">
                            <div class="flex">
                                <div class="flex justify-center items-center">
                                    <?php svg('icon-big-cnpj',70,56,"mr-2");?>
                                </div>
                                <div class="w-full">
                                    <div class="text-cinzaSebrae30 text-xlarge leading-6 font-bold mb-2">Com CNPJ</div>
                                    <div>
                                        <div class="w-full h-2 rounded-md">
                                            <div class="h-2 bg-laranja rounded-md transition-all" id="mapamei_barra_cpnj"></div>
                                        </div>
                                        <div class="font-campuni font-bold text-lg text-laranja mr-1" id="mapamei_texto_cpnj">--</div>
                                    </div>
                            
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col mb-4 md:mb-4">
                            <div class="flex">
                                <div class="flex justify-center items-center">
                                    <?php svg('icon-big-sem-cnpj',70,56,"mr-2");?>
                                </div>
                                <div class="w-full">
                                    <div class="text-cinzaSebrae30 text-xlarge leading-6 font-bold mb-2">Sem CNPJ</div>
                                    <div>
                                        <div class="w-full h-2 rounded-md">
                                            <div class="h-2 bg-verdeClaro rounded-md transition-all" id="mapamei_barra_nao_cpnj"></div>
                                        </div>
                                        <div class="font-campuni font-bold text-lg text-verdeClaro mr-1" id="mapamei_texto_nao_cpnj">--</div>
                                    </div>
                            
                                </div>
                            </div>
                        </div>
                        <div class="font-lato italic text-xs text-cinzaSebrae60 flex items-center hidden md:flex">
                            <?php svg('icon-mouse',10,14,"fill-cinzaSebrae60 mr-1");?>Clique no mapa para ver outros estados
                        </div>
                    </div>
                   
                </div>
                <!-- Mapa -->
                <div class="flex flex-col md:w-5/12">
                    <div class="my-4 h-full" id="mapamei">
                        <?php echo get_template_part('blocks/mapa'); ?>
                    </div>
                    
                    <!-- Grafico Mapa  -->
                    <div class="flex flex-col justify-center">
                        <div class=" text-sm font-lato text-azulSebrae text-center" id="mapamei_legendamapa"></div>
                        <div class="flex items-center mb-6 ">
                            <div class=" min-w-max p-2 font-lato text-xs text-cinzaSebrae45 flex text-center" id="mapamei_min"></div>
                            <ul class="flex w-full h-2">
                                <li class="bg-nivel1 w-1/5 "></li>
                                <li class="bg-nivel2 w-1/5 "></li>
                                <li class="bg-nivel3 w-1/5 "></li>
                                <li class="bg-nivel4 w-1/5 "></li>
                                <li class="bg-nivel5 w-1/5 "></li>
                            </ul>
                            <div class=" min-w-max p-2 font-lato text-xs text-cinzaSebrae45 flex text-center" id="mapamei_max"></div>
                        </div>
                    </div>
              
                </div>
            </div>

            <div class="w-full flex pb-10 md:pb-14">
               <div class="font-lato text-sm text-cinzaSebrae45" id="mapamei_fonte"></div>
            </div>
        </div>
    </div>
</section>

<!-- Diversidade de perfis Desktop-->
<section class=" bg-gradient-to-b from-[#FFB48166] to-[#3B4AFFE5] relative hidden md:flex flex-col">

    <!-- Grafismo -->
    <div class="flex w-full  h-full justify-between items-start -top-6 md:top-0 mb-10 md:mb-20" >  
        <?php svg('grafismo6-p1',"702","93","");?>  
       <div class="hidden md:flex"> <?php svg('grafismo6-p2',"349","62","");?></div>
    </div>
  
    <!-- Intro -->
    <div class="container mx-auto px-6 mb-14"> 
        <div class="flex flex-col md:flex-row mb-16">
            <div class="w-6/12  relative">
                <div class="">
                    <img src="<?php tu(); ?>/assets/img/mei/diversidade_logo_desktop.png" alt="logo diversidade">
                </div>
            </div>
            <div class="w-6/12 text-cinzaSebrae20 ">
                <div class="wysiwyg-medium mb-6 md:pl-8 md:pt-12 relative z-10"><?php the_field('narrativa_mei_texto_intro_2'); ?></div>
            </div>
        </div>
    </div>

    <!-- Cards -->
    <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-2 mb-10">

            <div class="card azulsebrae py-8 px-8 md:py-6 ">
                <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">Quem é esse micro empreendedor individual?</h4>
                <div class=" md:mb-4 w-full md:max-h-[160px] justify-center flex">
                    <img class="z-10 h-full p-4" src="<?php tu(); ?>/assets/img/mei/diversidade1.png" alt="diversidade1">
                </div>
                <div class="w-full flex flex-col items-center">
                    <div class=" font-campuni text-5xl text-azulSebrae mb-1 font-bold">55%</div>
                    <div class=" text-lg mb-6 leading-5 text-center">são homens</div>
                    <?php 
                    $link = get_field('narrativa_mei_diversidade_card_1');
                    if( $link ): $link_url = $link['url']; $link_target = $link['target'] ? $link['target'] : '_self';
                    ?>
                    <a class="btn btn-azul" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">Saiba mais</a>
                    <?php endif; ?>
                </div>
            </div>

            <div class="card azulsebrae py-8 px-8 md:py-6 ">
                <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">Onde funciona o seu negócio?</h4>
                <div class=" md:mb-4 w-full md:max-h-[160px] justify-center flex">
                    <img class="z-10 h-full p-4" src="<?php tu(); ?>/assets/img/mei/diversidade2.png" alt="diversidade2">
                </div>
                <div class="w-full flex flex-col items-center">
                    <div class=" font-campuni text-5xl text-azulSebrae mb-1 font-bold">38,8%</div>
                    <div class=" text-lg mb-6 leading-5 text-center">dos negócios funcionam em casa</div>
                    <?php 
                    $link = get_field('narrativa_mei_diversidade_card_2');
                    if( $link ): $link_url = $link['url']; $link_target = $link['target'] ? $link['target'] : '_self';
                    ?>
                    <a class="btn btn-azul" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">Saiba mais</a>
                    <?php endif; ?>
                </div>
            </div>

            <div class="card azulsebrae py-8 px-8 md:py-6 ">
                <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">Possui outra fonte de renda além do MEI?</h4>
                <div class=" md:mb-4 w-full md:max-h-[160px] justify-center flex">
                    <img class="z-10 h-full p-4" src="<?php tu(); ?>/assets/img/mei/diversidade3.png" alt="diversidade3">
                </div>
                <div class="w-full flex flex-col items-center">
                    <div class=" font-campuni text-5xl text-azulSebrae mb-1 font-bold">78%</div>
                    <div class=" text-lg mb-6 leading-5 text-center">não possuem outra fonte de renda</div>
                    <?php 
                    $link = get_field('narrativa_mei_diversidade_card_3');
                    if( $link ): $link_url = $link['url']; $link_target = $link['target'] ? $link['target'] : '_self';
                    ?>
                    <a class="btn btn-azul" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">Saiba mais</a>
                    <?php endif; ?>
                </div>
            </div>

            <div class="card azulsebrae py-8 px-8 md:py-6 ">
                <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">Qual era sua principal ocupação antes de se tornar MEI?</h4>
                <div class=" md:mb-4 w-full md:max-h-[160px] justify-center flex">
                    <img class="z-10 h-full p-4" src="<?php tu(); ?>/assets/img/mei/diversidade4.png" alt="diversidade4">
                </div>
                <div class="w-full flex flex-col items-center">
                    <div class=" font-campuni text-5xl text-azulSebrae mb-1 font-bold">32,2%</div>
                    <div class=" text-lg mb-6 leading-5 text-center">eram informais antes de se tornarem MEI</div>
                    <?php 
                    $link = get_field('narrativa_mei_diversidade_card_4');
                    if( $link ): $link_url = $link['url']; $link_target = $link['target'] ? $link['target'] : '_self';
                    ?>
                    <a class="btn btn-azul" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">Saiba mais</a>
                    <?php endif; ?>
                </div>
            </div>

            <div class="card azulsebrae py-8 px-8 md:py-6 ">
                <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">A formalização como MEI lhe ajudou a vender mais?</h4>
                <div class=" md:mb-4 w-full md:max-h-[160px] justify-center flex">
                    <img class="z-10 h-full p-4" src="<?php tu(); ?>/assets/img/mei/diversidade5.png" alt="diversidade5">
                </div>
                <div class="w-full flex flex-col items-center">
                    <div class=" font-campuni text-5xl text-azulSebrae mb-1 font-bold">69%</div>
                    <div class=" text-lg mb-6 leading-5 text-center">aumentaram suas vendas após a formalização</div>
                    <?php 
                    $link = get_field('narrativa_mei_diversidade_card_5');
                    if( $link ): $link_url = $link['url']; $link_target = $link['target'] ? $link['target'] : '_self';
                    ?>
                    <a class="btn btn-azul" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">Saiba mais</a>
                    <?php endif; ?>
                </div>
            </div>

        </div>
    </div>

</section>


<!-- Diversidade de perfis Mobile-->
<section class=" bg-gradient-to-b from-[#FFB48166] to-[#3B4AFFE5]  relative flex flex-col md:hidden ">

    <!-- Grafismo -->
    <div class="flex w-full  h-full justify-between items-start -top-6 md:top-0 mb-10 md:mb-20" >  
        <?php svg('grafismo6-p1',"702","93","");?>  
       <div class="hidden md:flex"> <?php svg('grafismo6-p2',"349","62","");?></div>
    </div>
  
    <!-- Intro Mobile -->
    <div class="flex-col "> 
        <div class="container mx-auto px-6">
            <div class="relative mb-8 md:mb-6">
                <div class="w-full flex items-center">
                    <img src="<?php tu(); ?>/assets/img/mei/diversidade_logo_desktop.png" alt="logo diversidade" class="">
                </div>
            </div>
            <div class="text-cinzaSebrae20 wysiwyg-medium mb-6">
                <?php the_field('narrativa_mei_texto_intro_2'); ?>
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
                    <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">Quem é esse micro empreendedor individual?</h4>
                    <div class=" md:mb-4 w-full md:max-h-[160px] justify-center flex">
                        <img class="z-10 h-full p-4" src="<?php tu(); ?>/assets/img/mei/diversidade1.png" alt="diversidade1">
                    </div>
                    <div class="w-full flex flex-col items-center">
                        <div class=" font-campuni text-5xl text-azulSebrae mb-1 font-bold">55%</div>
                        <div class=" text-lg mb-6 leading-5 text-center">são homens</div>
                        <?php 
                        $link = get_field('narrativa_mei_diversidade_card_1');
                        if( $link ): $link_url = $link['url']; $link_target = $link['target'] ? $link['target'] : '_self';
                        ?>
                        <a class="btn btn-azul" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">Saiba mais</a>
                        <?php endif; ?>
                    </div>
                </div>

                <div class="card azulsebrae py-8 px-8 splide__slide ">
                    <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">Onde funciona o seu negócio?</h4>
                    <div class=" md:mb-4 w-full md:max-h-[160px] justify-center flex">
                        <img class="z-10 h-full p-4" src="<?php tu(); ?>/assets/img/mei/diversidade2.png" alt="diversidade2">
                    </div>
                    <div class="w-full flex flex-col items-center">
                        <div class=" font-campuni text-5xl text-azulSebrae mb-1 font-bold">38,8%</div>
                        <div class=" text-lg mb-6 leading-5 text-center">dos negócios funcionam em casa</div>
                        <?php 
                        $link = get_field('narrativa_mei_diversidade_card_2');
                        if( $link ): $link_url = $link['url']; $link_target = $link['target'] ? $link['target'] : '_self';
                        ?>
                        <a class="btn btn-azul" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">Saiba mais</a>
                        <?php endif; ?>
                    </div>
                </div>

                <div class="card azulsebrae py-8 px-8 splide__slide ">
                    <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">Possui outra fonte de renda além do MEI?</h4>
                    <div class=" md:mb-4 w-full md:max-h-[160px] justify-center flex">
                        <img class="z-10 h-full p-4" src="<?php tu(); ?>/assets/img/mei/diversidade3.png" alt="diversidade3">
                    </div>
                    <div class="w-full flex flex-col items-center">
                        <div class=" font-campuni text-5xl text-azulSebrae mb-1 font-bold">78%</div>
                        <div class=" text-lg mb-6 leading-5 text-center">não possuem outra fonte de renda</div>
                        <?php 
                        $link = get_field('narrativa_mei_diversidade_card_3');
                        if( $link ): $link_url = $link['url']; $link_target = $link['target'] ? $link['target'] : '_self';
                        ?>
                        <a class="btn btn-azul" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">Saiba mais</a>
                        <?php endif; ?>
                    </div>
                </div>

                <div class="card azulsebrae py-8 px-8 splide__slide ">
                    <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">Qual era sua principal ocupação antes de se tornar MEI?</h4>
                    <div class=" md:mb-4 w-full md:max-h-[160px] justify-center flex">
                        <img class="z-10 h-full p-4" src="<?php tu(); ?>/assets/img/mei/diversidade4.png" alt="diversidade4">
                    </div>
                    <div class="w-full flex flex-col items-center">
                        <div class=" font-campuni text-5xl text-azulSebrae mb-1 font-bold">33,2%</div>
                        <div class=" text-lg mb-6 leading-5 text-center">eram informais antes de se tornarem MEI</div>
                        <?php 
                        $link = get_field('narrativa_mei_diversidade_card_4');
                        if( $link ): $link_url = $link['url']; $link_target = $link['target'] ? $link['target'] : '_self';
                        ?>
                        <a class="btn btn-azul" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">Saiba mais</a>
                        <?php endif; ?>                    
                    </div>
                </div>

                <div class="card azulsebrae py-8 px-8 splide__slide ">
                    <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">A formalização como MEI lhe ajudou a vender mais?</h4>
                    <div class=" md:mb-4 w-full md:max-h-[160px] justify-center flex">
                        <img class="z-10 h-full p-4" src="<?php tu(); ?>/assets/img/mei/diversidade5.png" alt="diversidade5">
                    </div>
                    <div class="w-full flex flex-col items-center">
                        <div class=" font-campuni text-5xl text-azulSebrae mb-1 font-bold">69%</div>
                        <div class=" text-lg mb-6 leading-5 text-center">aumentaram suas vendas após a formalização</div>
                        <?php 
                        $link = get_field('narrativa_mei_diversidade_card_5');
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


