trait Summary{
    fn summarize(&self);
}
#[derive(Debug)]
struct Article {
    author:String,
    content:String,
}
struct Post {
    author:String,
    content:String,
}


impl Summary for Article{
    fn summarize(&self){
        println!("Summary : {}",&self.content);
    }
}

fn notify(item: &impl Summary){
item.summarize();
}
fn main(){
let article = Article{
    author:String::from("Steve"),
    content:String::from("hey, this article is about rust"),
};

notify(&article);
}