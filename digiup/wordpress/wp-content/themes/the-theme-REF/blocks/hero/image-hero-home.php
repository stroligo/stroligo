
<?php
$narrativa = get_sub_field('home_hero_narrativa');
$narrativa_id = $narrativa->ID;
?>
<div class="image-hero">
    <div class="image-hero-desktop image-hero-mpe">
        <div class="image-mask-wrapper">
            <div class="image-mask">
                <?php
                    $img = get_field('narrativa_img', $narrativa_id); 
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
