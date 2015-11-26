(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.VTable = factory()
}(this, function() {
    function VTable(args) {
        if (args) { this.create(args); }
    }

    VTable.prototype.create = function(args) {
        //var _tpl = '#tpl';
        var _tpl = '<style type="text/css">.arrow{width:0;height:0;vertical-align:middle;display:inline-block;margin-left:4px solid transparent}.arrow.asc{border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:8px solid cadetblue}.arrow.desc{border-left:4px solid transparent;border-right:4px solid transparent;border-top:8px solid cadetblue}.current-page-button{background-color:#222222;color:white}.vtable-footer{margin-top:5px}.vtable-footer button{margin-right:10px;}</style><div style="margin-bottom:5px;"><span>Show<select v-model="numbersPerPage"><option value=5>5</option><option value=10>10</option><option value=25>25</option><option value=50>50</option><option value=100>100</option></select>entries</span><span style="float:right;"v-if="showSearch">Search:<input name="query"v-model="searchQuery"></span></div><table border="1"style="width:100%"><thead><tr><th v-for="col in columns"@click="sortBy($key)">{{col}}<span :class="[myClasses.arrow, sortKey == $key ? orderClass : myClasses.noClass]"></span></th></tr></thead><tbody><tr v-for="item in currentPageData | filterBy searchQuery | orderBy sortKey sortOrders"><td v-for="col in columns">{{item[$key]}}</td></tr></tbody></table><div class="vtable-footer"><span style="float:left">{{start+1}} to {{end+1}} of {{data.length}} total</span><span style="float:right;"><button v-on:click="previousButtonClicked">Previous</button><button v-for="page in pages":class="[currentPage === page ? myClasses.currentPageButton : myClasses.noClass]"v-on:click="pageButtonClicked(page)">{{page}}</button><button v-on:click="nextButtonClicked">Next</button><input style="width:30px;"type="text"v-model="pageGo"/><button v-on:click="goButtonClicked(pageGo)">Go</button></span></div>';
        
        var TableComponent = Vue.extend({
            template: _tpl,
            props: ['columns','data'],
            data: function() {
                return tableComponnetData(args)
            },
            computed: {
                orderClass: function() {
                    if (this.sortKey === '') {
                        return "";
                    } else if (this.sortKey !== '' && this.sortOrders === -1) {
                        return "desc";
                    } else if (this.sortKey !== '' && this.sortOrders === 1) {
                        return "asc"
                    } else {
                        return "";
                    }
                },
                start: function() {
                    var _start = this.numbersPerPage * (this.currentPage - 1);
                    return _start < 0 ? 0 : _start;
                },
                end: function() {
                    var _end = this.start + parseInt(this.numbersPerPage) -1;
                    return _end >= this.data.length ? this.data.length-1 : _end;
                },
                currentPageData: function() {
                    var _data = [];
                    for (var index in data) {
                        if (index >= this.start && index <= this.end) { _data.push(data[index]); }
                    }
                    return _data;
                },
                pages: function() {
                    var _length = Math.ceil(this.data.length / this.numbersPerPage);
                    var _pages = [];
                    var _start = this.currentPage - 2;
                    var _end = this.currentPage + 2;
                    if (_start <= 0) { _end = _end + (1 -_start); }
                    if (_end > _length) { _start = _start - (_end - _length); }
                    for (var i = 1; i <= _length; i++) {
                        if (i >= _start && i <= _end) { _pages.push(i); }
                        if (_pages.length >= 5) { break; }
                    }
                    return _pages;
                }
            },
            methods: {
                sortBy: function(key) {
                    this.$set('sortKey', key);
                    this.$set('sortOrders', this.sortOrders * -1);
                },
                pageButtonClicked: function(page) {
                    this.$set("currentPage", page);
                },
                previousButtonClicked: function() {
                    if (this.currentPage > 1) { this.$set("currentPage", this.currentPage-1); }
                },
                nextButtonClicked: function() {
                    if (this.currentPage < Math.ceil(this.data.length / this.numbersPerPage)) { this.$set("currentPage", this.currentPage+1); }
                },
                goButtonClicked: function(page) {
                    if (!page) { return false; }
                    if (page < 1 || page > Math.ceil(this.data.length / this.numbersPerPage)) {
                        alert("Out of range");
                        return false;
                    }
                    this.$set("currentPage", parseInt(page));
                }
            },
            watch: {
                'numbersPerPage': function(newVal, oldVal) {
                    this.$set("currentPage", 1);
                    this.$set("start", 0);
                }
            }
        });

        Vue.component(args.component, TableComponent);
    };

    function tableComponnetData(args) {
        var _data = {};

        if (_data.showSearch = args.search || false) { _data.searchQuery = ''; }

        var _sortOrders = {
            'asc': 1,
            'desc': -1
        };

        // Sort
        _data.sortKey = args.sortKey || '';
        _data.sortOrders = _sortOrders[args.sortOrders] || 1;

        // Pages
        _data.numbersPerPage = args.numbersPerPage || 5;
        _data.currentPage = args.currentPage || 1;

        _data.myClasses = {
            noClass: '',
            arrow: 'arrow',
            currentPageButton: 'current-page-button',
            currentPageButtonClass: 'current-page-button'
        };

        return _data;
    }

    return VTable;
}));