var list = [{w:10,h:10},{2:15,h:20}];

var newList = list.map(function(item){
    item.lists= item.w*item.h;
    return item;
})

console.log(newList[0]>{ w: 10, h: 10, lists: 100 })


