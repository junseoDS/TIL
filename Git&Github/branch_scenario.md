### 상황 1. fast-foward

> fast-foward는 feature 브랜치 생성된 이후 master 브랜치에 변경 사항이 없는 상황

1. feature/test branch 생성 및 이동

   ```bash
   $ git branch feature/test
   User (master) Branch
   $ git branch
     feature/test
   * master
   $ git checkout feature/test
   Switched to branch 'feature/test'
   
   ```

   

2. 작업 완료 후 commit

   ```bash
   $ touch test.txt
   User (feature/test) Branch
   $ git add .
   User (feature/test +) Branch
   $ git commit -m "Add test"
   [feature/test ffbd1ea] Add test
    1 file changed, 0 insertions(+), 0 deletions(-)
    create mode 100644 test.txt
   User (feature/test) Branch
   
   ```
   
   


3. master 이동

   ```bash
   $ git checkout master
   Switched to branch 'master'
   ```
   
   


4. master에 병합

   ```bash
   $ git merge feature/test
   Updating 5ccc86c..ffbd1ea
   Fast-forward
    test.txt | 0
    1 file changed, 0 insertions(+), 0 deletions(-)
    create mode 100644 test.txt
   
   ```
   
   


5. 결과 -> fast-foward (단순히 HEAD를 이동)

   ```bash
   $ git log --oneline
   ffbd1ea (HEAD -> master, feature/test) Add test
   5ccc86c Add ReadMe
   User (master) Branch
   
   ```

   

6. branch 삭제

   

---

### 상황 2. merge commit

> 서로 다른 이력(commit)을 병합(merge)하는 과정에서 다른 파일이 수정되어 있는 상황
>
> git이 auto merging을 진행하고, commit이 발생된다.

1. feature/signout branch 생성 및 이동

   ```bash
   $ git checkout -b 'feature/data'
   Switched to a new branch 'feature/data'
   ```

   

2. 작업 완료 후 commit

   ```bash
   $ touch data.txt
   User (feature/data) Branch
   $ gid add .
   bash: gid: command not found
   User (feature/data) Branch
   $ git add .
   User (feature/data +) Branch
   $ git commit -m "Add data"
   [feature/data 50f3f85] Add data
    1 file changed, 0 insertions(+), 0 deletions(-)
    create mode 100644 data.txt
   User (feature/data) Branch
   $ git log --oneline
   50f3f85 (HEAD -> feature/data) Add data
   ffbd1ea (master, feature/test) Add test
   5ccc86c Add ReadMe
   
   ```

   

3. master 이동

   

4. *master에 추가 commit 이 발생시키기!!*

   * **다른 파일을 수정 혹은 생성하세요!**

   ```bash
   $ touch hotfix.txt
   User (master) Branch
   $ git add .
   User (master +) Branch
   $ git commit -m 'Add hotfix'
   [master 3e0062d] Add hotfix
    1 file changed, 0 insertions(+), 0 deletions(-)
    create mode 100644 hotfix.txt
   
   ```

   

5. master에 병합

   

6. 결과 -> 자동으로 *merge commit 발생*

   * vim 편집기 화면이 나타납니다.

   * 자동으로 작성된 커밋 메시지를 확인하고, `esc`를 누른 후 `:wq`를 입력하여 저장 및 종료를 합니다.
      * `w` : write
      * `q` : quit
      
   * 커밋이  확인 해봅시다.

      

      ```bash
      $ git log --oneline
      5e5604f (HEAD -> master) Merge branch 'feature/data'
      3e0062d Add hotfix
      50f3f85 (feature/data) Add data
      ffbd1ea (feature/test) Add test
      5ccc86c Add ReadMe
      
      ```

   

7. 그래프 확인하기

   ```bash
   $ git log --oneline --graph
   *   5e5604f (HEAD -> master) Merge branch 'feature/data'
   |\
   | * 50f3f85 (feature/data) Add data
   * | 3e0062d Add hotfix
   |/
   * ffbd1ea (feature/test) Add test
   * 5ccc86c Add ReadMe
   
   ```

   

8. branch 삭제

   

---

### 상황 3. merge commit 충돌

> 서로 다른 이력(commit)을 병합(merge)하는 과정에서 동일 파일이 수정되어 있는 상황
>
> git이 auto merging을 하지 못하고, 해당 파일의 위치에 라벨링을 해준다.
>
> 원하는 형태의 코드로 직접 수정을 하고 merge commit을 발생 시켜야 한다.

1. feature/board branch 생성 및 이동

   

2. 작업 완료 후 commit

   


3. master 이동

   


4. *master에 추가 commit 이 발생시키기!!*

   * **동일 파일을 수정 혹은 생성하세요!**
   

   
5. master에 병합

   


6. 결과 -> *merge conflict발생*

   


7. 충돌 확인 및 해결

   


8. merge commit 진행

    ```bash
    $ git commit
    ```

   * vim 편집기 화면이 나타납니다.
   
   * 자동으로 작성된 커밋 메시지를 확인하고, `esc`를 누른 후 `:wq`를 입력하여 저장 및 종료를 합니다.
      * `w` : write
      * `q` : quit
      
   * 커밋이  확인 해봅시다.
   
9. 그래프 확인하기

    


10. branch 삭제

    
