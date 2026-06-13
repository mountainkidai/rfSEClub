### Advantages of Adding Methods to Prototype

#### Memory Efficiency

Methods on the prototype are shared across all instances, not duplicated per instance.  
**Impact**: Reduces memory usage, critical for scaling Koel to handle millions of Aadhaar KYC users.  
**Example**: A `verify()` method on `KoelAuth.prototype` is stored once, not in every user instance.

#### Performance Optimization

Shared methods mean faster instance creation, as each instance doesn’t need its own method copy.  
**Impact**: Speeds up your HP Secretariat app, where thousands of pass requests need quick processing.  
**Example**: `issuePass()` on prototype ensures low overhead for each user session.

#### Centralized Method Updates

Modifying a prototype method updates it for all instances instantly.  
**Impact**: Simplifies updates to your auth logic (e.g., adding new KYC rules) without recreating instances.  
**Example**: Update `KoelAuth.prototype.verify` to include biometric checks, and all users get it.
