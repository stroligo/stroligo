</div>

<!-- Footer  -->
<footer class="flex flex-col bg-digiup-gray-50">
    <section>
        <div class="container mx-auto px-6 pt-6 md:pt-16 text-gray-400">
            <div class="mb-4 md:mb-11 flex gap-4 flex-col-reverse md:flex-row">
                <div class="md:w-4/12 flex flex-row md:flex-col gap-4 md:gap-12">
                    <!-- Logo desktop -->
                    <div class="hidden md:flex flex-col">
                        <div class="mb-4">
                            <a href="<?php echo home_url(); ?>">
                                <?php svg('logo-healnet-big"',168,144,"");?>
                            </a>
                        </div>
                        <div class="w-10/12">
                            Experience personalized medical care from the comfort of your home.
                        </div>
                    </div>

                </div>
                <div class="menu">
                    <div>
                        <span>Support</span>
                        <ul>
                            <a href="#">
                                <li>Getting Started</li>
                            </a>
                            <a href="#">
                                <li>FAQS</li>
                            </a>
                            <a href="#">
                                <li>Help Articles</li>
                            </a>
                            <a href="#">
                                <li>Report an issue</li>
                            </a>
                            <a href="#">
                                <li>Contact Help Desk</li>
                            </a>
                        </ul>
                    </div>
                    <div>
                        <span>Services</span>
                        <ul>
                            <a href="#">
                                <li>Booking appointments</li>
                            </a>
                            <a href="#">
                                <li>Online consultations</li>
                            </a>
                            <a href="#">
                                <li>Prescriptions</li>
                            </a>
                            <a href="#">
                                <li>Medicine Refills</li>
                            </a>
                            <a href="#">
                                <li>Medical Notes</li>
                            </a>
                        </ul>
                    </div>
                    <div>
                        <span>Legal</span>
                        <ul>
                            <a href="#">
                                <li>Terms & Conditions</li>
                            </a>
                            <a href="#">
                                <li>Privacy Policy</li>
                            </a>
                            <a href="#">
                                <li>Cookie Notice</li>
                            </a>
                            <a href="#">
                                <li>Cookie Preferences</li>
                            </a>
                            <a href="#">
                                <li>Trust Center</li>
                            </a>
                        </ul>
                    </div>
                    <div class="flex md:hidden flex-col">
                        <!-- Logo mobile -->
                        <div class="my-4">
                            <a href="<?php echo home_url(); ?>">
                                <?php svg('logo-healnet"',148,48,"");?>
                            </a>
                        </div>
                        <div class="text-sm">
                            Experience personalized medical care from the comfort of your home.
                        </div>
                    </div>

                </div>
            </div>
            <hr />
            <div class="flex flex-col md:flex-row md:justify-between gap-4 pt-6 pb-7">
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

                <div class=" text-digiup-gray-200 flex items-center font-semibold">
                    HealNet 2024 © All Rights Reserved
                </div>

            </div>


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
<script src="<?php tu(); ?>/build/js/scripts.js"></script>


</body>

</html>