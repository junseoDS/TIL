# K-Digital 프로젝트형 AI 서비스 개발

## 인터페이스 개발 / 인터페이스 프로젝트

### Python 프로그래밍

#### Python 개요

1990년 만들어진 프로그래밍 언어



특징

1. 러닝커브가 얕다.

2. 무료 / 간결

3. 교육용으로 시작하다 보니 코드의 가독성이 높다

4. 다양한 분야에 이용할 수 있다

   웹프로그래밍, DB프로그래밍, 데이터분석, AI

   Mobile App을 만들기엔 적합하지 않다.

   시스템 프로그래밍도 안된다.



개발환경 설정

일반적인 개발환경 (일반 python 프로그래밍, 웹 프로그래밍)

=> 파이참이라는 IDE를 이용

=> 주피터 노트북이라는 웹 IDE 이용

기본적으로 파이썬은 2.xx버전과 3.xx버전으로 나뉜다

가장 최신버전 : 3.8

수업에 사용할 버전 : 3.7

=> Tensorflow 이용	



Anaconda 패키지 설치

1. 아나콘다를 다운로드 후 설치

2. 아나콘다는 무료로 사용가능하고 Python과 다수의 유용한 package 제공

3. 아나콘다 설치 후, Anaconda prompt 관리자 권한 실행

4. pip를 최신 버전으로 upgrade

   ```bash
   python -m pip install --upgrade pip
   ```

5. conda 가상환경을 하나 생성해요!

   ```bash
   conda create -n data_env python=3.7 openssl
   
   conda info --envs
   ```

6. 생성된 가상환경으로 전환

   ```bash
   conda activate data_env
   ```

7. nb_conda라는 package 설치

   ```bash
   conda install nb_conda
   ```

8. jupyter notebook이라는 웹 기반의 개발툴을 이용

   코드작업을 하기 위해 새 파일을 생성하면 이 파일이 이상한데 들어감

   우리가 만든 파일이 우리가 원하는 폴더 안에 저장되도록 jupyter notebook 홈 디렉토리 설정

   ```bash
   jupyter notebook --generate-config
   ```

   홈 디렉토리 설정

   jupyter notebook 실행

   ```bash
   conda install nb_conda
   ```

   