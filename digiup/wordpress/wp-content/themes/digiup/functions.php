<?php
setlocale(LC_ALL, 'pt_BR');

/* Functions */
	function tu($echo=true){
		if($echo){ 
			echo get_template_directory_uri();
		}else{
			return get_template_directory_uri();
		}
	}
	function the_slug($echo=true){
		$slug = basename(get_permalink());
		do_action('before_slug', $slug);
		$slug = apply_filters('slug_filter', $slug);
		if( $echo ) echo $slug;
		do_action('after_slug', $slug);
		return $slug;
	}
	function cleanName($s){
	    $s = strtr(utf8_decode($s), utf8_decode('àáâãäçèéêëìíîïñòóôõöùúûüýÿÀÁÂÃÄÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝ'), 'aaaaaceeeeiiiinooooouuuuyyAAAAACEEEEIIIINOOOOOUUUUY');
	    $s = str_replace("'", '_', $s);
		$s = preg_replace("/[^A-Za-z \_\-]/", "", strtolower($s));
		$s = preg_replace("/\s+/", "_", $s);
		$s = preg_replace("/-+/", "-", $s);
		return $s;
	}
	function currentURL(){
		return (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
	}

/* Config */
	/* Images */
		add_filter('intermediate_image_sizes_advanced', 'removeImages');
		function removeImages($sizes){
			unset( $sizes['thumbnail']);
			unset( $sizes['medium']);
			unset( $sizes['medium_large']);
			unset( $sizes['large']);
			return $sizes;
		}
		
		add_action('init', 'imageSizes');
		function imageSizes() {
			add_image_size( 'square', 600, 600, true );
			add_image_size( 'square_p', 150, 150, true );
			add_filter( 'jpeg_quality', function(){ return 90; });
		}

	/* Content */
		add_filter('use_block_editor_for_post', '__return_false', 10);
		add_filter('use_block_editor_for_post_type', '__return_false', 10);


	/* oEmbed */
		add_filter('embed_oembed_html', 'embedHtml', 99, 4);
		function embedHtml($html, $url, $attr, $post_id) {
		  return '<div class="media">' . $html . '</div>';
		}
		add_filter( 'embed_defaults', 'embedDefault' );
		function embedDefault() {
		    return array(
		        'width'  => 844, 
		        'height' => 477
		    );
		}

/* Includes */
	// ACF
	add_filter('acf/settings/path', 'my_acf_settings_path');
	function my_acf_settings_path( $path ) { $path = get_stylesheet_directory() . '/plugins/acf/';  return $path; }
	add_filter('acf/settings/dir', 'my_acf_settings_dir');
	function my_acf_settings_dir( $dir ) { $dir = get_stylesheet_directory_uri() . '/plugins/acf/'; return $dir; }
	add_filter('acf/settings/show_admin', '__return_false');
	include_once( get_stylesheet_directory() . '/plugins/acf/acf.php' );

	global $current_page,$topStyle;
	include_once("include/customs.php");
	include_once("include/fields.php");	


/* Hide Menus */
	add_action( 'admin_menu', 'hideMenus', 999 );
    function hideMenus(){
        remove_menu_page('edit.php');
        remove_menu_page('edit-comments.php');
        
	    remove_submenu_page('options-general.php', 'options-media.php');
	    remove_submenu_page('options-general.php', 'options-discussion.php');
	    //remove_submenu_page('options-general.php', 'options-writing.php');
	    //remove_submenu_page('options-general.php', 'privacy.php');
	    //remove_submenu_page('options-general.php', 'options-reading.php');
	    //remove_submenu_page('options-general.php', 'options-permalink.php');
    }

    add_action('wp_dashboard_setup', 'removeDashboardWidgets', 999 );
    function removeDashboardWidgets(){
        global $wp_meta_boxes;
        unset($wp_meta_boxes['dashboard']['normal']['core']['welcome']);
        unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_activity']);
        unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_incoming_links']);
        unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_right_now']);
        unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_plugins']);
        unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_recent_comments']);
        unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_primary']);
        unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_quick_press']);
    }

    add_action( 'admin_bar_menu', 'removeBarNodes', 999 );
    function removeBarNodes(){
        global $wp_admin_bar;   
        $wp_admin_bar->remove_node( 'comments' );
        $wp_admin_bar->remove_node( 'new-post' );
        $wp_admin_bar->remove_node( 'customize' );
    }

	function svg($icon,$w,$h,$class){
		if($icon != ""){ echo('<svg width="'.$w.'" height="'.$h.'" class="'.$class.'" ><use  xlink:href="#'.$icon.'" /></svg>');
		}
		}

/* Content */
$current_page = isset($current_page) ? $current_page : the_slug(0);

if ( ! function_exists( 'post_pagination' ) ) :

	function post_pagination($custom, $query) {

		$pager = 999999999; // need an unlikely integer

		if($custom){
			$wp_query = $query;
		}else{
			global $wp_query;
		}
		echo paginate_links( array(
			'base' => str_replace( $pager, '%#%', esc_url( get_pagenum_link( $pager ) ) ),
			'format' => '?paged=%#%',
			'type' => 'list',
			'current' => max( 1, get_query_var('paged') ),
			'total' => $wp_query->max_num_pages,
			'prev_text' => __('<svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.11337 4.4732L3.94004 7.29987C4.06522 7.42608 4.23561 7.49707 4.41337 7.49707C4.59113 7.49707 4.76153 7.42608 4.8867 7.29987C5.14519 7.03985 5.14519 6.6199 4.8867 6.35987L2.5267 3.99987L4.88671 1.63987C5.14519 1.37985 5.14519 0.959897 4.88671 0.699872C4.76089 0.575081 4.59057 0.505513 4.41337 0.506538C4.23617 0.505513 4.06585 0.57508 3.94004 0.699871L1.11337 3.52654C0.987163 3.65172 0.916173 3.82211 0.916173 3.99987C0.916173 4.17763 0.987163 4.34803 1.11337 4.4732Z" fill="white"/></svg>'), 
			'next_text' => __('<svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.88663 3.5268L2.05996 0.700129C1.93478 0.57392 1.76439 0.50293 1.58663 0.50293C1.40887 0.50293 1.23847 0.57392 1.1133 0.700129C0.854813 0.960154 0.854813 1.3801 1.1133 1.64013L3.4733 4.00013L1.1133 6.36013C0.854813 6.62015 0.854813 7.0401 1.1133 7.30013C1.23911 7.42492 1.40943 7.49449 1.58663 7.49346C1.76383 7.49449 1.93415 7.42492 2.05996 7.30013L4.88663 4.47346C5.01284 4.34828 5.08383 4.17789 5.08383 4.00013C5.08383 3.82237 5.01284 3.65197 4.88663 3.5268Z" fill="white"/></svg>'), 
		) );
	}
endif;


function allowSVGUpload($mimes) {
	$mimes['svg'] = 'image/svg+xml';
	return $mimes;
}
add_filter('upload_mimes', 'allowSVGUpload');


// Form

function enviaForm(){
    if(isset($_POST['as5d49asd'])){
        $resposta = array("status"=>"", "resposta"=>"");
        
        $erros = array();
        
        if(!isset($_POST['as5d49asd']) || !$_POST['as5d49asd']) array_push($erros, "Nome");
        if(!isset($_POST['gfkdsjcnbd']) || !$_POST['gfkdsjcnbd'] || !filter_var($_POST['gfkdsjcnbd'], FILTER_VALIDATE_EMAIL) ) array_push($erros, "E-mail");
        if(!isset($_POST['ytyahsjdbc']) || !$_POST['ytyahsjdbc']) array_push($erros, "Mensagem");
        if(!isset($_POST['sdiosrufsscb']) || !$_POST['sdiosrufsscb']) array_push($erros, "Termos de privacidade");

        if (sizeof($erros) == 0) {
            $txt = "";
            $txt .= "Nome: ".$_POST['as5d49asd']."<br>";
            $txt .= "E-mail: ".$_POST['gfkdsjcnbd']."<br>";
            $txt .= "Mensagem: <br>".$_POST['ytyahsjdbc'];
            $headers = array('Content-Type: text/html; charset=UTF-8','Reply-to: '.$_POST['as5d49asd'].' <'.$_POST['gfkdsjcnbd'].'>');

            if(!wp_mail("natalia@tapronto.com.br","Nova mensagem recebida pelo site",$txt,$headers)) {
                $resposta["resposta"] = "Não foi possível enviar sua mensagem. Por favor tente mais tarde ou entre em contato através de nosso e-mail ou telefone.";
                $resposta["status"] = 0;
            } else {
                $resposta["resposta"] = "Sua mensagem foi enviada com sucesso! Obrigado.";
                $resposta["status"] = 1;
            }
        }else{
            $resposta["resposta"] = "Ocorreram erros de validação. Por favor confira os seguintes campos: ".implode(", ", $erros);
            $resposta["status"] = 0;
        }
        return $resposta;
    }else{
        return false;
    }
}
$respostaform = enviaForm();


