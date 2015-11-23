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
            }
        });

        Vue.component(args.component, TableComponent);
    };

    function tableComponnetData(args) {
        var _data = {};

        if (_data.showSearch = args.search || false) {
            _data.searchQuery = '';
        }

        return _data;
    }

    return VTable;
}));