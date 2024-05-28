    </main>
</div>
<?php get_template_part('blocks/modal'); ?>

    <!-- Footer Conteudo -->
    <footer  class="flex flex-col">
        <section class="bg-azulSebrae20">
            <div class="container mx-auto px-6 pt-6 md:pt-20">
                <div class="md:flex md:gap-4 md:justify-between ">
                    <div class="md:w-4/12">
                        <div class="mb-12 md:mb-8"><?php svg('logo-dados-navegaveis',224,59,"fill-branco");?> </div>
          
                        <ul class="md:w-96 hidden md:flex font-alegreya text-lg text-branco mb-16 justify-between font-bold ">
                            <li><a href="<?php echo home_url(); ?>" target="">Início</a></li>
                            <li><a href="<?php echo home_url('#perguntas'); ?>" target="">Perguntas</a></li>
                            <li><a href="<?php echo home_url('#narrativas'); ?>" target="">Narrativas</a></li>
                            <!-- <li><a href="#" target="">Sobre</a></li> -->
                        </ul>
          
                        <div class="flex mb-12">
                            <div class="">
                                <div class="text-xs font-lato text-azulSebrae75 mb-6">Um projeto</div>
                                <div> <?php svg('logo-sebrae-grande',120,64,"fill-branco");?> </div>
                            </div>
                            <div class=" w-16">

                            </div>
                            <div class="">
                                <div class="text-xs font-lato text-azulSebrae75 mb-6">Apoio</div>
                                <div class="h-16 flex items-center"><?php svg('logo-sebrae-fgv',133,24,"fill-branco");?></div>
                            </div>
                        </div>
                        <div class="text-lg font-alegreya mb-4 text-branco">Siga o Sebrae</div>
                        <div class="flex justify-between mb-16 md:w-96">
                            <a href="https://www.youtube.com/user/tvsebrae" target="blank"><?php svg('icon-youtube',24,24,"fill-branco");?></a>
                            <a href="https://twitter.com/sebrae" target="blank"><?php svg('icon-twitter',24,24,"fill-branco");?></a>
                            <a href="https://www.linkedin.com/company/sebrae/" target="blank"><?php svg('icon-linkedin',24,24,"fill-branco");?></a>
                            <a href="https://www.instagram.com/sebrae/" target="blank"><?php svg('icon-instagram',24,24,"fill-branco");?></a>
                            <a href="https://www.facebook.com/sebrae/" target="blank"><?php svg('icon-facebook',24,24,"fill-branco");?></a>
                        </div>
                    </div>
                
                    <div class="mb-12 md:w-6/12">
                        <div class="text-sm font-lato mb-6 text-branco">
                        Dúvidas ou sugestões. Nos envie uma mensagem e analisaremos suas sugestões o mais rápido possível.
                        </div>
                        <form action="" class="formfooter">
                                <div class="relative mb-4">
                                <input type="text" id="name" class="peer" placeholder="name" />
                                <label for="name" class="labelMovimento bg-azulSebrae20">Nome</label>
                                </div>
                            
                                <div class="relative mb-4">
                                <input type="email" name="email" id="email" required class="peer" placeholder="Email" />
                                <label for="email" class="labelMovimento bg-azulSebrae20">Email </label>
                                </div>

                                <div class="relative mb-1">
                                <textarea id="message" rows="4" class="peer" placeholder="Escreva aqui..."></textarea>
                                <label for="message" class="labelMovimento bg-azulSebrae20">Mensagem </label>
                                </div>

                                <div class="mb-4">
                                <input type="checkbox" name="checkbox-ok" id="checkbox-ok" class="checkBoxEdited bg-azulSebrae20" />
                                <label for="checkbox-ok" class="pt-1 text-branco text-xs">Li e concordo com os <a class="underline" href="https://minio-cpe.sebrae.com.br/documento/politica-privacidade.pdf" target="blank">termos de privacidade</a></label>
                                </div>

                                <button class="btn btn-azul">Enviar</button>
                    
                        </form>
                    </div>
                </div>

                <button onclick="window.scrollTo(0,0)" class="py-2 px-3 font-lato text-xs drop-shadow-md hover:drop-shadow-none btn-azul rounded-t-lg flex">  
                    <span class="mr-2"><?php svg('icon-topo',16,16,"fill-branco");?></span> Voltar ao topo
                </button>
            </div>
        </section>

        <section class="bg-azulSebrae10"> 
            <div class="container mx-auto p-6 font-lato text-xs  text-branco md:flex md:justify-between">
                <div class="md:flex">
                <div class="mb-4 md:mb-0">© 2022 Sebrae. Todos os direitos reservados.</div>
                    <a href="https://minio-cpe.sebrae.com.br/documento/politica-privacidade.pdf" target="blank" class="mb-4 md:mb-0 md:ml-4 underline">Política de privacidade</a>
                </div>
                <div>Design e creative code por <a href="https://cafe.art.br/" class="underline" target="blank">Cafe.art.br</a></div>
            </div> 
        </section>
    </footer>


    <!-- Default Wordpress -->
    <?php wp_footer(); ?>
    <script type="text/javascript">
        const home_url = '<?php echo home_url(); ?>';
        const template_url = '<?php tu(); ?>/';
    </script>

    <!-- Carrega o Script -->
    <?php if( is_singular('narrativas') ): ?>
    <script src="<?php tu(); ?>/build/js/classes.js"></script>
    <?php endif; ?>
    <script src="<?php tu(); ?>/build/js/scripts.js"></script>


</body>    
</html> 
 