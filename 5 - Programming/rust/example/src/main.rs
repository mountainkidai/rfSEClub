use std::collections::HashMap;

fn main(){
    let mut ages = HashMap::new();
    ages.insert("Steve",5);
    ages.insert("Amy",4);
    
    if let Some(age) = ages.get("leonard"){
        println!("steve age is {:?}",age);
    } 
    else{
        println!("kid not found");
    }
}
