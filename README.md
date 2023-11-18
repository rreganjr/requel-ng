# requel-ng
New direction for Requel

setup
in a terminal in the dev container

initialzing client
```
mkdir /workspaces/requel-ng/client
cd /workspaces/requel-ng/client
ng new client --prefix re --routing true --skip-git true --directory . --package-manager npm --style css --view-encapsulation None
ng serve
```

setup spring boot (could I have done this when creating the container?)
```
sudo su -
cd /opt
wget https://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-cli/3.1.5/spring-boot-cli-3.1.5-bin.tar.gz
gunzip spring-boot-cli-3.1.5-bin.tar.gz
tar -xvf spring-boot-cli-3.1.5-bin.tar
```

in devcontainer.json added
```
	"containerEnv": {
		"PATH": "${containerEnv:PATH}:/opt/spring-3.1.5/bin"
	}
```