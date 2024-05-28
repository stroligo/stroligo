<nav>
    <div class="container mx-auto flex px-6 md:my-11 my-4">
        <!-- Menu  -->
        <div class="flex w-full justify-between items-center">
            <!-- Logo  -->
            <a href="<?php echo home_url(); ?>" class="logo">
                <?php svg('logo-healnet"',168,48,"");?>
            </a>
            <!-- Navegation  -->
            <ul>
                <li class="menu-item"><a href="<?php echo home_url(); ?>#top">Home</a></li>
                <li class="menu-item"><a href="<?php echo home_url(); ?>#services">Services</a></li>
                <li class="menu-item"><a href="<?php echo home_url(); ?>#story">About us</a></li>
                <li class="menu-item"><a href="<?php echo home_url(); ?>#helpdesk">Contact us</a></li>
            </ul>
            <!-- Button  -->
            <div class="hidden md:flex items-center">
                <a href="#appointment">                 
                    <button class="btn-join"><span>Join us</span></button>
                </a>
            </div>
            <!-- Menu Mobile -->
            <div class="md:hidden flex gap-6 items-center ">
                <input type="checkbox" id="toggle-menuMobile" style="display:none;">
                <div class="w-6 h-6 flex justify-center items-center cursor-pointer">
                    <label for="toggle-menuMobile">
                        <div>
                            <label for="toggle-menuMobile" class="btn-burguer">
                                <?php svg('icon-menu', 20, 12, "fill-digiup-blue-200"); ?>
                            </label>
                            <button class="btn-close" onclick="fecharMenu()">
                                <?php svg('icon-fechar', 16, 16, "fill-digiup-blue-200"); ?>
                            </button>
                        </div>
                    </label>
                </div>
                <div class="menuMobile overflow-hidden ">
                    <ul>
                        <li class="menu-item"><a href="<?php echo home_url(); ?>#top">Home</a></li>
                        <li class="menu-item"><a href="<?php echo home_url(); ?>#services">Services</a></li>
                        <li class="menu-item"><a href="<?php echo home_url(); ?>#story">About us</a></li>
                        <li class="menu-item"><a href="<?php echo home_url(); ?>#helpdesk">Contact us</a></li>
                    </ul>
                    <div class="w-full flex justify-center">
                        <a href="#appointment">                        
                            <button class="btn-join">Join us</button>
                        </a>
                    </div>
                    <ul class="social">
                        <a href="#">
                            <li>
                                <?php svg('icon-facebook"',32,32,"");?>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <?php svg('icon-instagram"',32,32,"");?>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <?php svg('icon-linkedin"',32,32,"");?>
                            </li>
                        </a>
                        <a href="#">
                            <li>
                                <?php svg('icon-youtube"',32,32,"");?>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</nav>