use std::fmt;

// simple user struct
#[derive(Debug)]
struct User {
    id: u32,
    username:String,
    password_hash:String,
}

#[derive(Debug)]
enum AuthError{
    UserNotFound,
    InvalidPassword,
}

// market : userrepo trait

trait UserRepo{
    fn find_user(&self,username:&str)->Option<User>;
}

// marker : password hasher trait
trait PasswordHasher {
    fn verify(&self, raw_password:&str,stored_hash:&str)->bool;
}

// marker login function - logic

fn login(repo:&impl UserRepo,hasher:&impl PasswordHasher, username:&str,password:&str) -> Result<User,AuthError>{
    let user = repo.find_user(username).ok_or(AuthError::UserNotFound)?;
    if !hasher.verify(password,&user.password_hash){
        return Err(AuthError::InvalidPassword);
    }
    Ok(user)
}


/* 

fn login(repo: &impl UserRepo, hasher: &impl PasswordHasher, username: &str, password: &str) -> Result<User, AuthError> {
    match repo.find_user(username) {
        None => Err(AuthError::UserNotFound),
        Some(user) => {
            if !hasher.verify(password, &user.password_hash) {
                Err(AuthError::InvalidPassword)
            } else {
                Ok(user)
            }
        }
    }
}


*/

// Real implementations
struct PostgresRepo; // Pretend this connects to Postgres
impl UserRepo for PostgresRepo {
    fn find_user(&self, username: &str) -> Option<User> {
        // Fake DB lookup
        if username == "alice" {
            Some(User { id: 1, username: username.to_string(), password_hash: "$2b$12$Kixmo2H6.a5gP7A1XzPzuO".to_string() })
        } else {
            None
        }
    }
}

struct BcryptHasher;
impl PasswordHasher for BcryptHasher {
    fn verify(&self, raw: &str, hash: &str) -> bool {
        // Fake bcrypt verify (use bcrypt crate in real)
        hash == "$2b$12$Kixmo2H6.a5gP7A1XzPzuO" && raw == "password123"
    }
}
// Test mocks
struct MockRepo;
impl UserRepo for MockRepo {
    fn find_user(&self, username: &str) -> Option<User> {
        Some(User { id: 999, username: username.to_string(), password_hash: "mock_hash".to_string() })
    }
}

struct MockHasher;
impl PasswordHasher for MockHasher {
    fn verify(&self, _raw: &str, _hash: &str) -> bool { true } // Always passes for tests
}

fn main() {
    let postgres_repo = PostgresRepo;
    let bcrypt = BcryptHasher;

    // Real login
    match login(&postgres_repo, &bcrypt, "alice", "password123") {
        Ok(user) => println!("✅ Login success: {:?}", user),
        Err(e) => println!("❌ Login failed: {:?}", e),
    }

    // Wrong password
    match login(&postgres_repo, &bcrypt, "alice", "wrong") {
        Ok(_) => println!("Unexpected success"),
        Err(e) => println!("✅ Failed as expected: {:?}", e),
    }

    // Test with mocks
    let mock_repo = MockRepo;
    let mock_hasher = MockHasher;
    let test_user = login(&mock_repo, &mock_hasher, "testuser", "whatever").unwrap();
    println!("🧪 Test login: {:?}", test_user);
}