var MyTable = new VTable({
    component: "table-component",
    search: true,
    sortKey: 'age',
    sortOrders: 'asc'
});

var columns = {
    "name" : "name-column",
    "age": "age-column"
};

var data = [
    { name: 'Dogs', age: 18 },
    { name: 'Haha', age: 19 },
    { name: 'ABC', age: 22 },
    { name: 'You', age: 20 },
    { name: 'Dogs', age: 18 },
    { name: 'Haha', age: 19 },
    { name: 'ABC', age: 22 },
    { name: 'You', age: 20 },
    { name: 'Dogs', age: 18 },
    { name: 'Haha', age: 19 },
    { name: 'ABC', age: 22 },
    { name: 'You', age: 20 },
    { name: 'Dogs', age: 18 },
    { name: 'Haha', age: 19 },
    { name: 'ABC', age: 22 },
    { name: 'You', age: 20 },
    { name: 'Dogs', age: 18 },
    { name: 'Haha', age: 19 },
    { name: 'ABC', age: 22 },
    { name: 'You', age: 20 }
];

new Vue({
    el: '#table-demo',
    data: {
        tableColumns: columns,
        tableData: data
    }  
});
