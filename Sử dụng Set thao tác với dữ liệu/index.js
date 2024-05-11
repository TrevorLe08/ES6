var listOfAnimal = new Set();

let addAnimal = name => {
    listOfAnimal.add(name);
    console.log(`Đã thêm ${name} vào danh sách.`);
} 

let checkAnimal = name => {
    if (listOfAnimal.has(name)) {
        console.log(`${name} đã có trong danh sách.`);
    } else {
        console.log(`${name} chưa có trong danh sách.`);
    }
}

let deleteAnimal = name => {
    if (listOfAnimal.has(name)) {
        listOfAnimal.delete(name);
        console.log(`${name} đã được xóa khỏi danh sách.`);
    } else {
        console.log(`${name} chưa có danh sách.`);
    }
}

let printAnimal = () => {
    console.log("Danh sách các con vật: ");
    listOfAnimal.forEach(name => console.log(name))
}

addAnimal("Voi")
addAnimal("Hươu cao cổ")
addAnimal("Sư tử")
addAnimal("Hổ")
checkAnimal("Hổ")
checkAnimal("Cá")
printAnimal()
deleteAnimal("Hổ")
deleteAnimal("Cá")
printAnimal()