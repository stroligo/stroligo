<?php 
$current_page = 'pergunta'; 
$terms = wp_get_post_terms(get_the_ID(), 'tipo-pergunta', array('fields' => 'ids'));

customSetPostViews(get_the_ID());

get_header(); 
?>

<section>
    <div class="container mx-auto px-6 md:px-0 pt-4 md:pt-20 pb-20">
        <div class="flex justify-between mb-8 md:mb-10 pt-8 md:pt-0 items-center relative">
            <div class="md:w-10/12 flex">
                <a href="<?php echo home_url(); ?>" class="btn btn-contorno mr-4 flex items-center h-[40px]"><?php svg('icon-anterior',16,16,"fill-azulSebrae ");?><span class="hidden md:flex  ml-1">Voltar</span></a>
                <button id="likeButton" data-perguntaid="<?php echo get_the_ID(); ?>" class="btn btn-azul flex items-center h-[40px]"><?php svg('icon-like',16,16,"fill-branco");?><span class="hidden md:flex ml-1">Curtir</span></button>
            </div>
            <div class="md:w-2/12 ">
                <div class="text-xs font-lato text-cinzaSebrae45 md:mb-2">Compartilhar</div>
                <div class="flex gap-4 social">
                    <div>
                        <a class="block cursor-pointe pointer-events-all" href="https://twitter.com/intent/tweet?text=<?php echo urlencode(get_the_title()); ?>&amp;url=<?php echo urlencode(get_the_permalink()); ?>" target="_blank"><?php svg('icon-twitter',24,24,"fill-azulSebrae");?> </a>
                        <span class="tooltip text-xs">twitter</span>
                    </div>
                    <div>
                        <a class="block cursor-pointer pointer-events-all" href="http://www.facebook.com/sharer.php?u=<?php echo urlencode(get_the_permalink()); ?>&amp;t=<?php echo urlencode(get_the_title()); ?>" target="_blank"><?php svg('icon-facebook',24,24,"fill-azulSebrae");?></a>
                        <span class="tooltip text-xs">facebook</span>
                    </div>
                    <div>
                        <a class="block cursor-pointer pointer-events-all" href="https://www.linkedin.com/shareArticle?mini=true&url=<?php echo urlencode(get_the_permalink()); ?>&title=<?php echo urlencode(get_the_title()); ?>&source=LinkedIn" target="_blank"><?php svg('icon-linkedin',24,24,"fill-azulSebrae");?></a>
                        <span class="tooltip text-xs">linkedin</span>
                    </div>
                    <div>
                        <a class="block cursor-pointer pointer-events-all" href="https://wa.me/?text=<?php echo urlencode(get_the_permalink()); ?>" target="_blank"><?php svg('icon-whatsapp',24,24,"fill-azulSebrae");?> </a>
                        <span class="tooltip text-xs">whatsapp</span>
                    </div>
                    <div>
                        <button class="block cursor-pointer pointer-events-all" class="copy-url" id="copyBtn"><?php svg('icon-compartilhar',24,24,"fill-azulSebrae");?></button>
                        <input style="display:none;" type="text" id="copyText" value="<?php echo currentURL(); ?>">
                        <span class="tooltip text-xs">copiar link</span>
                    </div>
                </div>
            </div>
        </div>
       
        <div class="md:w-8/12 md:mb-16 mb-6 text-azulSebrae33 text-2xl md:text-5xl font-campuni font-bold">
            <?php the_title(); ?>
            <?php if(get_field('pergunta_tooltip_pergunta')) : ?>
                <div class="tooltip-pergunta">
                    <?php svg('icon-info',14,14,"fill-azulSebrae inline");?>
                    <span class="tooltip">
                        <p class="text-white mb-2"><?php the_field('pergunta_tooltip_pesquisa'); ?></p>
                        <p class="text-cinzaSebrae60 text-xs mb-1"><?php the_field('pergunta_tooltip_numero_pergunta'); ?></p>
                        <p class="text-white font-light"><?php the_field('pergunta_tooltip_pergunta'); ?></p>
                    </span>
                </div>
            <?php endif; ?>
        </div>

        <div class="w-full md:flex gap-6">
            <div class="md:w-8/12">

                <?php if( have_rows('conteudo_single') ): while( have_rows('conteudo_single') ): the_row(); ?>

                    <?php if( get_row_layout() == 'embed' ): ?>

                        <div class="pb-12 md:pb-16 embed-content">
                            <div class="mb-4 md:mb-6 font-alegreya text-2xl text-cinzaSebrae30"><?php the_sub_field('embed_single_titulo'); ?></div>
                            <div class="mb-4 md:mb-6 w-full embed-inner">
                                <?php the_sub_field('embed_single'); ?>
                            </div>
                        </div>

                    <?php elseif( get_row_layout() == 'multi_embed' ): ?>
                    <?php $layout_counter = isset($layout_counter) ? $layout_counter + 1 : 1; ?>

                        <div class="pb-12 md:pb-16 tab-wrapper">
                            <div class="mb-4 md:mb-6 font-alegreya text-2xl text-cinzaSebrae30"><?php the_sub_field('multi_embed_single_titulo'); ?></div>
                            
                            <div class="flex mb-4">  
                                <div class="invisible max-h-0 max-w-0 md:visible md:max-h-none md:max-w-none">
                                    <ul class="menu-simples">

                                        <?php if( have_rows('multi_embed_rep') ): while( have_rows('multi_embed_rep') ) : the_row(); ?>
                                        <?php $unique_index = $layout_counter . '_' . get_row_index(); ?>

                                            <li data-tab="tab-<?php echo $unique_index; ?>" class ="<?php echo get_row_index() === 1 ? 'active' : ''; ?>"><?php the_sub_field('multi_embed_single_tab'); ?></li>

                                        <?php endwhile; endif; ?>

                                    </ul>
                                </div> 

                                <form class="w-full md:hidden relative"> 
                                    <select class="btn-azul w-full rounded-md font-lato tab-select">

                                        <?php if( have_rows('multi_embed_rep') ): while( have_rows('multi_embed_rep') ) : the_row(); ?>
                                        <?php $unique_index = $layout_counter . '_' . get_row_index(); ?>
                                           
                                            <option <?php echo get_row_index() === 1 ? 'selected' : ''; ?> value="tab-<?php echo $unique_index; ?>"><?php the_sub_field('multi_embed_single_tab'); ?></option>
                                        
                                        <?php endwhile; endif; ?>

                                    </select>
                                </form>
                            </div>
                    
                            <?php if( have_rows('multi_embed_rep') ): while( have_rows('multi_embed_rep') ) : the_row(); ?>
                            <?php $unique_index = $layout_counter . '_' . get_row_index(); ?>

                                <div class="w-full tab-content <?php echo get_row_index() === 1 ? 'is-visible' : ''; ?>" id="tab-<?php echo $unique_index; ?>">
                                    <div class="embed-inner">
                                        <?php the_sub_field('multi_embed_single'); ?>
                                    </div>
                                </div>

                            <?php endwhile; endif; ?>

                        </div>

                    <?php endif; ?> <!-- fim endif flex  -->

                <?php endwhile; endif; ?>

                <div class="flex justify-between mb-2 mt-2 items-center">
                    <?php if(get_field('pergunta_fonte')) :?>
                        <p><?php the_field('pergunta_fonte'); ?></p>
                    <?php endif; ?>
                    <?php if(get_field('pergunta_btn_link') && get_field('pergunta_btn_text')) :?>
                        <a href="<?php the_field('pergunta_btn_link'); ?>" target="blank" class="btn btn-azul text-base flex items-center"><p class="mr-2"><?php the_field('pergunta_btn_text'); ?></p><?php svg('icon-grafico',16,16,"");?></a>
                    <?php endif; ?>
                </div>

            </div>

            <?php if(get_field('especialista_texto')) :?>

                <div class="md:w-4/12">
                    <div class="flex justify-end"><?php svg('grafismo8',286,40,"");?></div>
                    <div class=" p-8 bg-azulSebrae30 text-branco">
                        <h3 class="mb-6">Análise do especialista</h3>

                        <?php 
                        $especialista = get_field('especialista'); 
                        if($especialista) :
                        ?>

                            <div class="flex items-center mb-4">
                            <figure class="foto-especialista">
                                    <?php
                                        $img = get_field('especialista_img', $especialista->ID); 
                                        if($img){
                                            $img = isset($img['sizes']['square_p']) ? $img['sizes']['square_p'] : $img['url'];
                                            echo '<img src="'.$img.'">';
                                        }
                                    ?>
                                </figure>
                                <div>
                                    <h4 class="text-coral"><?php echo get_the_title($especialista->ID); ?></h4>
                                    <div class="font-lato text-xs"><?php the_field('especialista_cargo', $especialista->ID); ?></div>
                                </div>
                            </div>

                        <?php endif; ?>

                        <div class="font-lato text-xs mb-2">Publicado em <?php echo get_the_date(); ?></div>

                        <div class="text-base">
                            <div>
                                <?php the_field('especialista_texto'); ?>
                            </div>
                            <?php if(get_field('especialista_texto_leiamais')) :?>
                                <div id="lermais">
                                    <?php the_field('especialista_texto_leiamais'); ?>
                                </div>
                            <?php endif; ?>
                        </div>

                        <?php if(get_field('especialista_texto_leiamais')) :?>
                            <button id="lermais-btn" class="flex items-center font-lato text-lg">+ Ler mais</button>
                        <?php endif; ?>
                    </div>
                </div>

            <?php endif; ?>

        </div>


    </div>
