import { IListTemplate } from "@/components/ListDetail/types";

const linuxContent: IListTemplate = {
  title: "常用命令",
  content: [
    { detail: "$ ll", notes: "查询当前目录所有文件的详情" },
    { detail: "$  echo $PATH", notes: "打印环境变量" },
    { detail: "$ ls", notes: "展示当前目录下文件名称" },
    { detail: "$ pwd", notes: "表示输出当前文件目录" },
    { detail: "$ mkdir <文件名>", notes: "创建目录" },
    { detail: "$ mkdir -p <文件名>", notes: "递归创建目录" },
    { detail: "$ cd ~", notes: "直接跳转到根目录" },
    { detail: "$ rmdir <文件名>", notes: "直接删除空目录" },
    { detail: "$ rm -r <目录>", notes: "循环删除目录" },
    {
      detail: "$ cp <源文件> <目标地址>",
      notes: "将源文件复制到指定目录下 -r 可以附带文件夹",
    },
    {
      detail: "$ mv <源文件> <目标文件>",
      notes: "移动文件 -- 同目录下进行改名, 不同目录下直接剪切",
    },
    { detail: "$ ln -s <源文件> <目标>", notes: "创建链接" },
    { detail: "$ whereis <命令名称>", notes: "搜索命令所在目录, 以及帮助文档" },
    { detail: "$ find <搜索范围> <搜索文件>", notes: "指定目录下搜索文件" },
    {
      detail: "$ find / -size +0k",
      notes: "按大小进行搜索 -- 例如: -8k 小8k 8K = 等于8k +8k = 大于8k",
    },
    { detail: "$ grep <字符串> <文件>", notes: "文件中匹配字符串" },
    { detail: "$ touch xxx.txt", notes: "创建文件" },
    { detail: "$ vi xxx.txt", notes: "编辑文件" },
    { detail: "$ cat xxx.txt", notes: "打印文件" },
    {
      detail: "$ chmod <权限> <文件>",
      notes: "修改权限 r => 4 w => 2 x => 1 777 表示最高权限",
    },
  ],
};

const linuxContent1: IListTemplate = {
  title: "搜索软件<mlocate>",
  content: [
    { detail: "$  yum install mlocate -y", notes: "安装软件:{mlocate}" },
    { detail: "$  updatedb", notes: "更新文件建立索引" },
    { detail: "$  locate <文件名>", notes: "进行文件搜索" },
  ],
};

const linuxContent2: IListTemplate = {
  title: "软件安装",
  content: [
    { detail: "$  yum install xxx -y", notes: "安装软件" },
    { detail: "$  systemctl start xxx.service", notes: "启动服务" },
    { detail: "$  systemctl stop xxx.service", notes: "停止服务" },
    { detail: "$  systemctl restart xxx.service", notes: "重启服务" },
  ],
};

const linuxContent3: IListTemplate = {
  title: "关于进程",
  content: [{ detail: "$  ps -le", notes: "列举进程" }],
};

const linuxContent4: IListTemplate = {
  title: "其他",
  content: [
    { detail: "$  select user, host from user", notes: "查询登录用户" },
  ],
};

const linuxContent5: IListTemplate = {
  title: "关于网络",
  content: [
    { detail: "$  netstat", notes: "查询网络命令" },
    { detail: "$  ping <ip地址>", notes: "链接ip地址" },
    { detail: "$  netstat -anp | grep <3306>", notes: "搜索监听端口是否打开" },
  ],
};

const linuxContent6: IListTemplate = {
  title: "运行在window的liunx命令",
  content: [
    { detail: "$  code .", notes: "以当前目录为基准，用vscode打开" },
    { detail: "explorer .", notes: "以当前目录为基准, 打开资源管理器" },
    { detail: "where <命令>", notes: "查询全局命令的安装位置" },
  ],
};

export {
  linuxContent,
  linuxContent1,
  linuxContent2,
  linuxContent3,
  linuxContent4,
  linuxContent5,
  linuxContent6,
};
