(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.VTable = factory()
}(this, function() {
    function VTable(args) {
        if (args) {
            this.create(args);  
        }
    }

    VTable.prototype.create = function(args) {
        var _tpl = '#tpl'

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
                }
            },
            methods: {
                sortBy: function(key) {
                    this.$set('sortKey', key);
                    this.$set('sortOrders', this.sortOrders * -1);
                }
            }
        });

        Vue.component(args.component, TableComponent);
    };

    function tableComponnetData(args) {
        var _data = {};

        if (_data.showSearch = args.search || false) {
            _data.searchQuery = '';
        }

        var _sortOrders = {
            'asc': 1,
            'desc': -1
        };

        _data.sortKey = args.sortKey || '';
        _data.sortOrders = _sortOrders[args.sortOrders] || 1;

        return _data;
    }

    return VTable;
}));