import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class LoginSystem {

    // 数据库连接参数
    private static final String DB_URL = "jdbc:mysql://localhost:3306/login";
    private static final String USER = "root";
    private static final String PASS = "10514";

    /**
     * 验证用户登录信息的方法
     *
     * @param username 用户名
     * @param password 密码
     * @return 如果用户存在且密码匹配，返回 true；否则返回 false
     */
    public static boolean validateUser(String username, String password) {
        try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
             PreparedStatement stmt = conn.prepareStatement("SELECT * FROM users WHERE username =? AND password =?")) {

            stmt.setString(1, username);
            stmt.setString(2, password);

            try (ResultSet rs = stmt.executeQuery()) {
                return rs.next(); // 如果有结果，即用户存在且密码匹配，返回 true
            }
        } catch (SQLException e) {
            e.printStackTrace();
            return false; // 出现异常返回 false
        }
    }

    public static void main(String[] args) {
        String username = "your_entered_username";
        String password = "your_entered_password";

        if (validateUser(username, password)) {
            System.out.println("Login successful");
        } else {
            System.out.println("Login failed");
        }
    }
}