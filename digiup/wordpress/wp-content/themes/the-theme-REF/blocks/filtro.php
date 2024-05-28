<div class="hidden flex-col md:flex md:flex-row justify-between mb-12 filtro">
    <div class="w-full sm:9/12 md:w-8/12">
        <div class=" font-lato text-cinzaSebrae45 mb-4">Filtrar por:</div>

        <ul class="flex flex-col md:flex-row text-cinzaSebrae75 justify-between font-lato" id="filter-tags">

            <?php $terms = get_terms('tipo-pergunta'); ?>

            <?php foreach( $terms as $t ) : ?>

                <li>
                    <input style="display:none;"
                        class="check-terms"
                        name="check-terms"
                        type="checkbox"
                        id="input-filter-<?php echo $t->term_taxonomy_id; ?>"
                        value="tax-<?php echo $t->taxonomy.'='.$t->slug; ?>"
                        data-name="<?php echo $t->name; ?>">

                    <label for="input-filter-<?php echo $t->term_taxonomy_id; ?>" class="filtro-item filtro-<?php echo $t->slug; ?>"><?php echo $t->name; ?></label>
                </li>

            <?php endforeach; ?>

            <!-- clear filters -->
            <li class="text-cinzaSebrae30" id="clear-all-filters">Ver todas</li>

        </ul>

    </div>
    <div class="w-full md:w-3/12">
        <div class="font-lato text-cinzaSebrae45 mb-2">Ordenar por: </div>
        <form class="w-full"> 
            <select class="w-full rounded-md bg-branco border-cinzaSebrae75 font-lato" id="filtro-select">
                <option value="likes">Mais curtidos</option>
                <option value="desc">Mais recente</option>
                <option value="asc">Menos recente</option>
            </select>
        </form>
    </div>
</div>