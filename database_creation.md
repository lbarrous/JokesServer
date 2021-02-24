```
docker pull mysql/mysql-server:latest
docker run -p3306:3306 --name=mysql1 -d mysql/mysql-server:5.7
docker logs mysql1 2>&1 | grep GENERATED (get password for root)
docker exec -it mysql1 mysql -uroot -p (type previous password)
mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';
mysql> create database testdb;
```