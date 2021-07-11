history
ls
ls -al
logout
ip a s
nmcli con show
nmcli con add con-name mys type ethernet ifname eth0
nmcli con modify mys ipv4.addresses 192.168.122.100/24
nmcli con modify mys ipv4.dns 8.8.8.8
nmcli con modify mys ipv4.gateway 192.168.122.1
nmcli con modify mys ipv4.method manual
nmcli con up mys
clear
nmcli con show
hostnamectl set-hostname Apache
hostanamectl set-hostname MySQL
hostnamectl set-hostname MySQL
hostaname
hostname
ip a s
nmcli con modify mys ipv4.addresses 192.168.122.102/24
nmcli con modify mys ipv4.method manual
nmcli con up mys
ip a s
poweroff
ip a s
yum isntall -y python3-devel mysql-devel gcc
systemctl status firewalld
systemctl stop firewalld
systemctl disable firewalld
setenforce 0
getenforce
yum -y install mariadb-server
systemctl start mariadb
systemctl status mariadb
mysql_secure_installation
mysql -u root -p
mysql_secure_installation
mysql -u root -p
systemctl restart mariadb
mysql -u root -p
