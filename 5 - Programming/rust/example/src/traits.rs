


/*

1. struct
2. impl
3. new constructor, ::,Self,
4. . notation, self, mut self, &self, &mut self
5. methods inside impl
6. traits
7. generics
8. trait bounds
9. default methods



Social media platform - sheldon.today

1. Post
2. Article

Summarize function
use traits, impl types, generics,


*/

trait Summary{
    fn summarize(&self);
}
struct Post {
    author: String,
    content:String,
}
impl Post{
    fn new (author:String, content:String)-> Self{
        Self{
            author,
            content
        }
    }
}
impl Summary for Post{
    fn summarize(&self){
        println!("Summary: {} by {}", self.content, self.author );
    }
}
fn main(){
    // let post1 = Post{
    //     author:String::from("Nanda"),
    //     content:String::from("Hey, I am building blockchain"),
    // };
    let post1 = Post::new(String::from("Nanda"),String::from("Hey, I am building blockchain"));
    let post2 = Post::new(String::from("Steve"),String::from("Hey, I am building hospital"));
    let post3 = Post::new(String::from("Amy"),String::from("Hey, I am building software"));
    // let post2 = Post::new(String::from("Lavesh"),String::from("Hey, I am building school"));
    post1.summarize();
    post2.summarize();
    post3.summarize();
    // println!("new post {} by {}", post1.content, post1.author );
    // println!("new post {} by {}", post2.content, post2.author );
}





/*

1. struct
2. impl
3. new constructor, ::,Self,
4. . notation, self, mut self, &self, &mut self
5. methods inside impl
6. traits
7. generics
8. trait bounds
9. default methods



Social media platform - sheldon.today

1. Post
2. Article
3. notifcation feature
Summarize function
use traits, impl types, generics,


*/
trait Summary{
    fn summarize(&self) -> String;
    // getter function to get
    fn get_author(&self) -> String;
}


#[derive(Debug)]
struct Post {
    author: String,
    content:String,
}
struct Article {
    author: String,
    large_content:String,
}


impl Post{
    fn new (author:String, content:String)-> Self{
        Self{
            author,
            content
        }
    }
}
impl Article{
    fn new (author:String, content:String)-> Self{
        Self{
            author,
            large_content:content,
        }
    }
}
impl Summary for Post{
    fn summarize(&self) -> String{
        format!("Summary: {} ", self.content, )
    }
    fn get_author(&self) -> String{
        format!(" {}",  self.author )

    }
}

impl Summary for Article{
    fn summarize(&self) -> String{
        format!("Article Summary: {} by {}", self.large_content, self.author )
    }
     fn get_author(&self) -> String{
        format!(" {}",  self.author )

    }
}

// T is a generic type that is either Post or Article
fn notifyUser<T:Summary> (item:&T){
    println!("your friend {} posted just now {}",item.get_author(),item.summarize());
}

fn main(){
    // let post1 = Post{
    //     author:String::from("Nanda"),
    //     content:String::from("Hey, I am building blockchain"),
    // };
    let post1 = Post::new(String::from("Nanda"),String::from("Hey, I am building blockchain"));
    let _article1 = Article::new(String::from("Lavesh"),String::from("Hey, I'm Aariv, the Founder, CEO, and CTO at MountainKid AI (MountainKid Innovations Private Limited), AlpKid (AlpKid Capital Private Limited), Phunsuk AI (Phunsuk Travels Private Limited). I'm based in Shimla, Himachal Pradesh and I am honored to say that as a self-taught programmer, I started my journey at age 20 with just Rs.600 and built my dream from scratch.
From a cleaner in Kullu at ₹2,000/month to a telecaller, writer, teacher, and film industry worker, I jumped back into software because it shapes the world without limits."));
//    println!("{}", post1.summarize());

//    println!("{}", article1.summarize());
//    println!("{}", post1.summarize());

   notifyUser(&post1);

}


trait Summary{
    fn summarize(&self) -> String;
    // getter function to get
       fn get_author(&self) -> String{
        ""

    }
}


#[derive(Debug)]
struct Post {
    author: String,
    content:String,
}
struct Article {
    author: String,
    large_content:String,
}


impl Post{
    fn new (author:String, content:String)-> Self{
        Self{
            author,
            content
        }
    }
}
impl Article{
    fn new (author:String, content:String)-> Self{
        Self{
            author,
            large_content:content,
        }
    }
}
impl Summary for Post{
    fn summarize(&self) -> String{
        format!("Summary: {} ", self.content, )
    }

}

impl Summary for Article{
    fn summarize(&self) -> String{
        format!("Article Summary: {} by {}", self.large_content, self.author )
    }

}

// T is a generic type that is either Post or Article
fn notifyUser<T:Summary> (item:&T){
    println!("your friend {} posted just now {}",item.get_author(),item.summarize());
}

fn main(){
    // let post1 = Post{
    //     author:String::from("Nanda"),
    //     content:String::from("Hey, I am building blockchain"),
    // };
    let post1 = Post::new(String::from("Nanda"),String::from("Hey, I am building blockchain"));
    let _article1 = Article::new(String::from("Lavesh"),String::from("Hey, I'm Aariv, the Founder, CEO, and CTO at MountainKid AI (MountainKid Innovations Private Limited), AlpKid (AlpKid Capital Private Limited), Phunsuk AI (Phunsuk Travels Private Limited). I'm based in Shimla, Himachal Pradesh and I am honored to say that as a self-taught programmer, I started my journey at age 20 with just Rs.600 and built my dream from scratch.
From a cleaner in Kullu at ₹2,000/month to a telecaller, writer, teacher, and film industry worker, I jumped back into software because it shapes the world without limits."));
//    println!("{}", post1.summarize());

//    println!("{}", article1.summarize());
//    println!("{}", post1.summarize());

   notifyUser(&post1);

}
