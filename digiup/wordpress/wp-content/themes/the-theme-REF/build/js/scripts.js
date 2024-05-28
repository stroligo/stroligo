(function(){
	let checkTerms = document.querySelectorAll('.check-terms');
	let clearFilters = document.getElementById('clear-all-filters');
	let orderFilter = document.getElementById('filtro-select');

	if(clearFilters)clearFilters.addEventListener('click', removeAllFilters);
	if(orderFilter)orderFilter.addEventListener('click', updateOrder);


	if(checkTerms.length) for(var i=0;i<checkTerms.length;i++){
		checkTerms[i].onclick = updateCheckedTerms;
	}

	let filter = new Array();
	function updateCheckedTerms(e){

		clearFilters.classList.add('disabled');

		let newId = e.target.getAttribute('id');
		let num = newId.split('-')[2];
		if(filter.includes(num)){
			filter.splice(filter.indexOf(num), 1);
		}
		else{
			filter.push(num);

			/*Add new term to filter*/
			let newItem = document.createElement('label');
			newItem.setAttribute('for', newId);
			newItem.setAttribute('id', 'filter-tag-'+num);
			newItem.innerHTML = e.target.getAttribute('data-name');
		}
		showResults();
	}

	function removeAllFilters(e){

		clearFilters.classList.remove('disabled');

		checkTerms.forEach(function(t){
			if(!t.disabled){
				t.checked = false;
			}
		});
		filter = [];
		showResults();
	}

	function addSearch(){
		showResults();
	}

	function changePage(pg){
		showResults(pg);
	}

	let order = 'likes';
	function updateOrder(e){
		order = e.target.value;
		showResults();
	}

	function showResults(pg = 1){
		/*Mounting Query*/
		let query = '?ajax';
		query += '&ord='+order;
		query += '&pg='+pg; //Cannot be 'paged' cuz Wordpress will treat as a page command, which in this case doesn't work. We have a page with a custom query and not an archive template.

		let queryTaxs = {};
		checkTerms.forEach(function(t){
			let taxTerm = t.value.split('=');
			if(t.checked){
				queryTaxs[taxTerm[0]] = queryTaxs[taxTerm[0]] !== undefined ? queryTaxs[taxTerm[0]] : [];
				queryTaxs[taxTerm[0]].push(taxTerm[1]);
			}
		});

		let taxKeys = Array();
		for(let key in queryTaxs){
	        taxKeys.push(key);
			query += '&'+key+'=';
			queryTaxs[key].forEach(function(term){
				query += term;
				query += queryTaxs[key][queryTaxs[key].length-1] != term ? ',' : '';
			});
		}
	    query += '&taxs='+taxKeys.join(',');

		let url = home_url;
		
		fetch(url+query)
	    .then(function(response) {
	        return response.text();
	    })
	    .then(function(html) {
	        document.getElementById('results').innerHTML = html;
	    });

	}
	if(orderFilter) window.addEventListener("load", showResults);

})();
// Vars
    var wst=0,
    wh=0,
    ww=0,
    up = 0,  
    currentST = 0,
    lastScrollTop = 0,
    alldata = false,
    firstload = false,
    topBar = document.getElementById('topBar'),
    searchBlock = document.getElementById('search-block'),
    subMenu = document.getElementById('fixed-menu'),
    mainContent = document.getElementById('mainContent'),
    _scrollEvents = [],
    aTime = false;

    const estados = {
        ac: "Acre",
        al: "Alagoas",
        ap: "Amapá",
        am: "Amazonas",
        ba: "Bahia",
        ce: "Ceará",
        df: "Distrito Federal",
        es: "Espírito Santo",
        go: "Goiás",
        ma: "Maranhão",
        mt: "Mato Grosso",
        ms: "Mato Grosso do Sul",
        mg: "Minas Gerais",
        pa: "Pará",
        pb: "Paraíba",
        pr: "Paraná",
        pe: "Pernambuco",
        pi: "Piauí",
        rj: "Rio de Janeiro",
        rn: "Rio Grande do Norte",
        rs: "Rio Grande do Sul",
        ro: "Rondônia",
        rr: "Roraima",
        sc: "Santa Catarina",
        sp: "São Paulo",
        se: "Sergipe",
        to: "Tocantins",
        brasil: "todo Brasil"
    };
    const prefixo = {
        ac: "No",
        al: "Em",
        ap: "No",
        am: "No",
        ba: "Na",
        ce: "No",
        df: "No",
        es: "No",
        go: "Em",
        ma: "No",
        mt: "No",
        ms: "No",
        mg: "Em",
        pa: "No",
        pb: "Em",
        pr: "No",
        pe: "Em",
        pi: "No",
        rj: "No",
        rn: "No",
        rs: "No",
        ro: "Em",
        rr: "Em",
        sc: "Em",
        sp: "Em",
        se: "No",
        to: "Em",
        brasil: "Em"
    };
    function labelFiltros(n){
        switch(n){
            case 'cnpj': return ' <span class="font-bold text-azulSebrae">com CNPJ</span>'; break;
            case 'nao_cnpj': return ' <span class="font-bold text-azulSebrae">sem CNPJ</span>'; break;
            case 'industria': return ' <span class="font-bold text-azulSebrae">Indústria</span>'; break;
            case 'comercio': return ' <span class="font-bold text-azulSebrae">Comércio</span>'; break;
            case 'servico': return ' <span class="font-bold text-azulSebrae">Serviços</span>'; break;
            default: return ''; break;
        }
    }


