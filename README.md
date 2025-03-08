## Login and SignUp Page Details

### SignUp Page
The SignUp page allows users to create a new account. The user details are collected through a form and stored in both Firebase Authentication and Firestore database.

- **User Details Collection**: The form collects the user's username, email, password, and role (default is 'user').
- **Firebase Authentication**: The user's email and password are used to create a new user in Firebase Authentication.
- **Firestore Database**: Additional user details (username, email, role, and creation timestamp) are stored in the Firestore database under the "users" collection.

### Login Page
The Login page allows users and admins to log in to their accounts. The login process differs for users and admins.

- **Admin Login**:
  - Admin details are stored only in the Firestore database under the "admin" collection.
  - The admin's username and password are verified against the stored details in Firestore.
  - On successful login, admin details are stored in `localStorage` and the user is redirected to the home page.

- **User Login**:
  - User details are stored in both Firebase Authentication and Firestore database.
  - The user's email and password are verified using Firebase Authentication.
  - On successful login, user details are stored in `localStorage` and the user is redirected to the home page.

### Admin Login Process
In the admin login process, the following steps are performed:

1. **Document Reference (`docRef`)**: A reference to the admin document in the Firestore database is created using the `doc` function. The `doc` function takes three arguments: the Firestore database instance (`db`), the collection name (`"admin"`), and the document ID (`userName`).

   ```javascript
   const documentRef = doc(db, "admin", userName);
   ```

2. **Retrieve Document (`getDoc`)**: The `getDoc` function is used to retrieve the document from Firestore. It takes the document reference (`documentRef`) as an argument and returns a document snapshot (`docSnap`).

   ```javascript
   const docSnap = await getDoc(documentRef);
   ```

3. **Check Document Existence**: The `exists` method of the document snapshot is used to check if the document exists in Firestore.

   ```javascript
   if (docSnap.exists()) {
   ```

4. **Extract Data**: If the document exists, the `data` method of the document snapshot is used to extract the document data. The extracted data includes the admin's password (`dbPass`) and email (`dbEmail`).

   ```javascript
   const data = docSnap.data();
   const dbPass = data.password;
   const dbEmail = data.email;
   ```

5. **Verify Password**: The provided password is compared with the stored password (`dbPass`). If they match, the admin is successfully logged in.

   ```javascript
   if (dbPass === password) {
     localStorage.setItem("isAdmin", true);
     localStorage.setItem("username", userName);
     localStorage.setItem("email", dbEmail);
     toast.success("Successful login", 1000);
     navigate("/");
   } else {
     toast.error("Invalid email or password", 1000);
   }
   ```

### Code Snippets

#### SignUp Page
```jsx
// ...existing code...
const handleAddUser = async () => {
  try {
    if (password === confirmPassword) {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const userDetails = {
        userName: userName,
        email: email,
        role: role,
        createdAt: serverTimestamp(),
      };
      await setDoc(doc(db, "users", userCredential.user.uid), userDetails);
      toast("Successfully signed up");
      navigate("/register", { state: { userName, email, password, role } });
    } else {
      alert("Passwords do not match!");
    }
  } catch (error) {
    console.error("Error during email/password sign up:", error.message);
    toast("Error during sign up. Please try again.");
  }
};
// ...existing code...
```

#### Login Page
```jsx
// ...existing code...
const handleLogin = async () => {
  try {
    if (userName.trim() !== "" && password.trim() !== "") {
      if (role === "admin") {
        const documentRef = doc(db, "admin", userName);
        const docSnap = await getDoc(documentRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.password === password) {
            localStorage.setItem("isAdmin", true);
            localStorage.setItem("username", userName);
            localStorage.setItem("email", data.email);
            toast.success("Successful login", 1000);
            navigate("/");
          } else {
            toast.error("Invalid email or password", 1000);
          }
        } else {
          toast.error("User not found", 1000);
        }
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, userName, password);
        const user = userCredential.user;
        localStorage.setItem("isAdmin", false);
        localStorage.setItem("username", user.displayName || user.email);
        localStorage.setItem("email", user.email);
        toast.success("Successful login", 1000);
        navigate("/");
      }
    } else {
      toast.error("Please enter all the details", 1000);
    }
  } catch (error) {
    console.error("Error during login:", error);
    toast.error("Error during login. Please check your credentials.", 1000);
  }
};
// ...existing code...
