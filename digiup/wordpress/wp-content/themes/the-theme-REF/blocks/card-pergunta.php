<?php 
$t_pergunta = get_the_terms($post,'tipo-pergunta'); 
$post_views_count = get_post_meta( get_the_ID(), 'post_views_count', true );
$likes_count = get_post_meta( get_the_ID(), 'post_views_likes', true );
?>

<a href="<?php the_permalink(); ?>" id="card-<?php echo get_the_ID(); ?>" class="card <?php if($t_pergunta) foreach ($t_pergunta as $t) : echo $t->slug; endforeach; ?>">
    <h4 class="titulo"><?php the_title(); ?></h4>
    <div class="more">
        <?php if($t_pergunta) foreach ($t_pergunta as $t)  : ?>
            <div class="tag"><?php echo $t->name; ?></div>
        <?php endforeach; ?>
        <div class="icons">
            <?php if (!empty( $post_views_count )): ?>
                <div><?php svg('icon-olho',14,11,"");?><span class=""><?php echo $post_views_count; ?></span></div>
            <?php endif; ?>
            <?php if (!empty( $likes_count )): ?>
                <div><?php svg('icon-like',14,13,"");?><span class="likes-count"><?php echo $likes_count; ?></span></div>
            <?php endif; ?>
        </div>
    </div>
    <div class="explorar">
        <button class="btn btn-azul">Explorar</button>
    </div>
</a>