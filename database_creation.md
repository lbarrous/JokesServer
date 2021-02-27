```
docker pull mysql/mysql-server:latest
docker run -p3306:3306 --name=mysql1 -d mysql/mysql-server:5.7
docker logs mysql1 2>&1 | grep GENERATED (get password for root) 7@qejAc@x14f(0s#AL3q9Ur7ORY
docker exec -it mysql1 mysql -uroot -p (type previous password)
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';
mysql> CREATE USER 'root'@'172.17.0.1' IDENTIFIED BY '123456';
mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'172.17.0.1';
mysql> FLUSH PRIVILEGES;
mysql> create database testdb;
mysql> use testdb;
```