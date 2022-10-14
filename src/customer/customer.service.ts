import { Injectable } from '@nestjs/common';
import { min } from 'rxjs';
import { createCustomerDto } from 'src/DTO/create-customer.dto';

var b = ["firstname", "secondName", "name", "phone", "id"];
@Injectable()
export class CustomerService {
    matched(word) {
        // word = word.toLowerCase();  
        for(let i in b) {
            let j = 0, k = 0;
            let newWord = b[i]; // name
            while(j < newWord.length && k < word.length) {
                if(newWord[j] == word[k]) j++;
                k++;
                }
                if(j == newWord.length) return i;
            }
        return -1;
    }
    solve(createCustomerDto : createCustomerDto) {
        var firstname = [], lastname = [], names = [], phone = [], id = [], randomPick = [];
        var ans = [];
        let arr = createCustomerDto.column;
        for(let i in arr) {
            let val = this.matched(arr[i]);
            console.log(val, arr[i]); 
            switch(val) {
                case "0":
                    firstname.push(arr[i]);
                    break;
                case "1":
                    lastname.push(arr[i])
                    break;
                case "2":
                    names.push(arr[i]);
                    break;
                case "3":
                    phone.push(arr[i])
                    break;
                case "4":
                    id.push(arr[i]);
                    break;
                default:
                    randomPick.push(arr[i])
                    break;
            }
        }
        for(let i in firstname) {
            ans.push(firstname[i]);
        }
        for(let i in lastname) {
            ans.push(lastname[i]);
        }
        for(let i in names) {
            ans.push(names[i]);
        }
        for(let i in phone) {
            ans.push(phone[i]);
        }
        for(let i in id) {
            ans.push(id[i]);
        }
        
        // 
        let size_a = ans.length;
        for(let i = 0; size_a < 5; i++) {
            ans.push(randomPick[i]);
            size_a++;
        }
        
        return ans;
    }
}
