<?php 

if( function_exists('acf_add_options_page') ) {
    acf_add_options_page(array(
        'page_title'    => 'Footer',
        'menu_title'    => 'Footer',
        'menu_slug'     => 'footer',
        'capability'    => 'edit_posts',
        'redirect'      => false,
        'position'      => 50,
    ));
}

if( function_exists('acf_add_local_field_group') ):

    /* Home */
    acf_add_local_field_group(array(
        'key' => 'home',
        'title' => 'Home',
        'style' => 'seamless',
        'menu_order' => 1,
        'fields' => array(
        
            array ('key' => 'home_acc_1', 'label' => 'Hero', 'type' => 'accordion', 'name' => 'home_acc_1'),
            array ('key' => 'home_hero_rep', 'label' => 'Adicionar slide', 'type' => 'repeater', 'name' => 'home_hero_rep', 'layout'=>'block', 'sub_fields'=>array(
                array ('key' => 'home_hero_narrativa', 'label' => 'Narrativa', 'type' => 'post_object', 'name' => 'home_hero_narrativa', 'post_type' => 'narrativas','wrapper'=>array('width'=>'50%')),
                array ('key' => 'home_hero_titulo', 'label' => 'Título', 'type' => 'text', 'name' => 'home_hero_titulo','wrapper'=>array('width'=>'50%')),
                array ('key' => 'home_hero_texto', 'label' => 'Texto', 'type' => 'textarea', 'name' => 'home_hero_texto', 'rows' => 2),
            )),

            array ('key' => 'home_acc_2', 'label' => 'Perguntas', 'type' => 'accordion', 'name' => 'home_acc_2'),
            array ('key' => 'home_perguntas_titulo', 'label' => 'Título', 'type' => 'text', 'name' => 'home_perguntas_titulo'),
            array ('key' => 'home_perguntas_texto', 'label' => 'Texto', 'type' => 'textarea', 'name' => 'home_perguntas_texto', 'rows' => 2),
            
            array ('key' => 'home_acc_3', 'label' => 'Narrativas', 'type' => 'accordion', 'name' => 'home_acc_3'),
            array ('key' => 'home_narrativas_titulo', 'label' => 'Título', 'type' => 'text', 'name' => 'home_narrativas_titulo'),
            array ('key' => 'home_narrativas_texto', 'label' => 'Texto', 'type' => 'textarea', 'name' => 'home_narrativas_texto', 'rows' => 2),
        ),
        'location' => array(
            array(array('param'=>'page_template','operator'=>'==','value'=>'template-home.php')),
        ),
    ));

    /* Perguntas */

    acf_add_local_field_group(array(
        'key' => 'perguntas',
        'title' => 'Informações pergunta',
        'style' => 'seamless',
        'menu_order' => 1,
        'fields' => array(

            array ('key' => 'pergunta_acc_0', 'label' => 'Informações tooltip', 'type' => 'accordion', 'name' => 'pergunta_acc_0'),
            array ('key' => 'pergunta_tooltip_pesquisa', 'label' => 'Nome da pesquisa', 'type' => 'text', 'name' => 'pergunta_tooltip_pesquisa'),
            array ('key' => 'pergunta_tooltip_numero_pergunta', 'label' => 'Número da pergunta', 'type' => 'text', 'name' => 'pergunta_tooltip_numero_pergunta'),
            array ('key' => 'pergunta_tooltip_pergunta', 'label' => 'Pergunta', 'type' => 'text', 'name' => 'pergunta_tooltip_pergunta'),

            array ('key' => 'pergunta_acc_1', 'label' => 'Análise do especialista', 'type' => 'accordion', 'name' => 'pergunta_acc_1'),
            array ('key' => 'especialista', 'label' => 'Especialista', 'type' => 'post_object', 'name' => 'especialista', 'post_type' => 'especialistas', 'allow_null' => 1,),
            array ('key' => 'especialista_texto', 'label' => 'Texto - Introdução', 'type' => 'textarea', 'name' => 'especialista_texto', 'maxlength' => '420', 'instructions' => 'Limite de caracteres: 420'),
            array ('key' => 'especialista_texto_leiamais', 'label' => 'Texto - Leia mais', 'type' => 'textarea', 'name' => 'especialista_texto_leiamais'),

            array ('key' => 'pergunta_acc_2', 'label' => 'Conteúdo', 'type' => 'accordion', 'name' => 'pergunta_acc_2'),
            array (
				'key' => 'conteudo_single', 'label' => 'Conteúdo', 'name' => 'conteudo_single', 'type' => 'flexible_content', 'button_label'=>'Adicionar bloco',
				'layouts' => array(
                    'embed' => array(
						'key' => 'embed',
						'name' => 'embed',
						'label' => 'Embed',
						'display' => 'block',
						'sub_fields' => array(
                            array ('key' => 'embed_single_titulo', 'label' => 'Título', 'type' => 'text', 'name' => 'embed_single_titulo'),
							array ('key' => 'embed_single', 'label' => 'Link', 'type' => 'textarea', 'row'=>2, 'name' => 'embed_single'),
                        ),
					),
                    'multi_embed' => array(
						'key' => 'multi_embed',
						'name' => 'multi_embed',
						'label' => 'Embed - Múltiplo',
						'display' => 'block',
						'sub_fields' => array(
                            array ('key' => 'multi_embed_single_titulo', 'label' => 'Título', 'type' => 'text', 'name' => 'multi_embed_single_titulo'),
                            array ('key' => 'multi_embed_rep', 'label' => 'Adicionar Embed', 'type' => 'repeater', 'name' => 'multi_embed_rep', 'layout'=>'block', 'sub_fields'=>array(
                                array ('key' => 'multi_embed_single_tab', 'label' => 'Texto Tab', 'type' => 'text', 'name' => 'multi_embed_single_tab'),
                                array ('key' => 'multi_embed_single', 'label' => 'Link', 'type' => 'textarea', 'row'=>2, 'name' => 'multi_embed_single'),
                            )),
                        ),
					),
				),
			),

            array ('key' => 'pergunta_acc_3', 'label' => 'Fonte de dados e link externo', 'type' => 'accordion', 'name' => 'pergunta_acc_3'),
            array ('key' => 'pergunta_fonte', 'label' => 'Fonte de dados', 'type' => 'text', 'name' => 'pergunta_fonte'),
            array ('key' => 'pergunta_btn_text', 'label' => 'Texto do botão', 'type' => 'text', 'name' => 'pergunta_btn_text','wrapper'=>array('width'=>'50%')),
            array ('key' => 'pergunta_btn_link', 'label' => 'Link do botão', 'type' => 'url', 'name' => 'pergunta_btn_link','wrapper'=>array('width'=>'50%')),

            // array ('key' => 'pergunta_acc_4', 'label' => 'Narrativa relacionada', 'type' => 'accordion', 'name' => 'pergunta_acc_4'),
            // array ('key' => 'narrativa_rel', 'label' => 'Narrativa relacionada', 'type' => 'relationship', 'name' => 'narrativa_rel', 'post_type' => array('narrativas'), 'return_format' => 'id', 'filters' => ''),

        ),
        'location' => array(
            array(array('param'=>'post_type','operator'=>'==','value'=>'perguntas')),
        ),
    ));

    /* Narrativas */

    acf_add_local_field_group(array(
        'key' => 'narrativas',
        'title' => 'Informações narrativa',
        'style' => 'seamless',
        'menu_order' => 1,
        'fields' => array(
            array ('key' => 'narrativa_acc_1', 'label' => 'Informações gerais - card e hero', 'type' => 'accordion', 'name' => 'narrativa_acc_1'),
            array ('key' => 'narrativa_img', 'label' => 'Imagem de capa', 'type' => 'image', 'name' => 'narrativa_img', 'return_format'=>'array', 'min_height' => 600, 'min_width' => 600, 'instructions' => 'Tamanho mínimo: 600x600px'),
            array ('key' => 'narrativa_texto_card', 'label' => 'Texto card', 'type' => 'textarea', 'name' => 'narrativa_texto_card', 'rows' => 2),
            array ('key' => 'narrativa_texto_intro', 'label' => 'Texto introdutório', 'type' => 'wysiwyg', 'name' => 'narrativa_texto_intro','wrapper'=>array('class'=> 'text-xlarge')),
            array ('key' => 'narrativa_texto_big_numbers', 'label' => 'Texto após big numbers', 'type' => 'wysiwyg', 'name' => 'narrativa_texto_big_numbers'),

            // TODO: implementar em todas as narrativas //
            array ('key' => 'narrativa_acc_2', 'label' => 'Big numbers', 'type' => 'accordion', 'name' => 'narrativa_acc_2'),
            array ('key' => 'narrativa_big_numbers_texto_before_1', 'label' => '1) Texto antes do número', 'type' => 'text', 'name' => 'narrativa_big_numbers_texto_before_1','wrapper'=>array('width'=>'33%')),
            array ('key' => 'narrativa_big_numbers_texto_1', 'label' => 'Número', 'type' => 'text', 'name' => 'narrativa_big_numbers_texto_1','wrapper'=>array('width'=>'33%')),
            array ('key' => 'narrativa_big_numbers_texto_after_1', 'label' => 'Texto após o número', 'type' => 'text', 'name' => 'narrativa_big_numbers_texto_after_1','wrapper'=>array('width'=>'33%')),
            
            array ('key' => 'narrativa_big_numbers_texto_before_2', 'label' => '2) Texto antes do número', 'type' => 'text', 'name' => 'narrativa_big_numbers_texto_before_2','wrapper'=>array('width'=>'33%')),
            array ('key' => 'narrativa_big_numbers_texto_2', 'label' => 'Número', 'type' => 'text', 'name' => 'narrativa_big_numbers_texto_2','wrapper'=>array('width'=>'33%')),
            array ('key' => 'narrativa_big_numbers_texto_after_2', 'label' => 'Texto após o número', 'type' => 'text', 'name' => 'narrativa_big_numbers_texto_after_2','wrapper'=>array('width'=>'33%')),
            
            array ('key' => 'narrativa_big_numbers_texto_before_3', 'label' => '3) Texto antes do número', 'type' => 'text', 'name' => 'narrativa_big_numbers_texto_before_3','wrapper'=>array('width'=>'33%')),
            array ('key' => 'narrativa_big_numbers_texto_3', 'label' => 'Número', 'type' => 'text', 'name' => 'narrativa_big_numbers_texto_3','wrapper'=>array('width'=>'33%')),
            array ('key' => 'narrativa_big_numbers_texto_after_3', 'label' => 'Texto após o número', 'type' => 'text', 'name' => 'narrativa_big_numbers_texto_after_3','wrapper'=>array('width'=>'33%')),
            
            array ('key' => 'narrativa_big_numbers_texto_before_4', 'label' => '4) Texto antes do número', 'type' => 'text', 'name' => 'narrativa_big_numbers_texto_before_4','wrapper'=>array('width'=>'33%')),
            array ('key' => 'narrativa_big_numbers_texto_4', 'label' => 'Número', 'type' => 'text', 'name' => 'narrativa_big_numbers_texto_4','wrapper'=>array('width'=>'33%')),
            array ('key' => 'narrativa_big_numbers_texto_after_4', 'label' => 'Texto após o número', 'type' => 'text', 'name' => 'narrativa_big_numbers_texto_after_4','wrapper'=>array('width'=>'33%')),
            //
        ),
        'location' => array(
            array(array('param'=>'post_type','operator'=>'==','value'=>'narrativas')),
        ),
    ));

    /* Narrativa MEI */

    acf_add_local_field_group(array(
        'key' => 'narrativa_mei',
        'title' => 'Informações narrativa',
        'style' => 'seamless',
        'menu_order' => 1,
        'fields' => array(
            array ('key' => 'narrativa_mei_acc_grafico_1', 'label' => 'Gráfico trabalhadores', 'type' => 'accordion', 'name' => 'narrativa_mei_acc_grafico_1'),
            array ('key' => 'narrativa_mei_grafico_1_titulo', 'label' => 'Título', 'type' => 'text', 'name' => 'narrativa_mei_grafico_1_titulo'),
            array ('key' => 'narrativa_mei_grafico_1_texto', 'label' => 'Descrição', 'type' => 'wysiwyg', 'name' => 'narrativa_mei_grafico_1_texto'),
            array ('key' => 'narrativa_mei_grafico_1_csv_rep', 'label' => 'Dados', 'type' => 'repeater', 'name' => 'csv_rep_1', 'layout'=>'block', 'sub_fields'=>array(
                array ('key' => 'narrativa_mei_grafico_1_csv', 'label' => 'Arquivo CSV', 'type' => 'file', 'name' => 'csv'),
            )),
            array ('key' => 'narrativa_mei_grafico_1_fonte', 'label' => 'Fonte', 'type' => 'text', 'name' => 'narrativa_mei_grafico_1_fonte'),

            array ('key' => 'narrativa_mei_acc_grafico_2', 'label' => 'Gráfico formalização', 'type' => 'accordion', 'name' => 'narrativa_mei_acc_grafico_2'),
            array ('key' => 'narrativa_mei_grafico_2_titulo', 'label' => 'Título', 'type' => 'text', 'name' => 'narrativa_mei_grafico_2_titulo'),
            array ('key' => 'narrativa_mei_grafico_2_texto', 'label' => 'Descrição', 'type' => 'wysiwyg', 'name' => 'narrativa_mei_grafico_2_texto'),
            array ('key' => 'narrativa_mei_grafico_2_csv_rep', 'label' => 'Dados', 'type' => 'repeater', 'name' => 'csv_rep_2', 'layout'=>'block', 'sub_fields'=>array(
                array ('key' => 'narrativa_mei_grafico_2_csv', 'label' => 'Arquivo CSV', 'type' => 'file', 'name' => 'csv'),
            )),
            array ('key' => 'narrativa_mei_grafico_2_fonte', 'label' => 'Fonte', 'type' => 'text', 'name' => 'narrativa_mei_grafico_2_fonte'),

            array ('key' => 'narrativa_mei_acc_grafico_3', 'label' => 'Gráfico horas trabalhadas', 'type' => 'accordion', 'name' => 'narrativa_mei_acc_grafico_3'),
            array ('key' => 'narrativa_mei_grafico_3_titulo', 'label' => 'Título', 'type' => 'text', 'name' => 'narrativa_mei_grafico_3_titulo'),
            array ('key' => 'narrativa_mei_grafico_3_texto', 'label' => 'Descrição', 'type' => 'wysiwyg', 'name' => 'narrativa_mei_grafico_3_texto'),
            array ('key' => 'narrativa_mei_grafico_3_csv_rep', 'label' => 'Dados', 'type' => 'repeater', 'name' => 'csv_rep_3', 'layout'=>'block', 'sub_fields'=>array(
                array ('key' => 'narrativa_mei_grafico_3_csv', 'label' => 'Arquivo CSV', 'type' => 'file', 'name' => 'csv'),
            )),
            array ('key' => 'narrativa_mei_grafico_3_fonte', 'label' => 'Fonte', 'type' => 'text', 'name' => 'narrativa_mei_grafico_3_fonte'),

            array ('key' => 'narrativa_mei_acc_grafico_4', 'label' => 'Gráfico renda média', 'type' => 'accordion', 'name' => 'narrativa_mei_acc_grafico_4'),
            array ('key' => 'narrativa_mei_grafico_4_titulo', 'label' => 'Título', 'type' => 'text', 'name' => 'narrativa_mei_grafico_4_titulo'),
            array ('key' => 'narrativa_mei_grafico_4_texto', 'label' => 'Descrição', 'type' => 'wysiwyg', 'name' => 'narrativa_mei_grafico_4_texto'),
            array ('key' => 'narrativa_mei_grafico_4_csv_rep', 'label' => 'Dados', 'type' => 'repeater', 'name' => 'csv_rep_4', 'layout'=>'block', 'sub_fields'=>array(
                array ('key' => 'narrativa_mei_grafico_4_csv', 'label' => 'Arquivo CSV', 'type' => 'file', 'name' => 'csv'),
            )),
            array ('key' => 'narrativa_mei_grafico_4_fonte', 'label' => 'Fonte', 'type' => 'text', 'name' => 'narrativa_mei_grafico_4_fonte'),

            array ('key' => 'narrativa_mei_acc_1', 'label' => 'Dinâmica regional', 'type' => 'accordion', 'name' => 'narrativa_mei_acc_1'),
            array ('key' => 'narrativa_mei_texto_intro_1', 'label' => 'Texto introdutório', 'type' => 'wysiwyg', 'name' => 'narrativa_mei_texto_intro_1'),
            array ('key' => 'narrativa_mei_grafico_mapa_csv_rep', 'label' => 'Dados', 'type' => 'repeater', 'name' => 'csv_rep_mapa', 'layout'=>'block', 'sub_fields'=>array(
                array ('key' => 'narrativa_mei_grafico_mapa_csv', 'label' => 'Arquivo CSV', 'type' => 'file', 'name' => 'csv'),
            )),
            array ('key' => 'narrativa_mei_grafico_mapa_1_fonte', 'label' => 'Fonte - Renda Média', 'type' => 'text', 'name' => 'narrativa_mei_grafico_mapa_1_fonte'),
            array ('key' => 'narrativa_mei_grafico_mapa_2_fonte', 'label' => 'Fonte - Horas Trabalhadas', 'type' => 'text', 'name' => 'narrativa_mei_grafico_mapa_2_fonte'),
            array ('key' => 'narrativa_mei_grafico_mapa_3_fonte', 'label' => 'Fonte - Trabalhadores', 'type' => 'text', 'name' => 'narrativa_mei_grafico_mapa_3_fonte'),

            array ('key' => 'narrativa_mei_acc_2', 'label' => 'Diversidade de perfis', 'type' => 'accordion', 'name' => 'narrativa_mei_acc_2'),
            array ('key' => 'narrativa_mei_texto_intro_2', 'label' => 'Texto introdutório', 'type' => 'wysiwyg', 'name' => 'narrativa_mei_texto_intro_2'),
            array ('key' => 'narrativa_mei_diversidade_card_1', 'label' => 'Link Card 1', 'type' => 'link', 'name' => 'narrativa_mei_diversidade_card_1'),
            array ('key' => 'narrativa_mei_diversidade_card_2', 'label' => 'Link Card 2', 'type' => 'link', 'name' => 'narrativa_mei_diversidade_card_2'),
            array ('key' => 'narrativa_mei_diversidade_card_3', 'label' => 'Link Card 3', 'type' => 'link', 'name' => 'narrativa_mei_diversidade_card_3'),
            array ('key' => 'narrativa_mei_diversidade_card_4', 'label' => 'Link Card 4', 'type' => 'link', 'name' => 'narrativa_mei_diversidade_card_4'),
            array ('key' => 'narrativa_mei_diversidade_card_5', 'label' => 'Link Card 5', 'type' => 'link', 'name' => 'narrativa_mei_diversidade_card_5'),
        ),
        'location' => array(
            array(array('param'=>'page_template','operator'=>'==','value'=>'template-mei.php')),
        ),
    ));

    /* Narrativa MPE */

    acf_add_local_field_group(array(
        'key' => 'narrativa_mpe',
        'title' => 'Informações narrativa',
        'style' => 'seamless',
        'menu_order' => 1,
        'fields' => array(

            array ('key' => 'narrativa_mpe_acc_grafico_1', 'label' => 'Gráfico PIB', 'type' => 'accordion', 'name' => 'narrativa_mpe_acc_grafico_1'),
            array ('key' => 'narrativa_mpe_grafico_1_titulo', 'label' => 'Título', 'type' => 'text', 'name' => 'narrativa_mpe_grafico_1_titulo'),
            array ('key' => 'narrativa_mpe_grafico_1_texto', 'label' => 'Descrição', 'type' => 'wysiwyg', 'name' => 'narrativa_mpe_grafico_1_texto'),
            array ('key' => 'narrativa_mpe_grafico_1_csv_rep', 'label' => 'Dados', 'type' => 'repeater', 'name' => 'csv_rep_1', 'layout'=>'block', 'sub_fields'=>array(
                array ('key' => 'narrativa_mpe_grafico_1_csv', 'label' => 'Arquivo CSV', 'type' => 'file', 'name' => 'csv'),
            )),
            array ('key' => 'narrativa_mpe_grafico_1_fonte', 'label' => 'Fonte', 'type' => 'text', 'name' => 'narrativa_mpe_grafico_1_fonte'),

            array ('key' => 'narrativa_mpe_acc_grafico_2', 'label' => 'Gráfico empregos', 'type' => 'accordion', 'name' => 'narrativa_mpe_acc_grafico_2'),
            array ('key' => 'narrativa_mpe_grafico_2_titulo', 'label' => 'Título', 'type' => 'text', 'name' => 'narrativa_mpe_grafico_2_titulo'),
            array ('key' => 'narrativa_mpe_grafico_2_texto', 'label' => 'Descrição', 'type' => 'wysiwyg', 'name' => 'narrativa_mpe_grafico_2_texto'),
            array ('key' => 'narrativa_mpe_grafico_2_csv_rep', 'label' => 'Dados', 'type' => 'repeater', 'name' => 'csv_rep_2', 'layout'=>'block', 'sub_fields'=>array(
                array ('key' => 'narrativa_mpe_grafico_2_csv', 'label' => 'Arquivo CSV', 'type' => 'file', 'name' => 'csv'),
            )),
            array ('key' => 'narrativa_mpe_grafico_2_fonte', 'label' => 'Fonte', 'type' => 'text', 'name' => 'narrativa_mpe_grafico_2_fonte'),

            array ('key' => 'narrativa_mpe_acc_grafico_3', 'label' => 'Gráfico massa salarial', 'type' => 'accordion', 'name' => 'narrativa_mpe_acc_grafico_3'),
            array ('key' => 'narrativa_mpe_grafico_3_titulo', 'label' => 'Título', 'type' => 'text', 'name' => 'narrativa_mpe_grafico_3_titulo'),
            array ('key' => 'narrativa_mpe_grafico_3_texto', 'label' => 'Descrição', 'type' => 'wysiwyg', 'name' => 'narrativa_mpe_grafico_3_texto'),
            array ('key' => 'narrativa_mpe_grafico_3_csv_rep', 'label' => 'Dados', 'type' => 'repeater', 'name' => 'csv_rep_3', 'layout'=>'block', 'sub_fields'=>array(
                array ('key' => 'narrativa_mpe_grafico_3_csv', 'label' => 'Arquivo CSV', 'type' => 'file', 'name' => 'csv'),
            )),
            array ('key' => 'narrativa_mpe_grafico_3_fonte', 'label' => 'Fonte', 'type' => 'text', 'name' => 'narrativa_mpe_grafico_3_fonte'),

            // array ('key' => 'narrativa_mpe_acc_grafico_4', 'label' => 'Gráfico renda', 'type' => 'accordion', 'name' => 'narrativa_mpe_acc_grafico_4'),
            // array ('key' => 'narrativa_mpe_grafico_4_titulo', 'label' => 'Título', 'type' => 'text', 'name' => 'narrativa_mpe_grafico_4_titulo'),
            // array ('key' => 'narrativa_mpe_grafico_4_texto', 'label' => 'Descrição', 'type' => 'wysiwyg', 'name' => 'narrativa_mpe_grafico_4_texto'),

            array ('key' => 'narrativa_mpe_acc_1', 'label' => 'Dinâmica regional', 'type' => 'accordion', 'name' => 'narrativa_mpe_acc_1'),
            array ('key' => 'narrativa_mpe_texto_intro_1', 'label' => 'Texto introdutório', 'type' => 'wysiwyg', 'name' => 'narrativa_mpe_texto_intro_1'),
            array ('key' => 'narrativa_mpe_grafico_mapa_csv_rep', 'label' => 'Dados', 'type' => 'repeater', 'name' => 'csv_rep_mapa', 'layout'=>'block', 'sub_fields'=>array(
                array ('key' => 'narrativa_mpe_grafico_mapa_csv', 'label' => 'Arquivo CSV', 'type' => 'file', 'name' => 'csv'),
            )),
            array ('key' => 'narrativa_mpe_grafico_mapa_1_fonte', 'label' => 'Fonte - PIB', 'type' => 'text', 'name' => 'narrativa_mpe_grafico_mapa_1_fonte'),
            array ('key' => 'narrativa_mpe_grafico_mapa_2_fonte', 'label' => 'Fonte - Empregos', 'type' => 'text', 'name' => 'narrativa_mpe_grafico_mapa_2_fonte'),
            array ('key' => 'narrativa_mpe_grafico_mapa_3_fonte', 'label' => 'Fonte - Massa Salarial', 'type' => 'text', 'name' => 'narrativa_mpe_grafico_mapa_3_fonte'),

            array ('key' => 'narrativa_mpe_acc_2', 'label' => 'Confiança na economia e no negócio', 'type' => 'accordion', 'name' => 'narrativa_mpe_acc_2'),
            
            array ('key' => 'narrativa_mpe_texto_intro_2', 'label' => 'Texto introdutório', 'type' => 'wysiwyg', 'name' => 'narrativa_mpe_texto_intro_2'),
            array ('key' => 'narrativa_mpe_grafico_5_titulo', 'label' => 'Primeiro gráfico - Título', 'type' => 'text', 'name' => 'narrativa_mpe_grafico_5_titulo'),
            array ('key' => 'narrativa_mpe_grafico_5_texto', 'label' => 'Primeiro gráfico - Texto lateral', 'type' => 'wysiwyg', 'name' => 'narrativa_mpe_grafico_5_texto'),
            array ('key' => 'narrativa_mpe_grafico_5_csv_rep', 'label' => 'Dados', 'type' => 'repeater', 'name' => 'csv_rep_5', 'layout'=>'block', 'sub_fields'=>array(
                array ('key' => 'narrativa_mpe_grafico_5_csv', 'label' => 'Arquivo CSV', 'type' => 'file', 'name' => 'csv'),
            )),
            array ('key' => 'narrativa_mpe_grafico_5_fonte', 'label' => 'Fonte', 'type' => 'text', 'name' => 'narrativa_mpe_grafico_5_fonte'),

            array ('key' => 'narrativa_mpe_grafico_6_titulo', 'label' => 'Segundo gráfico - Título', 'type' => 'text', 'name' => 'narrativa_mpe_grafico_6_titulo'),
            array ('key' => 'narrativa_mpe_grafico_6_texto', 'label' => 'Segundo gráfico - Texto lateral', 'type' => 'wysiwyg', 'name' => 'narrativa_mpe_grafico_6_texto'),
            array ('key' => 'narrativa_mpe_grafico_6_csv_rep', 'label' => 'Dados', 'type' => 'repeater', 'name' => 'csv_rep_6', 'layout'=>'block', 'sub_fields'=>array(
                array ('key' => 'narrativa_mpe_grafico_6_csv', 'label' => 'Arquivo CSV', 'type' => 'file', 'name' => 'csv'),
            )),
            array ('key' => 'narrativa_mpe_grafico_6_fonte', 'label' => 'Fonte', 'type' => 'text', 'name' => 'narrativa_mpe_grafico_6_fonte'),

            array ('key' => 'narrativa_mpe_acc_3', 'label' => 'Diversidade de perfis', 'type' => 'accordion', 'name' => 'narrativa_mpe_acc_3'),
            array ('key' => 'narrativa_mpe_texto_intro_3', 'label' => 'Texto introdutório', 'type' => 'wysiwyg', 'name' => 'narrativa_mpe_texto_intro_3'),
            array ('key' => 'narrativa_mpe_diversidade_card_1', 'label' => 'Link Card 1', 'type' => 'link', 'name' => 'narrativa_mpe_diversidade_card_1'),
            array ('key' => 'narrativa_mpe_diversidade_card_2', 'label' => 'Link Card 2', 'type' => 'link', 'name' => 'narrativa_mpe_diversidade_card_2'),
            array ('key' => 'narrativa_mpe_diversidade_card_3', 'label' => 'Link Card 3', 'type' => 'link', 'name' => 'narrativa_mpe_diversidade_card_3'),
            array ('key' => 'narrativa_mpe_diversidade_card_4', 'label' => 'Link Card 4', 'type' => 'link', 'name' => 'narrativa_mpe_diversidade_card_4'),
            array ('key' => 'narrativa_mpe_diversidade_card_5', 'label' => 'Link Card 5', 'type' => 'link', 'name' => 'narrativa_mpe_diversidade_card_5'),
            
        ),
        'location' => array(
            array(array('param'=>'page_template','operator'=>'==','value'=>'template-mpe.php')),
        ),
    ));

    /* Narrativa Crédito */

    acf_add_local_field_group(array(
        'key' => 'narrativa_credito',
        'title' => 'Informações narrativa',
        'style' => 'seamless',
        'menu_order' => 1,
        'fields' => array(

            array ('key' => 'narrativa_credito_acc_grafico_1', 'label' => 'Gráfico saldo e concessão', 'type' => 'accordion', 'name' => 'narrativa_credito_acc_grafico_1'),
            array ('key' => 'narrativa_credito_grafico_1_titulo', 'label' => 'Título', 'type' => 'text', 'name' => 'narrativa_credito_grafico_1_titulo'),
            array ('key' => 'narrativa_credito_grafico_1_texto', 'label' => 'Descrição', 'type' => 'wysiwyg', 'name' => 'narrativa_credito_grafico_1_texto'),
            array ('key' => 'narrativa_credito_grafico_1_csv_rep', 'label' => 'Dados', 'type' => 'repeater', 'name' => 'csv_rep_1', 'layout'=>'block', 'sub_fields'=>array(
                array ('key' => 'narrativa_credito_grafico_1_csv', 'label' => 'Arquivo CSV', 'type' => 'file', 'name' => 'csv'),
            )),
            array ('key' => 'narrativa_credito_grafico_1_fonte', 'label' => 'Fonte', 'type' => 'text', 'name' => 'narrativa_credito_grafico_1_fonte'),

            array ('key' => 'narrativa_credito_acc_grafico_2', 'label' => 'Gráfico aumento do crédito', 'type' => 'accordion', 'name' => 'narrativa_credito_acc_grafico_2'),
            array ('key' => 'narrativa_credito_grafico_2_titulo', 'label' => 'Título', 'type' => 'text', 'name' => 'narrativa_credito_grafico_2_titulo'),
            array ('key' => 'narrativa_credito_grafico_2_texto', 'label' => 'Descrição', 'type' => 'wysiwyg', 'name' => 'narrativa_credito_grafico_2_texto'),
            array ('key' => 'narrativa_credito_grafico_2_csv_rep', 'label' => 'Dados', 'type' => 'repeater', 'name' => 'csv_rep_2', 'layout'=>'block', 'sub_fields'=>array(
                array ('key' => 'narrativa_credito_grafico_2_csv', 'label' => 'Arquivo CSV', 'type' => 'file', 'name' => 'csv'),
            )),
            array ('key' => 'narrativa_credito_grafico_2_fonte', 'label' => 'Fonte', 'type' => 'text', 'name' => 'narrativa_credito_grafico_2_fonte'),

            array ('key' => 'narrativa_credito_acc_grafico_3', 'label' => 'Gráfico MPEs vs demais empresas', 'type' => 'accordion', 'name' => 'narrativa_credito_acc_grafico_3'),
            array ('key' => 'narrativa_credito_grafico_3_titulo', 'label' => 'Título', 'type' => 'text', 'name' => 'narrativa_credito_grafico_3_titulo'),
            array ('key' => 'narrativa_credito_grafico_3_texto', 'label' => 'Descrição', 'type' => 'wysiwyg', 'name' => 'narrativa_credito_grafico_3_texto'),
            array ('key' => 'narrativa_credito_grafico_3_csv_rep', 'label' => 'Dados', 'type' => 'repeater', 'name' => 'csv_rep_3', 'layout'=>'block', 'sub_fields'=>array(
                array ('key' => 'narrativa_credito_grafico_3_csv', 'label' => 'Arquivo CSV', 'type' => 'file', 'name' => 'csv'),
            )),
            array ('key' => 'narrativa_credito_grafico_3_fonte', 'label' => 'Fonte', 'type' => 'text', 'name' => 'narrativa_credito_grafico_3_fonte'),

            array ('key' => 'narrativa_credito_acc_grafico_4', 'label' => 'Gráfico tomadores e transações', 'type' => 'accordion', 'name' => 'narrativa_credito_acc_grafico_4'),
            array ('key' => 'narrativa_credito_grafico_4_titulo', 'label' => 'Título', 'type' => 'text', 'name' => 'narrativa_credito_grafico_4_titulo'),
            array ('key' => 'narrativa_credito_grafico_4_texto', 'label' => 'Descrição', 'type' => 'wysiwyg', 'name' => 'narrativa_credito_grafico_4_texto'),
            array ('key' => 'narrativa_credito_grafico_4_csv_rep', 'label' => 'Dados', 'type' => 'repeater', 'name' => 'csv_rep_4', 'layout'=>'block', 'sub_fields'=>array(
                array ('key' => 'narrativa_credito_grafico_4_csv', 'label' => 'Arquivo CSV', 'type' => 'file', 'name' => 'csv'),
            )),
            array ('key' => 'narrativa_credito_grafico_4_fonte', 'label' => 'Fonte', 'type' => 'text', 'name' => 'narrativa_credito_grafico_4_fonte'),

            array ('key' => 'narrativa_credito_acc_1', 'label' => 'Dinâmica regional', 'type' => 'accordion', 'name' => 'narrativa_credito_acc_1'),
            array ('key' => 'narrativa_credito_texto_intro_1', 'label' => 'Texto introdutório', 'type' => 'wysiwyg', 'name' => 'narrativa_credito_texto_intro_1'),
            array ('key' => 'narrativa_credito_grafico_mapa_csv_rep', 'label' => 'Dados', 'type' => 'repeater', 'name' => 'csv_rep_mapa', 'layout'=>'block', 'sub_fields'=>array(
                array ('key' => 'narrativa_credito_grafico_mapa_csv', 'label' => 'Arquivo CSV', 'type' => 'file', 'name' => 'csv'),
            )),
            array ('key' => 'narrativa_credito_grafico_mapa_fonte', 'label' => 'Fonte', 'type' => 'text', 'name' => 'narrativa_credito_grafico_mapa_fonte'),

            array ('key' => 'narrativa_credito_acc_2', 'label' => 'Juros e inadimplência', 'type' => 'accordion', 'name' => 'narrativa_credito_acc_2'),
            array ('key' => 'narrativa_credito_texto_intro_2', 'label' => 'Texto introdutório', 'type' => 'wysiwyg', 'name' => 'narrativa_credito_texto_intro_2'),
            
            array ('key' => 'narrativa_credito_grafico_5_titulo', 'label' => 'Primeiro gráfico - Título', 'type' => 'text', 'name' => 'narrativa_credito_grafico_5_titulo'),
            array ('key' => 'narrativa_credito_grafico_5_texto', 'label' => 'Primeiro gráfico - Texto lateral', 'type' => 'wysiwyg', 'name' => 'narrativa_credito_grafico_5_texto'),
            array ('key' => 'narrativa_credito_grafico_5_csv_rep', 'label' => 'Dados', 'type' => 'repeater', 'name' => 'csv_rep_5', 'layout'=>'block', 'sub_fields'=>array(
                array ('key' => 'narrativa_credito_grafico_5_csv', 'label' => 'Arquivo CSV', 'type' => 'file', 'name' => 'csv'),
            )),
            array ('key' => 'narrativa_credito_grafico_5_fonte', 'label' => 'Fonte', 'type' => 'text', 'name' => 'narrativa_credito_grafico_5_fonte'),

            array ('key' => 'narrativa_credito_grafico_6_titulo', 'label' => 'Segundo gráfico - Título', 'type' => 'text', 'name' => 'narrativa_credito_grafico_6_titulo'),
            array ('key' => 'narrativa_credito_grafico_6_texto', 'label' => 'Segundo gráfico - Texto lateral', 'type' => 'wysiwyg', 'name' => 'narrativa_credito_grafico_6_texto'),
            array ('key' => 'narrativa_credito_grafico_6_csv_rep', 'label' => 'Dados', 'type' => 'repeater', 'name' => 'csv_rep_6', 'layout'=>'block', 'sub_fields'=>array(
                array ('key' => 'narrativa_credito_grafico_6_csv', 'label' => 'Arquivo CSV', 'type' => 'file', 'name' => 'csv'),
            )),
            array ('key' => 'narrativa_credito_grafico_6_fonte', 'label' => 'Fonte', 'type' => 'text', 'name' => 'narrativa_credito_grafico_6_fonte'),

            array ('key' => 'narrativa_credito_acc_3', 'label' => 'Diversidade de perfis', 'type' => 'accordion', 'name' => 'narrativa_credito_acc_3'),
            array ('key' => 'narrativa_credito_texto_intro_3', 'label' => 'Texto introdutório', 'type' => 'wysiwyg', 'name' => 'narrativa_credito_texto_intro_3'),
            array ('key' => 'narrativa_credito_diversidade_card_1', 'label' => 'Link Card 1', 'type' => 'link', 'name' => 'narrativa_credito_diversidade_card_1'),
            array ('key' => 'narrativa_credito_diversidade_card_2', 'label' => 'Link Card 2', 'type' => 'link', 'name' => 'narrativa_credito_diversidade_card_2'),
            array ('key' => 'narrativa_credito_diversidade_card_3', 'label' => 'Link Card 3', 'type' => 'link', 'name' => 'narrativa_credito_diversidade_card_3'),
            array ('key' => 'narrativa_credito_diversidade_card_4', 'label' => 'Link Card 4', 'type' => 'link', 'name' => 'narrativa_credito_diversidade_card_4'),
            array ('key' => 'narrativa_credito_diversidade_card_5', 'label' => 'Link Card 5', 'type' => 'link', 'name' => 'narrativa_credito_diversidade_card_5'),
            
        ),
        'location' => array(
            array(array('param'=>'page_template','operator'=>'==','value'=>'template-credito.php')),
        ),
    ));

    /* Narrativa Simples */

    acf_add_local_field_group(array(
        'key' => 'narrativa_simples',
        'title' => 'Informações narrativa',
        'style' => 'seamless',
        'menu_order' => 1,
        'fields' => array(

            array ('key' => 'narrativa_simples_acc_grafico_1', 'label' => 'Gráfico empregos', 'type' => 'accordion', 'name' => 'narrativa_simples_acc_grafico_1'),
            array ('key' => 'narrativa_simples_grafico_1_titulo', 'label' => 'Título', 'type' => 'text', 'name' => 'narrativa_simples_grafico_1_titulo'),
            array ('key' => 'narrativa_simples_grafico_1_texto', 'label' => 'Descrição', 'type' => 'wysiwyg', 'name' => 'narrativa_simples_grafico_1_texto'),
            array ('key' => 'narrativa_simples_grafico_1_csv_rep', 'label' => 'Dados', 'type' => 'repeater', 'name' => 'csv_rep_1', 'layout'=>'block', 'sub_fields'=>array(
                array ('key' => 'narrativa_simples_grafico_1_csv', 'label' => 'Arquivo CSV', 'type' => 'file', 'name' => 'csv'),
            )),
            array ('key' => 'narrativa_simples_grafico_1_fonte', 'label' => 'Fonte', 'type' => 'text', 'name' => 'narrativa_simples_grafico_1_fonte'),

            array ('key' => 'narrativa_simples_acc_grafico_2', 'label' => 'Gráfico saldo', 'type' => 'accordion', 'name' => 'narrativa_simples_acc_grafico_2'),
            array ('key' => 'narrativa_simples_grafico_2_titulo', 'label' => 'Título', 'type' => 'text', 'name' => 'narrativa_simples_grafico_2_titulo'),
            array ('key' => 'narrativa_simples_grafico_2_texto', 'label' => 'Descrição', 'type' => 'wysiwyg', 'name' => 'narrativa_simples_grafico_2_texto'),
            array ('key' => 'narrativa_simples_grafico_2_csv_rep', 'label' => 'Dados', 'type' => 'repeater', 'name' => 'csv_rep_2', 'layout'=>'block', 'sub_fields'=>array(
                array ('key' => 'narrativa_simples_grafico_2_csv', 'label' => 'Arquivo CSV', 'type' => 'file', 'name' => 'csv'),
            )),
            array ('key' => 'narrativa_simples_grafico_2_fonte', 'label' => 'Fonte', 'type' => 'text', 'name' => 'narrativa_simples_grafico_2_fonte'),

            array ('key' => 'narrativa_simples_acc_grafico_3', 'label' => 'Gráfico multiplicador', 'type' => 'accordion', 'name' => 'narrativa_simples_acc_grafico_3'),
            array ('key' => 'narrativa_simples_grafico_3_titulo', 'label' => 'Título', 'type' => 'text', 'name' => 'narrativa_simples_grafico_3_titulo'),
            array ('key' => 'narrativa_simples_grafico_3_texto', 'label' => 'Descrição', 'type' => 'wysiwyg', 'name' => 'narrativa_simples_grafico_3_texto'),
            array ('key' => 'narrativa_simples_grafico_3_ano-efeito-multi', 'label' => 'Ano - Efeito Multiplicador', 'type' => 'text', 'name' => 'narrativa_simples_grafico_3_ano-efeito-multi'),
            array ('key' => 'narrativa_simples_grafico_3_rep', 'label' => 'Gráficos', 'type' => 'repeater', 'name' => 'narrativa_simples_grafico_3_rep', 'layout'=>'block', 'sub_fields'=>array(
                array ('key' => 'narrativa_simples_grafico_3_label', 'label' => 'Título', 'type' => 'text', 'name' => 'narrativa_simples_grafico_3_label','wrapper'=>array('width'=>'70%')),
                array ('key' => 'narrativa_simples_grafico_3_numero', 'label' => 'Valor', 'type' => 'number', 'name' => 'narrativa_simples_grafico_3_numero','wrapper'=>array('width'=>'30%')),
            )),
            array ('key' => 'narrativa_simples_grafico_3_fonte', 'label' => 'Fonte', 'type' => 'text', 'name' => 'narrativa_simples_grafico_3_fonte'),

            array ('key' => 'narrativa_simples_acc_grafico_4', 'label' => 'Gráfico massa salarial', 'type' => 'accordion', 'name' => 'narrativa_simples_acc_grafico_4'),
            array ('key' => 'narrativa_simples_grafico_4_titulo', 'label' => 'Título', 'type' => 'text', 'name' => 'narrativa_simples_grafico_4_titulo'),
            array ('key' => 'narrativa_simples_grafico_4_texto', 'label' => 'Descrição', 'type' => 'wysiwyg', 'name' => 'narrativa_simples_grafico_4_texto'),
            array ('key' => 'narrativa_simples_grafico_4_csv_rep', 'label' => 'Dados', 'type' => 'repeater', 'name' => 'csv_rep_4', 'layout'=>'block', 'sub_fields'=>array(
                array ('key' => 'narrativa_simples_grafico_4_csv', 'label' => 'Arquivo CSV', 'type' => 'file', 'name' => 'csv'),
            )),
            array ('key' => 'narrativa_simples_grafico_4_fonte', 'label' => 'Fonte', 'type' => 'text', 'name' => 'narrativa_simples_grafico_4_fonte'),

            array ('key' => 'narrativa_simples_acc_1', 'label' => 'Dinâmica regional', 'type' => 'accordion', 'name' => 'narrativa_simples_acc_1'),
            array ('key' => 'narrativa_simples_texto_intro_1', 'label' => 'Texto introdutório', 'type' => 'wysiwyg', 'name' => 'narrativa_simples_texto_intro_1'),
            array ('key' => 'narrativa_simples_grafico_mapa_csv_rep', 'label' => 'Dados', 'type' => 'repeater', 'name' => 'csv_rep_mapa', 'layout'=>'block', 'sub_fields'=>array(
                array ('key' => 'narrativa_simples_grafico_mapa_csv', 'label' => 'Arquivo CSV', 'type' => 'file', 'name' => 'csv'),
            )),
            array ('key' => 'narrativa_simples_grafico_mapa_1_fonte', 'label' => 'Fonte - PIB', 'type' => 'text', 'name' => 'narrativa_simples_grafico_mapa_1_fonte'),
            array ('key' => 'narrativa_simples_grafico_mapa_2_fonte', 'label' => 'Fonte - Empregos', 'type' => 'text', 'name' => 'narrativa_simples_grafico_mapa_2_fonte'),
            array ('key' => 'narrativa_simples_grafico_mapa_3_fonte', 'label' => 'Fonte - Massa Salarial', 'type' => 'text', 'name' => 'narrativa_simples_grafico_mapa_3_fonte'),

        ),
        'location' => array(
            array(array('param'=>'page_template','operator'=>'==','value'=>'template-simples.php')),
        ),
    ));

    /* Especialista */

    acf_add_local_field_group(array(
        'key' => 'autores',
        'title' => 'Informações especialista',
        'style' => 'seamless',
        'menu_order' => 1,
        'fields' => array(
            array ('key' => 'especialista_img', 'label' => 'Foto de perfil', 'type' => 'image', 'name' => 'especialista_img', 'return_format'=>'array'),
            array ('key' => 'especialista_cargo', 'label' => 'Cargo', 'type' => 'text', 'name' => 'especialista_cargo'),
        ),
        'location' => array(
            array(array('param'=>'post_type','operator'=>'==','value'=>'especialistas')),
        ),
    ));


endif;







