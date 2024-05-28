<div class="image-hero">
    <div class="image-hero-desktop image-hero-mpe mt-6 md:mt-0">
        <div class="image-mask-wrapper">
            <div class="image-mask">
                <?php
                    $img = get_field('narrativa_img'); 
                    if($img){
                        $img = isset($img['sizes']['square']) ? $img['sizes']['square'] : $img['url'];
                        echo '<img src="'.$img.'">';
                    }
                ?>
            </div>
        </div>
        <img class="shape-1" src="<?php tu();?>/assets/img/mpe/hero-shape-1.svg">
        <img class="shape-2" src="<?php tu();?>/assets/img/mpe/hero-shape-2.svg">
    </div>
</div>
