"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_list = void 0;
//exercise no 14
var guest_list = ['ali', 'amir', 'ayesha'];
exports.guest_list = guest_list;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected sir/madam' + guest_list[i] + ',\nwe invited you on dinner tomorrow.\nThank you\n')
// }
//exercise no 15
var not_present = 'amir';
var new_guest = 'dua';
guest_list[1] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected sir/madam' + guest_list[i] + ',\n\nwe invited you on dinner tomorrow.\nThank you\n')
// }
//exercise no 16
console.log("mr. ".concat(not_present, " will not coming tomorrow dinner. "));
guest_list.unshift('anil', 'ali', 'jamel');
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected sir/madam' + guest_list[i] + ',\n\nwe invited you on dinner tomorrow.\nThank you\n')
// }
// exercise no 17
console.log("\nUnfortunately we can not arrange , only two people alow ");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("sorry sir/madam.".concat(remove_guest, " we are not invited for dinner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/madam' + guest_list[i] + ',\n\nwe invited you on dinner tomorrow.\nThank you\n');
}
guest_list.splice(0, 2);
