function has(list, item){
  return list.includes(item);
}

function union(list, item){
  if(has(list, item)){
    return list
  }
}

module.exports = union
