<!-- Funçoes gerais wordpress -->
<?php 
    define("HOME", str_replace("\\",'/',(isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http")."://".$_SERVER['HTTP_HOST'].substr(getcwd(),strlen($_SERVER['DOCUMENT_ROOT']))));
    define("MAINFILE", isset($_GET['pgfile']) && $_GET['pgfile'] ? strtolower($_GET['pgfile']):"home");
    
    // Globals
    global $current_page;

    function home_url($s=""){ 
        return HOME.'/'.$s;
    }
    function tu($e=true){ 
        if($e) echo HOME;
        return HOME;
    }
    function currentURL(){
        return (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://{$_SERVER['HTTP_HOST']}{$_SERVER['REQUEST_URI']}";
    }

    function cleanName($s){
        $s = strtr(utf8_decode($s), utf8_decode('àáâãäçèéêëìíîïñòóôõöùúûüýÿšÀÁÂÃÄÇÈÉÊËÌÍÎÏÑÒÓÔÕÖÙÚÛÜÝŠ'), 'aaaaaceeeeiiiinooooouuuuyysAAAAACEEEEIIIINOOOOOUUUUYS');
        $s = str_replace("'", '_', $s);
        $s = preg_replace("/[^A-Za-z \_\-]/", "", strtolower($s));
        $s = preg_replace("/\s+/", "_", $s);
        $s = preg_replace("/-+/", "-", $s);
        return $s;
    }
    function get_template_part($slug,$name=null,$args=array()){
        global $current_page;
        include "{$slug}.php";
    }
    function wp_redirect($s=""){
        header("Location: ".HOME.'/'.$s); exit;
    }
    function wp_footer(){}
    function wp_head(){}
    function get_header(){
        global $current_page;
        include_once 'header.php';
    }
    function get_footer(){
        global $current_page;
        include_once 'footer.php';
    }

    $current_page = isset($current_page) ? $current_page : MAINFILE;

    if(!session_id()) {
        session_start();
    }

    /* Função busca SVG */
    function svg($icon,$w,$h,$class){
        if($icon != ""){ 
            echo '<svg '.( $w ? 'width="'.$w.'"' : '' ).( $h ? 'height="'.$h.'"' : '' ).( $class ? 'class="'.$class.'"' : '' ).' ><use  xlink:href="#'.$icon.'" /></svg>';
        ;}
    }