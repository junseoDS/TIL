# Django Survey Project

## Start Project

### Anaconda Prompt

```basic
(base) C:\Users\User\myJupyter>cd python-Django

(base) C:\Users\User\myJupyter\python-Django>django-admin startproject mysite

(base) C:\Users\User\myJupyter\python-Django>cd MyFirstWeb

(base) C:\Users\User\myJupyter\python-Django\MyFirstWeb>python manage.py startapp polls

```



### Pycharm Terminal

```basic
(base) C:\Users\User\myJupyter\python-Django\MyFirstWeb>python manage.py migrate
## 서버 시작
(base) C:\Users\User\myJupyter\python-Django\MyFirstWeb>python manage.py runserver
```

Admin 계정 만들기x

```basic
(base) C:\Users\User\myJupyter\python-Django\MyFirstWeb>python manage.py createsuperuser
Username (leave blank to use 'user'): godrnt9965
Email address: wonyonglovek@gmail.com
Password:
Password (again):
Superuser created successfully.
```





```basic
(base) C:\Users\User\myJupyter\python-Django\MyFirstWeb>python manage.py makemigrations
Migrations for 'polls':
  polls\migrations\0001_initial.py
    - Create model Question
    - Create model Choice

(base) C:\Users\User\myJupyter\python-Django\MyFirstWeb>python manage.py migrate
Operations to perform:
  Apply all migrations: admin, auth, contenttypes, polls, sessions
Running migrations:
  Applying polls.0001_initial... OK

```

