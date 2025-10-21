trait FoodProvider{
    type Food;
    fn food(&self) ->Self::Food;
}

struct Dog;

impl FoodProvider for Dog {
    type Food = String;
    fn food(&self)->Self::Food {
        "Fish".to_string()
    }
}

fn print_food<P>(p:&P)
where
P:FoodProvider,
P::Food:std::fmt::Display,
{
    println!("Food : {} ", p.food());
}


fn main(){
    let dog = Dog;
    print_food(&dog);
}