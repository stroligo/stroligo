<section class="bg-azulSebrae" id="search-block">
    <div class="container mx-auto py-3 md:py-0 flex items-center justify-center relative">
        <div class="w-10/12 relative">
            <h3 class="text-branco text-center text-xl md:text-3xl">Pesquise o assunto de seu interesse ou explore o conteúdo abaixo</h3>

            <form action="<?php bloginfo('url') ?>" autocomplete="off" class="mb-2 mt-2">
                <div class="flex">
                    <input type="text" name="s" id="searchbar" class="w-full rounded-md border border-azulSebrae75 bg-azulSebrae90 bg-opacity-10 py-2 px-3 font-alegreya text-lg font-bold text-branco placeholder:text-cinzaSebrae75 focus:border-branco focus:bg-transparent focus:outline-none shadow-sm" placeholder="Qual a sua dúvida?"/>
                    <button class="bg-branco px-3 py-2 rounded-md -ml-2 text-azulSebrae font-lato font-semibold flex justify-center items-center shadow-sm hover:bg-azulSebrae97">
                        <?php svg('icon-busca',16,16,"fill-azulSebrae");?><span class=" ml-1">Buscar</span>
                    </button>
                </div>
                <div class="buscaresultados" id="result"></div>
            </form>
            
        </div>
 
    </div>

</section>