// Helper Functions
    const addScroll = (func) => {
        _scrollEvents.push({ func: func });
    }
    const removeAllScrollEvents = () => {
        _scrollEvents = [];
    }
    function scrollWatch(event) {
      wst = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      wst = parseFloat(wst.toFixed(2));
    
      up = wst < currentST;
      currentST = wst;
      _scrollEvents.forEach(function (e) {
        e.func();
      });
    }
    function toFloat(n) {
        const ns = n.replace(/\./g, '');
        const np = ns.replace(',', '.');
        const nf = parseFloat(np);
        return nf;
    }
    function toNumero(nf) {
      const nv = nf.toString().replace('.', ',');
      const partes = nv.split(',');
      partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      const nt = partes.join(',');
      return nt;
    }
    function toMilhao(n) {
        const ns = n.replace(/\./g, '');
        const np = ns.replace(',', '.');
        let nf = parseFloat(np);
        //const suf = nf>999?' bilhões':' milhões';
        let suf = '';
        if(nf<2) {
            suf = ' milhão';
        }
        else if (nf<1000) {
            suf = ' milhões';
        }
        else if (nf<2000) {
            suf = ' bilhão';
        }
        else{
            suf = ' bilhões';
        }

        if(nf>999){
            nf = nf/1000;
        }
        nv = nf.toFixed(2).toString().replace('.', ',');
        const partes = nv.split(',');
        partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        const nt = partes.join(',');
        return nt+suf;
    }
    function csvStrToArray(str) {
        str = str.split("\n").filter(e => e).map(e => e.replace("\r", ""));
        let array = [];
        for(var i=0, j=-1;i<str.length;i++) {
            let auxArr = str[i].split(/,(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/); //Split STR into Array
            array.push(auxArr);
        }
        return array;
    }

// modal localStorage
    const cookiescheck = document.getElementById("lightbox-sobre");
    const cookies = document.getElementById("cookies");

    function setCookies(d){
      localStorage.setItem("hjgt", d);
      cookies.classList.toggle('hidden',1);
    }
    function initializeCheckboxState() {
      const savedState = localStorage.getItem("hjgt");
      cookiescheck.checked = savedState;
      cookies.classList.toggle('hidden',savedState);
    }
  
    initializeCheckboxState();
    
// hide pagination PowerBI
    const embedInners = document.querySelectorAll('.embed-inner');
    if(embedInners){
        const adjustEmbedInnerHeight = () => {
            embedInners.forEach(embedInner => {
            const originalHeight = embedInner.clientHeight;
            const newHeight = originalHeight - 36;
            embedInner.style.height = `${newHeight}px`;
            });
         };
        document.addEventListener('DOMContentLoaded', adjustEmbedInnerHeight);
    }

// General
    var generalApp = {
        init: function(){

            // hide menu on scroll
            addScroll(function(){ 
              if (wst > 215) {
                  topBar.classList.add('scroll-down');

              } else {
                  topBar.classList.remove('scroll-down');
              } 
            });

            // show search onclick
            const searchIcon = document.querySelector('.icon-search');

            searchIcon.onclick = event => {
                searchBlock.classList.toggle('visible');
            };

            // update likes count 

            const likeButton = document.getElementById('likeButton');
            if(likeButton){
                likeButton.addEventListener('click', function() {
                  let perguntaId = likeButton.dataset.perguntaid;
                  updateLikesCount(perguntaId);
                });
            }

            function updateLikesCount(postId) {
              return fetch(home_url + '?likes_count=' + postId)
              .then(function(response) {
                return response.json();
              })
              .then(function(data) {
                if(data.likes_count){
                    likeButton.querySelector('span').textContent = data.likes_count;
                }
              });
            }

            // autocomplete busca

            const res = document.getElementById("result");
            const searchInput = document.getElementById('searchbar');

            function autocompleteMatch(input) {
              if (input == '') {
                return [];
              }
            
              return fetch(home_url + '?buscageral=' + input)
                .then(function(response) {
                  return response.json();
                })
                .then(function(data) {
                  return data;
                });
            }    

            function searchResults(val) {
              res.innerHTML = '';
              autocompleteMatch(val).then(function(terms) {
                let list = '';
                for (i = 0; i < terms.length; i++) {
                  list += '<li class="' + terms[i].tipodepost + '"><a href="' + terms[i].link + '"><div class="categoria">' + terms[i].tipodepost + '</div><div class="titulo">' + terms[i].titulo + '</div></a></li>';

                }
                res.innerHTML = '<ul>' + list + '</ul>';
              });
            }

            if(searchInput){
              searchInput.addEventListener('keyup', function(event) {
                searchResults(event.target.value);
              });
            }

            document.body.addEventListener('click', function (event) {
              const isInsideResults = res.contains(event.target);
              const isInsideSearchBar = searchInput.contains(event.target);

              if (!isInsideResults && !isInsideSearchBar) {
                res.innerHTML = '';
              }
            });


            // tabs
            const tabWrapper = document.querySelectorAll(".tab-wrapper");

            if(tabWrapper.length) tabWrapper.forEach(tw => {
              
              const openTabBtn = tw.querySelectorAll("[data-tab]");
              const openTabSelect = tw.querySelector(".tab-select");
              const tabContent = tw.querySelectorAll(".tab-content");       

              if(openTabBtn.length) openTabBtn.forEach(button => {
                button.onclick = event => {
  
                    tabContent.forEach(tab => {
                      if(tab.classList.contains("is-visible")){
                        tab.classList.remove("is-visible");
                      }
                    });
  
                    openTabBtn.forEach(btn => {
                      if(btn.classList.contains("active")){
                        btn.classList.remove("active");
                      }
                    });
  
                    button.classList.add("active");
                    const tabId = button.dataset.tab;
                    document.getElementById(tabId).classList.add("is-visible");

                    loadChart[tabId]();
                };
              });

              if(tabContent.length && openTabSelect.length) openTabSelect.addEventListener("change", event => {

                tabContent.forEach(tab => {
                if(tab.classList.contains("is-visible")){
                    tab.classList.remove("is-visible");
                }
                });

                const selectedTabId = event.target.value;
                document.getElementById(selectedTabId).classList.add("is-visible");

                loadChart[selectedTabId]();
              });

            }); 

            // Leia mais - single perguntas

            const lerMaisBtn = document.getElementById('lermais-btn');
            const lerMais = document.getElementById('lermais');

            if(lerMaisBtn) lerMaisBtn.onclick = event => {
              lerMais.classList.toggle('opened');
              if (lerMais.classList.contains('opened')){
                lerMaisBtn.innerHTML = '- Ler menos';
              } else{
                lerMaisBtn.innerHTML = '+ Ler mais';
              }
            };

            // Sliders

            const splideNarrativas = document.querySelectorAll('.splideNarrativas');
            const splideDiversidade = document.querySelectorAll('.splideDiversidade');

            if(splideNarrativas.length) splideNarrativas.forEach(slider => {
              new Splide(slider, {
                perPage: 4,
                gap: "1rem",
                type: "loop",
                breakpoints: {
                  640: {
                    perPage: 1,
                    gap: "1rem",
                    padding: { left: "0", right: "4rem" },
                  },
                },
              }).mount();
            });

            if(splideDiversidade.length) splideDiversidade.forEach(slider => {
              new Splide(slider, {
                perPage: 4,
                gap: "1rem",
                type: "loop",
                breakpoints: {
                  640: {
                    perPage: 1,
                    gap: "1rem",
                    padding: { left: "4rem", right: "4rem" },
                  },
                },
              }).mount();
            });

            // Detalhes narrativas

            const detalhes = document.getElementById('detalhes');
            const verDetalhes = document.querySelectorAll(".ver-detalhes"); 
            const fecharDetalhes = document.getElementById('fechar-detalhes');
            const detalhesTabSelect = document.querySelector(".tab-detalhes .tab-select");

            if(verDetalhes.length) verDetalhes.forEach(btn => {

                btn.onclick = event => {

                    const tabBtn = btn.dataset.detalhe;
                    const correspondingTabButton = document.querySelector(`[data-tab="${tabBtn}"]`);
                    
                    if (correspondingTabButton) {
                        correspondingTabButton.click();
                    }

                    if (detalhesTabSelect) {
                        const selectedTabValue = tabBtn; 
                        detalhesTabSelect.value = selectedTabValue; 
                    }
                    
                    detalhes.scrollIntoView();
                    
                    if(detalhes.classList.contains('fechado')){
                        detalhes.classList.remove('fechado');
                    }
                };

                fecharDetalhes.onclick = event => {
                    detalhes.classList.add('fechado');
                };
            });

            // Copy to clipboard 
            const copyButton = document.getElementById('copyBtn');
            const copyInput = document.getElementById('copyText');

            if(copyButton) copyButton.addEventListener('click', () => {
              copyInput.select();
              copyInput.setSelectionRange(0, 99999); 
              document.execCommand('copy');
              navigator.clipboard.writeText(copyInput.value)
              .then(() => {
                alert("Link copiado para a área de transferência.");
              })
            });
        },
    }

// Home
    const homeApp = {
        init: function(){

            const splideHero = document.querySelectorAll('.splideHero');

            if(splideHero.length) splideHero.forEach(slider => {
                new Splide(slider, {
                  type: "loop",
                }).mount();
            });

            // hide menu and change search on scroll
            addScroll(function(){ 
            if (wst > 215) {
                searchBlock.classList.add('scrolled');

            } else {
                searchBlock.classList.remove('scrolled');
            } 
            });

        },
    }

// Mei
    const meiApp = {
        data: false,
        seletores: false,
        seletor: 'renda',
        filtros: false,
        filtro: 'total',
        mapa: false,
        brasil: false,
        init: function(){
            
            this.mapa = document.getElementById('mapamei');
            this.estados = this.mapa.querySelectorAll('[data-estado]');
            this.seletores = document.querySelectorAll('[data-mapameiseletor]');
            this.filtros = document.querySelectorAll('[data-mapameifiltro]');

            this.min = document.getElementById('mapamei_min');
            this.max = document.getElementById('mapamei_max');
            this.legendamapa = document.getElementById('mapamei_legendamapa');
            this.legenda = document.getElementById('mapamei_legenda');
            this.sublegenda = document.getElementById('mapamei_sublegenda');
            this.barra_cpnj = document.getElementById('mapamei_barra_cpnj');
            this.texto_cpnj = document.getElementById('mapamei_texto_cpnj');
            this.barra_nao_cpnj = document.getElementById('mapamei_barra_nao_cpnj');
            this.texto_nao_cpnj = document.getElementById('mapamei_texto_nao_cpnj');
            this.fonte = document.getElementById('mapamei_fonte');

            this.seletores.forEach(x=>{
                x.addEventListener('click',()=>{
                    meiApp.seletor = x.dataset.mapameiseletor;
                    meiApp.filterMap();
                });
            });
            this.filtros.forEach(x=>{
                x.addEventListener('click',()=>{
                    meiApp.filtro = x.dataset.mapameifiltro;
                    meiApp.filterMap();
                });
            });
            this.estados.forEach(x=>{
                x.addEventListener('mouseenter',(e)=>{
                    if(x.dataset.data) meiApp.interacao(JSON.parse(x.dataset.data));
                });
                x.addEventListener('mouseleave',(e)=>{
                    meiApp.interacao(false);
                });
            });

            if(!meiApp.data){
                /*EACH CSV*/
                const csvs = [
                    template_url+'/src/csv/newformat/mei.mapa.trabalhadores.data.csv',
                    template_url+'/src/csv/newformat/mei.mapa.horastrabalhadas.data.csv',
                    template_url+'/src/csv/newformat/mei.mapa.rendamedia.data.csv',
                ];
                let promiseReqMeiTrab = [];
                csvs.forEach(path => {
                    /*READING CSV PROMISE*/
                    promiseReqMeiTrab.push(loadChart.promiseToGetCsv(path));
                });
                Promise.all(promiseReqMeiTrab).then(res=>{
                    meiApp.mapaMeiCsvNewToOldFormat(res);
                });
                d3.csv(template_url+'/src/csv/mapamei.csv').then(function(data){
                    meiApp.data = data;

                    meiApp.estados.forEach(x=>{
                        var dd = data.find(y=>y.UF == x.dataset.estado);
                        x.dataset.data = JSON.stringify(dd);
                    });

                    meiApp.brasil = data.find(y=>y.UF == 'brasil');
                    meiApp.filterMap();
                });
            }else{
                meiApp.filterMap();
            }
        },
        filterMap: function(){
            this.seletores.forEach(x=>{
                x.classList.toggle('active',meiApp.seletor==x.dataset.mapameiseletor);
            });
            this.filtros.forEach(x=>{
                x.classList.toggle('active',meiApp.filtro==x.dataset.mapameifiltro);
            });
            this.render();
        },
        render: function() {
            var d = this.data;
            var key = this.seletor+'_'+this.filtro;

            if(this.seletor=='trabalhadores') key+='_pop';
            const all = d.map(dd => toFloat(dd[key]));
            const max = Math.max(...all);
            const min = Math.min(...all);
            const escala = d3.scaleQuantize().domain([min, max]).range([1,2,3,4,5]);

            if(this.seletor == 'renda'){
                this.min.innerHTML = `R$ ${min}`;
                this.max.innerHTML = `R$ ${max}`;
                this.legendamapa.innerHTML = `Renda média mensal por estado`;
                this.fonte.innerHTML = `Fonte: IBGE (PNAD Contínua)`;
            } else if(this.seletor == 'horas'){
                this.min.innerHTML = `${min} horas/<br>semana`;
                this.max.innerHTML = `${max} horas/<br>semana`;
                this.legendamapa.innerHTML = `Média de horas semanais trabalhadas em cada estado`;
                this.fonte.innerHTML = `Fonte: IBGE (PNAD Contínua)`;
            } else if(this.seletor == 'trabalhadores'){
                this.min.innerHTML = `${min}%`;
                this.max.innerHTML = `${max}%`;
                this.legendamapa.innerHTML = `% de trabalhadores por conta própria em relação ao total da população do estado`;
                this.fonte.innerHTML = `Fonte: IBGE (PNAD Contínua)`;
            }

            // fill-nivel1 fill-nivel2 fill-nivel3 fill-nivel4 fill-nivel5
            meiApp.estados.forEach(x=>{
                if(x.dataset.data) {
                    var dd = JSON.parse(x.dataset.data);
                    x.setAttribute("class",`fill-nivel${escala(toFloat(dd[key]))}`);
                }
            });

            this.interacao(false);
        },
        interacao: function(d) {
            var legenda = sublegenda = texto_cpnj = texto_nao_cpnj = '';
            var key = this.seletor+'_';
            var barra_cpnj = barra_nao_cpnj = 0;
            if(d){
                legenda =`<div class="mb-2 hidden md:flex"><img src="${template_url+'/assets/img/map/'+d.UF+'.svg'}"></div>`;
                if(this.seletor == 'renda'){
                    legenda +=`<div class=" font-alegreya text-xlarge text-cinzaSebrae30"> ${prefixo[d.UF]} <span class="font-bold text-azulSebrae">${estados[d.UF]}</span>, no mês de dezembro de 2021,  os trabalhadores por conta própria${labelFiltros(this.filtro)} tiveram uma renda média de <span class="font-bold text-azulSebrae">R$ ${d[key+this.filtro]}</span>.</div>`;
                } else if(this.seletor == 'horas'){
                    legenda +=`<div class="font-alegreya text-xlarge text-cinzaSebrae30">${prefixo[d.UF]} <span class="font-bold text-azulSebrae">${estados[d.UF]}</span>, no mês de dezembro de 2021, os trabalhadores por conta própria${labelFiltros(this.filtro)} trabalharam em média <span class="font-bold text-azulSebrae">${d[key+this.filtro]}</span> horas por semana</div>`;
                } else if(this.seletor == 'trabalhadores'){
                    legenda +=`<div class="font-alegreya text-xlarge text-cinzaSebrae30">${prefixo[d.UF]} <span class="font-bold text-azulSebrae">${estados[d.UF]}</span>, no mês de dezembro de 2021, haviam  <span class="font-bold text-azulSebrae">${toNumero(d[key+this.filtro])}</span> trabalhadores por conta própria${labelFiltros(this.filtro)}, representando cerca de <span class="font-bold text-azulSebrae">${d[key+this.filtro+'_pop']}</span> da população do estado.</div>`;
                }
            }else{
                d = meiApp.brasil;

                if(this.seletor == 'renda'){
                    legenda +=`<div class="font-alegreya text-xlarge text-cinzaSebrae30">Os trabalhadores conta própria <span class="font-bold text-azulSebrae">com CNPJ</span> possuem <span class="font-bold text-azulSebrae">renda média maior</span> que os profissionais <span class="font-bold text-azulSebrae">sem CNPJ</span> em todos os estados brasileiros.</div>`;
                } else if(this.seletor == 'horas'){
                    legenda +=`<div class="font-alegreya text-xlarge text-cinzaSebrae30">${prefixo[d.UF]} <span class="font-bold text-azulSebrae">${estados[d.UF]}</span>, no mês de dezembro de 2021, os trabalhadores por conta própria${labelFiltros(this.filtro)} trabalharam em média <span class="font-bold text-azulSebrae">${d[key+this.filtro]}</span> horas por semana</div>`;
                } else if(this.seletor == 'trabalhadores'){
                    legenda +=`<div class="font-alegreya text-xlarge text-cinzaSebrae30">${prefixo[d.UF]} <span class="font-bold text-azulSebrae">${estados[d.UF]}</span>, no mês de dezembro de 2021, haviam  <span class="font-bold text-azulSebrae">${toNumero(d[key+this.filtro])}</span> trabalhadores por conta própria${labelFiltros(this.filtro)}, representando cerca de <span class="font-bold text-azulSebrae">${d[key+this.filtro+'_pop']}</span> da população.</div>`;
                }
            }

            if(this.seletor == 'renda'){
                sublegenda = `Renda média ${prefixo[d.UF].toLowerCase()} ${estados[d.UF]}`;
                texto_cpnj = `R$ ${d[key+'cnpj']}`;
                texto_nao_cpnj = `R$ ${d[key+'nao_cnpj']}`;

            } else if(this.seletor == 'horas'){
                sublegenda = `Horas trabalhadas ${prefixo[d.UF].toLowerCase()} ${estados[d.UF]}`;
                texto_cpnj = `${d[key+'cnpj']} horas/semana`;
                texto_nao_cpnj = `${d[key+'nao_cnpj']} horas/semana`;
            } else if(this.seletor == 'trabalhadores'){
                sublegenda = `Número de trabalhadores por conta própria ${prefixo[d.UF].toLowerCase()} ${estados[d.UF]}`;
                texto_cpnj = `${toNumero(d[key+'cnpj'])} trabalhadores`;
                texto_nao_cpnj = `${toNumero(d[key+'nao_cnpj'])} trabalhadores`;
            }
            
            var escalacnpj = d3.scaleLinear().domain([0,Math.max(toFloat(d[key+'nao_cnpj']),toFloat(d[key+'cnpj']))]).range([1,100]);

            barra_cpnj = escalacnpj(toFloat(d[key+'cnpj']));
            barra_nao_cpnj = escalacnpj(toFloat(d[key+'nao_cnpj']));

            this.legenda.innerHTML = legenda;
            this.sublegenda.innerHTML = sublegenda;
            this.barra_cpnj.style.width = barra_cpnj+'%';
            this.texto_cpnj.innerHTML = texto_cpnj;
            this.barra_nao_cpnj.style.width = barra_nao_cpnj+'%';
            this.texto_nao_cpnj.innerHTML = texto_nao_cpnj;
        },
        mapaMeiCsvNewToOldFormat(newCsvs){ /*THIS FUNCTION ONLY EXISTS TO ADJUST THE NEW CSV FILES TO THE OLD FORMAT ON MEI MAP SECTION*/
            //Old: UF,populacao,trabalhadores_cnpj,trabalhadores_nao_cnpj,trabalhadores_total,trabalhadores_cnpj_pop,trabalhadores_nao_cnpj_pop,trabalhadores_total_pop,horas_cnpj,horas_nao_cnpj,horas_total,renda_cnpj,renda_nao_cnpj,renda_total
            /*New:
                NAR_MEI_Geral_Regional[ESTADOS],NAR_MEI_Geral_Regional[ANO],[TOTALTRABALHADORES],[TRABALHADORESPOP],[TRABALHADORESCNPJ],[TRABALHADORESSEMCNPJ]
                NAR_MEI_Geral_Regional[ESTADOS],NAR_MEI_Geral_Regional[ANO],[HORAS],[HORAS COM CNPJ],[HORAS SEM CNPJ]
                NAR_MEI_Geral_Regional[ESTADOS],[RENDA],[RENDA COM CNPJ],[RENDA SEM CNPJ]
            */

            const mapNewToOld = ['UF', 'populacao', 'trabalhadores_cnpj', 'trabalhadores_nao_cnpj', 'trabalhadores_total', 'trabalhadores_cnpj_pop', 'trabalhadores_nao_cnpj_pop', 'trabalhadores_total_pop', 'horas_cnpj', 'horas_nao_cnpj', 'horas_total', 'renda_cnpj', 'renda_nao_cnpj', 'renda_total'];
            let data = [
                {UF: 'ac'},{UF: 'al'},{UF: 'ap'},{UF: 'am'},{UF: 'ba'},{UF: 'ce'},{UF: 'df'},{UF: 'es'},{UF: 'go'},{UF: 'ma'},{UF: 'mt'},{UF: 'ms'},{UF: 'mg'},{UF: 'pa'},{UF: 'pb'},{UF: 'pr'},{UF: 'pe'},{UF: 'pi'},{UF: 'rj'},{UF: 'rn'},{UF: 'rs'},{UF: 'ro'},{UF: 'rr'},{UF: 'sc'},{UF: 'sp'},{UF: 'se'},{UF: 'to'},{UF: 'brasil'},
            ];
            data['columns'] = mapNewToOld;
            let newArrs = newCsvs.map( csv => {
                let arr = csvStrToArray(csv);
                arr.shift(); //remove headers
                return arr;
            });
            for(var i=0; i<28; i++){
                data[i][mapNewToOld[1]] = newArrs[0][3];
                data[i][mapNewToOld[2]] = newArrs[0][4];
                data[i][mapNewToOld[3]] = newArrs[0][5];
                data[i][mapNewToOld[4]] = newArrs[0][2];
                data[i][mapNewToOld[5]] = newArrs[0][2];
            }
        }
    };

// MPE
    const mpeApp = {
        data: false,
        seletores: false,
        seletor: 'pib',
        filtros: false,
        filtro: 'total',
        mapa: false,
        brasil: false,
        init: function(){
            
            this.mapa = document.getElementById('mapampe');
            this.estados = this.mapa.querySelectorAll('[data-estado]');
            this.seletores = document.querySelectorAll('[data-mapampeseletor]');
            this.filtros = document.querySelectorAll('[data-mapampefiltro]');

            this.min = document.getElementById('mapampe_min');
            this.max = document.getElementById('mapampe_max');
            this.legendamapa = document.getElementById('mapampe_legendamapa');
            this.legenda = document.getElementById('mapampe_legenda');
            this.sublegenda = document.getElementById('mapampe_sublegenda');
            this.barra_industria = document.getElementById('mapampe_barra_industria');
            this.texto_industria = document.getElementById('mapampe_texto_industria');
            this.barra_comercio = document.getElementById('mapampe_barra_comercio');
            this.texto_comercio = document.getElementById('mapampe_texto_comercio');
            this.barra_servico = document.getElementById('mapampe_barra_servico');
            this.texto_servico = document.getElementById('mapampe_texto_servico');
            this.fonte = document.getElementById('mapampe_fonte');

            this.seletores.forEach(x=>{
                x.addEventListener('click',()=>{
                    mpeApp.seletor = x.dataset.mapampeseletor;
                    mpeApp.filterMap();
                });
            });
            this.filtros.forEach(x=>{
                x.addEventListener('click',()=>{
                    mpeApp.filtro = x.dataset.mapampefiltro;
                    mpeApp.filterMap();
                });
            });
            this.estados.forEach(x=>{
                x.addEventListener('mouseenter',(e)=>{
                    if(x.dataset.data) mpeApp.interacao(JSON.parse(x.dataset.data));
                });
                x.addEventListener('mouseleave',(e)=>{
                    mpeApp.interacao(false);
                });
            });

            if(!mpeApp.data){
                d3.csv(template_url+'/src/csv/mapampe.csv').then(function(data){
                    mpeApp.data = data;

                    mpeApp.estados.forEach(x=>{
                        var dd = data.find(y=>y.UF == x.dataset.estado);
                        x.dataset.data = JSON.stringify(dd);
                    });

                    mpeApp.brasil = data.find(y=>y.UF == 'brasil');
                    mpeApp.filterMap();
                });
            }else{
                mpeApp.filterMap();
            }
        },
        filterMap: function(){
            this.seletores.forEach(x=>{
                x.classList.toggle('active',mpeApp.seletor==x.dataset.mapampeseletor);
            });
            this.filtros.forEach(x=>{
                x.classList.toggle('active',mpeApp.filtro==x.dataset.mapampefiltro);
            });
            this.render();
        },
        render: function() {
            var d = this.data;
            var key = this.seletor+'_'+this.filtro+"_pct";

            const all = d.map(dd => toFloat(dd[key]));
            const max = Math.max(...all);
            const min = Math.min(...all);
            const escala = d3.scaleQuantize().domain([min, max]).range([1,2,3,4,5]);

            if(this.seletor == 'pib'){
                this.legendamapa.innerHTML = `% de PIB das MPE em relação ao PIB total do estado`;
                this.fonte.innerHTML = `Fonte: Sebrae e FGV`;
            } else if(this.seletor == 'empregos'){
                this.legendamapa.innerHTML = `% de vínculos ativos em MPE em relação à todos os empregos do estado`;
                this.fonte.innerHTML = `Fonte: RAIS (Ministério do Trabalho e Emprego)`;
            } else if(this.seletor == 'massasalarial'){
                this.legendamapa.innerHTML = `% da massa salarial gerada por MPE em relação ao total do estado`;
                this.fonte.innerHTML = `Fonte: RAIS (Ministério do Trabalho e Emprego)`;
            }
            this.min.innerHTML = `${min}%`;
            this.max.innerHTML = `${max}%`;

            // fill-nivel1 fill-nivel2 fill-nivel3 fill-nivel4 fill-nivel5
            mpeApp.estados.forEach(x=>{
                if(x.dataset.data) {
                    var dd = JSON.parse(x.dataset.data);
                    x.setAttribute("class",`fill-nivel${escala(toFloat(dd[key]))}`);
                }
            });

            this.interacao(false);
        },
        interacao: function(d) {
            var legenda = sublegenda = texto_servico = texto_industria = texto_comercio = '';
            var key = this.seletor+'_';
            var barra_servico = barra_industria = barra_comercio = 0;
            if(d){
                legenda =`<div class="mb-2 hidden md:flex"><img src="${template_url+'/assets/img/map/'+d.UF+'.svg'}"></div>`;
                if(this.seletor == 'pib'){
                    legenda +=`<div class="font-alegreya text-xlarge text-cinzaSebrae30">${prefixo[d.UF]} <span class="font-bold text-azulSebrae">${estados[d.UF]}</span>, no ano de 2017, as MPEs${this.filtro!='total'?' no setor de '+labelFiltros(this.filtro):''} foram responsáveis por <span class="font-bold text-azulSebrae">${d[key+this.filtro+"_pct"]}</span> do PIB do estado, somando um total de <span class="font-bold text-azulSebrae">R$ ${toMilhao(d[key+this.filtro])}</span>.</div>`;
                } else if(this.seletor == 'empregos'){
                    legenda +=`<div class="font-alegreya text-xlarge text-cinzaSebrae30">${prefixo[d.UF]} <span class="font-bold text-azulSebrae">${estados[d.UF]}</span>, no ano de 2021, as MPEs${this.filtro!='total'?' no setor de '+labelFiltros(this.filtro):''} foram responsáveis por <span class="font-bold text-azulSebrae">${d[key+this.filtro+"_pct"]}</span> dos empregos formais do estado, somando um total de <span class="font-bold text-azulSebrae">${toNumero(d[key+this.filtro])} vínculos</span>.</div>`;
                } else if(this.seletor == 'massasalarial'){
                    legenda +=`<div class="font-alegreya text-xlarge text-cinzaSebrae30">${prefixo[d.UF]} <span class="font-bold text-azulSebrae">${estados[d.UF]}</span>, no ano de 2021, as MPEs${this.filtro!='total'?' no setor de '+labelFiltros(this.filtro):''} foram responsáveis por <span class="font-bold text-azulSebrae">${d[key+this.filtro+"_pct"]}</span> da massa salarial dos trabalhadores formais do estado, somando um total de <span class="font-bold text-azulSebrae">R$ ${toMilhao(d[key+this.filtro])}</span>.</div>`;
                }
            }else{
                d = mpeApp.brasil;

                if(this.seletor == 'pib'){
                    legenda +=`<div class="font-alegreya text-xlarge text-cinzaSebrae30">No ano de 2017, as MPEs${this.filtro!='total'?' no setor de '+labelFiltros(this.filtro):''} foram responsáveis por <span class="font-bold text-azulSebrae">${d[key+this.filtro+"_pct"]}</span> do PIB nacional, somando um total de <span class="font-bold text-azulSebrae">R$ ${toMilhao(d[key+this.filtro])}</span>.</div>`;
                } else if(this.seletor == 'empregos'){
                    legenda +=`<div class="font-alegreya text-xlarge text-cinzaSebrae30">No ano de 2021, as MPEs${this.filtro!='total'?' no setor de '+labelFiltros(this.filtro):''} foram responsáveis por <span class="font-bold text-azulSebrae">${d[key+this.filtro+"_pct"]}</span> dos empregos formais do país, somando um total de <span class="font-bold text-azulSebrae">${toNumero(d[key+this.filtro])} vínculos</span>.</div>`;
                } else if(this.seletor == 'massasalarial'){
                    legenda +=`<div class="font-alegreya text-xlarge text-cinzaSebrae30">No ano de 2021, as MPEs${this.filtro!='total'?' no setor de '+labelFiltros(this.filtro):''} foram responsáveis por <span class="font-bold text-azulSebrae">${d[key+this.filtro+"_pct"]}</span> da massa salarial dos trabalhadores formais do país, somando um total de <span class="font-bold text-azulSebrae">R$ ${toMilhao(d[key+this.filtro])}</span>.</div>`;
                }
            }

            if(this.seletor == 'pib'){
                sublegenda = `Distrubição do PIB das MPEs por setor da economia:`;
            } else if(this.seletor == 'empregos'){
                sublegenda = `Distrubição dos empregos em MPEs por setor da economia:`;
            } else if(this.seletor == 'massasalarial'){
                sublegenda = `Distrubição da massa salarial das MPEs por setor da economia:`;
            }


            barra_industria = toFloat(d[key+'industria_pct']);
            barra_comercio = toFloat(d[key+'comercio_pct']);
            barra_servico = toFloat(d[key+'servico_pct']);

            this.legenda.innerHTML = legenda;
            this.sublegenda.innerHTML = sublegenda;
            this.barra_industria.style.width = barra_industria+'%';
            this.barra_comercio.style.width = barra_comercio+'%';
            this.barra_servico.style.width = barra_servico+'%';
            this.texto_industria.innerHTML = toNumero(barra_industria)+'%';
            this.texto_comercio.innerHTML = toNumero(barra_comercio)+'%';
            this.texto_servico.innerHTML = toNumero(barra_servico)+'%';

        },
    };

// CRÉDITO
const creditoApp = {
    data: false,
    mapa: false,
    brasil: false,
    init: function(){
        
        this.mapa = document.getElementById('mapacredito');
        this.estados = this.mapa.querySelectorAll('[data-estado]');

        this.min = document.getElementById('mapampe_min');
        this.max = document.getElementById('mapampe_max');
        this.legendamapa = document.getElementById('mapampe_legendamapa');
        this.legenda = document.getElementById('mapampe_legenda');
        this.sublegenda = document.getElementById('mapampe_sublegenda');
        this.barra_total = document.getElementById('mapacredito_barra_total');
        this.participacao = document.getElementById('mapacredito_texto_participacao');
        this.fonte = document.getElementById('mapampe_fonte');

        
        this.estados.forEach(x=>{
            x.addEventListener('mouseenter',(e)=>{
                if(x.dataset.data) creditoApp.interacao(JSON.parse(x.dataset.data));
            });
            x.addEventListener('mouseleave',(e)=>{
                creditoApp.interacao(false);
            });
        });

        if(!creditoApp.data){
            d3.csv(template_url+'/src/csv/mapacredito.csv').then(function(data){
                creditoApp.data = data;

                creditoApp.estados.forEach(x=>{
                    var dd = data.find(y=>y.UF == x.dataset.estado);
                    x.dataset.data = JSON.stringify(dd);
                });

                creditoApp.brasil = data.find(y=>y.UF == 'brasil');
                creditoApp.interacao(false) //renderiza Brasil pra não ficar vazio
                creditoApp.render();
            });
        }
    },
    render: function() {
        var d = this.data;

        const all = d.filter(dd => dd['UF'] != 'brasil').map(dd => toFloat(dd['part_estado_brasil']));
        const max = Math.max(...all);
        const min = Math.min(...all);

        const escala = d3.scaleQuantize().domain([min, max]).range([1,2,3,4,5]);

        this.min.innerHTML = `${min}%`;
        this.max.innerHTML = `${max}%`;

        // fill-nivel1 fill-nivel2 fill-nivel3 fill-nivel4 fill-nivel5
        creditoApp.estados.forEach(x=>{
            if(x.dataset.data) {
                var dd = JSON.parse(x.dataset.data);
                x.setAttribute("class",`fill-nivel${escala(toFloat(dd['part_estado_brasil']))}`);
            }
        });

        this.interacao(false);
    },
    interacao: function(d) {
        var legenda = sublegenda = '';
        var key = this.seletor+'_';

        if(d){
            legenda =`<div class="mb-2 hidden md:flex"><img src="${template_url+'/assets/img/map/'+d.UF+'.svg'}"></div>`;
            legenda +=`<div class="font-alegreya text-xlarge text-cinzaSebrae30">${prefixo[d.UF]} <span class="font-bold text-azulSebrae">${estados[d.UF]}</span>, no mês de Dezembro de 2022, as <span class="font-bold text-azulSebrae">MPEs</span> foram tomadoras de <span class="font-bold text-azulSebrae">R$ ${toMilhao(d['saldo_credito'])}</span>. do saldo de crédito</div>`;
        }else{
            d = creditoApp.brasil;
            legenda +=`<div class="font-alegreya text-xlarge text-cinzaSebrae30">${prefixo[d.UF]} <span class="font-bold text-azulSebrae">${estados[d.UF]}</span>, no mês de Dezembro de 2022, as <span class="font-bold text-azulSebrae">MPEs</span> foram tomadoras de <span class="font-bold text-azulSebrae">R$ ${toMilhao(d['saldo_credito'])}</span>. do saldo de crédito</div>`;
        }

        sublegenda = `Percentual do estado em relação ao Brasil`;

        this.legenda.innerHTML = legenda;
        this.sublegenda.innerHTML = sublegenda;
        this.barra_total.style.width = d['part_estado_brasil'].replace(',', '.');
        this.participacao.innerHTML = d['part_estado_brasil'];

    },
};

// Controladores
    function start(){
      generalApp.init();
      var current_page = mainContent.dataset.page;
      switch(current_page){
          case 'home': 
              homeApp.init();
              break;
          case 'mei': 
              meiApp.init();
              break;
          case 'mpe': 
              mpeApp.init();
              break;
          case 'credito': 
              creditoApp.init();
              break;
          default: 
              break;
      }
      scrollWatch();
    }

  window.addEventListener("scroll", scrollWatch);
  document.addEventListener('DOMContentLoaded', start);


/******************* CHARTS ********************/
//LoadCharts
const loadChart = {
    reloaders: {},
    init: () => {
        //grafico-1-trabalhadores
        if( document.getElementById('grafico-trabalhadores') ){
            /*SVG ELEMENT*/
            const svg = document.getElementById('grafico-trabalhadores');
            
            /*EACH CSV*/
            const csvs = JSON.parse(svg.dataset.csv);
            let promises = [];
            csvs.forEach(path => {
                /*READING CSV PROMISE*/
                promises.push(loadChart.promiseToGetCsv(path));
            });
            Promise.all(promises).then(res=>{
                if(csvs.length){
                    const data = loadChart.joinCsvs(res);
                    const headers = data.shift(); //remove headers

                    const keyAno = headers.indexOf('[ano mês]');
                    const keySetor = headers.indexOf('[trabalhadores por conta propria]');
                    const keyValor = headers.indexOf('[qtd]');

                    let newDataOldFormat = new Array();
                    data.forEach(row=>{
                        switch(row[keySetor].toLowerCase()){
                            case 'trabalhadores com cnpj':
                                row[keySetor] = 'trabalhadores-com-cnpj';
                                break;
                                case 'trabalhadores sem cnpj':
                                row[keySetor] = 'trabalhadores-sem-cnpj';
                                break;
                        }
                        const date = row[keyAno].split('/');
                        row[keyAno] = date[0]+'-'+date[1]+'-02'; //date to match old csv
                        row[keyValor] = parseInt(row[keyValor]);

                        newDataOldFormat.push([
                            row[keySetor],
                            row[keyAno],
                            row[keyValor],
                        ]);
                    });

                    loadChart.reloaders.grafico1trabalhadores = {
                        csv: newDataOldFormat.map(d=>d.join(',')+'\n').join(''),
                        chart: new sebraeChart( svg )
                    };
                    loadChart['grafico-1-trabalhadores']();
                }
            }).catch(console.warn);
        }
        //grafico-1-formalizacao
        if( document.getElementById('grafico-formalizacao') ){
            /*SVG ELEMENT*/
            const svg = document.getElementById('grafico-formalizacao');
            /*EACH CSV*/
            const csvs = JSON.parse(svg.dataset.csv);
            let promises = [];
            csvs.forEach(path => {
                /*READING CSV PROMISE*/
                promises.push(loadChart.promiseToGetCsv(path));
            });
            Promise.all(promises).then(res=>{
                if(csvs.length){
                    const data = loadChart.joinCsvs(res);
                    const headers = data.shift(); //remove headers

                    const keyAno = headers.indexOf('[ano]');
                    const keySetor = headers.indexOf('[formalização]');
                    const keyValor = headers.indexOf('[%]');

                    let newDataOldFormat = new Array();
                    data.forEach(row=>{
                        switch(row[keySetor].toLowerCase()){
                            case 'empregado(a) com carteira':
                                row[keySetor] = 'forma-com-carteira';
                                break;
                            case 'empregado(a) sem carteira':
                                row[keySetor] = 'forma-sem-carteira';
                                break;
                            case 'empreendedor informal (sem cnpj)':
                                row[keySetor] = 'forma-informal';
                                break;
                            case 'outros':
                                row[keySetor] = 'forma-outros';
                                break;
                        }
                        row[keyAno] = row[keyAno]+'-01-02'; //date to match old csv
                        row[keyValor] = '"'+row[keyValor].replace('.', ',')+'"';

                        newDataOldFormat.push([
                            row[keySetor],
                            row[keyAno],
                            row[keyValor],
                        ]);
                    });

                    loadChart.reloaders.grafico1formalizacao = {
                        csv: newDataOldFormat.map(d=>d.join(',')+'\n').join(''),
                        chart: new sebraeChart( svg,
                            {
                                axisformat: {
                                    x: "%Y",
                                    y: "~s"
                                }
                            }
                        )
                    };
                }
            }).catch(console.warn);
        }
        //grafico-1-horas-trabalhadas
        if( document.getElementById('grafico-horas') ){
            /*SVG ELEMENT*/
            const svg = document.getElementById('grafico-horas');
            /*EACH CSV*/
            const csvs = JSON.parse(svg.dataset.csv);
            let promises = [];
            csvs.forEach(path => {
                /*READING CSV PROMISE*/
                promises.push(loadChart.promiseToGetCsv(path));
            });
            Promise.all(promises).then(res=>{
                if(csvs.length){
                    const data = loadChart.joinCsvs(res);
                    const headers = data.shift(); //remove headers

                    const keyAno = headers.indexOf('[ano mês]');
                    const keySetor = headers.indexOf('[trabalhadores por conta propria]');
                    const keyValor = headers.indexOf('[hs]');

                    let newDataOldFormat = new Array();
                    data.forEach(row=>{
                        switch(row[keySetor].toLowerCase()){
                            case 'trabalhadores com cnpj':
                                row[keySetor] = 'horas-com-cnpj';
                                break;
                            case 'trabalhadores sem cnpj':
                                row[keySetor] = 'horas-sem-cnpj';
                                break;
                        }
                        const date = row[keyAno].split('/');
                        row[keyAno] = date[0]+'-'+date[1]+'-02'; //date to match old csv
                        row[keyValor] = '"'+row[keyValor].replace('.', ',')+'"';

                        newDataOldFormat.push([
                            row[keySetor],
                            row[keyAno],
                            row[keyValor],
                        ]);
                    });

                    loadChart.reloaders.grafico1horastrabalhadas = {
                        csv: newDataOldFormat.map(d=>d.join(',')+'\n').join(''),
                        chart: new sebraeChart( svg,
                            {
                                domain: {
                                    y: [0, null]
                                }
                            }
                        )
                    };
                }
            }).catch(console.warn);
        }
        //grafico-1-renda-media
        if( document.getElementById('grafico-renda-media') ){
            /*SVG ELEMENT*/
            const svg = document.getElementById('grafico-renda-media');
            /*EACH CSV*/
            const csvs = JSON.parse(svg.dataset.csv);
            let promises = [];
            csvs.forEach(path => {
                /*READING CSV PROMISE*/
                promises.push(loadChart.promiseToGetCsv(path));
            });
            Promise.all(promises).then(res=>{
                if(csvs.length){
                    const data = loadChart.joinCsvs(res);
                    const headers = data.shift(); //remove headers

                    const keyAno = headers.indexOf('[ano mês]');
                    const keySetor = headers.indexOf('[trabalhadores por conta propria]');
                    const keyValor = headers.indexOf('[renda media]');

                    let newDataOldFormat = new Array();
                    data.forEach(row=>{
                        switch(row[keySetor].toLowerCase()){
                            case 'trabalhadores com cnpj':
                                row[keySetor] = 'renda-com-cnpj';
                                break;
                            case 'trabalhadores sem cnpj':
                                row[keySetor] = 'renda-sem-cnpj';
                                break;
                        }
                        const date = row[keyAno].split('/');
                        row[keyAno] = date[0]+'-'+date[1]+'-02'; //date to match old csv
                        row[keyValor] = '"'+row[keyValor].replace('.', ',')+'"';

                        newDataOldFormat.push([
                            row[keySetor],
                            row[keyAno],
                            row[keyValor],
                        ]);
                    });

                    loadChart.reloaders.grafico1rendamedia = {
                        csv: newDataOldFormat.map(d=>d.join(',')+'\n').join(''),
                        chart: new sebraeChart( svg,
                            {
                                domain: {
                                    y: [0, null]
                                }
                            }
                        )
                    };
                }
            }).catch(console.warn);
        }
        //grafico-1-pib
        if( document.getElementById('grafico-pib') ){
            /*SVG ELEMENT*/
            const svg = document.getElementById('grafico-pib');
            /*EACH CSV*/
            const csvs = JSON.parse(svg.dataset.csv);
            let promises = [];
            csvs.forEach(path => {
                /*READING CSV PROMISE*/
                promises.push(loadChart.promiseToGetCsv(path));
            });
            Promise.all(promises).then(res=>{
                if(csvs.length){
                    const data = loadChart.joinCsvs(res);
                    const headers = data.shift(); //remove headers

                    const keyAno = headers.indexOf('[ano]');
                    const keySetor = headers.indexOf('[setor]');
                    const keyValor = headers.indexOf('[valor]');
                    const keyPerc = headers.indexOf('[percentcalc]');

                    let newDataOldFormat = new Array();
                    data.forEach(row=>{
                        switch(row[keySetor].toLowerCase()){
                            case 'comércio':
                                row[keySetor] = 'pib-comercio';
                                break;
                            case 'indústria':
                                row[keySetor] = 'pib-industria';
                                break;
                            case 'serviços':
                                row[keySetor] = 'pib-servicos';
                                break;
                        }
                        row[keyAno] = row[keyAno]+'-01-02'; //date to match old csv
                        row[keyValor] = parseInt(row[keyValor]);
                        row[keyPerc] = parseInt((1 / parseFloat(row[keyPerc])) * row[keyValor]);

                        newDataOldFormat.push([
                            row[keySetor],
                            row[keyAno],
                            row[keyValor],
                            row[keyPerc]
                        ]);
                    });

                    loadChart.reloaders.grafico1pib = {
                        csv: newDataOldFormat.map(d=>d.join(',')+'\n').join(''),
                        chart: new sebraeChart( svg,
                            {
                                axisformat: {
                                    x: "%Y",
                                    y: "~s"
                                },
                                domain: {
                                    y: [0, null]
                                }
                            }
                        )
                    };
                    loadChart['grafico-1-pib']();
                }
            }).catch(console.warn);
        }
        //gafico-1-empregos
        if( document.getElementById('grafico-empregos') ){
            /*SVG ELEMENT*/
            const svg = document.getElementById('grafico-empregos');
            /*EACH CSV*/
            const csvs = JSON.parse(svg.dataset.csv);
            let promises = [];
            csvs.forEach(path => {
                /*READING CSV PROMISE*/
                promises.push(loadChart.promiseToGetCsv(path));
            });
            Promise.all(promises).then(res=>{
                if(csvs.length){
                    const data = loadChart.joinCsvs(res);
                    const headers = data.shift(); //remove headers

                    const keyAno = headers.indexOf('[ano]');
                    const keySetor = headers.indexOf('[setor]');
                    const keyValor = headers.indexOf('[empregos por ano e setor]');
                    const keyPerc = headers.indexOf('[percentdovaloradicionadoaopais]');

                    let newDataOldFormat = new Array();
                    data.forEach(row=>{
                        switch(row[keySetor].toLowerCase()){
                            case 'comércio':
                                row[keySetor] = 'empregos-comercio';
                                break;
                            case 'indústria':
                                row[keySetor] = 'empregos-industria';
                                break;
                            case 'serviços':
                                row[keySetor] = 'empregos-servicos';
                                break;
                        }
                        row[keyAno] = row[keyAno]+'-01-02'; //date to match old csv
                        row[keyValor] = parseInt(row[keyValor]);
                        row[keyPerc] = parseInt((1 / parseFloat(row[keyPerc])) * row[keyValor]);

                        newDataOldFormat.push([
                            row[keySetor],
                            row[keyAno],
                            row[keyValor],
                            row[keyPerc]
                        ]);
                    });
                    
                    loadChart.reloaders.grafico1empregos = {
                        csv: newDataOldFormat.map(d=>d.join(',')+'\n').join(''),
                        chart: new sebraeChart( svg,
                            {
                                axisformat: {
                                    x: "%Y",
                                    y: "~s"
                                },
                                domain: {
                                    y: [0, null]
                                }
                            }
                        )
                    };
                }
            }).catch(console.warn);
        }
        //grafico-1-massa-salarial
        if( document.getElementById('grafico-massa-salarial') ){
            /*SVG ELEMENT*/
            const svg = document.getElementById('grafico-massa-salarial');
            /*EACH CSV*/
            const csvs = JSON.parse(svg.dataset.csv);
            let promises = [];
            csvs.forEach(path => {
                /*READING CSV PROMISE*/
                promises.push(loadChart.promiseToGetCsv(path));
            });
            Promise.all(promises).then(res=>{
                if(csvs.length){
                    const data = loadChart.joinCsvs(res);
                    const headers = data.shift(); //remove headers

                    const keyAno = headers.indexOf('[ano]');
                    const keySetor = headers.indexOf('[setor]');
                    const keyValor = headers.indexOf('[massasalarial]');
                    const keyPerc = headers.indexOf('[percentual]');

                    let newDataOldFormat = new Array();
                    data.forEach(row=>{
                        switch(row[keySetor].toLowerCase()){
                            case 'comércio':
                                row[keySetor] = 'massa-salarial-comercio';
                                break;
                            case 'indústria':
                                row[keySetor] = 'massa-salarial-industria';
                                break;
                            case 'serviços':
                                row[keySetor] = 'massa-salarial-servicos';
                                break;
                        }
                        row[keyAno] = row[keyAno]+'-01-02'; //date to match old csv
                        row[keyPerc] = parseInt((1 / parseFloat(row[keyPerc])) * parseFloat(row[keyValor]));
                        row[keyValor] = '"'+row[keyValor].replace('.', ',')+'"'; //needs to be done after row[keyPerc] calculation

                        newDataOldFormat.push([
                            row[keySetor],
                            row[keyAno],
                            row[keyValor],
                            row[keyPerc]
                        ]);
                    });

                    loadChart.reloaders.grafico1massasalarial = {
                        csv: newDataOldFormat.map(d=>d.join(',')+'\n').join(''),
                        chart: new sebraeChart( svg,
                            {
                                axisformat: {
                                    x: "%Y",
                                    y: "~s"
                                },
                                domain: {
                                    y: [0, null]
                                }
                            }
                        )
                    };
                }
            }).catch(console.warn);
        }
        //Situação Economia (Confiança)
        if( document.getElementById('grafico-economia') ){
            /*SVG ELEMENT*/
            const svg = document.getElementById('grafico-economia');
            /*EACH CSV*/
            const csvs = JSON.parse(svg.dataset.csv);
            let promises = [];
            csvs.forEach(path => {
                /*READING CSV PROMISE*/
                promises.push(loadChart.promiseToGetCsv(path));
            });
            Promise.all(promises).then(res=>{
                if(csvs.length){
                    const data = loadChart.joinCsvs(res);
                    const headers = data.shift(); //remove headers

                    const keyAno = headers.indexOf('[ano mês]');
                    const keyGeral = headers.indexOf('[maximodeicgeral]');
                    const keyMpe = headers.indexOf('[maximodempe]');
                    const keyInd = headers.indexOf('[maximodeindustria]');
                    const keyCom = headers.indexOf('[maximodecomercio]');
                    const keyServ = headers.indexOf('[maximodeservicos]');

                    let newDataOldFormat = new Array();
                    
                    data.forEach( row => {
                        const date = row[keyAno].split('/');
                        newDataOldFormat.push([
                            'situacao-economia-geral',
                            date[0]+'-'+date[1]+'-02',
                            '"'+row[keyGeral].replace('.', ',')+'"'
                        ]);
                        newDataOldFormat.push([
                            'situacao-economia-mpe',
                            date[0]+'-'+date[1]+'-02',
                            '"'+row[keyMpe].replace('.', ',')+'"'
                        ]);
                        newDataOldFormat.push([
                            'situacao-economia-industria',
                            date[0]+'-'+date[1]+'-02',
                            '"'+row[keyInd].replace('.', ',')+'"'
                        ]);
                        newDataOldFormat.push([
                            'situacao-economia-comercio',
                            date[0]+'-'+date[1]+'-02',
                            '"'+row[keyCom].replace('.', ',')+'"'
                        ]);
                        newDataOldFormat.push([
                            'situacao-economia-servicos',
                            date[0]+'-'+date[1]+'-02',
                            '"'+row[keyServ].replace('.', ',')+'"'
                        ]);
                    });
                    newDataOldFormat.sort( (a,b) => { //If it is not sorted it won't work
                        return a[0] > b[0] ? 1 : -1;
                    });

                    const chart = new sebraeChart( svg );
                    chart.drawLineChart( chart.csvStrToData( newDataOldFormat.map(d=>d.join(',')+'\n').join('') ) );

                    let sitEcoChecks =document.querySelectorAll('input[name=situacao-economia]');
                    for(var i=0;i<sitEcoChecks.length;i++){
                        sitEcoChecks[i].addEventListener('change', _ => {
                            const refs = document.querySelectorAll('.ref-'+_.target.id);
                            if(!_.target.checked){
                                for(var j=0;j<refs.length;j++){
                                    refs[j].classList.add('opacity-5');
                                }
                            }
                            else{
                                for(var j=0;j<refs.length;j++){
                                    refs[j].classList.remove('opacity-5');
                                }
                            }
                        })
                    }
                }
            }).catch(console.warn);
        }
        //Situação Negócio (Expectativa e Situação)
        if( document.getElementById('grafico-negocio') ){
            /*SVG ELEMENT*/
            const svg = document.getElementById('grafico-negocio');
            /*EACH CSV*/
            const csvs = JSON.parse(svg.dataset.csv);
            let promises = [];
            csvs.forEach(path => {
                /*READING CSV PROMISE*/
                promises.push(loadChart.promiseToGetCsv(path));
            });
            Promise.all(promises).then(res=>{
                if(csvs.length){
                    const data = loadChart.joinCsvs(res);
                    const headers = data.shift(); //remove headers

                    const keyAno = headers.indexOf('[ano mês]');
                    const keyPercep = headers.indexOf('[percepção]');
                    const keyGeral = headers.indexOf('[geral]');
                    const keyMpe = headers.indexOf('[maximodempe]');
                    const keyInd = headers.indexOf('[maximodeindustria]');
                    const keyCom = headers.indexOf('[maximodecomercio]');
                    const keyServ = headers.indexOf('[maximodeservicos]');

                    let newDataOldFormat = new Array();
                    
                    data.forEach( row => {
                        const date = row[keyAno].split('/');
                        const prefix = row[keyPercep].toLowerCase() == 'situação atual' ? 'situacao-negocio' : 'expectativa-negocio';
                        newDataOldFormat.push([
                            prefix+'-geral',
                            date[0]+'-'+date[1]+'-02',
                            '"'+row[keyGeral].replace('.', ',')+'"'
                        ]);
                        newDataOldFormat.push([
                            prefix+'-mpe',
                            date[0]+'-'+date[1]+'-02',
                            '"'+row[keyMpe].replace('.', ',')+'"'
                        ]);
                        newDataOldFormat.push([
                            prefix+'-industria',
                            date[0]+'-'+date[1]+'-02',
                            '"'+row[keyInd].replace('.', ',')+'"'
                        ]);
                        newDataOldFormat.push([
                            prefix+'-comercio',
                            date[0]+'-'+date[1]+'-02',
                            '"'+row[keyCom].replace('.', ',')+'"'
                        ]);
                        newDataOldFormat.push([
                            prefix+'-servicos',
                            date[0]+'-'+date[1]+'-02',
                            '"'+row[keyServ].replace('.', ',')+'"'
                        ]);
                    });
                    newDataOldFormat.sort( (a,b) => { //If it is not sorted it won't work
                        return a[0] > b[0] ? 1 : -1;
                    });

                    const chart = new sebraeChart( svg );
                    chart.drawLineChart( chart.csvStrToData( newDataOldFormat.map(d=>d.join(',')+'\n').join('') ) );

                    let sitNegChecks = document.querySelectorAll('input[name=situacao-negocio]');
                    for(var i=0;i<sitNegChecks.length;i++){
                        sitNegChecks[i].addEventListener('change', _ => {
                            const refs = document.querySelectorAll('.ref-'+_.target.id);
                            if(!_.target.checked){
                                for(var j=0;j<refs.length;j++){
                                    refs[j].classList.add('opacity-5');
                                }
                            }
                            else{
                                for(var j=0;j<refs.length;j++){
                                    refs[j].classList.remove('opacity-5');
                                }
                            }
                        })
                    }
                }
            }).catch(console.warn);
        }
        //grafico-1-saldo-concessao
        if( document.getElementById('grafico-saldo-concessao') ){
            /*SVG ELEMENT*/
            const svg = document.getElementById('grafico-saldo-concessao');
            /*EACH CSV*/
            const csvs = JSON.parse(svg.dataset.csv);
            let promises = [];
            csvs.forEach(path => {
                /*READING CSV PROMISE*/
                promises.push(loadChart.promiseToGetCsv(path));
            });
            Promise.all(promises).then(res=>{
                if(csvs.length){
                    const data = loadChart.joinCsvs(res);
                    const headers = data.shift(); //remove headers
                    
                    const keyAno = headers.indexOf('[ano]');
                    const keySaldo = headers.indexOf('[saldo]');
                    const keyPctSaldo = headers.indexOf('[saldo mpe]');
                    const keyConce = headers.indexOf('[concessão]');
                    const keyPctConce = headers.indexOf('[concessão mpe]');
                    
                    let newDataOldFormat = new Array();
                    data.forEach(row=>{
                        
                        {   //Value from millions to units
                            row[keySaldo] = parseFloat(row[keySaldo])*1000000;
                            row[keyConce] = parseFloat(row[keyConce])*1000000;
                        }

                        newDataOldFormat.push([
                            'valor-concessao-mpe',
                            row[keyAno]+'-01-02',
                            '"'+row[keyConce].toString().replace('.', ',')+'"',
                            ( ( 100 / parseFloat(row[keyPctConce]) ) * parseFloat( row[keyConce] ) ).toFixed(2).replace('.', ',')
                        ]);
                        newDataOldFormat.push([
                            'valor-saldo-mpe',
                            row[keyAno]+'-01-02',
                            '"'+row[keySaldo].toString().replace('.', ',')+'"',
                            ( ( 100 / parseFloat(row[keyPctSaldo]) ) * parseFloat( row[keySaldo] ) ).toFixed(2).replace('.', ',')
                        ]);
                    });

                    newDataOldFormat.sort( (a,b) => { //If it is not sorted it won't work
                        return a[0] > b[0] ? 1 : -1;
                    });

                    loadChart.reloaders.grafico1saldoconcessao = {
                        csv: newDataOldFormat.map(d=>d.join(',')+'\n').join(''),
                        chart: new sebraeChart( svg,
                            {
                                axisformat: {
                                    x: "%Y",
                                    y: "~s"
                                },
                                domain: {
                                    y: [0, null]
                                }
                            }
                        )
                    };
                    loadChart['grafico-1-saldo-concessao']();
                }
            }).catch(console.warn);
        }
        //grafico-aumento-credito
        if( document.getElementById('grafico-aumento-credito') ){
            /*SVG ELEMENT*/
            const svg = document.getElementById('grafico-aumento-credito');
            /*EACH CSV*/
            const csvs = JSON.parse(svg.dataset.csv);
            let promises = [];
            csvs.forEach(path => {
                /*READING CSV PROMISE*/
                promises.push(loadChart.promiseToGetCsv(path));
            });
            Promise.all(promises).then(res=>{
                if(csvs.length){
                    const data = loadChart.joinCsvs(res);
                    const headers = data.shift(); //remove headers

                    const keyAno = headers.indexOf('[ano]');
                    const keyValor = headers.indexOf('[concessão]');

                    let newDataOldFormat = new Array();
                    data.forEach(row=>{
                        newDataOldFormat.push([
                            'aumento-credito-mpe',
                            row[keyAno]+'-01-02',
                            '"'+row[keyValor].replace('.', ',')+'"'
                        ]);
                    });

                    loadChart.reloaders.grafico1aumento = {
                        csv: newDataOldFormat.map(d=>d.join(',')+'\n').join(''),
                        chart: new sebraeChart( svg,
                            {
                                axisformat: {
                                    x: "%Y",
                                    y: "~s"
                                },
                                domain: {
                                    y: [0, null]
                                },
                                noHover: true,
                                custom: {
                                    hook: 'before-chart',
                                    function: (svg, domainXarr, domainYarr, xScale, yScale, domain) => {
                                        
                                        const rect = svg.selectAll('rect#last-5').data([true]);
                                        rect.enter()
                                            .append('rect')
                                                .attr('fill', 'rgba(59,74,255,0.1)')
                                                .attr('id', 'last-5')
                                                .attr('x', xScale(domainXarr[domainXarr.length-5]))
                                                .attr('y', yScale(d3.max(domainYarr)))
                                                .attr('width', xScale(domainXarr[domainXarr.length-1]) - xScale(domainXarr[domainXarr.length-5]) )
                                                .attr('height', yScale(domain.y[0] ?? d3.min(domainYarr)) - yScale(d3.max(domainYarr)));
            
                                        const arrowGroup = svg.selectAll('g#arrow-group').data([true]);
                                        arrowGroup
                                        .enter()
                                            .append('g')
                                                .attr('id', 'arrow-group')
                                                .append('path')
                                                    .attr('id', 'arrow')
                                                    .attr('d', 'M20 75C20 76.6569 21.3431 78 23 78C24.6569 78 26 76.6569 26 75L20 75ZM25.1213 0.87868C23.9497 -0.292893 22.0503 -0.292893 20.8787 0.87868L1.7868 19.9706C0.615224 21.1421 0.615224 23.0416 1.7868 24.2132C2.95837 25.3848 4.85787 25.3848 6.02944 24.2132L23 7.24264L39.9706 24.2132C41.1421 25.3848 43.0416 25.3848 44.2132 24.2132C45.3848 23.0416 45.3848 21.1421 44.2132 19.9706L25.1213 0.87868ZM26 75L26 3L20 3L20 75L26 75Z')
                                                    .attr('fill', '#00CC92')
                                                    .attr('style', 'transform: translate('+( xScale(domainXarr[domainXarr.length-1])-18 )+'px,'+( yScale(domainYarr[domainYarr.length-1]) )+'px) scale(.7)');
                                    }
                                }
                            }
                        )
                    };
                }
            }).catch(console.warn);
        }
        //MPE Demais Empresas Saldo e Concessão
        if( document.getElementById('grafico-mpe-demais-saldo') && document.getElementById('grafico-mpe-demais-concessao') ){
            /*SVG ELEMENT*/
            const svg = document.getElementById('grafico-mpe-demais-saldo');
            const svg2 = document.getElementById('grafico-mpe-demais-concessao');
            /*EACH CSV*/
            const csvs = JSON.parse(svg.dataset.csv);
            let promises = [];
            csvs.forEach(path => {
                /*READING CSV PROMISE*/
                promises.push(loadChart.promiseToGetCsv(path));
            });
            Promise.all(promises).then(res=>{
                if(csvs.length){
                    const data = loadChart.joinCsvs(res);
                    const headers = data.shift(); //remove headers

                    const keyAno = headers.indexOf('[ano]');
                    const keySaldoMpe = headers.indexOf('[saldo mpe]');
                    const keySaldoGeral = headers.indexOf('[geral saldo]');
                    const keyConceMpe = headers.indexOf('[concessão mpe]');
                    const keyConceGeral = headers.indexOf('[concessão demais empresas]');

                    let newDataOldFormat = new Array();
                    let newDataOldFormat2 = new Array();
                    data.forEach(row=>{
                        newDataOldFormat.push([
                            'pct-saldo-mpe',
                            row[keyAno]+'-01-02',
                            '"'+row[keySaldoMpe].replace('.', ',')+'"'
                        ]);
                        newDataOldFormat.push([
                            'pct-saldo-demais',
                            row[keyAno]+'-01-02',
                            '"'+row[keySaldoGeral].replace('.', ',')+'"'
                        ]);
                        newDataOldFormat2.push([
                            'pct-concessao-mpe',
                            row[keyAno]+'-01-02',
                            '"'+row[keyConceMpe].replace('.', ',')+'"'
                        ]);
                        newDataOldFormat2.push([
                            'pct-concessao-demais',
                            row[keyAno]+'-01-02',
                            '"'+row[keyConceGeral].replace('.', ',')+'"'
                        ]);
                    });

                    newDataOldFormat.sort( (a,b) => { //If it is not sorted it won't work
                        return a[0] > b[0] ? 1 : -1;
                    });
                    newDataOldFormat2.sort( (a,b) => { //If it is not sorted it won't work
                        return a[0] > b[0] ? 1 : -1;
                    });

                    loadChart.reloaders.grafico1demaissaldo = {
                        csv: newDataOldFormat.map(d=>d.join(',')+'\n').join(''),
                        chart: new sebraeChart( svg,
                            {
                                axisformat: {
                                    x: "%Y",
                                    y: "~s"
                                },
                                domain: {
                                    y: [0, null]
                                }
                            }
                        )
                    };
                    loadChart.reloaders.grafico1demaisconcessao = {
                        csv: newDataOldFormat2.map(d=>d.join(',')+'\n').join(''),
                        chart: new sebraeChart( svg2,
                            {
                                axisformat: {
                                    x: "%Y",
                                    y: "~s"
                                },
                                domain: {
                                    y: [0, null]
                                }
                            }
                        )
                    };
                }
            }).catch(console.warn);
        }
        //Tomadores e Transações
        if( document.getElementById('grafico-tomadores-transacoes') ){
            /*SVG ELEMENT*/
            const svg = document.getElementById('grafico-tomadores-transacoes');
            /*EACH CSV*/
            const csvs = JSON.parse(svg.dataset.csv);
            let promises = [];
            csvs.forEach(path => {
                /*READING CSV PROMISE*/
                promises.push(loadChart.promiseToGetCsv(path));
            });
            Promise.all(promises).then(res=>{
                if(csvs.length){
                    const data = loadChart.joinCsvs(res);
                    const headers = data.shift(); //remove headers

                    const keyAno = headers.indexOf('[ano]');
                    const keyToma = headers.indexOf('[tomadores]');
                    const keyOpera = headers.indexOf('[operações de crédito]');

                    let newDataOldFormat = new Array();
                    data.forEach(row=>{

                        {   //Value from millions to units
                            row[keyToma] = parseFloat(row[keyToma])*1000000
                            row[keyOpera] = parseFloat(row[keyOpera])*1000000
                        }

                        newDataOldFormat.push([
                            'qtd-tomadores',
                            row[keyAno]+'-01-02',
                            '"'+row[keyToma].toString().replace('.', ',')+'"'
                        ]);
                        newDataOldFormat.push([
                            'qtd-operacoes',
                            row[keyAno]+'-01-02',
                            '"'+row[keyOpera].toString().replace('.', ',')+'"'
                        ]);
                    });

                    newDataOldFormat.sort( (a,b) => { //If it is not sorted it won't work
                        return a[0] > b[0] ? 1 : -1;
                    });

                    loadChart.reloaders.grafico1tomadores = {
                        csv: newDataOldFormat.map(d=>d.join(',')+'\n').join(''),
                        chart: new sebraeChart( svg,
                            {
                                axisformat: {
                                    x: "%Y",
                                    y: "~s"
                                },
                                domain: {
                                    y: [0, null]
                                }
                            }
                        )
                    };
                }
            }).catch(console.warn);
        }
        //Taxa Média
        if( document.getElementById('grafico-taxa-media') ){
            /*SVG ELEMENT*/
            const svg = document.getElementById('grafico-taxa-media');
            /*EACH CSV*/
            const csvs = JSON.parse(svg.dataset.csv);
            let promises = [];
            csvs.forEach(path => {
                /*READING CSV PROMISE*/
                promises.push(loadChart.promiseToGetCsv(path));
            });
            Promise.all(promises).then(res=>{
                if(csvs.length){
                    const data = loadChart.joinCsvs(res);
                    const headers = data.shift(); //remove headers

                    const keyAno = headers.indexOf('[ano]');
                    const keyTrim = headers.indexOf('[trimestre]');
                    const keyMicro = headers.indexOf('[microempresas]');
                    const keyPe = headers.indexOf('[pequenas empresas]');
                    const keyTodas = headers.indexOf('[todas as empresas]');
                    const keySelic = headers.indexOf('[selic]');
                    const keyIpca = headers.indexOf('[ipca]');

                    let newDataOldFormat = new Array();
                    data.forEach(row=>{
                        newDataOldFormat.push([
                            'juros-ipca',
                            row[keyAno]+'-'+( parseInt(row[keyTrim].charAt(0))*3 )+'-02',
                            '"'+row[keyIpca].replace('.', ',')+'"'
                        ]);
                        newDataOldFormat.push([
                            'juros-selic',
                            row[keyAno]+'-'+( parseInt(row[keyTrim].charAt(0))*3 )+'-02',
                            '"'+row[keySelic].replace('.', ',')+'"'
                        ]);
                        newDataOldFormat.push([
                            'juros-microempresa',
                            row[keyAno]+'-'+( parseInt(row[keyTrim].charAt(0))*3 )+'-02',
                            '"'+row[keyMicro].replace('.', ',')+'"'
                        ]);
                        newDataOldFormat.push([
                            'juros-pequenaempresa',
                            row[keyAno]+'-'+( parseInt(row[keyTrim].charAt(0))*3 )+'-02',
                            '"'+row[keyPe].replace('.', ',')+'"'
                        ]);
                        newDataOldFormat.push([
                            'juros-todas-empresas',
                            row[keyAno]+'-'+( parseInt(row[keyTrim].charAt(0))*3 )+'-02',
                            '"'+row[keyTodas].replace('.', ',')+'"'
                        ]);
                    });

                    newDataOldFormat.sort( (a,b) => { //If it is not sorted it won't work
                        return a[0] > b[0] ? 1 : -1;
                    });

                    const chart = new sebraeChart( svg );
                    chart.drawLineChart( chart.csvStrToData( newDataOldFormat.map(d=>d.join(',')+'\n').join('') ) );

                    let taxMedChecks = document.querySelectorAll('input[name=taxa-media]');
                    for(var i=0;i<taxMedChecks.length;i++){
                        taxMedChecks[i].addEventListener('change', _ => {
                            const refs = document.querySelectorAll('.ref-'+_.target.id);
                            if(!_.target.checked){
                                for(var j=0;j<refs.length;j++){
                                    refs[j].classList.add('opacity-5');
                                }
                            }
                            else{
                                for(var j=0;j<refs.length;j++){
                                    refs[j].classList.remove('opacity-5');
                                }
                            }
                        })
                    }
                }
            }).catch(console.warn);
        }
        //Inadimplência Média
        if( document.getElementById('grafico-inadimplencia-media') ){
            /*SVG ELEMENT*/
            const svg = document.getElementById('grafico-inadimplencia-media');
            /*EACH CSV*/
            const csvs = JSON.parse(svg.dataset.csv);
            let promises = [];
            csvs.forEach(path => {
                /*READING CSV PROMISE*/
                promises.push(loadChart.promiseToGetCsv(path));
            });
            Promise.all(promises).then(res=>{
                if(csvs.length){
                    const data = loadChart.joinCsvs(res);
                    const headers = data.shift(); //remove headers

                    const keyAno = headers.indexOf('[ano mês]');
                    const keyMicro = headers.indexOf('[microempresas]');
                    const keyPe = headers.indexOf('[pequenas empresas]');
                    const keyTodas = headers.indexOf('[todas as empresas]');

                    let newDataOldFormat = new Array();
                    data.forEach(row=>{
                        const date = row[keyAno].split('/');
                        newDataOldFormat.push([
                            'inadimplencia-microempresa',
                            date[0]+'-'+date[1]+'-02',
                            '"'+row[keyMicro].replace('.', ',')+'"'
                        ]);
                        newDataOldFormat.push([
                            'inadimplencia-pequenaempresa',
                            date[0]+'-'+date[1]+'-02',
                            '"'+row[keyPe].replace('.', ',')+'"'
                        ]);
                        newDataOldFormat.push([
                            'inadimplencia-todas-empresas',
                            date[0]+'-'+date[1]+'-02',
                            '"'+row[keyTodas].replace('.', ',')+'"'
                        ]);
                    });

                    newDataOldFormat.sort( (a,b) => { //If it is not sorted it won't work
                        return a[0] > b[0] ? 1 : -1;
                    });

                    const chart = new sebraeChart( svg, {
                        domain: {
                            y: [0, null]
                        }
                    } );
                    chart.drawLineChart( chart.csvStrToData( newDataOldFormat.map(d=>d.join(',')+'\n').join('') ) );

                    let inadMedChecks = document.querySelectorAll('input[name=inadimplencia-media]');
                    for(var i=0;i<inadMedChecks.length;i++){
                        inadMedChecks[i].addEventListener('change', _ => {
                            const refs = document.querySelectorAll('.ref-'+_.target.id);
                            if(!_.target.checked){
                                for(var j=0;j<refs.length;j++){
                                    refs[j].classList.add('opacity-5');
                                }
                            }
                            else{
                                for(var j=0;j<refs.length;j++){
                                    refs[j].classList.remove('opacity-5');
                                }
                            }
                        });
                    }
                }
            }).catch(console.warn);
        }
        //gafico-1-simples-empregos
        if( document.getElementById('grafico-simples-empregos') ){
            /*SVG ELEMENT*/
            const svg = document.getElementById('grafico-simples-empregos');
            /*EACH CSV*/
            const csvs = JSON.parse(svg.dataset.csv);
            let promises = [];
            csvs.forEach(path => {
                /*READING CSV PROMISE*/
                promises.push(loadChart.promiseToGetCsv(path));
            });
            Promise.all(promises).then(res=>{
                if(csvs.length){
                    const data = loadChart.joinCsvs(res);
                    const headers = data.shift(); //remove headers

                    const keyAno = headers.indexOf('[ano (calc)]');
                    const keyValor = headers.indexOf('[trabalhadores no ano(simples nacional)]');

                    let newDataOldFormat = new Array();
                    data.forEach(row=>{
                        newDataOldFormat.push([
                            'simples-empregos',
                            row[keyAno]+'-01-02',
                            parseInt(row[keyValor]),
                        ]);
                    });

                    loadChart.reloaders.grafico1simplesempregos = {
                        csv: newDataOldFormat.map(d=>d.join(',')+'\n').join(''),
                        chart: new sebraeChart( svg,
                            {
                                axisformat: {
                                    x: "%Y",
                                    y: "~s"
                                },
                                domain: {
                                    y: [0, null]
                                }
                            }
                        )
                    };
                    loadChart['grafico-1-simples-empregos']();
                }
            }).catch(console.warn);
        }
        //grafico-1-simples-saldo
        if( document.getElementById('grafico-simples-saldo') ){
            /*SVG ELEMENT*/
            const svg = document.getElementById('grafico-simples-saldo');
            /*EACH CSV*/
            const csvs = JSON.parse(svg.dataset.csv);
            let promises = [];
            csvs.forEach(path => {
                /*READING CSV PROMISE*/
                promises.push(loadChart.promiseToGetCsv(path));
            });
            Promise.all(promises).then(res=>{
                if(csvs.length){
                    const data = loadChart.joinCsvs(res);
                    const headers = data.shift(); //remove headers

                    const keyAno = headers.indexOf('[ano (calc)]');
                    const keySimples = headers.indexOf('[simples nacional]');
                    const keyOutras = headers.indexOf('[outras]');

                    let newDataOldFormat = new Array();
                    data.forEach(row=>{
                        newDataOldFormat.push([
                            'simples-saldo-simples',
                            row[keyAno]+'-01-02',
                            parseInt(row[keySimples])
                        ]);
                        newDataOldFormat.push([
                            'simples-saldo-outras',
                            row[keyAno]+'-01-02',
                            parseInt(row[keyOutras])
                        ]);
                    });

                    newDataOldFormat.sort( (a,b) => { //If it is not sorted it won't work
                        return a[0]=='simples-saldo-simples' ? -1 : 1;
                    });

                    loadChart.reloaders.grafico1simplessaldo = {
                        csv: newDataOldFormat.map(d=>d.join(',')+'\n').join(''),
                        chart: new sebraeChart( svg,
                            {
                                axisformat: {
                                    x: "%Y",
                                    y: "~s"
                                },
                            }
                        )
                    };
                }
            }).catch(console.warn);
        }
        //grafico-1-simples-massa-salarial
        if( document.getElementById('grafico-simples-massa-salarial') ){
            /*SVG ELEMENT*/
            let svg = document.getElementById('grafico-simples-massa-salarial');
            /*EACH CSV*/
            const csvs = JSON.parse(svg.dataset.csv);
            let promises = [];
            csvs.forEach(path => {
                /*READING CSV PROMISE*/
                promises.push(loadChart.promiseToGetCsv(path));
            });
            Promise.all(promises).then(res=>{
                if(csvs.length){
                    const data = loadChart.joinCsvs(res);
                    const headers = data.shift(); //remove headers

                    const keyAno = headers.indexOf('[ano (calc)]');
                    const keyMassa = headers.indexOf('[massa salarial ano (simples nacional)]');
                    const keyPct = headers.indexOf('[% massa salarial ano (simples e outros nacional)]');

                    let newDataOldFormat = new Array();
                    data.forEach(row=>{
                        const total = parseFloat(row[keyMassa])*(100/parseFloat(row[keyPct]));

                        newDataOldFormat.push([
                            'simples-massa-salarial',
                            row[keyAno]+'-01-02',
                            parseInt(row[keyMassa]),
                            total.toFixed(2).replace('.', ',')
                        ]);
                    });

                    loadChart.reloaders.grafico1simplesmassasalarial = {
                        csv: newDataOldFormat.map(d=>d.join(',')+'\n').join(''),
                        chart: new sebraeChart( svg,
                            {
                                axisformat: {
                                    x: "%Y",
                                    y: "~s"
                                },
                                domain: {
                                    y: [0, null]
                                }
                            }
                        )
                    };
                }
            }).catch(console.warn);
        }
        
    },
    'grafico-1-trabalhadores': () => {
        if('grafico1trabalhadores' in loadChart.reloaders){
            loadChart.reloaders.grafico1trabalhadores.chart.drawAreaChart( loadChart.reloaders.grafico1trabalhadores.chart.csvStrToData( loadChart.reloaders.grafico1trabalhadores.csv ) );
        }
    },
    'grafico-1-formalizacao': () => {
        if('grafico1formalizacao' in loadChart.reloaders){
            loadChart.reloaders.grafico1formalizacao.chart.drawPctAreaChart( loadChart.reloaders.grafico1formalizacao.chart.csvStrToData( loadChart.reloaders.grafico1formalizacao.csv ) );        
        }
    },
    'grafico-1-horas-trabalhadas': () => {
        if('grafico1horastrabalhadas' in loadChart.reloaders){
            loadChart.reloaders.grafico1horastrabalhadas.chart.drawLineChart( loadChart.reloaders.grafico1horastrabalhadas.chart.csvStrToData( loadChart.reloaders.grafico1horastrabalhadas.csv ) );
        }
    },
    'grafico-1-renda-media': () => {
        if('grafico1rendamedia' in loadChart.reloaders){
            loadChart.reloaders.grafico1rendamedia.chart.drawLineChart( loadChart.reloaders.grafico1rendamedia.chart.csvStrToData( loadChart.reloaders.grafico1rendamedia.csv ) );
        }
    },
    'grafico-1-pib': () => {
        if('grafico1pib' in loadChart.reloaders){
            loadChart.reloaders.grafico1pib.chart.drawLineChart( loadChart.reloaders.grafico1pib.chart.csvStrToData( loadChart.reloaders.grafico1pib.csv ) );
        }
    },
    'grafico-1-empregos': () => {
        if('grafico1empregos' in loadChart.reloaders){
            loadChart.reloaders.grafico1empregos.chart.drawLineChart( loadChart.reloaders.grafico1empregos.chart.csvStrToData( loadChart.reloaders.grafico1empregos.csv ) );
        }
    },
    'grafico-1-massa-salarial': () => {
        if('grafico1massasalarial' in loadChart.reloaders){
            loadChart.reloaders.grafico1massasalarial.chart.drawLineChart( loadChart.reloaders.grafico1massasalarial.chart.csvStrToData( loadChart.reloaders.grafico1massasalarial.csv ) );
        }
    },
    'grafico-1-saldo-concessao': () => {
        if('grafico1saldoconcessao' in loadChart.reloaders){
            loadChart.reloaders.grafico1saldoconcessao.chart.drawLineChart( loadChart.reloaders.grafico1saldoconcessao.chart.csvStrToData( loadChart.reloaders.grafico1saldoconcessao.csv ) );
        }
    },
    'grafico-1-aumento-credito': () => {
        if('grafico1aumento' in loadChart.reloaders){
            loadChart.reloaders.grafico1aumento.chart.drawLineChart( loadChart.reloaders.grafico1aumento.chart.csvStrToData( loadChart.reloaders.grafico1aumento.csv ) );
        }
    },
    'grafico-1-mpe-demais': () => {
        if('grafico1demaissaldo' in loadChart.reloaders){
            loadChart.reloaders.grafico1demaissaldo.chart.drawPctAreaChart( loadChart.reloaders.grafico1demaissaldo.chart.csvStrToData( loadChart.reloaders.grafico1demaissaldo.csv ) );
        }
        if('grafico1demaisconcessao' in loadChart.reloaders){
            loadChart.reloaders.grafico1demaisconcessao.chart.drawPctAreaChart( loadChart.reloaders.grafico1demaisconcessao.chart.csvStrToData( loadChart.reloaders.grafico1demaisconcessao.csv ) );
        }
    },
    'grafico-1-tomadores-transacoes': () => {
        if('grafico1tomadores' in loadChart.reloaders){
            loadChart.reloaders.grafico1tomadores.chart.drawLineChart( loadChart.reloaders.grafico1tomadores.chart.csvStrToData( loadChart.reloaders.grafico1tomadores.csv ) );
        }
    },
    'grafico-1-simples-empregos': () => {
        if('grafico1simplesempregos' in loadChart.reloaders){
            loadChart.reloaders.grafico1simplesempregos.chart.drawLineChart( loadChart.reloaders.grafico1simplesempregos.chart.csvStrToData( loadChart.reloaders.grafico1simplesempregos.csv ) );
        }
    },
    'grafico-1-simples-saldo': () => {
        if('grafico1simplessaldo' in loadChart.reloaders){
            loadChart.reloaders.grafico1simplessaldo.chart.drawTwoBarsChart( loadChart.reloaders.grafico1simplessaldo.chart.csvStrToData( loadChart.reloaders.grafico1simplessaldo.csv ) );
        }
    },
    'grafico-1-simples-multiplicador': () => {
        const grafico = document.getElementById('grafico-simples-multiplicador');

        if(grafico){
            let data = JSON.parse(grafico.dataset.json);
            data.sort( (a,b) => b.narrativa_simples_grafico_3_numero - a.narrativa_simples_grafico_3_numero );

            let html = '';
            data.forEach(bar => {
                const pct = (bar.narrativa_simples_grafico_3_numero * 100 / data[0].narrativa_simples_grafico_3_numero).toFixed(2);
                html += `
                <div class="flex items-center mb-4">
                    <p class="font-lato text-xs text-cinzaSebrae45 mr-2 md:mr-4 block min-w-28 w-28 md:min-w-36 md:w-36">${bar.narrativa_simples_grafico_3_label}</p>
                    <div class="bar-chart bg-azulSebrae h-4 block transition-all" style="width:${ pct }%;"></div>
                    <p class="text-lg font-bold ml-2 md:mr-4">R$${parseFloat(bar.narrativa_simples_grafico_3_numero).toFixed(2).replace('.', ',')}</p>
                </div>
                `;
            });
            grafico.innerHTML = html;
        }        
    },
    'grafico-1-simples-massa-salarial': () => {
        if('grafico1simplesmassasalarial' in loadChart.reloaders){
            loadChart.reloaders.grafico1simplesmassasalarial.chart.drawLineChart( loadChart.reloaders.grafico1simplesmassasalarial.chart.csvStrToData( loadChart.reloaders.grafico1simplesmassasalarial.csv ) );
        }
    },
    promiseToGetCsv(path){
        return new Promise(function (resolve, reject) {
            const reqMeiTrab = new XMLHttpRequest();
            reqMeiTrab.open('GET', path, true);
            reqMeiTrab.send(null);
            reqMeiTrab.onload = function (e) {
                if( e.target.status === 200 && e.target.readyState === 4 ){
                    resolve(e.target.response);
                }
                else{
                    reject({status: xhr.status, statusText: xhr.statusText});
                }
            }
        });
    },
    joinCsvs(csvs){
        let data = csvs.map(csv => csvStrToArray( csv ));
        data.map(csv => {
            csv[0] = csv[0].map( header => header.match(/\[.*\]/)[0].toLowerCase());
        });
        let joinData = [];
        for(var i=0; i<data[0].length; i++){
            let joinRow = [];
            for(const csv of data){
                if(i in csv){
                    joinRow.push(csv[i]);
                }
            }
            joinData.push(joinRow.flat());
        }
        return joinData;
    }
}
loadChart.init();
function _t(n, t) {
  for (var i = 0; i < t.length; i++) {
    var r = t[i];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(n, r.key, r);
  }
}
/*!
 * Splide.js
 * Version  : 3.0.9
 * License  : MIT
 * Copyright: 2021 Naotoshi Fujita
 */
var n, t;
(n = this),
  (t = function () {
    "use strict";
    var m = "splide",
      a = "data-" + m,
      n = { CREATED: 1, MOUNTED: 2, IDLE: 3, MOVING: 4, DESTROYED: 5 },
      E = 10;
    function _(n) {
      n.length = 0;
    }
    function x(n) {
      return !u(n) && "object" == typeof n;
    }
    function r(n) {
      return Array.isArray(n);
    }
    function z(n) {
      return "string" == typeof n;
    }
    function R(n) {
      return void 0 === n;
    }
    function u(n) {
      return null === n;
    }
    function y(n) {
      return n instanceof HTMLElement;
    }
    function w(n) {
      return r(n) ? n : [n];
    }
    function b(n, t) {
      w(n).forEach(t);
    }
    function k(n, t) {
      return -1 < n.indexOf(t);
    }
    function A(n, t) {
      return n.push.apply(n, w(t)), n;
    }
    var o = Array.prototype;
    function e(n, t, i) {
      return o.slice.call(n, t, i);
    }
    function s(n, t) {
      return e(n).filter(t)[0];
    }
    function L(t, n, i) {
      t &&
        b(n, function (n) {
          n && t.classList[i ? "add" : "remove"](n);
        });
    }
    function S(n, t) {
      L(n, z(t) ? t.split(" ") : t, !0);
    }
    function P(n, t) {
      b(t, n.appendChild.bind(n));
    }
    function M(n, i) {
      b(n, function (n) {
        var t = i.parentNode;
        t && t.insertBefore(n, i);
      });
    }
    function O(n, t) {
      return (n.msMatchesSelector || n.matches).call(n, t);
    }
    function T(n, t) {
      return n
        ? e(n.children).filter(function (n) {
            return O(n, t);
          })
        : [];
    }
    function D(n, t) {
      return t ? T(n, t)[0] : n.firstElementChild;
    }
    function c(n, t) {
      if (n)
        for (var i = Object.keys(n), r = 0; r < i.length; r++) {
          var u = i[r];
          if ("__proto__" !== u && !1 === t(n[u], u)) break;
        }
      return n;
    }
    function F(r) {
      return (
        e(arguments, 1).forEach(function (i) {
          c(i, function (n, t) {
            r[t] = i[t];
          });
        }),
        r
      );
    }
    function l(i, n) {
      return (
        c(n, function (n, t) {
          r(n)
            ? (i[t] = n.slice())
            : x(n)
            ? (i[t] = l(x(i[t]) ? i[t] : {}, n))
            : (i[t] = n);
        }),
        i
      );
    }
    function I(t, n) {
      t &&
        b(n, function (n) {
          t.removeAttribute(n);
        });
    }
    function j(i, n, t) {
      x(n)
        ? c(n, function (n, t) {
            j(i, t, n);
          })
        : u(t)
        ? I(i, n)
        : i.setAttribute(n, String(t));
    }
    function C(n, t, i) {
      n = document.createElement(n);
      return t && (z(t) ? S : j)(n, t), i && P(i, n), n;
    }
    function W(i, n) {
      if (z(n)) return getComputedStyle(i)[n];
      c(n, function (n, t) {
        u(n) || (i.style[t] = "" + n);
      });
    }
    function B(n, t) {
      W(n, { display: t });
    }
    function p(n, t) {
      return n.getAttribute(t);
    }
    function N(n, t) {
      return n && n.classList.contains(t);
    }
    function X(n) {
      return n.getBoundingClientRect();
    }
    function G(n) {
      b(n, function (n) {
        n && n.parentNode && n.parentNode.removeChild(n);
      });
    }
    function H(n) {
      return D(new DOMParser().parseFromString(n, "text/html").body);
    }
    function Y(n, t) {
      n.preventDefault(),
        t && (n.stopPropagation(), n.stopImmediatePropagation());
    }
    function U(n, t) {
      return n && n.querySelector(t);
    }
    function q(n, t) {
      return e(n.querySelectorAll(t));
    }
    function J(n, t) {
      L(n, t, !1);
    }
    function K(n) {
      return z(n) ? n : n ? n + "px" : "";
    }
    function V(n, t) {
      if ((void 0 === t && (t = ""), !n)) throw new Error("[" + m + "] " + t);
    }
    function f(n) {
      setTimeout(n);
    }
    function Q() {}
    function v(n) {
      return requestAnimationFrame(n);
    }
    var Z = Math.min,
      $ = Math.max,
      nn = Math.floor,
      tn = Math.ceil,
      rn = Math.abs;
    function un(n, t, i, r) {
      var u = Z(t, i),
        i = $(t, i);
      return r ? u < n && n < i : u <= n && n <= i;
    }
    function on(n, t, i) {
      var r = Z(t, i),
        i = $(t, i);
      return Z($(r, n), i);
    }
    function en(n) {
      return (0 < n) - (n < 0);
    }
    function cn(t, n) {
      return (
        b(n, function (n) {
          t = t.replace("%s", "" + n);
        }),
        t
      );
    }
    function fn(n) {
      return n < 10 ? "0" + n : "" + n;
    }
    var an = {};
    function d() {
      var o = {};
      function r(n, r) {
        t(n, function (n, t) {
          var i = o[n];
          o[n] =
            i &&
            i.filter(function (n) {
              return n.n ? n.n !== r : r || n.t !== t;
            });
        });
      }
      function t(n, t) {
        w(n)
          .join(" ")
          .split(" ")
          .forEach(function (n) {
            n = n.split(".");
            t(n[0], n[1]);
          });
      }
      return {
        on: function (n, i, r, u) {
          void 0 === u && (u = E),
            t(n, function (n, t) {
              (o[n] = o[n] || []),
                A(o[n], { i: n, r: i, t: t, u: u, n: r }).sort(function (n, t) {
                  return n.u - t.u;
                });
            });
        },
        off: r,
        offBy: function (i) {
          c(o, function (n, t) {
            r(t, i);
          });
        },
        emit: function (n) {
          var t = arguments;
          (o[n] || []).forEach(function (n) {
            n.r.apply(n, e(t, 1));
          });
        },
        destroy: function () {
          o = {};
        },
      };
    }
    var sn = "mounted",
      ln = "move",
      dn = "moved",
      vn = "click",
      hn = "active",
      pn = "inactive",
      gn = "visible",
      mn = "hidden",
      yn = "slide:keydown",
      wn = "refresh",
      _n = "updated",
      bn = "resize",
      xn = "resized",
      kn = "repositioned",
      An = "scrolled",
      h = "destroy",
      g = "lazyload:loaded";
    function Ln(n) {
      var r = n.event,
        u = {},
        o = [];
      function t(n, t, r) {
        e(n, t, function (t, i) {
          o = o.filter(function (n) {
            return (
              !!(n[0] !== t || n[1] !== i || (r && n[2] !== r)) ||
              (t.removeEventListener(i, n[2], n[3]), !1)
            );
          });
        });
      }
      function e(n, t, i) {
        b(n, function (n) {
          n && t.split(" ").forEach(i.bind(null, n));
        });
      }
      function i() {
        (o = o.filter(function (n) {
          return t(n[0], n[1]);
        })),
          r.offBy(u);
      }
      return (
        r.on(h, i, u),
        {
          on: function (n, t, i) {
            r.on(n, t, u, i);
          },
          off: function (n) {
            r.off(n, u);
          },
          emit: r.emit,
          bind: function (n, t, i, r) {
            e(n, t, function (n, t) {
              o.push([n, t, i, r]), n.addEventListener(t, i, r);
            });
          },
          unbind: t,
          destroy: i,
        }
      );
    }
    function Sn(t, i, r, u) {
      var o,
        n,
        e = Date.now,
        c = 0,
        f = !0,
        a = 0;
      function s() {
        if (!f) {
          var n = e() - o;
          if (
            (t <= n ? ((c = 1), (o = e())) : (c = n / t),
            r && r(c),
            1 === c && (i(), u && ++a >= u))
          )
            return l();
          v(s);
        }
      }
      function l() {
        f = !0;
      }
      function d() {
        cancelAnimationFrame(n), (f = !(n = c = 0));
      }
      return {
        start: function (n) {
          n || d(), (o = e() - (n ? c * t : 0)), (f = !1), v(s);
        },
        rewind: function () {
          (o = e()), (c = 0), r && r(c);
        },
        pause: l,
        cancel: d,
        isPaused: function () {
          return f;
        },
      };
    }
    function En(n) {
      var t = n;
      return {
        set: function (n) {
          t = n;
        },
        is: function (n) {
          return k(w(n), t);
        },
      };
    }
    function zn(i, r) {
      var u;
      return function () {
        var n = arguments,
          t = this;
        u ||
          (u = Sn(
            r || 0,
            function () {
              i.apply(t, n), (u = null);
            },
            null,
            1
          )).start();
      };
    }
    var Rn = {
      marginRight: ["marginBottom", "marginLeft"],
      autoWidth: ["autoHeight"],
      fixedWidth: ["fixedHeight"],
      paddingLeft: ["paddingTop", "paddingRight"],
      paddingRight: ["paddingBottom", "paddingLeft"],
      width: ["height"],
      left: ["top", "right"],
      right: ["bottom", "left"],
      x: ["y"],
      X: ["Y"],
      Y: ["X"],
      ArrowLeft: ["ArrowUp", "ArrowRight"],
      ArrowRight: ["ArrowDown", "ArrowLeft"],
    };
    var Pn = m,
      Mn = m + "__slider",
      On = m + "__track",
      Tn = m + "__list",
      Dn = m + "__slide",
      Fn = Dn + "--clone",
      In = Dn + "__container",
      jn = m + "__arrows",
      t = m + "__arrow",
      Cn = t + "--prev",
      Wn = t + "--next",
      i = m + "__pagination",
      Bn = m + "__progress",
      Nn = Bn + "__bar",
      Xn = m + "__autoplay",
      Gn = m + "__play",
      Hn = m + "__pause",
      Yn = "is-active",
      Un = "is-prev",
      qn = "is-next",
      Jn = "is-visible",
      Kn = "is-loading",
      Vn = [Yn, Jn, Un, qn, Kn];
    var Qn = "role",
      Zn = "aria-controls",
      $n = "aria-current",
      nt = "aria-label",
      tt = "aria-hidden",
      it = "tabindex",
      rt = "aria-orientation",
      ut = [Qn, Zn, $n, nt, tt, rt, it, "disabled"],
      ot = "slide",
      et = "loop",
      ct = "fade";
    function ft(u, r, i, o) {
      var e,
        n = Ln(u),
        c = n.on,
        f = n.emit,
        a = n.bind,
        t = n.destroy,
        s = u.Components,
        l = u.root,
        d = u.options,
        v = d.isNavigation,
        h = d.updateOnMove,
        p = s.Direction.resolve,
        g = -1 < i,
        m = D(o, "." + In),
        y = d.focusableNodes && q(o, d.focusableNodes);
      function w() {
        var n;
        e ||
          ((n = u.index),
          _.call(this, b()),
          function (n) {
            var t = !n && !b();
            j(o, tt, t || null),
              j(o, it, !t && d.slideFocus ? 0 : null),
              y &&
                y.forEach(function (n) {
                  j(n, it, t ? -1 : null);
                });
            n !== N(o, Jn) && (L(o, Jn, n), f(n ? gn : mn, this));
          }.call(
            this,
            (function () {
              if (u.is(ct)) return b();
              var n = X(s.Elements.track),
                t = X(o),
                i = p("left"),
                r = p("right");
              return nn(n[i]) <= tn(t[i]) && nn(t[r]) <= tn(n[r]);
            })()
          ),
          L(o, Un, r === n - 1),
          L(o, qn, r === n + 1));
      }
      function _(n) {
        n !== N(o, Yn) &&
          (L(o, Yn, n), v && j(o, $n, n || null), f(n ? hn : pn, this));
      }
      function b() {
        return u.index === r;
      }
      return {
        index: r,
        slideIndex: i,
        slide: o,
        container: m,
        isClone: g,
        mount: function () {
          var t = this;
          !(function () {
            g || (o.id = l.id + "-slide" + fn(r + 1));
            {
              var n, t;
              v &&
                ((t = g ? i : r),
                (n = cn(d.i18n.slideX, t + 1)),
                (t = u.splides
                  .map(function (n) {
                    return n.root.id;
                  })
                  .join(" ")),
                j(o, nt, n),
                j(o, Zn, t),
                j(o, Qn, "menuitem"));
            }
          })(),
            a(o, "click keydown", function (n) {
              f("click" === n.type ? vn : yn, t, n);
            }),
            c([wn, kn, dn, An], w.bind(this)),
            h &&
              c(
                ln,
                function (n, t, i) {
                  e || (w.call(this), i === r && _.call(this, !0));
                }.bind(this)
              );
        },
        destroy: function () {
          (e = !0), t(), J(o, Vn), I(o, ut);
        },
        rule: function (n, t, i) {
          (i = "#" + o.id + (m && i ? " > ." + In : "")), s.Style.rule(i, n, t);
        },
        isWithin: function (n, t) {
          return (
            (n = rn(n - r)), (n = !u.is(ot) && !g ? Z(n, u.length - n) : n) <= t
          );
        },
      };
    }
    var at = "touchmove mousemove",
      st = "touchend touchcancel mouseup";
    var lt = ["Left", "Right", "Up", "Down"];
    var dt = a + "-lazy",
      vt = dt + "-srcset",
      ht = "[" + dt + "], [" + vt + "]";
    var pt = [" ", "Enter", "Spacebar"];
    var gt = Object.freeze({
        __proto__: null,
        Options: function (t, n, r) {
          var u,
            o,
            i,
            e = zn(f);
          function c(n) {
            n && removeEventListener("resize", e);
          }
          function f() {
            var n =
              s(o, function (n) {
                return n[1].matches;
              }) || [];
            n[0] !== i &&
              (function (n) {
                n = r.breakpoints[n] || u;
                n.destroy
                  ? ((t.options = u), t.destroy("completely" === n.destroy))
                  : (t.state.is(5) && (c(!0), t.mount()), (t.options = n));
              })((i = n[0]));
          }
          return {
            setup: function () {
              try {
                l(r, JSON.parse(p(t.root, a)));
              } catch (n) {
                V(!1, n.message);
              }
              u = l({}, r);
              var i,
                n = r.breakpoints;
              n &&
                ((i = "min" === r.mediaQuery),
                (o = Object.keys(n)
                  .sort(function (n, t) {
                    return i ? +t - +n : +n - +t;
                  })
                  .map(function (n) {
                    return [
                      n,
                      matchMedia(
                        "(" + (i ? "min" : "max") + "-width:" + n + "px)"
                      ),
                    ];
                  })),
                f());
            },
            mount: function () {
              o && addEventListener("resize", e);
            },
            destroy: c,
          };
        },
        Direction: function (n, t, r) {
          return {
            resolve: function (n, t) {
              var i = r.direction;
              return Rn[n]["rtl" !== i || t ? ("ttb" === i ? 0 : -1) : 1] || n;
            },
            orient: function (n) {
              return n * ("rtl" === r.direction ? 1 : -1);
            },
          };
        },
        Elements: function (n, t, i) {
          var r,
            u,
            o,
            e,
            c = Ln(n).on,
            f = n.root,
            a = {},
            s = [];
          function l() {
            var n;
            !(function () {
              (u = D(f, "." + Mn)),
                (o = U(f, "." + On)),
                (e = D(o, "." + Tn)),
                V(o && e, "A track/list element is missing."),
                A(s, T(e, "." + Dn + ":not(." + Fn + ")"));
              var n = p("." + Xn),
                t = p("." + jn);
              F(a, {
                root: f,
                slider: u,
                track: o,
                list: e,
                slides: s,
                arrows: t,
                autoplay: n,
                prev: U(t, "." + Cn),
                next: U(t, "." + Wn),
                bar: U(p("." + Bn), "." + Nn),
                play: U(n, "." + Gn),
                pause: U(n, "." + Hn),
              });
            })(),
              (n =
                f.id ||
                (function (n) {
                  return "" + n + fn((an[n] = (an[n] || 0) + 1));
                })(m)),
              (f.id = n),
              (o.id = o.id || n + "-track"),
              (e.id = e.id || n + "-list"),
              S(f, (r = g()));
          }
          function d() {
            _(s), J(f, r);
          }
          function v() {
            d(), l();
          }
          function h() {
            J(f, r), S(f, (r = g()));
          }
          function p(n) {
            return D(f, n) || D(u, n);
          }
          function g() {
            return [
              Pn + "--" + i.type,
              Pn + "--" + i.direction,
              i.drag && Pn + "--draggable",
              i.isNavigation && Pn + "--nav",
              Yn,
            ];
          }
          return F(a, {
            setup: l,
            mount: function () {
              c(wn, v, E - 2), c(_n, h);
            },
            destroy: d,
          });
        },
        Style: function () {
          var n, u;
          function r(t, n, i) {
            var r = u.cssRules,
              r =
                s(r, function (n) {
                  return o(n) && n.selectorText === t;
                }) || r[u.insertRule(t + "{}", 0)];
            !o(r) || ((r = r.style)[n] !== (i = "" + i) && (r[n] = i));
          }
          function o(n) {
            return n instanceof CSSStyleRule;
          }
          return {
            mount: function () {
              (n = C("style", {}, document.head)), (u = n.sheet);
            },
            destroy: function () {
              G(n), (u = null);
            },
            rule: r,
            ruleBy: function (n, t, i) {
              r("#" + (y(n) ? n.id : n), t, i);
            },
          };
        },
        Slides: function (r, u, o) {
          var n = Ln(r),
            t = n.on,
            e = n.emit,
            c = n.bind,
            f = (n = u.Elements).slides,
            a = n.list,
            s = [];
          function i() {
            f.forEach(function (n, t) {
              v(n, t, -1);
            });
          }
          function l() {
            p(function (n) {
              n.destroy();
            }),
              _(s);
          }
          function d() {
            l(), i();
          }
          function v(n, t, i) {
            n = ft(r, t, i, n);
            n.mount(), s.push(n);
          }
          function h(n) {
            return n
              ? g(function (n) {
                  return !n.isClone;
                })
              : s;
          }
          function p(n, t) {
            h(t).forEach(n);
          }
          function g(t) {
            return s.filter(
              "function" == typeof t
                ? t
                : function (n) {
                    return z(t) ? O(n.slide, t) : k(w(t), n.index);
                  }
            );
          }
          return {
            mount: function () {
              i(), t(wn, d);
            },
            destroy: l,
            register: v,
            get: h,
            getIn: function (n) {
              var t = u.Controller,
                i = t.toIndex(n),
                r = t.hasFocus() ? 1 : o.perPage;
              return g(function (n) {
                return un(n.index, i, i + r - 1);
              });
            },
            getAt: function (n) {
              return g(n)[0];
            },
            add: function (n, u) {
              b(n, function (n) {
                var t, i, r;
                y((n = z(n) ? H(n) : n)) &&
                  ((t = f[u]) ? M(n, t) : P(a, n),
                  S(n, o.classes.slide),
                  (n = n),
                  (i = e.bind(null, bn)),
                  (n = q(n, "img")),
                  (r = n.length)
                    ? n.forEach(function (n) {
                        c(n, "load error", function () {
                          --r || i();
                        });
                      })
                    : i());
              }),
                e(wn);
            },
            remove: function (n) {
              G(
                g(n).map(function (n) {
                  return n.slide;
                })
              ),
                e(wn);
            },
            forEach: p,
            filter: g,
            rule: function (t, i, r) {
              p(function (n) {
                n.rule(t, i, r);
              });
            },
            getLength: function (n) {
              return (n ? f : s).length;
            },
            isEnough: function () {
              return s.length > o.perPage;
            },
          };
        },
        Clones: function (c, n, f) {
          var t,
            i = Ln(c),
            r = i.on,
            u = i.emit,
            a = n.Elements,
            s = n.Slides,
            o = n.Direction.resolve,
            l = [];
          function e() {
            (t = p()) &&
              (function (u) {
                var o = s.get().slice(),
                  e = o.length;
                if (e) {
                  for (; o.length < u; ) A(o, o);
                  A(o.slice(-u), o.slice(0, u)).forEach(function (n, t) {
                    var i = t < u,
                      r = (function (n, t) {
                        n = n.cloneNode(!0);
                        return (
                          S(n, f.classes.clone),
                          (n.id = c.root.id + "-clone" + fn(t + 1)),
                          n
                        );
                      })(n.slide, t);
                    i ? M(r, o[0].slide) : P(a.list, r),
                      A(l, r),
                      s.register(r, t - u + (i ? 0 : e), n.index);
                  });
                }
              })(t);
          }
          function d() {
            G(l), _(l);
          }
          function v() {
            d(), e();
          }
          function h() {
            t !== p() && u(wn);
          }
          function p() {
            var n,
              t,
              i = f.clones;
            return (
              c.is(et)
                ? i ||
                  ((n = a.list),
                  z((t = f[o("fixedWidth")])) &&
                    ((t = X(
                      (n = C(
                        "div",
                        { style: "width: " + t + "; position: absolute;" },
                        n
                      ))
                    ).width),
                    G(n)),
                  (i =
                    (((t = t) && tn(X(a.track)[o("width")] / t)) ||
                      (f[o("autoWidth")] && c.length) ||
                      f.perPage) * (f.drag ? (f.flickMaxPages || 1) + 1 : 2)))
                : (i = 0),
              i
            );
          }
          return {
            mount: function () {
              e(), r(wn, v), r([_n, bn], h);
            },
            destroy: d,
          };
        },
        Layout: function (n, t, i) {
          var r,
            u = Ln(n),
            o = u.on,
            e = u.bind,
            c = u.emit,
            f = t.Slides,
            a = t.Style.ruleBy,
            s = t.Direction.resolve,
            l = (t = t.Elements).track,
            d = t.list,
            v = f.getAt;
          function h() {
            (r = "ttb" === i.direction),
              a(n.root, "maxWidth", K(i.width)),
              a(l, s("paddingLeft"), m(!1)),
              a(l, s("paddingRight"), m(!0)),
              f.rule(s("marginRight"), K(i.gap)),
              f.rule(
                "width",
                i.autoWidth ? "" : K(i.fixedWidth) || (r ? "" : w())
              ),
              g(),
              p();
          }
          function p() {
            a(
              l,
              "height",
              (function () {
                var n = "";
                r &&
                  (V((n = y()), "height or heightRatio is missing."),
                  (n = "calc(" + n + " - " + m(!1) + " - " + m(!0) + ")"));
                return n;
              })()
            ),
              i.heightRatio && g(),
              c(xn);
          }
          function g() {
            f.rule(
              "height",
              K(i.fixedHeight) || (r ? (i.autoHeight ? "" : w()) : y()),
              !0
            );
          }
          function m(n) {
            var t = i.padding,
              n = s(n ? "right" : "left", !0);
            return (t && K(t[n] || (x(t) ? 0 : t))) || "0px";
          }
          function y() {
            return K(i.height || X(d).width * i.heightRatio);
          }
          function w() {
            var n = K(i.gap);
            return (
              "calc((100%" +
              (n && " + " + n) +
              ")/" +
              (i.perPage || 1) +
              (n && " - " + n) +
              ")"
            );
          }
          function _(n, t) {
            var i = v(n);
            if (i) {
              (n = X(i.slide)[s("right")]), (i = X(d)[s("left")]);
              return rn(n - i) + (t ? 0 : b());
            }
            return 0;
          }
          function b() {
            var n = v(0);
            return (n && parseFloat(W(n.slide, s("marginRight")))) || 0;
          }
          return {
            mount: function () {
              h(),
                e(window, "resize load", zn(c.bind(this, bn))),
                o([_n, wn], h),
                o(bn, p);
            },
            listSize: function () {
              return X(d)[s("width")];
            },
            slideSize: function (n, t) {
              return (n = v(n || 0))
                ? X(n.slide)[s("width")] + (t ? 0 : b())
                : 0;
            },
            sliderSize: function () {
              return _(n.length - 1, !0) - _(-1, !0);
            },
            totalSize: _,
            getPadding: function (n) {
              return (
                parseFloat(W(l, s("padding" + (n ? "Right" : "Left"), !0))) || 0
              );
            },
          };
        },
        Move: function (c, f, a) {
          var s,
            n = Ln(c),
            t = n.on,
            l = n.emit,
            r = (n = f.Layout).slideSize,
            i = n.getPadding,
            u = n.totalSize,
            o = n.listSize,
            e = n.sliderSize,
            d = (n = f.Direction).resolve,
            v = n.orient,
            h = (n = f.Elements).list,
            p = n.track;
          function g() {
            f.Scroll.cancel(), m(c.index), l(kn);
          }
          function m(n) {
            y(w(n, !0));
          }
          function y(n, t) {
            c.is(ct) ||
              (h.style.transform =
                "translate" +
                d("X") +
                "(" +
                (t
                  ? n
                  : (function (n) {
                      {
                        var t, i;
                        !s &&
                          c.is(et) &&
                          ((i = v(n - _())),
                          (t = k(!1, n) && i < 0),
                          (i = k(!0, n) && 0 < i),
                          (t || i) &&
                            ((t = n - b(i)),
                            (i = e()),
                            (n -= en(t) * i * tn(rn(t) / i))));
                      }
                      return n;
                    })(n)) +
                "px)");
          }
          function w(n, t) {
            var i,
              i = v(
                u(n - 1) -
                  ((i = n),
                  "center" === (n = a.focus)
                    ? (o() - r(i, !0)) / 2
                    : +n * r(i) || 0)
              );
            return t
              ? (function (n) {
                  a.trimSpace && c.is(ot) && (n = on(n, 0, v(e() - o())));
                  return n;
                })(i)
              : i;
          }
          function _() {
            var n = d("left");
            return X(h)[n] - X(p)[n] + v(i(!1));
          }
          function b(n) {
            return w(n ? f.Controller.getEnd() : 0, !!a.trimSpace);
          }
          function x() {
            return !!s;
          }
          function k(n, t) {
            t = R(t) ? _() : t;
            var i = !0 !== n && v(t) < v(b(!1)),
              t = !1 !== n && v(t) > v(b(!0));
            return i || t;
          }
          return {
            mount: function () {
              t([sn, xn, _n, wn], g);
            },
            destroy: function () {
              I(h, "style");
            },
            move: function (n, t, i, r) {
              var u, o, e;
              s ||
                ((u = c.state.set),
                (o = _()),
                (s = (e = n !== t) || a.waitForTransition),
                u(4),
                l(ln, t, i, n),
                f.Transition.start(n, function () {
                  e && m(t),
                    (s = !1),
                    u(3),
                    l(dn, t, i, n),
                    "move" === a.trimSpace && n !== i && o === _()
                      ? f.Controller.go(i < n ? ">" : "<", !1, r)
                      : r && r();
                }));
            },
            jump: m,
            translate: y,
            cancel: function () {
              (s = !1), y(_()), f.Transition.cancel();
            },
            toIndex: function (n) {
              for (
                var t = f.Slides.get(), i = 0, r = 1 / 0, u = 0;
                u < t.length;
                u++
              ) {
                var o = t[u].index,
                  e = rn(w(o, !0) - n);
                if (!(e <= r)) break;
                (r = e), (i = o);
              }
              return i;
            },
            toPosition: w,
            getPosition: _,
            getLimit: b,
            isBusy: x,
            exceededLimit: k,
          };
        },
        Controller: function (e, n, u) {
          var o,
            c,
            f,
            t = Ln(e).on,
            a = n.Move,
            s = a.getPosition,
            l = a.getLimit,
            d = (n = n.Slides).isEnough,
            i = n.getLength,
            v = e.is(et),
            h = u.start || 0,
            p = h;
          function r() {
            (o = i(!0)),
              (c = u.perMove),
              (f = u.perPage),
              (h = on(h, 0, o - 1));
          }
          function g() {
            L(a.toIndex(s()));
          }
          function m(n) {
            return w(!1, n);
          }
          function y(n) {
            return w(!0, n);
          }
          function w(n, t) {
            var i,
              r,
              u = c || S() ? 1 : f,
              o = _(h + u * (n ? -1 : 1), h);
            return -1 !== o ||
              !e.is(ot) ||
              ((i = s()), (r = l(!n)), (u = 1), rn(i - r) < u)
              ? t
                ? o
                : x(o)
              : n
              ? 0
              : b();
          }
          function _(n, t, i) {
            var r;
            return (
              d()
                ? ((r = b()),
                  n < 0 || r < n
                    ? (n =
                        un(0, n, t, !0) || un(r, t, n, !0)
                          ? k(A(n))
                          : v
                          ? c
                            ? n
                            : n < 0
                            ? -(o % f || f)
                            : o
                          : u.rewind
                          ? n < 0
                            ? r
                            : 0
                          : -1)
                    : v ||
                      i ||
                      n === t ||
                      (n = c ? n : k(A(t) + (n < t ? -1 : 1))))
                : (n = -1),
              n
            );
          }
          function b() {
            var n = o - f;
            return (S() || (v && c)) && (n = o - 1), $(n, 0);
          }
          function x(n) {
            return v ? (d() ? (n % o) + (n < 0 ? o : 0) : -1) : n;
          }
          function k(n) {
            return on(S() ? n : f * n, 0, b());
          }
          function A(n) {
            return (
              S() || ((n = un(n, o - f, o - 1) ? o - 1 : n), (n = nn(n / f))), n
            );
          }
          function L(n) {
            n !== h && ((p = h), (h = n));
          }
          function S() {
            return !R(u.focus) || u.isNavigation;
          }
          return {
            mount: function () {
              r(), t([_n, wn], r, E - 1), t(An, g, 0);
            },
            go: function (n, t, i) {
              var r = (function (n) {
                var t = h;
                {
                  var i, r;
                  z(n)
                    ? ((r = n.match(/([+\-<>])(\d+)?/) || []),
                      (i = r[1]),
                      (r = r[2]),
                      "+" === i || "-" === i
                        ? (t = _(h + +("" + i + (+r || 1)), h, !0))
                        : ">" === i
                        ? (t = r ? k(+r) : m(!0))
                        : "<" === i && (t = y(!0)))
                    : (t = v ? on(n, -f, o + f - 1) : on(n, 0, b()));
                }
                return t;
              })(n);
              -1 < (n = x(r)) &&
                !a.isBusy() &&
                (t || n !== h) &&
                (L(n), a.move(r, n, p, i));
            },
            getNext: m,
            getPrev: y,
            getEnd: b,
            setIndex: L,
            getIndex: function (n) {
              return n ? p : h;
            },
            toIndex: k,
            toPage: A,
            hasFocus: S,
          };
        },
        Arrows: function (u, n, i) {
          var r,
            t = Ln(u),
            o = t.on,
            e = t.bind,
            c = t.emit,
            f = i.classes,
            a = i.i18n,
            s = n.Elements,
            l = n.Controller,
            d = s.arrows,
            v = s.prev,
            h = s.next,
            p = {};
          function g() {
            var n, t;
            i.arrows &&
              ((v && h) ||
                ((d = C("div", f.arrows)),
                (v = m(!0)),
                (h = m(!1)),
                (r = !0),
                P(d, [v, h]),
                M(d, D(("slider" === i.arrows && s.slider) || u.root)))),
              v &&
                h &&
                (p.prev
                  ? B(d, !1 === i.arrows ? "none" : "")
                  : ((n = s.track.id),
                    j(v, Zn, n),
                    j(h, Zn, n),
                    (p.prev = v),
                    (p.next = h),
                    (t = l.go),
                    o([sn, dn, _n, wn, An], y),
                    e(h, "click", function () {
                      t(">", !0);
                    }),
                    e(v, "click", function () {
                      t("<", !0);
                    }),
                    c("arrows:mounted", v, h)));
          }
          function m(n) {
            return H(
              '<button class="' +
                f.arrow +
                " " +
                (n ? f.prev : f.next) +
                '" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d="' +
                (i.arrowPath ||
                  "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z") +
                '" />'
            );
          }
          function y() {
            var n = u.index,
              t = l.getPrev(),
              i = l.getNext(),
              r = -1 < t && n < t ? a.last : a.prev,
              n = -1 < i && i < n ? a.first : a.next;
            (v.disabled = t < 0),
              (h.disabled = i < 0),
              j(v, nt, r),
              j(h, nt, n),
              c("arrows:updated", v, h, t, i);
          }
          return {
            arrows: p,
            mount: function () {
              g(), o(_n, g);
            },
            destroy: function () {
              r ? G(d) : (I(v, ut), I(h, ut));
            },
          };
        },
        Autoplay: function (n, t, r) {
          var i,
            u,
            o,
            e = Ln(n),
            c = e.on,
            f = e.bind,
            a = e.emit,
            s = t.Elements,
            l = Sn(r.interval, n.go.bind(n, ">"), function (n) {
              var t = s.bar;
              t && W(t, { width: 100 * n + "%" });
              a("autoplay:playing", n);
            }),
            d = l.isPaused;
          function v(n) {
            var t = n ? "pause" : "play",
              i = s[t];
            i &&
              (j(i, Zn, s.track.id),
              j(i, nt, r.i18n[t]),
              f(i, "click", n ? p : h));
          }
          function h() {
            d() &&
              t.Slides.isEnough() &&
              (l.start(!r.resetProgress), (u = i = o = !1), a("autoplay:play"));
          }
          function p(n) {
            void 0 === n && (n = !0),
              d() || (l.pause(), a("autoplay:pause")),
              (o = n);
          }
          function g() {
            o || (i || u ? p(!1) : h());
          }
          return {
            mount: function () {
              var n = r.autoplay;
              n &&
                (v(!0),
                v(!1),
                (function () {
                  var n = s.root;
                  r.pauseOnHover &&
                    f(n, "mouseenter mouseleave", function (n) {
                      (i = "mouseenter" === n.type), g();
                    });
                  r.pauseOnFocus &&
                    f(n, "focusin focusout", function (n) {
                      (u = "focusin" === n.type), g();
                    });
                  c([ln, "scroll", wn], l.rewind);
                })(),
                "pause" !== n && h());
            },
            destroy: l.cancel,
            play: h,
            pause: p,
            isPaused: d,
          };
        },
        Cover: function (n, t, i) {
          var r = Ln(n).on;
          function u(i) {
            t.Slides.forEach(function (n) {
              var t = D(n.container || n.slide, "img");
              t && t.src && o(i, t, n);
            });
          }
          function o(n, t, i) {
            i.rule(
              "background",
              n ? 'center/cover no-repeat url("' + t.src + '")' : "",
              !0
            ),
              B(t, n ? "none" : "");
          }
          return {
            mount: function () {
              i.cover &&
                (r(g, function (n, t) {
                  o(!0, n, t);
                }),
                r([sn, _n, wn], u.bind(null, !0)));
            },
            destroy: function () {
              u(!1);
            },
          };
        },
        Scroll: function (c, n, f) {
          var i,
            t = Ln(c),
            r = t.on,
            a = t.emit,
            s = n.Move,
            l = s.getPosition,
            d = s.getLimit,
            v = s.exceededLimit;
          function h(r, n, u) {
            var t,
              o = l(),
              e = 1;
            (n = n || ((t = rn(r - o)), $(t / 1.5, 800))),
              g(),
              (i = Sn(
                n,
                p,
                function (n) {
                  var t = l(),
                    i =
                      (o +
                        (r - o) *
                          ((i = n),
                          (n = f.easingFunc) ? n(i) : 1 - Math.pow(1 - i, 4)) -
                        l()) *
                      e;
                  s.translate(t + i),
                    c.is(ot) &&
                      !u &&
                      v() &&
                      ((e *= 0.6),
                      rn(i) < 10 && ((i = v(!1)), h(d(!i), 600, !0)));
                },
                1
              )),
              a("scroll"),
              i.start();
          }
          function p() {
            a(An);
          }
          function g() {
            i && i.cancel();
          }
          function u() {
            i && !i.isPaused() && (g(), p());
          }
          return {
            mount: function () {
              r(ln, g), r([_n, wn], u);
            },
            destroy: g,
            scroll: h,
            cancel: u,
          };
        },
        Drag: function (r, u, o) {
          var e,
            c,
            f,
            a,
            s,
            l,
            d,
            i,
            v,
            n = Ln(r),
            t = n.on,
            h = n.emit,
            p = n.bind,
            g = n.unbind,
            m = u.Move,
            y = u.Scroll,
            w = u.Controller,
            _ = u.Elements.track,
            b = (n = u.Direction).resolve,
            x = n.orient,
            k = m.getPosition,
            A = m.exceededLimit,
            L = { passive: !1, capture: !0 },
            S = r.is(ot),
            E = !1;
          function z() {
            var n = o.drag;
            C(!n), (s = "free" === n);
          }
          function R(n) {
            var t;
            i ||
              (!(t = I(n)) && n.button) ||
              (m.isBusy()
                ? Y(n, !0)
                : ((v = t ? _ : window),
                  (a = f = null),
                  (d = !1),
                  p(v, at, P, L),
                  p(v, st, M, L),
                  m.cancel(),
                  y.cancel(),
                  O(n)));
          }
          function P(n) {
            var t, i;
            a || ((d = !0), h("drag")),
              (a = n).cancelable &&
                (l
                  ? ((t = 200 < j(n) - j(c)),
                    (i = E !== (E = A())),
                    (t || i) && O(n),
                    m.translate(e + (F(n) - F(c)) / (E && S ? 5 : 1)),
                    h("dragging"),
                    Y(n))
                  : ((i = o.dragMinThreshold || 10),
                    (l = !I(n) || rn(F(n) - F(c)) > i),
                    D() && Y(n)));
          }
          function M(n) {
            var t, i;
            g(v, at, P),
              g(v, st, M),
              a &&
                ((l || (n.cancelable && D())) &&
                  ((t = (function (n) {
                    if (r.is(et) || !E) {
                      var t = (c === a && f) || c,
                        i = F(a) - F(t),
                        t = j(n) - j(t),
                        n = j(n) - j(a) < 200;
                      if (t && n) return i / t;
                    }
                    return 0;
                  })(n)),
                  (i = t),
                  (i =
                    k() +
                    en(i) *
                      Z(
                        rn(i) * (o.flickPower || 600),
                        s ? 1 / 0 : u.Layout.listSize() * (o.flickMaxPages || 1)
                      )),
                  s
                    ? y.scroll(i)
                    : r.is(ct)
                    ? w.go(r.index + x(en(t)))
                    : w.go(
                        (function (n) {
                          n = m.toIndex(n);
                          return S ? on(n, 0, w.getEnd()) : n;
                        })(i),
                        !0
                      ),
                  Y(n)),
                h("dragged")),
              (l = !1);
          }
          function O(n) {
            (f = c), (c = n), (e = k());
          }
          function T(n) {
            !i && d && Y(n, !0);
          }
          function D() {
            var n = rn(F(a) - F(c));
            return rn(F(a, !0) - F(c, !0)) < n;
          }
          function F(n, t) {
            return (I(n) ? n.touches[0] : n)["page" + b(t ? "Y" : "X")];
          }
          function I(n) {
            return "undefined" != typeof TouchEvent && n instanceof TouchEvent;
          }
          function j(n) {
            return n.timeStamp;
          }
          function C(n) {
            i = n;
          }
          return {
            mount: function () {
              p(_, at, Q, L),
                p(_, st, Q, L),
                p(_, "touchstart mousedown", R, L),
                p(_, "click", T, { capture: !0 }),
                t([sn, _n], z);
            },
            disable: C,
          };
        },
        Keyboard: function (t, n, i) {
          var r,
            u = Ln(t),
            o = u.on,
            e = u.bind,
            c = u.unbind,
            f = n.Elements.root,
            a = n.Direction.resolve;
          function s() {
            var n = i.keyboard,
              n = void 0 === n ? "global" : n;
            n &&
              ("focused" === n ? j((r = f), it, 0) : (r = window),
              e(r, "keydown", d));
          }
          function l() {
            c(r, "keydown"), y(r) && I(r, it);
          }
          function d(n) {
            (n = n.key), (n = k(lt, n) ? "Arrow" + n : n);
            n === a("ArrowLeft")
              ? t.go("<")
              : n === a("ArrowRight") && t.go(">");
          }
          return {
            mount: function () {
              s(),
                o(_n, function () {
                  l(), s();
                });
            },
            destroy: l,
          };
        },
        LazyLoad: function (t, n, o) {
          var i = Ln(t),
            r = i.on,
            u = i.off,
            e = i.bind,
            c = i.emit,
            f = "sequential" === o.lazyLoad,
            a = [],
            s = 0;
          function l() {
            (s = 0), (a = []);
          }
          function d() {
            (a = a.filter(function (n) {
              return (
                !n.o.isWithin(
                  t.index,
                  o.perPage * ((o.preloadPages || 1) + 1)
                ) || v(n)
              );
            })).length || u(dn);
          }
          function v(t) {
            var i = t.e;
            S(t.o.slide, Kn),
              e(i, "load error", function (n) {
                !(function (n, t) {
                  var i = n.o;
                  J(i.slide, Kn),
                    t || (G(n.c), B(n.e, ""), c(g, n.e, i), c(bn));
                  f && h();
                })(t, "error" === n.type);
              }),
              ["src", "srcset"].forEach(function (n) {
                t[n] && (j(i, n, t[n]), I(i, "src" === n ? dt : vt));
              });
          }
          function h() {
            s < a.length && v(a[s++]);
          }
          return {
            mount: function () {
              o.lazyLoad &&
                (r([sn, wn], function () {
                  l(),
                    n.Slides.forEach(function (u) {
                      q(u.slide, ht).forEach(function (n) {
                        var t,
                          i = p(n, dt),
                          r = p(n, vt);
                        (i === n.src && r === n.srcset) ||
                          (j(
                            (t = C("span", o.classes.spinner, n.parentElement)),
                            Qn,
                            "presentation"
                          ),
                          a.push({ e: n, o: u, src: i, srcset: r, c: t }),
                          B(n, "none"));
                      });
                    }),
                    f && h();
                }),
                f || r([sn, wn, dn], d));
            },
            destroy: l,
          };
        },
        Pagination: function (l, n, d) {
          var v,
            t = Ln(l),
            i = t.on,
            r = t.emit,
            h = t.bind,
            u = t.unbind,
            p = n.Slides,
            g = n.Elements,
            o = n.Controller,
            m = o.hasFocus,
            e = o.getIndex,
            y = [];
          function c() {
            f(),
              d.pagination &&
                p.isEnough() &&
                ((function () {
                  var n = l.length,
                    t = d.classes,
                    i = d.i18n,
                    r = d.perPage,
                    u = ("slider" === d.pagination && g.slider) || g.root,
                    o = m() ? n : tn(n / r);
                  v = C("ul", t.pagination, u);
                  for (var e = 0; e < o; e++) {
                    var c = C("li", null, v),
                      f = C("button", { class: t.page, type: "button" }, c),
                      a = p.getIn(e).map(function (n) {
                        return n.slide.id;
                      }),
                      s = !m() && 1 < r ? i.pageX : i.slideX;
                    h(f, "click", w.bind(null, e)),
                      j(f, Zn, a.join(" ")),
                      j(f, nt, cn(s, e + 1)),
                      y.push({ li: c, button: f, page: e });
                  }
                })(),
                r("pagination:mounted", { list: v, items: y }, a(l.index)),
                s());
          }
          function f() {
            v &&
              (G(v),
              y.forEach(function (n) {
                u(n.button, "click");
              }),
              _(y),
              (v = null));
          }
          function w(t) {
            o.go(">" + t, !0, function () {
              var n = p.getAt(o.toIndex(t));
              n && n.slide.focus();
            });
          }
          function a(n) {
            return y[o.toPage(n)];
          }
          function s() {
            var n = a(e(!0)),
              t = a(e());
            n && (J(n.button, Yn), I(n.button, $n)),
              t && (S(t.button, Yn), j(t.button, $n, !0)),
              r("pagination:updated", { list: v, items: y }, n, t);
          }
          return {
            items: y,
            mount: function () {
              c(), i([_n, wn], c), i([ln, An], s);
            },
            destroy: f,
            getAt: a,
          };
        },
        Sync: function (i, n, r) {
          var u = i.splides,
            e = n.Elements.list;
          function c() {
            j(e, rt, "ttb" !== r.direction ? "horizontal" : null);
          }
          function f(n) {
            i.go(n.index);
          }
          function a(n, t) {
            k(pt, t.key) && (f(n), Y(t));
          }
          return {
            mount: function () {
              var o, n, t;
              r.isNavigation
                ? ((n = Ln(i)),
                  (t = n.on),
                  (n = n.emit),
                  t(vn, f),
                  t(yn, a),
                  t([sn, _n], c),
                  j(e, Qn, "menu"),
                  n("navigation:mounted", i.splides))
                : ((o = []),
                  u.concat(i).forEach(function (r, n, u) {
                    Ln(r).on(ln, function (t, n, i) {
                      u.forEach(function (n) {
                        n === r ||
                          k(o, r) ||
                          (o.push(n), n.go(n.is(et) ? i : t));
                      }),
                        _(o);
                    });
                  }));
            },
            destroy: function () {
              I(e, ut);
            },
          };
        },
        Wheel: function (i, n, t) {
          var r = Ln(i).bind;
          function u(n) {
            var t = n.deltaY;
            t && (i.go(t < 0 ? "<" : ">"), Y(n));
          }
          return {
            mount: function () {
              t.wheel &&
                r(n.Elements.track, "wheel", u, { passive: !1, capture: !0 });
            },
          };
        },
      }),
      mt = {
        type: "slide",
        speed: 400,
        waitForTransition: !0,
        perPage: 1,
        arrows: !0,
        pagination: !0,
        interval: 5e3,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        resetProgress: !0,
        easing: "cubic-bezier(.42,.65,.27,.99)",
        drag: !0,
        direction: "ltr",
        slideFocus: !0,
        trimSpace: !0,
        focusableNodes: "a, button, textarea, input, select, iframe",
        classes: {
          slide: Dn,
          clone: Fn,
          arrows: jn,
          arrow: t,
          prev: Cn,
          next: Wn,
          pagination: i,
          page: i + "__page",
          spinner: m + "__spinner",
        },
        i18n: {
          prev: "Previous slide",
          next: "Next slide",
          first: "Go to first slide",
          last: "Go to last slide",
          slideX: "Go to slide %s",
          pageX: "Go to page %s",
          play: "Start autoplay",
          pause: "Pause autoplay",
        },
      };
    function yt(n, r, t) {
      var i = Ln(n).on,
        u = r.Style.ruleBy;
      return {
        mount: function () {
          i([sn, wn], function () {
            f(function () {
              r.Slides.forEach(function (n) {
                u(
                  n.slide,
                  "transition",
                  "opacity " + t.speed + "ms " + t.easing
                );
              });
            });
          });
        },
        start: function (n, t) {
          var i = r.Elements.track;
          u(i, "height", K(X(i).height)),
            f(function () {
              t(), u(i, "height", "");
            });
        },
        cancel: Q,
      };
    }
    function wt(o, t, e) {
      var c,
        n = Ln(o).bind,
        f = t.Move,
        a = t.Controller,
        i = t.Elements.list;
      function r() {
        s("");
      }
      function s(n) {
        t.Style.ruleBy(i, "transition", n);
      }
      return {
        mount: function () {
          n(i, "transitionend", function (n) {
            n.target === i && c && (r(), c());
          });
        },
        start: function (n, t) {
          var i = f.toPosition(n, !0),
            r = f.getPosition(),
            u = (function (n) {
              var t = e.rewindSpeed;
              if (o.is(ot) && t) {
                var i = a.getIndex(!0),
                  r = a.getEnd();
                if ((0 === i && r <= n) || (r <= i && 0 === n)) return t;
              }
              return e.speed;
            })(n);
          1 <= rn(i - r) && 1 <= u
            ? (s("transform " + u + "ms " + e.easing),
              f.translate(i, !0),
              (c = t))
            : (f.jump(n), t());
        },
        cancel: r,
      };
    }
    i = (function () {
      function i(n, t) {
        (this.event = d()),
          (this.Components = {}),
          (this.state = En(1)),
          (this.splides = []),
          (this.f = {}),
          (this.a = {});
        n = z(n) ? U(document, n) : n;
        V(n, n + " is invalid."),
          (this.root = n),
          l(mt, i.defaults),
          l(l(this.f, mt), t || {});
      }
      var n,
        t,
        r = i.prototype;
      return (
        (r.mount = function (n, t) {
          var i = this,
            r = this.state,
            u = this.Components;
          return (
            V(r.is([1, 5]), "Already mounted!"),
            r.set(1),
            (this.s = u),
            (this.l = t || this.l || (this.is(ct) ? yt : wt)),
            (this.a = n || this.a),
            c(F({}, gt, this.a, { Transition: this.l }), function (n, t) {
              n = n(i, u, i.f);
              (u[t] = n).setup && n.setup();
            }),
            c(u, function (n) {
              n.mount && n.mount();
            }),
            this.emit(sn),
            S(this.root, "is-initialized"),
            r.set(3),
            this.emit("ready"),
            this
          );
        }),
        (r.sync = function (n) {
          return this.splides.push(n), n.splides.push(this), this;
        }),
        (r.go = function (n) {
          return this.s.Controller.go(n), this;
        }),
        (r.on = function (n, t) {
          return this.event.on(n, t, null, 20), this;
        }),
        (r.off = function (n) {
          return this.event.off(n), this;
        }),
        (r.emit = function (n) {
          var t;
          return (
            (t = this.event).emit.apply(t, [n].concat(e(arguments, 1))), this
          );
        }),
        (r.add = function (n, t) {
          return this.s.Slides.add(n, t), this;
        }),
        (r.remove = function (n) {
          return this.s.Slides.remove(n), this;
        }),
        (r.is = function (n) {
          return this.f.type === n;
        }),
        (r.refresh = function () {
          return this.emit(wn), this;
        }),
        (r.destroy = function (t) {
          void 0 === t && (t = !0);
          var n = this.event,
            i = this.state;
          return (
            i.is(1)
              ? n.on("ready", this.destroy.bind(this, t), this)
              : (c(this.s, function (n) {
                  n.destroy && n.destroy(t);
                }),
                n.emit(h),
                n.destroy(),
                _(this.splides),
                i.set(5)),
            this
          );
        }),
        (n = i),
        (r = [
          {
            key: "options",
            get: function () {
              return this.f;
            },
            set: function (n) {
              var t = this.f;
              l(t, n), this.state.is(1) || this.emit(_n, t);
            },
          },
          {
            key: "length",
            get: function () {
              return this.s.Slides.getLength(!0);
            },
          },
          {
            key: "index",
            get: function () {
              return this.s.Controller.getIndex();
            },
          },
        ]) && _t(n.prototype, r),
        t && _t(n, t),
        i
      );
    })();
    return (i.defaults = {}), (i.STATES = n), i;
  }),
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((n = "undefined" != typeof globalThis ? globalThis : n || self).Splide =
        t());
