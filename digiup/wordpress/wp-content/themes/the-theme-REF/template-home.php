<?php
    if(isset($_GET['ajax'])): 
?>
    <?php         
        $args = array (
            'post_type' => array('perguntas'),
            'posts_per_page' => -1,
            'order' => ($_GET['ord'] == 'asc') ? 'ASC' : 'DESC',
            'paged' => wp_strip_all_tags($_GET['pg']),
            'tax_query' => array(
                'relation' => 'AND',
            ),
        );
        if($_GET['ord'] == 'likes'){
            $args['orderby'] = 'meta_value_num date';
            $args['meta_query'] = array(
                'relation' => 'OR',
                array(
                    'key' => 'post_views_likes',
                    'compare' => 'EXISTS',
                ),
                array(
                    'key' => 'post_views_likes',
                    'compare' => 'NOT EXISTS',
                ),
            );
        }

        $taxs = explode(',', wp_strip_all_tags($_GET['taxs']));

        foreach($taxs as $t){
            if($t){
                $terms = explode(',', $_GET[$t]);
                array_push($args['tax_query'], array(
                    'taxonomy' => substr($t, 4),
                    'field'    => 'slug',
                    'terms'    => $terms,
                ));
            }
        }

        $the_query = new WP_Query( $args );
    ?>

    <?php if ( $the_query->have_posts() ) : ?>

        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10 perguntas">

            <?php while ($the_query->have_posts()) : $the_query->the_post();  ?>

                <?php get_template_part('blocks/card-pergunta'); ?>

            <?php endwhile; ?>

        </div>

        <?php wp_reset_postdata(); ?>

    <?php endif; ?>

<?php
die; else:
/*
Template Name: Página inicial
*/  
$current_page = 'home'; 
get_header(); 
?>

<!-- Hero -->
<section class="heroHome relative min-h-[588px] bg-cinzaSebrae97 bg-gradient-to-b from-[#FFB380] to-[#FFB38000]">

        <div class="splideHero relative z-10 pt-10 md:pt-14">

            <div class="splide__track">
                <div class="splide__list">

                    <?php if( have_rows('home_hero_rep') ): while( have_rows('home_hero_rep') ) : the_row(); ?>
                        
                        <?php
                        $narrativa = get_sub_field('home_hero_narrativa');
                        $permalink = get_permalink( $narrativa->ID );
                        $titulo = get_the_title( $narrativa->ID );
                        $narrativa_id = $narrativa->ID;
                        ?>

                        <div class="splide__slide">
                            <div class="container mx-auto px-6">
                                <div class="w-12/12 md:w-10/12 flex flex-row mx-auto">
                                    <div class="w-12/12 md:w-6/12 pl-0 pr-6 pb-6 md:px-0 text-azulSebrae20 flex justify-center flex-col">
                                        <div class="font-campuni mb-2">Narrativas SEBRAE</div>
                                        <h1 class="mb-2 md:mb-6"><?php echo get_sub_field('home_hero_titulo') ? get_sub_field('home_hero_titulo') : esc_html($titulo); ?></h1>
                                        <div class="flex md:hidden justify-center mt-8 md:mt-0 pr-8 md:pr-0">
                                            <?php echo get_template_part('blocks/hero/image-hero-home'); ?>
                                        </div>
                                        <p class="mb-6 text-lg"><?php the_sub_field('home_hero_texto'); ?></p>
                                        <div>   
                                            <a href="<?php echo esc_url($permalink); ?>" class="btn btn-azul">Explorar</a>      
                                            <a href="#narrativas" class="btn btn-contorno">Ver todas narrativas</a>
                                        </div>
                                    </div>
                                    <div class="w-6/12 hidden md:flex">
                                        <?php echo get_template_part('blocks/hero/image-hero-home'); ?>
                                    </div>
                                </div>
                            </div>
                        </div>


                    <?php endwhile; endif; ?>
 
                </div>
            </div>

        </div>

        <!-- Grafismo Desktop -->
        <div class=" hidden md:flex absolute -bottom-16 right-0 ">
            <?php svg('grafismo1',1032,228,"");?>
        </div>
        <!-- Grafismo Responsivo -->
        <div class="w-full flex md:hidden">
            <?php svg('grafismo1',1400,150,"");?>
        </div>
</section>

<!-- Perguntas -->
<section class="bg-cinzaSebrae97" id="perguntas">
    <div class="container mx-auto px-6 pt-4 md:pt-20 pb-16">
        <div class="w-full md:w-6/12 mb-12">
            <h2 class=" mb-6 text-azulSebrae20"><?php the_field('home_perguntas_titulo'); ?></h2>
            <p class="text-cinzaSebrae30 text-lg"><?php the_field('home_perguntas_texto'); ?></p>
        </div>
        <!-- Filtro -->
        <?php get_template_part('blocks/filtro'); ?>

        <!-- Cards -->
        <div id="results"></div>

    </div>
</section>

<!-- Narrativas -->
<section class="relative" id="narrativas">
    <div class="container mx-auto px-6 pt-20">
        <div class="w-full md:w-6/12 mb-12">
            <h2 class=" mb-6 text-azulSebrae20"><?php the_field('home_narrativas_titulo'); ?></h2>
            <p class="text-cinzaSebrae30 text-lg"><?php the_field('home_narrativas_texto'); ?></p>
        </div>
    </div>

    <?php
    $args = array(
      'post_type' => 'narrativas',
    );
    $the_query = new WP_Query( $args ); 
    if ( $the_query->have_posts() ) : 
    ?>

        <?php $post_count = $the_query->post_count; 
        if ($post_count > 4) : ?>

            <!-- Cards Slider -->
            <div class="pl-6 md:pl-0 md:mx-auto mb-24 splideNarrativas">
                <div class="container mx-auto md:px-0 splide__track">
                    <div class="splide__list">

                        <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

                            <?php $image = get_field('narrativa_img'); ?>
                            <a href="<?php the_permalink(); ?>" class="card home degrade splide__slide" style="background-image: url('<?php echo esc_url($image['url']);?>')">
                                <h4 class="titulo "><?php the_title(); ?></h4>
                                <div class="moreslide ">
                                    <div class="mb-4"><?php the_field('narrativa_texto_card'); ?></div>
                                    <button class="btn btn-azul">Explorar</button>
                                </div>
                                <div class="efeito"> </div>
                            </a>

                        <?php endwhile;?>

                    </div>
                </div>
            </div>

        <?php else :?>

            <div class="container mx-auto px-6 mb-24">

                <div class="grid grid-cols-1 md:grid-cols-4 gap-6">

                    <?php while ($the_query->have_posts()) : $the_query->the_post();  ?>

                        <?php $image = get_field('narrativa_img'); ?>
                        <a href="<?php the_permalink(); ?>" class="card home degrade splide__slide" style="background-image: url('<?php echo esc_url($image['url']);?>')">
                            <h4 class="titulo "><?php the_title(); ?></h4>
                            <div class="moreslide ">
                                <div class="mb-4"><?php the_field('narrativa_texto_card'); ?></div>
                                <button class="btn btn-azul">Explorar</button>
                            </div>
                            <div class="efeito"> </div>
                        </a>

                    <?php endwhile; ?>

                </div>
                            
            </div>

        <?php endif;?>

    <?php endif;?>

    <div class="absolute hidden md:flex right-0 top-36 -z-10"><?php svg('grafismo2',1158,282,"");?></div>
</section>

<?php get_footer(); endif; ?>

