import { IListTemplate } from "@/components/ListDetail/types";

const gitContent: IListTemplate = {
    title: '配置用户以及邮箱',
    content: [
        {detail: '$  git config --global user.name "xxx"'},
        {detail: '$  git config --global user.email "xxx@qq.com"'}
    ]
}

const gitContent1: IListTemplate = {
    title: '查看配置',
    content: [
        {detail: '$  git config --global user.name'},
        {detail: '$  git config --global user.email'}
    ]
}

const gitContent2: IListTemplate = {
    title: '查询所有的配置',
    content: [
        {detail: '$  git config --list'}
    ]
}

const gitContent3: IListTemplate = {
    title: '初始化仓库',
    content: [
        {detail: '$  git init', notes: '初始化git'},
        {detail: '$  git clone <url>', notes: '克隆某个路径下代码'},
        {detail: '$  git status', notes: '查看代码提交状态'},
        {detail: '$  git add .', notes: '提交所有代码到暂存区'},
        {detail: '$  git commit -m "xxx"', notes: '添加到版本库'},
        {detail: '$  git log', notes: '查看提交记录'},
        {detail: '$  git log --oneline', notes: '一行显示提交记录'},
        {detail: '$  git log --all --grep = "homePage"', notes: '查询提交记录中包含"homePage"的记录'},
        {detail: '$  git log --author = "lihh"', notes: '获取某个提交者的日志'},
        {detail: '$  git diff', notes: '默认比较工作区以及暂存区代码'},
        {detail: '$  git reset HEAD <文件名>', notes: '根据文件名从缓存区进行撤销'},
        {detail: '$  git checkout <文件名>', notes: '从缓存区获取版本文件'},
        {detail: '$  git rm --cached <文件名>', notes: '将缓存区的文件删除'},
        {detail: '$  git reset --hard <版本号>', notes: '从版本库恢复某个版本'},
        {detail: '$  git reflog', notes: '查看历史版本'},
        {detail: '$  git remote add origin <url>', notes: '添加某个git地址'}
    ]
}

const gitContent4: IListTemplate = {
    title: '分支管理',
    content: [
        {detail: '$  git branch', notes: '查看所有的分支'},
        {detail: '$  git branch <名称>', notes: '创建某个分支'},
        {detail: '$  git checkout <分支名称>', notes: '切换到某个分支'},
        {detail: '$  git checkout -b <分支名称>', notes: '直接创建并切换分支'},
        {detail: '$  git branch -d <分支名称>', notes: '直接删除某个分支'},
        {detail: '$  git log --online --graph', notes: '显示提交过程'},
        {detail: '$  git stash', notes: '进行工作区的代码暂存'},
        {detail: '$  git stash pop', notes: '回退暂存区代码'},
        {detail: '$  git mege <分支名称>', notes: '进行分支合并, 会出现分叉合并'},
        {detail: '$  git rebase <分支名称>', notes: '进行分支合并, 不会出现分叉合并'}
    ]
}

export {
    gitContent,
    gitContent1,
    gitContent2,
    gitContent3,
    gitContent4
}