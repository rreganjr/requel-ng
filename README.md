# requel-ng
New direction for Requel

## Creating the dev container
* alpine java, including maven and gradle
 * note this installs the MS JDK in /usr/local/openjdk-21
* optional packages
 * angular cli
 * spring boot
  * this is installed via sdkman and installs another java, maven, gradle
  * it includes its own java in /usr/local/sdkman/candidates/java/current/bin/java which ends up being the default
    * I chose open jdk: OpenJDK Runtime Environment Temurin-21.0.1+12 (build 21.0.1+12-LTS)
  * this maven and gradle are also the default

I probably didn't need to pick alpine java as spring boot overrides it

```
$ echo $PATH
/usr/local/sdkman/candidates/springboot/current/bin:
/vscode/vscode-server/bin/linux-x64/1a5daa3a0231a0fbba4f14db7ec463cf99d7768e/bin/remote-cli:
/usr/local/sdkman/bin:
/usr/local/sdkman/bin:
/usr/local/sdkman/candidates/java/current/bin:
/usr/local/sdkman/candidates/gradle/current/bin:
/usr/local/sdkman/candidates/maven/current/bin:
/usr/local/sdkman/candidates/ant/current/bin:
/usr/local/sdkman/bin:
/usr/local/sdkman/candidates/java/current/bin:
/usr/local/sdkman/candidates/gradle/current/bin:
/usr/local/sdkman/candidates/maven/current/bin:
/usr/local/sdkman/candidates/ant/current/bin:
/usr/local/share/nvm/versions/node/v20.9.0/bin:
/usr/local/sdkman/bin:
/usr/local/sdkman/candidates/java/current/bin:
/usr/local/sdkman/candidates/gradle/current/bin:
/usr/local/sdkman/candidates/maven/current/bin:
/usr/local/sdkman/candidates/ant/current/bin:
/usr/lib/jvm/msopenjdk-current/bin:
/usr/local/sbin:
/usr/local/bin:
/usr/sbin:
/usr/bin:
/sbin:
/bin:
/root/.local/bin:
/home/vscode/.local/bin
```

after deleting the explicit maven/gradle feature, deleting, path looks the same
```
echo $PATH
/usr/local/sdkman/candidates/springboot/current/bin:
/vscode/vscode-server/bin/linux-x64/1a5daa3a0231a0fbba4f14db7ec463cf99d7768e/bin/remote-cli:
/usr/local/sdkman/bin:
/usr/local/sdkman/bin:
/usr/local/sdkman/candidates/java/current/bin:
/usr/local/sdkman/candidates/gradle/current/bin:
/usr/local/sdkman/candidates/maven/current/bin:
/usr/local/sdkman/candidates/ant/current/bin:
/usr/local/share/nvm/versions/node/v20.9.0/bin:
/usr/local/sdkman/bin:
/usr/local/sdkman/candidates/java/current/bin:
/usr/local/sdkman/candidates/gradle/current/bin:
/usr/local/sdkman/candidates/maven/current/bin:
/usr/local/sdkman/candidates/ant/current/bin:
/usr/lib/jvm/msopenjdk-current/bin:
/usr/local/sbin:
/usr/local/bin:
/usr/sbin:/usr/bin:
/sbin:
/bin:
/root/.local/bin:
/home/vscode/.local/bin
```
## setup
in a terminal in the dev container

### initialzing client

```
mkdir /workspaces/requel-ng/client
cd /workspaces/requel-ng/client
ng new client --prefix re --routing true --skip-git true --directory . --package-manager npm --style css --view-encapsulation None
ng serve
```
