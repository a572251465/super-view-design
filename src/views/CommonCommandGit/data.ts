import { IListTemplate } from '@/components/ListDetail/types'

const gitContent: IListTemplate = {
  title: '配置用户以及邮箱',
  content: [
    { detail: '$  git config --global user.name "xxx"' },
    { detail: '$  git config --global user.email "xxx@qq.com"' }
  ]
}

const gitContent1: IListTemplate = {
  title: '查看配置',
  content: [
    { detail: '$  git config --global user.name' },
    { detail: '$  git config --global user.email' }
  ]
}

const gitContent2: IListTemplate = {
  title: '查询所有的配置',
  content: [{ detail: '$  git config --list' }]
}

const gitContent3: IListTemplate = {
  title: '初始化仓库',
  content: [
    { detail: '$  git init', notes: '初始化git' },
    { detail: '$  git clone <url>', notes: '克隆某个路径下代码' },
    { detail: '$  git status', notes: '查看代码提交状态' },
    { detail: '$  git add .', notes: '提交所有代码到暂存区' },
    { detail: '$  git commit -m "xxx"', notes: '添加到版本库' },
    { detail: '$  git log', notes: '查看提交记录' },
    { detail: '$  git log --oneline', notes: '一行显示提交记录' },
    {
      detail: '$  git log --all --grep = "homePage"',
      notes: '查询提交记录中包含"homePage"的记录'
    },
    { detail: '$  git log --author = "lihh"', notes: '获取某个提交者的日志' },
    { detail: '$  git diff', notes: '默认比较工作区以及暂存区代码' },
    {
      detail: '$  git reset HEAD <文件名>',
      notes: '根据文件名从缓存区进行撤销'
    },
    { detail: '$  git checkout <文件名>', notes: '从缓存区获取版本文件' },
    { detail: '$  git rm --cached <文件名>', notes: '将缓存区的文件删除' },
    { detail: '$  git reset --hard <版本号>', notes: '从版本库恢复某个版本' },
    { detail: '$  git reflog', notes: '查看历史版本' },
    { detail: '$  git remote add origin <url>', notes: '添加某个git地址' },
    { detail: '$  git push -u origin master', notes: '提交到代码到主分支' },
    {
      detail: '$  git rm --cached [file]',
      notes: '停止追踪指定文件, 但是文件保留在暂存区'
    },
    {
      detail: '$  git mv [name_before] [name_after]',
      notes: '改名文件 并且将这个改名放入暂存区'
    },
    {
      detail: '$  git push origin --delete [branch-name]',
      notes: '删除远程的分支'
    },
    {
      detail: '$  git commit -v "xxx"',
      notes: '提交时显示所有文件的diff信息'
    },
    {
      detail: '$  git checkout [commit] [file]',
      notes: '恢复某个commit的指定文件到暂存区和工作区'
    },
    {
      detail: '$  git checkout .',
      notes: '恢复暂存区的所有的文件到工作区'
    },
    {
      detail: '$  git reset [file]',
      notes: '重置暂存区的指定文件, 与上次commit保持一致，但是工作区保持不变'
    },
    {
      detail: '$  git reset --hard',
      notes: '重置暂存区和工作区，与上次的commit保持一致'
    },
    {
      detail: '$  git reset [commit]',
      notes: '重置当前分支的指针为指定的commit，同时重置暂存区，但是工作区不变'
    }
  ]
}

const gitContent4: IListTemplate = {
  title: '分支管理',
  content: [
    { detail: '$  git branch', notes: '查看所有的分支' },
    { detail: '$  git branch <名称>', notes: '创建某个分支' },
    { detail: '$  git checkout <分支名称>', notes: '切换到某个分支' },
    { detail: '$  git checkout -b <分支名称>', notes: '直接创建并切换分支' },
    { detail: '$  git branch -d <分支名称>', notes: '直接删除某个分支' },
    { detail: '$  git log --online --graph', notes: '显示提交过程' },
    { detail: '$  git stash', notes: '进行工作区的代码暂存' },
    { detail: '$  git stash pop', notes: '回退暂存区代码' },
    { detail: '$  git mege <分支名称>', notes: '合并指定分支到当前的分支' },
    {
      detail: '$  git rebase <分支名称>',
      notes: '进行分支合并, 不会出现分叉合并'
    },
    {
      detail: '$  git remote update origin --prune',
      notes: '将服务上分支更新到本地(--可能出现本地没有分支，但是服务上有)'
    },
    {
      detail: '$  git branch -r',
      notes: '列举出远程中所有的分支'
    },
    {
      detail: '$  git mv [name_before] [name_after]',
      notes: '改名文件 并且将这个改名放入暂存区'
    }
  ]
}

export { gitContent, gitContent1, gitContent2, gitContent3, gitContent4 }
