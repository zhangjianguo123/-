git log --pretty=oneline commit提交信息简化
git reset --hard HEAD^ 回退上一个版本 HEAD^ || HEAD~100代表版本号
git reflog查看命令历史，以便确定要回到未来的哪个版本
git diff HEAD -- readme.txt命令可以查看工作区和版本库里面最新版本的区别
git checkout -- readme.txt 撤销修改， 让当前版本回归到暂存区时的状态
git reset HEAD <file>可以把暂存区的修改撤销掉（unstage），重新放回工作区：然后再执行git checkout --再次撤销回到上上次
git checkout -- test.txt 也可用于本地文件误删除，然后从暂存区拉去下来
git remote add origin git@github.com:michaelliao/learngit.git 本地关联远程仓库
git push -u origin master 由于远程库是空的，我们第一次推送master分支时，加上了-u参数
git remote rm origin 取消关联远程仓库
git push origin master 标准推送远程
git log --graph --pretty=oneline --abbrev-commit 查看分支合并情况
git merge --no-ff -m "merge with no-ff" dev 合并分支时，加上--no-ff参数就可以用普通模式合并，合并后的历史有分支，能看出来曾经做过合并，而fast forward合并就看不出来曾经做过合并