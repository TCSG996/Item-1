// import java.sql.Connection;
// import java.sql.DriverManager;
// import java.sql.PreparedStatement;
// import java.sql.ResultSet;
// import java.sql.SQLException;

// public class LoginSystem {

//     // 数据库连接参数
//     private static final String DB_URL = "jdbc:mysql://localhost:3306/login_database";
//     private static final String USER = "your_username";
//     private static final String PASS = "your_password";

//     public static boolean validateUser(String username, String password) {
//         try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
//              PreparedStatement stmt = conn.prepareStatement("SELECT * FROM users WHERE username =? AND password =?")) {

//             stmt.setString(1, username);
//             stmt.setString(2, password);

//             try (ResultSet rs = stmt.executeQuery()) {
//                 return rs.next();
//             }
//         } catch (SQLException e) {
//             e.printStackTrace();
//             return false;
//         }
//     }

//     public static void main(String[] args) {
//         String username = "your_entered_username";
//         String password = "your_entered_password";

//         if (validateUser(username, password)) {
//             System.out.println("Login successful");
//         } else {
//             System.out.println("Login failed");
//         }
//     }
// }