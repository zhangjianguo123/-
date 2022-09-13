 git log --pretty=oneline commit提交信息简化
        git reset --hard HEAD^ 回退上一个版本 HEAD^ || HEAD~100代表版本号
        git reflog查看命令历史，以便确定要回到未来的哪个版本
        git diff HEAD -- readme.txt命令可以查看工作区和版本库里面最新版本的区别