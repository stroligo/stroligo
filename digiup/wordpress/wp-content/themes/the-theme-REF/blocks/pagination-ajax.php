<?php
global $wp_query;
add_filter( 'paginate_links', function( $link )
{
    $newLink = explode('?', $link);
    $brekInBars = explode('/', $newLink[0]);
    return '#changePage('.end($brekInBars).')';
} );
?>
<div class="row pagination mt2 flex-center">
    <?php 
        $pag = paginate_links( array(
                'prev_next'    => true,
                'prev_text'    => '<',
                'next_text'    => '>',
                'format' => '%#%',
                'total' => isset($the_query) ? $the_query->max_num_pages : $wp_query->max_num_pages,
                'current' => isset($the_query) ? $the_query->query_vars['paged'] : ( get_query_var('paged') ? get_query_var('paged') : 1 ),
            ) );
        if($pag){
            $pag = str_replace('href', 'onclick', $pag);
            $pag = str_replace('#', '', $pag);
            echo $pag;
        }
   ?>
</div>

