history
ls
ls -al
logout
hostnamectl set-hostname Apache
nmcli con show
ip a s
nmcli con add con-name apa type ethernet ifname eth0
nmcli con modify apa ipv4.addresses 192.168.122.100/24
nmcli con modify apa ipv4.dns 8.8.8.8
nmcli con modify apa ipv4.gateway 192.168.122.1
nmcli con modify apa ipv4.method manual
nmcli con up apa
nmcli con show
clear
nmcli con show
ip a s
curl 192.168.122.101:8000
yum -y install httpd
systemctl enable httpd
systemctl start httpd
cd /etc/httpd/conf.modules.d/
ls
cd ..
ls
cd conf.d
ls
touch wsgi.conf
ls
cd ..
cd
scp -r root@192.168.122.101:/projects/Django/static/ /var/www/html
systemctl stop firewalld
systemctl disable firewalld
setenforce 0
systemctl status httpd
systemctl enable httpd
systemctl restart httpd.service
