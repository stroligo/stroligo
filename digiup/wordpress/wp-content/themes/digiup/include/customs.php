<?php

/* Clear default post types */
	add_action( 'init', 'removePostTypeSupports', 10 );
	function removePostTypeSupports() {
		remove_post_type_support("post",'editor');
		remove_post_type_support("post",'author');
		remove_post_type_support("post",'thumbnail');
		remove_post_type_support("post",'excerpt');
		remove_post_type_support("post",'trackbacks');
		remove_post_type_support("post",'custom-fields');
		remove_post_type_support("post",'comments');
		remove_post_type_support("post",'revisions');
		remove_post_type_support("post",'page-attributes');
		remove_post_type_support("post",'post-formats');

		remove_post_type_support("page",'editor');
		remove_post_type_support("page",'author');
		remove_post_type_support("page",'thumbnail');
		remove_post_type_support("page",'excerpt');
		remove_post_type_support("page",'trackbacks');
		remove_post_type_support("page",'custom-fields');
		remove_post_type_support("page",'comments');
		remove_post_type_support("page",'revisions');
		remove_post_type_support("page",'page-attributes');
		remove_post_type_support("page",'post-formats');
	}

/* PostTypes */
add_action( 'init', 'registerPostypes', 1 );
function registerPostypes() {
	register_post_type( "narrativas", array(
		"labels" => array( "name"=>"Narrativas", "singular_name" => "Narrativa"),
		"public" => true,
		"has_archive" => false,
		"supports" => array("title"),
		"rewrite" =>  array("slug"=>"narrativas")
	));
	register_post_type( "perguntas", array(
		"labels" => array( "name"=>"Perguntas", "singular_name" => "Pergunta"),
		"public" => true,
		"has_archive" => false,
		"supports" => array("title"),
		"rewrite" =>  array("slug"=>"perguntas")
	));
	register_post_type( "especialistas", array(
		"labels" => array( "name"=>"Especialistas", "singular_name" => "Especialista"),
		"public" => true,
		"has_archive" => false,
		"supports" => array("title"),
		"rewrite" =>  array("slug"=>"especialistas")
	));
}

/* Taxonomies */
add_action( 'init', 'registerTaxonomies', 1 );
function registerTaxonomies() {
	register_taxonomy( "tipo-pergunta", 
	array( "perguntas" ), 
		array(
			"labels" => array("name" => 'Tipo de pergunta'),
			"hierarchical" => true,
			"show_admin_column" => true,
		)
	);
}