jQuery(function ($) {

    // isotope w pagination or load more

    var itemSelector = '.filter-item';

    var $container = $('.filter-container').isotope({
        itemSelector: itemSelector
    });

    var itemsPerPageDefault = 9;
    var itemsPerPage = defineItemsPerPage();
    var currentNumberPages = 1;
    var currentPage = 1;
    var currentFilter = '*';
    var filterAtribute = 'data-filter';
    var pageAtribute = 'data-page';
    var pagerClass = 'pagination';
    var showPagination = true;
    var showLoadMore = false;

    function changeFilter(selector) {
        $container.isotope({
            filter: selector
        });
    }

    function goToPage(n, ignoreSetPagination) {

        if (ignoreSetPagination == undefined) {
            setPagination();
        }

        currentPage = n;

        var selector = itemSelector;
        selector += (currentFilter != '*') ? '[' + filterAtribute + '="' + currentFilter + '"]' : '';
        selector += '[' + pageAtribute + '="' + currentPage + '"]';

        changeFilter(selector);
    }

    function defineItemsPerPage() {
        var pages = itemsPerPageDefault;
        return pages;
    }

    function setPagination() {

        var SettingsPagesOnItems = function () {

            var itemsLength = $container.children(itemSelector).length;
            var pages = Math.ceil(itemsLength / itemsPerPage);
            var item = 1;
            var page = 1;
            var selector = itemSelector;
            selector += (currentFilter != '*') ? '[' + filterAtribute + '="' + currentFilter + '"]' : '';

            $container.children(selector).each(function () {
                if (item > itemsPerPage) {
                    page++;
                    item = 1;
                }
                $(this).attr(pageAtribute, page);
                item++;
            });

            currentNumberPages = page;
        }();

        if (showPagination) {
            var CreatePagers = function () {

                var $isotopePager = ($('.' + pagerClass).length == 0) ? $('<ul class="' + pagerClass + '"></ul>') : $('.' + pagerClass);

                $isotopePager.html('');

                for (var i = 0; i < currentNumberPages; i++) {
                    var $pagerLi = $('<li class="page-item"></li>');
                    var $pager = $('<a href="javascript:void(0);" class="pager page-link" ' + pageAtribute + '="' + (i + 1) + '"></a>');
                    $pagerLi.append($pager.html(i + 1));

                    $pager.click(function () {
                        var page = $(this).eq(0).attr(pageAtribute);
                        goToPage(page, false);

                        jQuery(".pager.current").removeClass("current");
                        jQuery(this).addClass("current");

                        $([document.documentElement, document.body]).animate({
                            scrollTop: $container.offset().top
                        }, 800);
                    });

                    $pagerLi.appendTo($isotopePager);
                }

                $container.next('nav').append($isotopePager);
            }();
        }

        if (showLoadMore) {

            if (!$('#load-more-posts').length) {
                var $loadMoreButton = $('<div class="text-center"><a href="javascript:void(0)" id="load-more-posts" class="btn btn-danger btn-load-more" data-filter="*"><span>Load More Projects</span></a></div>');
                $container.after($loadMoreButton);
            }

            showHideLoadMore();
        }
    }

    function showHideLoadMore() {

        if ($("#load-more-posts").length) {

            var selector = itemSelector;
            selector += (currentFilter != '*') ? '[' + filterAtribute + '="' + currentFilter + '"]' : '';

            if ($container.children(selector).length <= itemsPerPage) {
                $("#load-more-posts").remove();
            }
        }
    }

    // INIT
    goToPage(1);

    // Filter click event
    $('.filterby a').click(function () {
        var filter = $(this).attr(filterAtribute);
        currentFilter = filter;

        // reset pagination
        itemsPerPage = defineItemsPerPage();
        goToPage(1);
        currentPageActive();

        $(".filter").removeClass('active');
        $(this).addClass('active');
    });

    // load more event
    $("body").on("click", "#load-more-posts", function () {

        topPosition = $(window).scrollTop()

        // load next set of items
        itemsPerPage += defineItemsPerPage();
        goToPage(1);

        $(window).scrollTop(topPosition);

    });

    //Evento Responsivo
    $(window).resize(function () {
        itemsPerPage = defineItemsPerPage();
        goToPage(1);
        currentPageActive();
    });

    currentPageActive();

    // On load first page active class
    function currentPageActive() {
        $('.pager').each(function () {
            var pageNo = $(this).data('page');

            if (pageNo === 1) {
                $(this).addClass('current');
            }
        });
    }

});
