import mysql.connector

# 连接数据库
mydb = mysql.connector.connect(
    host="localhost",
    user="root",
    password="10514",
    database="longin"
)

mycursor = mydb.cursor()

def register():
    username = input("请输入用户名：")
    password = input("请输入密码：")

    # 检查用户名是否已存在
    sql = "SELECT * FROM users WHERE username = %s"
    val = (username,)
    mycursor.execute(sql, val)
    result = mycursor.fetchone()

    if result:
        print("用户名已存在，请重新输入。")
        return

    # 插入新用户
    sql = "INSERT INTO users (username, password) VALUES (%s, %s)"
    val = (username, password)
    mycursor.execute(sql, val)
    mydb.commit()
    print("注册成功！")

def login():
    username = input("请输入用户名：")
    password = input("请输入密码：")

    # 检查用户名和密码是否匹配
    sql = "SELECT * FROM users WHERE username = %s AND password = %s"
    val = (username, password)
    mycursor.execute(sql, val)
    result = mycursor.fetchone()

    if result:
        print("登录成功！")
    else:
        print("用户名或密码错误，请重新输入。")

# 主程序
while True:
    choice = input("1. 注册  2. 登录  3. 退出\n请选择：")
    if choice == '1':
        register()
    elif choice == '2':
        login()
    elif choice == '3':
        break
    else:
        print("无效的选择，请重新输入。")