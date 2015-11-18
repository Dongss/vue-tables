(function(Vue) {
    var root = typeof self == 'object' && self.self === self && self ||
            typeof global == 'object' && global.global === global && global ||
            this;

    if (typeof exports != 'undefined' && !exports.nodeType) {
        if (typeof module != 'undefined' && !module.nodeType && module.exports) {
            exports = module.exports = VTable;
        }
        exports.VTable = VTable;
    } else {
        root.VTable = VTable;
    }

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
})(Vue);