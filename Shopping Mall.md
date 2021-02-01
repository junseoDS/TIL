# Shopping Mall

## CMD로 프로젝트 시작



``` basic
(base) C:\Users\User\myJupyter\python-Django>django-admin startproject shoppingmall
```

같은 이름의 폴더 이름 변경 



### pycharm 열기

앱 만들기 - pycharm - Terminal 열기

```basic
(base) C:\Users\User\myJupyter\python-Django\MyShoppingMall>pyth
on manage.py startapp bbs

```



### setting.py

```python
ALLOWED_HOSTS = ['localhost','127.0.0.1']
INSTALLED_APPS = [
    'bbs.apps.BbsConfig'
]
TEMPLATES= 'DIRS': [os.path.join(BASE_DIR, 'templates')]
    # 아직 templates 생성 전이니 폴더를 생성한다
TIME_ZONE = 'Asia/Seoul'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR,'static')
]
	# 아직 static 생성 전이니 폴더를 생성한다
```



terminal - migrate

```basic
(base) C:\Users\User\myJupyter\python-Django\MyShoppingMall>pyth
on manage.py migrate


```

#### Admin 생성

``` basic
(base) C:\Users\User\myJupyter\python-Django\MyShoppingMall>pyth
on manage.py createsuperuser
Username (leave blank to use 'user'): godrnt9965
Email address: wonyonglovek@gmail.com
Password:
Password (again):
Superuser created successfully.

```

#### Server

```basic
(base) C:\Users\User\myJupyter\python-Django\MyShoppingMall>pyth
on manage.py runserver
Watching for file changes with StatReloader
Performing system checks...

System check identified no issues (0 silenced).
February 01, 2021 - 10:04:15
Django version 2.2.5, using settings 'shoppingmall.settings'
Starting development server at http://127.0.0.1:8000/
Quit the server with CTRL-BREAK.


```



### Model.py

```python
from django.db import models

# Create your models here.
# bbs_post라는 이름의 table로 Database 생성되요
class Post(models.Model):
    author = models.CharField('작성자', max_length=20)
    contents = models.CharField('글 내용', max_length=100)
    
```



### admin.py

```python
from django.contrib import admin
from bbs.models import Post

admin.site.register(Post)

```





### terminal

```basic
(base) C:\Users\User\myJupyter\python-Django\MyShoppingMall>pyth
on manage.py makemigrations
Migrations for 'bbs':
  bbs\migrations\0001_initial.py
    - Create model Post

```



#### shoppingmall/url.py

```python
from django.contrib import admin
from django.urls import path
from django.conf.urls import url

# url pattern 설정할 때 사용할 수 있는 함수가
# url(), path(), re_path()
# url() : 원조. 정규표현식을 포함해서 일반적인 설정이 가능
# url()이 불편해서 path()와 re_path()로 분리
# path()는 일반 문자열 형태로 url conf 할때
# re_path()는 정규표현식(regular expression)으로 url conf 할 때
# 정규포현식 = > [a-z]{3} => 영문자 소문자 1개 x 3
# ^(Carot) : 분자열의 시작,
# $ : 문자열의 끝

urlpatterns = [
    url(r'^$', 'view함수'),   # ''
    path('admin/', admin.site.urls),
]

```



statics에 여러 폴더 만들기 

css / js / img



### views.py

```python
from django.shortcuts import render
from bbs.models import Post


def p_list(request):
    posts = Post.objects.all().order_by('-id')
    return render(request, 'bbs.list.html',
                  {'post': posts})
```



### bbs/urls.py

``` python
from django.urls import path
from . import views


app_name = 'bbs'

urlpatterns = [
    path('list/', views.p_list, name='p_list')
]

```



