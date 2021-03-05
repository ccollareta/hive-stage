$(document).ready(function () {

	var filters = {};
	var filterValue;
	var defaultFilterValue = "*";
	var itemSelector = '.filter-item';
	var filtersContainer = $('.selected-filters');
	var clearFiltersLink = '<a href="javascript: void(0);" class="clear-filter">Clear All</a>';
	var noFilters = '<span>No filters selected.</span>';

	var $container = $('.filter-container').imagesLoaded(function () {
		$container.isotope({
			itemSelector: itemSelector
		});
	});

	$('.filters').on('change', '.filter', function () {
		var $this = $(this);

		if ($this.val() != 'title') {
			var filterGroup = 'filter-' + $this.attr('data-filter-group');
			filters[filterGroup] = $this.val();
			filterValue = concatValues(filters);
			$this.val('title');
			filters = sortObjectByKeys(filters);
			//console.log(filterGroup, filterValue);
			console.log(filters);
		}
	});

	$('.btn-filter').on('click', function () {
		$container.isotope({
			filter: filterValue
		});

		if ($.isEmptyObject(filters)) {
			filtersContainer.append(noFilters);
		} else {
			filtersContainer.empty();
			$.each(filters, function (key, val) {
				var activeFilter = filterName(val);
				var appliedFilter = '<span data-key="' + key + '">' + activeFilter + '<span class="close">&times;</span></span>';
				filtersContainer.append(appliedFilter);
			});
			filtersContainer.append(clearFiltersLink);
		}
	});

	$(document).on('click', '.clear-filter', function () {
		filtersContainer.empty();
		filters = {};
		filterValue = defaultFilterValue;
		$container.isotope({
			filter: filterValue
		});
		console.log(filters);
	});

	$(document).on('click', '.selected-filters .close', function () {
		var key = $(this).parent().attr('data-key');
		delete filters[key];
		filterValue = concatValues(filters);
		$(this).parent().remove();
		if ($.isEmptyObject(filters)) {
			filtersContainer.empty();
			filterValue = defaultFilterValue;
		}
		$container.isotope({
			filter: filterValue
		});
		//console.log(key, filterValue);
		console.log(filters);
	});

	// flatten object by concatting values
	function concatValues(obj) {
		var value = '';
		for (var prop in obj) {
			value += obj[prop];
		}
		return value;
	};

	// Filter name by filter val
	function filterName(filter) {
		return filter.replace(/\./g, "").replace('-', ' ').replace(/(?:^|\s)\S/g, a => a.toUpperCase());
	};

	// Sort object
	function sortObjectByKeys(obj) {
		return Object.keys(obj).sort().reduce((r, k) => (r[k] = obj[k], r), {});
	}
});