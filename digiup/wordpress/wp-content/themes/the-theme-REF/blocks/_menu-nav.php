<nav class="bg-azulSebrae33 drop-shadow-lg" >  
    <div class="container mx-auto flex justify-between items-center h-14 px-4 ">
        <!-- Menu Mobile -->
        <input type="checkbox" id="toggle-menuMobile" style="display:none;">
        <div class="md:hidden w-6 h-6 flex justify-center items-center cursor-pointer">
            <label for="toggle-menuMobile">
                <?php svg('icon-menu',20,12,"fill-branco");?> 
            </label>
        </div>
        
        <div class="menuMobile overflow-hidden ">
            <div class="flex flex-col w-full">
                <label for="toggle-menuMobile" class="absolute right-6 top-5 block"><?php svg('icon-fechar',16,16,"fill-branco");?></label>
                
                <div class=" flex justify-center mb-20"> 
                    <a href="https://www.sebrae.com.br/" target="blank"><?php svg('logo-sebrae-pequena',137,72,"fill-branco");?> </a>
                </div>
                <ul class=" w-full flex flex-col justify-center text-center font-campuni text-large font-semibold mb-20 ">
                    <li class="mb-6"><a href="<?php echo home_url(); ?>">Início</a></li>
                    <li class="mb-6"><a href="<?php echo home_url('#perguntas'); ?>">Perguntas</a></li>
                    <li class="mb-6"><a href="<?php echo home_url('#narrativas'); ?>">Narrativas</a></li>                    
                </ul>

                <div class="text-xs font-lato text-branco text-center mb-3">Compartilhe</div>
                <div class="flex gap-4 justify-center">
                    <a href="https://www.youtube.com/user/tvsebrae" target="blank"><?php svg('icon-youtube',24,24,"fill-branco");?></a>
                    <a href="https://twitter.com/sebrae" target="blank"><?php svg('icon-twitter',24,24,"fill-branco");?></a>
                    <a href="https://www.linkedin.com/company/sebrae/" target="blank"><?php svg('icon-linkedin',24,24,"fill-branco");?></a>
                    <a href="https://www.instagram.com/sebrae/" target="blank"><?php svg('icon-instagram',24,24,"fill-branco");?></a>
                    <a href="https://www.facebook.com/sebrae/" target="blank"><?php svg('icon-facebook',24,24,"fill-branco");?></a>
                </div>
            </div>

        </div>

        <!-- Menu Desktop -->
        <div class="flex w-full justify-center">
            <div class="md:justify-start md:w-1/12 lg:w-4/12 items-center">
                <!-- Logo Versão Mobile -->
                <div class="md:hidden">
                    <a href="https://www.sebrae.com.br/" target="blank">
                         <?php svg('logo-sebrae-pequena',75,40,"fill-branco");?> 
                    </a>
                </div>
                <!-- Logo Versão Desktop -->
                <div class="hidden md:flex">
                    <a href="https://www.sebrae.com.br/" target="blank">
                        <?php svg('logo-sebrae-pequena',60,32,"fill-branco");?>
                    </a> 
                </div>
            </div>

            <div class="hidden md:flex md:w-3/12 lg:w-4/12 md:justify-center items-center">
                <a href="<?php echo home_url(); ?>">
                    <?php svg('logo-dados-navegaveis',160,32,"fill-branco");?> 
                </a> 
            </div>
            <div class="hidden md:flex md:w-8/12 lg:w-4/12 md:justify-end items-center">
                <ul class="flex font-campuni text-branco font-medium items-center">
                    <li class="mr-6"><a href="<?php echo home_url('#perguntas'); ?>">Perguntas</a></li>
                    <li class="mr-6"><a href="<?php echo home_url('#narrativas'); ?>">Narrativas</a></li>
                    <li class="icon-search"><?php svg('icon-busca',20,20,"fill-branco");?></li>
                </ul>
            </div>
        </div>
     
        <!-- Busca Responsiva -->
        <div class="md:hidden">
            <?php svg('icon-busca',24,24,"fill-branco");?> 
        </div>
    </div> 
   
</nav> 






