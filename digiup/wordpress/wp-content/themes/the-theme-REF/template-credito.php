<!-- Pega o Header -->
<?php $current_page = 'credito'; 
get_header(); 
/*
 Template Name: Crédito
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
                    <img class="" src="<?php tu(); ?>/assets/img/credito/big1.svg">
                    <?php if(get_field('narrativa_big_numbers_texto_before_1')) : ?>
                        <p class="cinzaSebrae20 text-lg"><?php the_field('narrativa_big_numbers_texto_before_1'); ?>
                    <?php endif; ?>
                    <p class="text-azulSebrae30 text-5xl md:text-6xl font-bold font-campuni"><?php the_field('narrativa_big_numbers_texto_1'); ?></p>
                    <?php if(get_field('narrativa_big_numbers_texto_after_1')) : ?>
                    <p class="cinzaSebrae20 text-lg mb-4"><?php the_field('narrativa_big_numbers_texto_after_1'); ?></p>
                    <?php endif; ?>
                    <button class="btn btn-azul ver-detalhes" data-detalhe="grafico-1-saldo-concessao">Ver detalhes</button>
                </div>
                <div class="flex flex-col items-center justify-center text-center">
                    <img class="" src="<?php tu(); ?>/assets/img/credito/big2.svg">
                    <?php if(get_field('narrativa_big_numbers_texto_before_2')) : ?>
                        <p class="cinzaSebrae20 text-lg"><?php the_field('narrativa_big_numbers_texto_before_2'); ?>
                    <?php endif; ?>
                    <p class="text-azulSebrae30 text-5xl md:text-6xl font-bold font-campuni"><?php the_field('narrativa_big_numbers_texto_2'); ?></p>
                    <?php if(get_field('narrativa_big_numbers_texto_after_2')) : ?>
                    <p class="cinzaSebrae20 text-lg mb-4"><?php the_field('narrativa_big_numbers_texto_after_2'); ?></p>
                    <?php endif; ?>
                    <button class="btn btn-azul ver-detalhes" data-detalhe="grafico-1-aumento-credito">Ver detalhes</button>
                </div>
                <div class="flex flex-col items-center justify-center text-center">
                    <img class="" src="<?php tu(); ?>/assets/img/credito/big3.svg">
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
                    <img class="" src="<?php tu(); ?>/assets/img/credito/big4.svg">
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
                    <li data-tab="grafico-1-saldo-concessao" class="active">Saldo e concessão</li>
                    <li data-tab="grafico-1-aumento-credito">Aumento do crédito</li>
                    <li data-tab="grafico-1-mpe-demais">MPEs vs demais empresas</li>
                    <li data-tab="grafico-1-tomadores-transacoes">Tomadores e transações</li>
                </ul>
            </div>

            <button class="flex text-azulSebrae items-center justify-end md:justify-center font-lato mb-6 md:mb-0 pointer-events-auto" id="fechar-detalhes">
              <?php svg('icon-fechar',12,12,"fill-azulSebrae mr-3");?> Fechar detalhes
            </button>

            <form class="w-full md:hidden relative"> 
                <select class="btn-azul w-full rounded-md font-lato tab-select">
                    <option selected value="grafico-1-saldo-concessao">Saldo e concessão</option>
                    <option value="grafico-1-aumento-credito">Aumento do crédito</option>
                    <option value="grafico-1-mpe-demais">MPEs vs demais empresas</option>
                    <option value="grafico-1-tomadores-transacoes">Tomadores e transações</option>
                </select>
            </form>

        </div>
        
        <?php get_template_part('blocks/graficos/credito/grafico-1-saldo-concessao'); ?>
        <?php get_template_part('blocks/graficos/credito/grafico-1-aumento-credito'); ?>
        <?php get_template_part('blocks/graficos/credito/grafico-1-mpe-demais'); ?>
        <?php get_template_part('blocks/graficos/credito/grafico-1-tomadores-transacoes'); ?>

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
        <div class="flex flex-col md:flex-row">

            <div class="w-full md:w-6/12 relative  items-center flex">
                <div class="ml-1">
                    <img class="h-full" src="<?php tu(); ?>/assets/img/mei/dinamica_logo_desktop.png" alt="logo dinamica">
                </div>
            </div>

            <div class="w-full md:w-6/12 text-cinzaSebrae30  md:pl-4 items-center flex flex-col justify-center wysiwyg-medium">
                <?php the_field('narrativa_credito_texto_intro_1'); ?>            
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
                            <div id="mapacredito_barra_total" class="h-2 bg-azulSebrae rounded-l-md transition-all"></div>
                        </div>
                        <div class="font-campuni font-bold text-lg leading-4  text-azulSebrae mr-1" id="mapacredito_texto_participacao">0%</div>

                        <div class=" font-lato italic text-xs text-cinzaSebrae60 flex items-center">
                            <?php svg('icon-mouse',"10","14","fill-cinzaSebrae60 mr-1");?>Clique no mapa para ver outros estados
                        </div>
                    </div>
                   
                </div>

                <!-- Mapa  -->
                <div class="flex flex-col md:w-5/12">
                    <div class="my-4 h-full" id="mapacredito">
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
               <div class="font-lato text-sm text-cinzaSebrae45 ">Fonte: BCB.</br>*Valores concedidos e de saldo foram atualizados para dezembro de 2023 pelo IPCA.
               </div>
            </div>
        </div>
    </div>
    <!-- Grafismo -->
    <div class="flex w-full  h-full justify-between items-start  bg-branco" >  
        <?php svg('grafismo8-p1',"545","96","");?>  
         <div class="hidden md:flex"> <?php svg('grafismo8-p2',"623","64"," ");?></div>
    </div>
</section>


<!-- SESSAO DUAS COLUNAS - 50%  -->
<section class="bg-branco -mt-2 relative" id="detalhes">
    <div class="container mx-auto px-6 -mt-12 md:-mt-0 md:mb-28">
        <!-- Colunagem -->
        <div class="flex flex-col md:flex-row w-full gap-4 ">
            <!-- Coluna 1 - 50% w-1/2 -->
            <div class="md:w-1/2 mb-8 md:mb-0 md:pr-4 md:mt-0 mt-16">
                <img src="<?php tu(); ?>/assets/img/credito/juros.png">
            </div>
            <!-- Coluna 2 - 50% w-1/2 -->
            <div class="md:w-1/2  mb-8 md:mb-0 md:pr-4">
                <div class="text-cinzaSebrae45 wysiwyg-medium leading-6">
                    <?php the_field('narrativa_credito_texto_intro_2'); ?>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- SESSAO DUAS COLUNAS - 25% / 75%  -->
<section class="bg-branco -mt-2 relative" id="detalhes">
    <div class="container mx-auto px-6 -mt-12 md:-mt-0 md:mb-28">
        <!-- Colunagem -->
        <div class="flex flex-col md:flex-row w-full gap-4">
            <!-- Coluna 1 - 25% w-3/12 -->
            <div class="w-full md:w-3/12 text-cinzaSebrae45 sticky mb-6 wysiwyg-medium">
                <?php the_field('narrativa_credito_grafico_5_texto'); ?>
            </div>
            <!-- Coluna 1 - 75% w-9/12 -->
            <div class="w-full md:w-9/12 md:pl-5">
                <?php get_template_part('blocks/graficos/credito/grafico-2-taxa-media'); ?>
            </div>
            

        </div>
    </div>
</section>

<!-- SESSAO DUAS COLUNAS - 25% / 75%  -->
<section class="bg-branco -mt-2 relative" id="detalhes">
    <div class="container mx-auto px-6 -mt-12 md:-mt-0 md:mb-28">
        <!-- Colunagem -->
        <div class="flex flex-col md:flex-row w-full gap-4">
            <!-- Coluna 1 - 25% w-3/12 -->
            <div class="w-full md:w-3/12 text-cinzaSebrae45 sticky mb-6 wysiwyg-medium">
                <?php the_field('narrativa_credito_grafico_6_texto'); ?>
            </div>
            <!-- Coluna 1 - 75% w-9/12 -->
            <div class="w-full md:w-9/12 md:pl-5">
                <?php get_template_part('blocks/graficos/credito/grafico-2-inadimplencia'); ?>
            </div>
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
                    <?php the_field('narrativa_credito_texto_intro_3'); ?>
                </div>
            </div>
        </div>
    </div>

    <!-- Cards -->
    <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 mb-10">

            <div class="card azulsebrae py-8 px-8 md:py-6 ">
                <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">Quais são as principais dificuldades enfrentadas pelas MPEs para obtenção do crédito? </h4>
                <div class="h-fit md:mb-4 w-full">
                    <img class="z-10 w-full p-8" src="<?php tu(); ?>/assets/img/credito/perfis-cred1.png" alt="diversidade1">
                </div>
                <div class="w-full flex flex-col items-center">
                    <div class=" font-campuni text-5xl text-azulSebrae mb-1 font-bold">21%</div>
                    <div class=" text-lg mb-6 leading-5 text-center">conta corrente ou empresa muito nova</div>
                    <?php 
                    $link = get_field('narrativa_credito_diversidade_card_1');
                    if( $link ): $link_url = $link['url']; $link_target = $link['target'] ? $link['target'] : '_self';
                    ?>
                    <a class="btn btn-azul" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">Saiba mais</a>
                    <?php endif; ?>   
                </div>
            </div>
<!-- 
            <div class="card azulsebrae py-8 px-8 md:py-6 ">
                <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">Para quais finalidades as MPEs utilizam o crédito?</h4>
                <div class="h-fit md:mb-4 w-full">
                    <img class="z-10 w-full p-8" src="<?php tu(); ?>/assets/img/credito/perfis-cred2.png" alt="diversidade2">
                </div>
                <div class="w-full flex flex-col items-center">
                    <div class=" font-campuni text-5xl text-azulSebrae mb-1 font-bold">34%</div>
                    <div class=" text-lg mb-6 leading-5 text-center">capital de giro</div>
                    <a href="<?php echo home_url('perguntas/quem-e-esse-empreendedor-das-mpes/'); ?>" class="btn btn-azul">Saiba mais</a>
                </div>
            </div> -->

            <div class="card azulsebrae py-8 px-8 md:py-6 ">
                <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">A empresa tentou um novo empréstimo/ financiamento em banco, nos últimos 6 meses?</h4>
                <div class="h-fit md:mb-4 w-full">
                    <img class="z-10 w-full p-8" src="<?php tu(); ?>/assets/img/credito/perfis-cred3.png" alt="diversidade3">
                </div>
                <div class="w-full flex flex-col items-center">
                    <div class=" font-campuni text-5xl text-azulSebrae mb-1 font-bold">76,7%</div>
                    <div class=" text-lg mb-6 leading-5 text-center">das empresas não tentou nos últimos 6 meses</div>
                    <?php 
                    $link = get_field('narrativa_credito_diversidade_card_2');
                    if( $link ): $link_url = $link['url']; $link_target = $link['target'] ? $link['target'] : '_self';
                    ?>
                    <a class="btn btn-azul" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">Saiba mais</a>
                    <?php endif; ?>   
                </div>
            </div>

      <!--       <div class="card azulsebrae py-8 px-8 md:py-6 ">
                <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">Onde a empresa solicitou esse empréstimo / financiamento?</h4>
                <div class="h-fit md:mb-4 w-full">
                    <img class="z-10 w-full p-8" src="<?php tu(); ?>/assets/img/credito/perfis-cred4.png" alt="diversidade4">
                </div>
                <div class="w-full flex flex-col items-center">
                    <div class=" font-campuni text-5xl text-azulSebrae mb-1">99%</div>
                    <div class=" text-lg mb-6 leading-5 text-center">LoremIpsun</div>
                    <a href="<?php echo home_url('/perguntas/qual-era-a-principal-ocupacao-do-respondente-antes-de-abrir-sua-empresa/'); ?>" class="btn btn-azul">Saiba mais</a>
                </div>
            </div> -->

            <div class="card azulsebrae py-8 px-8 md:py-6 ">
                <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">A empresa conseguiu obter este novo empréstimo ou financiamento?</h4>
                <div class="h-fit md:mb-4 w-full">
                    <img class="z-10 w-full p-8" src="<?php tu(); ?>/assets/img/credito/perfis-cred5.png" alt="diversidade5">
                </div>
                <div class="w-full flex flex-col items-center">
                    <div class=" font-campuni text-5xl text-azulSebrae mb-1 font-bold">54,4%</div>
                    <div class=" text-lg mb-6 leading-5 text-center">não obteve o empréstimo</div>
                    <?php 
                    $link = get_field('narrativa_credito_diversidade_card_3');
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
    <div class="flex w-full  h-full justify-between items-start -top-6  mb-2 md:mb-20 " >  
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
        </div>

        <div class="w-full container mx-auto px-6 text-cinzaSebrae20">
            <div class="text-xlarge mb-6 wisywig-medium">
                <?php the_field('narrativa_credito_texto_intro_3'); ?>
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
                    <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">Quais são as principais dificuldades enfrentadas pelas MPEs para obtenção do crédito?</h4>
                    <div class="h-fit md:mb-4 w-full">
                        <img class="z-10 w-full p-8" src="<?php tu(); ?>/assets/img/credito/perfis-cred1.png" alt="diversidade1">
                    </div>
                    <div class="w-full flex flex-col items-center">
                        <div class=" font-campuni text-5xl text-azulSebrae mb-1">21%</div>
                        <div class=" text-lg mb-6 leading-5 text-center">conta corrente ou empresa muito nova</div>
                        <?php 
                        $link = get_field('narrativa_credito_diversidade_card_1');
                        if( $link ): $link_url = $link['url']; $link_target = $link['target'] ? $link['target'] : '_self';
                        ?>
                        <a class="btn btn-azul" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">Saiba mais</a>
                        <?php endif; ?>   
                    </div>
                </div>

                <div class="card azulsebrae py-8 px-8 splide__slide ">
                    <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">A empresa tentou um novo empréstimo/ financiamento em banco, nos últimos 6 meses?</h4>
                    <div class="h-fit md:mb-4 w-full">
                        <img class="z-10 w-full p-8" src="<?php tu(); ?>/assets/img/credito/perfis-cred3.png" alt="diversidade2">
                    </div>
                    <div class="w-full flex flex-col items-center">
                        <div class=" font-campuni text-5xl text-azulSebrae mb-1">76,7%</div>
                        <div class=" text-lg mb-6 leading-5 text-center">das empresas não tentou nos últimos 6 meses</div>
                        <?php 
                        $link = get_field('narrativa_credito_diversidade_card_2');
                        if( $link ): $link_url = $link['url']; $link_target = $link['target'] ? $link['target'] : '_self';
                        ?>
                        <a class="btn btn-azul" href="<?php echo esc_url( $link_url ); ?>" target="<?php echo esc_attr( $link_target ); ?>">Saiba mais</a>
                        <?php endif; ?>   
                    </div>
                </div>

                <div class="card azulsebrae py-8 px-8 splide__slide ">
                    <h4 class="font-bold text-2xl leading-6 text-azulSebrae20 md:min-h-[110px] mb-2 mt-0 items-start">A empresa conseguiu obter este novo empréstimo ou financiamento?</h4>
                    <div class="h-fit md:mb-4 w-full">
                        <img class="z-10 w-full p-8" src="<?php tu(); ?>/assets/img/credito/perfis-cred5.png" alt="diversidade3">
                    </div>
                    <div class="w-full flex flex-col items-center">
                        <div class=" font-campuni text-5xl text-azulSebrae mb-1">54,4%</div>
                        <div class=" text-lg mb-6 leading-5 text-center">não obteve o empréstimo</div>
                        <?php 
                        $link = get_field('narrativa_credito_diversidade_card_3');
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


