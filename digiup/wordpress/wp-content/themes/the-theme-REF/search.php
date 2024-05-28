<?php 
$current_page = 'search'; 
$search_terms = wp_strip_all_tags($_GET['s']);

$respostaform = enviaForm();

get_header(); 
?>

<?php
$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
$args = array(
    'post_type' => array('perguntas', 'narrativas'),
    "s" => $search_terms,
    'paged' => $paged,
);
$q = new WP_Query( $args ); ?>

<?php if ( $q->have_posts() ) : ?>
    
    <section>
        <div class="container mx-auto px-6 md:px-0 pt-4 md:pt-20 pb-20 md:w-8/12 ">
            <div class="w-full">
                <p class="mb-1 text-azulSebrae20 text-2xl md:text-5xl font-campuni font-bold">Resultado para</p>
                <p class="mb-9 text-azulSebrae33 font-campuni font-light text-3xl"><?php echo $search_terms; ?></p>

                <?php while ($q->have_posts()) : $q->the_post(); ?>

                    <div class="pt-4 border-b border-cinzaSebrae75">
                        <a href="<?php the_permalink(); ?>">
                            <div class="font-lato text-xs text-cinzaSebrae60 font-bold">
                                <?php 
                                    $post_type = get_post_type_object($post->post_type);
                                    echo $post_type->labels->singular_name;
                                ?>
                            </div>
                            <div class="text-azulSebrae20 hover:text-azulSebrae43 font-alegreya font-bold text-2xl cursor-pointer mb-2"><?php the_title(); ?></div>
                            <?php if(get_field('narrativa_texto_card')) : ?>
                                <div class="text-cinzaSebrae45 font-alegreya text-lg mb-4">
                                    <?php the_field('narrativa_texto_card'); ?>
                                </div>
                            <?php endif; ?>
                        </a>
                    </div>
                
                <?php endwhile; ?>

                <!-- Paginacao -->
                <div class="flex justify-center pt-6">
                    <?php post_pagination(1, $q); ?>
                </div>
            

            </div>

        </div>
    </section>
    
<?php else :?>

    <section>
        <div class="container mx-auto px-6 md:px-0 pt-4 md:pt-20 pb-20 md:w-8/12 ">
            <div class="w-full">
                <div class=" mb-5 text-azulSebrae20 text-5xl font-campuni font-bold">Não encontrou o que buscava?</div>
                <div class=" font-alegreya text-2xl font-cinzaSebrae30 mb-6">Deixe aqui suas sugestões de melhoria ao nosso ambiente integrado de consultas ou mesmo novas perguntas e informações que acredita ser interessante de se incluir neste ambiente.</div>

                <!-- Formulario -->
                <form method="post" action="<?php echo currentURL(); ?>" class="formpergunta">

                        <?php if($respostaform) echo '<div class="mb-4 mt-4">'. $respostaform["resposta"] . '</div>'; ?>

                        <div class="relative mb-4">
                        <input name="as5d49asd" type="text" class="peer" required="true" placeholder="name" />
                        <label for="text" class="labelMovimento-pergunta bg-branco">Nome</label>
                        </div>
            
                        <div class="relative mb-4">
                        <input name="gfkdsjcnbd" type="email" name="email" id="email" required="true" class="peer" placeholder="Email" />
                        <label for="email" class="labelMovimento-pergunta bg-branco">Email </label>
                        </div>

                        <div class="relative mb-1">
                        <textarea name="ytyahsjdbc" required="true" id="message" rows="4" class="peer" placeholder="Escreva aqui..."></textarea>
                        <label for="message" class="labelMovimento-pergunta bg-branco">Mensagem </label>
                        </div>

                        <div class="mb-4">
                        <input type="checkbox" name="sdiosrufsscb" id="checkbox-ok" class="checkBoxEdited bg-branco" />
                        <label for="checkbox-ok" class="pt-1 text-xs">Li e concordo com os <a href="https://minio-cpe.sebrae.com.br/documento/politica-privacidade.pdf" target="blank" class="underline">termos de privacidade</a></label>
                        </div>
                        
                        <div class=" text-right">
                            <button type="submit" class="btn btn-azul">Enviar</button>
                        </div>
            
                </form>

            </div>

        </div>
    </section>

<?php endif; ?>

<!-- Pega o Footer -->
<?php get_footer(); ?>


