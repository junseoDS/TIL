import urllib.request

url_obj = urllib.request.urlopen('http://www.example.com:80')

print(url_obj) # Response? ??? ??? ?? ??? ?? 

print(url_obj.read().decode('utf-8'))