# git 기초

> 분산버전관리시스템 (DVCS)

## 0. 로컬 저장소(repository) 설정

```bash
$ git init
# 초기화
Initialized empty Git repository in C:/Users/User/Desktop/git/practice/.git/

```



## 기본 작업 흐름

> 모든 작업은 touch로 파일을 만드는 것으로 대체

1. add

```bash
$ git add . # . : 현재 디렉토리(하위 디렉토리 포함)
$ git add a.txt # 특정파일
$ git add my_folder / #특정폴더
$ git add a.txt b.txt c.txt # 복수의 파일
```

working directory의 변경사항을 staging area로 옮긴다

```bash
User (master #) practice
$ touch a.txt
User (master #) practice
$ git status
On branch master

No commits yet

#트레킹이 되고 있지 않는 파일들
#=> 새로 생성된 파일
Untracked files:
	# add 명령을 사용해
	# commit이 될 것에 포함시키기 위하여
	# => stage area	
  (use "git add <file>..." to include in what will be committed)

        a.txt

nothing added to commit but untracked files present (use "git add" to track)
User (master #) practice

```

* add 이후

```bash
User (master #) practice
$ git add .
User (master +) practice
$ git status
On branch master

No commits yet
#commit이 될 변경사항
#SA에 있는 애들

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

        new file:   a.txt


```



## commit

```bash
$ git commit -m "Fisrt commit"
[master (root-commit) 7bdd3ad] Fisrt commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 a.txt
```



* commit은 지금 상태를  스냅샷을 찍는다
* commit 메세지는 지금 기록하는 이력을 충분히 잘 나타낼 수 있도록 작성한다
* git log 명령어를 통해 지금까지 기록된 commit을 확인할 수 있다

## 기타 명령어



## 1. status

> 로컬 저장소의 상태

```bash
$ git status
```

## 2. log

> commit 히스토리

```bash
$ git log
commit 7bdd3ad34c4608156d0583abd2744fd4a7375626 (HEAD -> master)
Author: Wonyong Lee <wonyonglovek@gmail.com>
Date:   Tue Dec 29 14:18:15 2020 +0900

    Fisrt commit

```