</section>

<?php
$narrativa = get_field('narrativa_rel');
if(!is_array($narrativa)) $narrativa = array($narrativa);
shuffle($narrativa);
$theID = get_the_ID();

$args = array(
    'post_type' => 'perguntas',
    'post__not_in' => array( get_the_ID() ),
    'tax_query' => array(
        array(
            'taxonomy' => 'tipo-pergunta',
            'field' => 'term_id',
            'terms' => $terms, // Use the terms from the current post
        ),
    ),
);

$the_query = new WP_Query($args);
?>

<?php if ($the_query->have_posts()) : ?>

    <section class="bg-cinzaSebrae97 pb-24">

        <div class="container mx-auto px-6 pt-8 md:pt-20">
            <div class="w-full md:w-6/12 mb-12">
                <h2 class=" mb-6 text-azulSebrae20">Perguntas relacionadas</h2>
            </div>
        </div>

        <?php $post_count = $the_query->post_count; 
        if ($post_count > 4) : ?>

            <!-- Cards Slider Dektop-->
            <div class="mx-auto splideNarrativas relative hidden md:flex md:flex-col">

                <!-- Slides -->
                <div class="container mx-auto md:px-0 splide__track">
                    <div class="splide__list">

                        <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
                            <div class="splide__slide">
                                <?php get_template_part('blocks/card-pergunta'); ?>
                            </div>
                        <?php endwhile; ?>

                    </div>
                </div>

            </div>

            <!-- Card MOBILE -->
            <div class="relative mx-auto flex flex-col md:hidden pb-10 ">

                <!-- Cards -->
                <div class="container mx-auto px-6 pb-6 md:pb-0">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">

                        <?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
                            <div class="splide__slide">
                                <?php get_template_part('blocks/card-pergunta'); ?>
                            </div>
                        <?php endwhile; ?>

                    </div>
                </div>

            </div>

        <?php else :?>

            <div class="container mx-auto px-6">

                <div class="grid grid-cols-1 md:grid-cols-4 gap-6">

                    <?php while ($the_query->have_posts()) : $the_query->the_post();  ?>

                        <?php get_template_part('blocks/card-pergunta'); ?>

                    <?php endwhile; ?>

                </div>
                            
            </div>

        <?php endif;?>

    </section>

<?php endif; ?>

<!-- Pega o Footer -->
<?php get_footer(); ?>


