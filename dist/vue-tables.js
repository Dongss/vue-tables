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

    function VTable() {

    }

    VTable.prototype.create = function(args) {
        var _tpl = [
            '<form>',
            'Search <input name="query" v-model="searchQuery">',
            '</form>',
            '<table border="1">',
            '<thead><tr>',
            '<th v-for="key in columns">{{key}}</th>',
            '</tr></thead>',
            '<tbody>',
            '<tr v-for="item in data | filterBy searchQuery">',
            '<td v-for="key in columns">{{item[key]}}</td>',
            '</tr>',
            '</tbody>',
            '</table>'
        ].join('');

        var TableComponent = Vue.extend({
            template: _tpl,
            props: ['columns','data'],
            data: {
                searchQuery: ''
            }
        });

        Vue.component('table-component', TableComponent);
    };
})(Vue);