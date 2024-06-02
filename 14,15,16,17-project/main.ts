//exercise no 14
let guest_list : string [] = ['ali','amir','ayesha'];
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected sir/madam' + guest_list[i] + ',\nwe invited you on dinner tomorrow.\nThank you\n')
// }
//exercise no 15
let not_present : string = 'amir';
let new_guest : string = 'dua';
guest_list[1] =new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected sir/madam' + guest_list[i] + ',\n\nwe invited you on dinner tomorrow.\nThank you\n')
// }
//exercise no 16
console.log(`mr. ${not_present} will not coming tomorrow dinner. `)
guest_list.unshift('anil','ali','jamel');
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected sir/madam' + guest_list[i] + ',\n\nwe invited you on dinner tomorrow.\nThank you\n')
// }
// exercise no 17
console.log(`\nUnfortunately we can not arrange , only two people alow `);
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`sorry sir/madam.${remove_guest} we are not invited for dinner.`);
}
for(let i=0; i<guest_list.length; i++){
        console.log('Respected sir/madam' + guest_list[i] + ',\n\nwe invited you on dinner tomorrow.\nThank you\n')
}
guest_list.splice(0,2) 

export{guest_list}

