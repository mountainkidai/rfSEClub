// sheldon.today

trait Summary{
    // default method
    fn summarize(&self){
        println!("Nothing to show");
    }
}

struct Article{
    author:String,
   content :String,
}
struct Post{
    author:String,
   content :String,
}
struct PremiumArticle{
    author:String,
   content :String,
}

impl Summary for Article {
    fn summarize(&self){
        println!("summary {:?}",self.content);
    }
}
impl Summary for Post {
    // summarize is yet to be implemented
}

//fn notify(item: &impl Summary){
    item.summarize();
}

fn main(){
    let article = Article{
        author:String::from("Steve"),
        content:String::from("hey this article is about rust"),
    };
    
    let smallPost = Post{
        author:String::from("Amy"),
        content:String::from("hey, today is sunny weather!!"),
    };

//    article.summarize();
 //   smallPost.summarize();
 notify(&article);
 notify(&smallPost);
}