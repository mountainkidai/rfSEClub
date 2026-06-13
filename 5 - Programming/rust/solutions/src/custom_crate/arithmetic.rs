pub struct ResultHolder {
    pub result: i32,
}

impl ResultHolder{
    pub fn result(&self)->i32{
        self.result
    }
}

pub fn add(a:i32,b:i32)->ResultHolder{
    ResultHolder{result:a+b}
}