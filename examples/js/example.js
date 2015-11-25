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
    { name: 'Dogs', age: 1 },
    { name: 'Haha', age: 2 },
    { name: 'ABC', age: 3 },
    { name: 'You', age: 4 },
    { name: 'Dogs', age: 5 },
    { name: 'Haha', age: 6 },
    { name: 'ABC', age: 7 },
    { name: 'You', age: 8 },
    { name: 'Dogs', age: 9 },
    { name: 'Haha', age: 10 },
    { name: 'ABC', age: 11 },
    { name: 'You', age: 12 },
    { name: 'Dogs', age: 13 },
    { name: 'Haha', age: 14 },
    { name: 'ABC', age: 15 },
    { name: 'You', age: 16 },
    { name: 'Dogs', age: 17 },
    { name: 'Haha', age: 18 },
    { name: 'ABC', age: 19 },
    { name: 'You', age: 20 },
    { name: 'ABC', age: 21 },
    { name: 'You', age: 22 },
    { name: 'Dogs', age: 23 },
    { name: 'Haha', age: 24 },
    { name: 'ABC', age: 25 },
    { name: 'You', age: 26 },
    { name: 'Dogs', age: 27 },
    { name: 'Haha', age: 28 },
    { name: 'ABC', age: 29 },
    { name: 'You', age: 30 }
];

new Vue({
    el: '#table-demo',
    data: {
        tableColumns: columns,
        tableData: data
    }  
});
