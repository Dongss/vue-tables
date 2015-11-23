var a =Vue.extend({});

var MyTable = new VTable({
    component: "table-component",
    search: true
});

var columns = ['name', 'age'];
var data = [
    { name: 'Dogs', age: 18 },
    { name: 'Haha', age: 19 },
    { name: 'You', age: 20 }
];

new Vue({
    el: '#table-demo',
    data: {
        tableColumns: columns,
        tableData: data
    }  
});
