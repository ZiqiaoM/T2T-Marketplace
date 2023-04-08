// Replace this example code with your own API endpoint implementation

export default function handler(req, res) {
    const { email } = req.query;
  
    // TODO: Retrieve user information from your database based on the email
    // For this example, we just return a hardcoded user object
    const user = {
      email: 'johndoe@example.com',
      username: 'John Doe',
      age: 35,
      city: 'New York',
      country: 'USA',
    };
  
    res.status(200).json(user);
  }
  